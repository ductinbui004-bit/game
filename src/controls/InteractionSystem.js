// InteractionSystem.js - Central raycasting, dynamic crosshair hints, harvesting, cooking, fishing, and combat
import * as THREE from 'three';

export class InteractionSystem {
  constructor(camera, islandWorld, foliageManager, wildlifeManager, structuresManager, gameState, soundManager) {
    this.camera = camera;
    this.islandWorld = islandWorld;
    this.foliageManager = foliageManager;
    this.wildlifeManager = wildlifeManager;
    this.structuresManager = structuresManager;
    this.gameState = gameState;
    this.soundManager = soundManager;

    this.raycaster = new THREE.Raycaster();
    this.raycaster.far = 5.6; // Generous interactive distance in meters

    this.currentTarget = null;
    this.targetData = null;

    // UI elements
    this.hintEl = document.getElementById('crosshair-hint');
    this.crosshairEl = document.getElementById('crosshair');
    this.mobileActionBtn = document.getElementById('btn-action-primary');
    this.mobileActionLabel = document.getElementById('mobile-action-label');
    this.mobileActionIcon = document.getElementById('mobile-action-icon');
  }

  // Find root object with userData
  findInteractiveRoot(obj) {
    let curr = obj;
    while (curr) {
      if (curr.userData && curr.userData.type) {
        return curr;
      }
      curr = curr.parent;
    }
    return null;
  }

  // --- Raycast every frame to update dynamic crosshair & action buttons ---
  update(player) {
    // Cast ray from center of screen (0, 0) in NDC
    this.raycaster.setFromCamera(new THREE.Vector2(0, 0), this.camera);

    const candidates = [
      ...this.foliageManager.interactiveObjects,
      ...this.wildlifeManager.interactiveEntities,
      ...this.structuresManager.interactiveStructures
    ];
    if (this.islandWorld.freshwaterPool) {
      candidates.push(this.islandWorld.freshwaterPool);
    }

    const intersects = this.raycaster.intersectObjects(candidates, true);

    if (intersects.length > 0) {
      const hit = intersects[0];
      const root = this.findInteractiveRoot(hit.object);

      if (root && root.userData) {
        this.currentTarget = root;
        this.targetData = root.userData;
        this.updateHintUI(this.targetData, player);
        return;
      }
    }

    // No target in view
    this.currentTarget = null;
    this.targetData = null;
    this.resetHintUI();
  }

  updateHintUI(data, player) {
    if (this.crosshairEl) this.crosshairEl.classList.add('targeted');
    if (this.mobileActionBtn) this.mobileActionBtn.classList.add('targeted');

    let hint = data.hint || data.name || '';
    let icon = '👊';
    let btnText = 'HÀNH ĐỘNG';

    if (data.type === 'tree') {
      icon = '🪓';
      btnText = 'CHẶT CÂY';
    } else if (data.type === 'rock') {
      icon = '⛏️';
      btnText = 'ĐẬP ĐÁ';
    } else if (data.type === 'pickup') {
      icon = '✋';
      btnText = 'NHẶT ĐỒ';
    } else if (data.type === 'freshwater_pool') {
      icon = '💧';
      btnText = 'UỐNG NƯỚC';
    } else if (data.type === 'fish_school') {
      icon = '🐟';
      btnText = 'BẮT CÁ';
      hint = '[E/Click] Phóng Lao / Bắt Cá | [F] Câu Cá';
    } else if (data.category === 'foliage') {
      if (data.type === 'fern') { icon = '🌿'; btnText = 'CHẶT DƯƠNG XỈ'; }
      else if (data.type === 'bush') { icon = '🌳'; btnText = 'CHẶT BỤI CÂY'; }
      else if (data.type === 'flower') { icon = '🌺'; btnText = 'HÁI HOA'; }
      else if (data.type === 'mushroom') { icon = '🍄'; btnText = 'HÁI NẤM'; }
      else if (data.type === 'coral') { icon = '🪸'; btnText = 'ĐẬP SAN HÔ'; }
      else if (data.type === 'seaweed') { icon = '🥗'; btnText = 'CẮT RONG BIỂN'; }
      else { icon = '🌿'; btnText = 'THU HOẠCH'; }
    } else if (data.category === 'wildlife' || data.type === 'boar' || data.type === 'shark') {
      icon = data.icon || '⚔️';
      btnText = 'TẤN CÔNG';
    } else if (data.type === 'chest') {
      icon = '📦';
      btnText = 'LỤC RƯƠNG';
    } else if (data.type === 'campfire') {
      const hasRawMeat = this.gameState.getItemCount('raw_meat') > 0;
      const hasRawFish = this.gameState.getItemCount('raw_fish') > 0;
      if (hasRawMeat || hasRawFish) {
        hint = '[E] Nướng Thịt / Nướng Cá Chín';
        icon = '🥩';
        btnText = 'NẤU NƯỚNG';
      } else {
        hint = '[E] Sưởi Ấm Bên Lửa Trại';
        icon = '🔥';
        btnText = 'SƯỞI ẤM';
      }
    } else if (data.type === 'shelter') {
      icon = '🛖';
      btnText = 'ĐI NGỦ';
    } else if (data.type === 'workbench') {
      icon = '🛠️';
      btnText = 'CHẾ TẠO';
    } else if (data.type === 'beacon') {
      icon = '🗼';
      btnText = 'THẮP SÁNG';
    }

    if (this.hintEl) {
      this.hintEl.innerText = hint;
      this.hintEl.style.display = 'block';
    }
    if (this.mobileActionLabel) this.mobileActionLabel.innerText = btnText;
    if (this.mobileActionIcon) this.mobileActionIcon.innerText = icon;
  }

