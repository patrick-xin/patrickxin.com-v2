"use client";

import { EyeOpenIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { usePostViews } from "../../hooks";

const PostViewStats = ({ slug }: { slug: string }) => {
  const { views, isLoading, error } = usePostViews(slug);

  if (isLoading) return null;
  if (error) return null;
  return (
    <div className="flex items-center gap-1">
      <Button variant="ghost" size="icon" className="cursor-default">
        <EyeOpenIcon className="h-4 w-4 text-indigo-700" />
      </Button>
      <div className="text-xs lg:text-sm">{views}</div>
    </div>
  );
};

export default PostViewStats;
