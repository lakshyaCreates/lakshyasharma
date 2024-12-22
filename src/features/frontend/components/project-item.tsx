import { FaArrowRight, FaCaretRight } from "react-icons/fa6";
import { IconType } from "react-icons/lib";

import Image from "next/image";
import Link from "next/link";

import { LinkPreview } from "@/components/aceternity/link-preview";
import { Spotlight } from "@/components/motion-primitives/spotlight";
import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

export enum Tag {
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "React Native",
    "TurboRepo",
}

type Socials = {
    Icon: IconType;
    href: string;
};

export interface ProjectItemProps {
    title: string;
    date: string;
    description: string;
    tags: Tag[];
    socials: Socials[];
    imageSrc: string;
    url: string;
}

export const ProjectItem = ({
    title,
    date,
    description,
    tags,
    socials,
    imageSrc,
    url,
}: ProjectItemProps) => {
    return (
        <div className="relative grid w-full grid-cols-1 gap-6 rounded-lg border p-4 xl:grid-cols-5">
            <Spotlight
                className="from-neutral-600 via-neutral-500 to-neutral-400 blur-3xl dark:from-neutral-200 dark:via-neutral-300 dark:to-neutral-400"
                size={96}
            />
            <div className="z-10 col-span-1 flex flex-col gap-y-2 xl:col-span-3">
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
                                    {date}
                                </span>
                            </TooltipTrigger>
                            <TooltipContent className="border bg-background text-foreground">
                                Last Updated
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <FaCaretRight className="-translate-x-4 rotate-180 scale-[0.9] opacity-0 transition-all duration-150 ease-in group-hover:-translate-x-1 group-hover:-rotate-0 group-hover:opacity-100" />
                </Link>
                <p className="text-sm text-muted-foreground">{description}</p>
                <div className="flex flex-wrap items-center gap-1">
                    {tags.map((_, idx) => (
                        <span
                            key={idx}
                            className="rounded bg-accent px-1.5 py-1 text-xs"
                        >
                            {Tag[idx]}
                        </span>
                    ))}
                </div>
                <div className="wrap flex items-center gap-1">
                    <Button asChild size={"sm"} variant={"default"}>
                        <Link href={url} className="group flex items-center">
                            <span>View</span>
                            <FaArrowRight className="-ml-1 scale-75 transition-transform duration-150 ease-in group-hover:translate-x-0.5" />
                        </Link>
                    </Button>
                    {socials.map((item, idx) => (
                        <Button
                            asChild
                            key={idx}
                            size={"icon"}
                            variant={"outline"}
                        >
                            <LinkPreview url={item.href}>
                                <item.Icon />
                            </LinkPreview>
                        </Button>
                    ))}
                </div>
            </div>
            <div className="col-span-1 xl:col-span-2">
                <Image
                    width={1280}
                    height={720}
                    src={imageSrc}
                    alt="Thumbnail Placeholder"
                    className="size-full rounded-lg object-cover object-center"
                />
            </div>
        </div>
    );
};
