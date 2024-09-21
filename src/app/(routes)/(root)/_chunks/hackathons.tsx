import { Section } from "./section";
import { info } from "@/info";

export const Hackathons = () => {
    const data = info.hackathons;

    return <Section heading="hackathons" data={data} />;
};
