import PostCommentStats from "@/components/post/status/comments";
import PostLikeStats from "@/components/post/status/likes";
import PostViewStats from "@/components/post/status/views";
import { prisma } from "@/lib/db";
import { ThemeToggle } from "./theme-toggle";

const MobileNav = async ({ slug }: { slug: string }) => {
  const post = await prisma.post.findFirstOrThrow({
    where: { slug },
    include: {
      comments: true,
    },
  });
  return (
    <nav className="fixed bottom-0 right-0 z-75 flex h-12 w-full items-center rounded-t border-t border-primary shadow-lg backdrop-blur-lg dark:border-none md:-mx-12 md:h-16 lg:hidden">
      <ul className="flex w-full items-center justify-around">
        <li>
          <PostViewStats slug={slug} views={post.view_count} />
        </li>
        <li>
          <PostCommentStats comments={post.comments.length} />
        </li>
        <li>
          <PostLikeStats slug={slug} likes={post.like_count} />
        </li>
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
