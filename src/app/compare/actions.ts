"use server";

export async function fetchHtml(url: string) {
    try {
        const res = await fetch(url, {
            cache: "no-store",
            headers: {
                "User-Agent": "Googlebot/2.1 (+http://www.google.com/bot.html)",
            },
        });

        if (!res.ok) {
            return { error: `Failed to fetch: ${res.status} ${res.statusText}` };
        }

        const html = await res.text();
        return { html };
    } catch (error) {
        return { error: "Failed to fetch URL. Make sure it is accessible." };
    }
}
