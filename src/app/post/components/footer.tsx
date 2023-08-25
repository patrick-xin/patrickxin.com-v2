"use client";

import { useEffect, useState } from "react";
import { useFetch } from "@/lib/hooks/useFetch";
import type { CommentWithUserAndReply } from "@/types";
import Tag from "@/components/tag";
import CommentBox from "./comment/box";
import CommentForm from "./comment/form";

type PostFooterProps = { slug: string; tags: string[] };

const PostFooter = ({ slug, tags }: PostFooterProps) => {
  const { data } = useFetch<{ comments: CommentWithUserAndReply[] }>(
    `/post/${slug}/api/comments`,
  );

  const [c, setC] = useState<CommentWithUserAndReply[]>([]);
  useEffect(() => {
    if (data) {
      setC(data.comments);
    }
  }, [data]);

  return (
    <section className="scroll-mt-24">
      <div className="my-6 flex items-center gap-4 lg:my-16">
        <div className="flex flex-wrap">
          {tags.map((tag) => (
            <Tag key={tag} text={tag} />
          ))}
        </div>
      </div>

      <div
        id={`${slug}-comment`}
        data-comments
        className="font-heading text-xl tracking-wider md:text-2xl lg:text-3xl"
      >
        {data?.comments.length !== 0 ? "Comments" : null}
      </div>
      <div className="mx-auto my-6 max-w-4xl md:my-12 lg:my-20">
        <div className="space-y-6 md:space-y-8">
          {c &&
            c.map((comment) => (
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

        <div className="my-10 space-y-3 md:space-y-4 lg:my-16">
          <div className="font-heading text-xl tracking-wider md:text-2xl lg:text-3xl">
            Questions? Thoughts? Welcome to drop a comment below!
          </div>
          <CommentForm slug={slug} setComments={setC} />
        </div>
      </div>
    </section>
  );
};

export default PostFooter;
