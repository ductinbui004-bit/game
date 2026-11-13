// Player.js - Realistic articulated humanoid character, natural human kinematics, dynamic hunting combat, and swimming/diving physics
import * as THREE from 'three';

export class Player {
  constructor(scene, camera, islandWorld, gender = 'male') {
    this.scene = scene;
    this.camera = camera;
    this.islandWorld = islandWorld;
    this.gender = gender;

    // View mode: 'first_person' or 'third_person'
    this.viewMode = 'first_person';

    // Position & physics
    this.position = new THREE.Vector3(0, 3, 25);
    this.velocity = new THREE.Vector3();
    this.rotationY = 0; // Yaw
    this.pitch = 0; // Camera pitch

    // Dynamic rotation & camera smoothing (Mini World / Roblox style)
    this.currentBodyYaw = 0;
    this.targetBodyYaw = 0;
    this.smoothedCamPos = new THREE.Vector3();
    this.hasInitializedCam = false;

    this.isGrounded = true;
    this.wasGrounded = true;
    this.landingTimer = 0;

    this.isSwimming = false;
    this.isUnderwater = false;
    this.isSprinting = false;
    this.isCrouching = false;
    this.isSwinging = false;
    this.swingProgress = 0;
    this.punchHand = 0; // 0 for right, 1 for left punch

    // Speeds
    this.walkSpeed = 5.5;
    this.runSpeed = 9.2;
    this.swimSpeed = 4.4;
    this.jumpForce = 7.6;
    this.gravity = -20;

    // Procedural 3D model & articulated bones
    this.modelGroup = new THREE.Group();
    this.heldItemSlot = new THREE.Group();
    this.torchLight = null;
    this.bones = {};
    this.equippedItemId = 'pickaxe'; // Default equipped
    this.animTime = 0;
    this.stepTimer = 0;

    // Underwater diving bubble particles
    this.bubbles = [];
    this.bubbleTimer = 0;

    this.init();
  }

  init() {
    this.buildProceduralCharacter();
    this.scene.add(this.modelGroup);
    this.setupTorchLight();
    this.setupUnderwaterBubbles();
    this.updateViewMode();
  }

  setGender(gender) {
    this.gender = gender;
    while (this.modelGroup.children.length > 0) {
      this.modelGroup.remove(this.modelGroup.children[0]);
    }
    this.buildProceduralCharacter();
    this.setupTorchLight();
    this.updateViewMode();
  }

