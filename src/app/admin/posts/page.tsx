import { prisma } from "@/lib/db";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
    <div className="mx-auto flex max-w-6xl flex-col justify-center">
      <h2 className="mb-12 text-3xl font-bold">Total Posts: {posts.length}</h2>
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-[200px]">Slug</TableHead>
            <TableHead className="w-[100px]">Views</TableHead>
            <TableHead className="w-[100px]">Likes</TableHead>
            <TableHead className="w-[100px]">Total comments</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {posts.map((post) => (
            <TableRow key={post.id}>
              <TableCell>{post.slug}</TableCell>
              <TableCell>{post.view_count}</TableCell>
              <TableCell>{post.like_count}</TableCell>
              <TableCell>{post._count.comments}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Page;
