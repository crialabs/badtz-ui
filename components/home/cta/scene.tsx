"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Model } from "@/components/home/cta/model";

export default function Scene() {
  return (
    <div className="absolute inset-0">
      <Canvas>
        <ambientLight intensity={1} />
        <directionalLight intensity={3} position={[0, 3, 2]} />
        <Environment preset="studio" />
        <mesh>
          <OrbitControls enableZoom={false} autoRotate={false} />
          <Model />
        </mesh>
      </Canvas>
    </div>
  );
}