  // --- Realistic Articulated Humanoid Model ---
  buildProceduralCharacter() {
    const isMale = this.gender === 'male';

    // Natural skin & clothing tones
    const skinColor = isMale ? 0xcfa27a : 0xdfb48c;
    const tunicColor = isMale ? 0x7c4922 : 0x27593c;
    const leatherColor = 0x422915;
    const hairColor = isMale ? 0x1f140e : 0x331c11;
    const trimColor = isMale ? 0xb45309 : 0x0284c7;

    const skinMat = new THREE.MeshStandardMaterial({ color: skinColor, roughness: 0.75, flatShading: true });
    const tunicMat = new THREE.MeshStandardMaterial({ color: tunicColor, roughness: 0.85, flatShading: true });
    const leatherMat = new THREE.MeshStandardMaterial({ color: leatherColor, roughness: 0.8, flatShading: true });
    const hairMat = new THREE.MeshStandardMaterial({ color: hairColor, roughness: 0.9, flatShading: true });
    const trimMat = new THREE.MeshStandardMaterial({ color: trimColor, roughness: 0.7, flatShading: true });
    const eyeWhiteMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const pupilMat = new THREE.MeshBasicMaterial({ color: 0x0f172a });
    const lipMat = new THREE.MeshStandardMaterial({ color: 0x9b584d, roughness: 0.6 });

    // 1. Root Pelvis (Hips)
    const pelvis = new THREE.Group();
    pelvis.position.set(0, 0.95, 0);
    this.modelGroup.add(pelvis);

    // Hips / Lower Abdomen Mesh
    const hipGeo = new THREE.BoxGeometry(isMale ? 0.48 : 0.44, 0.22, 0.28);
    const hipMesh = new THREE.Mesh(hipGeo, tunicMat);
    hipMesh.position.set(0, 0, 0);
    hipMesh.castShadow = true;
    pelvis.add(hipMesh);

    // Primitive Leather Belt
    const beltGeo = new THREE.BoxGeometry(isMale ? 0.52 : 0.48, 0.1, 0.32);
    const belt = new THREE.Mesh(beltGeo, leatherMat);
    belt.position.set(0, 0.08, 0);
    pelvis.add(belt);

    // Bronze / Stone Belt Buckle
    const buckleGeo = new THREE.BoxGeometry(0.12, 0.08, 0.04);
    const buckleMat = new THREE.MeshStandardMaterial({ color: 0xca8a04, metalness: 0.6, roughness: 0.4 });
    const buckle = new THREE.Mesh(buckleGeo, buckleMat);
    buckle.position.set(0, 0.08, 0.17);
    pelvis.add(buckle);

    // Loincloth Flap (hangs down in front)
    const flapGeo = new THREE.BoxGeometry(0.24, 0.32, 0.04);
    flapGeo.translate(0, -0.16, 0);
    const loincloth = new THREE.Mesh(flapGeo, leatherMat);
    loincloth.position.set(0, 0.06, 0.15);
    pelvis.add(loincloth);

    // 2. Torso Group (Chest, Shoulders & Ribcage)
    const torsoGroup = new THREE.Group();
    torsoGroup.position.set(0, 0.12, 0);
    pelvis.add(torsoGroup);

    const chestW = isMale ? 0.64 : 0.52;
    const chestH = 0.55;
    const chestD = 0.34;
    const chestGeo = new THREE.BoxGeometry(chestW, chestH, chestD);
    chestGeo.translate(0, chestH * 0.5, 0);
    const chestMesh = new THREE.Mesh(chestGeo, tunicMat);
    chestMesh.castShadow = true;
    torsoGroup.add(chestMesh);

    if (isMale) {
      // Warrior Fur Sash across chest
      const sashGeo = new THREE.BoxGeometry(0.16, 0.65, 0.06);
      const sash = new THREE.Mesh(sashGeo, leatherMat);
      sash.position.set(0, 0.3, 0.16);
      sash.rotation.z = 0.45;
      torsoGroup.add(sash);
    }

    // 3. Neck & Realistic Head
    const neckGroup = new THREE.Group();
    neckGroup.position.set(0, chestH + 0.02, 0);
    torsoGroup.add(neckGroup);

    const neckGeo = new THREE.CylinderGeometry(0.12, 0.14, 0.14, 6);
    neckGeo.translate(0, 0.07, 0);
    const neck = new THREE.Mesh(neckGeo, skinMat);
    neckGroup.add(neck);

    const headGroup = new THREE.Group();
    headGroup.position.set(0, 0.14, 0);
    neckGroup.add(headGroup);

    // Cranium with sculpted jaw
    const headGeo = new THREE.BoxGeometry(0.34, 0.36, 0.34);
    headGeo.translate(0, 0.18, 0);
    const headMesh = new THREE.Mesh(headGeo, skinMat);
    headMesh.castShadow = true;
    headGroup.add(headMesh);

    // 3D Eyes (White sclera + Pupils)
    const eyeGeo = new THREE.BoxGeometry(0.065, 0.045, 0.02);
    const pupilGeo = new THREE.BoxGeometry(0.035, 0.035, 0.025);

    // Left Eye
    const eyeL = new THREE.Mesh(eyeGeo, eyeWhiteMat);
    eyeL.position.set(-0.08, 0.21, 0.18);
    headGroup.add(eyeL);
    const pupL = new THREE.Mesh(pupilGeo, pupilMat);
    pupL.position.set(-0.08, 0.21, 0.185);
    headGroup.add(pupL);

    // Right Eye
    const eyeR = new THREE.Mesh(eyeGeo, eyeWhiteMat);
    eyeR.position.set(0.08, 0.21, 0.18);
    headGroup.add(eyeR);
    const pupR = new THREE.Mesh(pupilGeo, pupilMat);
    pupR.position.set(0.08, 0.21, 0.185);
    headGroup.add(pupR);

    // Nose Bridge
    const noseGeo = new THREE.BoxGeometry(0.055, 0.09, 0.06);
    const nose = new THREE.Mesh(noseGeo, skinMat);
    nose.position.set(0, 0.17, 0.2);
    headGroup.add(nose);

    // Lips / Mouth
    const lipGeo = new THREE.BoxGeometry(0.1, 0.03, 0.02);
    const lips = new THREE.Mesh(lipGeo, lipMat);
    lips.position.set(0, 0.09, 0.18);
    headGroup.add(lips);

    // Ears
    const earGeo = new THREE.BoxGeometry(0.04, 0.08, 0.06);
    const earL = new THREE.Mesh(earGeo, skinMat);
    earL.position.set(-0.19, 0.2, 0);
    headGroup.add(earL);
    const earR = new THREE.Mesh(earGeo, skinMat);
    earR.position.set(0.19, 0.2, 0);
    headGroup.add(earR);

    // Hair Top & Sides
    const hairTopGeo = new THREE.BoxGeometry(0.38, 0.15, 0.38);
    hairTopGeo.translate(0, 0.38, 0);
    const hairTop = new THREE.Mesh(hairTopGeo, hairMat);
    headGroup.add(hairTop);

    // Headband
    const bandGeo = new THREE.BoxGeometry(0.39, 0.06, 0.39);
    bandGeo.translate(0, 0.28, 0);
    const band = new THREE.Mesh(bandGeo, trimMat);
    headGroup.add(band);

    if (isMale) {
      // Warrior Beard & Sideburns
      const beardGeo = new THREE.BoxGeometry(0.3, 0.16, 0.18);
      const beard = new THREE.Mesh(beardGeo, hairMat);
      beard.position.set(0, 0.05, 0.12);
      headGroup.add(beard);
    } else {
      // Huntress Braids & Feather
      const braidGeo = new THREE.BoxGeometry(0.09, 0.5, 0.09);
      const braidL = new THREE.Mesh(braidGeo, hairMat);
      braidL.position.set(-0.14, 0.05, -0.16);
      braidL.rotation.x = -0.2;
      headGroup.add(braidL);

      const braidR = new THREE.Mesh(braidGeo, hairMat);
      braidR.position.set(0.14, 0.05, -0.16);
      braidR.rotation.x = -0.2;
      headGroup.add(braidR);

      const featherGeo = new THREE.ConeGeometry(0.05, 0.3, 4);
      const feather = new THREE.Mesh(featherGeo, trimMat);
      feather.position.set(0.2, 0.36, -0.05);
      feather.rotation.z = -0.4;
      headGroup.add(feather);
    }

    // 4. Dual-Jointed Arms (Upper Arm -> Elbow -> Forearm -> Hand)
    const armRadius = isMale ? 0.09 : 0.075;
    const upperArmLen = 0.34;
    const forearmLen = 0.34;

    // --- Left Arm ---
    const leftShoulder = new THREE.Group();
    leftShoulder.position.set(-chestW * 0.56, chestH * 0.88, 0);
    torsoGroup.add(leftShoulder);

    const leftUpperArm = new THREE.Group();
    leftShoulder.add(leftUpperArm);

    const uArmGeo = new THREE.BoxGeometry(armRadius * 2, upperArmLen, armRadius * 2);
    uArmGeo.translate(0, -upperArmLen * 0.5, 0);
    const uArmMeshL = new THREE.Mesh(uArmGeo, skinMat);
    uArmMeshL.castShadow = true;
    leftUpperArm.add(uArmMeshL);

    const leftElbow = new THREE.Group();
    leftElbow.position.set(0, -upperArmLen, 0);
    leftUpperArm.add(leftElbow);

    const fArmGeo = new THREE.BoxGeometry(armRadius * 1.8, forearmLen, armRadius * 1.8);
    fArmGeo.translate(0, -forearmLen * 0.5, 0);
    const fArmMeshL = new THREE.Mesh(fArmGeo, skinMat);
    fArmMeshL.castShadow = true;
    leftElbow.add(fArmMeshL);

    // Left Bracer & Hand
    const bracerGeo = new THREE.BoxGeometry(armRadius * 2.1, 0.16, armRadius * 2.1);
    const bracerL = new THREE.Mesh(bracerGeo, leatherMat);
    bracerL.position.set(0, -forearmLen * 0.55, 0);
    leftElbow.add(bracerL);

    const handGeo = new THREE.BoxGeometry(0.12, 0.12, 0.12);
    const leftHand = new THREE.Mesh(handGeo, skinMat);
    leftHand.position.set(0, -forearmLen, 0);
    leftElbow.add(leftHand);

    // --- Right Arm (Weapon Arm) ---
    const rightShoulder = new THREE.Group();
    rightShoulder.position.set(chestW * 0.56, chestH * 0.88, 0);
    torsoGroup.add(rightShoulder);

    const rightUpperArm = new THREE.Group();
    rightShoulder.add(rightUpperArm);

    const uArmMeshR = new THREE.Mesh(uArmGeo, skinMat);
    uArmMeshR.castShadow = true;
    rightUpperArm.add(uArmMeshR);

    const rightElbow = new THREE.Group();
    rightElbow.position.set(0, -upperArmLen, 0);
    rightUpperArm.add(rightElbow);

    const fArmMeshR = new THREE.Mesh(fArmGeo, skinMat);
    fArmMeshR.castShadow = true;
    rightElbow.add(fArmMeshR);

    const bracerR = new THREE.Mesh(bracerGeo, leatherMat);
    bracerR.position.set(0, -forearmLen * 0.55, 0);
    rightElbow.add(bracerR);

    const rightHand = new THREE.Mesh(handGeo, skinMat);
    rightHand.position.set(0, -forearmLen, 0);
    rightElbow.add(rightHand);

    // Weapon Slot attached to right hand
    this.heldItemSlot = new THREE.Group();
    this.heldItemSlot.position.set(0, -forearmLen - 0.04, 0.1);
    rightElbow.add(this.heldItemSlot);

    // 5. Dual-Jointed Legs (Hip -> Thigh -> Knee -> Calf -> Foot)
    const legWidth = isMale ? 0.18 : 0.16;
    const thighLen = 0.44;
    const calfLen = 0.42;

    // --- Left Leg ---
    const leftHip = new THREE.Group();
    leftHip.position.set(-0.16, -0.05, 0);
    pelvis.add(leftHip);

    const leftThigh = new THREE.Group();
    leftHip.add(leftThigh);

    const thighGeo = new THREE.BoxGeometry(legWidth, thighLen, legWidth);
    thighGeo.translate(0, -thighLen * 0.5, 0);
    const thighMeshL = new THREE.Mesh(thighGeo, skinMat);
    thighMeshL.castShadow = true;
    leftThigh.add(thighMeshL);

    const leftKnee = new THREE.Group();
    leftKnee.position.set(0, -thighLen, 0);
    leftThigh.add(leftKnee);

    const calfGeo = new THREE.BoxGeometry(legWidth * 0.95, calfLen, legWidth * 0.95);
    calfGeo.translate(0, -calfLen * 0.5, 0);
    const calfMeshL = new THREE.Mesh(calfGeo, skinMat);
    calfMeshL.castShadow = true;
    leftKnee.add(calfMeshL);

    // Leather Boots
    const bootGeo = new THREE.BoxGeometry(legWidth * 1.1, 0.22, legWidth * 1.5);
    bootGeo.translate(0, -calfLen + 0.08, 0.04);
    const bootL = new THREE.Mesh(bootGeo, leatherMat);
    bootL.castShadow = true;
    leftKnee.add(bootL);

    // --- Right Leg ---
    const rightHip = new THREE.Group();
    rightHip.position.set(0.16, -0.05, 0);
    pelvis.add(rightHip);

    const rightThigh = new THREE.Group();
    rightHip.add(rightThigh);

    const thighMeshR = new THREE.Mesh(thighGeo, skinMat);
    thighMeshR.castShadow = true;
    rightThigh.add(thighMeshR);

    const rightKnee = new THREE.Group();
    rightKnee.position.set(0, -thighLen, 0);
    rightThigh.add(rightKnee);

    const calfMeshR = new THREE.Mesh(calfGeo, skinMat);
    calfMeshR.castShadow = true;
    rightKnee.add(calfMeshR);

    const bootR = new THREE.Mesh(bootGeo, leatherMat);
    bootR.castShadow = true;
    rightKnee.add(bootR);

    // Store articulated skeleton bones
    this.bones = {
      pelvis,
      torsoGroup,
      neckGroup,
      headGroup,
      leftShoulder,
      leftUpperArm,
      leftElbow,
      rightShoulder,
      rightUpperArm,
      rightElbow,
      leftHip,
      leftThigh,
      leftKnee,
      rightHip,
      rightThigh,
      rightKnee,
      loincloth
    };
  }

