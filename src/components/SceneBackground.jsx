"use client";

import dynamic from "next/dynamic";

const HeroGeometry = dynamic(() => import("./HeroGeometry"), { ssr: false });

export default function SceneBackground() {
  return <HeroGeometry />;
}
