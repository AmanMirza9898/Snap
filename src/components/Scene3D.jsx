import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// Highly Optimized Floating Geometric Shape
function FloatingShape({ position, shape, color, speed = 1 }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime * 0.5 * speed;
    meshRef.current.rotation.x += 0.005 * speed;
    meshRef.current.rotation.y += 0.003 * speed;
    meshRef.current.position.y = position[1] + Math.sin(t) * 0.4;
  });

  const geometry = useMemo(() => {
    if (shape === 'icosahedron') return new THREE.IcosahedronGeometry(1.2, 0);
    if (shape === 'octahedron') return new THREE.OctahedronGeometry(1.2, 0);
    return new THREE.TorusGeometry(0.8, 0.2, 10, 30);
  }, [shape]);

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} geometry={geometry}>
        <meshStandardMaterial
          color={color}
          wireframe
          transparent
          opacity={0.2}
          emissive={color}
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  );
}

// Low-overhead Particle Field
function ParticleField() {
  const count = 80;
  const meshRef = useRef();
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        t: Math.random() * 100,
        factor: 10 + Math.random() * 20,
        speed: 0.01 + Math.random() / 50,
        xFactor: -15 + Math.random() * 30,
        yFactor: -10 + Math.random() * 20,
        zFactor: -10 + Math.random() * 20,
      });
    }
    return temp;
  }, []);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
      t = particle.t += speed / 2;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);
      dummy.position.set(
        (xFactor + Math.cos(t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        (yFactor + Math.sin(t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        (zFactor + Math.cos(t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      );
      dummy.scale.set(s, s, s);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, count]}>
      <sphereGeometry args={[0.05, 8, 8]} />
      <meshBasicMaterial color="#3B82F6" transparent opacity={0.5} />
    </instancedMesh>
  );
}

function SceneContents() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#3B82F6" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#8B5CF6" />
      
      <ParticleField />

      <FloatingShape position={[-6, 3, -5]} shape="icosahedron" color="#3B82F6" />
      <FloatingShape position={[6, -2, -6]} shape="octahedron" color="#8B5CF6" />
      <FloatingShape position={[0, -4, -8]} shape="torus" color="#06B6D4" />
    </>
  );
}

const Scene3D = ({ height = '100%' }) => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 50 }}
        gl={{ antialias: false, powerPreference: "high-performance" }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <SceneContents />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;
