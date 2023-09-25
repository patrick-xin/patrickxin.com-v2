import { prisma } from "./db";

export const getSiteStats = async () => {
  const data = await prisma.post.findMany({
    select: {
      _count: {
        select: {
          comments: true,
        },
      },
      like_count: true,
      view_count: true,
      slug: true,
      comments: {
        select: {
          createdAt: true,
        },
      },
    },
  });

  const posts = data.map((post) => ({
    slug: post.slug,
    views: post.view_count,
    likes: post.like_count,
    comments_count: post._count?.comments,
  }));

  const result = posts.reduce(
    (a, b) => ({
      viewsCount: a.viewsCount + b.views,
      likesCount: a.likesCount + b.likes,
      commentsCount: a.commentsCount + b.comments_count,
    }),
    { viewsCount: 0, likesCount: 0, commentsCount: 0 },
  );

  return result;
};
