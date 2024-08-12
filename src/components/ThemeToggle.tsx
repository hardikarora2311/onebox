"use client";

import { useTheme } from "next-themes";
import { FiMoon } from "react-icons/fi";
import { IoSunnyOutline } from "react-icons/io5";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="bg-[#E9EAEC] dark:bg-[#222426] relative border dark:border-[#343A40] border-[#DADEE1] text-gray-800 flex dark:text-white px-4 py-2 rounded-2xl mr-10 w-20 h-9"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <span className="bg-[#FFF] dark:bg-[#888686] size-5 rounded-full absolute dark:left-3 right-3 transition-all"></span>
      {theme === "dark" ? (
        <IoSunnyOutline className="absolute text-[#E8C364] right-3 -translate-y-1/2 size-6 top-1/2" />
      ) : (
        <FiMoon className="absolute text-[#E8C364] left-3 -translate-y-1/2 size-6 top-1/2" />
      )}
    </button>
  );
}
