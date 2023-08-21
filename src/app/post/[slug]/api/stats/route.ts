import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } },
) {
  const { slug } = params;
  const post = await prisma.post.findFirstOrThrow({
    where: { slug },
    include: {
      comments: true,
    },
  });

  return NextResponse.json({
    message: "success",
    post: { ...post, comments: post.comments.length },
  });
}
