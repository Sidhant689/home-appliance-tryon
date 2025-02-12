import React, { Suspense } from "react";
import { useGLTF } from "@react-three/drei";

const ApplianceModel = ({ modelPath }) => {
  if (!modelPath) return null; // Prevent loading null paths

  try {
    const { scene } = useGLTF(modelPath);
    return <primitive object={scene} scale={1.5} position={[0, -1, 0]} />;
  } catch (error) {
    console.error("Error loading model:", error);
    return <p style={{ color: "red" }}>Error loading model</p>;
  }
};

export default ApplianceModel;
