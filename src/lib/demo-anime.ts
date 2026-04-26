import { Anime } from "@/types/anime";

export const demoAnime: Anime[] = [
  {
    id: "attack-on-titan",
    malId: 16498,
    title: "Attack on Titan",
    japaneseTitle: "Shingeki no Kyojin",
    image: "/anime/aot.jpg",
    banner: "/anime/aot-banner.jpg",
    year: "2013",
    type: "TV",
    status: "Finished",
    episodes: 25,
    score: "86%",
    genres: ["Action", "Drama", "Fantasy"],
    description:
      "Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called Titans.",
  },
  {
    id: "fullmetal-alchemist-brotherhood",
    malId: 5114,
    title: "Fullmetal Alchemist Brotherhood",
    image: "/anime/fmab.jpg",
    year: "2009",
    type: "TV",
    status: "Finished",
    episodes: 64,
    score: "89%",
    genres: ["Action", "Adventure", "Drama"],
  },
];