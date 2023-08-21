"use client";

import { PlusIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const AddPost = () => {
  const [slug, setSlug] = useState("");
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const handleAddPost = async () => {
    const res = await fetch("/admin/api", {
      method: "POST",
      body: JSON.stringify({ slug }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    if (data.success) {
      setOpen(false);
      toast({ title: "Post added successfully", variant: "success" });
    }
  };
  return (
    <div className="absolute right-0 top-0">
      <Dialog open={open} onOpenChange={setOpen}>
        <Button
          onClick={() => setOpen(true)}
          variant="secondary"
          className="group relative rounded-full"
        >
          <div className="absolute inset-0 z-0 rounded-xl bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-70 blur-lg transition-all duration-200 group-hover:scale-110" />
          <PlusIcon />
        </Button>

        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add a post slug</DialogTitle>
          </DialogHeader>

          <div className="my-8">
            <Input
              id="post"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
            />
          </div>

          <DialogFooter>
            <Button onClick={handleAddPost}>add</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddPost;
