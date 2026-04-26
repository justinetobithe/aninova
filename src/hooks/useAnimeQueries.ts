"use client";

import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { Anime } from "@/types/anime";
import { useAnimeStore } from "@/store/useAnimeStore";

async function fetchAnime<T>(url: string): Promise<T> {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Failed to fetch anime");
    }

    return response.json();
}

export function useTrendingAnime() {
    const setAnimeList = useAnimeStore((state) => state.setAnimeList);

    const query = useQuery({
        queryKey: ["anime", "trending"],
        queryFn: () => fetchAnime<Anime[]>("/api/anime/trending"),
    });

    useEffect(() => {
        if (query.data) {
            setAnimeList("trending", query.data);
        }
    }, [query.data, setAnimeList]);

    return query;
}

export function usePopularAnime() {
    const setAnimeList = useAnimeStore((state) => state.setAnimeList);

    const query = useQuery({
        queryKey: ["anime", "popular"],
        queryFn: () => fetchAnime<Anime[]>("/api/anime/popular"),
    });

    useEffect(() => {
        if (query.data) {
            setAnimeList("popular", query.data);
        }
    }, [query.data, setAnimeList]);

    return query;
}

export function useRecentlyAddedAnime() {
    const setAnimeList = useAnimeStore((state) => state.setAnimeList);

    const query = useQuery({
        queryKey: ["anime", "recently-added"],
        queryFn: () => fetchAnime<Anime[]>("/api/anime/airing"),
    });

    useEffect(() => {
        if (query.data) {
            setAnimeList("recentlyAdded", query.data);
        }
    }, [query.data, setAnimeList]);

    return query;
}

export function useAnimeSearch(keyword: string) {
    const setAnimeList = useAnimeStore((state) => state.setAnimeList);

    const query = useQuery({
        queryKey: ["anime", "search", keyword],
        queryFn: () =>
            fetchAnime<Anime[]>(`/api/anime/search?q=${encodeURIComponent(keyword)}`),
        enabled: keyword.trim().length >= 2,
    });

    useEffect(() => {
        if (query.data) {
            setAnimeList("search", query.data);
        }
    }, [query.data, setAnimeList]);

    return query;
}

export function useScheduleAnime() {
    return useQuery({
        queryKey: ["anime", "schedule"],
        queryFn: () => fetchAnime<Anime[]>("/api/anime/schedule"),
    });
}