import Image from "next/image";
import Link from "next/link";
import { Disc, MessageCircle, Send } from "lucide-react";
import { FaGithub, FaTwitter } from "react-icons/fa";

const letters = [
    "All",
    "#",
    "0-9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
];

const socials = [
    {
        icon: Disc,
        href: "#",
        label: "Discord",
        className: "border-indigo-300/40 bg-indigo-400/15 text-indigo-200",
    },
    {
        icon: Send,
        href: "#",
        label: "Telegram",
        className: "border-sky-300/40 bg-sky-400/15 text-sky-200",
    },
    {
        icon: MessageCircle,
        href: "#",
        label: "Reddit",
        className: "border-orange-300/40 bg-orange-400/15 text-orange-200",
    },
    {
        icon: FaTwitter,
        href: "#",
        label: "Twitter",
        className: "border-cyan-300/40 bg-cyan-400/15 text-cyan-200",
    },
    {
        icon: FaGithub,
        href: "#",
        label: "Github",
        className: "border-zinc-300/40 bg-zinc-400/15 text-zinc-100",
    },
];

export function Footer() {
    return (
        <footer className="mt-20 border-t border-white/10 bg-[#1b1b31] py-8 text-white">
            <div className="app-container">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                    <Link
                        href="/"
                        className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-pink-500/20"
                    >
                        <Image
                            src="/logo.png"
                            alt="AniNova"
                            width={52}
                            height={52}
                            className="h-12 w-12 object-contain"
                        />
                    </Link>

                    <div className="hidden h-12 w-px bg-white/15 sm:block" />

                    <div className="flex items-center gap-3">
                        <p className="text-xs font-black leading-tight text-white">
                            Join
                            <br />
                            now
                        </p>

                        <div className="flex flex-wrap items-center gap-2">
                            {socials.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        aria-label={item.label}
                                        className={`flex h-9 w-9 items-center justify-center rounded-full border transition hover:-translate-y-0.5 hover:scale-105 ${item.className}`}
                                    >
                                        <Icon className="h-4 w-4" />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                        <h3 className="text-xl font-black text-white">A - Z LIST</h3>
                        <div className="hidden h-6 w-px bg-white/15 sm:block" />
                        <p className="text-xs font-medium text-white/60">
                            Searching anime order by alphabet name A to Z.
                        </p>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                        {letters.map((letter) => (
                            <Link
                                key={letter}
                                href={`/search?letter=${letter}`}
                                className="rounded-lg bg-[#11111f] px-3 py-2 text-xs font-black text-white transition hover:bg-pink-300 hover:text-black"
                            >
                                {letter}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="mt-7 flex flex-wrap gap-6 text-xs font-bold text-white">
                    <Link href="/terms" className="hover:text-pink-300">
                        Terms of service
                    </Link>
                    <Link href="/dmca" className="hover:text-pink-300">
                        DMCA
                    </Link>
                    <Link href="/contact" className="hover:text-pink-300">
                        Contact
                    </Link>
                </div>

                <p className="mt-5 max-w-3xl text-xs leading-6 text-white/55">
                    AniNova does not store any files on our server. We only link to media
                    hosted on third-party services.
                </p>

                <p className="mt-3 text-xs text-white/45">
                    © {new Date().getFullYear()} AniNova. All rights reserved.
                </p>
            </div>
        </footer>
    );
}