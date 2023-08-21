import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function DELETE(request: Request) {
  const json = await request.json();
  const id = json.userId;

  await prisma.user.delete({
    where: {
      id,
    },
  });
  return NextResponse.json({ success: true });
}