  setupTorchLight() {
    this.torchLight = new THREE.PointLight(0xffaa44, 0, 16, 1.8);
    this.torchLight.position.set(0, 0.4, 0.2);
    this.torchLight.castShadow = false;
    this.heldItemSlot.add(this.torchLight);
  }

  setupUnderwaterBubbles() {
    const bubbleGeo = new THREE.SphereGeometry(0.045, 4, 4);
    const bubbleMat = new THREE.MeshStandardMaterial({
      color: 0xcfeafe,
      roughness: 0.1,
      metalness: 0.8,
      transparent: true,
      opacity: 0.75
    });

    for (let i = 0; i < 15; i++) {
      const mesh = new THREE.Mesh(bubbleGeo, bubbleMat);
      mesh.visible = false;
      this.scene.add(mesh);
      this.bubbles.push({
        mesh,
        active: false,
        velocity: new THREE.Vector3(),
        life: 0
      });
    }
  }

  emitUnderwaterBubble() {
    const b = this.bubbles.find(item => !item.active);
    if (!b) return;

    b.active = true;
    b.mesh.visible = true;
    b.mesh.position.set(
      this.position.x + (Math.random() - 0.5) * 0.3,
      this.position.y + 1.45,
      this.position.z + (Math.random() - 0.5) * 0.3
    );
    b.velocity.set(
      (Math.random() - 0.5) * 0.3,
      1.8 + Math.random() * 0.8, // Ascend to surface
      (Math.random() - 0.5) * 0.3
    );
    b.life = 1.6;
  }

