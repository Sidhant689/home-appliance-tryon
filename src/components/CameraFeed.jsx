import React, { useRef, useEffect } from "react";

const CameraFeed = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    async function startCamera() {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    }
    startCamera();
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        style={{
          width: "100%",
          height: "100vh",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default CameraFeed;
