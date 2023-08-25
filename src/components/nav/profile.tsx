"use client";

import Image from "next/image";

import type { Session } from "next-auth";
import SignOut from "./sign-out";

const UserProfile = ({ session }: { session: Session }) => {
  const { user } = session;
  return (
    <div className="flex items-center gap-2">
      <div>
        <Image
          className="rounded-full"
          src={user.image ?? ""}
          alt="user-avatar"
          height={36}
          width={36}
        />
      </div>

      {user.role === "VISTOR" ? (
        <div>
          <div className="text-sm">{user.email ?? null}</div>
          <div className="text-sm">{user.name}</div>
          <SignOut />
        </div>
      ) : null}
    </div>
  );
};

export default UserProfile;
