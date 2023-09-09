import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function POST(request: Request) {
  const body = await request.json();
  const posts = await prisma.post.findMany({
    where: { slug: { contains: body.search } },
    select: {
      slug: true,
    },
  });

  return NextResponse.json({
    message: "success",
    posts,
  });
}
