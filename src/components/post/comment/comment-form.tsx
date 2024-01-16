import Link from "next/link";
import { getServerSession } from "next-auth";
import { leaveComment } from "@/lib/actions";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const CommentForm = async ({ slug }: { slug: string }) => {
  const session = await getServerSession();
  return (
    <form action={leaveComment} className="space-y-4">
      <Textarea rows={10} id="content" name="content" />
      <Input type="hidden" name="slug" id={slug} value={slug} />
      <div className="flex justify-end">
        {session ? (
          <Button
            className="disabled:cursor-not-allowed"
            type="submit"
            variant="outline"
          >
            Submit
          </Button>
        ) : (
          <div className="group relative mt-2">
            <Button
              type="button"
              asChild
              variant="outline"
              className="text-zinc-100 hover:text-zinc-50"
            >
              <div>
                <div className="absolute -inset-1 -z-10 rounded-xl bg-gradient-to-l from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-70 blur-md transition-all duration-200 group-hover:scale-110" />
                <Link
                  href={{
                    pathname: "/signin",
                    query: { callbackUrl: `/post/${slug}` },
                  }}
                >
                  Sign in to comment
                </Link>
              </div>
            </Button>
          </div>
        )}
      </div>
    </form>
  );
};

export default CommentForm;
