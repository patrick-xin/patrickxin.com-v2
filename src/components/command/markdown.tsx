"use client";

import ReactMarkdown from "react-markdown";

import rehypePrism from "rehype-prism-plus";

const CustomOl = ({ ...props }) => {
  return (
    <ol
      className="list-inside list-decimal text-sm italic leading-loose dark:text-zinc-300"
      {...props}
    />
  );
};

const CustomALink = ({ href, ...props }: { href?: string }) => {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    <a
      className="text-primary underline underline-offset-2"
      {...props}
      href={href}
    />
  );
};

const MarkdownRenderer = ({ content }: { content: string }) => {
  // Custom rehype plugin to modify code blocks
  const addFileExtension = () => (tree: any) => {
    function visitNode(node: any) {
      if (
        node.type === "element" &&
        node.tagName === "pre" &&
        node.children[0]?.tagName === "code"
      ) {
        const codeNode = node.children[0];
        const className = codeNode.properties.className || [];
        const lang = className[0] || "";

        // Extract the file extension from the code block's language
        const fileExtension = lang.split("-")[1]; // Assumes language is like "language-file-extension"

        // Create a new div element for the file extension
        if (fileExtension) {
          const fileExtensionNode = {
            type: "element",
            tagName: "div",
            properties: {
              className: "rehype-code-title",
            },
            children: [
              {
                type: "text",
                value: `${fileExtension}`,
              },
            ],
          };

          // Insert the file extension node before the code block
          node.children.splice(0, 0, fileExtensionNode);
        }
      }

      if (node.children) {
        node.children.forEach(visitNode);
      }
    }

    if (tree && tree.children) {
      tree.children.forEach(visitNode);
    }

    return tree;
  };

  return (
    <div className="mx-auto my-8 w-full max-w-xl whitespace-pre-wrap text-sm leading-6">
      <ReactMarkdown
        rehypePlugins={[addFileExtension, [rehypePrism]]}
        components={{
          a: CustomALink,
          ol: CustomOl,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
