"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import VerticalPixelTransition from "@/components/VerticalPixelTransition";

export default function Home() {
  const [menuIsActive, setMenuIsActive] = useState(false);
  return (
    <main className="flex items-center h-screen justify-center bg-gray-500">
      <Header menuIsActive={menuIsActive} setMenuIsActive={setMenuIsActive} />
      <Menu menuIsActive={menuIsActive} />
      <VerticalPixelTransition menuIsActive={menuIsActive} />
    </main>
  );
}
