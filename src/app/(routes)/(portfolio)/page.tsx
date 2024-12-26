import { ProjectItem } from "../projects/project-item";
import { allProjects } from "content-collections";

export default function HomePage() {
    return (
        <div className="flex flex-col gap-y-4">
            {allProjects.map((project, idx) => (
                <ProjectItem key={idx} {...project} />
            ))}
        </div>
    );
}
