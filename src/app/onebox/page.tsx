"use client";
import MainWrapper from "@/components/MainWrapper";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Welcome from "@/components/Welcome";
import { useState } from "react";

export default function Onebox() {
  const [selectedComponent, setSelectedComponent] = useState("/");

  const handleMenuItemClick = (path: string) => {
    setSelectedComponent(path);
  };

  return (
    <div className="h-screen w-screen dark:bg-black bg-white pl-14">
      <Sidebar onMenuItemClick={handleMenuItemClick} />
      <Navbar />
      <div>
        {selectedComponent === "/" && <Welcome />}
        {selectedComponent === "/search" && <Welcome />}
        {selectedComponent === "/mail" && <Welcome />}
        {selectedComponent === "/send" && <Welcome />}
        {selectedComponent === "/stack" && <Welcome />}
        {selectedComponent === "/inbox" && <MainWrapper />}
        {selectedComponent === "/stacks" && <Welcome />}
      </div>
    </div>
  );
}
