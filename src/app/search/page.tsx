"use client";

import { useState } from "react";
import { demoAnime } from "@/lib/demo-anime";
import { AnimeCard } from "@/components/anime/AnimeCard";
import { Input } from "@/components/ui/input";

export default function SearchPage() {
    const [keyword, setKeyword] = useState("");

    const filtered = demoAnime.filter((anime) =>
        anime.title.toLowerCase().includes(keyword.toLowerCase())
    );

    return (
        <main className="app-container py-10">
            <h1 className="mb-6 text-3xl font-black text-pink-300">Search Anime</h1>

            <Input
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Search anime..."
                className="mb-8 max-w-xl bg-white/10"
            />

            <div className="grid grid-cols-2 gap-5 md:grid-cols-4 lg:grid-cols-6">
                {filtered.map((anime) => (
                    <AnimeCard key={anime.id} anime={anime} />
                ))}
            </div>
        </main>
    );
}