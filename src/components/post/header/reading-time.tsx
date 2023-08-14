import type { Post } from "contentlayer/generated";

type ReadingTimeProps = Pick<Post, "readingTime">;

const ReadingTime = ({ readingTime }: ReadingTimeProps) => {
  return (
    <span className="text-xs tracking-normal lg:text-sm">
      {Math.ceil(readingTime.minutes)} minutes read
    </span>
  );
};

export default ReadingTime;
