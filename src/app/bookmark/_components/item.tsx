import { Link1Icon } from "@radix-ui/react-icons";
import Image from "next/image";
import React from "react";
import type { IBookmarkItem } from "@/types";

const BookmarkItem = ({
  path,
  image,
  href,
  title,
  description,
}: IBookmarkItem) => {
  return (
    <div key={path} className="border-b border-border/10">
      <div className="flex gap-4 p-4">
        <div>
          <Image
            alt="logo-image"
            className="rounded-full object-cover"
            height={32}
            width={32}
            src={image}
          />
        </div>

        <div className="flex-1">
          <div className="group flex items-center justify-between text-base font-semibold lg:text-xl">
            <a
              target="_blank"
              className="transition-colors ease-linear hover:text-primary"
              href={href}
            >
              {title}
            </a>
            <div>
              <Link1Icon className="opacity-0 transition-all ease-linear group-hover:text-primary group-hover:opacity-100" />
            </div>
          </div>
          <p className="my-2 text-xs text-muted-foreground lg:text-sm">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookmarkItem;
