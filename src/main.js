// main.js - Core Game Loop, UI Wiring, and 3D System Integration
import * as THREE from 'three';
import { soundManager } from './audio/SoundManager.js';
import { gameState, ITEM_DEFS, RECIPES } from './core/GameState.js';
import { StorageManager } from './core/Storage.js';
import { IslandWorld } from './world/IslandWorld.js';
import { FoliageManager } from './world/FoliageManager.js';
import { Player } from './entities/Player.js';
import { WildlifeManager } from './entities/WildlifeManager.js';
import { StructuresManager } from './entities/Structures.js';
import { InputManager } from './controls/InputManager.js';
import { InteractionSystem } from './controls/InteractionSystem.js';
import { Minimap } from './ui/Minimap.js';

class Game {
  constructor() {
    this.container = document.getElementById('canvas-container');
    this.clock = new THREE.Clock();

    this.isPlaying = false;
    this.isPaused = false;
    this.selectedInvSlot = null;

    // Cinematic Rescue Cutscene state
    this.isCutsceneActive = false;
    this.cutsceneTimer = 0;
    this.cutsceneVictoryPlayed = false;

    this.initThree();
    this.initSystems();
    this.initUI();
    this.initCharacterPreview();
    this.checkSavedGame();

    window.addEventListener('resize', () => this.onWindowResize());

    // Start render loop
    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  // --- Three.js Setup ---
  initThree() {
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.1,
      800
    );

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.1;

    this.container.appendChild(this.renderer.domElement);
  }

  // --- Systems Initialization ---
  initSystems() {
    this.islandWorld = new IslandWorld(this.scene);
    this.foliageManager = new FoliageManager(this.scene, this.islandWorld);
    this.structuresManager = new StructuresManager(this.scene, this.islandWorld, soundManager);
    this.wildlifeManager = new WildlifeManager(this.scene, this.islandWorld, this.foliageManager, soundManager);

    this.player = new Player(this.scene, this.camera, this.islandWorld, gameState.player.gender);
    // Snap player initial height to terrain
    this.player.position.copy(gameState.player.respawnPos);
    this.player.position.y = this.islandWorld.getHeightAt(this.player.position.x, this.player.position.z) + 0.1;

    this.interactionSystem = new InteractionSystem(
      this.camera,
      this.islandWorld,
      this.foliageManager,
      this.wildlifeManager,
      this.structuresManager,
      gameState,
      soundManager
    );

    this.inputManager = new InputManager(this.renderer.domElement, (action, payload) => {
      this.handleGameAction(action, payload);
    });

    // Minimap Radar
    const minimapCanvas = document.getElementById('minimap-canvas');
    if (minimapCanvas) {
      this.minimap = new Minimap(minimapCanvas, this.islandWorld);
    }

    // Auto-save timer (every 25 seconds)
    setInterval(() => {
      if (this.isPlaying && !this.isPaused && !this.isCutsceneActive) {
        StorageManager.saveGame(gameState, this.structuresManager.structures);
      }
    }, 25000);
  }

  // --- Action Dispatcher ---
  handleGameAction(action, payload) {
    if (!this.isPlaying || this.isCutsceneActive) return;

    if (action === 'interact' || action === 'attack') {
      soundManager.ensureContext();
      this.interactionSystem.handleInteract(this.player, () => this.startRescueCutscene());
    } else if (action === 'fish') {
      soundManager.ensureContext();
      this.interactionSystem.handleFishing(this.player);
    } else if (action === 'toggleInventory') {
      this.toggleInventory();
    } else if (action === 'toggleView') {
      this.player.toggleViewMode();
      this.showToast(`Góc nhìn: ${this.player.viewMode === 'first_person' ? 'Thứ nhất (1st)' : 'Thứ ba (3rd)'}`);
    } else if (action === 'toggleQuests') {
      this.toggleQuestsPanel();
    } else if (action === 'pause') {
      this.toggleSettingsModal();
    } else if (action === 'hotbarSelect') {
      gameState.setActiveHotbarIndex(payload);
    } else if (action === 'toast') {
      this.showToast(payload.text, payload.type);
    }
  }

