import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import { GoogleAnalytics } from "@next/third-parties/google";

import { Header } from "@/components/Header/header";

import "./globals.css";
import { info } from "@/info";
import { Providers } from "@/providers";

const manrope = Manrope({
    display: "swap",
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800"],
    variable: "--font-manrope",
});

export const metadata: Metadata = {
    title: {
        template: `%s | ${info.about.name}`,
        default: info.about.name,
    },
    description: info.website.description,
    generator: "Next.js",
    applicationName: info.about.name,
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
    openGraph: {},
    robots: {
        index: false,
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

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head></head>
            <body
                className={`overflow-x-hidden antialiased ${manrope.className}`}
            >
                <Providers>
                    <main className="max-w-screen px-[8vw] pt-20 sm:px-[12vw] md:px-[20vw] lg:px-[26vw]">
                        <Header />
                        {children}
                    </main>
                </Providers>
                {/* TODO! Add GA-ID to env after v1 production is ready */}
                <GoogleAnalytics gaId="G-1YF9LGMS8C" />
            </body>
        </html>
    );
}
