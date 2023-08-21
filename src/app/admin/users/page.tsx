import React from "react";

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { UserWithComments } from "@/types";
import UserTableBody from "@/app/admin/users/user-table";
import { authOptions } from "@/lib/auth";

const getUsers = async () => {
  return prisma.user.findMany({
    where: {
      role: {
        not: "ADMIN",
      },
    },
    include: {
      _count: { select: { comment: true } },
      comment: {
        select: {
          postSlug: true,
          createdAt: true,
          id: true,
          content: true,
        },
      },
    },
  });
};

const Page = async () => {
  const users: UserWithComments[] = await getUsers();
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "ADMIN") {
    redirect("/");
  }
  return (
    <div className="mx-auto flex max-w-6xl flex-col justify-center">
      <h2 className="mb-12 text-3xl font-bold">Total Users: {users.length}</h2>
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead className="w-[100px]">Email</TableHead>
            <TableHead className="w-[100px]">Total Comments</TableHead>
            <TableHead className="">Comments</TableHead>
            <TableHead className="">Action</TableHead>
          </TableRow>
        </TableHeader>
        <UserTableBody users={users} />
      </Table>
    </div>
  );
};

export default Page;
