// WildlifeManager.js - Rich, diverse procedural low-poly ecological system
// Land & Sea wildlife with realistic AI: strictly peaceful/neutral until attacked first!
import * as THREE from 'three';

export class WildlifeManager {
  constructor(scene, islandWorld, foliageManager, soundManager) {
    this.scene = scene;
    this.islandWorld = islandWorld;
    this.foliageManager = foliageManager;
    this.soundManager = soundManager;

    this.landAnimals = [];
    this.seaAnimals = [];
    this.fishSchools = [];
    this.interactiveEntities = []; // for raycast detection

    // References
    this.boars = []; // backwards compat
    this.shark = null;

    this.materials = this.createMaterials();
    this.init();
  }

  createMaterials() {
    return {
      // Land
      boarBody: new THREE.MeshStandardMaterial({ color: 0x4a3319, roughness: 0.9, flatShading: true }),
      boarSnout: new THREE.MeshStandardMaterial({ color: 0x6e4823, roughness: 0.8, flatShading: true }),
      tusk: new THREE.MeshStandardMaterial({ color: 0xe8e4d8, roughness: 0.4 }),
      deerCoat: new THREE.MeshStandardMaterial({ color: 0xa86c3b, roughness: 0.85, flatShading: true }),
      deerSpots: new THREE.MeshStandardMaterial({ color: 0xf5eedb, roughness: 0.8 }),
      deerAntler: new THREE.MeshStandardMaterial({ color: 0x5a4432, roughness: 0.9, flatShading: true }),
      bunnyFur: new THREE.MeshStandardMaterial({ color: 0xeae6df, roughness: 0.9, flatShading: true }),
      bunnyPink: new THREE.MeshStandardMaterial({ color: 0xf4b5b5, roughness: 0.8 }),
      crabShell: new THREE.MeshStandardMaterial({ color: 0xd94426, roughness: 0.7, flatShading: true }),
      crabClaw: new THREE.MeshStandardMaterial({ color: 0xec6035, roughness: 0.6, flatShading: true }),
      monkeyFur: new THREE.MeshStandardMaterial({ color: 0x694628, roughness: 0.9, flatShading: true }),
      monkeyFace: new THREE.MeshStandardMaterial({ color: 0xd4a373, roughness: 0.8 }),
      leopardCoat: new THREE.MeshStandardMaterial({ color: 0xd9953b, roughness: 0.85, flatShading: true }),
      leopardSpots: new THREE.MeshStandardMaterial({ color: 0x2e1e0f, roughness: 0.9 }),

      // Sea
      fishBlue: new THREE.MeshStandardMaterial({ color: 0x2288dd, roughness: 0.3, flatShading: true }),
      fishOrange: new THREE.MeshStandardMaterial({ color: 0xee7722, roughness: 0.3, flatShading: true }),
      fishYellow: new THREE.MeshStandardMaterial({ color: 0xf5c518, roughness: 0.3, flatShading: true }),
      sharkSkin: new THREE.MeshStandardMaterial({ color: 0x3d4a52, roughness: 0.6, flatShading: true }),
      sharkBelly: new THREE.MeshStandardMaterial({ color: 0xc4cdd4, roughness: 0.6, flatShading: true }),
      turtleShell: new THREE.MeshStandardMaterial({ color: 0x3d5a36, roughness: 0.8, flatShading: true }),
      turtleSkin: new THREE.MeshStandardMaterial({ color: 0x758c5a, roughness: 0.7, flatShading: true }),
      mantaBack: new THREE.MeshStandardMaterial({ color: 0x202b38, roughness: 0.6, flatShading: true }),
      mantaBelly: new THREE.MeshStandardMaterial({ color: 0xe0e6ed, roughness: 0.6, flatShading: true }),
      dolphinSkin: new THREE.MeshStandardMaterial({ color: 0x4a6d8c, roughness: 0.4, flatShading: true }),
      dolphinBelly: new THREE.MeshStandardMaterial({ color: 0xd6e4ed, roughness: 0.4, flatShading: true })
    };
  }

  init() {
    // --- 1. Spawn Land Creatures ---
    this.spawnBoars(4);
    this.spawnDeers(4);
    this.spawnBunnies(5);
    this.spawnCrabs(5);
    this.spawnMonkeys(4);
    this.spawnLeopards(3);

    // --- 2. Spawn Marine Creatures ---
    this.spawnFishSchools(8);
    this.spawnSeaTurtles(3);
    this.spawnGreatShark();
    this.spawnMantaRays(3);
    this.spawnDolphins(3);
  }

  // ==========================================
  // LAND CREATURE BUILDERS & SPAWNERS
  // ==========================================

  // --- 1. Boar (Lợn Rừng Đảo) ---
  createBoarModel() {
    const group = new THREE.Group();

    // Body
    const bodyGeo = new THREE.BoxGeometry(0.85, 0.7, 1.4);
    const body = new THREE.Mesh(bodyGeo, this.materials.boarBody);
    body.position.set(0, 0.65, 0);
    body.castShadow = true;
    group.add(body);

    // Head & Snout
    const headGroup = new THREE.Group();
    headGroup.position.set(0, 0.75, 0.75);
    group.add(headGroup);

    const headGeo = new THREE.BoxGeometry(0.55, 0.55, 0.65);
    const head = new THREE.Mesh(headGeo, this.materials.boarBody);
    head.castShadow = true;
    headGroup.add(head);

    const snoutGeo = new THREE.BoxGeometry(0.35, 0.28, 0.35);
    const snout = new THREE.Mesh(snoutGeo, this.materials.boarSnout);
    snout.position.set(0, -0.1, 0.45);
    snout.castShadow = true;
    headGroup.add(snout);

    // Tusks
    const tuskLGeo = new THREE.ConeGeometry(0.06, 0.25, 4);
    tuskLGeo.rotateX(Math.PI / 4);
    const tuskL = new THREE.Mesh(tuskLGeo, this.materials.tusk);
    tuskL.position.set(-0.2, -0.05, 0.45);
    headGroup.add(tuskL);

    const tuskR = tuskL.clone();
    tuskR.position.set(0.2, -0.05, 0.45);
    headGroup.add(tuskR);

    // 4 Legs
    const legs = [];
    const legGeo = new THREE.BoxGeometry(0.18, 0.5, 0.18);
    legGeo.translate(0, -0.25, 0);

    const legPositions = [
      [-0.32, 0.45, 0.45],
      [0.32, 0.45, 0.45],
      [-0.32, 0.45, -0.45],
      [0.32, 0.45, -0.45]
    ];

    for (let p of legPositions) {
      const legMesh = new THREE.Mesh(legGeo, this.materials.boarBody);
      legMesh.position.set(...p);
      legMesh.castShadow = true;
      group.add(legMesh);
      legs.push(legMesh);
    }

    return { group, legs, headGroup };
  }

