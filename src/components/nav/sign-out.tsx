"use client";

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

const SignOut = () => {
  return (
    <Button variant="outline" size="sm" onClick={() => signOut()}>
      Logout
    </Button>
  );
};

export default SignOut;
