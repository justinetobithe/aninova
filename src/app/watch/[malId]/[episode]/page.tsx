import { getMegaPlayStreamUrl } from "@/lib/api";

export default function WatchPage({
    params,
}: {
    params: { malId: string; episode: string };
}) {
    const streamUrl = getMegaPlayStreamUrl(params.malId, params.episode, "sub");

    return (
        <main className="app-container py-8">
            <h1 className="mb-4 text-2xl font-black text-pink-300">
                Watching Episode {params.episode}
            </h1>

            <div className="aspect-video overflow-hidden rounded-2xl bg-black">
                <iframe
                    src={streamUrl}
                    className="h-full w-full"
                    allowFullScreen
                />
            </div>
        </main>
    );
}