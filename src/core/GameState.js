// GameState.js - Centralized survival state, inventory, quests, and event dispatching

export const ITEM_DEFS = {
  wood: { id: 'wood', name: 'Cành Gỗ', icon: '🪵', maxStack: 50, description: 'Gỗ khô nhặt từ đất hoặc chặt từ cây cọ.' },
  stone: { id: 'stone', name: 'Viên Đá', icon: '🪨', maxStack: 50, description: 'Đá thô dùng chế tạo công cụ và xây lò sưởi.' },
  palm_leaf: { id: 'palm_leaf', name: 'Lá Cọ', icon: '🌿', maxStack: 50, description: 'Lá cọ bền dai dùng bện dây, lợp mái lều.' },
  coconut: { id: 'coconut', name: 'Quả Dừa', icon: '🥥', maxStack: 20, description: 'Dừa tươi ngọt mát. Ăn/uống hồi 15 No, 25 Nước, 5 Máu.', consumable: { food: 15, water: 25, health: 5 } },
  raw_meat: { id: 'raw_meat', name: 'Thịt Sống', icon: '🥩', maxStack: 20, description: 'Thịt thú săn. Nên nướng chín trước khi ăn!', consumable: { food: 20, health: -5 } },
  cooked_meat: { id: 'cooked_meat', name: 'Thịt Nướng', icon: '🍖', maxStack: 20, description: 'Thịt nướng thơm ngon trên lửa trại. Hồi 45 No và 20 Máu.', consumable: { food: 45, health: 20 } },
  raw_fish: { id: 'raw_fish', name: 'Cá Tươi', icon: '🐟', maxStack: 20, description: 'Cá tươi mới câu được. Nướng chín để ngon hơn.', consumable: { food: 15, health: 2 } },
  cooked_fish: { id: 'cooked_fish', name: 'Cá Nướng', icon: '🍱', maxStack: 20, description: 'Cá nướng béo ngậy. Hồi 40 No và 15 Máu.', consumable: { food: 40, health: 15 } },
  scrap_metal: { id: 'scrap_metal', name: 'Sắt Vụn', icon: '⚙️', maxStack: 20, description: 'Mảnh kim loại từ rương xác tàu đắm. Cần cho đài cứu hộ.' },
  pickaxe: { id: 'pickaxe', name: 'Búa Đào', icon: '⛏️', maxStack: 1, type: 'tool', power: 45, description: 'Búa đào đá thô & khoáng sản. Khai thác mỏm đá siêu nhanh và tăng mạnh sát thương cận chiến.' },
  axe: { id: 'axe', name: 'Rìu Đá', icon: '🪓', maxStack: 1, type: 'tool', power: 30, description: 'Chặt cây siêu nhanh và tăng sát thương cận chiến.' },
  spear: { id: 'spear', name: 'Giáo Săn', icon: '🗡️', maxStack: 1, type: 'weapon', power: 45, description: 'Đâm cá và săn thú hoang từ cự ly an toàn.' },
  torch: { id: 'torch', name: 'Đuốc Lửa', icon: '🔥', maxStack: 1, type: 'tool', description: 'Soi sáng ban đêm và sưởi ấm, xua tan giá lạnh.' },
  fishing_rod: { id: 'fishing_rod', name: 'Cần Câu', icon: '🎣', maxStack: 1, type: 'tool', description: 'Đứng sát mép nước bấm [F] để câu cá.' },
  campfire_item: { id: 'campfire_item', name: 'Lửa Trại', icon: '⛺', maxStack: 5, type: 'buildable', buildType: 'campfire', description: 'Đặt xuống đất: sưởi ấm và nướng thịt/cá chín.' },
  shelter_item: { id: 'shelter_item', name: 'Lều Trú Ẩn', icon: '🛖', maxStack: 5, type: 'buildable', buildType: 'shelter', description: 'Đặt xuống đất: ngủ qua đêm và đặt điểm hồi sinh.' },
  workbench_item: { id: 'workbench_item', name: 'Bàn Cơ Khí', icon: '🛠️', maxStack: 5, type: 'buildable', buildType: 'workbench', description: 'Đặt xuống đất: mở khóa chế tạo Đài Cứu Hộ.' },
  beacon_item: { id: 'beacon_item', name: 'Đài Cứu Hộ', icon: '🗼', maxStack: 1, type: 'buildable', buildType: 'beacon', description: 'Đặt bên bờ biển rồi thắp sáng để gọi tàu cứu hộ tới giải cứu!' }
};

