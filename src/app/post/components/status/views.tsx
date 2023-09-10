"use client";

import { EyeOpenIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { usePostViews } from "../../hooks";

const PostViewStats = ({ slug }: { slug: string }) => {
  const { views } = usePostViews(slug);

  return (
    <div className="flex items-center gap-1">
      <Button variant="ghost" size="icon" className="cursor-default">
        <EyeOpenIcon className="h-4 w-4 text-yellow-600" />
      </Button>
      <div className="font-heading text-xs lg:text-sm">{views}</div>
    </div>
  );
};

export default PostViewStats;
