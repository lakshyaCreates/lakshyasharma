import { compileMDX } from "next-mdx-remote/rsc";

import { Button } from "@/components/ui/button";

import { Frontmatter } from "./mdx";

const components = {
    Button,
};

export const getMdx = async (source: string) => {
    const data = await compileMDX<Frontmatter>({
        source,
        options: {
            parseFrontmatter: true,
        },
        components,
    });

    return { ...data };
};
