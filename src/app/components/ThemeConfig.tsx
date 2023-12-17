"use client";
import React, { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";

const ThemeConfig: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const themeMode = theme === "system" ? systemTheme : theme;

  return (
    <div>
      {mounted &&
        (themeMode === "dark" ? (
          <MoonIcon
            className="w-6 h-6  text-gray-800 dark:text-white cursor-pointer"
            onClick={() => setTheme("light")}
          />
        ) : (
          <SunIcon
            className="w-6 h-6 text-gray-800 dark:text-white cursor-pointer"
            onClick={() => setTheme("dark")}
          />
        ))}
    </div>
  );
};

export default ThemeConfig;
