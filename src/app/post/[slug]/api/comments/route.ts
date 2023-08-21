import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/db";
import type { CommentWithUserAndReplyRaw } from "@/types";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } },
) {
  const { slug } = params;
  const comments: CommentWithUserAndReplyRaw[] = await prisma.comment.findMany({
    where: {
      post: {
        slug: slug as string,
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      user: true,
      reply: true,
    },
  });

  return NextResponse.json({ message: "success", comments });
}

export async function POST(
  request: Request,
  { params }: { params: { slug: string } },
) {
  const { slug } = params;
  const { content, userId } = await request.json();

  const session = await getServerSession();

  if (!session) {
    return NextResponse.json({ message: "You must be logged in." });
  }

  await prisma.comment.create({
    data: {
      post: { connect: { slug } },
      content,
      user: {
        connectOrCreate: {
          where: { id: userId },
          create: {
            id: session.user.id,
            name: session.user.name,
            email: session.user.email,
          },
        },
      },
    },
  });

  const comments = await prisma.comment.findMany({
    where: {
      post: {
        slug: slug as string,
      },
    },
    orderBy: {
      createdAt: "asc",
    },
    include: {
      user: true,
    },
  });

  return NextResponse.json({ success: true, comments });
}
