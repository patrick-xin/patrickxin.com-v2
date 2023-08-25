import Link from "next/link";
import type { Post } from "contentlayer/generated";
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
};

const PostItem = async ({ post }: Props) => {
  return (
    <div className="w-full border-b py-4 dark:border-white/10 lg:py-6">
      <Link href={`/post/${post.slug}`} className="group inline-block">
        <PublishTime
          className="text-xs dark:text-gray-400 lg:text-sm"
          publishedAt={post.publishedAt}
        />

        <div className="mt-2 flex w-full justify-center">
          <PostThumbnail src={post.thumbnail.url} hasInfo={false} />
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
