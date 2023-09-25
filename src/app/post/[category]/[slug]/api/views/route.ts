import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } },
) {
  const { slug } = params;

  const post = await prisma.post.update({
    where: {
      slug,
    },
    data: {
      view_count: { increment: 1 },
    },
  });

  return NextResponse.json({ success: true, views: post.view_count });
}
