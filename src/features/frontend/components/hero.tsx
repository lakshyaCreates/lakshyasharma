import {
    FaLinkedin,
    FaXTwitter,
    FaGithub,
    FaInstagram,
    FaStackOverflow,
} from "react-icons/fa6";
import { FaRss } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";

import Link from "next/link";

import { LinkPreview } from "@/components/aceternity/link-preview";
import { ThemeToggler } from "@/components/theme-toggler";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { env } from "@/env/client";

export const Hero = () => {
    return (
        <div className="flex flex-col items-start justify-start gap-y-6">
            <Link
                href={`${env.NEXT_PUBLIC_BASE_URL}`}
                className="text-sm font-medium text-neutral-700 underline dark:text-neutral-200"
            >
                lakshyasharma.dev
            </Link>
            <div className="flex w-full flex-col">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-semibold tracking-tight md:font-bold lg:text-4xl">
                        Lakshya Sharma
                    </h1>
                    <div className="flex items-center gap-x-1">
                        <Button
                            asChild
                            size={"icon"}
                            variant={"ghost"}
                            className="rounded-full"
                        >
                            <Link href={""}>
                                <FaRss />
                            </Link>
                        </Button>
                        <ThemeToggler />
                    </div>
                </div>
                <div className="text-muted-foreground">
                    I perform daily rituals of caffeine & code to appease to the
                    digital gods
                </div>
            </div>
            <div className="max-w-2xl tracking-wide text-neutral-700 dark:text-neutral-300">
                Hey! I'm Lakshya Sharma, currently pursuing my B.Tech at{" "}
                <LinkPreview
                    url="https://www.ganpatuniversity.ac.in/"
                    className="link-preview"
                >
                    Ganpat University
                </LinkPreview>{" "}
                I also am the founder of{" "}
                <LinkPreview
                    url="https://lakshyasharma.dev"
                    className="link-preview"
                >
                    Mighty Suite
                </LinkPreview>{" "}
                - a B2B digital agency that helps businesses grow online.
            </div>
            <div className="flex flex-wrap items-center gap-2">
                <Button size="default">Schedule a call</Button>
                <Button asChild size="default" variant={"outline"}>
                    <Link
                        download="/resume.pdf"
                        target="_blank"
                        href={"/resume.pdf"}
                    >
                        Resume
                    </Link>
                </Button>
                {socials.map((item, index) => (
                    <Button asChild key={index} size="icon" variant={"outline"}>
                        <LinkPreview url={item.href}>
                            <item.Icon className="size-full" />
                        </LinkPreview>
                    </Button>
                ))}
            </div>
            <Separator />
            <div className="flex flex-col gap-2">
                {skills.map((item, idx) => (
                    <div
                        key={idx}
                        className="flex max-w-2xl flex-wrap items-center gap-x-1 text-sm"
                    >
                        <span className="font-medium">{item.label}: </span>
                        {item.tags.map((tag, idx) => (
                            <LinkPreview
                                key={idx}
                                url={tag.href}
                                className="!text-muted-foreground transition-colors duration-150 ease-in hover:!text-black dark:hover:!text-white"
                            >
                                <span className="group-hover:!text-white">
                                    {tag.label}
                                    <span>
                                        {idx !== item.tags.length - 1 && ", "}
                                    </span>
                                </span>
                            </LinkPreview>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

const socials = [
    {
        Icon: MdMailOutline,
        href: "https://github.com/lakshyaCreates",
    },
    {
        Icon: FaGithub,
        href: "https://github.com/lakshyaCreates",
    },
    {
        Icon: FaXTwitter,
        href: "https://github.com/lakshyaCreates",
    },
    {
        Icon: FaLinkedin,
        href: "https://github.com/lakshyaCreates",
    },
    {
        Icon: FaInstagram,
        href: "https://github.com/lakshyaCreates",
    },
    {
        Icon: FaStackOverflow,
        href: "https://github.com/lakshyaCreates",
    },
];

const skills = [
    {
        label: "Frontend",
        tags: [
            {
                label: "React",
                href: "https://reactjs.org",
            },
            {
                label: "Next.js",
                href: "https://nextjs.org",
            },
            {
                label: "Astro",
                href: "https://astro.build/",
            },
            {
                label: "Remix",
                href: "https://remix.run/",
            },
            {
                label: "Django",
                href: "https://nextjs.org",
            },
        ],
    },

    {
        label: "Backend",
        tags: [
            {
                label: "JavaScript",
                href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            },
            {
                label: "Next.js",
                href: "https://nextjs.org",
            },
            {
                label: "Express.js",
                href: "",
            },
            {
                label: "Hono.js",
                href: "",
            },
            {
                label: "FastAPI",
                href: "",
            },
            {
                label: "Flask",
                href: "",
            },
            {
                label: "Django",
                href: "",
            },
        ],
    },
    {
        label: "Styling",
        tags: [
            {
                label: "Tailwind CSS",
                href: "https://tailwindcss.com",
            },
            {
                label: "Shadcn UI",
                href: "https://ui.shadcn.com",
            },
            {
                label: "Motion",
                href: "https://motion.dev",
            },

            {
                label: "GSAP",
                href: "https://gsap.com/",
            },
        ],
    },
    {
        label: "Utils",
        tags: [
            {
                label: "Zustand",
                href: "https://zustand-demo.pmnd.rs/",
            },
            {
                label: "Redux Toolkit",
                href: "https://redux-toolkit.js.org/",
            },
            {
                label: "Class Variance Authority",
                href: "https://cva.style/docs",
            },
        ],
    },
    {
        label: "More",
        tags: [
            {
                label: "Turborepo",
                href: "https://turborepo.build",
            },
        ],
    },
];
