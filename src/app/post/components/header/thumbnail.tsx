import Image from "next/image";
import { getBase64 } from "@/lib/image";

type PostThumbnailProps = {
  title?: string;
  author?: string;
  fromUrl?: string;
  src: string;
  hasInfo?: boolean;
  size?: "sm" | "md" | "lg";
};

const PostThumbnail = async ({
  title,
  author,
  fromUrl,
  src,
  hasInfo = true,
  size = "md",
}: PostThumbnailProps) => {
  const { url, width, height } = await getBase64(src);
  const h = size === "md" ? 500 : size === "sm" ? 200 : height;
  const w = size === "md" ? 375 : size === "sm" ? 300 : width;

  return (
    <div>
      <Image
        blurDataURL={url}
        quality={100}
        src={src}
        placeholder="blur"
        className="aspect-[4/3] w-full object-cover shadow-md lg:rounded-md"
        width={w}
        height={h}
        alt={`${title}-image`}
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 60vw"
      />
      {hasInfo && (
        <div className="mt-2 text-center text-xs text-gray-400 dark:text-gray-500 lg:mt-4 lg:text-sm">
          Image from
          <a
            className=" mx-2 inline-block hover:text-gray-400 dark:hover:text-gray-300"
            href={fromUrl}
            target="_blank"
            rel="noreferrer noopener"
          >
            {author}
          </a>
          <span>on</span>
          <a
            className="mx-2 inline-block hover:text-gray-400 dark:hover:text-gray-300"
            href="https://unsplash.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Unsplash
          </a>
        </div>
      )}
    </div>
  );
};

export default PostThumbnail;
