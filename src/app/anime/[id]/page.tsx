import { notFound } from "next/navigation";
import { demoAnime } from "@/lib/demo-anime";
import { EpisodeGrid } from "@/components/anime/EpisodeGrid";

export default async function AnimeDetailsPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const anime = demoAnime.find((item) => item.id === id);

    if (!anime) return notFound();

    return (
        <main className="pb-10">
            <section className="relative min-h-[540px] overflow-hidden">
                <img
                    src={anime.banner || anime.image}
                    alt={anime.title}
                    className="absolute inset-0 h-full w-full object-cover opacity-40"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#171729] via-[#171729]/90 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171729] via-transparent to-transparent" />

                <div className="app-container relative flex min-h-[540px] items-center gap-8">
                    <img
                        src={anime.image}
                        alt={anime.title}
                        className="hidden h-80 w-56 rounded-2xl object-cover shadow-xl md:block"
                    />

                    <div className="max-w-3xl">
                        <div className="mb-4 flex flex-wrap gap-2">
                            <span className="rounded bg-white/10 px-3 py-1 text-xs font-bold">
                                {anime.type}
                            </span>
                            <span className="rounded bg-white/10 px-3 py-1 text-xs font-bold">
                                {anime.status}
                            </span>
                            <span className="rounded bg-white/10 px-3 py-1 text-xs font-bold">
                                {anime.episodes} Episodes
                            </span>
                        </div>

                        <h1 className="text-4xl font-black md:text-5xl">
                            {anime.title}
                        </h1>

                        {anime.japaneseTitle && (
                            <p className="mt-2 text-pink-400">
                                {anime.japaneseTitle}
                            </p>
                        )}

                        <p className="mt-6 max-w-2xl text-sm text-white/70 md:text-base">
                            {anime.description}
                        </p>
                    </div>
                </div>
            </section>

            <section className="app-container mt-10 grid gap-8 lg:grid-cols-[1fr_320px]">
                <div>
                    <h2 className="mb-5 text-2xl font-black text-pink-400">
                        Episodes
                    </h2>

                    <EpisodeGrid
                        malId={anime.malId}
                        episodes={anime.episodes || 1}
                    />
                </div>

                <aside className="rounded-2xl bg-white/5 p-6 backdrop-blur">
                    <h3 className="mb-4 text-xl font-black">
                        Details
                    </h3>

                    <div className="space-y-3 text-sm text-white/80">
                        <p>MAL ID: {anime.malId}</p>
                        <p>Score: {anime.score}</p>
                        <p>Status: {anime.status}</p>
                        <p>Year: {anime.year}</p>
                        <p>Type: {anime.type}</p>
                    </div>
                </aside>
            </section>
        </main>
    );
}