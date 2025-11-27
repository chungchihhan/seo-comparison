import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link href="/" className="text-xl font-bold tracking-tighter text-white">
                    SEO<span className="text-primary">Vision</span>
                </Link>
                <div className="flex items-center gap-6">
                    <Link
                        href="/ssr"
                        className="text-sm font-medium text-muted-foreground transition-colors hover:text-white"
                    >
                        SSR Demo
                    </Link>
                    <Link
                        href="/csr"
                        className="text-sm font-medium text-muted-foreground transition-colors hover:text-white"
                    >
                        CSR Demo
                    </Link>
                    <Link
                        href="/compare"
                        className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20"
                    >
                        Compare
                    </Link>
                </div>
            </div>
        </nav>
    );
}
