"use client";

import Image from "next/image";
import Link from "next/link";
import {
    Bookmark,
    Menu,
    MessageCircle,
    Radio,
    Search,
    Shuffle,
    Sparkles,
    Wifi,
} from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { ThemeToggle } from "@/components/anime/ThemeToggle";
import { useAppStore } from "@/store/useAppStore";
import { LoginDialog } from "@/components/auth/LoginDialog";

const navItems = [
    { label: "Watch2gether", href: "/watch2gether", icon: Radio },
    { label: "Random", href: "/random", icon: Shuffle },
    { label: "English Name", href: "/search", icon: Sparkles },
    { label: "News", href: "/news", icon: Wifi },
    { label: "Community", href: "/community", icon: MessageCircle },
];

export function Header() {
    const toggleMenu = useAppStore((state) => state.toggleMenu);
    const toggleSearch = useAppStore((state) => state.toggleSearch);

    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#10101d]/90 backdrop-blur-xl">
            <div className="app-container flex h-[66px] items-center gap-3">
                <button
                    type="button"
                    onClick={toggleMenu}
                    className="group flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/5 text-white transition hover:bg-pink-300 hover:text-black"
                >
                    <Menu className="h-5 w-5 transition group-hover:scale-110" />
                </button>

                <Link
                    href="/"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/25 to-pink-500/25 transition hover:scale-105"
                >
                    <Image
                        src="/logo.png"
                        alt="AniNova"
                        width={40}
                        height={40}
                        className="h-10 w-10 object-contain"
                        priority
                    />
                </Link>

                <Link
                    href="/search"
                    className="ml-1 hidden h-11 w-[360px] max-w-[32vw] items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.07] px-4 text-sm text-white/75 shadow-inner transition hover:border-pink-300/60 hover:bg-white/[0.1] md:flex"
                >
                    <Search className="h-4 w-4 text-pink-300" />
                    <span className="flex-1">Search anime...</span>
                    <span className="rounded-xl bg-pink-300 px-3 py-1 text-xs font-black text-black">
                        Filter
                    </span>
                </Link>

                <nav className="ml-auto hidden items-center gap-7 xl:flex">
                    {navItems.map((item) => {
                        const Icon = item.icon;

                        return (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="group flex flex-col items-center gap-1 text-[11px] font-black text-white/75 transition hover:-translate-y-0.5 hover:text-pink-300"
                            >
                                <Icon className="h-5 w-5 text-pink-300 transition group-hover:scale-125" />
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                <div className="ml-auto flex items-center gap-2 xl:ml-4">
                    <button
                        type="button"
                        onClick={toggleSearch}
                        className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white transition hover:bg-pink-300 hover:text-black md:hidden"
                    >
                        <Search className="h-5 w-5" />
                    </button>

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <button
                                type="button"
                                className="hidden h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white transition hover:bg-pink-300 hover:text-black sm:flex"
                            >
                                <Bookmark className="h-5 w-5" />
                            </button>
                        </TooltipTrigger>
                        <TooltipContent>Watch later</TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <div>
                                <ThemeToggle />
                            </div>
                        </TooltipTrigger>
                        <TooltipContent>Switch theme</TooltipContent>
                    </Tooltip>

                    <LoginDialog />
                </div>
            </div>
        </header>
    );
}