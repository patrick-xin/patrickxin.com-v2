import { prisma } from "@/lib/db";
import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { CommentWithUser } from "@/types";
import CommentTableBody from "@/app/admin/comments/comment-table";
import AdminWrapper from "../_components/wrapper";

const getComments = async () => {
  return prisma.comment.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      user: {
        select: {
          name: true,
          email: true,
        },
      },
      reply: {
        select: {
          by: true,
        },
      },
    },
  });
};

const CommentsPage = async () => {
  const comments: CommentWithUser[] = await getComments();
  return (
    <AdminWrapper title={`Total Comments: ${comments.length}`}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Status</TableHead>
            <TableHead>Comment</TableHead>
            <TableHead className="w-[100px]">User</TableHead>
            <TableHead className="w-[100px]">Created At</TableHead>
            <TableHead className="w-auto">Post</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <CommentTableBody comments={comments} />
      </Table>
    </AdminWrapper>
  );
};

export default CommentsPage;
