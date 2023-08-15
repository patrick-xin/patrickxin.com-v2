import { useMDXComponent } from "next-contentlayer/hooks";
import MDXComponents from "@/components/post/mdx-component";

const PostContent = ({ code }: { code: string }) => {
  const MDXContent = useMDXComponent(code);
  return (
    <article>
      <MDXContent components={MDXComponents} />
    </article>
  );
};

export default PostContent;
