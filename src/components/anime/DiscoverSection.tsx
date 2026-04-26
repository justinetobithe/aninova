"use client";

import Link from "next/link";
import { AppButton } from "@/components/app/AppButton";
import { Anime } from "@/types/anime";

export function DiscoverSection({ anime }: { anime: Anime[] }) {
    const genres = Array.from(
        new Set(
            anime
                .flatMap((item) => item.genres || [])
                .filter(Boolean)
                .map((genre) => genre.trim())
        )
    ).slice(0, 24);

    return (
        <section className="app-container mt-12 grid gap-8 lg:grid-cols-[1fr_320px]">
            <div>
                <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <h2 className="text-2xl font-black text-pink-300">
                        You may also watch
                    </h2>

                    <div className="flex flex-wrap gap-2">
                        {["All", "Sub", "Dub", "Fan Dub"].map((label, index) => (
                            <AppButton
                                key={label}
                                type="button"
                                className={`h-9 rounded-lg px-4 text-xs ${index === 0
                                    ? ""
                                    : "bg-white/10 text-white shadow-none hover:bg-pink-300 hover:text-black"
                                    }`}
                            >
                                {label}
                            </AppButton>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-6">
                    {anime.slice(0, 12).map((item) => (
                        <Link key={item.id} href={`/anime/${item.id}`} className="group">
                            <div className="relative aspect-[16/11] overflow-hidden rounded-xl bg-white/5">
                                <img
                                    src={item.banner || item.image}
                                    alt={item.title}
                                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                                />

                                <span className="absolute bottom-2 left-2 rounded bg-emerald-200 px-2 py-1 text-[10px] font-black text-black">
                                    CC
                                </span>

                                <span className="absolute bottom-2 right-2 rounded bg-black/75 px-2 py-1 text-[10px] font-black text-white">
                                    {item.episodes || 0} EPS
                                </span>
                            </div>

                            <h3 className="mt-2 line-clamp-1 text-sm font-black text-white">
                                {item.title}
                            </h3>

                            <p className="text-xs font-semibold text-white/60">
                                {item.type || "ANIME"} • {item.year || "Unknown"}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>

            <Genres genres={genres} />
        </section>
    );
}

function Genres({ genres }: { genres: string[] }) {
    const fallbackGenres = [
        "Action",
        "Adventure",
        "Comedy",
        "Drama",
        "Fantasy",
        "Horror",
        "Mystery",
        "Romance",
        "Sci-Fi",
        "Sports",
        "Supernatural",
        "Isekai",
    ];

    const list = genres.length ? genres : fallbackGenres;

    return (
        <aside className="h-fit rounded-2xl border border-white/10 bg-[#171729] p-5">
            <h3 className="mb-4 text-2xl font-black text-pink-300">Genres</h3>

            <div className="grid grid-cols-2 gap-2 text-sm">
                {list.map((genre) => (
                    <Link
                        key={genre}
                        href={`/search?genre=${encodeURIComponent(genre)}`}
                        className="rounded-lg bg-white/5 px-3 py-2 font-bold text-white/80 transition hover:bg-pink-300 hover:text-black"
                    >
                        {genre}
                    </Link>
                ))}
            </div>

            <AppButton type="button" className="mt-5 h-11 w-full rounded-xl">
                Show more
            </AppButton>
        </aside>
    );
}