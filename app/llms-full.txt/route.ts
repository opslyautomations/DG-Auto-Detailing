import { buildLlmsFullTxt } from "@/lib/llms";

// Built once at build time from the site's own data.
export const dynamic = "force-static";

export function GET() {
  return new Response(buildLlmsFullTxt(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
