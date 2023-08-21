"use client";

import { useState } from "react";

import { format } from "date-fns";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import type { CommentWithUser } from "@/types";
import { Button } from "@/components/ui/button";
import DeleteAlert from "./delete-alert";
import ReplyDialog from "./reply-dialog";

type Props = { comments: CommentWithUser[] };

const CommentTableBody = ({ comments }: Props) => {
  const [selected, setSelected] = useState("");
  const [c, setC] = useState(comments);
  const handleResetComments = (commentId: string) => {
    setC(() => c.filter((item) => item.id !== commentId));
  };
  const [replied, setReplied] = useState(false);
  return (
    <TableBody>
      {c.map((comment) => (
        <TableRow key={comment.id}>
          <TableCell>
            {comment.reply?.by || replied ? (
              <div className="rounded-md bg-green-400/30 p-1 text-center text-xs font-bold">
                replied
              </div>
            ) : (
              <div className="rounded-md bg-yellow-400/30 p-1 text-center text-xs font-bold">
                not replied
              </div>
            )}
          </TableCell>
          <TableCell>{comment.content}</TableCell>
          <TableCell>{comment.user?.name}</TableCell>
          <TableCell>{format(comment.createdAt, "dd LLL yyyy")}</TableCell>
          <TableCell className="font-medium">{comment.postSlug}</TableCell>
          <TableCell>
            <Button
              size="sm"
              variant="destructive"
              onClick={() => setSelected(comment.id)}
            >
              Delete
            </Button>
          </TableCell>
          <TableCell>
            {comment.reply?.by || replied ? null : (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelected(comment.id)}
              >
                Reply
              </Button>
            )}
          </TableCell>
          <DeleteAlert
            content={comment.content}
            commentId={comment.id}
            open={comment.id === selected}
            onChange={() => setSelected("")}
            handleResetComments={handleResetComments}
          />
          <ReplyDialog
            setReplied={() => setReplied(true)}
            open={selected === comment.id}
            onChange={() => setSelected("")}
            username={comment.user?.name!}
            commentId={comment.id}
            content={comment.content}
          />
        </TableRow>
      ))}
    </TableBody>
  );
};

export default CommentTableBody;