  // --- 3D Character Preview on Start Screen ---
  initCharacterPreview() {
    const canvas = document.getElementById('char-preview-canvas');
    if (!canvas) return;

    const w = canvas.clientWidth || 180;
    const h = canvas.clientHeight || 220;

    this.previewScene = new THREE.Scene();
    this.previewCamera = new THREE.PerspectiveCamera(48, w / h, 0.1, 50);
    this.previewCamera.position.set(0, 1.25, 2.7);
    this.previewCamera.lookAt(0, 0.95, 0);

    this.previewRenderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    this.previewRenderer.setSize(w, h, false);
    this.previewRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const pLight = new THREE.DirectionalLight(0xfffaed, 1.4);
    pLight.position.set(2, 3, 2);
    this.previewScene.add(pLight);

    const aLight = new THREE.AmbientLight(0xdff0ff, 0.7);
    this.previewScene.add(aLight);

    // Warm pedestal light
    const floorLight = new THREE.PointLight(0xf59e0b, 1.2, 5);
    floorLight.position.set(0, 0.1, 0.8);
    this.previewScene.add(floorLight);

    // Stone disc pedestal
    const daisGeo = new THREE.CylinderGeometry(0.85, 0.95, 0.18, 16);
    const daisMat = new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.9, flatShading: true });
    const dais = new THREE.Mesh(daisGeo, daisMat);
    dais.position.set(0, -0.09, 0);
    this.previewScene.add(dais);

    this.previewPlayer = new Player(this.previewScene, this.previewCamera, this.islandWorld, gameState.player.gender);
    this.previewPlayer.viewMode = 'third_person';
    this.previewPlayer.updateViewMode();
    this.previewPlayer.position.set(0, 0, 0);
  }

  updateCharacterPreview(dt) {
    if (this.previewPlayer && this.previewRenderer) {
      this.previewPlayer.modelGroup.rotation.y += dt * 0.8;
      // Idle breathing
      if (this.previewPlayer.bones.pelvis) {
        this.previewPlayer.bones.pelvis.position.y = 0.95 + Math.sin(Date.now() * 0.003) * 0.02;
      }
      this.previewRenderer.render(this.previewScene, this.previewCamera);
    }
  }

  // --- UI Event Handlers & Layout Wiring ---
  initUI() {
    // Gender buttons
    const maleBtn = document.getElementById('gender-male-btn');
    const femaleBtn = document.getElementById('gender-female-btn');

    maleBtn?.addEventListener('click', () => {
      maleBtn.classList.add('active');
      femaleBtn.classList.remove('active');
      gameState.player.gender = 'male';
      this.player.setGender('male');
      this.previewPlayer?.setGender('male');
    });

    femaleBtn?.addEventListener('click', () => {
      femaleBtn.classList.add('active');
      maleBtn.classList.remove('active');
      gameState.player.gender = 'female';
      this.player.setGender('female');
      this.previewPlayer?.setGender('female');
    });

    // Start / Continue buttons
    document.getElementById('btn-start-game')?.addEventListener('click', () => {
      this.startGame(false);
    });

    document.getElementById('btn-continue-game')?.addEventListener('click', () => {
      this.startGame(true);
    });

    // Quests toggle
    document.getElementById('quests-header')?.addEventListener('click', () => {
      this.toggleQuestsPanel();
    });

    // Modal close buttons
    document.getElementById('btn-close-inventory')?.addEventListener('click', () => {
      this.toggleInventory(false);
    });

    document.getElementById('btn-close-settings')?.addEventListener('click', () => {
      this.toggleSettingsModal(false);
    });

    document.getElementById('btn-open-settings')?.addEventListener('click', () => {
      this.toggleSettingsModal(true);
    });

    document.getElementById('btn-resume-game')?.addEventListener('click', () => {
      this.toggleSettingsModal(false);
    });

    document.getElementById('btn-save-quit')?.addEventListener('click', () => {
      StorageManager.saveGame(gameState, this.structuresManager.structures);
      location.reload();
    });

    // Cutscene skip button
    document.getElementById('btn-skip-cutscene')?.addEventListener('click', () => {
      this.endRescueCutscene();
    });

    // Inventory tabs
    const tabBackpack = document.getElementById('tab-backpack');
    const tabCrafting = document.getElementById('tab-crafting');
    const viewBackpack = document.getElementById('view-backpack');
    const viewCrafting = document.getElementById('view-crafting');

    tabBackpack?.addEventListener('click', () => {
      tabBackpack.classList.add('active');
      tabCrafting.classList.remove('active');
      viewBackpack.style.display = 'grid';
      viewCrafting.style.display = 'none';
      this.renderInventory();
    });

    tabCrafting?.addEventListener('click', () => {
      tabCrafting.classList.add('active');
      tabBackpack.classList.remove('active');
      viewBackpack.style.display = 'none';
      viewCrafting.style.display = 'grid';
      this.renderCrafting();
    });

    // Use / Build item button
    document.getElementById('btn-item-use')?.addEventListener('click', () => {
      if (this.selectedInvSlot !== null) {
        const used = gameState.useSlot(this.selectedInvSlot);
        if (used) {
          soundManager.playEat();
          this.renderInventory();
          this.updateItemDetail(this.selectedInvSlot);
        }
      }
    });

    document.getElementById('btn-item-build')?.addEventListener('click', () => {
      if (this.selectedInvSlot !== null) {
        this.buildHeldStructure(this.selectedInvSlot);
      }
    });

    // Respawn button
    document.getElementById('btn-respawn')?.addEventListener('click', () => {
      this.respawnPlayer();
    });

    // Victory screen buttons
    document.getElementById('btn-continue-freeplay')?.addEventListener('click', () => {
      document.getElementById('screen-victory').style.display = 'none';
      this.isPaused = false;
      document.getElementById('hud-overlay').style.display = 'flex';
    });

    document.getElementById('btn-restart-game')?.addEventListener('click', () => {
      StorageManager.clearSave();
      location.reload();
    });

    // Settings listeners
    this.bindSettingsControls();

    // GameState event subscriptions
    gameState.subscribe((event, payload) => {
      if (event === 'hotbarChange') {
        this.player.setEquippedItem(gameState.getActiveItemDef());
        this.renderHotbar();
      } else if (event === 'inventoryUpdate') {
        this.renderHotbar();
        this.renderInventory();
        this.renderCrafting();
      } else if (event === 'toast') {
        this.showToast(payload.text, payload.type);
      } else if (event === 'questCompleted') {
        this.showToast(`⭐ HOÀN THÀNH NHIỆM VỤ: ${payload.title}!`, 'success');
        soundManager.playCraft();
        this.renderQuests();
      } else if (event === 'questUpdated') {
        this.renderQuests();
      } else if (event === 'newDay') {
        this.showToast(`🌅 Bình minh Ngày ${payload}! Một ngày sinh tồn mới bắt đầu.`, 'info');
      } else if (event === 'openWorkbench') {
        this.toggleInventory(true);
        tabCrafting.click();
      }
    });

    this.renderHotbar();
    this.renderQuests();
  }

  bindSettingsControls() {
    const sGraphics = document.getElementById('setting-graphics');
    const sControlMode = document.getElementById('setting-control-mode');
    const sMaster = document.getElementById('setting-vol-master');
    const sSfx = document.getElementById('setting-vol-sfx');
    const sAmbient = document.getElementById('setting-vol-ambient');
    const sSensMouse = document.getElementById('setting-sens-mouse');
    const sSensTouch = document.getElementById('setting-sens-touch');

    sGraphics?.addEventListener('change', (e) => {
      const mode = e.target.value;
      if (mode === 'low') {
        this.renderer.setPixelRatio(1.0);
        this.renderer.shadowMap.enabled = false;
      } else if (mode === 'balanced') {
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.25));
        this.renderer.shadowMap.enabled = true;
      } else {
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
        this.renderer.shadowMap.enabled = true;
      }
    });

    sControlMode?.addEventListener('change', (e) => {
      this.inputManager.setControlMode(e.target.value);
    });

    sMaster?.addEventListener('input', (e) => {
      soundManager.setMasterVolume(e.target.value / 100);
    });

    sSfx?.addEventListener('input', (e) => {
      soundManager.setSfxVolume(e.target.value / 100);
    });

    sAmbient?.addEventListener('input', (e) => {
      soundManager.setAmbientVolume(e.target.value / 100);
    });

    sSensMouse?.addEventListener('input', (e) => {
      this.inputManager.mouseSensitivity = (e.target.value / 10) * 0.0022;
    });

    sSensTouch?.addEventListener('input', (e) => {
      this.inputManager.touchSensitivity = (e.target.value / 10) * 0.0035;
    });
  }

  checkSavedGame() {
    if (StorageManager.hasSave()) {
      const btnCont = document.getElementById('btn-continue-game');
      if (btnCont) btnCont.style.display = 'inline-block';
    }
  }

  // --- Start / Resume Game ---
  startGame(loadSave = false) {
    soundManager.init();

    if (loadSave) {
      const structs = StorageManager.loadGame(gameState);
      if (structs && structs.length > 0) {
        structs.forEach(s => {
          this.structuresManager.buildStructure(s.type, new THREE.Vector3(s.x, s.y, s.z), s.rotationY);
        });
      }
      this.player.position.set(gameState.player.currentPos.x, gameState.player.currentPos.y, gameState.player.currentPos.z);
    }

    document.getElementById('screen-start').style.display = 'none';
    document.getElementById('hud-overlay').style.display = 'flex';

    this.isPlaying = true;
    this.isPaused = false;
    this.player.setEquippedItem(gameState.getActiveItemDef());
    this.showToast('🏝️ Chào mừng đến với Kỷ Nguyên Đồ Đá! Hãy bắt đầu nhặt cành gỗ và đá cuội.', 'info');
  }

  // --- Structure Building ---
  buildHeldStructure(slotIndex) {
    const slot = gameState.inventory[slotIndex];
    if (!slot) return;
    const def = ITEM_DEFS[slot.id];
    if (!def || def.type !== 'buildable') return;

    // Place 2.5m in front of player
    const forward = new THREE.Vector3(0, 0, -1).applyAxisAngle(new THREE.Vector3(0, 1, 0), this.player.rotationY);
    const buildPos = this.player.position.clone().addScaledVector(forward, 2.5);
    buildPos.y = this.islandWorld.getHeightAt(buildPos.x, buildPos.z);

    if (buildPos.y < 0.2) {
      this.showToast('⚠️ Bạn không thể xây dựng công trình dưới biển!', 'warn');
      return;
    }

    const struct = this.structuresManager.buildStructure(def.buildType, buildPos, this.player.rotationY);
    if (struct) {
      gameState.removeItem(slot.id, 1);
      gameState.stats.structuresBuilt += 1;

      if (def.buildType === 'campfire') gameState.updateQuestObjective('build_base', 'campfire', 1);
      if (def.buildType === 'shelter') gameState.updateQuestObjective('build_base', 'shelter', 1);

      this.showToast(`Đã xây dựng thành công: ${def.name}!`, 'success');
      this.toggleInventory(false);
      StorageManager.saveGame(gameState, this.structuresManager.structures);
    }
  }

  // --- Inventory & Crafting UI Rendering ---
  toggleInventory(forceState) {
    const modal = document.getElementById('modal-inventory');
    const isVisible = modal.style.display !== 'none';
    const newState = forceState !== undefined ? forceState : !isVisible;

    modal.style.display = newState ? 'flex' : 'none';
    this.isPaused = newState;

    if (newState) {
      if (document.exitPointerLock) document.exitPointerLock();
      this.renderInventory();
      this.renderCrafting();
    }
  }

  toggleQuestsPanel() {
    const panel = document.getElementById('quests-container');
    const icon = document.getElementById('quests-toggle-icon');
    if (panel) {
      panel.classList.toggle('collapsed');
      if (icon) icon.innerText = panel.classList.contains('collapsed') ? '▼' : '▲';
    }
  }

  toggleSettingsModal(forceState) {
    const modal = document.getElementById('modal-settings');
    const isVisible = modal.style.display !== 'none';
    const newState = forceState !== undefined ? forceState : !isVisible;

    modal.style.display = newState ? 'flex' : 'none';
    this.isPaused = newState;
  }

  renderHotbar() {
    const container = document.getElementById('hotbar');
    if (!container) return;
    container.innerHTML = '';

    for (let i = 0; i < 6; i++) {
      const slot = gameState.inventory[i];
      const def = slot ? ITEM_DEFS[slot.id] : null;

      const slotEl = document.createElement('div');
      slotEl.className = `hotbar-slot ${i === gameState.activeHotbarIndex ? 'active' : ''}`;
      slotEl.innerHTML = `
        <span class="slot-key">${i + 1}</span>
        <span class="slot-icon">${def ? def.icon : ''}</span>
        ${slot && slot.count > 1 ? `<span class="slot-count">${slot.count}</span>` : ''}
      `;

      slotEl.addEventListener('click', () => {
        gameState.setActiveHotbarIndex(i);
      });

      container.appendChild(slotEl);
    }
  }

  renderInventory() {
    const hotbarGrid = document.getElementById('inv-grid-hotbar');
    const backpackGrid = document.getElementById('inv-grid-backpack');
    if (!hotbarGrid || !backpackGrid) return;

    hotbarGrid.innerHTML = '';
    backpackGrid.innerHTML = '';

    for (let i = 0; i < 24; i++) {
      const slot = gameState.inventory[i];
      const def = slot ? ITEM_DEFS[slot.id] : null;

      const slotEl = document.createElement('div');
      slotEl.className = `hotbar-slot ${this.selectedInvSlot === i ? 'active' : ''}`;
      slotEl.innerHTML = `
        <span class="slot-icon">${def ? def.icon : ''}</span>
        ${slot && slot.count > 1 ? `<span class="slot-count">${slot.count}</span>` : ''}
      `;

      slotEl.addEventListener('click', () => {
        this.selectedInvSlot = i;
        this.renderInventory();
        this.updateItemDetail(i);
      });

      if (i < 6) {
        hotbarGrid.appendChild(slotEl);
      } else {
        backpackGrid.appendChild(slotEl);
      }
    }
  }

  updateItemDetail(slotIndex) {
    const slot = gameState.inventory[slotIndex];
    const def = slot ? ITEM_DEFS[slot.id] : null;

    const iconEl = document.getElementById('item-detail-icon');
    const nameEl = document.getElementById('item-detail-name');
    const descEl = document.getElementById('item-detail-desc');
    const btnUse = document.getElementById('btn-item-use');
    const btnBuild = document.getElementById('btn-item-build');

    if (!def) {
      iconEl.innerText = '🎒';
      nameEl.innerText = 'Ô Trống';
      descEl.innerText = 'Không có vật phẩm nào trong ô này.';
      btnUse.disabled = true;
      btnBuild.style.display = 'none';
      return;
    }

    iconEl.innerText = def.icon;
    nameEl.innerText = `${def.name} ${slot.count > 1 ? `(x${slot.count})` : ''}`;
    descEl.innerText = def.description;

    if (def.consumable) {
      btnUse.disabled = false;
      btnUse.style.display = 'block';
      btnUse.innerText = 'SỬ DỤNG / ĂN';
      btnBuild.style.display = 'none';
    } else if (def.type === 'buildable') {
      btnUse.style.display = 'none';
      btnBuild.style.display = 'block';
    } else {
      btnUse.disabled = true;
      btnUse.style.display = 'block';
      btnUse.innerText = 'ĐÃ TRANG BỊ';
      btnBuild.style.display = 'none';
    }
  }

  renderCrafting() {
    const list = document.getElementById('crafting-recipe-list');
    if (!list) return;
    list.innerHTML = '';

    RECIPES.forEach(recipe => {
      const def = ITEM_DEFS[recipe.resultId];
      const canCraft = gameState.canCraft(recipe);

      let reqsText = Object.entries(recipe.req)
        .map(([id, count]) => `${ITEM_DEFS[id]?.name || id}: ${gameState.getItemCount(id)}/${count}`)
        .join(' | ');

      const reqWorkbenchText = recipe.requiresWorkbench
        ? (gameState.isNearWorkbench ? ' • <span style="color:#10b981;">(Đã ở gần Bàn Cơ Khí)</span>' : ' • <span style="color:#f87171;">(Cần Bàn Cơ Khí)</span>')
        : '';

      const itemEl = document.createElement('div');
      itemEl.className = `recipe-item ${canCraft ? '' : 'disabled'}`;
      itemEl.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
          <span style="font-size: 24px;">${def?.icon || '🔨'}</span>
          <div>
            <div style="font-weight: 700; font-size: 13px;">${def?.name || recipe.resultId}</div>
            <div style="font-size: 11px; color: #94a3b8;">${reqsText}${reqWorkbenchText}</div>
          </div>
        </div>
        <button class="recipe-btn" ${canCraft ? '' : 'disabled'}>Chế tạo</button>
      `;

      itemEl.querySelector('button')?.addEventListener('click', (e) => {
        e.stopPropagation();
        const success = gameState.craft(recipe);
        if (success) {
          soundManager.playCraft();
          this.showToast(`Đã chế tạo thành công: ${def.name}!`, 'success');
          this.renderCrafting();
          this.renderInventory();
        }
      });

      list.appendChild(itemEl);
    });
  }

  renderQuests() {
    const list = document.getElementById('quest-list');
    if (!list) return;
    list.innerHTML = '';

    gameState.quests.forEach(q => {
      const item = document.createElement('div');
      item.className = `quest-item ${q.completed ? 'completed' : ''}`;
      item.innerHTML = `
        <span class="quest-check">${q.completed ? '✅' : '⬜'}</span>
        <div>
          <div style="font-weight: 700;">${q.title}</div>
          <div style="font-size: 11px; opacity: 0.85;">${q.desc}</div>
        </div>
      `;
      list.appendChild(item);
    });
  }

  // --- Dynamic HUD Updates ---
  updateHUD() {
    // 1. Compass & Distance to Shipwreck (120, -1.2, -95)
    const compassEl = document.getElementById('compass-tape');
    const shipDistEl = document.getElementById('shipwreck-dist-text');

    const yawDeg = THREE.MathUtils.radToDeg(this.player.rotationY) % 360;
    const normYaw = (yawDeg + 360) % 360;

    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    const dirIdx = Math.round(normYaw / 45) % 8;
    if (compassEl) {
      compassEl.innerText = `• • ${directions[dirIdx]} • • (${Math.round(normYaw)}°)`;
    }

    const distToShip = Math.round(this.player.position.distanceTo(new THREE.Vector3(120, -1.2, -95)));
    if (shipDistEl) {
      shipDistEl.innerText = `${distToShip}m`;
    }

    // 2. Day & Clock
    const dayBadge = document.getElementById('day-badge');
    const timeBadge = document.getElementById('time-badge');

    const totalHours = gameState.dayTime * 24;
    const hours = Math.floor(totalHours);
    const minutes = Math.floor((totalHours - hours) * 60);
    const isNight = gameState.dayTime > 0.75 || gameState.dayTime < 0.25;

    if (dayBadge) dayBadge.innerText = `Ngày ${gameState.dayCount}`;
    if (timeBadge) {
      const padH = String(hours).padStart(2, '0');
      const padM = String(minutes).padStart(2, '0');
      timeBadge.innerText = `${padH}:${padM} ${isNight ? '🌙' : '☀️'}`;
    }

    // 3. Survival Stat Bars
    const setBar = (id, val, max) => {
      const bar = document.getElementById(`bar-${id}`);
      const text = document.getElementById(`val-${id}`);
      const pct = Math.max(0, Math.min(100, (val / max) * 100));
      if (bar) bar.style.width = `${pct}%`;
      if (text) text.innerText = Math.round(val);
    };

    setBar('health', gameState.player.health, gameState.player.maxHealth);
    setBar('stamina', gameState.player.stamina, gameState.player.maxStamina);
    setBar('food', gameState.player.food, gameState.player.maxFood);
    setBar('water', gameState.player.water, gameState.player.maxWater);

    // Oxygen row visibility
    const oxyRow = document.getElementById('oxygen-row');
    if (oxyRow) {
      oxyRow.style.display = gameState.player.isUnderwater ? 'flex' : 'none';
      if (gameState.player.isUnderwater) {
        setBar('oxygen', gameState.player.oxygen, gameState.player.maxOxygen);
      }
    }

    // Temperature badge
    const tempBadge = document.getElementById('temp-badge');
    if (tempBadge) {
      if (gameState.player.isFreezing) {
        tempBadge.className = 'temp-cold';
        tempBadge.innerText = '❄️ Đang Bị Lạnh Giá!';
      } else if (gameState.player.isWarm) {
        tempBadge.className = 'temp-warm';
        tempBadge.innerText = '🔥 Ấm Áp';
      } else {
        tempBadge.className = 'temp-warm';
        tempBadge.innerText = '☀️ Thân Nhiệt Ổn Định';
      }
    }

    // Screen FX Overlays
    const frostEl = document.getElementById('frost-overlay');
    if (frostEl) frostEl.classList.toggle('active', gameState.player.isFreezing);

    const warmEl = document.getElementById('warmth-overlay');
    if (warmEl) warmEl.classList.toggle('active', gameState.player.isWarm && !gameState.player.isFreezing);

    const underEl = document.getElementById('underwater-overlay');
    if (underEl) underEl.classList.toggle('active', gameState.player.isUnderwater);

    this.islandWorld.setUnderwaterMode(gameState.player.isUnderwater);

    // Check game over
    if (gameState.player.health <= 0 && this.isPlaying) {
      this.triggerGameOver('Bạn đã gục ngã vì kiệt sức hoặc bị thú dữ tấn công!');
    }
  }

  showToast(text, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerText = text;
    container.appendChild(toast);

    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 3200);
  }

  // --- Combat Damage on Player ---
  onPlayerDamage(damage, reason) {
    gameState.player.health = Math.max(0, gameState.player.health - damage);
    soundManager.playPlayerHurt();

    // Red screen flash
    const overlay = document.getElementById('hud-overlay');
    if (overlay) {
      overlay.style.boxShadow = 'inset 0 0 80px rgba(239, 68, 68, 0.7)';
      setTimeout(() => {
        overlay.style.boxShadow = 'none';
      }, 350);
    }

    this.showToast(`⚠️ -${damage} Máu! ${reason}`, 'warn');

    if (gameState.player.health <= 0) {
      this.triggerGameOver(reason);
    }
  }

  triggerGameOver(reason) {
    this.isPlaying = false;
    soundManager.playGameOver();

    document.getElementById('hud-overlay').style.display = 'none';
    const screen = document.getElementById('screen-gameover');
    if (screen) {
      screen.style.display = 'flex';
      document.getElementById('gameover-reason').innerText = reason;
      document.getElementById('go-stat-days').innerText = `${gameState.stats.daysSurvived} Ngày`;
      document.getElementById('go-stat-hunts').innerText = `${gameState.stats.animalsHunted} Con`;
      document.getElementById('go-stat-trees').innerText = `${gameState.stats.treesChopped} Cây`;
    }
  }

  respawnPlayer() {
    gameState.player.health = 80;
    gameState.player.food = 60;
    gameState.player.water = 60;
    gameState.player.stamina = 100;

    this.player.position.set(gameState.player.respawnPos.x, gameState.player.respawnPos.y, gameState.player.respawnPos.z);
    document.getElementById('screen-gameover').style.display = 'none';
    document.getElementById('hud-overlay').style.display = 'flex';
    this.isPlaying = true;
    this.showToast('🔄 Bạn đã hồi sinh an toàn! Hãy tiếp tục sinh tồn.', 'success');
  }

  // --- Cinematic Rescue Cutscene Director ---
  startRescueCutscene() {
    if (this.isCutsceneActive) return;
    this.isCutsceneActive = true;
    this.cutsceneTimer = 0;
    this.cutsceneVictoryPlayed = false;

    // Hide gameplay HUD, show cutscene banner
    document.getElementById('hud-overlay').style.display = 'none';
    const cutsceneOverlay = document.getElementById('cutscene-container');
    if (cutsceneOverlay) cutsceneOverlay.style.display = 'flex';

    // Start rescue ship sailing
    this.islandWorld.startRescueShipCutscene(this.player.position);
    soundManager.playShipFoghorn();
  }

  updateRescueCutscene(dt) {
    this.cutsceneTimer += dt;

    // Update island environment & rescue ship
    this.islandWorld.update(dt, gameState.dayTime, this.player.position);
    this.structuresManager.update(dt, this.player.position);

    // Find beacon position or fallback to player
    const beacon = this.structuresManager.structures.find(s => s.type === 'beacon' && s.isLit) || { position: this.player.position };
    const bPos = beacon.position;
    const ship = this.islandWorld.rescueShip;
    const shipPos = ship ? ship.position : this.player.position;

    if (this.cutsceneTimer < 3.5) {
      // Shot 1: Camera orbits the flaming Rescue Beacon
      const angle = this.cutsceneTimer * 0.5;
      this.camera.position.set(
        bPos.x + Math.cos(angle) * 14,
        bPos.y + 6 + Math.sin(this.cutsceneTimer * 0.4) * 2,
        bPos.z + Math.sin(angle) * 14
      );
      this.camera.lookAt(bPos.x, bPos.y + 4.5, bPos.z);
    } else if (this.cutsceneTimer < 9.5) {
      // Shot 2: Camera pans out to sea tracking the Rescue Ship cruising with searchlight
      const targetCamPos = new THREE.Vector3(shipPos.x + 18, 9, shipPos.z + 18);
      this.camera.position.lerp(targetCamPos, 0.08);
      this.camera.lookAt(shipPos.x, shipPos.y + 3, shipPos.z);
    } else if (this.cutsceneTimer < 11.5) {
      // Shot 3: Ship arrives near beach shore
      if (!this.cutsceneVictoryPlayed) {
        this.cutsceneVictoryPlayed = true;
        soundManager.playVictory();
      }
      this.camera.position.set(bPos.x + 12, bPos.y + 4, bPos.z + 10);
      this.camera.lookAt(shipPos.x, shipPos.y + 3, shipPos.z);
    } else {
      // Cutscene complete! Show Victory modal
      this.endRescueCutscene();
    }
  }

  endRescueCutscene() {
    this.isCutsceneActive = false;
    const cutsceneOverlay = document.getElementById('cutscene-container');
    if (cutsceneOverlay) cutsceneOverlay.style.display = 'none';
    this.showVictoryScreen();
  }

  showVictoryScreen() {
    this.isPaused = true;
    soundManager.playVictory();

    const screen = document.getElementById('screen-victory');
    if (screen) {
      screen.style.display = 'flex';
      document.getElementById('vic-stat-days').innerText = `${gameState.stats.daysSurvived} Ngày`;
      document.getElementById('vic-stat-hunts').innerText = `${gameState.stats.animalsHunted} Con`;
      document.getElementById('vic-stat-structs').innerText = `${gameState.stats.structuresBuilt} Công Trình`;
      document.getElementById('vic-stat-fish').innerText = `${gameState.stats.fishCaught} Con Cá`;
    }
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  // --- Main Animation & Simulation Frame ---
  animate() {
    requestAnimationFrame(this.animate);

    const dt = Math.min(this.clock.getDelta(), 0.1);

    if (this.previewPlayer) {
      this.updateCharacterPreview(dt);
    }

    // Process Cutscene if active
    if (this.isCutsceneActive) {
      this.updateRescueCutscene(dt);
      this.renderer.render(this.scene, this.camera);
      return;
    }

    if (!this.isPlaying || this.isPaused) return;

    // 1. Process Input
    const frameInput = this.inputManager.getFrameInput();
    this.player.addRotation(frameInput.deltaYaw, frameInput.deltaPitch);

    // 2. Update Survival Tick & Warmth
    const nearFire = this.structuresManager.isPlayerNearCampfire(this.player.position);
    gameState.player.isWarm = nearFire;
    gameState.player.currentPos = { x: this.player.position.x, y: this.player.position.y, z: this.player.position.z };
    gameState.player.isUnderwater = this.player.isUnderwater;

    // Check proximity to workbench
    const nearWorkbench = this.structuresManager.structures.some(
      s => s.type === 'workbench' && s.position.distanceTo(this.player.position) < 4.0
    );
    gameState.isNearWorkbench = nearWorkbench;

    gameState.tick(dt);

    // 3. Update Player Physics & Animations
    this.player.update(dt, frameInput.move, frameInput.isSprint, frameInput.isJump, frameInput.isCrouch, soundManager);

    // 4. Update Island Environment, Ocean Waves & Foliage Wind Sway
    this.islandWorld.update(dt, gameState.dayTime, this.player.position);
    this.foliageManager.update(dt);

    // 5. Update Structures
    this.structuresManager.update(dt, this.player.position);

    // 6. Update Wildlife AI
    this.wildlifeManager.update(dt, this.player, (dmg, reason) => this.onPlayerDamage(dmg, reason));

    // 7. Raycast Interaction System
    this.interactionSystem.update(this.player);

    // 8. Update Radar Minimap
    if (this.minimap) {
      this.minimap.update(this.player, this.wildlifeManager, this.structuresManager);
    }

    // 9. Render HUD
    this.updateHUD();

    // 10. Render 3D Scene
    this.renderer.render(this.scene, this.camera);
  }
}

// Instantiate game on load
window.addEventListener('DOMContentLoaded', () => {
  new Game();
});
