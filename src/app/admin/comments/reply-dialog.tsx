"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";

interface AdminDialogProps {
  username: string;
  commentId: string;
  open: boolean;
  onChange: () => void;
  content: string;
  setReplied: () => void;
}

const ReplyDialog = ({
  username,
  commentId,
  open,
  onChange,
  content,
  setReplied,
}: AdminDialogProps) => {
  const [reply, setReply] = useState("");
  const { toast } = useToast();
  const handleSubmit = async () => {
    const res = await fetch("/admin/api/comment", {
      method: "POST",
      body: JSON.stringify({
        content,
        commentId,
        by: "Patrick Xin",
        to: username,
      }),
    });
    const data = await res.json();
    if (data.success) {
      toast({
        title: "Reply sent!",
        variant: "success",
      });
      setReply("");
      setReplied();
      onChange();
    }
  };
  return (
    <Dialog open={open} onOpenChange={onChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="mb-4">
            Reply to <span className="text-site-foreground">{username}</span>{" "}
          </DialogTitle>
          <DialogDescription className="mt-2 text-muted-foreground">
            {content}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Textarea
            rows={10}
            value={reply}
            onChange={(e) => setReply(e.target.value)}
          />
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={handleSubmit} type="button">
            Reply
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ReplyDialog;
