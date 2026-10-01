import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeCanvasBackgroundProps {
  theme: 'dark' | 'light';
}

export const ThreeCanvasBackground: React.FC<ThreeCanvasBackgroundProps> = ({ theme: _theme }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 350000 : 700000;
    const cameraZ = isMobile ? 38 : 28;

    // --- SCENE SETUP ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      250
    );
    camera.position.z = cameraZ;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
      stencil: false,
      depth: false
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Transparent canvas background
    renderer.toneMapping = THREE.CineonToneMapping;
    renderer.toneMappingExposure = 1.55;

    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // --- SHADERS (From Holographic Particle Universe) ---
    const particleVertexShader = `
      uniform float uTime;
      uniform float uMode;
      uniform vec3 uHandRight;
      uniform float uAudio;
      
      attribute vec3 aRandom;
      attribute float aIndex;

      varying vec3 vColor;
      varying float vAlpha;

      // Simplex Noise (289 mod)
      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
      vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

      float snoise(vec3 v) {
        const vec2 C = vec2(1.0/6.0, 1.0/3.0);
        const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
        vec3 i = floor(v + dot(v, C.yyy));
        vec3 x0 = v - i + dot(i, C.xxx);
        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min(g.xyz, l.zxy);
        vec3 i2 = max(g.xyz, l.zxy);
        vec3 x1 = x0 - i1 + C.xxx;
        vec3 x2 = x0 - i2 + C.yyy;
        vec3 x3 = x0 - D.yyy;
        i = mod289(i);
        vec4 p = permute(permute(permute(
                  i.z + vec4(0.0, i1.z, i2.z, 1.0))
                + i.y + vec4(0.0, i1.y, i2.y, 1.0))
                + i.x + vec4(0.0, i1.x, i2.x, 1.0));
        float n_ = 0.142857142857;
        vec3 ns = n_ * D.wyz - D.xzx;
        vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_);
        vec4 x = x_ * ns.x + ns.yyyy;
        vec4 y = y_ * ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);
        vec4 b0 = vec4(x.xy, y.xy);
        vec4 b1 = vec4(x.zw, y.zw);
        vec4 s0 = floor(b0)*2.0 + 1.0;
        vec4 s1 = floor(b1)*2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));
        vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
        vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
        vec3 p0 = vec3(a0.xy, h.x);
        vec3 p1 = vec3(a0.zw, h.y);
        vec3 p2 = vec3(a1.xy, h.z);
        vec3 p3 = vec3(a1.zw, h.w);
        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
        p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
        vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
        m = m * m;
        return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
      }

      // Mode 0: Nebula Sphere
      vec3 getPosSphere(float idx) {
        float phi = acos(-1.0 + (2.0 * idx) / ${particleCount}.0);
        float theta = sqrt(${particleCount}.0 * 3.14159265) * phi;
        float r = 13.0 + aRandom.x * 2.5;
        return vec3(r * sin(phi) * cos(theta), r * sin(phi) * sin(theta), r * cos(phi));
      }

      // Mode 1: Quantum Torus
      vec3 getPosTorus(float idx) {
        float t = idx * 0.1;
        float r = 11.0 + aRandom.y * 3.0;
        float tube = 3.5 + aRandom.x * 2.0;
        float angle = (idx / ${particleCount}.0) * 6.2831853 * 15.0;
        return vec3(
          (r + tube * cos(angle)) * cos(t),
          (r + tube * cos(angle)) * sin(t),
          tube * sin(angle)
        );
      }

      // Mode 2: Cyber Lattice
      vec3 getPosLattice(float idx) {
        float size = 26.0;
        float step = pow(${particleCount}.0, 1.0/3.0);
        float x = mod(idx, step);
        float y = mod(floor(idx/step), step);
        float z = floor(idx/(step*step));
        return (vec3(x, y, z) / step - 0.5) * size;
      }

      // Mode 3: Warp Vortex
      vec3 getPosVortex(float idx) {
        float r = (idx / ${particleCount}.0) * 19.0;
        float ang = r * 3.0;
        float h = (aRandom.x - 0.5) * 8.5 * (1.0 - r/21.0);
        return vec3(r * cos(ang), r * sin(ang), h);
      }

      void main() {
        float t = uTime * 0.08;
        vec3 pos = vec3(0.0);

        vec3 pSphere = getPosSphere(aIndex);
        vec3 pTorus = getPosTorus(aIndex);
        vec3 pLattice = getPosLattice(aIndex);
        vec3 pVortex = getPosVortex(aIndex);

        // Organic turbulence noise
        vec3 noiseBase = vec3(
          snoise(vec3(aIndex*0.01, t*0.2, 0.0)),
          snoise(vec3(aIndex*0.01, 0.0, t*0.2)),
          snoise(vec3(0.0, aIndex*0.01, t*0.2))
        );

        pSphere += noiseBase * 2.8;
        pTorus += noiseBase * 1.6;
        pLattice += noiseBase * 1.2;
        pVortex += noiseBase * 1.6;

        // Torus Rotation
        float c = cos(t * 0.25); float s = sin(t * 0.25);
        pTorus.xy = mat2(c, -s, s, c) * pTorus.xy;
        pTorus.xz = mat2(c, -s, s, c) * pTorus.xz;

        // Vortex Rotation
        float va = t * 0.6 - length(pVortex.xy) * 0.15;
        float vc = cos(va); float vs = sin(va);
        pVortex.xy = mat2(vc, -vs, vs, vc) * pVortex.xy;

        // Permanent Cosmic Nebula Mode with Clockwise Vertex / Vortex Swirl
        pos = pSphere;

        // Clockwise Vertex / Vortex Motion (Reduced speed for graceful, calm flow):
        // Angle decreases over time (negative), rotating clockwise in screen-space.
        float rXY = length(pos.xy);
        float vortexAngle = -(t * 0.45 + rXY * 0.026 + aRandom.x * 0.12);
        float cRot = cos(vortexAngle);
        float sRot = sin(vortexAngle);
        pos.xy = mat2(cRot, sRot, -sRot, cRot) * pos.xy;
        pos.z += sin(rXY * 0.35 - t * 0.4) * 1.2;

        // Interactive Magnetic Cursor Attraction & Fluid Swirl Follow (36 Units Radius)
        if (uHandRight.x < 90.0) {
          vec3 toCursor = uHandRight - pos;
          float d = length(toCursor);
          
          // Balanced gravitational pull across 36.0 units radius
          float pull = smoothstep(36.0, 2.0, d);
          pos += normalize(toCursor) * pull * 6.0;
          
          // Tangential fluid swirl vortex within the 36-unit envelope
          vec3 tangent = vec3(-toCursor.y, toCursor.x, sin(d * 0.4 + uTime * 1.4) * 3.5);
          pos += normalize(tangent) * pull * 4.2;

          // Core cushion repulsion right at the pointer tip
          float repel = smoothstep(4.0, 0.0, d);
          pos -= normalize(toCursor) * repel * 4.0;
        }

        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        // Scaled particle size increased by 20% for optimal stellar prominence with 500K nodes
        gl_PointSize = (0.72 + aRandom.y * 0.84) * (24.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;

        // Depth fading
        float depthFade = smoothstep(75.0, 10.0, -mvPosition.z);
        vAlpha = depthFade * (0.60 + aRandom.z * 0.40);
        
        // 180° Linear Gradient top-to-bottom coordinate (Screen Y mapped from +1.0 to -1.0)
        float screenY = gl_Position.y / gl_Position.w;
        float gradT = clamp(0.5 - screenY * 0.5, 0.0, 1.0);
        vColor = vec3(gradT, pos.z, 0.0);
      }
    `;

    const particleFragmentShader = `
      uniform vec3 uColor1;
      uniform vec3 uColor2;
      varying vec3 vColor;
      varying float vAlpha;

      void main() {
        vec2 center = gl_PointCoord - 0.5;
        float dist = length(center);
        if (dist > 0.5) discard;

        // Circular glow decay with enhanced disc luminescence
        float glow = 1.0 - smoothstep(0.0, 0.5, dist);
        glow = pow(glow, 1.15);
        float coreHotspot = 1.0 - smoothstep(0.0, 0.18, dist);

        // Linear gradient 180°: #b2f1ff (Top), #5555b7 (Middle), #03102f (Bottom)
        float t = vColor.x;
        vec3 colorTop = vec3(0.698, 0.945, 1.000); // #b2f1ff (Arctic Cyan Ice)
        vec3 colorMid = vec3(0.333, 0.333, 0.718); // #5555b7 (Royal Periwinkle Indigo)
        vec3 colorBot = vec3(0.012, 0.063, 0.184); // #03102f (Midnight Navy Abyss)
        
        vec3 col;
        if (t < 0.5) {
          col = mix(colorTop, colorMid, t * 2.0);
        } else {
          col = mix(colorMid, colorBot, (t - 0.5) * 2.0);
        }

        // Luminescent star-core hotspot with ethereal arctic diamond radiance
        vec3 brightCol = col * 1.85 + colorTop * (coreHotspot * 0.50);

        gl_FragColor = vec4(brightCol, vAlpha * glow);
      }
    `;

    // --- GEOMETRY SETUP ---
    const geometry = new THREE.BufferGeometry();
    const indices = new Float32Array(particleCount);
    const randoms = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      indices[i] = i;
      randoms[i * 3] = Math.random();
      randoms[i * 3 + 1] = Math.random();
      randoms[i * 3 + 2] = Math.random();
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(particleCount * 3).fill(0), 3));
    geometry.setAttribute('aIndex', new THREE.BufferAttribute(indices, 1));
    geometry.setAttribute('aRandom', new THREE.BufferAttribute(randoms, 3));

    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uHandRight: { value: new THREE.Vector3(100, 0, 0) }
      },
      vertexShader: particleVertexShader,
      fragmentShader: particleFragmentShader,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // --- STATE TRACKING & CURSOR DYNAMICS ---
    let time = 0;
    const mouseWorld = new THREE.Vector3(100, 0, 0);
    const targetMouseWorld = new THREE.Vector3(100, 0, 0);

    const mouseNorm = { x: 0, y: 0 };
    const targetMouseNorm = { x: 0, y: 0 };

    const updatePointer = (clientX: number, clientY: number) => {
      const x = (clientX / window.innerWidth) * 2 - 1;
      const y = -(clientY / window.innerHeight) * 2 + 1;
      targetMouseNorm.x = x;
      targetMouseNorm.y = y;
      targetMouseWorld.set(x * 30, y * 18, 0);
    };

    const handleMouseMove = (e: MouseEvent) => {
      updatePointer(e.clientX, e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches && e.touches.length > 0) {
        updatePointer(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchstart', handleTouchMove, { passive: true });

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // --- ANIMATION LOOP ---
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      // Reduced global time delta for a calmer, majestic flow
      time += delta * 0.75;

      material.uniforms.uTime.value = time;

      // Smooth Mouse Coordinate Lerp
      mouseNorm.x += (targetMouseNorm.x - mouseNorm.x) * 0.09;
      mouseNorm.y += (targetMouseNorm.y - mouseNorm.y) * 0.09;

      mouseWorld.lerp(targetMouseWorld, 0.11);
      material.uniforms.uHandRight.value.copy(mouseWorld);

      // 1. Particle Cloud Center Follows Cursor (Physical Translation)
      points.position.x += (mouseNorm.x * 5.0 - points.position.x) * 0.075;
      points.position.y += (mouseNorm.y * 3.5 - points.position.y) * 0.075;

      // 2. Dynamic 3D Universe Rotation with reduced speed and gentle Clockwise Vertex Swirl
      const targetRotY = time * 0.018 + mouseNorm.x * 0.90;
      const targetRotX = Math.sin(time * 0.025) * 0.07 - mouseNorm.y * 0.65;
      const targetRotZ = -time * 0.045; // Smooth, slow clockwise rotation around Z axis
      points.rotation.y += (targetRotY - points.rotation.y) * 0.08;
      points.rotation.x += (targetRotX - points.rotation.x) * 0.08;
      points.rotation.z += (targetRotZ - points.rotation.z) * 0.08;

      // 3. Camera Parallax Tracking Follows Cursor
      camera.position.x += (mouseNorm.x * 6.0 - camera.position.x) * 0.06;
      camera.position.y += (mouseNorm.y * 4.0 - camera.position.y) * 0.06;
      camera.lookAt(points.position.x * 0.4, points.position.y * 0.4, 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchstart', handleTouchMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <>
      {/* 180° Linear Gradient Cosmic Atmosphere Backdrop */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, rgba(178,241,255,0.07) 0%, rgba(85,85,183,0.12) 50%, rgba(3,16,47,0.50) 100%)'
        }}
      />

      {/* Three.js Canvas Container */}
      <div
        ref={containerRef}
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
        style={{ opacity: 1 }}
      />
    </>
  );
};
