import { remarkCodeHike } from "@code-hike/mdx";
import { defineCollection } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

export const blogs = defineCollection({
    name: "blogs",
    directory: "./blogs",
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
            url: `/blogs/${blog.slug}`,
        };
    },
});
