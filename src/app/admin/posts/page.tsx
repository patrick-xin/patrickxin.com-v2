import { prisma } from "@/lib/db";
import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import AdminWrapper from "../_components/wrapper";
import PostTable from "./post-table";

const getData = async () => {
  return prisma.post.findMany({
    include: {
      comments: true,
      _count: {
        select: {
          comments: true,
        },
      },
    },
  });
};

const Page = async () => {
  const posts = await getData();

  return (
    <AdminWrapper title={`Total Posts: ${posts.length}`}>
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-auto">Slug</TableHead>
            <TableHead className="w-[100px]">Views</TableHead>
            <TableHead className="w-[100px]">Likes</TableHead>
            <TableHead className="w-[140px]">Total comments</TableHead>
            <TableHead className="w-[100px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <PostTable posts={posts} />
      </Table>
    </AdminWrapper>
  );
};

export default Page;
