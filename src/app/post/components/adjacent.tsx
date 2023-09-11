import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { cn, getAdjacentPosts } from "@/lib/utils";

type PostNavLinkProps = {
  slug: string;
  title: string;
  isRight: boolean;
};

const NavLink = ({ slug, title, isRight }: PostNavLinkProps) => {
  return (
    <div
      className={cn(
        "p-2 md:p-4 group lg:h-20 rounded-lg flex items-center gap-2 justify-start",
        {
          "flex-row-reverse": isRight,
        },
      )}
    >
      {isRight ? <ArrowRightIcon /> : <ArrowLeftIcon />}

      <Link
        href={`/post/${slug}`}
        className={cn(
          "text-sm lg:text-2xl group-hover:underline underline-offset-4 group-hover:text-primary decoration-primary/50",
        )}
      >
        {title}
      </Link>
    </div>
  );
};

const AdjacentPost = ({ slug }: { slug: string }) => {
  const posts = getAdjacentPosts(slug);

  return (
    <section className="mx-auto my-12 flex h-24 w-full max-w-5xl flex-col justify-between gap-4 px-4 lg:my-24">
      {posts.previous ? (
        <NavLink
          isRight={false}
          title={posts.previous.title}
          slug={posts.previous.slug}
        />
      ) : (
        <div className="h-full w-full flex-1" />
      )}
      {posts.next ? (
        <NavLink isRight title={posts.next.title} slug={posts.next.slug} />
      ) : (
        <div className="h-full w-full flex-1" />
      )}
    </section>
  );
};

export default AdjacentPost;
