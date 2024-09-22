"use client";

import { BsLamp } from "react-icons/bs";

import { useTheme } from "next-themes";
import Link from "next/link";

import { Button } from "../ui/button";

import { info } from "@/info";

export const Header = () => {
    const { setTheme, theme } = useTheme();
    const data = info.about;

    return (
        <header className="border-b pb-2">
            <div className="flex w-full items-center justify-between">
                <Link
                    href={"/"}
                    className="pointer-events-none text-3xl font-bold leading-[0.98] tracking-tight text-foreground/80"
                >
                    {data.name}
                </Link>
                <div className="flex items-center gap-x-4">
                    <Link
                        href={data.github.url}
                        target="_blank"
                        className="font-semibold text-muted-foreground transition-colors duration-200 ease-in hover:text-foreground"
                    >
                        {data.github.title}
                    </Link>
                    <Button
                        variant={"outline"}
                        size={"icon"}
                        onClick={() =>
                            setTheme(theme === "light" ? "dark" : "light")
                        }
                        className="relative overflow-hidden"
                    >
                        <BsLamp className="size-5" />
                    </Button>
                </div>
            </div>
        </header>
    );
};
