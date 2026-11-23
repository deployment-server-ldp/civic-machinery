import { buildLlmsFullTxt } from "@/lib/llms";

// Generated at build time from the site's data (see lib/llms.ts).
export const dynamic = "force-static";

export function GET() {
  return new Response(buildLlmsFullTxt(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
