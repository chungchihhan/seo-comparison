import DataCard from "@/components/DataCard";
import { Globe } from "lucide-react";

async function getData() {
    // Simulate delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6', {
        cache: 'no-store'
    });

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export default async function SSRPage() {
    const posts = await getData();

    return (
        <div className="container mx-auto min-h-screen px-4 py-8">
            <div className="mb-12 text-center">
                <div className="mb-4 inline-flex items-center justify-center rounded-full bg-blue-500/10 p-3">
                    <Globe className="h-8 w-8 text-blue-500" />
                </div>
                <h1 className="mb-4 text-4xl font-bold text-white">Server Side Rendering</h1>
                <p className="mx-auto max-w-2xl text-muted-foreground">
                    This content was rendered on the server. View the page source (Cmd+Option+U) and search for "JSONPlaceholder" - you will see the data is present in the initial HTML response.
                </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((post: any) => (
                    <DataCard
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        body={post.body}
                        source="SSR"
                    />
                ))}
            </div>
        </div>
    );
}
