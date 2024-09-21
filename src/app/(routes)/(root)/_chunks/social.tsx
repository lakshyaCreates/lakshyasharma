import { Section } from "./section";
import { info } from "@/info";

export const Social = () => {
    const data = info.socials;

    return <Section heading="social" data={data} />;
};
