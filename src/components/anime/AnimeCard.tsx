import Link from "next/link";
import { Anime } from "@/types/anime";
import { AnimeHoverCard } from "./AnimeHoverCard";

export function AnimeCard({ anime }: { anime: Anime }) {
    return (
        <AnimeHoverCard animeId={anime.id}>
            <Link href={`/anime/${anime.id}`} className="group block">
                <div className="overflow-hidden rounded-2xl bg-card shadow-lg shadow-black/10">
                    <div className="aspect-[3/4] bg-muted">
                        <img
                            src={anime.image}
                            alt={anime.title}
                            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                        />
                    </div>

                    <div className="p-3">
                        <h3 className="line-clamp-1 text-sm font-black">{anime.title}</h3>
                        <p className="mt-1 text-xs font-semibold text-muted-foreground">
                            {anime.type} • {anime.year}
                        </p>
                    </div>
                </div>
            </Link>
        </AnimeHoverCard>
    );
}