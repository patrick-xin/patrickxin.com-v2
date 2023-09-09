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

export type PostWithCommentsAndCount = Prisma.PostGetPayload<{
  include: {
    comments: {
      select: {
        id: true;
      };
    };
    _count: {
      select: {
        comments: true;
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

export type BookmarkType =
  | "article"
  | "inspiration"
  | "resources"
  | "videos"
  | "podcast";

export type Bookmark = {
  title: string;
  path: string;
  href: string;
  description: string;
  image: string;
};

export interface BookmarkCategory {
  articles?: { intro: string; data: Bookmark[] };
  inspirations?: { intro: string; data: Bookmark[] };
  resources?: { intro: string; data: Bookmark[] };
  tools?: { intro: string; data: Bookmark[] };
  videos?: { intro: string; data: Bookmark[] };
  podcast?: { intro: string; data: Bookmark[] };
  gpt?: { intro: string; data: Bookmark[] };
  prompting?: { intro: string; data: Bookmark[] };
  "text-to-image"?: { intro: string; data: Bookmark[] };
}

export interface Bookmarks {
  web: BookmarkCategory;
  ai: BookmarkCategory;
}

export interface IBookmarkItem {
  title: string;
  path: string;
  href: string;
  description: string;
  image: string;
}