  resetHintUI() {
    if (this.crosshairEl) this.crosshairEl.classList.remove('targeted');
    if (this.mobileActionBtn) this.mobileActionBtn.classList.remove('targeted');
    if (this.hintEl) this.hintEl.style.display = 'none';
    if (this.mobileActionLabel) this.mobileActionLabel.innerText = 'TƯƠNG TÁC';
    if (this.mobileActionIcon) this.mobileActionIcon.innerText = '👊';
  }

  // --- Perform Action / Interact [E] / Click ---
  handleInteract(player, onVictoryTrigger) {
    player.triggerSwing();

    // Consume stamina for swing
    if (this.gameState.player.stamina < 5) {
      this.gameState.notify('toast', { text: '⚡ Bạn đang kiệt sức! Hãy nghỉ ngơi để hồi thể lực.', type: 'warn' });
      return;
    }
    this.gameState.player.stamina = Math.max(0, this.gameState.player.stamina - 4);

    const activeItem = this.gameState.getActiveItem();
    const activeDef = this.gameState.getActiveItemDef();

    // Determine damage based on held weapon
    let damage = 20; // Bare fists
    if (activeDef) {
      if (activeDef.id === 'pickaxe') damage = 45;
      else if (activeDef.id === 'axe') damage = 35;
      else if (activeDef.id === 'spear') damage = 50;
    }

    if (!this.targetData) {
      this.soundManager.playSwing();
      return;
    }

    const data = this.targetData;

    // 1. Harvest Palm Tree
    if (data.type === 'tree') {
      this.soundManager.playChop();
      const chopDamage = activeDef && activeDef.id === 'axe' ? 40 : 20;
      const destroyed = this.foliageManager.damageTree(data, chopDamage);
      if (destroyed) {
        this.gameState.stats.treesChopped += 1;
        this.gameState.notify('toast', { text: '🌴 Cây cọ đổ xuống! Gỗ và lá đã rơi ra.', type: 'info' });
        this.currentTarget = null;
        this.targetData = null;
        this.resetHintUI();
      }
    }
    // 2. Mine Rock
    else if (data.type === 'rock') {
      this.soundManager.playMine();
      const mineDamage = activeDef && activeDef.id === 'pickaxe' ? 55 : (activeDef && activeDef.id === 'axe' ? 40 : 25);
      const destroyed = this.foliageManager.damageRock(data, mineDamage);
      if (destroyed) {
        this.gameState.notify('toast', { text: '🪨 Mỏm đá vỡ vụn! Bạn nhận được đá thô.', type: 'info' });
        this.currentTarget = null;
        this.targetData = null;
        this.resetHintUI();
      }
    }
    // 3. Ground Pickup
    else if (data.type === 'pickup') {
      const added = this.gameState.addItem(data.itemId, data.count || 1);
      if (added) {
        this.soundManager.playPickup();
        this.gameState.notify('toast', { text: `+${data.count || 1} ${data.name}`, type: 'success' });
        this.foliageManager.removePickup(data);
        this.currentTarget = null;
        this.targetData = null;
        this.resetHintUI();
      } else {
        this.gameState.notify('toast', { text: '🎒 Túi đồ đã đầy!', type: 'warn' });
      }
    }
    // 4. Drink Freshwater Pool
    else if (data.type === 'freshwater_pool') {
      this.soundManager.playDrink();
      this.gameState.drinkFreshwater();
      this.gameState.notify('toast', { text: '💧 Đã uống nước suối mát lạnh (+40 Nước)', type: 'info' });
    }
    // 5. Attack & Harvest Any Foliage (Ferns, Bushes, Flowers, Mushrooms, Corals, Seaweeds)
    else if (data.category === 'foliage') {
      if (data.type === 'coral') {
        this.soundManager.playMine();
      } else if (data.type === 'fern' || data.type === 'bush') {
        this.soundManager.playChop();
      } else {
        this.soundManager.playPickup();
      }

      const res = this.foliageManager.damageFoliage(data, damage);
      if (res && res.destroyed) {
        this.gameState.notify('toast', { text: `🌿 Đã thu hoạch thành công: ${data.name}!`, type: 'success' });
        this.currentTarget = null;
        this.targetData = null;
        this.resetHintUI();
      }
    }
    // 6. Attack Fish School (Harpoon / Spear Fishing)
    else if (data.type === 'fish_school') {
      this.soundManager.playSplash();
      this.soundManager.playFishBite();
      this.gameState.addItem('raw_fish', 1);
      this.gameState.stats.fishCaught += 1;
      this.gameState.stats.animalsHunted += 1;
      this.gameState.notify('toast', { text: '🐟 Phóng trúng cá! Nhận +1 Cá Tươi.', type: 'success' });
      // Fish school scatters in water
      data.orbitRadius += 2.5;
    }
    // 7. Attack Wildlife (Land or Sea)
    else if (data.category === 'wildlife' || data.type === 'boar' || data.type === 'shark') {
      const res = this.wildlifeManager.damageEntity(data, damage);
      if (res && res.killed) {
        this.gameState.stats.animalsHunted += 1;
        this.gameState.notify('toast', { text: `⚔️ Bạn đã hạ gục ${data.name}! Vật phẩm đã rơi ra.`, type: 'success' });
        this.currentTarget = null;
        this.targetData = null;
        this.resetHintUI();
      }
    }
    // 7. Open Shipwreck Chest
    else if (data.type === 'chest') {
      if (!data.isOpened) {
        data.isOpened = true;
        this.soundManager.playVictory();
        this.gameState.addItem('scrap_metal', 4);
        data.hint = 'Rương báu xác tàu đã mở';
        this.gameState.notify('toast', { text: '💎 Đã mở Rương Xác Tàu: Nhận +4 Sắt Vụn!', type: 'success' });
      } else {
        this.gameState.notify('toast', { text: 'Rương này đã được mở rồi.', type: 'info' });
      }
    }
    // 8. Cook at Campfire
    else if (data.type === 'campfire') {
      if (this.gameState.getItemCount('raw_meat') > 0) {
        this.gameState.removeItem('raw_meat', 1);
        this.gameState.addItem('cooked_meat', 1);
        this.soundManager.playEat();
        this.gameState.notify('toast', { text: '🍖 Nướng thành công: +1 Thịt Nướng thơm ngon!', type: 'success' });
      } else if (this.gameState.getItemCount('raw_fish') > 0) {
        this.gameState.removeItem('raw_fish', 1);
        this.gameState.addItem('cooked_fish', 1);
        this.soundManager.playEat();
        this.gameState.notify('toast', { text: '🍱 Nướng thành công: +1 Cá Nướng béo ngậy!', type: 'success' });
      } else {
        this.gameState.player.isWarm = true;
        this.gameState.notify('toast', { text: '🔥 Ngọn lửa trại ấm áp sưởi ấm cơ thể bạn.', type: 'info' });
      }
    }
    // 9. Sleep at Shelter
    else if (data.type === 'shelter') {
      this.gameState.sleep();
      this.gameState.player.respawnPos = { x: player.position.x, y: player.position.y, z: player.position.z };
      this.gameState.notify('toast', { text: '🛖 Đã ngủ qua đêm đến bình minh 06:00! Máu và thể lực đã hồi phục.', type: 'success' });
    }
    // 10. Open Workbench
    else if (data.type === 'workbench') {
      this.gameState.isNearWorkbench = true;
      this.gameState.notify('openWorkbench');
    }
    // 11. Light Rescue Beacon
    else if (data.type === 'beacon') {
      const hasTorch = this.gameState.getItemCount('torch') > 0 || (activeDef && activeDef.id === 'torch');
      if (hasTorch) {
        this.structuresManager.igniteBeacon(data);
        this.gameState.updateQuestObjective('ignite_beacon', 'ignited', 1);
        this.gameState.notify('toast', { text: '🗼 ĐÀI HIỆU ĐÃ ĐƯỢC THẮP SÁNG! TÀU CỨU HỘ ĐANG TỚI!', type: 'success' });
        if (onVictoryTrigger) onVictoryTrigger();
      } else {
        this.gameState.notify('toast', { text: '🔥 Bạn cần cầm theo Đuốc Lửa để thắp sáng Đài Hiệu!', type: 'warn' });
      }
    }
  }

