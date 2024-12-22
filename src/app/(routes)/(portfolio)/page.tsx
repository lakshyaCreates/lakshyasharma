import { FaGithub } from "react-icons/fa6";

import { env } from "@/env/client";
import {
    ProjectItem,
    ProjectItemProps,
    Tag,
} from "@/features/frontend/components/project-item";

export default function HomePage() {
    return (
        <div className="flex flex-col gap-y-4">
            {projects.map((project) => (
                <ProjectItem key={project.title} {...project} />
            ))}
        </div>
    );
}

const projects: ProjectItemProps[] = [
    {
        title: "toust.so",
        date: "January 01, 2024",
        description:
            "NexusOS is proudly submitted as a project for the NASA Space Apps Challenge 2023 by the Cholo Bangladesh team. Our platform aims to advance open science collaboration and aligns with the goals of NASA's Open Science Initiative and the TOPS mission. ",
        tags: [
            Tag["Next.js"],
            Tag["Tailwind CSS"],
            Tag["TypeScript"],
            Tag["TurboRepo"],
        ],
        socials: [
            {
                Icon: FaGithub,
                href: "",
            },
        ],
        imageSrc: "https://dummyimage.com/1920x1080/383738/575757.jpg",
        url: `${env.NEXT_PUBLIC_BASE_URL}/projects/toust-so`,
    },
    {
        title: "Flare Ship",
        date: "January 18, 2024",
        description:
            "NexusOS is proudly submitted as a project for the NASA Space Apps Challenge 2023 by the Cholo Bangladesh team. Our platform aims to advance open science collaboration and aligns with the goals of NASA's Open Science Initiative and the TOPS mission. ",
        tags: [
            Tag["Next.js"],
            Tag["Tailwind CSS"],
            Tag["TypeScript"],
            Tag["TurboRepo"],
        ],
        socials: [
            {
                Icon: FaGithub,
                href: "",
            },
        ],
        imageSrc: "https://dummyimage.com/1920x1080/383738/575757.jpg",
        url: `${env.NEXT_PUBLIC_BASE_URL}/projects/flare-ship`,
    },
];
