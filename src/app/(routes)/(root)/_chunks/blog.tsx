import { Section } from "./section";
import { info } from "@/info";

export const Blog = () => {
    const data = info.blog;

    return <Section heading="blog" data={data} />;
};
