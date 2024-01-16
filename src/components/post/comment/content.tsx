import { prisma } from "@/lib/db";
import CommentBox from "./box";

const CommentContents = async ({ slug }: { slug: string }) => {
  const comments = await prisma.comment.findMany({
    where: { postSlug: slug },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      user: true,
      reply: true,
    },
  });
  return (
    <div className="space-y-6 md:space-y-8">
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="rounded-md border border-gray-400/50 p-2 shadow dark:border-[#4dcead]/30 lg:p-4"
        >
          <div className="flex gap-4">
            <div className="relative flex w-full flex-col gap-2 rounded-md">
              <div>
                <CommentBox
                  username={comment?.user?.name as string}
                  createdAt={comment.createdAt}
                  isAdmin={false}
                />
                <p className="ml-10 p-2 text-sm leading-6 lg:text-base lg:leading-8">
                  {comment.content}
                </p>
              </div>

              {comment.reply && (
                <div className="my-2 ml-10 lg:my-4">
                  <CommentBox
                    username={comment.reply.to}
                    createdAt={comment.reply.createdAt}
                    by={comment.reply.by}
                    isAdmin
                  />
                  <p className="ml-10 p-2 text-sm leading-6 lg:text-base lg:leading-8">
                    {comment.reply.content}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentContents;
