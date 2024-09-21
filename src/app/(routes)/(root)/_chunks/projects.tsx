import { Section } from "./section";
import { info } from "@/info";

export const Projects = () => {
    const data = info.projects;

    return <Section heading="projects" data={data} />;
};
