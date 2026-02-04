import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Box, Torus, Icosahedron } from "@react-three/drei";
import * as THREE from "three";

// Floating geometric shape component
const FloatingShape = ({ 
  position, 
  shape, 
  color, 
  speed = 1,
  distort = 0.3,
  scale = 1 
}: { 
  position: [number, number, number]; 
  shape: "sphere" | "box" | "torus" | "icosahedron";
  color: string;
  speed?: number;
  distort?: number;
  scale?: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 * speed;
    }
  });

  const ShapeComponent = {
    sphere: Sphere,
    box: Box,
    torus: Torus,
    icosahedron: Icosahedron,
  }[shape];

  const args = shape === "torus" ? [0.8, 0.3, 16, 32] : shape === "box" ? [1, 1, 1] : [1, 32, 32];

  return (
    <Float speed={speed * 2} rotationIntensity={0.5} floatIntensity={1}>
      <ShapeComponent ref={meshRef} args={args as any} position={position} scale={scale}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </ShapeComponent>
    </Float>
  );
};

// Particle field
const ParticleField = ({ count = 200 }: { count?: number }) => {
  const points = useRef<THREE.Points>(null);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.02;
      points.current.rotation.x = state.clock.elapsedTime * 0.01;
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
        size={0.03}
        color="#14b8a6"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

// Mouse-following light
const MouseLight = () => {
  const light = useRef<THREE.PointLight>(null);
  const { pointer } = useThree();

  useFrame(() => {
    if (light.current) {
      light.current.position.x = pointer.x * 5;
      light.current.position.y = pointer.y * 5;
    }
  });

  return <pointLight ref={light} intensity={2} color="#14b8a6" distance={15} />;
};

// Main 3D Scene
const Scene3D = () => {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} />
      <MouseLight />

      {/* Particles */}
      <ParticleField count={300} />

      {/* Floating Shapes */}
      <FloatingShape position={[-4, 2, -3]} shape="sphere" color="#14b8a6" scale={0.8} speed={0.8} distort={0.4} />
      <FloatingShape position={[4, -1, -4]} shape="icosahedron" color="#0891b2" scale={0.7} speed={1.2} distort={0.3} />
      <FloatingShape position={[-3, -2, -2]} shape="torus" color="#06b6d4" scale={0.5} speed={0.6} distort={0.2} />
      <FloatingShape position={[3, 2.5, -5]} shape="box" color="#0d9488" scale={0.6} speed={1} distort={0.5} />
      <FloatingShape position={[0, -3, -3]} shape="sphere" color="#2dd4bf" scale={0.4} speed={1.5} distort={0.3} />
      <FloatingShape position={[-5, 0, -6]} shape="icosahedron" color="#14b8a6" scale={0.5} speed={0.7} distort={0.4} />
      <FloatingShape position={[5, 1, -2]} shape="torus" color="#0e7490" scale={0.4} speed={0.9} distort={0.2} />
    </>
  );
};

// Canvas wrapper component
const Hero3DBackground = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: "transparent" }}
        dpr={[1, 2]}
      >
        <Scene3D />
      </Canvas>
    </div>
  );
};

export default Hero3DBackground;
