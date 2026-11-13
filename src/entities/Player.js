// Player.js - Procedural Low-Poly Male/Female human character, animations, camera rig, and physics
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
    this.isSwimming = false;
    this.isUnderwater = false;
    this.isSprinting = false;
    this.isCrouching = false;
    this.isSwinging = false;
    this.swingProgress = 0;

    // Speeds
    this.walkSpeed = 5.5;
    this.runSpeed = 9.2;
    this.swimSpeed = 4.2;
    this.jumpForce = 7.5;
    this.gravity = -20;

    // Procedural 3D model & bones
    this.modelGroup = new THREE.Group();
    this.heldItemSlot = new THREE.Group();
    this.torchLight = null;
    this.bones = {};
    this.animTime = 0;
    this.stepTimer = 0;

    this.init();
  }

  init() {
    this.buildProceduralCharacter();
    this.scene.add(this.modelGroup);
    this.setupTorchLight();
    this.updateViewMode();
  }

  setGender(gender) {
    this.gender = gender;
    // Rebuild character model
    while (this.modelGroup.children.length > 0) {
      this.modelGroup.remove(this.modelGroup.children[0]);
    }
    this.buildProceduralCharacter();
    this.setupTorchLight();
    this.updateViewMode();
  }

  buildProceduralCharacter() {
    const isMale = this.gender === 'male';

    // Color palette
    const skinColor = isMale ? 0xcfa27a : 0xdfb48c;
    const tunicColor = isMale ? 0x82542a : 0x2e593e;
    const hairColor = isMale ? 0x24160e : 0x3d2315;
    const leatherColor = 0x54371e;
    const trimColor = isMale ? 0xb45309 : 0x0284c7;

    const skinMat = new THREE.MeshStandardMaterial({ color: skinColor, roughness: 0.8, flatShading: true });
    const tunicMat = new THREE.MeshStandardMaterial({ color: tunicColor, roughness: 0.9, flatShading: true });
    const hairMat = new THREE.MeshStandardMaterial({ color: hairColor, roughness: 0.9, flatShading: true });
    const leatherMat = new THREE.MeshStandardMaterial({ color: leatherColor, roughness: 0.85, flatShading: true });
    const trimMat = new THREE.MeshStandardMaterial({ color: trimColor, roughness: 0.7, flatShading: true });

    // Root Pelvis
    const pelvis = new THREE.Group();
    pelvis.position.set(0, 0.95, 0);
    this.modelGroup.add(pelvis);

    // Torso
    const torsoW = isMale ? 0.66 : 0.52;
    const torsoH = 0.65;
    const torsoD = 0.35;
    const torsoGeo = new THREE.BoxGeometry(torsoW, torsoH, torsoD);
    const torsoMesh = new THREE.Mesh(torsoGeo, tunicMat);
    torsoMesh.position.set(0, 0.32, 0);
    torsoMesh.castShadow = true;
    pelvis.add(torsoMesh);

    // Primitive Belt & Sash
    const beltGeo = new THREE.BoxGeometry(torsoW + 0.04, 0.12, torsoD + 0.04);
    const belt = new THREE.Mesh(beltGeo, leatherMat);
    belt.position.set(0, 0.06, 0);
    pelvis.add(belt);

    if (isMale) {
      // Warrior fur sash diagonally across chest
      const sashGeo = new THREE.BoxGeometry(0.18, 0.7, 0.08);
      const sash = new THREE.Mesh(sashGeo, leatherMat);
      sash.position.set(0, 0.34, 0.15);
      sash.rotation.z = 0.35;
      pelvis.add(sash);
    }

    // Head Group
    const headGroup = new THREE.Group();
    headGroup.position.set(0, 0.72, 0);
    pelvis.add(headGroup);

    const headGeo = new THREE.BoxGeometry(0.38, 0.4, 0.38);
    const headMesh = new THREE.Mesh(headGeo, skinMat);
    headMesh.castShadow = true;
    headGroup.add(headMesh);

    // Hair Top
    const hairGeo = new THREE.BoxGeometry(0.42, 0.16, 0.42);
    const hairMesh = new THREE.Mesh(hairGeo, hairMat);
    hairMesh.position.set(0, 0.18, 0);
    headGroup.add(hairMesh);

    // Headband
    const bandGeo = new THREE.BoxGeometry(0.43, 0.06, 0.43);
    const band = new THREE.Mesh(bandGeo, trimMat);
    band.position.set(0, 0.12, 0);
    headGroup.add(band);

    if (isMale) {
      // Warrior Beard
      const beardGeo = new THREE.BoxGeometry(0.34, 0.16, 0.22);
      const beard = new THREE.Mesh(beardGeo, hairMat);
      beard.position.set(0, -0.15, 0.16);
      headGroup.add(beard);
    } else {
      // Huntress Braids & Feather
      const braidGeo = new THREE.BoxGeometry(0.12, 0.48, 0.12);
      const braid1 = new THREE.Mesh(braidGeo, hairMat);
      braid1.position.set(-0.12, -0.12, -0.22);
      braid1.rotation.x = -0.2;
      headGroup.add(braid1);

      const braid2 = new THREE.Mesh(braidGeo, hairMat);
      braid2.position.set(0.12, -0.12, -0.22);
      braid2.rotation.x = -0.2;
      headGroup.add(braid2);

      // Feather clip
      const featherGeo = new THREE.ConeGeometry(0.06, 0.28, 4);
      const feather = new THREE.Mesh(featherGeo, trimMat);
      feather.position.set(0.22, 0.2, -0.05);
      feather.rotation.z = -0.4;
      headGroup.add(feather);
    }

    // Left Arm
    const leftArmGroup = new THREE.Group();
    leftArmGroup.position.set(-torsoW * 0.58, 0.55, 0);
    pelvis.add(leftArmGroup);

    const armGeo = new THREE.BoxGeometry(0.18, 0.6, 0.18);
    armGeo.translate(0, -0.28, 0);
    const leftArmMesh = new THREE.Mesh(armGeo, skinMat);
    leftArmMesh.castShadow = true;
    leftArmGroup.add(leftArmMesh);

    // Left Arm Bracer
    const bracerGeo = new THREE.BoxGeometry(0.2, 0.14, 0.2);
    const leftBracer = new THREE.Mesh(bracerGeo, leatherMat);
    leftBracer.position.set(0, -0.42, 0);
    leftArmGroup.add(leftBracer);

    // Right Arm (Weapon / Tool Arm)
    const rightArmGroup = new THREE.Group();
    rightArmGroup.position.set(torsoW * 0.58, 0.55, 0);
    pelvis.add(rightArmGroup);

    const rightArmMesh = new THREE.Mesh(armGeo, skinMat);
    rightArmMesh.castShadow = true;
    rightArmGroup.add(rightArmMesh);

    const rightBracer = new THREE.Mesh(bracerGeo, leatherMat);
    rightBracer.position.set(0, -0.42, 0);
    rightArmGroup.add(rightBracer);

    // Right Hand Held Item Slot
    this.heldItemSlot = new THREE.Group();
    this.heldItemSlot.position.set(0, -0.55, 0.15);
    rightArmGroup.add(this.heldItemSlot);

    // Left Leg
    const leftLegGroup = new THREE.Group();
    leftLegGroup.position.set(-0.16, 0, 0);
    pelvis.add(leftLegGroup);

    const legGeo = new THREE.BoxGeometry(0.2, 0.72, 0.2);
    legGeo.translate(0, -0.36, 0);
    const leftLegMesh = new THREE.Mesh(legGeo, skinMat);
    leftLegMesh.castShadow = true;
    leftLegGroup.add(leftLegMesh);

    // Right Leg
    const rightLegGroup = new THREE.Group();
    rightLegGroup.position.set(0.16, 0, 0);
    pelvis.add(rightLegGroup);

    const rightLegMesh = new THREE.Mesh(legGeo, skinMat);
    rightLegMesh.castShadow = true;
    rightLegGroup.add(rightLegMesh);

    this.bones = {
      pelvis,
      headGroup,
      leftArmGroup,
      rightArmGroup,
      leftLegGroup,
      rightLegGroup
    };
  }

  setupTorchLight() {
    this.torchLight = new THREE.PointLight(0xffaa44, 0, 16, 1.8);
    this.torchLight.position.set(0, 0.4, 0.2);
    this.torchLight.castShadow = false; // Fast light
    this.heldItemSlot.add(this.torchLight);
  }

  // --- Equip Held Tool in 3D Hand ---
  setEquippedItem(itemDef) {
    // Clear old held meshes
    while (this.heldItemSlot.children.length > 0) {
      const child = this.heldItemSlot.children[0];
      if (child === this.torchLight) {
        this.heldItemSlot.remove(child);
        break;
      }
      this.heldItemSlot.remove(child);
    }
    // Re-attach torchlight
    if (!this.heldItemSlot.children.includes(this.torchLight)) {
      this.heldItemSlot.add(this.torchLight);
    }

    if (!itemDef) {
      this.torchLight.intensity = 0;
      return;
    }

    const itemId = itemDef.id;

    if (itemId === 'pickaxe') {
      const group = new THREE.Group();
      // Handle
      const hGeo = new THREE.CylinderGeometry(0.04, 0.05, 0.95, 5);
      const hMat = new THREE.MeshStandardMaterial({ color: 0x7c4f24, roughness: 0.9 });
      const hMesh = new THREE.Mesh(hGeo, hMat);
      hMesh.position.set(0, 0.22, 0);
      group.add(hMesh);

      // Central Collar
      const collarGeo = new THREE.BoxGeometry(0.12, 0.16, 0.16);
      const collarMat = new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.6, metalness: 0.4 });
      const collarMesh = new THREE.Mesh(collarGeo, collarMat);
      collarMesh.position.set(0, 0.6, 0);
      group.add(collarMesh);

      // Pointed Pick Spike (Front)
      const pGeo = new THREE.ConeGeometry(0.07, 0.45, 4);
      pGeo.rotateZ(-Math.PI / 2.2);
      const pMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.5, metalness: 0.5, flatShading: true });
      const pMesh = new THREE.Mesh(pGeo, pMat);
      pMesh.position.set(0.25, 0.6, 0);
      group.add(pMesh);

      // Flat Chisel / Hammer Head (Back)
      const cGeo = new THREE.BoxGeometry(0.24, 0.1, 0.12);
      const cMesh = new THREE.Mesh(cGeo, pMat);
      cMesh.position.set(-0.16, 0.6, 0);
      group.add(cMesh);

      group.rotation.x = -Math.PI / 2.5;
      this.heldItemSlot.add(group);
      this.torchLight.intensity = 0;
    } else if (itemId === 'axe') {
      const group = new THREE.Group();
      // Handle
      const hGeo = new THREE.CylinderGeometry(0.04, 0.05, 0.9, 5);
      const hMat = new THREE.MeshStandardMaterial({ color: 0x8a5829, roughness: 0.9 });
      const hMesh = new THREE.Mesh(hGeo, hMat);
      hMesh.position.set(0, 0.2, 0);
      group.add(hMesh);

      // Stone Blade
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
      // Shaft
      const sGeo = new THREE.CylinderGeometry(0.035, 0.04, 1.8, 5);
      const sMat = new THREE.MeshStandardMaterial({ color: 0x8a5829, roughness: 0.9 });
      const sMesh = new THREE.Mesh(sGeo, sMat);
      sMesh.position.set(0, 0.4, 0);
      group.add(sMesh);

      // Tip
      const tGeo = new THREE.ConeGeometry(0.08, 0.35, 4);
      const tMat = new THREE.MeshStandardMaterial({ color: 0x5a5c5e, roughness: 0.6, flatShading: true });
      const tMesh = new THREE.Mesh(tGeo, tMat);
      tMesh.position.set(0, 1.35, 0);
      group.add(tMesh);

      group.rotation.x = -Math.PI / 2.8;
      this.heldItemSlot.add(group);
      this.torchLight.intensity = 0;
    } else if (itemId === 'torch') {
      const group = new THREE.Group();
      const hGeo = new THREE.CylinderGeometry(0.05, 0.06, 0.75, 5);
      const hMat = new THREE.MeshStandardMaterial({ color: 0x633e1c, roughness: 0.9 });
      const hMesh = new THREE.Mesh(hGeo, hMat);
      hMesh.position.set(0, 0.2, 0);
      group.add(hMesh);

      // Flame
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
      const rGeo = new THREE.CylinderGeometry(0.025, 0.045, 2.2, 5);
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

  // --- Attack / Chop Animation Trigger ---
  triggerSwing() {
    if (this.isSwinging) return;
    this.isSwinging = true;
    this.swingProgress = 0;
  }

  toggleViewMode() {
    this.viewMode = this.viewMode === 'first_person' ? 'third_person' : 'first_person';
    this.updateViewMode();
  }

  updateViewMode() {
    if (this.viewMode === 'first_person') {
      // In first-person: hide player head/torso so they don't clip the camera
      this.modelGroup.traverse(child => {
        if (child.isMesh && child !== this.heldItemSlot) {
          child.castShadow = true;
          // Keep held weapon visible
          if (!this.heldItemSlot.children.some(c => c === child || c.getObjectById(child.id))) {
            child.visible = false;
          }
        }
      });
      // Show arms and held item
      if (this.bones.rightArmGroup) {
        this.bones.rightArmGroup.traverse(c => { if (c.isMesh) c.visible = true; });
      }
    } else {
      // Third person: make all visible
      this.modelGroup.traverse(child => {
        if (child.isMesh) child.visible = true;
      });
    }
  }

  // --- Physics, Swimming, and Animation Loop ---
  update(dt, inputVector, isSprint, isJump, isCrouch, soundManager) {
    this.isSprinting = isSprint;
    this.isCrouching = isCrouch;

    // Terrain height at player's horizontal coordinate
    const terrainY = this.islandWorld.getHeightAt(this.position.x, this.position.z);
    const waterLevel = 0.0;

    // Determine water state
    const waterDepth = waterLevel - this.position.y;
    this.isSwimming = waterDepth > 0.4;
    this.isUnderwater = waterDepth > 1.6; // Head submerged

    // Movement speeds
    let currentSpeed = this.walkSpeed;
    if (this.isSwimming) {
      currentSpeed = this.swimSpeed;
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

    // Vertical Physics
    if (this.isSwimming) {
      // Buoyancy in water
      if (isJump) {
        this.velocity.y = 3.5; // Swim up
      } else if (isCrouch) {
        this.velocity.y = -3.5; // Dive down
      } else {
        // Float towards water surface gently
        const targetY = waterLevel - 0.7;
        this.velocity.y = (targetY - this.position.y) * 2.8;
      }
    } else {
      // On land / in air
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

    // Ground collision resolution
    if (this.position.y <= terrainY) {
      this.position.y = terrainY;
      this.isGrounded = true;
      this.velocity.y = 0;
    } else if (!this.isSwimming && (this.position.y - terrainY) > 0.2) {
      this.isGrounded = false;
    }

    // Update Model Position & Orientation (Mini World dynamic turning)
    this.modelGroup.position.copy(this.position);

    if (this.viewMode === 'third_person') {
      if (this.isSwinging) {
        // Face crosshair when attacking/mining/chopping
        this.targetBodyYaw = this.rotationY;
      } else if (moveDir.lengthSq() > 0.001) {
        // Face movement direction when walking/running
        this.targetBodyYaw = Math.atan2(moveDir.x, moveDir.z);
      }

      // Smooth angular interpolation
      let diff = (this.targetBodyYaw - this.currentBodyYaw + Math.PI) % (Math.PI * 2) - Math.PI;
      if (diff < -Math.PI) diff += Math.PI * 2;
      this.currentBodyYaw += diff * Math.min(1.0, dt * 14.0);
      this.modelGroup.rotation.y = this.currentBodyYaw;
    } else {
      // First person: lock directly to view yaw
      this.modelGroup.rotation.y = this.rotationY;
      this.currentBodyYaw = this.rotationY;
      this.targetBodyYaw = this.rotationY;
    }

    // Footstep Sound triggers
    const isMoving = moveDir.lengthSq() > 0.1;
    if (isMoving && this.isGrounded) {
      this.stepTimer += dt * (this.isSprinting ? 2.4 : 1.5);
      if (this.stepTimer >= 1.0) {
        this.stepTimer = 0;
        const surface = terrainY < 0.2 ? 'water' : 'sand';
        if (soundManager) soundManager.playFootstep(surface);
      }
    } else if (isMoving && this.isSwimming) {
      this.stepTimer += dt * 1.2;
      if (this.stepTimer >= 1.0) {
        this.stepTimer = 0;
        if (soundManager) soundManager.playSplash();
      }
    }

    // Procedural Animation State Machine
    this.animTime += dt * (this.isSprinting ? 12 : 7);
    const walkCycle = Math.sin(this.animTime);

    if (this.bones.leftLegGroup && this.bones.rightLegGroup) {
      if (this.isSwimming) {
        // Flutter kick
        this.bones.leftLegGroup.rotation.x = Math.sin(this.animTime * 1.2) * 0.4;
        this.bones.rightLegGroup.rotation.x = -Math.sin(this.animTime * 1.2) * 0.4;
        this.bones.pelvis.rotation.x = Math.PI / 2.6; // Swim horizontal tilt
      } else if (!this.isGrounded) {
        // In air jump
        this.bones.leftLegGroup.rotation.x = 0.4;
        this.bones.rightLegGroup.rotation.x = -0.3;
        this.bones.pelvis.rotation.x = 0;
      } else if (isMoving) {
        // Walk / run swing
        const legAmp = this.isSprinting ? 0.75 : 0.45;
        this.bones.leftLegGroup.rotation.x = walkCycle * legAmp;
        this.bones.rightLegGroup.rotation.x = -walkCycle * legAmp;
        this.bones.leftArmGroup.rotation.x = -walkCycle * legAmp * 0.8;
        if (!this.isSwinging) {
          this.bones.rightArmGroup.rotation.x = walkCycle * legAmp * 0.8;
        }
        this.bones.pelvis.rotation.x = this.isSprinting ? 0.18 : 0;
      } else {
        // Idle breathing
        this.bones.leftLegGroup.rotation.x = 0;
        this.bones.rightLegGroup.rotation.x = 0;
        this.bones.leftArmGroup.rotation.x = 0;
        if (!this.isSwinging) {
          this.bones.rightArmGroup.rotation.x = 0;
        }
        this.bones.pelvis.position.y = 0.95 + Math.sin(this.animTime * 0.3) * 0.02;
        this.bones.pelvis.rotation.x = 0;
      }
    }

    // Tool Swing / Chop Animation
    if (this.isSwinging) {
      this.swingProgress += dt * 8.0;
      if (this.swingProgress <= 1.0) {
        // Arc: raise up, chop down, return
        const swingArc = Math.sin(this.swingProgress * Math.PI);
        this.bones.rightArmGroup.rotation.x = -Math.PI / 1.8 * swingArc;
        this.bones.rightArmGroup.rotation.z = -0.3 * swingArc;
      } else {
        this.isSwinging = false;
        this.swingProgress = 0;
        this.bones.rightArmGroup.rotation.x = 0;
        this.bones.rightArmGroup.rotation.z = 0;
      }
    }

    // Update Camera Position & Pitch
    this.updateCamera(dt);
  }

  updateCamera(dt = 0.016) {
    const eyeHeight = this.isCrouching ? 1.15 : 1.7;

    if (this.viewMode === 'first_person') {
      // First person: Camera directly at player's eye level
      this.camera.position.set(this.position.x, this.position.y + eyeHeight, this.position.z);
      this.camera.rotation.order = 'YXZ';
      this.camera.rotation.y = this.rotationY;
      this.camera.rotation.x = this.pitch;
    } else {
      // Third person: Mini World / Minecraft / Roblox Dynamic Orbit Follow Camera
      // Pivot is at player chest / neck level
      const pivot = new THREE.Vector3(this.position.x, this.position.y + 1.25, this.position.z);
      const camDist = 4.2;

      // Spherical backward vector based on yaw and pitch
      const cosPitch = Math.cos(this.pitch);
      const sinPitch = Math.sin(this.pitch);
      const sinYaw = Math.sin(this.rotationY);
      const cosYaw = Math.cos(this.rotationY);

      // Camera sits behind pivot with an elevated offset so character sits in lower screen
      const backDir = new THREE.Vector3(
        sinYaw * cosPitch,
        -sinPitch,
        cosYaw * cosPitch
      );

      const targetCamPos = pivot.clone()
        .addScaledVector(backDir, camDist)
        .add(new THREE.Vector3(0, 0.95, 0));

      // Prevent camera from clipping through terrain
      const tY = this.islandWorld.getHeightAt(targetCamPos.x, targetCamPos.z);
      if (targetCamPos.y < tY + 0.5) {
        targetCamPos.y = tY + 0.5;
      }

      // Smooth dynamic follow inertia
      if (!this.hasInitializedCam) {
        this.smoothedCamPos.copy(targetCamPos);
        this.hasInitializedCam = true;
      } else {
        this.smoothedCamPos.lerp(targetCamPos, Math.min(1.0, dt * 14.0));
      }
      this.camera.position.copy(this.smoothedCamPos);

      // Look Target: Forward line of sight with slight upward offset so crosshair (0,0) is completely clear above character's head
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
    // Clamp pitch between looking straight up and straight down
    this.pitch = Math.max(-Math.PI / 2.1, Math.min(Math.PI / 2.1, this.pitch));
  }
}
