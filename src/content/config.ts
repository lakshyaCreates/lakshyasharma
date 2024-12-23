import { defineConfig } from "@content-collections/core";

import { blog } from "./definitions/blog";
import { timeline } from "./definitions/timeline";

export default defineConfig({
    collections: [blog, timeline],
});
