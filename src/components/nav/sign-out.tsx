"use client";

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

const SignOut = () => {
  return (
    <Button variant="secondary" onClick={() => signOut()}>
      Logout
    </Button>
  );
};

export default SignOut;
