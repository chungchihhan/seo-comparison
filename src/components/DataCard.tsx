import { FileText, Clock, Database } from "lucide-react";

interface DataCardProps {
    title: string;
    body: string;
    id: number;
    source: "SSR" | "CSR";
}

export default function DataCard({ title, body, id, source }: DataCardProps) {
    return (
        <div className="glass-panel group relative overflow-hidden rounded-xl p-6 transition-all hover:bg-white/10">
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl transition-all group-hover:from-primary/30 group-hover:to-accent/30" />

            <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                    <span className={`rounded-full px-3 py-1 text-xs font-medium ${source === "SSR" ? "bg-blue-500/20 text-blue-300" : "bg-pink-500/20 text-pink-300"}`}>
                        {source} Data
                    </span>
                    <span className="text-xs text-muted-foreground">ID: {id}</span>
                </div>

                <h3 className="line-clamp-1 text-lg font-semibold text-white" title={title}>
                    {title}
                </h3>

                <p className="line-clamp-3 text-sm text-muted-foreground">
                    {body}
                </p>

                <div className="flex items-center gap-4 pt-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                        <Database className="h-3 w-3" />
                        <span>JSONPlaceholder</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{new Date().toLocaleTimeString()}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
