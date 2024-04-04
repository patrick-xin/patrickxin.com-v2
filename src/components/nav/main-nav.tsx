"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";
import UserProfile from "./profile";
import { CommandMenu } from "../command/command-menu";
import MobileDrawer from "./mobile-drawer";

const MainNav = ({ fixed = false }) => {
  const { data } = useSession();
  const path = usePathname();
  const regexPattern = /\/post(.*)/;

  return (
    <nav
      className={cn(
        "mx-auto flex h-full w-full items-center px-6",
        fixed
          ? "fixed inset-0 h-[80px] z-50 backdrop-filter backdrop-blur-lg"
          : "relative",
      )}
    >
      <div className="mx-auto flex w-full max-w-4xl items-center">
        <Link href="/" className="inline-block">
          <Image alt="logo-image" src="/logo.svg" height={32} width={32} />
        </Link>
        <div className="flex flex-1 items-center justify-end gap-6 md:gap-8 lg:gap-10">
          <ul className="hidden items-center gap-6 text-sm md:gap-8 md:text-base lg:flex lg:gap-10">
            <li>
              <Link
                href="/"
                className={cn(
                  "inline-block decoration-primary transition-all ease-linear hover:text-primary hover:underline hover:underline-offset-4 decoration-4",
                  path === "/" &&
                    "underline underline-offset-4 text-primary decoration-4",
                )}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/post"
                className={cn(
                  "inline-block decoration-primary transition-all ease-linear hover:text-primary hover:underline hover:underline-offset-4 decoration-4",
                  path.match(regexPattern) &&
                    "underline underline-offset-4 decoration-4 text-primary",
                )}
              >
                Post
              </Link>
            </li>
            <li>
              <Link
                href="/bookmark/web"
                className={cn(
                  "inline-block decoration-primary decoration-4 transition-all ease-linear hover:text-primary hover:underline hover:underline-offset-4",
                  path.split("/")[1] === "bookmark" &&
                    "underline underline-offset-4 text-primary",
                )}
              >
                Bookmark
              </Link>
            </li>
          </ul>
          <div className="mt-1 flex items-center lg:gap-6">
            <div className="flex items-center gap-4">
              <div className="hidden lg:block">
                <ThemeToggle />
              </div>
              <div className="hidden lg:block">
                <CommandMenu />
              </div>
              <div className="block lg:hidden">
                <MobileDrawer />
              </div>
            </div>

            {data ? (
              <div className="-mt-1 ml-2">
                <UserProfile session={data} />{" "}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
