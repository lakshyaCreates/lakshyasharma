import type { NextConfig } from "next";

import { createContentCollectionPlugin } from "@content-collections/next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
    /* config options here */
};

const withContentCollections = createContentCollectionPlugin({
    configPath: "./src/content/config.ts",
});

const withMDX = createMDX({});

export default withContentCollections(nextConfig);
