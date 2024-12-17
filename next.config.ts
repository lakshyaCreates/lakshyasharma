import type { NextConfig } from "next";

import { createContentCollectionPlugin } from "@content-collections/next";

const nextConfig: NextConfig = {
    /* config options here */
};

const withContentCollections = createContentCollectionPlugin({
    configPath: "./src/content/config.ts",
});

export default withContentCollections(nextConfig);
