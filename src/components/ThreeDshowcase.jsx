"use client";

import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { Box, Typography } from "@mui/material";

function Model({ url }) {
  const { scene } = useGLTF(url);
  const ref = useRef();

  // Auto-rotation animation
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.005; // slow spin
    }
  });

  return <primitive ref={ref} object={scene} scale={1.5} position={[0, 0.4, 0]} />;
}

export default function ThreeDShowcase() {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        minHeight: "300px",
        backgroundColor: "#000000ff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        textAlign: "center",
        py: { xs: 2, md: 6 }, // reduced padding to bring closer
      }}
    >
      {/* Title / Description */}
      <Typography
        variant="h4"
        sx={{
          color: "#bfbdbdff",
          fontWeight: 700,
          mb: 2,
          px: 5,
        }}
      >
        یکی از زیبا ترین کار های ما
      </Typography>

      <Typography
        variant="body1"
        sx={{
          maxWidth: "700px",
          color: "#f2f2d6ff",
          mb: 6, // less margin below text
          lineHeight: 1.8,
          fontSize: { xs: "0.95rem", md: "1.1rem" },
        }}
      >
        لوستر را بچرخانید و در نمای 360 درجه نگاه کنید.
      </Typography>

      {/* 3D Canvas */}
      <Box
        sx={{
          width: "100%",
          height: { xs: "400px", md: "600px" },
          position: "relative",
          mb: 5,
        }}
      >
        <Canvas camera={{ position: [0, 1.5, 5], fov: 50 }}>
          {/* Lighting setup */}
          <ambientLight intensity={1.1} />
          <directionalLight position={[1, 5, 5]} intensity={1.2} />
          <directionalLight position={[-3, -2, 2]} intensity={0.8} /> {/* bottom-left light */}
          <pointLight position={[0, -3, -3]} intensity={0.5} />

          {/* 3D Model */}
          <Suspense fallback={null}>
            <Model url="/models/chandelier.glb" />
          </Suspense>

          {/* Environment + Controls */}
          <Environment preset="studio" />
          <OrbitControls enableZoom={false} enablePan enableRotate />
        </Canvas>
      </Box>
    </Box>
  );
}
