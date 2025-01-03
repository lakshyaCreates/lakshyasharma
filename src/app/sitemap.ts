import type { MetadataRoute } from "next";

import { allBlogs, allProjects } from "content-collections";

import { site } from "@/lib/site";

const blogsMap = allBlogs.map(
    (blog): MetadataRoute.Sitemap => [
        {
            url: `${site.siteUrl}/blogs/${blog.slug}`,
            lastModified: new Date(blog.date),
            changeFrequency: "monthly",
            priority: 0.7,
        },
    ],
);

const projectsMap = allProjects.map(
    (project): MetadataRoute.Sitemap => [
        {
            url: `${site.siteUrl}/projects/${project.slug}`,
            lastModified: new Date(project.date),
            changeFrequency: "monthly",
            priority: 0.7,
        },
    ],
);

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: `${site.siteUrl}`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${site.siteUrl}/blogs`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${site.siteUrl}/timeline`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.8,
        },
        {
            url: `${site.siteUrl}/experience`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.4,
        },
        ...blogsMap.flat(),
        ...projectsMap.flat(),
    ];
}
