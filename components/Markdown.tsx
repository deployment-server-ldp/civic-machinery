"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

/**
 * Renders the post body into styled HTML. Supports both Markdown and inline
 * HTML (rehype-raw) so pasted comparison tables and other HTML render as-is.
 * Content is authored only by the site owner via /admin, so raw HTML is safe.
 * Visual styling comes from the `.prose-content` parent.
 */
export default function Markdown({ children }: { children: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        // Wrap tables so wide comparison tables scroll on small screens.
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        table: ({ node, ...props }) => (
          <div className="prose-table-wrap">
            <table {...props} />
          </div>
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  );
}
