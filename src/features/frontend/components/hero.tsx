import { FaLinkedin, FaXTwitter, FaGithub, FaInstagram } from "react-icons/fa6";
import { FaRss } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";

import Link from "next/link";

import { LinkPreview } from "@/components/aceternity/link-preview";
import { ScheduleCal } from "@/components/cal";
import { ThemeToggler } from "@/components/theme-toggler";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
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
                            <Link
                                href={`${env.NEXT_PUBLIC_BASE_URL}/feed`}
                                type="application/xml"
                            >
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
            <div className="max-w-2xl tracking-wide text-neutral-700 dark:text-neutral-300 [&>span]:font-semibold [&>span]:text-primary">
                Hi! I'm a <span>software engineer</span> & an{" "}
                <span>open source enthusiast</span> building digital solutions
                that scale. Currently pursuing B.Tech while actively{" "}
                <span>contributing</span> to the tech ecosystem through client
                solutions and <span>community projects</span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
                <ScheduleCal />
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button asChild size="default" variant={"outline"}>
                                <Link
                                    download="/Resume-Lakshya_Sharma.pdf"
                                    target="_blank"
                                    href={"/Resume-Lakshya_Sharma.pdf"}
                                >
                                    Resume
                                </Link>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent className="border bg-background text-primary">
                            Last Updated -{" "}
                            <span className="font-medium">
                                December 28, 2024
                            </span>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                {socials.map((item, index) => (
                    <Button asChild key={index} size="icon" variant={"outline"}>
                        <Link href={item.href}>
                            <item.Icon className="size-full" />
                        </Link>
                    </Button>
                ))}
            </div>
            <Separator />
            <div className="flex max-w-[95%] flex-col gap-2">
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
        href: "mailto:lakshya.creates07@gmail.com",
    },
    {
        Icon: FaGithub,
        href: "https://github.com/lakshyaCreates",
    },
    {
        Icon: FaXTwitter,
        href: "https://x.com/Lakshya1511",
    },
    {
        Icon: FaLinkedin,
        href: "https://www.linkedin.com/in/lakshyasharma07/",
    },
    {
        Icon: FaInstagram,
        href: "https://www.instagram.com/nopzy07/",
    },
    // {
    //     Icon: FaStackOverflow,
    //     href: "https://github.com/lakshyaCreates",
    // },
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
                href: "https://djangoproject.com",
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
                label: "TypeScript",
                href: "https://www.typescriptlang.org/",
            },
            {
                label: "Express.js",
                href: "https://expressjs.com",
            },
            {
                label: "Hono.js",
                href: "https://hono.dev",
            },
            {
                label: "GraphQL",
                href: "https://graphql.org",
            },
            {
                label: "FastAPI",
                href: "https://fastapi.tiangolo.com/",
            },
            {
                label: "Flask",
                href: "https://flask.palletsprojects.com/en/stable/",
            },
            {
                label: "Django",
                href: "https://djangoproject.com",
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
                label: "Zod",
                href: "https://zod.dev",
            },
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
        label: "Docs",
        tags: [
            {
                label: "Docusaurus",
                href: "https://docusaurus.io/",
            },
            {
                label: "Nextra",
                href: "https://nextra.site",
            },
            {
                label: "Fuma Docs",
                href: "https://fumadocs.vercel.app/",
            },
            {
                label: "Mintlify",
                href: "https://mintlify.com",
            },
        ],
    },
    {
        label: "CMS",
        tags: [
            {
                label: "Content Collections",
                href: "https://content-collections.dev",
            },
            { label: "Strapi", href: "https://strapi.io/" },
            {
                label: "Sanity",
                href: "https://www.sanity.io/",
            },
            {
                label: "Contentful",
                href: "https://www.contentful.com/",
            },
            {
                label: "Payload 3.0",
                href: "https://payloadcms.com/",
            },
        ],
    },
    {
        label: "More",
        tags: [
            {
                label: "Turborepo",
                href: "https://turbo.build",
            },
            {
                label: "MDX",
                href: "https://mdxjs.com/",
            },
        ],
    },
];
