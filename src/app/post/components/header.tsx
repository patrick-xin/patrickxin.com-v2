"use client";

import React from "react";
import GradiantLink from "@/components/gradiant-link";
import MovingHeader from "@/components/nav/moving-header";
import type { Post } from "contentlayer/generated";
import { CommandMenu } from "@/components/command-menu";

import PostTitle from "./header/title";

type PostPageHeaderProps = Pick<Post, "title" | "category">;

const PostPageHeader = ({ category, title }: PostPageHeaderProps) => {
  return (
    <MovingHeader count={260}>
      <div className="relative mx-auto flex h-full max-w-6xl items-center gap-4 md:gap-12 md:py-6 lg:gap-20">
        <div className="hidden md:block">
          <GradiantLink
            isUppercase
            name={category}
            href={`/category/${category}`}
            isActive
            center
          />
        </div>
        <PostTitle title={title} size="sm" isGradient />
        <CommandMenu />
      </div>
    </MovingHeader>
  );
};

export default PostPageHeader;
