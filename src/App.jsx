import React, { useState } from "react";
import CameraFeed from "./components/CameraFeed";
import ApplianceViewer from "./components/ApplianceViewer"; // ✅ Fixed Import

const App = () => {
  const [selectedAppliance, setSelectedAppliance] = useState(null);

  return (
    <div>
      <CameraFeed />

      {/* Only show 3D Viewer when a model is selected */}
      {selectedAppliance && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90vw",
            height: "60vh",
          }}
        >
          <ApplianceViewer modelPath={selectedAppliance} />
        </div>
      )}

      {/* Buttons for model selection */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "10px",
        }}
      >
        <button onClick={() => setSelectedAppliance("/models/fridge.glb")}>Fridge</button>
        <button onClick={() => setSelectedAppliance("/models/tv.glb")}>TV</button>
        <button onClick={() => setSelectedAppliance("/models/washing_machine.glb")}>
          Washing Machine
        </button>
      </div>
    </div>
  );
};

export default App;
