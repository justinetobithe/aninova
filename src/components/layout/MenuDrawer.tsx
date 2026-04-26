"use client";

import Link from "next/link";
import { MessageCircle, X } from "lucide-react";
import { useAppStore } from "@/store/useAppStore";

const menuItems = [
    { label: "Home", href: "/" },
    { label: "You May Also Watch", href: "/#you-may-also-watch" },
    { label: "Latest Added", href: "/latest-added" },
    { label: "Most Popular", href: "/most-popular" },
    { label: "Top Upcoming", href: "/top-upcoming" },
    { label: "Subbed Anime", href: "/subbed" },
    { label: "Dubbed Anime", href: "/dubbed" },
    { label: "Movie", href: "/movie" },
    { label: "Music", href: "/music" },
    { label: "ONA", href: "/ona" },
    { label: "OVA", href: "/ova" },
    { label: "Specials", href: "/specials" },
];

export function MenuDrawer() {
    const isMenuOpen = useAppStore((state) => state.isMenuOpen);
    const closeMenu = useAppStore((state) => state.closeMenu);

    if (!isMenuOpen) return null;

    return (
        <div className="fixed inset-0 z-[90]">
            <button
                type="button"
                onClick={closeMenu}
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                aria-label="Close menu"
            />

            <aside className="relative h-full w-[320px] max-w-[86vw] bg-[#1b1b31] px-5 py-6 text-white shadow-2xl shadow-black/50">
                <button
                    type="button"
                    onClick={closeMenu}
                    className="mb-8 flex items-center gap-2 text-sm font-bold text-white transition hover:text-pink-300"
                >
                    <X className="h-4 w-4" />
                    Close menu
                </button>

                <Link
                    href="/community"
                    onClick={closeMenu}
                    className="mb-7 flex h-11 items-center justify-center gap-2 rounded-full bg-white/10 text-sm font-bold transition hover:bg-pink-300 hover:text-black"
                >
                    <MessageCircle className="h-4 w-4 text-pink-300" />
                    Community
                </Link>

                <nav className="space-y-1">
                    {menuItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            onClick={closeMenu}
                            className="block rounded-xl px-2 py-3 text-sm font-medium transition hover:bg-white/10 hover:px-4 hover:text-pink-300"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </aside>
        </div>
    );
}