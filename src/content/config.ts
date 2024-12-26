import { defineConfig } from "@content-collections/core";

import { blogs } from "./definitions/blog";
import { project } from "./definitions/projects";
import { timeline } from "./definitions/timeline";

export default defineConfig({
    collections: [blogs, timeline, project],
});
