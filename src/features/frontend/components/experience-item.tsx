export enum TimeTag {
    "Full Time",
    "Part Time",
    "Contract",
}

export enum LocationTag {
    "Remote",
    "On-Site",
    "Hybrid",
}

export interface ExperienceItemProps {
    title: string;
    timeTag: TimeTag;
    locationTag: LocationTag;
    duration: string;
    designation: string;
    content: string[];
}

export const ExperienceItem = ({
    title,
    timeTag,
    locationTag,
    duration,
    designation,
    content,
}: ExperienceItemProps) => {
    return (
        <div>
            <div className="flex items-center justify-between gap-6">
                <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-xl font-bold tracking-tight">
                        {title}
                    </h3>
                    <span className="rounded border bg-accent px-1.5 py-1 text-xs">
                        {TimeTag[timeTag]}
                    </span>
                    <span className="rounded border bg-accent px-1.5 py-1 text-xs">
                        {LocationTag[locationTag]}
                    </span>
                </div>
                <p className="text-right text-sm font-medium text-muted-foreground">
                    {duration}
                </p>
            </div>
            <p className="font-medium text-muted-foreground">{designation}</p>
            <ul className="ml-1 list-inside list-disc">
                {content.map((item, idx) => (
                    <li
                        key={idx}
                        className="list-item text-sm text-muted-foreground"
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};
