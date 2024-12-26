"use client";

import { ArrowLeft } from "lucide-react";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Project } from "content-collections";

import { IconMap } from "@/components/icon-map";
import { ThemeToggler } from "@/components/theme-toggler";
import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

export const Frontmatter = ({
    title,
    description,
    tags,
    links,
    imageDark,
    imageLight,
    date,
    url,
}: Project) => {
    const router = useRouter();
    const { theme } = useTheme();

    return (
        <div className="flex flex-col items-start justify-start gap-y-6">
            <div className="flex w-full items-center justify-between">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                onClick={() => {
                                    router.push("/");
                                }}
                                size="icon"
                                variant={"outline"}
                                className="rounded-full"
                            >
                                <ArrowLeft />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent className="text-xs">
                            Go Back
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <div className="flex items-center gap-x-2">
                    <ThemeToggler />
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
                            <TooltipContent className="border bg-transparent text-foreground">
                                Last Updated
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </div>
            <div className="group relative aspect-video size-full overflow-hidden rounded-lg *:transform-gpu *:rounded-lg *:transition-all *:duration-150 *:ease-in">
                <div className="absolute left-0 top-0 z-[999] size-full border opacity-0 group-hover:opacity-100" />
                <Image
                    src={theme === "dark" ? imageDark : imageLight}
                    alt={`Thumbnail - ${title}`}
                    width={1280}
                    height={1080}
                    className="pointer-events-none scale-100 group-hover:scale-105"
                />
            </div>
            <div className="space-y-4">
                <h1 className="text-3xl font-semibold tracking-tight md:font-bold lg:text-4xl">
                    {title}
                </h1>
                <p className="leading-5 text-muted-foreground">{description}</p>
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
    );
};
