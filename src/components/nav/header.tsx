import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Button } from "../ui/button";
import { ThemeToggle } from "./theme-toggle";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 mx-auto h-12 w-full max-w-6xl px-24 backdrop-blur md:h-16">
      <nav
        className="mx-auto flex h-full w-full max-w-7xl items-center justify-between
       px-8 md:px-12"
      >
        <div>
          <Link href="/">
            <Image alt="logo-image" src="/logo.svg" height={32} width={32} />
          </Link>
        </div>
        <div className="hidden lg:flex">
          <ul className="flex items-center gap-4">
            <li>
              <Button asChild variant="link">
                <Link href="/">home</Link>
              </Button>
            </li>
            <li>
              <Button asChild variant="link">
                <Link href="/post">post</Link>
              </Button>
            </li>
          </ul>
          <div className="ml-12 hidden lg:mt-1 lg:block">
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
