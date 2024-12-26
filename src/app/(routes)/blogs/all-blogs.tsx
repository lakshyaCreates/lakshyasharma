"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

import { allBlogs } from "content-collections";

import { Spotlight } from "@/components/motion-primitives/spotlight";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

export const AllBlogs = () => {
    const { theme } = useTheme();

    const blogs = allBlogs.sort((a, b) => b.date.getTime() - a.date.getTime());

    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 2xl:grid-cols-3">
            {blogs.map((blog) => (
                <Link
                    key={`Blog - ${blog.title}`}
                    href={blog.url}
                    className="group relative h-full w-full max-w-lg scale-100 overflow-hidden rounded-lg border bg-transparent"
                >
                    <Spotlight
                        className="from-stone-500 via-stone-500 to-stone-600 blur-3xl dark:from-neutral-200 dark:via-neutral-300 dark:to-neutral-400"
                        size={72}
                    />
                    <div className="aspect-[8/5] w-full overflow-hidden">
                        <Image
                            width={1280}
                            height={800}
                            quality={100}
                            src={
                                theme === "dark"
                                    ? blog.imageDark
                                    : blog.imageLight
                            }
                            alt={`Blog Thumbnail - ${blog.title}`}
                            className="aspect-[8/5] w-full scale-105 transform-gpu rounded-lg object-cover object-center transition-transform duration-150 ease-in group-hover:scale-100"
                        />
                    </div>
                    <div className="flex flex-col items-start justify-start gap-y-2 p-3">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger className="my-1">
                                    <span className="rounded border bg-accent px-1.5 py-1 text-start text-xs">
                                        {blog.date.toLocaleDateString("en-US", {
                                            month: "long",
                                            day: "numeric",
                                            year: "numeric",
                                        })}
                                    </span>
                                </TooltipTrigger>
                                <TooltipContent className="border bg-transparent text-foreground">
                                    Last Updated
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        <h3 className="line-clamp-2 text-xl font-semibold leading-6 tracking-tight">
                            {blog.title}
                        </h3>
                        <p className="line-clamp-2 text-sm text-muted-foreground">
                            {blog.description}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    );
};
