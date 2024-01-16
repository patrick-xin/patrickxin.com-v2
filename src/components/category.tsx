"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { CATEGORIES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import GradiantLink from "./gradiant-link";

const PostCategory = () => {
  const pathName = usePathname();
  const active = pathName.split("/")[2];

  return (
    <div
      className={cn(
        "flex h-16 w-full items-center gap-6 z-40 transition-transform duration-700 ease-linear",
      )}
    >
      <div className={cn("flex w-full max-w-3xl items-center justify-between")}>
        <div className="flex items-center gap-4">
          {CATEGORIES.map(({ title, path, href }) => (
            <GradiantLink
              key={title}
              name={title}
              href={href}
              isActive={path === active}
              center
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostCategory;
