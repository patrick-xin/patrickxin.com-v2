"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

type EditPostDialogProps = {
  open: boolean;
  closeModal: () => void;
  post: any;
};

const EditPostDialog = ({ open, closeModal, post }: EditPostDialogProps) => {
  const [viewsCount, setViewsCount] = useState("");
  const [likesCount, setLikesCount] = useState("");
  const { toast } = useToast();
  useEffect(() => {
    setViewsCount(post.view_count);
    setLikesCount(post.like_count);
  }, [post]);
  const handleEdit = async () => {
    const res = await fetch("/admin/api", {
      method: "PUT",
      body: JSON.stringify({
        views: Number(viewsCount),
        likes: Number(likesCount),
        slug: post.slug,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (data.success) {
      toast({
        title: "Post updated!",
        variant: "success",
      });
      setViewsCount(data.views);
      setLikesCount(data.likes);
      closeModal();
    }
  };
  return (
    <Dialog open={open} onOpenChange={closeModal}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="mb-4">Edit Post</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div>
            <Label htmlFor="views">Views</Label>
            <Input
              type="number"
              value={viewsCount}
              onChange={(e) => setViewsCount(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="likes">Likes</Label>
            <Input
              type="number"
              value={likesCount}
              onChange={(e) => setLikesCount(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={handleEdit} type="button">
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditPostDialog;
