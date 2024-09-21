import { compileMDX } from "next-mdx-remote/rsc";
import { headers } from "next/headers";

import { promises as fs } from "fs";
import path from "path";

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

export function getPath() {
    const headersList = headers();
    const path = headersList.get("x-current-path");

    return path;
}

/**
 * Returns an object with all the frontmatter data for all the files in directory.
 *
 * @param directory - a string containing the directory path.
 */
export async function getFilesFrontmatter(
    // filenames: string[],
    type: "blog" | "projects",
) {
    const directory =
        type === "blog" ? "src/content/blog" : "src/content/projects";

    const filenames = await fs.readdir(path.join(process.cwd(), directory));

    const files = await Promise.all(
        filenames.map(async (filename) => {
            const content = await fs.readFile(
                path.join(process.cwd(), directory, filename),
                "utf-8",
            );

            const data = await getMdx(content);

            return {
                filename,
                slug: filename.replace(".mdx", ""),
                ...data.frontmatter,
            };
        }),
    );

    return files;
}

/**
 * Returns an object with all the data of the file.
 *
 * Takes the path from the headers and returns the content of the file.
 */
export async function getFile() {
    const url = await getPath();

    const type = url?.split("/")[1];
    const filename = url?.split("/")[2] + ".mdx";
    const directory =
        (type === "blog" && "src/content/blog") ||
        (type === "projects" && "src/content/projects") ||
        "";

    const file = await fs.readFile(
        path.join(process.cwd(), directory, filename!),
        "utf-8",
    );
    const data = await getMdx(file);

    return data;
}