  spawnBoars(count) {
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2 + Math.random() * 0.4;
      const radius = 24 + Math.random() * 28;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = this.islandWorld.getHeightAt(x, z);

      if (y > 0.8) {
        const { group, legs, headGroup } = this.createBoarModel();
        group.position.set(x, y, z);
        this.scene.add(group);

        const data = {
          category: 'wildlife',
          subCategory: 'land',
          type: 'boar',
          name: 'Lợn Rừng Đảo',
          icon: '🐗',
          health: 80,
          maxHealth: 80,
          group: group,
          legs: legs,
          headGroup: headGroup,
          state: 'patrol', // 'patrol' | 'charge' | 'flee'
          isAggro: false, // ONLY attacks if player attacked first!
          targetPos: new THREE.Vector3(x, y, z),
          speed: 2.2,
          chargeSpeed: 5.5,
          attackCooldown: 0,
          attackDamage: 16,
          animCycle: Math.random() * 10,
          drops: [
            { id: 'raw_meat', count: 2 },
            { id: 'stone', count: 1 }
          ],
          hint: '[E/Click] Tấn Công Lợn Rừng (80/80 HP)'
        };
        group.userData = data;

        this.landAnimals.push(data);
        this.boars.push(data);
        this.interactiveEntities.push(group);
      }
    }
  }

  // --- 2. Spotted Deer (Hươu Sao Nhiệt Đới) ---
  createDeerModel() {
    const group = new THREE.Group();

    // Body
    const bodyGeo = new THREE.BoxGeometry(0.65, 0.65, 1.35);
    const body = new THREE.Mesh(bodyGeo, this.materials.deerCoat);
    body.position.set(0, 0.95, 0);
    body.castShadow = true;
    group.add(body);

    // Decorative spots
    const spotGeo = new THREE.BoxGeometry(0.12, 0.12, 0.12);
    for (let s = -0.4; s <= 0.4; s += 0.35) {
      const spotL = new THREE.Mesh(spotGeo, this.materials.deerSpots);
      spotL.position.set(-0.33, 1.05, s);
      group.add(spotL);
      const spotR = new THREE.Mesh(spotGeo, this.materials.deerSpots);
      spotR.position.set(0.33, 1.05, s);
      group.add(spotR);
    }

    // Long Neck & Head
    const neckGeo = new THREE.BoxGeometry(0.32, 0.75, 0.35);
    neckGeo.translate(0, 0.35, 0);
    const neck = new THREE.Mesh(neckGeo, this.materials.deerCoat);
    neck.position.set(0, 1.0, 0.65);
    neck.rotation.x = -Math.PI / 6;
    neck.castShadow = true;
    group.add(neck);

    const headGeo = new THREE.BoxGeometry(0.34, 0.34, 0.5);
    const head = new THREE.Mesh(headGeo, this.materials.deerCoat);
    head.position.set(0, 0.75, 0.15);
    neck.add(head);

    // Antlers
    const antlerL = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.6, 4), this.materials.deerAntler);
    antlerL.position.set(-0.16, 0.35, -0.05);
    antlerL.rotation.z = -0.4;
    head.add(antlerL);

    const antlerR = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.6, 4), this.materials.deerAntler);
    antlerR.position.set(0.16, 0.35, -0.05);
    antlerR.rotation.z = 0.4;
    head.add(antlerR);

    // 4 Slender Legs
    const legs = [];
    const legGeo = new THREE.BoxGeometry(0.12, 0.85, 0.12);
    legGeo.translate(0, -0.42, 0);

    const legPositions = [
      [-0.24, 0.75, 0.45],
      [0.24, 0.75, 0.45],
      [-0.24, 0.75, -0.45],
      [0.24, 0.75, -0.45]
    ];

    for (let p of legPositions) {
      const legMesh = new THREE.Mesh(legGeo, this.materials.deerCoat);
      legMesh.position.set(...p);
      legMesh.castShadow = true;
      group.add(legMesh);
      legs.push(legMesh);
    }

    return { group, legs, neck };
  }

  spawnDeers(count) {
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2 + 0.3;
      const radius = 20 + Math.random() * 26;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = this.islandWorld.getHeightAt(x, z);

      if (y > 1.0) {
        const { group, legs, neck } = this.createDeerModel();
        group.position.set(x, y, z);
        this.scene.add(group);

        const data = {
          category: 'wildlife',
          subCategory: 'land',
          type: 'deer',
          name: 'Hươu Sao Nhiệt Đới',
          icon: '🦌',
          health: 60,
          maxHealth: 60,
          group: group,
          legs: legs,
          neck: neck,
          state: 'patrol',
          isAggro: false,
          isPassive: true, // Never retaliates, only flees!
          targetPos: new THREE.Vector3(x, y, z),
          speed: 2.4,
          fleeSpeed: 7.2,
          animCycle: Math.random() * 10,
          drops: [{ id: 'raw_meat', count: 2 }],
          hint: '[E/Click] Săn Hươu Sao (60/60 HP)'
        };
        group.userData = data;

        this.landAnimals.push(data);
        this.interactiveEntities.push(group);
      }
    }
  }

  // --- 3. Island Bunny (Thỏ Bông Hoang Đảo) ---
  createBunnyModel() {
    const group = new THREE.Group();

    // Body
    const bodyGeo = new THREE.BoxGeometry(0.38, 0.35, 0.55);
    const body = new THREE.Mesh(bodyGeo, this.materials.bunnyFur);
    body.position.set(0, 0.28, 0);
    body.castShadow = true;
    group.add(body);

    // Head
    const headGeo = new THREE.BoxGeometry(0.28, 0.28, 0.3);
    const head = new THREE.Mesh(headGeo, this.materials.bunnyFur);
    head.position.set(0, 0.42, 0.28);
    head.castShadow = true;
    group.add(head);

    // Nose
    const noseGeo = new THREE.BoxGeometry(0.08, 0.08, 0.08);
    const nose = new THREE.Mesh(noseGeo, this.materials.bunnyPink);
    nose.position.set(0, 0.4, 0.45);
    group.add(nose);

    // Tall Ears
    const earGeo = new THREE.BoxGeometry(0.07, 0.35, 0.1);
    const earL = new THREE.Mesh(earGeo, this.materials.bunnyFur);
    earL.position.set(-0.1, 0.68, 0.25);
    earL.rotation.z = -0.15;
    group.add(earL);

    const earR = new THREE.Mesh(earGeo, this.materials.bunnyFur);
    earR.position.set(0.1, 0.68, 0.25);
    earR.rotation.z = 0.15;
    group.add(earR);

    // Tail
    const tailGeo = new THREE.DodecahedronGeometry(0.09, 0);
    const tail = new THREE.Mesh(tailGeo, this.materials.bunnyFur);
    tail.position.set(0, 0.32, -0.32);
    group.add(tail);

    // 4 Tiny Legs
    const legs = [];
    const legGeo = new THREE.BoxGeometry(0.1, 0.18, 0.14);
    const legPositions = [
      [-0.14, 0.1, 0.18],
      [0.14, 0.1, 0.18],
      [-0.16, 0.12, -0.18],
      [0.16, 0.12, -0.18]
    ];
    for (let p of legPositions) {
      const legMesh = new THREE.Mesh(legGeo, this.materials.bunnyFur);
      legMesh.position.set(...p);
      group.add(legMesh);
      legs.push(legMesh);
    }

    return { group, legs, head };
  }

  spawnBunnies(count) {
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2 + Math.random() * 0.5;
      const radius = 14 + Math.random() * 24;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = this.islandWorld.getHeightAt(x, z);

      if (y > 0.6) {
        const { group, legs, head } = this.createBunnyModel();
        group.position.set(x, y, z);
        this.scene.add(group);

        const data = {
          category: 'wildlife',
          subCategory: 'land',
          type: 'bunny',
          name: 'Thỏ Bông Đảo',
          icon: '🐇',
          health: 30,
          maxHealth: 30,
          group: group,
          legs: legs,
          head: head,
          state: 'patrol',
          isAggro: false,
          isPassive: true, // Only flees!
          targetPos: new THREE.Vector3(x, y, z),
          speed: 1.8,
          fleeSpeed: 8.0,
          animCycle: Math.random() * 10,
          drops: [{ id: 'raw_meat', count: 1 }],
          hint: '[E/Click] Bắt Thỏ Bông (30/30 HP)'
        };
        group.userData = data;

        this.landAnimals.push(data);
        this.interactiveEntities.push(group);
      }
    }
  }

  // --- 4. Giant Coconut Crab (Cua Biển Khổng Lồ) ---
  createCrabModel() {
    const group = new THREE.Group();

    // Carapace Shell
    const shellGeo = new THREE.CylinderGeometry(0.65, 0.75, 0.3, 7);
    const shell = new THREE.Mesh(shellGeo, this.materials.crabShell);
    shell.position.set(0, 0.35, 0);
    shell.castShadow = true;
    group.add(shell);

    // Stalk Eyes
    const eyeGeo = new THREE.SphereGeometry(0.08, 6, 6);
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0x111111 });
    const eyeL = new THREE.Mesh(eyeGeo, eyeMat);
    eyeL.position.set(-0.25, 0.52, 0.5);
    group.add(eyeL);

    const eyeR = new THREE.Mesh(eyeGeo, eyeMat);
    eyeR.position.set(0.25, 0.52, 0.5);
    group.add(eyeR);

    // Two Big Pincer Claws
    const clawGeo = new THREE.BoxGeometry(0.35, 0.22, 0.45);
    const clawLGroup = new THREE.Group();
    clawLGroup.position.set(-0.6, 0.38, 0.5);
    const clawL = new THREE.Mesh(clawGeo, this.materials.crabClaw);
    clawL.position.set(0, 0, 0.2);
    clawLGroup.add(clawL);
    group.add(clawLGroup);

    const clawRGroup = new THREE.Group();
    clawRGroup.position.set(0.6, 0.38, 0.5);
    const clawR = new THREE.Mesh(clawGeo, this.materials.crabClaw);
    clawR.position.set(0, 0, 0.2);
    clawRGroup.add(clawR);
    group.add(clawRGroup);

    // 6 Walking Legs
    const legs = [];
    const legGeo = new THREE.BoxGeometry(0.1, 0.1, 0.55);
    const legSides = [-1, 1];
    for (let side of legSides) {
      for (let k = -1; k <= 1; k++) {
        const leg = new THREE.Mesh(legGeo, this.materials.crabShell);
        leg.position.set(side * 0.7, 0.2, k * 0.35);
        leg.rotation.z = side * 0.4;
        group.add(leg);
        legs.push(leg);
      }
    }

    return { group, legs, clawLGroup, clawRGroup };
  }

  spawnCrabs(count) {
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2 + 0.2;
      const radius = 45 + Math.random() * 12; // Along coastal beach sand!
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = this.islandWorld.getHeightAt(x, z);

      if (y >= 0.1 && y <= 1.4) {
        const { group, legs, clawLGroup, clawRGroup } = this.createCrabModel();
        group.position.set(x, y, z);
        this.scene.add(group);

        const data = {
          category: 'wildlife',
          subCategory: 'land',
          type: 'crab',
          name: 'Cua Biển Khổng Lồ',
          icon: '🦀',
          health: 70,
          maxHealth: 70,
          group: group,
          legs: legs,
          clawLGroup: clawLGroup,
          clawRGroup: clawRGroup,
          state: 'patrol',
          isAggro: false,
          targetPos: new THREE.Vector3(x, y, z),
          speed: 1.6,
          chargeSpeed: 4.5,
          attackCooldown: 0,
          attackDamage: 12,
          animCycle: Math.random() * 10,
          drops: [{ id: 'raw_meat', count: 2 }],
          hint: '[E/Click] Tấn Công Cua Biển (70/70 HP)'
        };
        group.userData = data;

        this.landAnimals.push(data);
        this.interactiveEntities.push(group);
      }
    }
  }

  // --- 5. Island Monkey (Khỉ Đảo Tinh Nghịch) ---
  createMonkeyModel() {
    const group = new THREE.Group();

    // Body
    const bodyGeo = new THREE.BoxGeometry(0.42, 0.55, 0.38);
    const body = new THREE.Mesh(bodyGeo, this.materials.monkeyFur);
    body.position.set(0, 0.5, 0);
    body.castShadow = true;
    group.add(body);

    // Head & Muzzle
    const headGeo = new THREE.BoxGeometry(0.34, 0.34, 0.32);
    const head = new THREE.Mesh(headGeo, this.materials.monkeyFur);
    head.position.set(0, 0.88, 0.1);
    group.add(head);

    const faceGeo = new THREE.BoxGeometry(0.24, 0.22, 0.14);
    const face = new THREE.Mesh(faceGeo, this.materials.monkeyFace);
    face.position.set(0, 0.84, 0.24);
    group.add(face);

    // Long Curly Tail
    const tailGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.7, 4);
    const tail = new THREE.Mesh(tailGeo, this.materials.monkeyFur);
    tail.position.set(0, 0.55, -0.35);
    tail.rotation.x = -Math.PI / 3;
    group.add(tail);

    // Arms & Legs
    const limbs = [];
    const armGeo = new THREE.BoxGeometry(0.12, 0.55, 0.12);
    armGeo.translate(0, -0.22, 0);

    const armL = new THREE.Mesh(armGeo, this.materials.monkeyFur);
    armL.position.set(-0.28, 0.65, 0.05);
    group.add(armL);
    limbs.push(armL);

    const armR = new THREE.Mesh(armGeo, this.materials.monkeyFur);
    armR.position.set(0.28, 0.65, 0.05);
    group.add(armR);
    limbs.push(armR);

    const legGeo = new THREE.BoxGeometry(0.13, 0.45, 0.13);
    legGeo.translate(0, -0.2, 0);

    const legL = new THREE.Mesh(legGeo, this.materials.monkeyFur);
    legL.position.set(-0.16, 0.32, -0.05);
    group.add(legL);
    limbs.push(legL);

    const legR = new THREE.Mesh(legGeo, this.materials.monkeyFur);
    legR.position.set(0.16, 0.32, -0.05);
    group.add(legR);
    limbs.push(legR);

    return { group, limbs, tail, head };
  }

  spawnMonkeys(count) {
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2 + 0.5;
      const radius = 30 + Math.random() * 18; // Near inland palms
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = this.islandWorld.getHeightAt(x, z);

      if (y > 1.2) {
        const { group, limbs, tail, head } = this.createMonkeyModel();
        group.position.set(x, y, z);
        this.scene.add(group);

        const data = {
          category: 'wildlife',
          subCategory: 'land',
          type: 'monkey',
          name: 'Khỉ Đảo Tinh Nghịch',
          icon: '🐒',
          health: 50,
          maxHealth: 50,
          group: group,
          limbs: limbs,
          tail: tail,
          head: head,
          state: 'patrol',
          isAggro: false,
          targetPos: new THREE.Vector3(x, y, z),
          speed: 2.5,
          chargeSpeed: 5.2,
          attackCooldown: 0,
          attackDamage: 10,
          animCycle: Math.random() * 10,
          drops: [
            { id: 'coconut', count: 1 },
            { id: 'palm_leaf', count: 2 }
          ],
          hint: '[E/Click] Tấn Công Khỉ Đảo (50/50 HP)'
        };
        group.userData = data;

        this.landAnimals.push(data);
        this.interactiveEntities.push(group);
      }
    }
  }

  // --- 6. Island Leopard (Báo Rừng Đốm) ---
  createLeopardModel() {
    const group = new THREE.Group();

    // Body
    const bodyGeo = new THREE.BoxGeometry(0.68, 0.6, 1.6);
    const body = new THREE.Mesh(bodyGeo, this.materials.leopardCoat);
    body.position.set(0, 0.72, 0);
    body.castShadow = true;
    group.add(body);

    // Dark Rosettes / Spots
    const spotGeo = new THREE.BoxGeometry(0.12, 0.12, 0.12);
    for (let s = -0.55; s <= 0.55; s += 0.3) {
      const spotL = new THREE.Mesh(spotGeo, this.materials.leopardSpots);
      spotL.position.set(-0.35, 0.8, s);
      group.add(spotL);
      const spotR = new THREE.Mesh(spotGeo, this.materials.leopardSpots);
      spotR.position.set(0.35, 0.8, s);
      group.add(spotR);
    }

    // Predatory Head & Snout
    const headGroup = new THREE.Group();
    headGroup.position.set(0, 0.88, 0.85);
    group.add(headGroup);

    const headGeo = new THREE.BoxGeometry(0.48, 0.44, 0.52);
    const head = new THREE.Mesh(headGeo, this.materials.leopardCoat);
    head.castShadow = true;
    headGroup.add(head);

    // Ears
    const earGeo = new THREE.ConeGeometry(0.08, 0.16, 4);
    const earL = new THREE.Mesh(earGeo, this.materials.leopardSpots);
    earL.position.set(-0.18, 0.26, 0);
    headGroup.add(earL);

    const earR = new THREE.Mesh(earGeo, this.materials.leopardSpots);
    earR.position.set(0.18, 0.26, 0);
    headGroup.add(earR);

    // Swishing Tail
    const tailGeo = new THREE.CylinderGeometry(0.05, 0.04, 1.1, 4);
    tailGeo.translate(0, 0.45, 0);
    const tail = new THREE.Mesh(tailGeo, this.materials.leopardCoat);
    tail.position.set(0, 0.75, -0.8);
    tail.rotation.x = -Math.PI / 3;
    group.add(tail);

    // 4 Powerful Paws/Legs
    const legs = [];
    const legGeo = new THREE.BoxGeometry(0.18, 0.65, 0.2);
    legGeo.translate(0, -0.3, 0);

    const legPositions = [
      [-0.26, 0.55, 0.55],
      [0.26, 0.55, 0.55],
      [-0.26, 0.55, -0.55],
      [0.26, 0.55, -0.55]
    ];
    for (let p of legPositions) {
      const legMesh = new THREE.Mesh(legGeo, this.materials.leopardCoat);
      legMesh.position.set(...p);
      legMesh.castShadow = true;
      group.add(legMesh);
      legs.push(legMesh);
    }

    return { group, legs, tail, headGroup };
  }

  spawnLeopards(count) {
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2 + 1.1;
      const radius = 28 + Math.random() * 20; // Deep jungle / slopes
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = this.islandWorld.getHeightAt(x, z);

      if (y > 2.0) {
        const { group, legs, tail, headGroup } = this.createLeopardModel();
        group.position.set(x, y, z);
        this.scene.add(group);

        const data = {
          category: 'wildlife',
          subCategory: 'land',
          type: 'leopard',
          name: 'Báo Rừng Đốm',
          icon: '🐆',
          health: 120,
          maxHealth: 120,
          group: group,
          legs: legs,
          tail: tail,
          headGroup: headGroup,
          state: 'patrol',
          isAggro: false, // DOES NOT attack unless attacked first!
          targetPos: new THREE.Vector3(x, y, z),
          speed: 2.6,
          chargeSpeed: 6.8,
          attackCooldown: 0,
          attackDamage: 22,
          animCycle: Math.random() * 10,
          drops: [{ id: 'raw_meat', count: 3 }],
          hint: '[E/Click] Tấn Công Báo Rừng (120/120 HP)'
        };
        group.userData = data;

        this.landAnimals.push(data);
        this.interactiveEntities.push(group);
      }
    }
  }

  // ==========================================
  // UNDERSEA CREATURE BUILDERS & SPAWNERS
  // ==========================================

  // --- 1. Tropical Fish Schools ---
  createFishSchool(centerPos) {
    const group = new THREE.Group();
    const fishCount = 6 + Math.floor(Math.random() * 4);
    const fishes = [];

    const fishGeo = new THREE.ConeGeometry(0.12, 0.55, 4);
    fishGeo.rotateZ(Math.PI / 2);

    for (let f = 0; f < fishCount; f++) {
      const rMat = Math.random();
      const mat = rMat < 0.4 ? this.materials.fishBlue : (rMat < 0.75 ? this.materials.fishOrange : this.materials.fishYellow);
      const mesh = new THREE.Mesh(fishGeo, mat);
      const offset = new THREE.Vector3(
        (Math.random() - 0.5) * 3,
        -0.4 - Math.random() * 0.8,
        (Math.random() - 0.5) * 3
      );
      mesh.position.copy(offset);
      group.add(mesh);
      fishes.push({ mesh, offset, speed: 1.2 + Math.random() * 0.8, angle: Math.random() * Math.PI * 2 });
    }

    group.position.copy(centerPos);
    this.scene.add(group);

    const schoolData = {
      category: 'wildlife',
      subCategory: 'sea',
      type: 'fish_school',
      name: 'Đàn Cá Biển Nhiệt Đới',
      icon: '🐟',
      group: group,
      fishes: fishes,
      center: centerPos.clone(),
      orbitRadius: 4 + Math.random() * 4,
      angle: Math.random() * Math.PI * 2,
      hint: '[F] Thả Cần Câu Bắt Cá'
    };
    group.userData = schoolData;
    this.fishSchools.push(schoolData);
    this.interactiveEntities.push(group);
  }

  spawnFishSchools(count) {
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const radius = 52 + Math.random() * 42;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = -0.6; // Shallow reef
      this.createFishSchool(new THREE.Vector3(x, y, z));
    }
  }

  // --- 2. Ancient Sea Turtle (Rùa Biển Cổ Đại) ---
  createTurtleModel() {
    const group = new THREE.Group();

    // Domed Shell
    const shellGeo = new THREE.CylinderGeometry(1.0, 1.25, 0.55, 8);
    const shell = new THREE.Mesh(shellGeo, this.materials.turtleShell);
    shell.position.set(0, 0, 0);
    shell.castShadow = true;
    group.add(shell);

    // Head
    const headGeo = new THREE.SphereGeometry(0.32, 6, 6);
    const head = new THREE.Mesh(headGeo, this.materials.turtleSkin);
    head.position.set(0, 0.1, 1.35);
    group.add(head);

    // Front Big Paddle Flippers
    const flipperGeo = new THREE.BoxGeometry(1.2, 0.08, 0.45);
    const flipperL = new THREE.Mesh(flipperGeo, this.materials.turtleSkin);
    flipperL.position.set(-1.1, 0, 0.6);
    flipperL.rotation.y = -0.3;
    group.add(flipperL);

    const flipperR = new THREE.Mesh(flipperGeo, this.materials.turtleSkin);
    flipperR.position.set(1.1, 0, 0.6);
    flipperR.rotation.y = 0.3;
    group.add(flipperR);

    // Rear Flippers
    const rFlipperGeo = new THREE.BoxGeometry(0.5, 0.06, 0.35);
    const rFlipperL = new THREE.Mesh(rFlipperGeo, this.materials.turtleSkin);
    rFlipperL.position.set(-0.7, -0.05, -1.0);
    group.add(rFlipperL);

    const rFlipperR = new THREE.Mesh(rFlipperGeo, this.materials.turtleSkin);
    rFlipperR.position.set(0.7, -0.05, -1.0);
    group.add(rFlipperR);

    return { group, flipperL, flipperR, head };
  }

  spawnSeaTurtles(count) {
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2 + 0.8;
      const radius = 60 + Math.random() * 30;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = -1.2;

      const { group, flipperL, flipperR, head } = this.createTurtleModel();
      group.position.set(x, y, z);
      this.scene.add(group);

      const data = {
        category: 'wildlife',
        subCategory: 'sea',
        type: 'turtle',
        name: 'Rùa Biển Cổ Đại',
        icon: '🐢',
        health: 100,
        maxHealth: 100,
        group: group,
        flipperL: flipperL,
        flipperR: flipperR,
        head: head,
        center: new THREE.Vector3(x, y, z),
        orbitRadius: 18 + Math.random() * 10,
        angle: Math.random() * Math.PI * 2,
        speed: 1.5,
        state: 'patrol',
        isPassive: true, // Never attacks!
        drops: [{ id: 'raw_meat', count: 2 }],
        hint: '[E/Click] Săn Rùa Biển (100/100 HP)'
      };
      group.userData = data;

      this.seaAnimals.push(data);
      this.interactiveEntities.push(group);
    }
  }

  // --- 3. Great White Shark (Cá Mập Trắng Đại Dương) ---
  spawnGreatShark() {
    const group = new THREE.Group();

    // Body
    const bodyGeo = new THREE.ConeGeometry(1.2, 5.5, 6);
    bodyGeo.rotateX(Math.PI / 2);
    const body = new THREE.Mesh(bodyGeo, this.materials.sharkSkin);
    body.castShadow = true;
    group.add(body);

    // Dorsal Fin breaking surface
    const finGeo = new THREE.ConeGeometry(0.35, 1.4, 4);
    finGeo.rotateZ(Math.PI / 6);
    const fin = new THREE.Mesh(finGeo, this.materials.sharkSkin);
    fin.position.set(0, 0.9, -0.4);
    fin.castShadow = true;
    group.add(fin);

    // Tail Fin
    const tailGeo = new THREE.BoxGeometry(0.18, 1.6, 1.0);
    const tail = new THREE.Mesh(tailGeo, this.materials.sharkSkin);
    tail.position.set(0, 0, -2.6);
    tail.castShadow = true;
    group.add(tail);

    // Sharp Teeth inside open jaw
    const jawGeo = new THREE.ConeGeometry(0.8, 1.2, 5);
    jawGeo.rotateX(-Math.PI / 2);
    const jaw = new THREE.Mesh(jawGeo, this.materials.sharkBelly);
    jaw.position.set(0, -0.2, 2.2);
    group.add(jaw);

    // Patrol center around sunken galleon shipwreck (120, -1.0, -95)
    const center = new THREE.Vector3(120, -0.45, -95);
    group.position.copy(center);
    this.scene.add(group);

    const sharkData = {
      category: 'wildlife',
      subCategory: 'sea',
      type: 'shark',
      name: 'Cá Mập Trắng Đại Dương',
      icon: '🦈',
      health: 180,
      maxHealth: 180,
      group: group,
      tail: tail,
      center: center,
      patrolRadius: 30,
      angle: 0,
      speed: 3.5,
      chargeSpeed: 7.2,
      state: 'patrol',
      isAggro: false, // ONLY retaliates if player attacks first!
      attackCooldown: 0,
      attackDamage: 28,
      drops: [{ id: 'raw_meat', count: 4 }],
      hint: '[E/Click] Tấn Công Cá Mập (180/180 HP)'
    };
    group.userData = sharkData;

    this.shark = sharkData;
    this.seaAnimals.push(sharkData);
    this.interactiveEntities.push(group);
  }

  // --- 4. Giant Manta Ray (Cá Đuối Khổng Lồ) ---
  createMantaModel() {
    const group = new THREE.Group();

    // Broad Diamond Wings
    const wingGeo = new THREE.ConeGeometry(2.4, 3.2, 4);
    wingGeo.rotateX(Math.PI / 2);
    wingGeo.scale(1.0, 0.12, 1.0);
    const wings = new THREE.Mesh(wingGeo, this.materials.mantaBack);
    wings.castShadow = true;
    group.add(wings);

    // Pale Belly
    const bellyGeo = new THREE.ConeGeometry(2.3, 3.1, 4);
    bellyGeo.rotateX(Math.PI / 2);
    bellyGeo.scale(1.0, 0.08, 1.0);
    const belly = new THREE.Mesh(bellyGeo, this.materials.mantaBelly);
    belly.position.set(0, -0.06, 0);
    group.add(belly);

    // Long Whip Tail
    const tailGeo = new THREE.CylinderGeometry(0.04, 0.02, 3.2, 4);
    tailGeo.rotateX(Math.PI / 2);
    const tail = new THREE.Mesh(tailGeo, this.materials.mantaBack);
    tail.position.set(0, 0, -2.2);
    group.add(tail);

    return { group, wings, tail };
  }

  spawnMantaRays(count) {
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2 + 1.6;
      const radius = 68 + Math.random() * 25;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = -2.2; // Glides near seabed

      const { group, wings, tail } = this.createMantaModel();
      group.position.set(x, y, z);
      this.scene.add(group);

      const data = {
        category: 'wildlife',
        subCategory: 'sea',
        type: 'manta',
        name: 'Cá Đuối Khổng Lồ',
        icon: '🐟',
        health: 90,
        maxHealth: 90,
        group: group,
        wings: wings,
        tail: tail,
        center: new THREE.Vector3(x, y, z),
        orbitRadius: 22 + Math.random() * 12,
        angle: Math.random() * Math.PI * 2,
        speed: 2.2,
        state: 'patrol',
        isAggro: false,
        attackCooldown: 0,
        attackDamage: 14,
        drops: [{ id: 'raw_meat', count: 2 }],
        hint: '[E/Click] Tấn Công Cá Đuối (90/90 HP)'
      };
      group.userData = data;

      this.seaAnimals.push(data);
      this.interactiveEntities.push(group);
    }
  }

  // --- 5. Island Dolphin (Cá Heo Đảo Xanh) ---
  createDolphinModel() {
    const group = new THREE.Group();

    // Body
    const bodyGeo = new THREE.ConeGeometry(0.65, 3.2, 6);
    bodyGeo.rotateX(Math.PI / 2);
    const body = new THREE.Mesh(bodyGeo, this.materials.dolphinSkin);
    body.castShadow = true;
    group.add(body);

    // Curved Beak / Snout
    const snoutGeo = new THREE.ConeGeometry(0.22, 0.6, 5);
    snoutGeo.rotateX(Math.PI / 2);
    const snout = new THREE.Mesh(snoutGeo, this.materials.dolphinSkin);
    snout.position.set(0, -0.05, 1.8);
    group.add(snout);

    // Dorsal Fin
    const finGeo = new THREE.ConeGeometry(0.25, 0.8, 4);
    finGeo.rotateZ(Math.PI / 4);
    const fin = new THREE.Mesh(finGeo, this.materials.dolphinSkin);
    fin.position.set(0, 0.55, -0.2);
    group.add(fin);

    // Tail Flukes
    const flukeGeo = new THREE.BoxGeometry(0.9, 0.08, 0.35);
    const flukes = new THREE.Mesh(flukeGeo, this.materials.dolphinSkin);
    flukes.position.set(0, 0, -1.65);
    group.add(flukes);

    return { group, flukes };
  }

  spawnDolphins(count) {
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2 + 2.4;
      const radius = 58 + Math.random() * 26;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = -0.8;

      const { group, flukes } = this.createDolphinModel();
      group.position.set(x, y, z);
      this.scene.add(group);

      const data = {
        category: 'wildlife',
        subCategory: 'sea',
        type: 'dolphin',
        name: 'Cá Heo Đảo Xanh',
        icon: '🐬',
        health: 80,
        maxHealth: 80,
        group: group,
        flukes: flukes,
        center: new THREE.Vector3(x, y, z),
        orbitRadius: 26 + Math.random() * 12,
        angle: Math.random() * Math.PI * 2,
        speed: 3.8,
        state: 'patrol',
        isPassive: true, // Friendly, never attacks!
        leapProgress: 0,
        drops: [{ id: 'raw_meat', count: 1 }],
        hint: '[E/Click] Quan Sát Cá Heo Đảo'
      };
      group.userData = data;

      this.seaAnimals.push(data);
      this.interactiveEntities.push(group);
    }
  }

  // ==========================================
  // CENTRAL AI UPDATE LOOP
  // ==========================================
  update(dt, player, onPlayerDamage) {
    this.updateLandAnimals(dt, player, onPlayerDamage);
    this.updateFishSchools(dt);
    this.updateSeaAnimals(dt, player, onPlayerDamage);
  }

  // --- Land Animals AI ---
  updateLandAnimals(dt, player, onPlayerDamage) {
    this.landAnimals.forEach(animal => {
      animal.animCycle += dt * (animal.state === 'charge' ? 12 : 5);
      const walkAnim = Math.sin(animal.animCycle);

      // Leg swing animations
      if (animal.legs && animal.legs.length >= 4) {
        animal.legs[0].rotation.x = walkAnim * 0.6;
        animal.legs[1].rotation.x = -walkAnim * 0.6;
        animal.legs[2].rotation.x = -walkAnim * 0.6;
        animal.legs[3].rotation.x = walkAnim * 0.6;
      } else if (animal.legs && animal.legs.length === 6) {
        // Crab leg ripple
        animal.legs.forEach((leg, idx) => {
          leg.rotation.z = Math.sin(animal.animCycle + idx * 0.5) * 0.35 + (idx < 3 ? -0.4 : 0.4);
        });
      }

      // Tail swish / claw snap
      if (animal.tail) animal.tail.rotation.y = Math.sin(animal.animCycle * 1.4) * 0.35;
      if (animal.clawLGroup && animal.clawRGroup) {
        animal.clawLGroup.rotation.y = Math.sin(animal.animCycle) * 0.3;
        animal.clawRGroup.rotation.y = -Math.sin(animal.animCycle) * 0.3;
      }

      if (animal.attackCooldown > 0) animal.attackCooldown -= dt;
      const distToPlayer = animal.group.position.distanceTo(player.position);

      // AI States:
      // CRITICAL RULE: In 'patrol' or 'idle', NEVER autonomously attack the player!
      if (animal.state === 'patrol') {
        const dir = new THREE.Vector3().subVectors(animal.targetPos, animal.group.position);
        dir.y = 0;

        if (dir.length() < 1.5) {
          // Pick new gentle wander waypoint within 18m
          const rx = animal.group.position.x + (Math.random() - 0.5) * 25;
          const rz = animal.group.position.z + (Math.random() - 0.5) * 25;
          const ry = this.islandWorld.getHeightAt(rx, rz);
          if (ry > 0.3) {
            animal.targetPos.set(rx, ry, rz);
          }
        } else {
          dir.normalize();
          animal.group.position.addScaledVector(dir, animal.speed * dt);
          animal.group.rotation.y = Math.atan2(dir.x, dir.z);
        }
      }
      // ONLY triggers when player ATTACKED the animal first!
      else if (animal.state === 'charge') {
        const dir = new THREE.Vector3().subVectors(player.position, animal.group.position);
        dir.y = 0;
        dir.normalize();

        const curChargeSpeed = animal.chargeSpeed || 5.5;
        animal.group.position.addScaledVector(dir, curChargeSpeed * dt);
        animal.group.rotation.y = Math.atan2(dir.x, dir.z);

        // Counter-strike player
        if (distToPlayer < 2.2 && animal.attackCooldown <= 0) {
          animal.attackCooldown = 1.8;
          const dmg = animal.attackDamage || 16;
          onPlayerDamage(dmg, `Bị ${animal.name} phản công!`);

          if (animal.type === 'boar') this.soundManager.playAnimalGrunt();
          else if (animal.type === 'leopard') this.soundManager.playLeopardRoar();
          else if (animal.type === 'crab') this.soundManager.playCrabSnap();
          else this.soundManager.playAnimalHit();
        }

        // Lost interest if player flees far away
        if (distToPlayer > 30) {
          animal.state = 'patrol';
          animal.isAggro = false;
        }
      }
      // Flee in panic when damaged
      else if (animal.state === 'flee') {
        const dir = new THREE.Vector3().subVectors(animal.group.position, player.position);
        dir.y = 0;
        dir.normalize();

        const curFleeSpeed = animal.fleeSpeed || 7.0;
        animal.group.position.addScaledVector(dir, curFleeSpeed * dt);
        animal.group.rotation.y = Math.atan2(dir.x, dir.z);

        if (distToPlayer > 35) {
          animal.state = 'patrol';
        }
      }

      // Snap animal feet firmly to terrain
      const tY = this.islandWorld.getHeightAt(animal.group.position.x, animal.group.position.z);
      animal.group.position.y = Math.max(0.1, tY);
    });
  }

  // --- Tropical Fish Schools ---
  updateFishSchools(dt) {
    this.fishSchools.forEach(school => {
      school.angle += dt * 0.35;
      school.group.position.x = school.center.x + Math.cos(school.angle) * school.orbitRadius;
      school.group.position.z = school.center.z + Math.sin(school.angle) * school.orbitRadius;
      school.group.rotation.y = school.angle + Math.PI / 2;

      school.fishes.forEach((fish, i) => {
        fish.mesh.rotation.y = Math.sin(Date.now() * 0.006 + i) * 0.35;
      });
    });
  }

  // --- Marine Creatures AI ---
  updateSeaAnimals(dt, player, onPlayerDamage) {
    const isPlayerInWater = player.position.y < 0.2;

    this.seaAnimals.forEach(seaCreature => {
      const distToPlayer = seaCreature.group.position.distanceTo(player.position);
      if (seaCreature.attackCooldown > 0) seaCreature.attackCooldown -= dt;

      // 1. Great White Shark
      if (seaCreature.type === 'shark') {
        seaCreature.tail.rotation.y = Math.sin(Date.now() * 0.007) * 0.45;

        // CRITICAL RULE: Shark ONLY attacks if player provoked / attacked it!
        if (seaCreature.state === 'charge') {
          // Fury retaliatory strike!
          const dir = new THREE.Vector3().subVectors(player.position, seaCreature.group.position);
          dir.y = 0;
          dir.normalize();

          seaCreature.group.position.addScaledVector(dir, seaCreature.chargeSpeed * dt);
          seaCreature.group.rotation.y = Math.atan2(dir.x, dir.z) + Math.PI;

          // Shark bite
          if (distToPlayer < 3.2 && isPlayerInWater && seaCreature.attackCooldown <= 0) {
            seaCreature.attackCooldown = 2.0;
            onPlayerDamage(seaCreature.attackDamage, 'Bị Cá Mập Trắng tấn công cắn xé!');
            this.soundManager.playSharkWarning();
          }

          // Player escaped to land or swam far away
          if (distToPlayer > 48 || !isPlayerInWater) {
            seaCreature.state = 'patrol';
            seaCreature.isAggro = false;
          }
        } else if (seaCreature.state === 'flee') {
          const dir = new THREE.Vector3().subVectors(seaCreature.group.position, player.position);
          dir.y = 0;
          dir.normalize();
          seaCreature.group.position.addScaledVector(dir, 5.0 * dt);
          if (distToPlayer > 40) seaCreature.state = 'patrol';
        } else {
          // Peaceful territorial circling around Shipwreck
          seaCreature.angle += dt * 0.35;
          seaCreature.group.position.x = seaCreature.center.x + Math.cos(seaCreature.angle) * seaCreature.patrolRadius;
          seaCreature.group.position.z = seaCreature.center.z + Math.sin(seaCreature.angle) * seaCreature.patrolRadius;
          seaCreature.group.rotation.y = -seaCreature.angle;
        }

        seaCreature.group.position.y = -0.45; // Fin cutting surface
      }

      // 2. Ancient Sea Turtle
      else if (seaCreature.type === 'turtle') {
        const flap = Math.sin(Date.now() * 0.003) * 0.35;
        seaCreature.flipperL.rotation.z = flap;
        seaCreature.flipperR.rotation.z = -flap;

        if (seaCreature.state === 'flee') {
          seaCreature.angle += dt * 0.6;
          seaCreature.group.position.x = seaCreature.center.x + Math.cos(seaCreature.angle) * (seaCreature.orbitRadius + 15);
          seaCreature.group.position.z = seaCreature.center.z + Math.sin(seaCreature.angle) * (seaCreature.orbitRadius + 15);
          seaCreature.group.rotation.y = -seaCreature.angle;
          if (distToPlayer > 30) seaCreature.state = 'patrol';
        } else {
          seaCreature.angle += dt * 0.2;
          seaCreature.group.position.x = seaCreature.center.x + Math.cos(seaCreature.angle) * seaCreature.orbitRadius;
          seaCreature.group.position.z = seaCreature.center.z + Math.sin(seaCreature.angle) * seaCreature.orbitRadius;
          seaCreature.group.rotation.y = -seaCreature.angle;
        }
        seaCreature.group.position.y = -1.2;
      }

      // 3. Giant Manta Ray
      else if (seaCreature.type === 'manta') {
        const wingRipple = Math.sin(Date.now() * 0.004) * 0.25;
        seaCreature.wings.rotation.z = wingRipple;
        seaCreature.tail.rotation.y = Math.sin(Date.now() * 0.006) * 0.3;

        if (seaCreature.state === 'charge') {
          // Defend with tail whip
          const dir = new THREE.Vector3().subVectors(player.position, seaCreature.group.position);
          dir.y = 0;
          dir.normalize();
          seaCreature.group.position.addScaledVector(dir, 4.0 * dt);
          seaCreature.group.rotation.y = Math.atan2(dir.x, dir.z);

          if (distToPlayer < 3.0 && seaCreature.attackCooldown <= 0) {
            seaCreature.attackCooldown = 2.2;
            onPlayerDamage(seaCreature.attackDamage, 'Bị Cá Đuối quất đuôi tự vệ!');
            this.soundManager.playAnimalHit();
          }
          if (distToPlayer > 28 || !isPlayerInWater) {
            seaCreature.state = 'patrol';
          }
        } else {
          seaCreature.angle += dt * 0.25;
          seaCreature.group.position.x = seaCreature.center.x + Math.cos(seaCreature.angle) * seaCreature.orbitRadius;
          seaCreature.group.position.z = seaCreature.center.z + Math.sin(seaCreature.angle) * seaCreature.orbitRadius;
          seaCreature.group.rotation.y = -seaCreature.angle;
        }
        seaCreature.group.position.y = -2.2;
      }

      // 4. Island Dolphin
      else if (seaCreature.type === 'dolphin') {
        seaCreature.flukes.rotation.x = Math.sin(Date.now() * 0.008) * 0.45;
        seaCreature.angle += dt * 0.38;

        // Graceful leaping arc out of water!
        seaCreature.leapProgress += dt * 0.8;
        const leapY = Math.sin(seaCreature.leapProgress) * 1.5 - 0.7;

        seaCreature.group.position.x = seaCreature.center.x + Math.cos(seaCreature.angle) * seaCreature.orbitRadius;
        seaCreature.group.position.z = seaCreature.center.z + Math.sin(seaCreature.angle) * seaCreature.orbitRadius;
        seaCreature.group.position.y = leapY;
        seaCreature.group.rotation.y = -seaCreature.angle;
        seaCreature.group.rotation.x = Math.cos(seaCreature.leapProgress) * 0.4;
      }
    });
  }

  // ==========================================
  // UNIFIED COMBAT & DAMAGE HANDLER
  // ==========================================
  damageEntity(entityData, damage) {
    if (!entityData) return { killed: false };

    entityData.health -= damage;
    this.soundManager.playAnimalHit();

    // Update dynamic HUD text
    entityData.hint = `[E/Click] Tấn Công ${entityData.name} (${Math.max(0, entityData.health)}/${entityData.maxHealth} HP)`;

    // Check if defeated
    if (entityData.health <= 0) {
      this.scene.remove(entityData.group);

      // Remove from collections
      const lIdx = this.landAnimals.indexOf(entityData);
      if (lIdx !== -1) this.landAnimals.splice(lIdx, 1);

      const sIdx = this.seaAnimals.indexOf(entityData);
      if (sIdx !== -1) this.seaAnimals.splice(sIdx, 1);

      const bIdx = this.boars.indexOf(entityData);
      if (bIdx !== -1) this.boars.splice(bIdx, 1);

      if (this.shark === entityData) this.shark = null;

      const intIdx = this.interactiveEntities.indexOf(entityData.group);
      if (intIdx !== -1) this.interactiveEntities.splice(intIdx, 1);

      // Spawn loot drops
      const drops = entityData.drops || [{ id: 'raw_meat', count: 2 }];
      drops.forEach((drop, i) => {
        this.foliageManager.spawnDrop(
          entityData.group.position.x + (i * 0.35),
          entityData.group.position.z + (i * 0.35),
          drop.id,
          drop.count
        );
      });

      return { killed: true, data: entityData };
    }

    // Creature is alive: React to being attacked!
    if (entityData.isPassive) {
      // Passive creature flees in fear!
      entityData.state = 'flee';
    } else {
      // Retaliatory creature enters counter-charge!
      entityData.state = entityData.health < 25 ? 'flee' : 'charge';
      entityData.isAggro = true;

      if (entityData.type === 'boar') this.soundManager.playAnimalGrunt();
      else if (entityData.type === 'leopard') this.soundManager.playLeopardRoar();
      else if (entityData.type === 'shark') this.soundManager.playSharkWarning();
      else if (entityData.type === 'crab') this.soundManager.playCrabSnap();
      else if (entityData.type === 'dolphin') this.soundManager.playDolphinWhistle();
    }

    return { killed: false, data: entityData };
  }

  // --- Backwards Compatibility Wrappers ---
  damageBoar(boarData, damage) {
    const res = this.damageEntity(boarData, damage);
    return res.killed;
  }

  damageShark(damage) {
    if (!this.shark) return false;
    const res = this.damageEntity(this.shark, damage);
    return res.killed;
  }
}
