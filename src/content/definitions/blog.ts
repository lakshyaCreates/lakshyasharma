import { defineCollection } from "@content-collections/core";

export const blog = defineCollection({
    name: "blog",
    directory: "./blog",
    include: "**/*.mdx",
    schema: (z) => ({
        title: z.string(),
        description: z.string(),
        slug: z.string(),
    }),
});
