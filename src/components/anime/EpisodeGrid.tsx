import Link from "next/link";

export function EpisodeGrid({
    malId,
    episodes,
}: {
    malId: number;
    episodes: number;
}) {
    return (
        <div className="grid grid-cols-5 gap-3 md:grid-cols-10">
            {Array.from({ length: episodes }).map((_, index) => {
                const ep = index + 1;

                return (
                    <Link
                        key={ep}
                        href={`/watch/${malId}/${ep}`}
                        className="rounded-lg bg-white/5 px-4 py-3 text-center text-sm font-bold hover:bg-pink-400 hover:text-black"
                    >
                        EP {ep}
                    </Link>
                );
            })}
        </div>
    );
}