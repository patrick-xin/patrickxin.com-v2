import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import remarkExternalLinks from "remark-external-links";
import remarkGfm from "remark-gfm";
import type { Pluggable } from "unified";

const mdxOptions = {
  remarkPlugins: [remarkExternalLinks, remarkGfm],
  rehypePlugins: [
    rehypeSlug,
    rehypeCodeTitles,
    [
      rehypePrism,
      {
        showLineNumbers: true,
      },
    ],
    [
      rehypeAutolinkHeadings,
      {
        behavior: "append",
      },
    ],
  ] as Pluggable[],
};

export default mdxOptions;
