import React from "react";
import { useGLTF } from "@react-three/drei";

const ApplianceModel = ({ modelPath }) => {
  // Use the useGLTF hook for loading the model
  const { scene, error } = useGLTF(modelPath);

  if (error) {
    console.error("Error loading model:", error);
    return <p style={{ color: "red" }}>Error loading model</p>;
  }

  return <primitive object={scene} scale={1.5} position={[0, -1, 0]} />;
};

export default ApplianceModel;
