// FoliageManager.js - Procedural Palm trees, rocks, ground pickups, and Shipwreck
import * as THREE from 'three';

export class FoliageManager {
  constructor(scene, islandWorld) {
    this.scene = scene;
    this.islandWorld = islandWorld;

    this.trees = [];
    this.rocks = [];
    this.pickups = [];
    this.interactiveObjects = []; // Targetable by raycast

    // Vibrant Living Vegetation
    this.swayFoliage = [];
    this.swaySeaweed = [];
    this.windTime = 0;

    this.shipwreckGroup = null;
    this.shipwreckChest = null;

    this.materials = this.createMaterials();
    this.init();
  }

  createMaterials() {
    return {
      trunk: new THREE.MeshStandardMaterial({ color: 0x7a5230, roughness: 0.9, flatShading: true }),
      leaves: new THREE.MeshStandardMaterial({ color: 0x3d7e2e, roughness: 0.7, flatShading: true, side: THREE.DoubleSide }),
      fernLeaf: new THREE.MeshStandardMaterial({ color: 0x247530, roughness: 0.65, flatShading: true, side: THREE.DoubleSide }),
      bushGreen: new THREE.MeshStandardMaterial({ color: 0x2e6b28, roughness: 0.8, flatShading: true }),
      coconut: new THREE.MeshStandardMaterial({ color: 0x593b1d, roughness: 0.8, flatShading: true }),
      rock: new THREE.MeshStandardMaterial({ color: 0x6e7175, roughness: 0.85, flatShading: true }),
      woodPickup: new THREE.MeshStandardMaterial({ color: 0x8b5a2b, roughness: 0.8, flatShading: true }),
      shipWood: new THREE.MeshStandardMaterial({ color: 0x4a3728, roughness: 0.95, flatShading: true }),
      shipChest: new THREE.MeshStandardMaterial({ color: 0x8c6239, metalness: 0.3, roughness: 0.6, flatShading: true }),
      metalTrim: new THREE.MeshStandardMaterial({ color: 0xd4af37, metalness: 0.8, roughness: 0.4 }),

      // Flowers
      flowerRed: new THREE.MeshStandardMaterial({ color: 0xef4444, roughness: 0.5, flatShading: true }),
      flowerYellow: new THREE.MeshStandardMaterial({ color: 0xfacc15, roughness: 0.5, flatShading: true }),
      flowerPurple: new THREE.MeshStandardMaterial({ color: 0xa855f7, roughness: 0.5, flatShading: true }),
      flowerWhite: new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.5, flatShading: true }),
      flowerStem: new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.8 }),

      // Mushrooms
      mushroomRed: new THREE.MeshStandardMaterial({ color: 0xd92d20, roughness: 0.4, flatShading: true }),
      mushroomGold: new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.5, flatShading: true }),
      mushroomStem: new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.8 }),

      // Undersea
      coralPink: new THREE.MeshStandardMaterial({ color: 0xf43f5e, roughness: 0.7, flatShading: true }),
      coralCyan: new THREE.MeshStandardMaterial({ color: 0x06b6d4, roughness: 0.7, flatShading: true }),
      coralOrange: new THREE.MeshStandardMaterial({ color: 0xf97316, roughness: 0.7, flatShading: true }),
      seaweed: new THREE.MeshStandardMaterial({ color: 0x166534, roughness: 0.4, flatShading: true, side: THREE.DoubleSide, transparent: true, opacity: 0.9 })
    };
  }

  init() {
    this.spawnPalmTrees(45);
    this.spawnRocks(30);
    this.spawnGroundPickups(50);
    this.createShipwreck();

    // Vibrant Realistic Vegetation Systems
    this.spawnFernsAndBushes(75);
    this.spawnFlowerPatches(50);
    this.spawnMushroomClusters(35);
    this.spawnCoralReefs(40);
    this.spawnSeaweedBeds(45);
  }

  // --- Procedural Palm Tree ---
  createPalmTreeMesh() {
    const group = new THREE.Group();

    // Curved segmented trunk
    const trunkSegments = 7;
    const segHeight = 1.1;
    let currentPos = new THREE.Vector3(0, 0, 0);
    const curveDir = new THREE.Vector3(
      (Math.random() - 0.5) * 0.4,
      1.0,
      (Math.random() - 0.5) * 0.4
    ).normalize();

    for (let i = 0; i < trunkSegments; i++) {
      const radiusTop = 0.32 * (1 - i * 0.06);
      const radiusBottom = 0.38 * (1 - i * 0.05);
      const segGeo = new THREE.CylinderGeometry(radiusTop, radiusBottom, segHeight, 6);
      const segMesh = new THREE.Mesh(segGeo, this.materials.trunk);
      segMesh.castShadow = true;
      segMesh.receiveShadow = true;

      segMesh.position.copy(currentPos).addScaledVector(curveDir, segHeight * 0.5);
      segMesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), curveDir);
      group.add(segMesh);

      currentPos.addScaledVector(curveDir, segHeight);
      curveDir.x += (Math.random() - 0.5) * 0.12;
      curveDir.z += (Math.random() - 0.5) * 0.12;
      curveDir.normalize();
    }

    // Crown of Fronds / Leaves
    const frondCount = 7;
    for (let f = 0; f < frondCount; f++) {
      const angle = (f / frondCount) * Math.PI * 2;
      const frondGeo = new THREE.ConeGeometry(0.8, 3.2, 4);
      frondGeo.translate(0, 1.6, 0);
      frondGeo.rotateX(Math.PI / 2.6); // Droop outwards

      const frondMesh = new THREE.Mesh(frondGeo, this.materials.leaves);
      frondMesh.rotation.y = angle;
      frondMesh.position.copy(currentPos);
      frondMesh.castShadow = true;
      group.add(frondMesh);
    }

    // Coconuts under crown
    for (let c = 0; c < 3; c++) {
      const cGeo = new THREE.DodecahedronGeometry(0.24, 0);
      const cMesh = new THREE.Mesh(cGeo, this.materials.coconut);
      const cAngle = (c / 3) * Math.PI * 2 + 0.3;
      cMesh.position.set(
        currentPos.x + Math.cos(cAngle) * 0.45,
        currentPos.y - 0.25,
        currentPos.z + Math.sin(cAngle) * 0.45
      );
      cMesh.castShadow = true;
      group.add(cMesh);
    }

    return { group, topPos: currentPos };
  }

  spawnPalmTrees(count) {
    for (let i = 0; i < count; i++) {
      // Pick random coordinates within coastal and hill belt (12m < r < 60m)
      const angle = Math.random() * Math.PI * 2;
      const radius = 16 + Math.random() * 42;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = this.islandWorld.getHeightAt(x, z);

      // Only grow on land above water line
      if (y > 0.4 && y < 6.5) {
        const { group } = this.createPalmTreeMesh();
        const scale = 0.85 + Math.random() * 0.35;
        group.scale.set(scale, scale, scale);
        group.position.set(x, y, z);
        group.rotation.y = Math.random() * Math.PI * 2;

        const treeData = {
          type: 'tree',
          name: 'Cây Cọ Bờ Biển',
          health: 100,
          maxHealth: 100,
          group: group,
          position: new THREE.Vector3(x, y, z),
          hint: '[E] Chặt Cây Cọ (100/100 HP)'
        };
        group.userData = treeData;

        this.scene.add(group);
        this.trees.push(treeData);
        this.interactiveObjects.push(group);
      }
    }
  }

  // --- Procedural Low-Poly Boulders ---
  spawnRocks(count) {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 12 + Math.random() * 55;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = this.islandWorld.getHeightAt(x, z);

      if (y > 0.1) {
        const rockGeo = new THREE.DodecahedronGeometry(1.2 + Math.random() * 0.9, 0);
        // Perturb vertices for jagged low-poly feel
        const pos = rockGeo.attributes.position;
        for (let v = 0; v < pos.count; v++) {
          pos.setX(v, pos.getX(v) * (0.8 + Math.random() * 0.4));
          pos.setY(v, pos.getY(v) * (0.7 + Math.random() * 0.5));
          pos.setZ(v, pos.getZ(v) * (0.8 + Math.random() * 0.4));
        }
        rockGeo.computeVertexNormals();

        const rockMesh = new THREE.Mesh(rockGeo, this.materials.rock);
        rockMesh.position.set(x, y + 0.6, z);
        rockMesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
        rockMesh.castShadow = true;
        rockMesh.receiveShadow = true;

        const rockData = {
          type: 'rock',
          name: 'Mỏm Đá Thô',
          health: 120,
          maxHealth: 120,
          mesh: rockMesh,
          position: new THREE.Vector3(x, y, z),
          hint: '[E] Đập Đá Khai Thác (120/120 HP)'
        };
        rockMesh.userData = rockData;

        this.scene.add(rockMesh);
        this.rocks.push(rockData);
        this.interactiveObjects.push(rockMesh);
      }
    }
  }

  // --- Ground Pickups (Sticks, Stones, Coconuts) ---
  spawnGroundPickups(count) {
    const types = ['wood', 'stone', 'coconut'];

    for (let i = 0; i < count; i++) {
      const type = types[Math.floor(Math.random() * types.length)];
      const angle = Math.random() * Math.PI * 2;
      const radius = 8 + Math.random() * 56;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = this.islandWorld.getHeightAt(x, z);

      if (y > 0.15) {
        let mesh = null;
        let hint = '';

        if (type === 'wood') {
          const geo = new THREE.CylinderGeometry(0.08, 0.08, 1.2, 5);
          geo.rotateZ(Math.PI / 2.2);
          mesh = new THREE.Mesh(geo, this.materials.woodPickup);
          hint = '[E] Nhặt Cành Gỗ';
        } else if (type === 'stone') {
          const geo = new THREE.DodecahedronGeometry(0.3, 0);
          mesh = new THREE.Mesh(geo, this.materials.rock);
          hint = '[E] Nhặt Viên Đá';
        } else {
          const geo = new THREE.DodecahedronGeometry(0.28, 0);
          mesh = new THREE.Mesh(geo, this.materials.coconut);
          hint = '[E] Nhặt Quả Dừa Tươi';
        }

        mesh.position.set(x, y + 0.15, z);
        mesh.rotation.set(0, Math.random() * Math.PI, 0);
        mesh.castShadow = true;

        const pickupData = {
          type: 'pickup',
          itemId: type,
          name: type === 'wood' ? 'Cành Gỗ' : type === 'stone' ? 'Viên Đá' : 'Quả Dừa',
          mesh: mesh,
          position: new THREE.Vector3(x, y, z),
          hint: hint
        };
        mesh.userData = pickupData;

        this.scene.add(mesh);
        this.pickups.push(pickupData);
        this.interactiveObjects.push(mesh);
      }
    }
  }

  // --- Shipwreck Offshore Structure & Chest ---
  createShipwreck() {
    this.shipwreckGroup = new THREE.Group();
    const shipPos = new THREE.Vector3(120, -1.2, -95); // Coral reef offshore

    // Broken Galleon Hull
    const hullLength = 16;
    const hullGeo = new THREE.BoxGeometry(7, 4.5, hullLength);
    const hullMesh = new THREE.Mesh(hullGeo, this.materials.shipWood);
    hullMesh.position.set(0, 1.5, 0);
    hullMesh.rotation.set(0.15, 0.3, 0.25); // Half submerged and tilted
    hullMesh.castShadow = true;
    hullMesh.receiveShadow = true;
    this.shipwreckGroup.add(hullMesh);

    // Tilted Mast
    const mastGeo = new THREE.CylinderGeometry(0.3, 0.45, 12, 6);
    const mastMesh = new THREE.Mesh(mastGeo, this.materials.shipWood);
    mastMesh.position.set(1.5, 6.5, -2);
    mastMesh.rotation.set(0.35, 0, 0.4);
    mastMesh.castShadow = true;
    this.shipwreckGroup.add(mastMesh);

    // Broken Cargo Crates
    for (let c = 0; c < 4; c++) {
      const crateGeo = new THREE.BoxGeometry(1.2, 1.2, 1.2);
      const crateMesh = new THREE.Mesh(crateGeo, this.materials.shipWood);
      crateMesh.position.set((c - 2) * 1.5, 2.5, c * 1.2 - 2);
      crateMesh.rotation.set(Math.random() * 0.3, Math.random() * 0.5, 0);
      crateMesh.castShadow = true;
      this.shipwreckGroup.add(crateMesh);
    }

    // Treasure Chest with Scrap Metal
    const chestGroup = new THREE.Group();
    const chestBaseGeo = new THREE.BoxGeometry(1.4, 0.8, 0.9);
    const chestBase = new THREE.Mesh(chestBaseGeo, this.materials.shipChest);
    chestBase.castShadow = true;
    chestGroup.add(chestBase);

    const chestLidGeo = new THREE.CylinderGeometry(0.48, 0.48, 1.4, 8, 1, false, 0, Math.PI);
    chestLidGeo.rotateZ(Math.PI / 2);
    const chestLid = new THREE.Mesh(chestLidGeo, this.materials.shipChest);
    chestLid.position.set(0, 0.4, 0);
    chestLid.castShadow = true;
    chestGroup.add(chestLid);

    // Lock band
    const lockGeo = new THREE.BoxGeometry(0.18, 0.25, 0.1);
    const lock = new THREE.Mesh(lockGeo, this.materials.metalTrim);
    lock.position.set(0, 0.25, 0.46);
    chestGroup.add(lock);

    chestGroup.position.set(0.5, 3.2, 1.5);
    chestGroup.rotation.set(0.15, 0.3, 0.25);

    const chestData = {
      type: 'chest',
      name: 'Rương Báu Xác Tàu Đắm',
      isOpened: false,
      group: chestGroup,
      hint: '[E] Lục Rương Sắt Xác Tàu'
    };
    chestGroup.userData = chestData;

    this.shipwreckChest = chestData;
    this.shipwreckGroup.add(chestGroup);
    this.interactiveObjects.push(chestGroup);

    this.shipwreckGroup.position.copy(shipPos);
    this.scene.add(this.shipwreckGroup);
  }

  // --- Destruction & Spawning after Chop/Mine ---
  damageTree(treeData, damage = 25) {
    treeData.health -= damage;
    treeData.hint = `[E] Chặt Cây Cọ (${Math.max(0, treeData.health)}/${treeData.maxHealth} HP)`;

    // Slight wobble animation
    treeData.group.rotation.z += 0.08;
    setTimeout(() => {
      if (treeData.group) treeData.group.rotation.z -= 0.08;
    }, 120);

    if (treeData.health <= 0) {
      this.destroyTree(treeData);
      return true; // Tree destroyed
    }
    return false;
  }

  destroyTree(treeData) {
    // Remove tree from scene
    this.scene.remove(treeData.group);
    const idx = this.trees.indexOf(treeData);
    if (idx !== -1) this.trees.splice(idx, 1);
    const intIdx = this.interactiveObjects.indexOf(treeData.group);
    if (intIdx !== -1) this.interactiveObjects.splice(intIdx, 1);

    // Spawn drops on ground: 3 Wood, 2 Palm Leaf, 1 Coconut
    this.spawnDrop(treeData.position.x + 0.5, treeData.position.z, 'wood', 3);
    this.spawnDrop(treeData.position.x - 0.5, treeData.position.z + 0.4, 'palm_leaf', 2);
    this.spawnDrop(treeData.position.x, treeData.position.z - 0.6, 'coconut', 1);
  }

  damageRock(rockData, damage = 25) {
    rockData.health -= damage;
    rockData.hint = `[E] Đập Đá Khai Thác (${Math.max(0, rockData.health)}/${rockData.maxHealth} HP)`;

    if (rockData.health <= 0) {
      this.destroyRock(rockData);
      return true;
    }
    return false;
  }

  destroyRock(rockData) {
    this.scene.remove(rockData.mesh);
    const idx = this.rocks.indexOf(rockData);
    if (idx !== -1) this.rocks.splice(idx, 1);
    const intIdx = this.interactiveObjects.indexOf(rockData.mesh);
    if (intIdx !== -1) this.interactiveObjects.splice(intIdx, 1);

    // Spawn 3-4 Stones
    this.spawnDrop(rockData.position.x, rockData.position.z, 'stone', 4);
  }

  spawnDrop(x, z, itemId, count = 1) {
    const y = this.islandWorld.getHeightAt(x, z);
    let mesh = null;

    if (itemId === 'wood') {
      const geo = new THREE.CylinderGeometry(0.08, 0.08, 1.0, 5);
      geo.rotateZ(Math.PI / 2);
      mesh = new THREE.Mesh(geo, this.materials.woodPickup);
    } else if (itemId === 'stone') {
      const geo = new THREE.DodecahedronGeometry(0.28, 0);
      mesh = new THREE.Mesh(geo, this.materials.rock);
    } else if (itemId === 'palm_leaf') {
      const geo = new THREE.ConeGeometry(0.4, 1.2, 3);
      mesh = new THREE.Mesh(geo, this.materials.leaves);
    } else if (itemId === 'coconut') {
      const geo = new THREE.DodecahedronGeometry(0.26, 0);
      mesh = new THREE.Mesh(geo, this.materials.coconut);
    } else if (itemId === 'raw_meat') {
      const geo = new THREE.BoxGeometry(0.35, 0.2, 0.45);
      mesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: 0xaa2222, flatShading: true }));
    } else if (itemId === 'raw_fish') {
      const geo = new THREE.ConeGeometry(0.2, 0.7, 4);
      geo.rotateZ(Math.PI / 2);
      mesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: 0x3388bb, flatShading: true }));
    }

    if (mesh) {
      mesh.position.set(x, Math.max(0.1, y + 0.15), z);
      mesh.castShadow = true;
      const pickupData = {
        type: 'pickup',
        itemId: itemId,
        count: count,
        name: itemId,
        mesh: mesh,
        position: new THREE.Vector3(x, y, z),
        hint: `[E] Nhặt x${count} ${itemId}`
      };
      mesh.userData = pickupData;
      this.scene.add(mesh);
      this.pickups.push(pickupData);
      this.interactiveObjects.push(mesh);
    }
  }

  removePickup(pickupData) {
    this.scene.remove(pickupData.mesh);
    const idx = this.pickups.indexOf(pickupData);
    if (idx !== -1) this.pickups.splice(idx, 1);
    const intIdx = this.interactiveObjects.indexOf(pickupData.mesh);
    if (intIdx !== -1) this.interactiveObjects.splice(intIdx, 1);
  }

  // ==========================================
  // VIBRANT LIVING VEGETATION SPAWNERS
  // ==========================================

  // --- 1. Ferns & Dense Tropical Bushes ---
  createFernMesh() {
    const group = new THREE.Group();
    const frondCount = 7;
    const fronds = [];

    for (let f = 0; f < frondCount; f++) {
      const angle = (f / frondCount) * Math.PI * 2;
      const geo = new THREE.ConeGeometry(0.35, 1.6, 3);
      geo.translate(0, 0.8, 0);
      geo.rotateX(Math.PI / 3.2);

      const frond = new THREE.Mesh(geo, this.materials.fernLeaf);
      frond.rotation.y = angle;
      frond.castShadow = true;
      group.add(frond);
      fronds.push(frond);
    }
    return { group, fronds };
  }

  createBushMesh() {
    const group = new THREE.Group();
    const count = 3 + Math.floor(Math.random() * 3);
    for (let i = 0; i < count; i++) {
      const r = 0.5 + Math.random() * 0.45;
      const geo = new THREE.DodecahedronGeometry(r, 0);
      const mesh = new THREE.Mesh(geo, this.materials.bushGreen);
      mesh.position.set(
        (Math.random() - 0.5) * 0.6,
        r * 0.8,
        (Math.random() - 0.5) * 0.6
      );
      mesh.castShadow = true;
      group.add(mesh);
    }
    return group;
  }

  spawnFernsAndBushes(count) {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 10 + Math.random() * 50;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = this.islandWorld.getHeightAt(x, z);

      if (y > 0.6 && y < 6.8) {
        if (Math.random() > 0.45) {
          const { group, fronds } = this.createFernMesh();
          const s = 0.7 + Math.random() * 0.5;
          group.scale.set(s, s, s);
          group.position.set(x, y, z);

          const data = {
            category: 'foliage',
            type: 'fern',
            name: 'Bụi Dương Xỉ',
            health: 35,
            maxHealth: 35,
            group: group,
            position: new THREE.Vector3(x, y, z),
            drops: [{ id: 'palm_leaf', count: 2 }],
            hint: '[E/Click] Chặt Bụi Dương Xỉ (35/35 HP)'
          };
          group.userData = data;

          this.scene.add(group);
          this.interactiveObjects.push(group);
          this.swayFoliage.push({ mesh: group, fronds, speed: 1.2 + Math.random() * 0.5, offset: Math.random() * Math.PI });
        } else {
          const bush = this.createBushMesh();
          bush.position.set(x, y, z);

          const data = {
            category: 'foliage',
            type: 'bush',
            name: 'Bụi Cây Rừng',
            health: 45,
            maxHealth: 45,
            group: bush,
            position: new THREE.Vector3(x, y, z),
            drops: [
              { id: 'wood', count: 1 },
              { id: 'palm_leaf', count: 1 }
            ],
            hint: '[E/Click] Chặt Bụi Cây Dại (45/45 HP)'
          };
          bush.userData = data;

          this.scene.add(bush);
          this.interactiveObjects.push(bush);
        }
      }
    }
  }

  // --- 2. Wild Tropical Flower Glades ---
  createFlowerPatch() {
    const group = new THREE.Group();
    const flowerTypes = [
      this.materials.flowerRed,
      this.materials.flowerYellow,
      this.materials.flowerPurple,
      this.materials.flowerWhite
    ];
    const mat = flowerTypes[Math.floor(Math.random() * flowerTypes.length)];

    const count = 4 + Math.floor(Math.random() * 5);
    for (let f = 0; f < count; f++) {
      const stemGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.35, 4);
      stemGeo.translate(0, 0.17, 0);
      const stem = new THREE.Mesh(stemGeo, this.materials.flowerStem);

      const petalGeo = new THREE.DodecahedronGeometry(0.12, 0);
      const petal = new THREE.Mesh(petalGeo, mat);
      petal.position.set(0, 0.36, 0);
      stem.add(petal);

      stem.position.set(
        (Math.random() - 0.5) * 1.4,
        0,
        (Math.random() - 0.5) * 1.4
      );
      stem.rotation.y = Math.random() * Math.PI;
      group.add(stem);
    }
    return group;
  }

  spawnFlowerPatches(count) {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 8 + Math.random() * 45;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = this.islandWorld.getHeightAt(x, z);

      if (y > 0.8 && y < 5.5) {
        const flowers = this.createFlowerPatch();
        flowers.position.set(x, y, z);

        const data = {
          category: 'foliage',
          type: 'flower',
          name: 'Thảm Hoa Rừng',
          health: 20,
          maxHealth: 20,
          group: flowers,
          position: new THREE.Vector3(x, y, z),
          drops: [{ id: 'palm_leaf', count: 1 }],
          hint: '[E/Click] Thu Hoạch Hoa Rừng (20/20 HP)'
        };
        flowers.userData = data;

        this.scene.add(flowers);
        this.interactiveObjects.push(flowers);
        this.swayFoliage.push({ mesh: flowers, speed: 2.0, offset: Math.random() * 5 });
      }
    }
  }

  // --- 3. Forest Mushrooms ---
  createMushroomCluster() {
    const group = new THREE.Group();
    const count = 3 + Math.floor(Math.random() * 4);
    const isRed = Math.random() > 0.5;
    const capMat = isRed ? this.materials.mushroomRed : this.materials.mushroomGold;

    for (let m = 0; m < count; m++) {
      const h = 0.18 + Math.random() * 0.22;
      const stemGeo = new THREE.CylinderGeometry(0.04, 0.05, h, 5);
      stemGeo.translate(0, h * 0.5, 0);
      const stem = new THREE.Mesh(stemGeo, this.materials.mushroomStem);

      const capGeo = new THREE.ConeGeometry(0.16, 0.12, 6);
      const cap = new THREE.Mesh(capGeo, capMat);
      cap.position.set(0, h, 0);
      stem.add(cap);

      stem.position.set(
        (Math.random() - 0.5) * 0.8,
        0,
        (Math.random() - 0.5) * 0.8
      );
      group.add(stem);
    }
    return group;
  }

  spawnMushroomClusters(count) {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 12 + Math.random() * 42;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = this.islandWorld.getHeightAt(x, z);

      if (y > 1.0 && y < 6.0) {
        const shrooms = this.createMushroomCluster();
        shrooms.position.set(x, y, z);

        const data = {
          category: 'foliage',
          type: 'mushroom',
          name: 'Cụm Nấm Rừng',
          health: 15,
          maxHealth: 15,
          group: shrooms,
          position: new THREE.Vector3(x, y, z),
          drops: [{ id: 'mushroom', count: 2 }],
          hint: '[E/Click] Hái Nấm Rừng (15/15 HP)'
        };
        shrooms.userData = data;

        this.scene.add(shrooms);
        this.interactiveObjects.push(shrooms);
      }
    }
  }

  // --- 4. Undersea Coral Formations ---
  createCoralMesh() {
    const group = new THREE.Group();
    const mats = [this.materials.coralPink, this.materials.coralCyan, this.materials.coralOrange];
    const mat = mats[Math.floor(Math.random() * mats.length)];

    const branchCount = 4 + Math.floor(Math.random() * 4);
    for (let b = 0; b < branchCount; b++) {
      const h = 0.8 + Math.random() * 1.2;
      const branchGeo = new THREE.ConeGeometry(0.12, h, 5);
      branchGeo.translate(0, h * 0.5, 0);
      const branch = new THREE.Mesh(branchGeo, mat);
      branch.position.set(
        (Math.random() - 0.5) * 0.6,
        0,
        (Math.random() - 0.5) * 0.6
      );
      branch.rotation.set(
        (Math.random() - 0.5) * 0.4,
        Math.random() * Math.PI,
        (Math.random() - 0.5) * 0.4
      );
      group.add(branch);
    }
    return group;
  }

  spawnCoralReefs(count) {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 50 + Math.random() * 40;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = this.islandWorld.getHeightAt(x, z);

      if (y < -0.4 && y > -4.5) {
        const coral = this.createCoralMesh();
        coral.position.set(x, y, z);

        const data = {
          category: 'foliage',
          type: 'coral',
          name: 'Rạn San Hô',
          health: 60,
          maxHealth: 60,
          group: coral,
          position: new THREE.Vector3(x, y, z),
          drops: [
            { id: 'stone', count: 2 },
            { id: 'scrap_metal', count: 1 }
          ],
          hint: '[E/Click] Đập Vỡ San Hô (60/60 HP)'
        };
        coral.userData = data;

        this.scene.add(coral);
        this.interactiveObjects.push(coral);
      }
    }
  }

  // --- 5. Swaying Undersea Kelp / Seaweed Beds ---
  createSeaweedCluster() {
    const group = new THREE.Group();
    const ribbonCount = 5 + Math.floor(Math.random() * 4);
    const ribbons = [];

    for (let r = 0; r < ribbonCount; r++) {
      const h = 2.0 + Math.random() * 1.8;
      const geo = new THREE.BoxGeometry(0.14, h, 0.04);
      geo.translate(0, h * 0.5, 0);
      const ribbon = new THREE.Mesh(geo, this.materials.seaweed);
      ribbon.position.set(
        (Math.random() - 0.5) * 1.2,
        0,
        (Math.random() - 0.5) * 1.2
      );
      group.add(ribbon);
      ribbons.push(ribbon);
    }
    return { group, ribbons };
  }

  spawnSeaweedBeds(count) {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 52 + Math.random() * 45;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = this.islandWorld.getHeightAt(x, z);

      if (y < -0.8 && y > -4.0) {
        const { group, ribbons } = this.createSeaweedCluster();
        group.position.set(x, y, z);

        const data = {
          category: 'foliage',
          type: 'seaweed',
          name: 'Thảm Rong Biển',
          health: 30,
          maxHealth: 30,
          group: group,
          position: new THREE.Vector3(x, y, z),
          drops: [{ id: 'seaweed', count: 2 }],
          hint: '[E/Click] Cắt Rong Biển (30/30 HP)'
        };
        group.userData = data;

        this.scene.add(group);
        this.interactiveObjects.push(group);
        this.swaySeaweed.push({ mesh: group, ribbons, offset: Math.random() * Math.PI });
      }
    }
  }

  // --- Attack / Damage Any Foliage ---
  damageFoliage(foliageData, damage = 30) {
    if (!foliageData) return { destroyed: false };

    foliageData.health -= damage;
    foliageData.hint = `[E/Click] Tấn Công ${foliageData.name} (${Math.max(0, foliageData.health)}/${foliageData.maxHealth} HP)`;

    // Wobble on hit
    if (foliageData.group) {
      foliageData.group.rotation.z += 0.12;
      setTimeout(() => {
        if (foliageData.group) foliageData.group.rotation.z -= 0.12;
      }, 100);
    }

    if (foliageData.health <= 0) {
      this.scene.remove(foliageData.group);

      const intIdx = this.interactiveObjects.indexOf(foliageData.group);
      if (intIdx !== -1) this.interactiveObjects.splice(intIdx, 1);

      // Remove from sway lists
      const sIdx = this.swayFoliage.findIndex(item => item.mesh === foliageData.group);
      if (sIdx !== -1) this.swayFoliage.splice(sIdx, 1);

      const wIdx = this.swaySeaweed.findIndex(item => item.mesh === foliageData.group);
      if (wIdx !== -1) this.swaySeaweed.splice(wIdx, 1);

      // Spawn drops
      if (foliageData.drops) {
        foliageData.drops.forEach((d, i) => {
          this.spawnDrop(
            foliageData.position.x + (i * 0.25),
            foliageData.position.z + (i * 0.25),
            d.id,
            d.count
          );
        });
      }

      return { destroyed: true, data: foliageData };
    }

    return { destroyed: false, data: foliageData };
  }

  // --- Real-time Gentle Wind & Ocean Wave Sway ---
  update(dt) {
    this.windTime += dt * 1.8;
    const sway = Math.sin(this.windTime);

    // Sway land foliage (ferns & flower patches)
    this.swayFoliage.forEach(item => {
      const s = Math.sin(this.windTime * item.speed + item.offset) * 0.08;
      item.mesh.rotation.z = s;
      if (item.fronds) {
        item.fronds.forEach((f, idx) => {
          f.rotation.z = Math.sin(this.windTime * 1.2 + idx) * 0.05 + 0.9;
        });
      }
    });

    // Sway undersea seaweed with Gerstner ocean waves
    this.swaySeaweed.forEach(item => {
      const waveSway = Math.sin(this.windTime * 0.9 + item.offset) * 0.28;
      item.ribbons.forEach((ribbon, idx) => {
        ribbon.rotation.z = waveSway + Math.sin(this.windTime + idx) * 0.1;
      });
    });
  }
}
