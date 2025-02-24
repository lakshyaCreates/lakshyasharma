import { site } from "@/lib/site";

export async function GET() {
    const rssRes = await fetch(`${site.siteUrl}/rss.xml`);
    const rss = await rssRes.text();

    return new Response(rss, {
        headers: {
            "Content-Type": "application/xml",
        },
        status: 200,
        statusText: "ok",
    });
}
