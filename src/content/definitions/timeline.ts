import { remarkCodeHike } from "@code-hike/mdx";
import { defineCollection } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

export const timeline = defineCollection({
    name: "timeline",
    directory: "./timeline",
    include: "**/*.mdx",
    schema: (z) => ({
        title: z.string(),
        status: z.enum(["draft", "published"]),
    }),
    transform: async (timeline, ctx) => {
        const mdx = await compileMDX(ctx, timeline, {
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
            ...timeline,
            content: {
                mdx,
                raw: timeline.content,
            },
        };
    },
});
