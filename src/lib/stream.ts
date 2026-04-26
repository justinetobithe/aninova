import { config } from "./config";

export function getStreamUrl(malId: number, episode: number, lang = "sub") {
    return `${config.megaplayStream}/${malId}/${episode}/${lang}`;
}