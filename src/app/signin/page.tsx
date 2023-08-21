"use client";

import { signIn, useSession } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Page = () => {
  const { data } = useSession();
  const searchParams = useSearchParams();
  const search = searchParams.get("callbackUrl");
  const router = useRouter();

  useEffect(() => {
    if (data) {
      router.replace("/");
    }
  }, [data, router, search]);
  return (
    <div className="mx-auto flex w-full justify-center">
      <Card className="max-w-3xl">
        <CardHeader>
          <CardTitle>Sign in</CardTitle>
          <CardDescription />
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center">
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

export default Page;
