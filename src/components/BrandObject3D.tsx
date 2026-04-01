import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

function BrandMesh() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.y = time * 0.2;
    meshRef.current.rotation.x = time * 0.1;
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2, 4]} />
        <meshPhysicalMaterial
          color="#CC0000"
          roughness={0.15}
          metalness={0.8}
          emissive="#220000"
          envMapIntensity={1}
        />
      </mesh>
    </Float>
  );
}

const BrandObject3D = () => {
  return (
    <div className="w-full h-[400px] md:h-[600px] pointer-events-none">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ alpha: true }}
        onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#FF6B00" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#CC0000" />
        <BrandMesh />
      </Canvas>
    </div>
  );
};

export default BrandObject3D;
