"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import {
  ChatBubbleIcon,
  DashboardIcon,
  ExitIcon,
  FileTextIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

export function Sidebar() {
  const pathname = usePathname();
  const segment = pathname.split("/")[2];

  return (
    <div className="fixed left-32 top-32 w-[240px]">
      <div className="px-3 py-2">
        <div className="space-y-4">
          <Button
            asChild
            variant={segment === undefined ? "secondary" : "ghost"}
            className="w-full justify-start"
          >
            <div className="flex items-center gap-4">
              <DashboardIcon />
              <Link href="/admin">Dashboard</Link>
            </div>
          </Button>
          <Button
            asChild
            variant={segment === "posts" ? "secondary" : "ghost"}
            className="w-full justify-start"
          >
            <div className="flex items-center gap-4">
              <FileTextIcon />
              <Link href="/admin/posts">Posts</Link>
            </div>
          </Button>
          <Button
            asChild
            variant={segment === "users" ? "secondary" : "ghost"}
            className="w-full justify-start"
          >
            <div className="flex items-center gap-4">
              <PersonIcon />
              <Link href="/admin/users">Users</Link>
            </div>
          </Button>
          <Button
            variant={segment === "comments" ? "secondary" : "ghost"}
            className="w-full justify-start"
            asChild
          >
            <div className="flex items-center gap-4">
              <ChatBubbleIcon />
              <Link href="/admin/comments">Comments</Link>
            </div>
          </Button>
        </div>
        <div className="mt-32">
          <Button
            className="w-full justify-start"
            onClick={() => signOut({ callbackUrl: "/" })}
            variant="ghost"
          >
            <div className="flex items-center gap-4">
              <ExitIcon />
              Logout
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}
