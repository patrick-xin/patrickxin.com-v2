"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "./db";
import { getAuthSession } from "./auth";

export async function incrementViews(slug: string) {
  await prisma.post.update({
    where: {
      slug,
    },
    data: {
      view_count: { increment: 1 },
    },
  });

  revalidatePath(`/post/${slug}`);
}

export async function likePost({ slug }: { slug: string }) {
  await prisma.post.update({
    where: {
      slug,
    },
    data: {
      like_count: { increment: 1 },
    },
  });

  revalidatePath(`/post/${slug}`);
}

export async function leaveComment(formData: FormData) {
  const session = await getAuthSession();

  const content = formData.get("content") as string;
  const slug = formData.get("slug") as string;
  if (!session) {
    throw Error("You must login");
  }
  await prisma.comment.create({
    data: {
      post: { connect: { slug } },
      content,
      user: {
        connectOrCreate: {
          where: { id: session.user.id },
          create: {
            id: session.user.id,
            name: session.user.name,
            email: session.user.email,
          },
        },
      },
    },
  });
  revalidatePath(`/post/${slug}`);
}
