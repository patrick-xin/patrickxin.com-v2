"use client";

import { useParams } from "next/navigation";
import PostCommentStats from "@/app/post/components/status/comments";
import PostLikeStats from "@/app/post/components/status/likes";
import PostViewStats from "@/app/post/components/status/views";
import { ThemeToggle } from "./theme-toggle";

const MobileNav = () => {
  const params = useParams();

  return (
    <nav className="fixed bottom-0 right-0 z-75 flex h-12 w-full items-center rounded-t border-t border-primary shadow-lg backdrop-blur-lg dark:border-none md:-mx-12 md:h-16 lg:hidden">
      <ul className="flex w-full items-center justify-around">
        <li>
          <PostViewStats slug={params.slug as string} />
        </li>
        <li>
          <PostCommentStats
            slug={params.slug as string}
            category={params.category as string}
          />
        </li>
        <li>
          <PostLikeStats slug={params.slug as string} />
        </li>
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
