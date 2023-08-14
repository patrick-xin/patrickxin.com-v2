import type { Post } from "contentlayer/generated";

import Author from "./author";
import Avatar from "./avatar";
import Description from "./description";
import PublishTime from "./publish-time";
import ReadingTime from "./reading-time";
import PostThumbnail from "./thumbnail";
import PostTitle from "./title";

type PostHeaderProps = Pick<
  Post,
  "description" | "publishedAt" | "title" | "readingTime" | "thumbnail"
>;

const PostHeader = ({
  description,
  publishedAt,
  readingTime,
  title,
  thumbnail,
}: PostHeaderProps) => {
  return (
    <header className="lg:py-12">
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
        </div>
      </div>
      <Description description={description} />

      <PostThumbnail
        title={title}
        imageUrl={thumbnail.url}
        author={thumbnail.author}
        fromUrl={thumbnail.from}
        src="https://images.unsplash.com/photo-1691466517945-0f9cc5b47539?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      />
    </header>
  );
};

export default PostHeader;
