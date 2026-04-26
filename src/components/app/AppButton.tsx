"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function AppButton({
    className,
    ...props
}: React.ComponentProps<typeof Button>) {
    return (
        <Button
            {...props}
            className={cn(
                "rounded-full bg-gradient-to-r from-pink-400 to-violet-500 font-black text-black shadow-lg shadow-pink-500/20 transition-all duration-300 hover:scale-[1.05] hover:from-pink-300 hover:to-violet-400",
                className
            )}
        />
    );
}