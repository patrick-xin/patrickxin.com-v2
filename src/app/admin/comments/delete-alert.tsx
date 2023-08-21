"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

type Props = {
  open: boolean;
  onChange: () => void;
  content: string;
  commentId: string;
  handleResetComments: (commentId: string) => void;
};

const DeleteAlert = ({
  open,
  onChange,
  content,
  commentId,
  handleResetComments,
}: Props) => {
  const { toast } = useToast();

  const handleDelete = async () => {
    const res = await fetch("/admin/api/comment", {
      method: "DELETE",
      body: JSON.stringify({ commentId }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();

    if (data.success) {
      toast({ title: "Comment deleted successfully", variant: "success" });
      handleResetComments(commentId);
    }
  };
  return (
    <AlertDialog open={open} onOpenChange={onChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="mb-6 text-destructive">
            Delete comment?
          </AlertDialogTitle>
          <AlertDialogDescription>{content}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="mt-6">
          <Button asChild variant="ghost">
            <AlertDialogCancel>Cancel</AlertDialogCancel>
          </Button>
          <Button asChild variant="destructive">
            <AlertDialogAction onClick={handleDelete}>
              Continue
            </AlertDialogAction>
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteAlert;
