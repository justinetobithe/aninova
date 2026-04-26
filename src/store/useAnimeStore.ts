import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import deepmerge from "deepmerge";
import { Anime } from "@/types/anime";

type WatchLanguage = "sub" | "dub";

type AnimeStore = {
    trendingAnime: Anime[];
    popularAnime: Anime[];
    recentlyAddedAnime: Anime[];
    searchResults: Anime[];
    selectedAnime: Anime | null;
    searchKeyword: string;
    watchLanguage: WatchLanguage;
    isLoadingAnime: boolean;
    addAnime: (section: "trending" | "popular" | "recentlyAdded" | "search", anime: Anime) => void;
    setAnimeList: (section: "trending" | "popular" | "recentlyAdded" | "search", anime: Anime[]) => void;
    setSelectedAnime: (anime: Anime | null) => void;
    setSearchKeyword: (keyword: string) => void;
    setWatchLanguage: (language: WatchLanguage) => void;
    setIsLoadingAnime: (value: boolean) => void;
    clearSearchResults: () => void;
    mergeAnimeState: (state: Partial<AnimeStore>) => void;
};

export const useAnimeStore = create<AnimeStore>()(
    immer((set) => ({
        trendingAnime: [],
        popularAnime: [],
        recentlyAddedAnime: [],
        searchResults: [],
        selectedAnime: null,
        searchKeyword: "",
        watchLanguage: "sub",
        isLoadingAnime: false,

        addAnime: (section, anime) =>
            set((state) => {
                const map = {
                    trending: state.trendingAnime,
                    popular: state.popularAnime,
                    recentlyAdded: state.recentlyAddedAnime,
                    search: state.searchResults,
                };

                const list = map[section];
                const exists = list.some((item) => item.malId === anime.malId);

                if (!exists) {
                    list.push(anime);
                }
            }),

        setAnimeList: (section, anime) =>
            set((state) => {
                if (section === "trending") state.trendingAnime = anime;
                if (section === "popular") state.popularAnime = anime;
                if (section === "recentlyAdded") state.recentlyAddedAnime = anime;
                if (section === "search") state.searchResults = anime;
            }),

        setSelectedAnime: (anime) =>
            set((state) => {
                state.selectedAnime = anime;
            }),

        setSearchKeyword: (keyword) =>
            set((state) => {
                state.searchKeyword = keyword;
            }),

        setWatchLanguage: (language) =>
            set((state) => {
                state.watchLanguage = language;
            }),

        setIsLoadingAnime: (value) =>
            set((state) => {
                state.isLoadingAnime = value;
            }),

        clearSearchResults: () =>
            set((state) => {
                state.searchResults = [];
            }),

        mergeAnimeState: (nextState) =>
            set((state) => {
                const merged = deepmerge(state, nextState);
                Object.assign(state, merged);
            }),
    }))
);