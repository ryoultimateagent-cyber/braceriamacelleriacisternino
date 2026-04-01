import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, Environment, useGLTF, ContactShadows, PresentationControls } from '@react-three/drei';

function SteakModel() {
  // Using a publicly available 3D steak model
  const { scene } = useGLTF('https://vazxmixjsiawhamofrcp.supabase.co/storage/v1/object/public/models/steak/model.gltf');
  
  return (
    <primitive 
      object={scene} 
      scale={2.5} 
      position={[0, -0.5, 0]} 
      rotation={[0.2, Math.PI / 4, 0]}
    />
  );
}

const Steak3D = () => {
  return (
    <div className="absolute inset-0 z-10 opacity-60">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]} // Performance optimization
        gl={{ antialias: false }} // Performance optimization
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
            <Float
              speed={2}
              rotationIntensity={0.5}
              floatIntensity={0.5}
            >
              <SteakModel />
            </Float>
          </PresentationControls>
          
          <Environment preset="city" />
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
