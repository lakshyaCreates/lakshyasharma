import { Header } from "@/components/header";
import { StaticNoise } from "@/components/static-noise";
import { Separator } from "@/components/ui/separator";
import { Hero } from "@/features/frontend/components/hero";

import { AllBlogs } from "./all-blogs";

export default function Blog() {
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
                        <Hero />
                    </div>
                    <div
                        id="main"
                        className="relative flex w-full max-w-5xl flex-col overflow-x-hidden lg:h-full lg:overflow-y-scroll"
                    >
                        <Header />
                        <div className="px-1">
                            <Separator className="my-4 w-full" />
                        </div>
                        <AllBlogs />
                    </div>
                </div>
            </main>
        </>
    );
}
