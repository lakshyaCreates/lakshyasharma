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
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-foreground/80">
                        {data.name}
                    </h1>
                </div>
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
