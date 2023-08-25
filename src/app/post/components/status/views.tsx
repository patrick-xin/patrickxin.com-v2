"use client";

import { EyeOpenIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useFetch } from "@/lib/hooks";

const PostViewStats = ({ slug, views }: { slug: string; views: number }) => {
  const { data } = useFetch<{ views: number }>(`/post/${slug}/api/views`);
  const [updatedViews, setUpdatedViews] = useState(views);

  useEffect(() => {
    if (data) {
      setUpdatedViews(data.views);
    }
  }, [slug, views, data]);

  return (
    <div className="flex items-center gap-1">
      <Button variant="ghost" size="icon" className="cursor-default">
        <EyeOpenIcon className="h-4 w-4 text-indigo-700" />
      </Button>
      <div className="text-xs lg:text-sm">{updatedViews}</div>
    </div>
  );
};

export default PostViewStats;
