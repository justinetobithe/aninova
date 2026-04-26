"use client";

import Image from "next/image";
import { LogIn, UserPlus, X } from "lucide-react";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

export function LoginDialog() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button
                    type="button"
                    className="group relative flex h-11 items-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-pink-400 via-fuchsia-400 to-violet-500 px-5 text-sm font-black text-black shadow-lg shadow-pink-500/25 transition hover:-translate-y-0.5 hover:shadow-pink-500/40 active:scale-95"
                >
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/45 to-transparent transition duration-700 group-hover:translate-x-full" />
                    <LogIn className="relative h-4 w-4" />
                    <span className="relative hidden sm:block">Login</span>
                </button>
            </DialogTrigger>

            <DialogContent className="border-white/10 bg-[#202039] p-0 text-white sm:max-w-[460px]">
                <div className="flex items-center justify-between border-b border-white/10 bg-[#171729] px-5 py-4">
                    <Image
                        src="/logo.png"
                        alt="AniNova"
                        width={44}
                        height={44}
                        className="h-11 w-11 object-contain"
                    />

                    <DialogClose className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-pink-300 hover:text-black">
                        <X className="h-5 w-5" />
                    </DialogClose>
                </div>

                <div className="px-5 pb-6 pt-5">
                    <DialogHeader>
                        <p className="text-xs font-black uppercase tracking-[0.25em] text-pink-300">
                            Welcome back
                        </p>
                        <DialogTitle className="text-2xl font-black">
                            Login to AniNova
                        </DialogTitle>
                        <DialogDescription className="text-sm text-white/65">
                            This is a UI template only. Firebase login will be connected later.
                        </DialogDescription>
                    </DialogHeader>

                    <form className="mt-6 space-y-4">
                        <div>
                            <label className="mb-2 block text-xs font-black uppercase text-white/80">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="h-12 w-full rounded-xl border border-white/10 bg-white/10 px-4 text-sm outline-none transition placeholder:text-white/35 focus:border-pink-300"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-xs font-black uppercase text-white/80">
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="h-12 w-full rounded-xl border border-white/10 bg-white/10 px-4 text-sm outline-none transition placeholder:text-white/35 focus:border-pink-300"
                            />
                        </div>

                        <button
                            type="button"
                            className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-pink-300 text-sm font-black text-black transition hover:bg-pink-200"
                        >
                            <LogIn className="h-4 w-4" />
                            Login
                        </button>

                        <div className="flex items-center gap-3 py-2">
                            <div className="h-px flex-1 bg-white/10" />
                            <span className="text-xs font-black text-white/70">OR</span>
                            <div className="h-px flex-1 bg-white/10" />
                        </div>

                        <button
                            type="button"
                            className="flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-transparent text-sm font-black text-white transition hover:border-pink-300 hover:text-pink-300"
                        >
                            <UserPlus className="h-4 w-4" />
                            Sign Up
                        </button>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    );
}