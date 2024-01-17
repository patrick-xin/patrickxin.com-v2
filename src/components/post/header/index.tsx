import type { Post } from "contentlayer/generated";

import GradiantLink from "@/components/gradiant-link";
import Author from "./author";
import Avatar from "./avatar";
import Description from "./description";
import PublishTime from "./publish-time";
import ReadingTime from "./reading-time";
import PostTitle from "./title";
import PostThumbnail from "./thumbnail";
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
  thumbnail,
}: PostHeaderProps) => {
  return (
    <div className="lg:py-12">
      <div className="space-y-2 lg:space-y-4">
        <GradiantLink
          isUppercase
          name={category}
          href={`/category/${category}`}
          isActive
          center
        />
        <PostTitle title={title} />
      </div>

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
      <div className="-mx-4 md:mx-0">
        <PostThumbnail
          title={title}
          src={thumbnail.url}
          author={thumbnail.author}
          fromUrl={thumbnail.from}
        />
      </div>
    </div>
  );
};

export default PostHeader;
