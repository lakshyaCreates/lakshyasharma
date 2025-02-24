import { Project } from "content-collections";

import { MDX } from "@/components/mdx";

export const Content = ({ content }: Project) => {
    return (
        <div className="prose size-full text-justify dark:prose-invert">
            <MDX content={content.mdx} />
        </div>
    );
};
