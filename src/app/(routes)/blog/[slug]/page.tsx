import { getFile } from "@/lib/utils";

export default async function Blog() {
    const data = await getFile();

    return <div>{data.content}</div>;
}
