export type Anime = {
    id: string;
    malId: number;
    title: string;
    romajiTitle?: string;
    japaneseTitle?: string;
    image: string;
    banner?: string;
    description?: string;
    year?: string | number;
    status?: string;
    type?: string;
    episodes?: number;
    score?: string | number;
    genres?: string[];
};