export const RECIPES = [
  { id: 'pickaxe', resultId: 'pickaxe', count: 1, req: { wood: 4, stone: 3 }, category: 'tools' },
  { id: 'axe', resultId: 'axe', count: 1, req: { wood: 3, stone: 2 }, category: 'tools' },
  { id: 'spear', resultId: 'spear', count: 1, req: { wood: 4, stone: 2, palm_leaf: 1 }, category: 'tools' },
  { id: 'torch', resultId: 'torch', count: 1, req: { wood: 2, palm_leaf: 2 }, category: 'tools' },
  { id: 'fishing_rod', resultId: 'fishing_rod', count: 1, req: { wood: 3, palm_leaf: 2 }, category: 'tools' },
  { id: 'campfire_item', resultId: 'campfire_item', count: 1, req: { wood: 5, stone: 5 }, category: 'structures' },
  { id: 'shelter_item', resultId: 'shelter_item', count: 1, req: { wood: 8, palm_leaf: 6 }, category: 'structures' },
  { id: 'workbench_item', resultId: 'workbench_item', count: 1, req: { wood: 6, stone: 4 }, category: 'structures' },
  { id: 'beacon_item', resultId: 'beacon_item', count: 1, req: { wood: 10, stone: 8, scrap_metal: 4 }, requiresWorkbench: true, category: 'rescue' }
];

export class GameState {
  constructor() {
    this.player = {
      gender: 'male', // 'male' | 'female'
      health: 100,
      maxHealth: 100,
      stamina: 100,
      maxStamina: 100,
      food: 100,
      maxFood: 100,
      water: 100,
      maxWater: 100,
      oxygen: 100,
      maxOxygen: 100,
      isUnderwater: false,
      isWarm: false,
      isFreezing: false,
      respawnPos: { x: 0, y: 3, z: 25 },
      currentPos: { x: 0, y: 3, z: 25 }
    };

    this.isNearWorkbench = false;

    // 24 slots (0..5: Hotbar, 6..23: Backpack)
    this.inventory = Array.from({ length: 24 }, () => null);
    this.activeHotbarIndex = 0; // 0 to 5

    // Environment & time
    this.dayTime = 0.3; // 0.0 to 1.0 (0.25 = 6h, 0.5 = 12h, 0.75 = 18h, 0.0 = midnight)
    this.dayLength = 360; // 360 seconds (6 minutes)
    this.dayCount = 1;

    // Quests
    this.quests = [
      { id: 'gather_starter', title: 'Thu thập sinh tồn ban đầu', desc: 'Nhặt 3 Cành gỗ, 3 Viên đá và 2 Quả dừa', completed: false, progress: { wood: 0, stone: 0, coconut: 0 }, goals: { wood: 3, stone: 3, coconut: 2 } },
      { id: 'craft_tools', title: 'Chế tạo công cụ sinh tồn', desc: 'Chế tạo 1 Rìu đá và 1 Đuốc lửa', completed: false, progress: { axe: 0, torch: 0 }, goals: { axe: 1, torch: 1 } },
      { id: 'build_base', title: 'Thiết lập cứ địa sinh tồn', desc: 'Dựng 1 Lửa trại và 1 Lều trú ẩn', completed: false, progress: { campfire: 0, shelter: 0 }, goals: { campfire: 1, shelter: 1 } },
      { id: 'explore_shipwreck', title: 'Thám hiểm xác tàu đắm', desc: 'Bơi ra xác tàu ngoài khơi, cẩn thận cá mập, mở Rương báu vật thu Sắt vụn', completed: false, progress: { scrap: 0 }, goals: { scrap: 4 } },
      { id: 'ignite_beacon', title: 'Thắp sáng Đài hiệu cứu hộ', desc: 'Chế tạo Đài hiệu tại Bàn cơ khí, đặt ở bờ biển và thắp sáng bằng Đuốc', completed: false, progress: { ignited: 0 }, goals: { ignited: 1 } }
    ];

    // Stats
    this.stats = {
      daysSurvived: 1,
      animalsHunted: 0,
      fishCaught: 0,
      treesChopped: 0,
      structuresBuilt: 0,
      startTime: Date.now()
    };

    // Settings
    this.settings = {
      graphicsPreset: 'balanced', // 'low' | 'balanced' | 'high'
      mouseSensitivity: 1.0,
      touchSensitivity: 1.2,
      masterVolume: 0.8,
      isMuted: false
    };

    // Subscribed listeners
    this.listeners = new Set();

    // Default starter gear
    this.setupStarterItems();
  }

