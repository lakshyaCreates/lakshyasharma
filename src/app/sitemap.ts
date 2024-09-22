import type { MetadataRoute } from "next";

const website = "https://lakshyasharma.dev";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: `${website}`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${website}/blog`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${website}/projects`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.6,
        },
    ];
}
