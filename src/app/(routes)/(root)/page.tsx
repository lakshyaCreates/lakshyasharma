import { Metadata } from "next";
import Link from "next/link";

import { Companies, Projects, Social } from "./_chunks";
import { Blog } from "./_chunks/blog";
import { info } from "@/info";

export async function generateMetadata(): Promise<Metadata> {
    return {
        description: info.website.description,
        generator: "Next.js",
        applicationName: `Portfolio | ${info.about.name}`,
        referrer: "origin-when-cross-origin",
        keywords: info.website.keywords,
        authors: [
            {
                name: info.about.name,
                url: info.website.url,
            },
        ],
        creator: info.about.name,
        publisher: info.about.name,
        formatDetection: {
            email: true,
            address: false,
            telephone: false,
            url: true,
        },
        metadataBase: new URL(info.website.url),
        alternates: {
            canonical: "/",
        },
        openGraph: {
            title: `Portfolio | ${info.about.name}`,
            description: info.website.description,
            countryName: "India",
            url: info.website.url,
            siteName: `Portfolio | ${info.about.name}`,
            images: [
                {
                    url: "https://lakshyasharma.dev/logos/Black_Text-White_Bg_Rounded.png",
                    width: 1000,
                    height: 1000,
                },
            ],
            locale: "en_US",
            type: "website",
        },
        icons: {
            icon: "/icon.png",
            apple: "/icon.png",
        },
        twitter: {
            card: "summary_large_image",
            title: `Portfolio | ${info.about.name}`,
            description: info.website.description,
            creator: "@Lakshya1511",
            creatorId: "@Lakshya1511",
        },

        robots: {
            index: true,
            follow: true,
            nocache: true,
            googleBot: {
                index: true,
                follow: true,
                noimageindex: true,
                "max-image-preview": "large",
                "max-video-preview": -1,
                "max-snippet": -1,
            },
        },
        verification: {
            google: "google",
        },
        category: "Technology",
    };
}

export default function RootPage() {
    const data = info.about;
    const skills = info.skills;

    return (
        <div className="flex flex-col space-y-4 py-20">
            <h1 className="text-4xl font-bold tracking-tight text-foreground/80">
                {data.heading}
            </h1>
            <h2 className="text-lg font-medium leading-snug tracking-tight text-muted-foreground">
                {data.subHeading}
            </h2>
            <div className="space-y-2 py-6">
                <p className="text-sm text-foreground/80">
                    Currently playing around with,{" "}
                </p>
                <div className="flex flex-wrap gap-1">
                    {skills.map((skill, index) => (
                        <Link
                            href={skill.url}
                            key={index}
                            className="rounded-lg border border-border bg-gradient-to-tr from-accent/50 to-accent/90 px-1.5 py-0.5 text-xs font-medium tracking-wide text-muted-foreground transition-all duration-200 ease-in hover:scale-[1.02] hover:text-foreground/80"
                        >
                            {skill.title}
                        </Link>
                    ))}
                </div>
            </div>
            <div className="space-y-8 pt-2">
                <Companies />
                <Projects />
                <Blog />
                <Social />
            </div>
            <div className="pt-20 md:pt-40">
                <p className="text-sm text-muted-foreground">
                    &copy; Lakshya Sharma, 2024
                </p>
            </div>
        </div>
    );
}
