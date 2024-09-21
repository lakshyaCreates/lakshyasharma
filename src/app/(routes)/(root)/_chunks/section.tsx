import { Item } from "./item";

interface Props {
    heading: string;
    data: {
        title: string;
        text: string;
        url: string;
    }[];
}

export const Section = ({ heading, data }: Props) => {
    return (
        <div className="group flex flex-col gap-y-3">
            <h1 className="flex w-full items-center justify-start text-sm font-medium text-purple-700 transition-opacity duration-200 ease-in group-hover:opacity-100 dark:text-purple-400 md:justify-end md:opacity-0">
                {heading}
            </h1>
            <div className="flex flex-col gap-y-2.5">
                {data.map((item, index) => (
                    <Item key={index} {...item} />
                ))}
            </div>
        </div>
    );
};
