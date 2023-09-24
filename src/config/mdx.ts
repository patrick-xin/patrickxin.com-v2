import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeSlug from "rehype-slug";
import remarkExternalLinks from "remark-external-links";
import remarkGfm from "remark-gfm";
import type { Pluggable } from "unified";
import { visit } from "unist-util-visit";
import rehypePrism from "rehype-prism-plus";

const mdxOptions = {
  remarkPlugins: [remarkExternalLinks, remarkGfm],
  rehypePlugins: [
    () => (tree) => {
      visit(tree, (node) => {
        if (node?.type === "element" && node?.tagName === "pre") {
          const [codeEl] = node.children;

          if (codeEl.tagName !== "code") return;

          node.raw = codeEl.children?.[0].value;
        }
      });
    },
    rehypeSlug,
    rehypeCodeTitles,
    [rehypePrism, { ignoreMissing: true, showLineNumbers: true }],
    () => (tree) => {
      visit(tree, (node) => {
        if (node?.type === "element" && node?.tagName === "pre") {
          for (const child of node.children) {
            child.properties.raw = node.raw;
          }
        }
      });
    },
    [
      rehypeAutolinkHeadings,
      {
        behavior: "append",
      },
    ],
  ] as Pluggable[],
};

export default mdxOptions;
