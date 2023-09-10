import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

import PostTitle from "@/app/post/components/header/title";
import GradiantLink from "../gradiant-link";

const PublishSection = ({
  posts,
}: {
  posts: { title: string; slug: string }[];
}) => {
  return (
    <div className="mx-auto max-w-2xl lg:mt-14">
      <div className="my-4 w-full text-sm text-muted-foreground lg:text-lg">
        Latest Posts
      </div>
      <div className="flex flex-col justify-center space-y-2 lg:space-y-6">
        {posts.map((post) => (
          <Link
            href={`/post/${post.slug}`}
            key={post.slug}
            className="group inline-flex items-center justify-between decoration-primary/10 underline-offset-4 hover:underline"
          >
            <PostTitle
              className="text-left font-semibold text-primary/70 transition-all ease-linear group-hover:underline group-hover:underline-offset-2"
              title={post.title}
              size="sm"
              isGradient={false}
            />
            <ArrowTopRightIcon className="h-4 w-4 group-hover:text-primary" />
          </Link>
        ))}
      </div>
      <div className="mx-auto mt-8 flex justify-center lg:justify-start">
        <GradiantLink href="/post" isActive name="All posts" center />
      </div>
    </div>
  );
};

export default PublishSection;