  setupStarterItems() {
    // Default starter gear: Pickaxe (Búa Đào) equipped in slot 0, coconuts in slot 1
    this.inventory[0] = { id: 'pickaxe', count: 1 };
    this.inventory[1] = { id: 'coconut', count: 2 };
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify(event, payload) {
    this.listeners.forEach(fn => {
      try {
        fn(event, payload);
      } catch (e) {
        console.error(e);
      }
    });
  }

  // --- Inventory Management ---
  getActiveItem() {
    return this.inventory[this.activeHotbarIndex] || null;
  }

  getActiveItemDef() {
    const item = this.getActiveItem();
    if (!item) return null;
    return ITEM_DEFS[item.id] || null;
  }

  setActiveHotbarIndex(idx) {
    if (idx >= 0 && idx < 6) {
      this.activeHotbarIndex = idx;
      this.notify('hotbarChange', { index: idx, item: this.getActiveItem() });
    }
  }

  addItem(itemId, amount = 1) {
    const def = ITEM_DEFS[itemId];
    if (!def) return false;

    let remaining = amount;

    // 1. Try stacking into existing slots
    for (let i = 0; i < this.inventory.length; i++) {
      const slot = this.inventory[i];
      if (slot && slot.id === itemId && slot.count < def.maxStack) {
        const canTake = def.maxStack - slot.count;
        const add = Math.min(canTake, remaining);
        slot.count += add;
        remaining -= add;
        if (remaining <= 0) break;
      }
    }

    // 2. Put into empty slots
    if (remaining > 0) {
      for (let i = 0; i < this.inventory.length; i++) {
        if (!this.inventory[i]) {
          const add = Math.min(def.maxStack, remaining);
          this.inventory[i] = { id: itemId, count: add };
          remaining -= add;
          if (remaining <= 0) break;
        }
      }
    }

    this.checkQuestProgress();
    this.notify('inventoryUpdate', this.inventory);
    return remaining < amount;
  }

  removeItem(itemId, amount = 1) {
    let needed = amount;
    for (let i = this.inventory.length - 1; i >= 0; i--) {
      const slot = this.inventory[i];
      if (slot && slot.id === itemId) {
        if (slot.count > needed) {
          slot.count -= needed;
          needed = 0;
          break;
        } else {
          needed -= slot.count;
          this.inventory[i] = null;
          if (needed <= 0) break;
        }
      }
    }
    this.notify('inventoryUpdate', this.inventory);
    return needed === 0;
  }

  getItemCount(itemId) {
    let count = 0;
    for (const slot of this.inventory) {
      if (slot && slot.id === itemId) count += slot.count;
    }
    return count;
  }

  canCraft(recipe) {
    if (recipe.requiresWorkbench && !this.isNearWorkbench) {
      return false;
    }
    for (const [resId, reqCount] of Object.entries(recipe.req)) {
      if (this.getItemCount(resId) < reqCount) return false;
    }
    return true;
  }

  craft(recipe) {
    if (!this.canCraft(recipe)) return false;

    for (const [resId, reqCount] of Object.entries(recipe.req)) {
      this.removeItem(resId, reqCount);
    }
    this.addItem(recipe.resultId, recipe.count || 1);

    // Track quest progress
    if (recipe.resultId === 'axe') this.updateQuestObjective('craft_tools', 'axe', 1);
    if (recipe.resultId === 'torch') this.updateQuestObjective('craft_tools', 'torch', 1);

    this.notify('crafted', recipe);
    return true;
  }

  useSlot(index) {
    const slot = this.inventory[index];
    if (!slot) return false;

    const def = ITEM_DEFS[slot.id];
    if (!def) return false;

    // Consumable food / water
    if (def.consumable) {
      if (def.consumable.food) this.player.food = Math.min(this.player.maxFood, this.player.food + def.consumable.food);
      if (def.consumable.water) this.player.water = Math.min(this.player.maxWater, this.player.water + def.consumable.water);
      if (def.consumable.health) {
        this.player.health = Math.max(0, Math.min(this.player.maxHealth, this.player.health + def.consumable.health));
      }

      slot.count -= 1;
      if (slot.count <= 0) {
        this.inventory[index] = null;
      }
      this.notify('consumed', { item: def, stats: this.player });
      this.notify('inventoryUpdate', this.inventory);
      return true;
    }
    return false;
  }

  // --- Quests System ---
  updateQuestObjective(questId, objKey, amount = 1) {
    const q = this.quests.find(x => x.id === questId);
    if (!q || q.completed) return;

    if (q.progress[objKey] !== undefined) {
      q.progress[objKey] = Math.min(q.goals[objKey], q.progress[objKey] + amount);
      
      const allDone = Object.keys(q.goals).every(k => q.progress[k] >= q.goals[k]);
      if (allDone) {
        q.completed = true;
        this.notify('questCompleted', q);
      } else {
        this.notify('questUpdated', q);
      }
    }
  }

  checkQuestProgress() {
    // Check initial gather
    const q1 = this.quests[0];
    if (!q1.completed) {
      q1.progress.wood = Math.min(q1.goals.wood, this.getItemCount('wood'));
      q1.progress.stone = Math.min(q1.goals.stone, this.getItemCount('stone'));
      q1.progress.coconut = Math.min(q1.goals.coconut, this.getItemCount('coconut'));
      if (q1.progress.wood >= q1.goals.wood && q1.progress.stone >= q1.goals.stone && q1.progress.coconut >= q1.goals.coconut) {
        q1.completed = true;
        this.notify('questCompleted', q1);
      } else {
        this.notify('questUpdated', q1);
      }
    }

    // Check scrap metal
    const q4 = this.quests[3];
    if (!q4.completed) {
      q4.progress.scrap = Math.min(q4.goals.scrap, this.getItemCount('scrap_metal'));
      if (q4.progress.scrap >= q4.goals.scrap) {
        q4.completed = true;
        this.notify('questCompleted', q4);
      } else {
        this.notify('questUpdated', q4);
      }
    }
  }

  // --- Survival Simulation Tick ---
  tick(dt) {
    // Advance day cycle
    const prevTime = this.dayTime;
    this.dayTime = (this.dayTime + dt / this.dayLength) % 1.0;
    if (this.dayTime < prevTime) {
      this.dayCount += 1;
      this.stats.daysSurvived = this.dayCount;
      this.notify('newDay', this.dayCount);
    }

    // Is it night? (sunset ~0.75 to sunrise ~0.25)
    const isNight = this.dayTime > 0.75 || this.dayTime < 0.25;

    // Check torch in hand
    const activeItem = this.getActiveItem();
    const holdingTorch = activeItem && activeItem.id === 'torch';

    // Temperature
    if (isNight && !this.player.isWarm && !holdingTorch) {
      this.player.isFreezing = true;
    } else {
      this.player.isFreezing = false;
    }

    // Food & water depletion
    const hungerRate = this.player.isFreezing ? 0.35 : 0.22;
    this.player.food = Math.max(0, this.player.food - dt * hungerRate);
    this.player.water = Math.max(0, this.player.water - dt * 0.28);

    // Oxygen
    if (this.player.isUnderwater) {
      this.player.oxygen = Math.max(0, this.player.oxygen - dt * 14);
      if (this.player.oxygen <= 0) {
        this.player.health = Math.max(0, this.player.health - dt * 10);
      }
    } else {
      this.player.oxygen = Math.min(this.player.maxOxygen, this.player.oxygen + dt * 40);
    }

    // Freezing damage or starvation damage
    if (this.player.isFreezing) {
      this.player.health = Math.max(0, this.player.health - dt * 1.5);
    }
    if (this.player.food <= 0 || this.player.water <= 0) {
      this.player.health = Math.max(0, this.player.health - dt * 2.5);
    }

    // Health regeneration if well fed, hydrated and not freezing
    if (this.player.food > 75 && this.player.water > 75 && !this.player.isFreezing && !this.player.isUnderwater) {
      this.player.health = Math.min(this.player.maxHealth, this.player.health + dt * 1.2);
    }

    // Natural stamina recovery
    this.player.stamina = Math.min(this.player.maxStamina, this.player.stamina + dt * 15);
  }

  drinkFreshwater() {
    this.player.water = Math.min(this.player.maxWater, this.player.water + 40);
    this.notify('drankWater');
  }

  sleep() {
    // Fast forward to dawn (06:00 = 0.25)
    this.dayTime = 0.25;
    this.dayCount += 1;
    this.stats.daysSurvived = this.dayCount;
    this.player.health = this.player.maxHealth;
    this.player.stamina = this.player.maxStamina;
    this.player.food = Math.max(20, this.player.food - 15);
    this.player.water = Math.max(20, this.player.water - 20);
    this.notify('slept');
  }
}

export const gameState = new GameState();
