import { BsArrowLeft } from "react-icons/bs";

import Link from "next/link";

import { cn } from "@/lib/utils";

export const Item = ({
    title,
    url,
    text,
    underDev,
}: {
    title: string;
    url: string;
    text: string;
    underDev?: boolean;
}) => {
    return (
        <div className="group/main flex w-full flex-col items-start justify-center gap-y-0.5 rounded-lg border bg-gradient-to-tl from-accent/20 to-accent/40 p-3 transition-colors duration-300 hover:border-purple-500 dark:hover:border-purple-400 md:flex-row md:items-center md:justify-between md:gap-y-0 md:rounded-none md:border-x-0 md:border-b-2 md:border-t-0 md:from-transparent md:to-transparent md:px-0 md:pb-1 md:pt-0">
            <p className="font-medium tracking-tight text-foreground/80 group-hover/main:text-foreground">
                <Link
                    href={url}
                    className="group/a relative flex items-center justify-center gap-x-2"
                >
                    <span>{title}</span>
                    <span
                        className={cn(
                            "rounded-lg bg-gradient-to-tr from-accent/80 to-accent px-1.5 py-0.5 text-xs tracking-wide",
                            underDev ? "block" : "hidden",
                        )}
                    >
                        under dev...
                    </span>
                    <BsArrowLeft className="right-0 hidden h-4 w-0 rotate-0 opacity-0 transition-all duration-200 ease-in group-hover/a:w-4 group-hover/a:rotate-180 group-hover/a:opacity-100 md:block" />
                </Link>
            </p>
            <Link
                href={url}
                className="group/title relative flex items-center justify-center text-sm font-medium tracking-wide text-muted-foreground/80 group-hover/main:text-foreground/80"
            >
                <span>{text}</span>
                <BsArrowLeft className="right-0 h-4 w-0 rotate-0 opacity-0 transition-all duration-200 ease-in group-hover/title:ml-2 group-hover/title:w-4 group-hover/title:rotate-180 group-hover/title:opacity-100 md:rotate-180 md:group-hover/title:rotate-0" />
            </Link>
        </div>
    );
};
