"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { LuLoader2 } from "react-icons/lu";

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      localStorage.setItem("token", `Bearer ${token}`);
      router.push("/onebox");
    } else {
      console.error("No token received");
      router.push("/");
    }
  }, [router]);

  return (
    <div className="bg-[#ECEFF3] dark:bg-black dark:text-white text-[#5B5F66] flex flex-col h-screen w-full justify-center items-center">
      <LuLoader2 className="animate-spin size-8" />
      <h3>Logging you in...</h3>
    </div>
  );
}