  updateUnderwaterBubbles(dt) {
    this.bubbles.forEach(b => {
      if (!b.active) return;
      b.life -= dt;
      b.mesh.position.addScaledVector(b.velocity, dt);
      // Gentle wobble
      b.mesh.position.x += Math.sin(Date.now() * 0.01) * 0.01;

      // Pop when reaching surface (y >= 0.0) or lifespan expired
      if (b.life <= 0 || b.mesh.position.y >= 0.05) {
        b.active = false;
        b.mesh.visible = false;
      }
    });
  }

  // --- Equip Held Tool in 3D Hand ---
  setEquippedItem(itemDef) {
    while (this.heldItemSlot.children.length > 0) {
      const child = this.heldItemSlot.children[0];
      if (child === this.torchLight) {
        this.heldItemSlot.remove(child);
        break;
      }
      this.heldItemSlot.remove(child);
    }
    if (!this.heldItemSlot.children.includes(this.torchLight)) {
      this.heldItemSlot.add(this.torchLight);
    }

    if (!itemDef) {
      this.equippedItemId = 'fist';
      this.torchLight.intensity = 0;
      return;
    }

    const itemId = itemDef.id;
    this.equippedItemId = itemId;

    if (itemId === 'pickaxe') {
      const group = new THREE.Group();
      // Handle
      const hGeo = new THREE.CylinderGeometry(0.035, 0.045, 0.95, 5);
      const hMat = new THREE.MeshStandardMaterial({ color: 0x7c4f24, roughness: 0.9 });
      const hMesh = new THREE.Mesh(hGeo, hMat);
      hMesh.position.set(0, 0.22, 0);
      group.add(hMesh);

      // Collar
      const collarGeo = new THREE.BoxGeometry(0.12, 0.16, 0.16);
      const collarMat = new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.6, metalness: 0.5 });
      const collarMesh = new THREE.Mesh(collarGeo, collarMat);
      collarMesh.position.set(0, 0.6, 0);
      group.add(collarMesh);

