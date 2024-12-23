"use client";

import { MDXContent } from "@content-collections/mdx/react";

import Link from "next/link";

import { LinkPreview } from "@/components/aceternity/link-preview";
import { Button } from "@/components/ui/button";

import { Highlight } from "./highlight";

export const MDX = ({ content }: { content: string }) => {
    return (
        <MDXContent
            code={content}
            components={{ LinkPreview, Link, Button, Highlight }}
        />
    );
};
