import Image from "next/image";
import Link from "next/link";

import { getServerSession } from "next-auth";
import { Button } from "@/components/ui/button";
import { authOptions } from "@/lib/auth";
import { ThemeToggle } from "./theme-toggle";
import UserProfile from "./profile";

const Header = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <header className="sticky top-0 z-40 mx-auto h-12 w-full max-w-7xl px-24 backdrop-blur md:h-16">
        <nav
          className="mx-auto flex h-full w-full max-w-7xl items-center justify-between
       px-8 md:px-12"
        >
          <div className="flex flex-1 items-center">
            <Link href="/">
              <Image alt="logo-image" src="/logo.svg" height={32} width={32} />
            </Link>
            <ul className="flex items-center gap-4 pl-24">
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
          </div>
          <div className="hidden items-center lg:flex">
            <div className="mx-12 lg:mt-1 lg:block">
              <ThemeToggle />
            </div>
            {session ? <UserProfile session={session} /> : null}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
