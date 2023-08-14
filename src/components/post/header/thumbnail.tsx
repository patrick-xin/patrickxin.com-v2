import Image from "next/image";

import { getBase64 } from "@/lib/image";

type PostThumbnailProps = {
  title: string;
  author: string;
  fromUrl: string;
  imageUrl: string;
  src: string;
};

const PostThumbnail = async ({
  title,
  author,
  fromUrl,
  src,
}: PostThumbnailProps) => {
  const { url, width, height } = await getBase64(src);

  return (
    <div>
      <Image
        blurDataURL={url}
        src={src}
        placeholder="blur"
        className="aspect-video rounded-md object-cover"
        width={width}
        height={height}
        alt={`${title}-image`}
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 60vw"
      />
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
    </div>
  );
};

export default PostThumbnail;
