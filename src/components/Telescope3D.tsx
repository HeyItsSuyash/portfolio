"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Telescope3D() {
  const mountRef = useRef<HTMLDivElement>(null);
  const isSpinningRef = useRef(false);
  const spinAngleRef = useRef(0);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 600;

    // 1. Scene Setup
    const scene = new THREE.Scene();

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.set(0, 0.4, 5.0);

    // 3. Renderer with ACES Tone Mapping
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.8);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xfffaed, 3.0);
    mainLight.position.set(6, 12, 8);
    scene.add(mainLight);

    const rimLight = new THREE.DirectionalLight(0x38bdf8, 2.0);
    rimLight.position.set(-6, -4, -6);
    scene.add(rimLight);

    const fillLight = new THREE.DirectionalLight(0xffffff, 1.0);
    fillLight.position.set(0, -5, 5);
    scene.add(fillLight);

    // 5. Master Group
    const telescopeGroup = new THREE.Group();

    // Materials
    const brassMaterial = new THREE.MeshStandardMaterial({
      color: 0xe5c158,
      metalness: 0.92,
      roughness: 0.18,
    });

    const darkBrassMaterial = new THREE.MeshStandardMaterial({
      color: 0x997a20,
      metalness: 0.88,
      roughness: 0.25,
    });

    const chromeMaterial = new THREE.MeshStandardMaterial({
      color: 0xf1f5f9,
      metalness: 0.95,
      roughness: 0.1,
    });

    const woodMaterial = new THREE.MeshStandardMaterial({
      color: 0x271910,
      metalness: 0.1,
      roughness: 0.4,
    });

    const darkMetalMaterial = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.9,
      roughness: 0.3,
    });

    const lensMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x60a5fa,
      transmission: 0.9,
      opacity: 1,
      transparent: true,
      roughness: 0.05,
      ior: 1.52,
      reflectivity: 0.9,
    });

    // --- MAIN OPTICAL TUBE ASSEMBLY (OTA) ---
    const otaGroup = new THREE.Group();

    // Main Brass Cylinder (Facing Right)
    const tubeGeo = new THREE.CylinderGeometry(0.35, 0.30, 3.2, 64);
    const tube = new THREE.Mesh(tubeGeo, brassMaterial);
    tube.rotation.z = -Math.PI / 2;
    otaGroup.add(tube);

    // Front Lens Dew Shield / Hood (Right End, X = +1.7)
    const hoodGeo = new THREE.CylinderGeometry(0.40, 0.36, 0.6, 64);
    const hood = new THREE.Mesh(hoodGeo, brassMaterial);
    hood.rotation.z = -Math.PI / 2;
    hood.position.x = 1.7;
    otaGroup.add(hood);

    // Objective Lens (Right Tip, X = +1.98)
    const lensGeo = new THREE.CylinderGeometry(0.36, 0.36, 0.06, 64);
    const lens = new THREE.Mesh(lensGeo, lensMaterial);
    lens.rotation.z = -Math.PI / 2;
    lens.position.x = 1.98;
    otaGroup.add(lens);

    // Decorative Brass Trim Rings
    const ringGeo1 = new THREE.TorusGeometry(0.355, 0.02, 16, 64);
    const ring1 = new THREE.Mesh(ringGeo1, darkBrassMaterial);
    ring1.rotation.y = Math.PI / 2;
    ring1.position.x = 1.4;
    otaGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(0.345, 0.02, 16, 64);
    const ring2 = new THREE.Mesh(ringGeo2, darkBrassMaterial);
    ring2.rotation.y = Math.PI / 2;
    ring2.position.x = 0;
    otaGroup.add(ring2);

    // Rear Focuser Tube (Left End, X = -1.85)
    const focuserGeo = new THREE.CylinderGeometry(0.22, 0.28, 0.7, 64);
    const focuser = new THREE.Mesh(focuserGeo, chromeMaterial);
    focuser.rotation.z = -Math.PI / 2;
    focuser.position.x = -1.85;
    otaGroup.add(focuser);

    // Eyepiece Barrel (Left Tip, X = -2.35)
    const eyepieceGeo = new THREE.CylinderGeometry(0.14, 0.16, 0.4, 64);
    const eyepiece = new THREE.Mesh(eyepieceGeo, brassMaterial);
    eyepiece.rotation.z = -Math.PI / 2;
    eyepiece.position.x = -2.35;
    otaGroup.add(eyepiece);

    // Eyepiece Cup
    const cupGeo = new THREE.CylinderGeometry(0.18, 0.14, 0.12, 64);
    const cup = new THREE.Mesh(cupGeo, darkMetalMaterial);
    cup.rotation.z = -Math.PI / 2;
    cup.position.x = -2.58;
    otaGroup.add(cup);

    // Focus Knobs
    const knobAxisGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.7, 16);
    const knobAxis = new THREE.Mesh(knobAxisGeo, chromeMaterial);
    knobAxis.position.x = -1.85;
    otaGroup.add(knobAxis);

    const knobWheelGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.08, 32);
    const knobLeft = new THREE.Mesh(knobWheelGeo, brassMaterial);
    knobLeft.position.set(-1.85, 0, 0.35);
    knobLeft.rotation.x = Math.PI / 2;
    otaGroup.add(knobLeft);

    const knobRight = new THREE.Mesh(knobWheelGeo, brassMaterial);
    knobRight.position.set(-1.85, 0, -0.35);
    knobRight.rotation.x = Math.PI / 2;
    otaGroup.add(knobRight);

    // --- FINDERSCOPE ---
    const finderGroup = new THREE.Group();
    const finderTubeGeo = new THREE.CylinderGeometry(0.1, 0.08, 1.1, 32);
    const finderTube = new THREE.Mesh(finderTubeGeo, brassMaterial);
    finderTube.rotation.z = -Math.PI / 2;
    finderGroup.add(finderTube);

    const finderMount1 = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.3, 16), chromeMaterial);
    finderMount1.position.set(0.3, -0.15, 0);
    finderGroup.add(finderMount1);

    const finderMount2 = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.3, 16), chromeMaterial);
    finderMount2.position.set(-0.3, -0.15, 0);
    finderGroup.add(finderMount2);

    finderGroup.position.set(0, 0.48, 0);
    otaGroup.add(finderGroup);

    // Tilt the main barrel slightly upwards pointing to the right
    otaGroup.rotation.z = 0.22;
    otaGroup.position.y = 0.7;
    telescopeGroup.add(otaGroup);

    // --- MOUNT & TRIPOD HEAD ---
    const mountHeadGeo = new THREE.CylinderGeometry(0.32, 0.36, 0.4, 32);
    const mountHead = new THREE.Mesh(mountHeadGeo, chromeMaterial);
    mountHead.position.y = 0.4;
    telescopeGroup.add(mountHead);

    const yokeLeftGeo = new THREE.BoxGeometry(0.08, 0.5, 0.15);
    const yokeLeft = new THREE.Mesh(yokeLeftGeo, chromeMaterial);
    yokeLeft.position.set(0, 0.65, 0.32);
    telescopeGroup.add(yokeLeft);

    const yokeRight = new THREE.Mesh(yokeLeftGeo, chromeMaterial);
    yokeRight.position.set(0, 0.65, -0.32);
    telescopeGroup.add(yokeRight);

    // --- TRIPOD LEGS ---
    const legLength = 3.6;
    const legAngle = 0.35;
    const legGeo = new THREE.CylinderGeometry(0.05, 0.03, legLength, 32);

    // Leg 1 (Front Right)
    const leg1 = new THREE.Mesh(legGeo, woodMaterial);
    leg1.position.set(0.8, -1.2, 0.8);
    leg1.rotation.z = -legAngle;
    leg1.rotation.x = legAngle;
    telescopeGroup.add(leg1);

    // Leg 2 (Front Left)
    const leg2 = new THREE.Mesh(legGeo, woodMaterial);
    leg2.position.set(-0.8, -1.2, 0.8);
    leg2.rotation.z = legAngle;
    leg2.rotation.x = legAngle;
    telescopeGroup.add(leg2);

    // Leg 3 (Back)
    const leg3 = new THREE.Mesh(legGeo, woodMaterial);
    leg3.position.set(0, -1.2, -1.1);
    leg3.rotation.x = -legAngle * 1.3;
    telescopeGroup.add(leg3);

    // Brass Leg Caps
    const capGeo = new THREE.CylinderGeometry(0.055, 0.055, 0.3, 16);
    const cap1 = new THREE.Mesh(capGeo, brassMaterial);
    cap1.position.set(0, 0.2, 0);
    leg1.add(cap1);

    const cap2 = new THREE.Mesh(capGeo, brassMaterial);
    cap2.position.set(0, 0.2, 0);
    leg2.add(cap2);

    const cap3 = new THREE.Mesh(capGeo, brassMaterial);
    cap3.position.set(0, 0.2, 0);
    leg3.add(cap3);

    scene.add(telescopeGroup);

    // STATIC INITIAL POSITION: Lens facing right side of screen
    telescopeGroup.rotation.y = -Math.PI / 6;

    // CLICK EVENT: Spin 360 degrees when clicked
    const handleCanvasClick = () => {
      if (!isSpinningRef.current) {
        isSpinningRef.current = true;
        spinAngleRef.current = 0;
      }
    };

    container.addEventListener('click', handleCanvasClick);

    // Animation Loop
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Perform spin ONLY when clicked
      if (isSpinningRef.current) {
        spinAngleRef.current += 0.06;
        telescopeGroup.rotation.y += 0.06;

        if (spinAngleRef.current >= Math.PI * 2) {
          isSpinningRef.current = false;
          spinAngleRef.current = 0;
          telescopeGroup.rotation.y = -Math.PI / 6; // Reset to static right-facing pose
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      container.removeEventListener('click', handleCanvasClick);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      style={{ width: '100%', height: '100%', cursor: 'pointer' }}
      title="Click to spin telescope 360°"
    />
  );
}
