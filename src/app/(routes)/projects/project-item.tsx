"use client";

import { FaCaretRight } from "react-icons/fa6";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

import { IconMap } from "@/components/icon-map";
import { Spotlight } from "@/components/motion-primitives/spotlight";
import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { Project } from "@/content/.content-collections/generated";

export const ProjectItem = ({
    title,
    description,
    slug,
    tags,
    imageDark,
    imageLight,
    date,
    published,
    url,
    links,
}: Project) => {
    const { theme } = useTheme();

    return (
        <div className="relative grid w-full grid-cols-1 gap-6 rounded-lg border bg-transparent p-4 xl:grid-cols-5">
            <Spotlight
                className="from-stone-500 via-stone-500 to-stone-600 blur-3xl dark:from-neutral-200 dark:via-neutral-300 dark:to-neutral-400"
                size={96}
            />
            <div className="z-10 col-span-1 flex flex-col justify-between gap-y-2 xl:col-span-3">
                <div className="flex flex-col gap-y-2">
                    <Link
                        href={url}
                        className="group flex flex-wrap items-center gap-2"
                    >
                        <h3 className="mt-0.5 text-xl font-bold tracking-tight text-foreground">
                            {title}
                        </h3>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <span className="rounded border bg-accent px-1.5 py-1 text-xs">
                                        {date.toLocaleDateString("en-US", {
                                            month: "long",
                                            day: "numeric",
                                            year: "numeric",
                                        })}
                                    </span>
                                </TooltipTrigger>
                                <TooltipContent className="border bg-background text-foreground">
                                    Last Updated
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        <FaCaretRight className="-translate-x-4 rotate-180 scale-[0.9] text-muted-foreground opacity-0 transition-all duration-150 ease-in group-hover:-translate-x-1 group-hover:-rotate-0 group-hover:opacity-100 dark:text-primary" />
                    </Link>
                    <p className="text-sm text-muted-foreground">
                        {description}
                    </p>
                    <div className="flex flex-wrap items-center gap-1">
                        {tags.map((tag, idx) => (
                            <span
                                key={idx}
                                className="rounded bg-accent px-1.5 py-1 text-xs"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="flex flex-wrap items-center gap-1">
                    {links.map((link, idx) => (
                        <TooltipProvider key={idx}>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Button
                                        asChild
                                        size={"icon"}
                                        variant={"outline"}
                                    >
                                        <Link href={link.url}>
                                            {
                                                IconMap[
                                                    link.label.toLowerCase() as keyof typeof IconMap
                                                ]
                                            }
                                        </Link>
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <Link href={link.url}>{link.label}</Link>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    ))}
                </div>
            </div>
            <div className="col-span-1 xl:col-span-2">
                <div className="group relative aspect-video h-full w-full overflow-hidden rounded-lg *:rounded-lg">
                    <Link href={url} className="relative h-full w-full">
                        <div className="absolute z-[9999] min-h-full min-w-full rounded-lg border bg-transparent opacity-0 transition-opacity duration-150 ease-in group-hover:opacity-100"></div>
                        {theme === "dark" ? (
                            <Image
                                src={imageDark}
                                alt={`Thumbnail - ${title}`}
                                width={2000}
                                height={2000}
                                quality={100}
                                className="size-full scale-100 transform-gpu object-cover transition-all duration-200 ease-in group-hover:scale-105"
                            />
                        ) : (
                            <Image
                                src={imageLight}
                                alt={`Thumbnail - ${title}`}
                                width={2000}
                                height={2000}
                                quality={100}
                                className="size-full scale-100 transform-gpu object-cover transition-all duration-200 ease-in group-hover:scale-105"
                            />
                        )}
                    </Link>
                </div>
            </div>
        </div>
    );
};
