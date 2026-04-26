import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import deepmerge from "deepmerge";

type ThemeMode = "dark" | "light";

type AppStore = {
    themeMode: ThemeMode;
    isMenuOpen: boolean;
    isSearchOpen: boolean;
    isFilterOpen: boolean;
    setThemeMode: (themeMode: ThemeMode) => void;
    toggleThemeMode: () => void;
    openMenu: () => void;
    closeMenu: () => void;
    toggleMenu: () => void;
    openSearch: () => void;
    closeSearch: () => void;
    toggleSearch: () => void;
    openFilter: () => void;
    closeFilter: () => void;
    toggleFilter: () => void;
    mergeAppState: (state: Partial<AppStore>) => void;
};

export const useAppStore = create<AppStore>()(
    immer((set) => ({
        themeMode: "dark",
        isMenuOpen: false,
        isSearchOpen: false,
        isFilterOpen: false,

        setThemeMode: (themeMode) =>
            set((state) => {
                state.themeMode = themeMode;
            }),

        toggleThemeMode: () =>
            set((state) => {
                state.themeMode = state.themeMode === "dark" ? "light" : "dark";
            }),

        openMenu: () =>
            set((state) => {
                state.isMenuOpen = true;
            }),

        closeMenu: () =>
            set((state) => {
                state.isMenuOpen = false;
            }),

        toggleMenu: () =>
            set((state) => {
                state.isMenuOpen = !state.isMenuOpen;
            }),

        openSearch: () =>
            set((state) => {
                state.isSearchOpen = true;
            }),

        closeSearch: () =>
            set((state) => {
                state.isSearchOpen = false;
            }),

        toggleSearch: () =>
            set((state) => {
                state.isSearchOpen = !state.isSearchOpen;
            }),

        openFilter: () =>
            set((state) => {
                state.isFilterOpen = true;
            }),

        closeFilter: () =>
            set((state) => {
                state.isFilterOpen = false;
            }),

        toggleFilter: () =>
            set((state) => {
                state.isFilterOpen = !state.isFilterOpen;
            }),

        mergeAppState: (nextState) =>
            set((state) => {
                const merged = deepmerge(state, nextState);
                Object.assign(state, merged);
            }),
    }))
);