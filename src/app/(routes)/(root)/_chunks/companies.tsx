import { Section } from "./section";
import { info } from "@/info";

export const Companies = () => {
    const data = info.companies;

    return <Section heading="companies" data={data} />;
};
