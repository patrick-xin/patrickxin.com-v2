import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function POST(request: Request) {
  const json = await request.json();
  const { slug } = json;

  await prisma.post.create({
    data: {
      slug,
    },
  });
  return NextResponse.json({ success: true });
}

export async function PUT(request: Request) {
  const json = await request.json();
  const { slug, views, likes } = json;

  const post = await prisma.post.update({
    where: { slug },
    data: {
      view_count: views,
      like_count: likes,
    },
  });
  return NextResponse.json({
    success: true,
    views: post.view_count,
    likes: post.like_count,
  });
}
