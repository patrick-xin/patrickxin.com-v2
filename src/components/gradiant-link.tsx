import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

type Props = {
  name: string;
  isActive: boolean;
  href: string;
  isUppercase?: boolean;
};

const GradiantLink = ({ name, isActive, href, isUppercase = false }: Props) => {
  return (
    <Link
      className={cn(
        "inline-block group hover:underline relative px-3 py-1 rounded-md text-xs font-medium transition-all duration-200",
        {
          "bg-purple-400/20 hover:no-underline  hover:bg-purple-500/20 text-gray-100 dark:text-gray-100":
            isActive,
          uppercase: isUppercase,
        },
      )}
      href={href}
    >
      {isActive ? (
        <span className="absolute -inset-1 -z-10 inline-block rounded-xl bg-gradient-to-l from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-70 blur-md transition-all duration-200 group-hover:scale-110" />
      ) : null}
      <span>{name}</span>
    </Link>
  );
};

export default GradiantLink;
