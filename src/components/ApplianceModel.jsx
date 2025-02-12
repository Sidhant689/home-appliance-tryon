import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const ApplianceModel = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={2} />;
};

const ApplianceViewer = ({ modelPath }) => {
  return (
    <Canvas>
      <ambientLight intensity={1} />
      <directionalLight position={[0, 5, 5]} intensity={1.5} />
      <ApplianceModel modelPath={modelPath} />
      <OrbitControls />
    </Canvas>
  );
};

export default ApplianceViewer;
