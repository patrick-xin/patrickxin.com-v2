import type { Prisma, Reply } from "@prisma/client";

export interface IAdjacentPosts {
  previous: { slug: string; title: string } | null;
  next: { slug: string; title: string } | null;
}

export type UserWithComments = Prisma.UserGetPayload<{
  include: {
    _count: { select: { comment: true } };
    comment: {
      select: {
        postSlug: true;
        createdAt: true;
        id: true;
        content: true;
      };
    };
  };
}>;

export type CommentWithUser = Prisma.CommentGetPayload<{
  include: {
    user: {
      select: {
        name: true;
        email: true;
      };
    };
    reply: {
      select: {
        by: true;
      };
    };
  };
}>;

export interface CommentWithUserAndReply
  extends Omit<CommentWithUserAndReplyRaw, "createdAt" | "reply"> {
  createdAt: string;
  reply: ReplyWithCreatedAtString;
}

interface ReplyWithCreatedAtString extends Omit<Reply, "createdAt"> {
  createdAt: string;
}

export type CommentWithUserAndReplyRaw = Prisma.CommentGetPayload<{
  include: { user: true; reply: true };
}>;
