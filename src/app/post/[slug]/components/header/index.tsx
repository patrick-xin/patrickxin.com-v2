import type { Post } from "contentlayer/generated";

import GradiantLink from "@/components/gradiant-link";
import Author from "./author";
import Avatar from "./avatar";
import Description from "./description";
import PublishTime from "./publish-time";
import ReadingTime from "./reading-time";
import PostTitle from "./title";
import PostStats from "../status";

type PostHeaderProps = Pick<
  Post,
  | "description"
  | "publishedAt"
  | "title"
  | "readingTime"
  | "thumbnail"
  | "slug"
  | "category"
>;

const PostHeader = ({
  description,
  publishedAt,
  readingTime,
  title,
  slug,
  category,
}: PostHeaderProps) => {
  return (
    <header className="lg:py-12">
      <GradiantLink
        isUppercase
        name={category}
        href={`/post/category/${category}`}
        isActive
      />
      <PostTitle title={title} isGradient />
      <div className="flex items-center justify-between md:my-4 lg:my-8">
        <div className="grid w-full grid-cols-1 md:grid-cols-6 lg:mb-12">
          <div className="col-span-3 flex w-full items-center gap-4">
            <Avatar />
            <div className="space-y-1">
              <Author name="Patrick Xin" />
              <div className="flex items-center gap-1 text-xs italic tracking-widest lg:text-base">
                <PublishTime publishedAt={publishedAt} />
                <span> - </span>
                <ReadingTime readingTime={readingTime} />
              </div>
            </div>
          </div>

          <PostStats slug={slug} />
        </div>
      </div>

      <Description description={description} />

      {/* <PostThumbnail
        title={title}
        src={thumbnail.url}
        author={thumbnail.author}
        fromUrl={thumbnail.from}
      /> */}
    </header>
  );
};

export default PostHeader;
