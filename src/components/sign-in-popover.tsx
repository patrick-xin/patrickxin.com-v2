"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { Cross1Icon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const SignInPopover = ({ onDismiss }: { onDismiss?: () => void }) => {
  const searchParams = useSearchParams();
  const search = searchParams.get("callbackUrl");

  return (
    <div className="flex w-full justify-center">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Sign in</CardTitle>
            <Button onClick={onDismiss} variant="outline" size="icon">
              <Cross1Icon />
            </Button>
          </div>

          <CardDescription>Sign in to leave a comment!</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex h-96 w-96 items-center justify-center">
            <div className="mx-8 flex flex-col">
              <Button
                variant="outline"
                className="my-2"
                onClick={() => signIn("github", { callbackUrl: search || "/" })}
              >
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
        </CardContent>
        <CardFooter />
      </Card>
    </div>
  );
};

export default SignInPopover;
