import React, { useEffect, useRef } from "react";
import * as handpose from "@tensorflow-models/handpose";
import "@tensorflow/tfjs";

const GestureControls = ({ setPosition }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    async function detectHand() {
      const model = await handpose.load();
      setInterval(async () => {
        if (!videoRef.current) return;
        const predictions = await model.estimateHands(videoRef.current);
        if (predictions.length > 0) {
          const x = predictions[0].landmarks[0][0]; // Get X position of hand
          setPosition([x / 100 - 3, 0, 0]); // Move appliance
        }
      }, 100);
    }

    navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
      videoRef.current.srcObject = stream;
      detectHand();
    });
  }, [setPosition]);

  return <video ref={videoRef} autoPlay playsInline style={{ display: "none" }} />;
};

export default GestureControls;
