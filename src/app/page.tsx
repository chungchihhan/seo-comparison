import Link from "next/link";
import { ArrowRight, Bot, Globe, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background p-4 text-center">
      <div className="container mx-auto max-w-4xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold tracking-tighter text-white sm:text-7xl">
            See What <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Google Bots</span> See
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Understand the impact of Rendering Strategies on SEO. Compare Server Side Rendering (SSR) vs Client Side Rendering (CSR) in real-time.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/compare"
            className="group flex h-12 items-center justify-center gap-2 rounded-full bg-white px-8 text-sm font-medium text-black transition-all hover:bg-white/90"
          >
            Start Comparing
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/ssr"
            className="flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            View Demo
          </Link>
        </div>

        <div className="grid gap-8 pt-16 sm:grid-cols-3">
          <div className="glass-panel rounded-2xl p-6 text-left">
            <Globe className="mb-4 h-8 w-8 text-primary" />
            <h3 className="mb-2 text-lg font-semibold text-white">SSR</h3>
            <p className="text-sm text-muted-foreground">
              Server Side Rendering delivers fully rendered HTML to the client, ensuring bots can read your content immediately.
            </p>
          </div>
          <div className="glass-panel rounded-2xl p-6 text-left">
            <Zap className="mb-4 h-8 w-8 text-accent" />
            <h3 className="mb-2 text-lg font-semibold text-white">CSR</h3>
            <p className="text-sm text-muted-foreground">
              Client Side Rendering relies on JavaScript to render content. Fast for users, but potentially invisible to bots.
            </p>
          </div>
          <div className="glass-panel rounded-2xl p-6 text-left">
            <Bot className="mb-4 h-8 w-8 text-blue-500" />
            <h3 className="mb-2 text-lg font-semibold text-white">Bot View</h3>
            <p className="text-sm text-muted-foreground">
              Visualize exactly what search engine crawlers see when they visit your website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
