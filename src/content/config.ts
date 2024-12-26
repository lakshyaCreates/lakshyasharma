import { defineConfig } from "@content-collections/core";

import { blog } from "./definitions/blog";
import { project } from "./definitions/projects";
import { timeline } from "./definitions/timeline";

export default defineConfig({
    collections: [blog, timeline, project],
});
