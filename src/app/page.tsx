"use client";

import { HeroCarousel } from "@/components/anime/HeroCarousel";
import { TrendingSwiper } from "@/components/anime/TrendingSwiper";
import { AppSection } from "@/components/app/AppSection";
import { DiscoverSection } from "@/components/anime/DiscoverSection";
import { ScheduleSection } from "@/components/anime/ScheduleSection";
import {
  usePopularAnime,
  useRecentlyAddedAnime,
  useTrendingAnime,
} from "@/hooks/useAnimeQueries";
import { useAnimeStore } from "@/store/useAnimeStore";
import { Anime } from "@/types/anime";

function safeAnimeList(value: unknown): Anime[] {
  return Array.isArray(value) ? value : [];
}

export default function HomePage() {
  const trendingQuery = useTrendingAnime();
  const popularQuery = usePopularAnime();

  const trendingAnime = safeAnimeList(
    useAnimeStore((state) => state.trendingAnime)
  );

  const popularAnime = safeAnimeList(
    useAnimeStore((state) => state.popularAnime)
  );

  const recentlyAddedAnime = safeAnimeList(
    useAnimeStore((state) => state.recentlyAddedAnime)
  );

  const heroAnime = trendingAnime.length > 0 ? trendingAnime : popularAnime;
  const discoveryAnime = [...trendingAnime, ...popularAnime, ...recentlyAddedAnime];

  return (
    <main className="pb-12">
      <HeroCarousel
        anime={heroAnime.slice(0, 5)}
        isLoading={trendingQuery.isLoading || popularQuery.isLoading}
      />

      <AppSection title="Trending">
        <TrendingSwiper
          anime={trendingAnime}
          isLoading={trendingQuery.isLoading}
          variant="ranked"
        />
      </AppSection>

      <DiscoverSection anime={discoveryAnime} />

      <ScheduleSection />
    </main>
  );
}