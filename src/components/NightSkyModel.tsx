"use client";

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import styles from './NightSkyModel.module.css';

export default function NightSkyModel() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isGalaxyActive, setIsGalaxyActive] = useState(false);

  // Lock body scroll when Galaxy View is active
  useEffect(() => {
    if (isGalaxyActive) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isGalaxyActive]);

  useEffect(() => {
    if (!isGalaxyActive) return;

    const container = mountRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const width = rect.width || container.clientWidth || 600;
    const height = rect.height || container.clientHeight || 600;

    // 1. Scene Setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.set(0, 0, 3.2);

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: false, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.6;
    container.appendChild(renderer.domElement);

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 3.5);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 3.0);
    dirLight1.position.set(5, 10, 7);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x38bdf8, 2.0);
    dirLight2.position.set(-5, -5, -5);
    scene.add(dirLight2);

    const modelGroup = new THREE.Group();
    scene.add(modelGroup);

    // 5. Load GLB Model
    const loader = new GLTFLoader();
    loader.load(
      '/models/night_sky_visible_spectrum_monochromatic.glb',
      (gltf) => {
        const loadedModel = gltf.scene;

        // Hide red globe / core inside
        loadedModel.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            const nameLower = mesh.name.toLowerCase();

            if (
              nameLower.includes('red') ||
              nameLower.includes('globe') ||
              nameLower.includes('sphere') ||
              nameLower.includes('core')
            ) {
              mesh.visible = false;
            } else if (mesh.material) {
              const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
              materials.forEach((mat) => {
                if ('color' in mat && mat.color) {
                  const c = (mat as THREE.MeshStandardMaterial).color;
                  if (c.r > 0.55 && c.g < 0.35 && c.b < 0.35) {
                    mesh.visible = false;
                  }
                }
              });
            }
          }
        });

        // Center and scale model precisely inside lens
        const box = new THREE.Box3().setFromObject(loadedModel);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());

        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 5.2 / (maxDim || 1);

        loadedModel.position.x = -center.x * scale;
        loadedModel.position.y = -center.y * scale;
        loadedModel.position.z = -center.z * scale;
        loadedModel.scale.set(scale, scale, scale);

        modelGroup.add(loadedModel);
      },
      undefined,
      (error) => {
        console.error('Error loading night sky GLB model:', error);
      }
    );

    // 6. Direct Cursor Movement Tracking + Scroll Wheel Zoom (No hold and drag)
    let targetRotationX = 0;
    let targetRotationY = 0;
    let targetCameraZ = 3.2;

    const handleMouseMove = (e: MouseEvent) => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const mouseX = (e.clientX - windowWidth / 2) / (windowWidth / 2);
      const mouseY = (e.clientY - windowHeight / 2) / (windowHeight / 2);

      targetRotationY = mouseX * 0.8;
      targetRotationX = mouseY * 0.5;
    };

    const handleWheel = (e: WheelEvent) => {
      e.stopPropagation();
      e.preventDefault();
      targetCameraZ += e.deltaY * 0.002;
      targetCameraZ = Math.max(1.2, Math.min(5.5, targetCameraZ));
    };

    window.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('wheel', handleWheel, { passive: false });

    // Animation Loop
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      modelGroup.rotation.y += (targetRotationY - modelGroup.rotation.y) * 0.08;
      modelGroup.rotation.x += (targetRotationX - modelGroup.rotation.x) * 0.08;

      camera.position.z += (targetCameraZ - camera.position.z) * 0.1;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const r = container.getBoundingClientRect();
      const w = r.width || container.clientWidth;
      const h = r.height || container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('wheel', handleWheel);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [isGalaxyActive]);

  const handleEnterGalaxy = () => {
    setIsGalaxyActive(true);
    window.dispatchEvent(new CustomEvent('toggle-galaxy-mode', { detail: { active: true } }));
  };

  const handleExitGalaxy = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsGalaxyActive(false);
    window.dispatchEvent(new CustomEvent('toggle-galaxy-mode', { detail: { active: false } }));
  };

  return (
    <div className={styles.sectionContainer}>
      {/* PRIOR TO OPENING THE MODEL: DONT HAVE ANY ELEMENT BUT A BUTTON STATING "SEE THROUGH MY LENS!" */}
      {!isGalaxyActive ? (
        <div className={styles.initialStateWrapper}>
          <button 
            className={styles.seeThroughLensButton} 
            onClick={handleEnterGalaxy}
          >
            <span>SEE THROUGH MY LENS!</span>
          </button>
        </div>
      ) : (
        /* ACTIVE GALAXY VIEW MODE */
        <div className={styles.fullscreenGalaxyOverlay}>
          {/* Circular Lens Container - strictly masked */}
          <div className={styles.lensWrapper}>
            {/* 3D WebGL Canvas */}
            <div ref={mountRef} className={styles.canvasContainer} />

            {/* Double Thin Bezel & Radial Tick Marks (Matching Reference Image) */}
            <svg className={styles.lensSvgOverlay} viewBox="0 0 500 500">
              <circle cx="250" cy="250" r="246" fill="none" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1.5" />
              <circle cx="250" cy="250" r="240" fill="none" stroke="rgba(255, 255, 255, 0.45)" strokeWidth="1.5" />
              
              <line x1="250" y1="4" x2="250" y2="16" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="2" />
              <line x1="250" y1="484" x2="250" y2="496" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="2" />
              <line x1="4" y1="250" x2="16" y2="250" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="2" />
              <line x1="484" y1="250" x2="496" y2="250" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="2" />

              <line x1="76" y1="76" x2="85" y2="85" stroke="rgba(255, 255, 255, 0.45)" strokeWidth="1.5" />
              <line x1="424" y1="76" x2="415" y2="85" stroke="rgba(255, 255, 255, 0.45)" strokeWidth="1.5" />
              <line x1="76" y1="424" x2="85" y2="415" stroke="rgba(255, 255, 255, 0.45)" strokeWidth="1.5" />
              <line x1="424" y1="424" x2="415" y2="415" stroke="rgba(255, 255, 255, 0.45)" strokeWidth="1.5" />
            </svg>
          </div>

          {/* Clean Exit Icon Button in Top Right Corner (No Text Title) */}
          <button
            className={styles.exitIconButton}
            onClick={handleExitGalaxy}
            aria-label="Exit Lens View"
            title="Exit Lens View"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
