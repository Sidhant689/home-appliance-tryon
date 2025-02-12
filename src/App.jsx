import React, { useState } from "react";
import CameraFeed from "./components/CameraFeed";
import ApplianceViewer from "./components/ApplianceModel";

const App = () => {
  const [selectedAppliance, setSelectedAppliance] = useState(null);

  return (
    <div>
      <CameraFeed />
      
      {selectedAppliance && (
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "300px",
            height: "300px",
          }}
        >
          <ApplianceViewer modelPath={selectedAppliance} />
        </div>
      )}

      {/* Buttons to select appliances */}
      <div style={{ position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)", display: "flex", gap: "10px" }}>
        <button onClick={() => setSelectedAppliance("/fridge.glb")}>Fridge</button>
        <button onClick={() => setSelectedAppliance("/tv.glb")}>TV</button>
        <button onClick={() => setSelectedAppliance("/washing_machine.glb")}>Washing Machine</button>
      </div>
    </div>
  );
};

export default App;
