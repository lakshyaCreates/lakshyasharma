import Link from "next/link";

import { Companies, Projects, Social } from "./_chunks";
import { Blog } from "./_chunks/blog";
import { info } from "@/info";

export default function RootPage() {
    const data = info.about;
    const skills = info.skills;

    return (
        <div className="flex flex-col space-y-4 py-20">
            <h2 className="text-4xl font-bold tracking-tight text-foreground/80">
                {data.heading}
            </h2>
            <p className="text-lg font-medium leading-snug tracking-tight text-muted-foreground">
                {data.subHeading}
            </p>
            <div className="space-y-2 py-6">
                <p className="text-sm text-foreground/80">
                    Currently playing around with,{" "}
                </p>
                <div className="flex flex-wrap gap-1">
                    {skills.map((skill, index) => (
                        <Link
                            href={skill.url}
                            key={index}
                            className="rounded-lg border border-border bg-gradient-to-tr from-accent/50 to-accent/90 px-1.5 py-0.5 text-xs font-medium tracking-wide text-muted-foreground transition-all duration-200 ease-in hover:scale-[1.02] hover:text-foreground/80"
                        >
                            {skill.title}
                        </Link>
                    ))}
                </div>
            </div>
            <div className="space-y-8 pt-2">
                <Companies />
                <Projects />
                <Blog />
                <Social />
            </div>
            <div className="pt-20 md:pt-40">
                <p className="text-sm text-muted-foreground">
                    &copy; Lakshya Sharma, 2024
                </p>
            </div>
        </div>
    );
}
