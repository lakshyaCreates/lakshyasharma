"use client";

import { allTimelines } from "content-collections";

import { cn } from "@/lib/utils";

import { MDX } from "@/components/mdx";

export default function TimelinePage() {
    const sortedTimelines = allTimelines.sort(
        (a, b) => b.date.getTime() - a.date.getTime(),
    );

    return (
        <div className="prose dark:prose-invert">
            {sortedTimelines.map((timeline, idx) => (
                <div key={timeline._meta.fileName} className="relative pb-12">
                    <span className="absolute left-2 top-3 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" />
                    {idx != allTimelines.length - 1 && (
                        <div className="absolute left-2 top-3 -z-50 h-full w-[2px] -translate-x-1/2 bg-accent" />
                    )}
                    <div
                        className={cn(
                            "absolute left-2 top-3 -z-50 w-[2px] -translate-x-1/2 bg-accent",
                            idx == allTimelines.length - 1 ? "h-3/5" : "h-full",
                        )}
                    />

                    <div className="ml-7 w-full">
                        <span className="rounded border bg-accent px-2 py-1 text-sm font-medium">
                            {timeline.title}
                        </span>
                        <MDX content={timeline.content.mdx} />
                    </div>
                </div>
            ))}
        </div>
    );
}
