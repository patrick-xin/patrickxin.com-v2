import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";
import { ThemeToggle } from "./theme-toggle";
import UserProfile from "./profile";

const MainNav = () => {
  const { data } = useSession();
  return (
    <nav
      className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-4
      text-white md:px-12 lg:px-8"
    >
      <Link href="/" className="inline-block">
        <Image alt="logo-image" src="/logo.svg" height={32} width={32} />
      </Link>
      <div className="flex flex-1 items-center justify-end gap-6 md:gap-8 lg:gap-10">
        <ul className="flex items-center gap-6 md:gap-8 lg:gap-10">
          <li>
            <Link href="/" className="inline-block">
              Home
            </Link>
          </li>
          <li>
            <Link href="/post" className="inline-block">
              Post
            </Link>
          </li>
        </ul>
        <div className="items-center lg:flex">
          <div className="lg:mt-1 lg:block">
            <ThemeToggle />
          </div>
          {data ? <UserProfile session={data} /> : null}
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
