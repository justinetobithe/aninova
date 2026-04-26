"use client";

import "swiper/css";
import "swiper/css/effect-fade";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import {
    Calendar,
    ChevronLeft,
    ChevronRight,
    Clapperboard,
    Info,
    Play,
    Star,
    Tv,
} from "lucide-react";
import { Anime } from "@/types/anime";

export function HeroCarousel({
    anime,
    isLoading = false,
}: {
    anime: Anime[];
    isLoading?: boolean;
}) {
    const [activeIndex, setActiveIndex] = useState(0);

    if (isLoading || !anime?.length) {
        return (
            <section className="h-[520px] bg-[#171729]" />
        );
    }

    return (
        <section className="relative h-[520px] overflow-hidden bg-[#171729]">
            <Swiper
                modules={[Autoplay, EffectFade, Navigation]}
                effect="fade"
                loop
                speed={700}
                autoplay={{ delay: 5000 }}
                navigation={{
                    prevEl: ".hero-prev",
                    nextEl: ".hero-next",
                }}
                onSlideChange={(s) => setActiveIndex(s.realIndex)}
                className="h-full"
            >
                {anime.map((item, index) => {
                    const image = item.banner || item.image;

                    return (
                        <SwiperSlide key={item.id}>
                            <div className="relative h-full">
                                {/* BG */}
                                <Image
                                    src={image}
                                    alt={item.title}
                                    fill
                                    priority={index === 0}
                                    className="object-cover opacity-40"
                                />

                                {/* Overlay FIXED */}
                                <div className="absolute inset-0 bg-gradient-to-r from-[#171729] via-[#171729]/80 to-transparent" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#171729] via-transparent to-transparent" />

                                <div className="app-container relative flex h-full items-center">
                                    <div className="grid w-full items-center gap-10 lg:grid-cols-[1fr_280px]">

                                        {/* LEFT CONTENT */}
                                        <div className="max-w-2xl">
                                            <p className="text-lg font-bold text-pink-300">
                                                #{index + 1} Spotlight
                                            </p>

                                            {/* FIXED TITLE SIZE */}
                                            <h1 className="mt-3 text-3xl font-black leading-tight md:text-5xl">
                                                {item.title}
                                            </h1>

                                            <div className="mt-4 flex flex-wrap gap-3 text-sm text-white/80">
                                                <span className="flex items-center gap-1">
                                                    <Tv className="h-4 w-4" />
                                                    {item.type}
                                                </span>

                                                <span className="flex items-center gap-1">
                                                    <Calendar className="h-4 w-4" />
                                                    {item.year}
                                                </span>

                                                {item.score && (
                                                    <span className="rounded bg-pink-300 px-2 py-0.5 text-xs font-bold text-black">
                                                        {item.score}%
                                                    </span>
                                                )}
                                            </div>

                                            <p className="mt-4 text-sm text-white/70 line-clamp-3">
                                                {item.description}
                                            </p>

                                            <div className="mt-6 flex gap-3">
                                                <Link
                                                    href={`/watch/${item.malId}/1`}
                                                    className="flex items-center gap-2 rounded-full bg-pink-400 px-5 py-2 text-sm font-bold text-black hover:bg-pink-300"
                                                >
                                                    <Play className="h-4 w-4 fill-black" />
                                                    Watch Now
                                                </Link>

                                                <Link
                                                    href={`/anime/${item.id}`}
                                                    className="flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-bold hover:bg-white/20"
                                                >
                                                    <Info className="h-4 w-4" />
                                                    Details
                                                </Link>
                                            </div>
                                        </div>

                                        {/* RIGHT CARD FIXED */}
                                        <div className="hidden lg:flex justify-end">
                                            <div className="relative h-[380px] w-[260px] overflow-hidden rounded-2xl shadow-xl">
                                                <Image
                                                    src={item.image}
                                                    alt={item.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>

            {/* FIXED NAV (OUTSIDE IMAGE) */}
            <div className="absolute right-4 top-1/2 z-40 flex -translate-y-1/2 flex-col items-center gap-3">

                <button className="hero-prev flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur hover:bg-pink-400 hover:text-black">
                    <ChevronLeft className="h-5 w-5" />
                </button>

                <div className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold">
                    {activeIndex + 1}/{anime.length}
                </div>

                <button className="hero-next flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur hover:bg-pink-400 hover:text-black">
                    <ChevronRight className="h-5 w-5" />
                </button>
            </div>
        </section>
    );
}