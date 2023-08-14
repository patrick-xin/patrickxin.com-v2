import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Button } from "../ui/button";
import { ThemeToggle } from "./theme-toggle";

const PageHeader = () => {
  return (
    <header className="sticky top-0 z-50 h-12 w-full px-24 backdrop-blur">
      <nav className="mx-auto flex h-full max-w-4xl items-center justify-between">
        <ul className="flex items-center gap-4">
          <li>
            <Image alt="logo" src="/logo.svg" height={25} width={25} />
          </li>
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
        <div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default PageHeader;
