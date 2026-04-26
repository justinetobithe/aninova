import { serverConfig } from "@/lib/server-config";

export async function GET() {
    const res = await fetch(
        `${serverConfig.malApiBaseUrl}/anime/season/now?limit=20&fields=id,title,main_picture,media_type,num_episodes,mean,start_date`,
        {
            headers: {
                Accept: "application/json",
                "X-MAL-CLIENT-ID": serverConfig.malClientId,
            },
            cache: "no-store",
        }
    );

    if (!res.ok) return Response.json([]);

    const data = await res.json();

    const anime = data.data.map((item: any) => {
        const node = item.node;

        return {
            id: String(node.id),
            malId: node.id,
            title: node.title,
            image: node.main_picture?.large || node.main_picture?.medium || "",
            type: node.media_type?.toUpperCase() || "TV",
            episodes: node.num_episodes || 1,
            score: node.mean || 0,
        };
    });

    return Response.json(anime);
}