"use client";

import React from "react";
import GradiantLink from "@/components/gradiant-link";
import MovingHeader from "@/components/nav/header";
import type { Post } from "contentlayer/generated";
import { CommandMenu } from "@/components/command/command-menu";

import { ThemeToggle } from "@/components/nav/theme-toggle";
import MobileDrawer from "@/components/nav/mobile-drawer";
import PostTitle from "./header/title";

type PostPageHeaderProps = Pick<Post, "title" | "category">;

const PostPageHeader = ({ category, title }: PostPageHeaderProps) => {
  return (
    <MovingHeader count={460}>
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
        <div className="block lg:hidden">
          <MobileDrawer />
        </div>
        <div className="hidden items-center gap-2 lg:flex">
          <CommandMenu />
          <ThemeToggle />
        </div>
      </div>
    </MovingHeader>
  );
};

export default PostPageHeader;
