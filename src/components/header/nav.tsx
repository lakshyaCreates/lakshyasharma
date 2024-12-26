"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const dataButtons = [
    { label: "Projects", href: "/projects" },
    { label: "Experience", href: "/experience" },
    { label: "Timeline", href: "/timeline" },
    { label: "Blog", href: "/blogs" },
];
export function Nav() {
    const pathname = usePathname();
    const [elementFocused, setElementFocused] = useState<number>(0);

    useEffect(() => {
        // Set the focused element based on the current path
        const currentPath = `${pathname || ""}`; // Get the current path from params
        const activeIndex = dataButtons.findIndex(
            (button) => button.href === currentPath,
        );
        if (activeIndex !== -1) {
            setElementFocused(activeIndex);
        }
    }, [pathname, elementFocused]);

    const handleOnClickButton = (index: number) => {
        setElementFocused(index);
    };
    return (
        <nav className="flex flex-row flex-wrap">
            {dataButtons.map((button, index) => (
                <button
                    className={cn(
                        "relative inline-flex w-fit whitespace-nowrap rounded px-2 py-1 font-medium transition-colors",
                        "text-sm text-muted-foreground hover:text-accent-foreground",
                        elementFocused === index && "text-accent-foreground",
                    )}
                    key={button.label}
                    onClick={() => handleOnClickButton(index)}
                    type="button"
                >
                    <Link href={button.href}>{button.label}</Link>
                    <AnimatePresence>
                        {elementFocused === index && (
                            <motion.div
                                animate={{ opacity: 1, scale: 1 }}
                                className={cn(
                                    "absolute bottom-0 left-0 right-0 top-0 -z-10 rounded-md",
                                    "bg-accent",
                                )}
                                exit={{ opacity: 0, scale: 0.9 }}
                                initial={{ opacity: 0, scale: 0.95 }}
                                layout={true}
                                layoutId="focused-element"
                                transition={{
                                    duration: 0.3,
                                    ease: "easeInOut",
                                }}
                            />
                        )}
                    </AnimatePresence>
                </button>
            ))}
        </nav>
    );
}
