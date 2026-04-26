"use client";

import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { AppButton } from "@/components/app/AppButton";
import { useScheduleAnime } from "@/hooks/useAnimeQueries";

export function ScheduleSection() {
    const { data = [], isLoading } = useScheduleAnime();

    const days = generateDays();
    const schedule = buildSchedule(data);

    return (
        <section className="app-container mt-12">
            <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <h2 className="text-2xl font-black text-pink-300">
                    Estimated Schedule
                </h2>

                <span className="rounded-full bg-white px-4 py-2 text-xs font-bold text-black">
                    Asia/Manila • Live
                </span>
            </div>

            <div className="mb-6 flex items-center gap-3">
                <AppButton className="h-11 w-11 rounded-full bg-white text-black">
                    <ChevronLeft className="h-4 w-4" />
                </AppButton>

                <div className="grid flex-1 grid-cols-2 gap-3 md:grid-cols-4 xl:grid-cols-7">
                    {days.map((d, i) => (
                        <div
                            key={d.label}
                            className={`rounded-xl px-4 py-3 text-center ${i === 0
                                    ? "bg-pink-300 text-black"
                                    : "bg-[#11111f] text-white"
                                }`}
                        >
                            <p className="font-black">{d.label}</p>
                            <p className="text-xs opacity-70">{d.date}</p>
                        </div>
                    ))}
                </div>

                <AppButton className="h-11 w-11 rounded-full bg-white text-black">
                    <ChevronRight className="h-4 w-4" />
                </AppButton>
            </div>

            <div className="rounded-2xl bg-[#11111f] p-5">
                {isLoading ? (
                    <div className="space-y-4">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <div
                                key={i}
                                className="h-6 animate-pulse rounded bg-white/10"
                            />
                        ))}
                    </div>
                ) : (
                    <div className="divide-y divide-white/5">
                        {schedule.map((item) => (
                            <div
                                key={`${item.time}-${item.title}`}
                                className="grid grid-cols-[70px_1fr_auto] items-center gap-4 py-4"
                            >
                                <span className="font-bold text-white/60">
                                    {item.time}
                                </span>

                                <p className="font-semibold text-white">
                                    {item.title}
                                </p>

                                <span className="flex items-center gap-2 text-xs font-bold text-pink-300">
                                    <Play className="h-3 w-3 fill-pink-300" />
                                    Ep {item.episode}
                                </span>
                            </div>
                        ))}
                    </div>
                )}

                <button className="mt-5 text-sm font-bold text-pink-300">
                    View more
                </button>
            </div>
        </section>
    );
}

function generateDays() {
    const today = new Date();

    return Array.from({ length: 7 }).map((_, i) => {
        const d = new Date();
        d.setDate(today.getDate() + i);

        return {
            label: d.toLocaleDateString("en-US", { weekday: "short" }),
            date: d.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
            }),
        };
    });
}

function buildSchedule(anime: any[]) {
    const times = [
        "15:30",
        "16:00",
        "16:30",
        "17:00",
        "21:00",
        "21:30",
        "22:15",
    ];

    return anime.slice(0, 7).map((item, index) => ({
        time: times[index] || "23:00",
        title: item.title,
        episode: item.episodes || 1,
    }));
}