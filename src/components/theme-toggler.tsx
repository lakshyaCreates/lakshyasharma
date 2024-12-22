"use client";

import { Expand } from "@theme-toggles/react";
import "@theme-toggles/react/css/Expand.css";
import { useEffect, useState } from "react";

import { useTheme } from "next-themes";

import { Button } from "./ui/button";

export const ThemeToggler = () => {
    const [toggle, setToggled] = useState(false);
    const { theme, setTheme } = useTheme();

    const switchTheme = () => {
        switch (theme) {
            case "light":
                setTheme("dark");
                break;
            case "dark":
                setTheme("light");
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        if (theme === "light") setToggled(false);
        else setToggled(true);
    });

    const toggleTheme = () => {
        //@ts-ignore
        if (!document.startViewTransition) switchTheme();
        console.log("switching theme");

        //@ts-ignore
        document.startViewTransition(switchTheme);
    };

    return (
        <Button
            asChild
            size={"icon"}
            className="rounded-full"
            variant={"ghost"}
        >
            {/* @ts-ignore  */}
            <Expand
                duration={750}
                onToggle={toggleTheme}
                className=""
                toggle={setToggled}
                toggled={toggle}
            />
        </Button>
    );
};
