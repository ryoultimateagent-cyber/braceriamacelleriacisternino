import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import ErrorBoundary from './ErrorBoundary';

function Shape({ position, color, speed, distort }: { position: [number, number, number], color: string, speed: number, distort: number }) {
  return (
    <Float speed={speed} rotationIntensity={2} floatIntensity={2}>
      <Sphere args={[1, 64, 64]} position={position} scale={0.5}>
        <MeshDistortMaterial
          color={color}
          speed={speed}
          distort={distort}
          radius={1}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-40 overflow-hidden">
      <ErrorBoundary fallback={null}>
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Shape position={[-2, 2, 0]} color="#cc0000" speed={2} distort={0.4} />
          <Shape position={[2, -2, 0]} color="#333333" speed={1.5} distort={0.6} />
          <Shape position={[-3, -1, -2]} color="#cc0000" speed={1.8} distort={0.3} />
        </Canvas>
      </ErrorBoundary>
    </div>
  );
};

export default FloatingShapes;
