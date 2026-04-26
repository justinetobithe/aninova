"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Play, Star } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { apiGet } from "@/lib/api";
import { AppButton } from "@/components/app/AppButton";

export function AnimeHoverCard({
    children,
    animeId,
}: {
    children: React.ReactNode;
    animeId: string;
}) {
    const [open, setOpen] = useState(false);

    const query = useQuery({
        queryKey: ["anime-details", animeId],
        queryFn: () => apiGet<any>(`/api/anime/${animeId}`),
        enabled: false,
        staleTime: 1000 * 60 * 10,
    });

    function openPopover() {
        setOpen(true);

        if (!query.data && !query.isFetching) {
            query.refetch();
        }
    }

    function closePopover() {
        setOpen(false);
    }

    const anime = query.data;

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <div
                    onMouseEnter={openPopover}
                    onMouseLeave={closePopover}
                    className="block"
                >
                    {children}
                </div>
            </PopoverTrigger>

            <PopoverContent
                side="right"
                align="start"
                sideOffset={14}
                avoidCollisions
                collisionPadding={20}
                onMouseEnter={openPopover}
                onMouseLeave={closePopover}
                className="z-[80] w-[360px] overflow-hidden rounded-3xl border border-white/10 bg-[#2b2b46] p-0 text-white shadow-2xl shadow-black/40"
            >
                {query.isLoading || query.isFetching ? (
                    <AnimeHoverSkeleton />
                ) : anime ? (
                    <div className="p-4">
                        <div className="flex gap-4">
                            <img
                                src={anime.image}
                                alt={anime.title}
                                className="h-32 w-24 shrink-0 rounded-xl object-cover"
                            />

                            <div className="min-w-0 flex-1">
                                <h3 className="line-clamp-2 text-xl font-black leading-tight">
                                    {anime.title}
                                </h3>

                                <div className="mt-3 flex flex-wrap items-center gap-2 text-xs font-black">
                                    {anime.score ? (
                                        <span className="flex items-center gap-1 text-yellow-300">
                                            <Star className="h-3.5 w-3.5 fill-yellow-300" />
                                            {anime.score}
                                        </span>
                                    ) : null}

                                    <span className="rounded-md bg-emerald-200 px-2 py-1 text-black">
                                        CC
                                    </span>

                                    {anime.episodes ? (
                                        <span className="rounded-md bg-cyan-200 px-2 py-1 text-black">
                                            {anime.episodes}
                                        </span>
                                    ) : null}

                                    <span className="ml-auto rounded-md bg-yellow-200 px-2 py-1 text-black">
                                        {anime.type || "TV"}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-white/75">
                            {anime.description || "No description available."}
                        </p>

                        <div className="mt-4 space-y-2 text-sm text-white/70">
                            {anime.japaneseTitle ? (
                                <p>
                                    <span className="text-white/45">Other names:</span>{" "}
                                    {anime.japaneseTitle}
                                </p>
                            ) : null}

                            <p>
                                <span className="text-white/45">Aired:</span>{" "}
                                {anime.season || anime.year || "Unknown"}
                            </p>

                            <p>
                                <span className="text-white/45">Status:</span>{" "}
                                {anime.status || "Unknown"}
                            </p>

                            {anime.genres?.length ? (
                                <p>
                                    <span className="text-white/45">Genre:</span>{" "}
                                    {anime.genres.join(", ")}
                                </p>
                            ) : null}

                            {anime.studios?.length ? (
                                <p>
                                    <span className="text-white/45">Studios:</span>{" "}
                                    {anime.studios.join(", ")}
                                </p>
                            ) : null}

                            {anime.duration ? (
                                <p>
                                    <span className="text-white/45">Duration:</span>{" "}
                                    {anime.duration} min
                                </p>
                            ) : null}
                        </div>

                        <div className="mt-6 flex items-center gap-3">
                            <AppButton asChild className="flex-1 h-12">
                                <Link href={`/watch/${anime.malId}/1`}>
                                    <Play className="h-4 w-4 fill-black" />
                                    Watch now
                                </Link>
                            </AppButton>

                            <AppButton
                                type="button"
                                className="h-12 w-12 p-0 flex items-center justify-center"
                            >
                                <Plus className="h-6 w-6" />
                            </AppButton>
                        </div>
                    </div>
                ) : (
                    <div className="p-4 text-sm text-white/60">No details found.</div>
                )}
            </PopoverContent>
        </Popover>
    );
}

function AnimeHoverSkeleton() {
    return (
        <div className="p-4">
            <div className="flex gap-4">
                <div className="h-32 w-24 shrink-0 animate-pulse rounded-xl bg-white/10" />
                <div className="flex-1 space-y-3">
                    <div className="h-6 w-4/5 animate-pulse rounded bg-white/10" />
                    <div className="h-6 w-3/5 animate-pulse rounded bg-white/10" />
                    <div className="flex gap-2">
                        <div className="h-6 w-12 animate-pulse rounded bg-white/10" />
                        <div className="h-6 w-12 animate-pulse rounded bg-white/10" />
                        <div className="h-6 w-12 animate-pulse rounded bg-white/10" />
                    </div>
                </div>
            </div>

            <div className="mt-5 space-y-2">
                <div className="h-4 w-full animate-pulse rounded bg-white/10" />
                <div className="h-4 w-11/12 animate-pulse rounded bg-white/10" />
                <div className="h-4 w-4/5 animate-pulse rounded bg-white/10" />
            </div>

            <div className="mt-5 space-y-2">
                <div className="h-4 w-3/4 animate-pulse rounded bg-white/10" />
                <div className="h-4 w-2/3 animate-pulse rounded bg-white/10" />
                <div className="h-4 w-4/5 animate-pulse rounded bg-white/10" />
            </div>

            <div className="mt-6 flex gap-3">
                <div className="h-12 flex-1 animate-pulse rounded-full bg-white/10" />
                <div className="h-12 w-12 animate-pulse rounded-full bg-white/10" />
            </div>
        </div>
    );
}