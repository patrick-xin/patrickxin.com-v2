"use client";

import { useState } from "react";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import type { PostWithCommentsAndCount } from "@/types";
import EditPostDialog from "./edit-dialog";

type PostTableProps = {
  posts: PostWithCommentsAndCount[];
};

const PostTable = ({ posts }: PostTableProps) => {
  const [selected, setSelected] = useState("");
  return (
    <TableBody>
      {posts.map((post) => (
        <>
          <TableRow key={post.slug}>
            <TableCell>{post.slug}</TableCell>
            <TableCell>{post.view_count}</TableCell>
            <TableCell>{post.like_count}</TableCell>
            <TableCell className="text-center">
              {post._count.comments}
            </TableCell>
            <TableCell>
              <Button onClick={() => setSelected(post.slug)}>Edit</Button>
            </TableCell>
          </TableRow>
          <EditPostDialog
            open={post.slug === selected}
            closeModal={() => setSelected("")}
            post={post}
          />
        </>
      ))}
    </TableBody>
  );
};

export default PostTable;