      // Pointed Pick Spike
      const pGeo = new THREE.ConeGeometry(0.065, 0.45, 4);
      pGeo.rotateZ(-Math.PI / 2.2);
      const pMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.5, metalness: 0.6, flatShading: true });
      const pMesh = new THREE.Mesh(pGeo, pMat);
      pMesh.position.set(0.24, 0.6, 0);
      group.add(pMesh);

      // Flat Chisel Head
      const cGeo = new THREE.BoxGeometry(0.22, 0.1, 0.11);
      const cMesh = new THREE.Mesh(cGeo, pMat);
      cMesh.position.set(-0.15, 0.6, 0);
      group.add(cMesh);

      group.rotation.x = -Math.PI / 2.5;
      this.heldItemSlot.add(group);
      this.torchLight.intensity = 0;
    } else if (itemId === 'axe') {
      const group = new THREE.Group();
      const hGeo = new THREE.CylinderGeometry(0.04, 0.05, 0.9, 5);
      const hMat = new THREE.MeshStandardMaterial({ color: 0x8a5829, roughness: 0.9 });
      const hMesh = new THREE.Mesh(hGeo, hMat);
      hMesh.position.set(0, 0.2, 0);
      group.add(hMesh);

      const bGeo = new THREE.BoxGeometry(0.1, 0.28, 0.35);
      const bMat = new THREE.MeshStandardMaterial({ color: 0x6e7175, roughness: 0.7, flatShading: true });
      const bMesh = new THREE.Mesh(bGeo, bMat);
      bMesh.position.set(0, 0.55, 0.1);
      group.add(bMesh);

      group.rotation.x = -Math.PI / 2.5;
      this.heldItemSlot.add(group);
      this.torchLight.intensity = 0;
    } else if (itemId === 'spear') {
      const group = new THREE.Group();
      const sGeo = new THREE.CylinderGeometry(0.03, 0.035, 1.9, 5);
      const sMat = new THREE.MeshStandardMaterial({ color: 0x8a5829, roughness: 0.9 });
      const sMesh = new THREE.Mesh(sGeo, sMat);
      sMesh.position.set(0, 0.45, 0);
      group.add(sMesh);

      const tGeo = new THREE.ConeGeometry(0.075, 0.38, 4);
      const tMat = new THREE.MeshStandardMaterial({ color: 0x5a5c5e, roughness: 0.5, metalness: 0.5, flatShading: true });
      const tMesh = new THREE.Mesh(tGeo, tMat);
      tMesh.position.set(0, 1.45, 0);
      group.add(tMesh);

      group.rotation.x = -Math.PI / 2.6;
      this.heldItemSlot.add(group);
      this.torchLight.intensity = 0;
    } else if (itemId === 'torch') {
      const group = new THREE.Group();
      const hGeo = new THREE.CylinderGeometry(0.045, 0.055, 0.75, 5);
      const hMat = new THREE.MeshStandardMaterial({ color: 0x633e1c, roughness: 0.9 });
      const hMesh = new THREE.Mesh(hGeo, hMat);
      hMesh.position.set(0, 0.2, 0);
      group.add(hMesh);

      const fGeo = new THREE.DodecahedronGeometry(0.14, 0);
      const fMat = new THREE.MeshBasicMaterial({ color: 0xff8800 });
      const fMesh = new THREE.Mesh(fGeo, fMat);
      fMesh.position.set(0, 0.6, 0);
      group.add(fMesh);

      group.rotation.x = -Math.PI / 3;
      this.heldItemSlot.add(group);
      this.torchLight.intensity = 2.4;
    } else if (itemId === 'fishing_rod') {
      const group = new THREE.Group();
      const rGeo = new THREE.CylinderGeometry(0.025, 0.04, 2.2, 5);
      const rMat = new THREE.MeshStandardMaterial({ color: 0x9c723b, roughness: 0.8 });
      const rMesh = new THREE.Mesh(rGeo, rMat);
      rMesh.position.set(0, 0.7, 0);
      group.add(rMesh);

      group.rotation.x = -Math.PI / 2.5;
      this.heldItemSlot.add(group);
      this.torchLight.intensity = 0;
    } else {
      this.torchLight.intensity = 0;
    }
  }

  // --- Attack / Chop / Spear Thrust Trigger ---
  triggerSwing() {
    if (this.isSwinging) return;
    this.isSwinging = true;
    this.swingProgress = 0;
    this.punchHand = 1 - this.punchHand; // Alternate punches
  }

  toggleViewMode() {
    this.viewMode = this.viewMode === 'first_person' ? 'third_person' : 'first_person';
    this.updateViewMode();
  }

  updateViewMode() {
    if (this.viewMode === 'first_person') {
      this.modelGroup.traverse(child => {
        if (child.isMesh && child !== this.heldItemSlot) {
          child.castShadow = true;
          if (!this.heldItemSlot.children.some(c => c === child || c.getObjectById(child.id))) {
            child.visible = false;
          }
        }
      });
      if (this.bones.rightUpperArm) {
        this.bones.rightUpperArm.traverse(c => { if (c.isMesh) c.visible = true; });
      }
    } else {
      this.modelGroup.traverse(child => {
        if (child.isMesh) child.visible = true;
      });
    }
  }

  // --- Physics, Swimming, and Animation Loop ---
  update(dt, inputVector, isSprint, isJump, isCrouch, soundManager) {
    this.isSprinting = isSprint;
    this.isCrouching = isCrouch;

    const terrainY = this.islandWorld.getHeightAt(this.position.x, this.position.z);
    const waterLevel = 0.0;

    // Water states
    const waterDepth = waterLevel - this.position.y;
    this.isSwimming = waterDepth > 0.4;
    this.isUnderwater = waterDepth > 1.5;

    // Speeds
    let currentSpeed = this.walkSpeed;
    if (this.isSwimming) {
      currentSpeed = this.isUnderwater ? this.swimSpeed * 1.15 : this.swimSpeed;
    } else if (this.isSprinting && !this.isCrouching) {
      currentSpeed = this.runSpeed;
    } else if (this.isCrouching) {
      currentSpeed = this.walkSpeed * 0.55;
    }

    // Direction vector relative to camera yaw
    const forward = new THREE.Vector3(0, 0, -1).applyAxisAngle(new THREE.Vector3(0, 1, 0), this.rotationY);
    const right = new THREE.Vector3(1, 0, 0).applyAxisAngle(new THREE.Vector3(0, 1, 0), this.rotationY);

    const moveDir = new THREE.Vector3();
    moveDir.addScaledVector(forward, inputVector.z);
    moveDir.addScaledVector(right, inputVector.x);
    if (moveDir.lengthSq() > 0.001) moveDir.normalize();

    this.velocity.x = moveDir.x * currentSpeed;
    this.velocity.z = moveDir.z * currentSpeed;

    // Swimming & Diving Vertical Physics
    if (this.isSwimming) {
      if (isJump) {
        this.velocity.y = 3.8; // Swim upward to surface
      } else if (isCrouch) {
        this.velocity.y = -3.8; // Dive down into deep
      } else if (this.isUnderwater) {
        // Diving follows camera pitch: looking down swims down!
        if (moveDir.lengthSq() > 0.01) {
          this.velocity.y = Math.sin(this.pitch) * currentSpeed;
        } else {
          this.velocity.y *= 0.9;
        }
      } else {
        // Natural water surface buoyancy
        const targetY = waterLevel - 0.7;
        this.velocity.y = (targetY - this.position.y) * 3.2;
      }
    } else {
      // Land Physics & Jump
      if (this.isGrounded) {
        if (isJump) {
          this.velocity.y = this.jumpForce;
          this.isGrounded = false;
        } else {
          this.velocity.y = 0;
        }
      } else {
        this.velocity.y += this.gravity * dt;
      }
    }

    // Apply movement
    this.position.x += this.velocity.x * dt;
    this.position.y += this.velocity.y * dt;
    this.position.z += this.velocity.z * dt;

    // Ground collision resolution & Landing impact
    this.wasGrounded = this.isGrounded;
    if (this.position.y <= terrainY) {
      this.position.y = terrainY;
      this.isGrounded = true;
      this.velocity.y = 0;
      if (!this.wasGrounded && !this.isSwimming) {
        // Just landed! Trigger soft knee flexion
        this.landingTimer = 0.22;
      }
    } else if (!this.isSwimming && (this.position.y - terrainY) > 0.2) {
      this.isGrounded = false;
    }

    if (this.landingTimer > 0) this.landingTimer -= dt;

    // Underwater exhaled bubbles
    if (this.isUnderwater) {
      this.bubbleTimer += dt;
      if (this.bubbleTimer >= 0.28) {
        this.bubbleTimer = 0;
        this.emitUnderwaterBubble();
      }
    }
    this.updateUnderwaterBubbles(dt);

    // Dynamic Character Body Orientation
    this.modelGroup.position.copy(this.position);

    if (this.viewMode === 'third_person') {
      if (this.isSwinging) {
        this.targetBodyYaw = this.rotationY;
      } else if (moveDir.lengthSq() > 0.001) {
        this.targetBodyYaw = Math.atan2(moveDir.x, moveDir.z);
      }

      let diff = (this.targetBodyYaw - this.currentBodyYaw + Math.PI) % (Math.PI * 2) - Math.PI;
      if (diff < -Math.PI) diff += Math.PI * 2;
      this.currentBodyYaw += diff * Math.min(1.0, dt * 14.0);
      this.modelGroup.rotation.y = this.currentBodyYaw;
    } else {
      this.modelGroup.rotation.y = this.rotationY;
      this.currentBodyYaw = this.rotationY;
      this.targetBodyYaw = this.rotationY;
    }

    // Footsteps & Splashes
    const isMoving = moveDir.lengthSq() > 0.1;
    if (isMoving && this.isGrounded) {
      this.stepTimer += dt * (this.isSprinting ? 2.6 : 1.6);
      if (this.stepTimer >= 1.0) {
        this.stepTimer = 0;
        const surface = terrainY < 0.2 ? 'water' : 'sand';
        if (soundManager) soundManager.playFootstep(surface);
      }
    } else if (isMoving && this.isSwimming && !this.isUnderwater) {
      this.stepTimer += dt * 1.5;
      if (this.stepTimer >= 1.0) {
        this.stepTimer = 0;
        if (soundManager) soundManager.playSplash();
      }
    }

    // ==========================================
    // REALISTIC HUMAN SKELETAL ANIMATIONS
    // ==========================================
    this.animTime += dt * (this.isSprinting ? 12.5 : 7.2);
    const walkCycle = Math.sin(this.animTime);
    const cosCycle = Math.cos(this.animTime);
    const b = this.bones;

    if (b.pelvis) {
      // 1. SWIMMING & DIVING
      if (this.isSwimming) {
        if (this.isUnderwater) {
          // Full 3D Diving: Tilts body towards diving pitch direction
          b.pelvis.rotation.x = Math.PI / 2 + this.pitch * 0.75;
          b.neckGroup.rotation.x = 0;
        } else {
          // Surface Swimming: Body horizontal, head elevated to breathe!
          b.pelvis.rotation.x = Math.PI / 2.3;
          b.neckGroup.rotation.x = -0.55;
        }

        b.pelvis.position.y = 0.95;
        b.torsoGroup.rotation.set(0, 0, 0);

        // Fluid Flutter Kicks (Dual-jointed: Thigh + Knee flexion)
        const kickL = Math.sin(this.animTime * 1.4);
        b.leftThigh.rotation.x = kickL * 0.35;
        b.leftKnee.rotation.x = Math.max(0, -kickL * 0.55);

        b.rightThigh.rotation.x = -kickL * 0.35;
        b.rightKnee.rotation.x = Math.max(0, kickL * 0.55);

        // Freestyle / Breaststroke Arm Cycles
        if (!this.isSwinging) {
          const armStroke = Math.sin(this.animTime * 1.1);
          b.leftUpperArm.rotation.x = armStroke * 1.4;
          b.leftElbow.rotation.x = Math.max(0, Math.cos(this.animTime * 1.1) * 0.9);

          b.rightUpperArm.rotation.x = -armStroke * 1.4;
          b.rightElbow.rotation.x = Math.max(0, -Math.cos(this.animTime * 1.1) * 0.9);
        }
      }
      // 2. IN-AIR JUMPING & PARKOUR
      else if (!this.isGrounded) {
        b.pelvis.rotation.x = -0.15; // Arched back
        b.pelvis.position.y = 0.95;
        b.neckGroup.rotation.x = 0.1;

        // Knees tucked up dynamically
        b.leftThigh.rotation.x = -0.45;
        b.leftKnee.rotation.x = 0.75; // Bent knee!

        b.rightThigh.rotation.x = 0.3;
        b.rightKnee.rotation.x = 0.4;

        // Arms raised for aerodynamic balance
        b.leftUpperArm.rotation.x = -0.6;
        b.leftUpperArm.rotation.z = -0.4;
        b.leftElbow.rotation.x = 0.5;

        if (!this.isSwinging) {
          b.rightUpperArm.rotation.x = -0.6;
          b.rightUpperArm.rotation.z = 0.4;
          b.rightElbow.rotation.x = 0.5;
        }
      }
      // 3. RUNNING & WALKING LOCOMOTION
      else if (isMoving) {
        const isRun = this.isSprinting;
        const amp = isRun ? 0.85 : 0.5;

        // Forward torso lean & Pelvis vertical bounce
        b.pelvis.rotation.x = isRun ? 0.24 : 0.08;
        b.pelvis.position.y = 0.95 + Math.abs(Math.sin(this.animTime)) * (isRun ? 0.1 : 0.04);

        // Torso counter-twist
        b.torsoGroup.rotation.y = -walkCycle * (isRun ? 0.16 : 0.08);

        // Dual-jointed Leg Kinematics:
        // Left Leg: Thigh swings forward -> knee straightens; swings back -> knee bends back!
        b.leftThigh.rotation.x = walkCycle * amp;
        b.leftKnee.rotation.x = Math.max(0, -walkCycle * amp * 1.4);

        // Right Leg: Inverse
        b.rightThigh.rotation.x = -walkCycle * amp;
        b.rightKnee.rotation.x = Math.max(0, walkCycle * amp * 1.4);

        // Athletic Arm Pumping (Elbows bent at ~85° during run)
        b.leftUpperArm.rotation.x = -walkCycle * amp * 0.9;
        b.leftUpperArm.rotation.z = -0.18;
        b.leftElbow.rotation.x = isRun ? 1.4 : 0.65; // Bent elbow!

        if (!this.isSwinging) {
          b.rightUpperArm.rotation.x = walkCycle * amp * 0.9;
          b.rightUpperArm.rotation.z = 0.18;
          b.rightElbow.rotation.x = isRun ? 1.4 : 0.65;
        }

        // Loincloth flap dynamic sway
        if (b.loincloth) b.loincloth.rotation.x = -Math.abs(walkCycle) * 0.4;
      }
      // 4. NATURAL IDLE BREATHING & SOFT LANDING
      else {
        // Landing compression dampening
        const landDrop = this.landingTimer > 0 ? (this.landingTimer / 0.22) * 0.14 : 0;
        b.pelvis.position.y = 0.95 - landDrop + Math.sin(this.animTime * 0.35) * 0.02;
        b.pelvis.rotation.set(landDrop * 0.8, 0, 0);

        // Subtle breathing chest motion
        b.torsoGroup.rotation.set(-landDrop * 0.5, 0, 0);
        b.neckGroup.rotation.x = Math.sin(this.animTime * 0.35) * 0.02;

        // Natural leg rest
        b.leftThigh.rotation.x = landDrop * 0.6;
        b.leftKnee.rotation.x = landDrop * 1.2;
        b.rightThigh.rotation.x = landDrop * 0.6;
        b.rightKnee.rotation.x = landDrop * 1.2;

        // Natural arm rest by hips
        b.leftUpperArm.rotation.set(0, 0, -0.15);
        b.leftElbow.rotation.x = 0.3;

        if (!this.isSwinging) {
          b.rightUpperArm.rotation.set(0, 0, 0.15);
          b.rightElbow.rotation.x = 0.3;
        }
        if (b.loincloth) b.loincloth.rotation.x = 0;
      }
    }

    // ==========================================
    // REALISTIC HUNTING & WEAPON COMBAT
    // ==========================================
    if (this.isSwinging) {
      const swingSpeed = this.equippedItemId === 'spear' ? 6.5 : (this.equippedItemId === 'pickaxe' ? 7.2 : 8.5);
      this.swingProgress += dt * swingSpeed;

      if (this.swingProgress <= 1.0) {
        const prog = this.swingProgress;

        // A. SPEAR HUNTING: Powerful Forward Thrust / Jab
        if (this.equippedItemId === 'spear') {
          if (prog < 0.3) {
            // Phase 1: Draw back shoulder, raise spear level
            const t = prog / 0.3;
            b.rightUpperArm.rotation.set(-0.7 * t, 0, 0.2);
            b.rightElbow.rotation.x = 1.2 * t;
            b.torsoGroup.rotation.y = -0.3 * t;
          } else if (prog < 0.65) {
            // Phase 2: Explosive Forward Thrust
            const t = (prog - 0.3) / 0.35;
            b.rightUpperArm.rotation.set(-0.7 - 0.8 * t, 0, 0.1);
            b.rightElbow.rotation.x = 1.2 - 1.1 * t; // Fully extend arm!
            b.torsoGroup.rotation.y = -0.3 + 0.45 * t; // Lunge forward
          } else {
            // Phase 3: Smooth Recovery
            const t = (prog - 0.65) / 0.35;
            b.rightUpperArm.rotation.set(-1.5 * (1 - t), 0, 0.15);
            b.rightElbow.rotation.x = 0.3 * t;
            b.torsoGroup.rotation.y = 0.15 * (1 - t);
          }
        }
        // B. PICKAXE / AXE: Heavy Two-Phase Overhead Smash
        else if (this.equippedItemId === 'pickaxe' || this.equippedItemId === 'axe') {
          const arc = Math.sin(prog * Math.PI);
          b.rightUpperArm.rotation.x = -Math.PI / 1.7 * arc;
          b.rightElbow.rotation.x = -0.5 * Math.sin(prog * Math.PI * 2);
          b.torsoGroup.rotation.x = (prog < 0.5 ? -0.15 : 0.25) * arc;
        }
        // C. BARE HANDS: Alternating Boxing Punch Combo
        else {
          const punchArc = Math.sin(prog * Math.PI);
          if (this.punchHand === 0) {
            b.rightUpperArm.rotation.x = -1.4 * punchArc;
            b.rightElbow.rotation.x = 0.1 * punchArc;
            b.torsoGroup.rotation.y = 0.25 * punchArc;
          } else {
            b.leftUpperArm.rotation.x = -1.4 * punchArc;
            b.leftElbow.rotation.x = 0.1 * punchArc;
            b.torsoGroup.rotation.y = -0.25 * punchArc;
          }
        }
      } else {
        this.isSwinging = false;
        this.swingProgress = 0;
      }
    }

    // Update Camera
    this.updateCamera(dt);
  }

  // --- Mini World / Roblox Dynamic Orbit Follow Camera ---
  updateCamera(dt = 0.016) {
    const eyeHeight = this.isCrouching ? 1.15 : 1.7;

    if (this.viewMode === 'first_person') {
      this.camera.position.set(this.position.x, this.position.y + eyeHeight, this.position.z);
      this.camera.rotation.order = 'YXZ';
      this.camera.rotation.y = this.rotationY;
      this.camera.rotation.x = this.pitch;
    } else {
      const pivot = new THREE.Vector3(this.position.x, this.position.y + 1.25, this.position.z);
      const camDist = 4.2;

      const cosPitch = Math.cos(this.pitch);
      const sinPitch = Math.sin(this.pitch);
      const sinYaw = Math.sin(this.rotationY);
      const cosYaw = Math.cos(this.rotationY);

      const backDir = new THREE.Vector3(
        sinYaw * cosPitch,
        -sinPitch,
        cosYaw * cosPitch
      );

      const targetCamPos = pivot.clone()
        .addScaledVector(backDir, camDist)
        .add(new THREE.Vector3(0, 0.95, 0));

      const tY = this.islandWorld.getHeightAt(targetCamPos.x, targetCamPos.z);
      if (targetCamPos.y < tY + 0.5) {
        targetCamPos.y = tY + 0.5;
      }

      if (!this.hasInitializedCam) {
        this.smoothedCamPos.copy(targetCamPos);
        this.hasInitializedCam = true;
      } else {
        this.smoothedCamPos.lerp(targetCamPos, Math.min(1.0, dt * 14.0));
      }
      this.camera.position.copy(this.smoothedCamPos);

      const forwardDir = new THREE.Vector3(
        -sinYaw * cosPitch,
        sinPitch,
        -cosYaw * cosPitch
      );

      const lookTarget = pivot.clone()
        .addScaledVector(forwardDir, 25.0)
        .add(new THREE.Vector3(0, 0.4, 0));

      this.camera.lookAt(lookTarget);
    }
  }

  // --- Orientation from PointerLock / Touch Look ---
  addRotation(deltaYaw, deltaPitch) {
    this.rotationY -= deltaYaw;
    this.pitch -= deltaPitch;
    this.pitch = Math.max(-Math.PI / 2.1, Math.min(Math.PI / 2.1, this.pitch));
  }
}
