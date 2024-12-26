import { env } from "@/env/server";

export async function GET() {
    const rssRes = await fetch(`${env.BASE_URL}/rss.xml`);
    const rss = await rssRes.text();

    return new Response(rss, {
        headers: {
            "Content-Type": "application/xml",
        },
        status: 200,
        statusText: "ok",
    });
}
