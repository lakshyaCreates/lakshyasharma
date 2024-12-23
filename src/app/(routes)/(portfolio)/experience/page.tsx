import {
    ExperienceItem,
    ExperienceItemProps,
    LocationTag,
    TimeTag,
} from "@/features/frontend/components/experience-item";

export default function ExperiencePage() {
    return (
        <div className="flex flex-col gap-y-8">
            {data.map((item, idx) => (
                <ExperienceItem key={idx} {...item} />
            ))}
        </div>
    );
}

const data: ExperienceItemProps[] = [
    {
        title: "Mighty Suite Productions",
        designation: "Founder",
        duration: "October 2023 - Present",
        locationTag: LocationTag["Hybrid"],
        timeTag: TimeTag["Full Time"],
        content: [
            "Developed the landing page of Leapflow",
            "Authentication flow & DB schema design",
            "Layout development for the web faced product",
        ],
    },
    {
        title: "Swa Sarjan Foundation",
        designation: "Graphics Production Head",
        duration: "October 2023 - Present",
        locationTag: LocationTag["Hybrid"],
        timeTag: TimeTag["Part Time"],
        content: [
            "Developed world's first sonification device for blockchain transactions",
            "Developed a web faced product for the device",
            "Developed the firmware for the device",
            "Developed a mobile app for configruing the device",
        ],
    },
];
