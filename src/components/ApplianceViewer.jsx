import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ApplianceModel from "./ApplianceModel";

const ApplianceViewer = ({ modelPath }) => {
  return (
    <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
      <ambientLight intensity={1.5} />
      <directionalLight position={[2, 5, 2]} intensity={2} />
      <spotLight position={[5, 5, 5]} intensity={1} angle={0.3} />

      {/* Suspense prevents crashes if model is still loading */}
      <Suspense fallback={<p style={{ color: "white" }}>Loading Model...</p>}>
        <ApplianceModel modelPath={modelPath} />
      </Suspense>

      <OrbitControls enableZoom={true} />
    </Canvas>
  );
};

export default ApplianceViewer;
