"use client";

import { useEffect, useState } from "react";
import DataCard from "@/components/DataCard";
import { Zap, Loader2 } from "lucide-react";

export default function CSRPage() {
    const [posts, setPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Simulate delay
                await new Promise((resolve) => setTimeout(resolve, 1500));
                const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
                const data = await res.json();
                setPosts(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container mx-auto min-h-screen px-4 py-8">
            <div className="mb-12 text-center">
                <div className="mb-4 inline-flex items-center justify-center rounded-full bg-pink-500/10 p-3">
                    <Zap className="h-8 w-8 text-pink-500" />
                </div>
                <h1 className="mb-4 text-4xl font-bold text-white">Client Side Rendering</h1>
                <p className="mx-auto max-w-2xl text-muted-foreground">
                    This content is rendered in your browser. View the page source (Cmd+Option+U) - you will NOT see the post content in the initial HTML, only the loading state or empty containers.
                </p>
            </div>

            {loading ? (
                <div className="flex h-64 items-center justify-center">
                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
            ) : (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post: any) => (
                        <DataCard
                            key={post.id}
                            id={post.id}
                            title={post.title}
                            body={post.body}
                            source="CSR"
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
