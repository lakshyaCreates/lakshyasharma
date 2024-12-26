import { ArrowLeftIcon } from "lucide-react";

import Link from "next/link";

import "@code-hike/mdx/dist/index.css";
import { allBlogs } from "content-collections";

import { MDX } from "@/components/mdx";
import { StaticNoise } from "@/components/static-noise";
import { ThemeToggler } from "@/components/theme-toggler";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { Thumbnail } from "./thumbnail";

export const dynamicParams = false;

export async function generateStaticParams() {
    return allBlogs.map((blog) => ({
        slug: blog.slug,
    }));
}

export default async function BlogPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const slug = (await params).slug;

    const blog = allBlogs.find((blog) => blog.slug === slug);
    if (!blog) {
        return <div>Blog not found</div>;
    }

    return (
        <article className="relative mx-auto h-full w-full max-w-2xl">
            <StaticNoise
                opacity={0.04}
                className="pointer-events-none fixed left-0 top-0 z-[99999] h-full"
                draggable={false}
            />
            <div className="prose !h-full space-y-6 px-3 py-6 dark:prose-invert lg:px-0 lg:py-12">
                <div className="flex items-center justify-between">
                    <Button
                        asChild
                        size={"sm"}
                        variant={"ghost"}
                        className="relative lg:absolute lg:-left-44 lg:top-11 lg:inline-flex"
                    >
                        <Link href="/blogs">
                            <ArrowLeftIcon className="mr-2 h-4 w-4" />
                            See all blogs
                        </Link>
                    </Button>
                    <div className="flex items-center gap-x-2">
                        <div>
                            <span className="rounded border bg-accent px-1.5 py-1 text-xs">
                                {blog.date.toLocaleDateString("en-US", {
                                    month: "long",
                                    day: "numeric",
                                    year: "numeric",
                                })}
                            </span>
                        </div>
                        <ThemeToggler />
                    </div>
                </div>
                <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                    {blog.title}
                </h1>
                <Thumbnail
                    imageDark={blog.imageDark}
                    imageLight={blog.imageLight}
                />
                <div className="flex flex-wrap items-center gap-1">
                    {blog.tags.map((tag, idx) => (
                        <span
                            key={idx}
                            className="rounded bg-accent px-1.5 py-1 text-xs"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <p className="text-muted-foreground">{blog.description}</p>
                <Separator />
                <div className="pb-6">
                    <MDX content={blog.content.mdx} />
                </div>
                <Separator className="" />
                <p className="text-xs text-muted-foreground">
                    TODO: Add Read Next Posts
                </p>
                <div className="h-20"></div>
            </div>
        </article>
    );
}
