import { serverConfig } from "@/lib/server-config";

export async function GET() {
    const response = await fetch(
        `${serverConfig.malApiBaseUrl}/anime/ranking?ranking_type=airing&limit=12&fields=id,title,main_picture,alternative_titles,media_type,status,num_episodes,start_season,start_date,mean,synopsis,genres`,
        {
            headers: {
                Accept: "application/json",
                "X-MAL-CLIENT-ID": serverConfig.malClientId,
            },
            cache: "no-store",
        }
    );

    if (!response.ok) {
        return Response.json([]);
    }

    const data = await response.json();

    const anime = data.data.map((item: any) => {
        const node = item.node;

        return {
            id: String(node.id),
            malId: node.id,
            title: node.alternative_titles?.en || node.title || "Untitled",
            romajiTitle: node.title,
            japaneseTitle: node.alternative_titles?.ja,
            image: node.main_picture?.large || node.main_picture?.medium || "",
            banner: node.main_picture?.large || node.main_picture?.medium || "",
            description: node.synopsis || "",
            year: node.start_season?.year || node.start_date?.split("-")[0] || "",
            status: node.status || "",
            type: node.media_type?.toUpperCase() || "ANIME",
            episodes: node.num_episodes || 0,
            score: node.mean ? Math.round(node.mean * 10) : 0,
            genres: node.genres?.map((genre: any) => genre.name) || [],
        };
    });

    return Response.json(anime);
}