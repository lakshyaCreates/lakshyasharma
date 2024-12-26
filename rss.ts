import { allBlogs } from "content-collections";
import { Feed } from "feed";
import fs from "fs";

async function generateRSSFeed() {
    const baseUrl = "https://lakshyasharma.dev";
    const creator = "Lakshya Sharma";

    const feed = new Feed({
        title: "Blogs | Lakshya Sharma",
        description:
            "Hey! I am Lakshya Sharma, and its my personal blog where I share my learnings, experiences, and thought regarding the full stack web dev",
        id: baseUrl,
        link: baseUrl,
        image: `${baseUrl}/assets/logo.png`,
        favicon: `${baseUrl}/assets/favicon.png`,
        feed: `${baseUrl}/rss.xml`,
        author: {
            name: creator,
            email: "lakshya.creates07@gmail.com",
            link: baseUrl,
        },
        language: "en-US",
        copyright: `All Rights Reserved ${new Date().getFullYear()}, ${creator}`,
        feedLinks: {
            rss2: `${baseUrl}/rss.xml`,
            json: `${baseUrl}/rss.json`,
            atom: `${baseUrl}/atom.xml`,
        },
    });

    feed.addCategory("Web Development");
    feed.addCategory("Next.js");

    allBlogs.map((blog) => {
        feed.addItem({
            title: blog.title,
            description: blog.description,
            link: `${baseUrl}${blog.url}`,
            date: new Date(blog.date),
            guid: blog.slug,
        });
    });

    fs.writeFileSync("./public/rss.xml", feed.rss2());
    fs.writeFileSync("./public/rss.json", feed.json1());
    fs.writeFileSync("./public/atom.xml", feed.atom1());
}

generateRSSFeed().catch((err) => console.error(err));
