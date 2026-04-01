import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Shape({ position, color, args }: { position: [number, number, number], color: string, args: any }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += 0.01;
    meshRef.current.rotation.x += 0.005;
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={1} position={position}>
      <mesh ref={meshRef}>
        <torusGeometry args={args} />
        <MeshDistortMaterial
          color={color}
          speed={2}
          distort={0.4}
          radius={1}
          transparent
          opacity={0.15}
        />
      </mesh>
    </Float>
  );
}

const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
      <Canvas 
        camera={{ position: [0, 0, 5] }}
        gl={{ alpha: true }}
        onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#CC0000" />
        <Shape position={[-4, 2, -5]} color="#CC0000" args={[1, 0.02, 16, 100]} />
        <Shape position={[4, -2, -3]} color="#FF6B00" args={[1.5, 0.05, 16, 100]} />
        <Shape position={[0, 4, -8]} color="#F5C400" args={[2, 0.01, 16, 100]} />
      </Canvas>
    </div>
  );
};

export default FloatingShapes;
