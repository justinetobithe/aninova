"use client";

import "swiper/css";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Anime } from "@/types/anime";
import { AnimeCard } from "./AnimeCard";
import { AnimeHoverCard } from "./AnimeHoverCard";

type TrendingSwiperProps = {
    anime: Anime[];
    isLoading?: boolean;
    variant?: "default" | "ranked";
};

export function TrendingSwiper({
    anime,
    isLoading = false,
    variant = "default",
}: TrendingSwiperProps) {
    const skeletons = Array.from({ length: 8 });
    const isRanked = variant === "ranked";

    return (
        <Swiper
            spaceBetween={16}
            slidesPerView={isRanked ? "auto" : 2}
            breakpoints={
                isRanked
                    ? undefined
                    : {
                        640: { slidesPerView: 3 },
                        768: { slidesPerView: 4 },
                        1024: { slidesPerView: 5 },
                        1280: { slidesPerView: 6 },
                    }
            }
            className="overflow-visible"
        >
            {isLoading
                ? skeletons.map((_, index) => (
                    <SwiperSlide
                        key={index}
                        className={isRanked ? "!w-[320px]" : ""}
                    >
                        {isRanked ? (
                            <div className="flex h-[150px] animate-pulse overflow-hidden rounded-xl bg-white/5">
                                <div className="w-[42px] bg-white/10" />
                                <div className="flex-1 bg-white/5" />
                            </div>
                        ) : (
                            <div className="overflow-hidden rounded-2xl">
                                <div className="h-[260px] w-full animate-pulse rounded-2xl bg-gradient-to-br from-white/5 to-white/10" />
                                <div className="mt-3 space-y-2">
                                    <div className="h-4 w-3/4 animate-pulse rounded bg-white/10" />
                                    <div className="h-3 w-1/2 animate-pulse rounded bg-white/10" />
                                </div>
                            </div>
                        )}
                    </SwiperSlide>
                ))
                : anime.map((item, index) => (
                    <SwiperSlide
                        key={item.id}
                        className={isRanked ? "!w-[320px]" : ""}
                    >
                        {isRanked ? (
                            <RankedAnimeCard anime={item} index={index} />
                        ) : (
                            <AnimeCard anime={item} />
                        )}
                    </SwiperSlide>
                ))}
        </Swiper>
    );
}

function RankedAnimeCard({ anime, index }: { anime: Anime; index: number }) {
    const rank = String(index + 1).padStart(2, "0");

    return (
        <AnimeHoverCard animeId={anime.id}>
            <Link
                href={`/anime/${anime.id}`}
                className="group relative flex h-[150px] overflow-hidden rounded-xl bg-[#171729] shadow-md shadow-black/20"
            >
                <div className="flex w-[42px] shrink-0 flex-col items-center justify-between bg-[#202039] py-2.5">
                    <p className="max-h-[98px] rotate-180 overflow-hidden whitespace-nowrap text-[9px] font-black tracking-wide text-white/70 [writing-mode:vertical-rl]">
                        {anime.title}
                    </p>

                    <span className="text-lg font-black leading-none text-pink-300">
                        {rank}
                    </span>
                </div>

                <div className="relative flex-1 overflow-hidden">
                    <img
                        src={anime.banner || anime.image}
                        alt={anime.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

                    <div className="absolute bottom-3 left-3 right-3 translate-y-2 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <h3 className="line-clamp-1 text-sm font-black text-white">
                            {anime.title}
                        </h3>

                        <p className="mt-0.5 text-xs font-semibold text-white/65">
                            {anime.type || "Anime"} • {anime.year || "?"}
                        </p>
                    </div>
                </div>
            </Link>
        </AnimeHoverCard>
    );
}