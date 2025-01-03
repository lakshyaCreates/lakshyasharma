import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

import Providers from "@/providers";

import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        template: `%s - ${site.title}`,
        default: site.title,
        absolute: site.title,
    },
    description: site.description,
    openGraph: {
        title: site.title,
        description: site.description,
    },
    generator: "Next.js + TypeScript",
    applicationName: site.name,
    referrer: "origin-when-cross-origin",
    keywords: site.keywords,
    creator: site.name,
    publisher: site.name,
    formatDetection: {
        email: true,
        address: false,
        telephone: true,
    },
    authors: [{ name: site.name, url: site.siteUrl }],
    category: "Portfolio Website",
    robots: {
        "max-image-preview": "standard",
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            nocache: true,
            noimageindex: false,
            "max-image-preview": "standard",
            "max-video-preview": -1,
            "max-snippet": -1,
        },
        index: true,
    },
    icons: {
        icon: "./icon.png",
    },
    verification: {
        google: "google",
        other: {
            me: [site.email, site.siteUrl],
        },
    },
    assets: [`${site.siteUrl}/assets`],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={cn(
                    `relative scroll-smooth bg-background p-6 antialiased lg:h-screen lg:overflow-x-hidden`,
                    geistSans.className,
                )}
            >
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
