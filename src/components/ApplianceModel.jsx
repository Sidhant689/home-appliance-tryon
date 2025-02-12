import React from "react";
import { useGLTF } from "@react-three/drei";

const ApplianceModel = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={1.5} position={[0, -1, 0]} />;
};

export default ApplianceModel;