  // --- Fishing Action [F] ---
  handleFishing(player) {
    const activeDef = this.gameState.getActiveItemDef();
    if (!activeDef || activeDef.id !== 'fishing_rod') {
      this.gameState.notify('toast', { text: '🎣 Bạn cần trang bị Cần Câu để câu cá!', type: 'warn' });
      return;
    }

    const tY = this.islandWorld.getHeightAt(player.position.x, player.position.z);
    const nearWater = tY < 0.6 || player.position.distanceTo(new THREE.Vector3(0, 1.45, 0)) < 12;

    if (!nearWater) {
      this.gameState.notify('toast', { text: '🌊 Bạn cần đứng sát mép biển hoặc suối nước ngọt để câu cá!', type: 'warn' });
      return;
    }

    player.triggerSwing();
    this.soundManager.playSplash();
    this.gameState.notify('toast', { text: '🎣 Đang thả mồi câu cá... Hãy kiên nhẫn...', type: 'info' });

    // Catch chance after 1.8s
    setTimeout(() => {
      this.soundManager.playFishBite();
      this.gameState.addItem('raw_fish', 1);
      this.gameState.stats.fishCaught += 1;
      this.gameState.notify('toast', { text: '🐟 Cắn câu rồi! Bạn đã bắt được 1 Con Cá Tươi!', type: 'success' });
    }, 1800);
  }
}
