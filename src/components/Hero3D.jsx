import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  Float, 
  MeshTransmissionMaterial, 
  Environment, 
  PerspectiveCamera,
  ContactShadows,
  useScroll
} from '@react-three/drei';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PremiumCrystal = () => {
  const meshRef = useRef();
  const groupRef = useRef();

  // Floating animation
  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.cos(t / 4) / 8;
    meshRef.current.rotation.y = Math.sin(t / 4) / 8;
    meshRef.current.rotation.z = Math.sin(t / 4) / 8;
    meshRef.current.position.y = Math.sin(t / 1.5) / 10;
  });

  // Scroll animation - Strong Movement
  React.useEffect(() => {
    if (!groupRef.current) return;

    // Movement on scroll
    gsap.to(groupRef.current.position, {
      x: -2, // Move towards center
      y: -1, // Move down slightly
      z: 2,  // Zoom in
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      }
    });

    // Intense rotation on scroll
    gsap.to(groupRef.current.rotation, {
      y: Math.PI * 2,
      z: Math.PI / 2,
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      }
    });
  }, []);

  return (
    <group ref={groupRef}>
      <mesh ref={meshRef} castShadow>
        <octahedronGeometry args={[1.5, 0]} />
        <MeshTransmissionMaterial
          backside
          samples={16}
          resolution={512}
          transmission={1}
          roughness={0.1}
          thickness={0.5}
          ior={1.5}
          chromaticAberration={0.06}
          anisotropy={0.1}
          distortion={0}
          distortionScale={0}
          temporalDistortion={0}
          color="#ffffff"
          emissive="#3D95FF"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Internal Core */}
      <mesh scale={0.5}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#ffffff" emissive="#0066FF" emissiveIntensity={3} />
      </mesh>
    </group>
  );
};

const Hero3D = () => {
  return (
    <div className="w-full h-full relative">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={35} />
        
        {/* Lights */}
        <ambientLight intensity={0.8} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#3D95FF" />
        
        {/* Environment for Realistic Reflections */}
        <Environment preset="city" />
        
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
          <PremiumCrystal />
        </Float>

        <ContactShadows 
          position={[0, -2, 0]} 
          opacity={0.4} 
          scale={10} 
          blur={2.5} 
          far={4} 
        />
      </Canvas>
    </div>
  );
};

export default Hero3D;
