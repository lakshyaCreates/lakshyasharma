import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Hero } from "@/features/frontend/components/hero";

export default function PortfolioLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="relative h-full w-full rounded-2xl border">
            <div className="flex h-full w-full flex-col divide-x-0 divide-y *:p-8 lg:flex-row lg:divide-x lg:divide-y-0">
                <div
                    id="hero"
                    className="relative h-full w-full max-w-full overflow-hidden lg:h-full lg:min-w-[480px] lg:max-w-xl lg:overflow-y-scroll"
                >
                    <Hero />
                </div>
                <div
                    id="main"
                    className="relative flex w-full max-w-full flex-col lg:h-full lg:overflow-y-scroll"
                >
                    {children}
                </div>
            </div>
        </main>
    );
}

const D = () => {
    return (
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam odio
            hic fugit, magni aliquid, mollitia ipsam, repudiandae doloremque
            assumenda dignissimos corporis quisquam debitis ut corrupti expedita
            ratione harum quod! Omnis repudiandae, animi veritatis at
            dignissimos inventore molestias, commodi nemo provident
            necessitatibus magni nostrum delectus enim, eos dicta velit?
            Mollitia, nesciunt! Ad fugit rerum accusamus enim aut voluptas quae,
            illo corrupti cumque impedit. Ullam quis eum dolore repellat
            delectus, ut aliquid minima deleniti voluptatibus quibusdam cumque
            amet, dolores voluptates asperiores doloremque tempore corrupti
            quidem accusantium mollitia. Saepe veritatis voluptate blanditiis
            dignissimos eligendi facilis repudiandae nemo, accusamus error
            dolore ipsa recusandae nulla.
        </p>
    );
};
