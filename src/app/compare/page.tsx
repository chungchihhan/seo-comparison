"use client";

import { useState } from "react";
import { fetchHtml } from "./actions";
import { Search, Bot, User, ArrowRight, Loader2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ComparePage() {
    const [url, setUrl] = useState("");
    const [html, setHtml] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [analyzed, setAnalyzed] = useState(false);

    const handleAnalyze = async (targetUrl: string) => {
        setLoading(true);
        setError("");
        setAnalyzed(false);

        // Ensure URL has protocol
        let finalUrl = targetUrl;
        if (!targetUrl.startsWith("http")) {
            finalUrl = `http://${targetUrl}`;
        }

        // If local, use current window origin if not specified
        if (targetUrl.startsWith("/")) {
            finalUrl = `${window.location.origin}${targetUrl}`;
        }

        setUrl(finalUrl);

        try {
            const result = await fetchHtml(finalUrl);
            if (result.error) {
                setError(result.error);
            } else {
                setHtml(result.html || "");
                setAnalyzed(true);
            }
        } catch (err) {
            setError("An unexpected error occurred.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto min-h-screen px-4 py-8">
            <div className="mb-8 text-center">
                <h1 className="mb-4 text-3xl font-bold text-white">SEO Comparison Tool</h1>
                <p className="text-muted-foreground">
                    Enter a URL or select a demo to see the difference between what users see and what bots scrape.
                </p>
            </div>

            <div className="mx-auto mb-8 max-w-2xl">
                <div className="flex gap-2">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Enter URL (e.g., https://example.com) or use buttons below"
                            className="w-full rounded-lg border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-white placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleAnalyze(url)}
                        />
                    </div>
                    <button
                        onClick={() => handleAnalyze(url)}
                        disabled={loading || !url}
                        className="flex items-center gap-2 rounded-lg bg-primary px-6 font-medium text-white transition-colors hover:bg-primary/90 disabled:opacity-50"
                    >
                        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Analyze"}
                    </button>
                </div>

                <div className="mt-4 flex justify-center gap-4">
                    <button
                        onClick={() => handleAnalyze("/ssr")}
                        className="text-sm text-muted-foreground hover:text-white hover:underline"
                    >
                        Test SSR Demo
                    </button>
                    <button
                        onClick={() => handleAnalyze("/csr")}
                        className="text-sm text-muted-foreground hover:text-white hover:underline"
                    >
                        Test CSR Demo
                    </button>
                </div>

                {error && (
                    <div className="mt-4 flex items-center gap-2 rounded-lg border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-400">
                        <AlertCircle className="h-4 w-4" />
                        {error}
                    </div>
                )}
            </div>

            {analyzed && (
                <div className="grid gap-8 lg:grid-cols-2">
                    {/* User View */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-lg font-semibold text-white">
                            <User className="h-5 w-5 text-blue-400" />
                            <h2>User View (Browser Rendered)</h2>
                        </div>
                        <div className="glass-panel h-[600px] w-full overflow-hidden rounded-xl bg-white">
                            <iframe
                                src={url}
                                className="h-full w-full border-0"
                                title="User View"
                                sandbox="allow-scripts allow-same-origin"
                            />
                        </div>
                    </div>

                    {/* Bot View */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-lg font-semibold text-white">
                            <Bot className="h-5 w-5 text-green-400" />
                            <h2>Bot View (Raw HTML)</h2>
                        </div>
                        <div className="glass-panel relative h-[600px] overflow-hidden rounded-xl bg-[#1e1e1e]">
                            <div className="absolute inset-0 overflow-auto p-4">
                                <pre className="text-xs font-mono text-gray-300 whitespace-pre-wrap break-all">
                                    {html}
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
