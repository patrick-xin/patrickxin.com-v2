"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import type { UserWithComments } from "@/types";
import DeleteAlert from "./delete-alert";

type Props = { users: UserWithComments[] };

const UserTableBody = ({ users }: Props) => {
  const [selected, setSelected] = useState("");
  return (
    <TableBody>
      {users.map((user) => (
        <TableRow key={user.id} className="hover:bg-transparent">
          <TableCell className="font-medium">{user.name}</TableCell>
          <TableCell>{user.email ? user.email : "null"}</TableCell>
          <TableCell>{user.comment.length}</TableCell>
          <TableCell>
            <div className="space-y-4 divide-y divide-primary-foreground">
              {user.comment.map((comment) => (
                <div key={comment.id}>
                  <div className="mt-2 p-2">
                    <div className="flex justify-between gap-1">
                      <div>
                        <span className="text-base font-bold">Post:</span>{" "}
                        <span>{comment.postSlug}</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-base font-bold">Comment:</div>{" "}
                      <div>{comment.content}</div>{" "}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TableCell>
          <TableCell>
            <Button onClick={() => setSelected(user.id)} variant="destructive">
              Delete
            </Button>
          </TableCell>
          <DeleteAlert
            username={user.name!}
            userId={user.id}
            open={user.id === selected}
            onChange={() => setSelected("")}
          />
        </TableRow>
      ))}
    </TableBody>
  );
};

export default UserTableBody;
