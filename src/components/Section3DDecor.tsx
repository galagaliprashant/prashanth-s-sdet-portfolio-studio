import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Icosahedron } from "@react-three/drei";
import * as THREE from "three";

// Single floating shape for sections
const FloatingGem = ({ color = "#14b8a6" }: { color?: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
      <Icosahedron ref={meshRef} args={[1, 1]} scale={1.5}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.3}
          metalness={0.9}
          transparent
          opacity={0.7}
        />
      </Icosahedron>
    </Float>
  );
};

// Mini particles
const MiniParticles = ({ count = 50 }: { count?: number }) => {
  const points = useRef<THREE.Points>(null);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 5;
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#14b8a6"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
};

// Scene for section decoration
const SectionScene = ({ color }: { color?: string }) => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.3} />
      <MiniParticles count={30} />
      <FloatingGem color={color} />
    </>
  );
};

// Section 3D decoration component
interface Section3DDecorProps {
  position?: "left" | "right";
  color?: string;
}

const Section3DDecor = ({ position = "right", color = "#14b8a6" }: Section3DDecorProps) => {
  return (
    <div 
      className={`absolute top-1/2 -translate-y-1/2 w-64 h-64 opacity-50 pointer-events-none hidden lg:block ${
        position === "right" ? "right-0 translate-x-1/4" : "left-0 -translate-x-1/4"
      }`}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: "transparent" }}
        dpr={[1, 1.5]}
      >
        <SectionScene color={color} />
      </Canvas>
    </div>
  );
};

export default Section3DDecor;
