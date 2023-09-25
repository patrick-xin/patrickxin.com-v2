import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } },
) {
  const { slug } = params;
  const post = await prisma.post.findUnique({
    where: {
      slug,
    },
    select: {
      like_count: true,
    },
  });

  return NextResponse.json({ success: true, likes: post?.like_count });
}

export async function POST(
  request: Request,
  { params }: { params: { slug: string } },
) {
  const { slug } = params;
  const post = await prisma.post.update({
    where: {
      slug,
    },
    data: {
      like_count: { increment: 1 },
    },
  });

  return NextResponse.json({ success: true, likes: post.like_count });
}
