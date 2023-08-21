import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function DELETE(request: Request) {
  const json = await request.json();
  const id = json.commentId;

  await prisma.comment.delete({
    where: {
      id,
    },
  });
  return NextResponse.json({ success: true });
}

export async function POST(request: Request) {
  const json = await request.json();

  await prisma.reply.create({
    data: {
      comment: {
        connect: {
          id: json.commentId,
        },
      },
      by: json.by,
      to: json.to,
      content: json.content,
    },
  });
  return NextResponse.json({ success: true });
}
