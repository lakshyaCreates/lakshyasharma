import { defineCollection } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";

export const blog = defineCollection({
    name: "blog",
    directory: "./blog",
    include: "**/*.mdx",
    schema: (z) => ({
        title: z.string(),
        description: z.string(),
        slug: z.string(),
    }),
    transform: async (document, context) => {
        const body = await compileMDX(context, document);
        return {
            ...document,
            body,
        };
    },
});
