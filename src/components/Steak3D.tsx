import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows, PresentationControls } from '@react-three/drei';
import * as THREE from 'three';

function SteakShape() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1 + Math.PI / 4;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.3, 0]} rotation={[0.3, Math.PI / 4, 0]}>
      {/* Main steak body */}
      <mesh position={[0, 0, 0]} castShadow>
        <cylinderGeometry args={[1.8, 2, 0.5, 32, 1]} />
        <meshStandardMaterial 
          color="#8B2500" 
          roughness={0.6} 
          metalness={0.1}
        />
      </mesh>
      {/* Grill marks */}
      {[-0.6, 0, 0.6].map((z, i) => (
        <mesh key={i} position={[0, 0.26, z]} rotation={[0, 0.4, 0]}>
          <boxGeometry args={[3.5, 0.04, 0.08]} />
          <meshStandardMaterial color="#3D0C02" roughness={0.9} />
        </mesh>
      ))}
      {/* Fat marbling accent */}
      <mesh position={[0.5, 0.2, 0.3]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color="#D4A574" roughness={0.7} metalness={0.05} />
      </mesh>
      <mesh position={[-0.3, 0.2, -0.4]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial color="#D4A574" roughness={0.7} metalness={0.05} />
      </mesh>
    </group>
  );
}

const Steak3D = () => {
  return (
    <div className="absolute inset-0 z-10 opacity-60">
      <Canvas
        camera={{ position: [0, 2, 5], fov: 40 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false }}
      >
        <Suspense fallback={null}>
          <PresentationControls
            global
            config={{ mass: 2, tension: 500 }}
            snap={{ mass: 4, tension: 1500 }}
            rotation={[0, 0, 0]}
            polar={[-Math.PI / 3, Math.PI / 3]}
            azimuth={[-Math.PI / 1.4, Math.PI / 1.4]}
          >
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
              <SteakShape />
            </Float>
          </PresentationControls>
          
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={1} color="#fff5e6" />
          <pointLight position={[-3, 2, -2]} intensity={0.5} color="#cc0000" />
          
          <ContactShadows
            position={[0, -1.5, 0]}
            opacity={0.4}
            scale={10}
            blur={2}
            far={4.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Steak3D;
