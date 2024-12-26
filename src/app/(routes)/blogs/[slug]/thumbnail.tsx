"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const Thumbnail = ({
    imageDark,
    imageLight,
}: {
    imageDark: string;
    imageLight: string;
}) => {
    const pathname = usePathname();
    const slug = pathname.split("/")[1];
    const { theme } = useTheme();

    return (
        <Image
            width={1280}
            height={800}
            quality={100}
            src={theme === "dark" ? imageDark : imageLight}
            alt={`Blog Thumbnail - ${slug}`}
            className="aspect-[8/5] min-w-full max-w-full rounded-lg object-cover object-center"
        />
    );
};
