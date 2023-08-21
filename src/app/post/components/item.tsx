import Link from "next/link";
import type { Post } from "contentlayer/generated";
import PublishTime from "../[slug]/components/header/publish-time";
import ReadingTime from "../[slug]/components/header/reading-time";
import PostTitle from "../[slug]/components/header/title";

const PostItem = ({ post }: { post: Post }) => {
  return (
    <li key={post.slug} className="w-full list-none py-4 lg:py-6 ">
      <Link
        href={`/post/${post.slug}`}
        className="group space-y-2 lg:space-y-4 "
      >
        <div className="flex items-center space-x-1 dark:text-gray-400">
          <PublishTime
            className="text-xs lg:text-sm"
            publishedAt={post.publishedAt}
          />
          <div>-</div>
          <ReadingTime readingTime={post.readingTime} />
        </div>
        <PostTitle
          className="font-bold transition-all ease-linear group-hover:underline group-hover:underline-offset-2"
          title={post.title}
          size="md"
          isGradient
        />
        <p className="text-sm dark:text-gray-400 md:text-base">
          {post.description}
        </p>
      </Link>
    </li>
  );
};

export default PostItem;
