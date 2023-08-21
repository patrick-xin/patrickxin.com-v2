"use client";

import { useCallback, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function DialogDemo() {
  const [open, setOpen] = useState(true);
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("callbackUrl");
  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);
  return (
    <Dialog
      defaultOpen={open}
      open={open}
      onOpenChange={() => {
        setOpen(!open);
        onDismiss();
      }}
    >
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="gap-8">
          <DialogTitle className="text-2xl">Sign in</DialogTitle>

          <DialogDescription>
            Sign in to leave a comment! I&apos;ll get back to you soon,
            rememeber to come back soon!
          </DialogDescription>
        </DialogHeader>

        <div className="flex h-96 w-96 items-center justify-center">
          <div className="mx-8 flex flex-col">
            <Button
              variant="outline"
              className="my-2"
              onClick={() => signIn("github", { callbackUrl: search || "/" })}
            >
              <GitHubLogoIcon className="mr-2 h-4 w-4" />
              Sign in with Github
            </Button>
            <Button
              className="my-2"
              variant="outline"
              onClick={() => signIn("google", { callbackUrl: search || "/" })}
            >
              Sign in with Google
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
