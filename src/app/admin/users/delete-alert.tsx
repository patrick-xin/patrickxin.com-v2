"use client";

import { AlertDialogDescription } from "@radix-ui/react-alert-dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

type Props = {
  open: boolean;
  onChange: () => void;

  userId: string;
  username: string;
};

const DeleteAlert = ({ open, onChange, userId, username }: Props) => {
  const { toast } = useToast();

  const handleDelete = async () => {
    const res = await fetch("/admin/api/user", {
      method: "DELETE",
      body: JSON.stringify({ userId }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();

    if (data.success) {
      toast({ title: "User deleted successfully", variant: "success" });
    }
  };
  return (
    <AlertDialog open={open} onOpenChange={onChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="mb-6 text-destructive">
            Delete {username}?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete this user? This will include all the
            comments made by this user.
          </AlertDialogDescription>
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
