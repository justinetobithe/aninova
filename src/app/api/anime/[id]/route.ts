import { serverConfig } from "@/lib/server-config";

export async function GET(
    request: Request,
    context: {
        params: Promise<{ id: string }>;
    }
) {
    const { id } = await context.params;

    const response = await fetch(
        `${serverConfig.malApiBaseUrl}/anime/${id}?fields=id,title,main_picture,alternative_titles,media_type,status,num_episodes,start_season,start_date,mean,synopsis,genres,studios,average_episode_duration`,
        {
            headers: {
                Accept: "application/json",
                "X-MAL-CLIENT-ID": serverConfig.malClientId,
            },
            cache: "no-store",
        }
    );

    if (!response.ok) {
        return Response.json(null, { status: 200 });
    }

    const data = await response.json();

    return Response.json({
        id: String(data.id),
        malId: data.id,
        title: data.alternative_titles?.en || data.title || "Untitled",
        romajiTitle: data.title,
        japaneseTitle: data.alternative_titles?.ja,
        image: data.main_picture?.large || data.main_picture?.medium || "",
        banner: data.main_picture?.large || data.main_picture?.medium || "",
        description: data.synopsis || "",
        year: data.start_season?.year || data.start_date?.split("-")[0] || "",
        season: data.start_season?.season || "",
        status: data.status || "",
        type: data.media_type?.toUpperCase() || "ANIME",
        episodes: data.num_episodes || 0,
        score: data.mean ? Math.round(data.mean * 10) / 10 : 0,
        genres: data.genres?.map((genre: any) => genre.name) || [],
        studios: data.studios?.map((studio: any) => studio.name) || [],
        duration: data.average_episode_duration
            ? Math.round(data.average_episode_duration / 60)
            : 0,
    });
}