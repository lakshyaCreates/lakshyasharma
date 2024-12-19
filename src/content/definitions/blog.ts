import { remarkCodeHike } from "@code-hike/mdx";
import { defineCollection } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

export const blog = defineCollection({
    name: "blog",
    directory: "./blog",
    include: "**/*.mdx",
    schema: (z) => ({
        title: z.string(),
        description: z.string(),
        slug: z.string(),
        status: z.enum(["draft", "published"]),
    }),
    transform: async (blog, ctx) => {
        const mdx = await compileMDX(ctx, blog, {
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
            ...blog,
            content: {
                mdx,
                raw: blog.content,
            },
            url: `/blog/${blog.slug}`,
        };
    },
});
