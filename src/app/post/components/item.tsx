import Link from "next/link";
import type { Post } from "contentlayer/generated";
import { cn } from "@/lib/utils";
import PublishTime from "./header/publish-time";
import PostTitle from "./header/title";
import PostThumbnail from "./header/thumbnail";

type Props = {
  post: Pick<
    Post,
    | "title"
    | "description"
    | "slug"
    | "thumbnail"
    | "publishedAt"
    | "readingTime"
  >;
  noBorder: boolean;
};

const PostItem = async ({ post, noBorder }: Props) => {
  return (
    <div
      className={cn(
        "w-full py-4 lg:py-6",
        noBorder && "border-none",
        !noBorder && "border-b border-border/20",
      )}
    >
      <Link href={`/post/${post.slug}`} className="group inline-block">
        <PublishTime
          className="text-xs dark:text-gray-400 lg:text-sm"
          publishedAt={post.publishedAt}
        />

        <div className="mt-2 flex w-full justify-center">
          <PostThumbnail src={post.thumbnail.url} hasInfo={false} size="sm" />
        </div>

        <div className="mt-4 space-y-4">
          <PostTitle
            className="font-bold transition-all ease-linear group-hover:underline group-hover:underline-offset-2"
            title={post.title}
            size="md"
            isGradient={false}
          />
          <p className="text-sm dark:text-gray-400 md:text-base lg:pb-4">
            {post.description}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default PostItem;
