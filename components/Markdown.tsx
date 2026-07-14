"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

/**
 * Renders a Markdown string (the blog post body) into styled HTML.
 * Wrapped in a client component so react-markdown works cleanly with the
 * static export. Visual styling comes from the `.prose-content` parent.
 */
export default function Markdown({ children }: { children: string }) {
  return <ReactMarkdown remarkPlugins={[remarkGfm]}>{children}</ReactMarkdown>;
}
