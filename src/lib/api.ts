import axios from "axios";

export const appApi = axios.create({
    baseURL: "",
    headers: {
        "Content-Type": "application/json",
    },
});

export async function apiGet<T>(url: string): Promise<T> {
    const response = await appApi.get<T>(url);
    return response.data;
}

export function getMegaPlayStreamUrl(
    malId: string | number,
    episode: string | number,
    language: "sub" | "dub" = "sub"
) {
    return `${process.env.NEXT_PUBLIC_MEGAPLAY_STREAM}/${malId}/${episode}/${language}`;
}