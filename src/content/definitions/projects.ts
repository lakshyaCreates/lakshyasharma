import { remarkCodeHike } from "@code-hike/mdx";
import { defineCollection } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

export const project = defineCollection({
    name: "projects",
    directory: "./projects",
    include: "**/*.mdx",
    schema: (z) => ({
        title: z.string(),
        description: z.string(),
        imageDark: z.string(),
        imageLight: z.string(),
        slug: z.string(),
        date: z.coerce.date(),
        published: z.boolean(),
        tags: z.array(z.string()),
        serial: z.number(),
        links: z.array(
            z.object({
                label: z.string(),
                url: z.string(),
            }),
        ),
    }),
    transform: async (project, ctx) => {
        const mdx = await compileMDX(ctx, project, {
            rehypePlugins: [rehypeSlug],
            remarkPlugins: [
                remarkGfm,
                [
                    remarkCodeHike,
                    {
                        showCopyButton: true,
                        autoImport: true,
                        lineNumbers: true,
                        filePath: true,
                        theme: "one-dark-pro",
                    },
                ],
            ],
        });

        return {
            ...project,
            content: {
                mdx,
                raw: project.content,
            },
            url: `/projects/${project.slug}`,
        };
    },
});
