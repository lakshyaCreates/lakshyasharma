import { allProjects } from "content-collections";

import { StaticNoise } from "@/components/static-noise";

import { Content } from "./content";
import { Frontmatter } from "./frontmatter";

export const dynamicParams = false;

export async function generateStaticParams() {
    return allProjects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage({
    params,
}: {
    params: { slug: string };
}) {
    const slug = (await params).slug;

    const project = allProjects.find((project) => project.slug === slug);
    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <>
            <StaticNoise
                opacity={0.04}
                className="pointer-events-none fixed left-0 top-0 z-[99999] h-full"
                draggable={false}
            />
            <main className="relative size-full rounded-2xl border">
                <div className="flex size-full flex-col divide-x-0 divide-y *:p-8 lg:flex-row lg:divide-x lg:divide-y-0">
                    <div
                        id="hero"
                        className="relative size-full max-w-full overflow-hidden lg:h-full lg:min-w-[480px] lg:max-w-xl lg:overflow-y-scroll"
                    >
                        <Frontmatter {...project} />
                    </div>
                    <div
                        id="main"
                        className="relative flex w-full max-w-5xl flex-col overflow-x-hidden lg:h-full lg:overflow-y-scroll"
                    >
                        <Content {...project} />
                    </div>
                </div>
            </main>
        </>
    );
}
