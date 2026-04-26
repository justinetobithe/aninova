"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useAppStore } from "@/store/useAppStore";

export function ThemeToggle() {
    const { setTheme } = useTheme();
    const themeMode = useAppStore((state) => state.themeMode);
    const toggleThemeMode = useAppStore((state) => state.toggleThemeMode);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        setTheme(themeMode);
    }, [themeMode, setTheme]);

    if (!mounted) {
        return <button type="button" className="h-10 w-10 rounded-xl bg-white/10" />;
    }

    return (
        <button
            type="button"
            onClick={toggleThemeMode}
            className="group flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white transition duration-300 hover:-translate-y-0.5 hover:bg-pink-400 hover:text-black hover:shadow-lg hover:shadow-pink-500/20 active:scale-95"
        >
            {themeMode === "dark" ? (
                <Sun className="h-5 w-5 transition duration-300 group-hover:rotate-45" />
            ) : (
                <Moon className="h-5 w-5 transition duration-300 group-hover:-rotate-12" />
            )}
        </button>
    );
}