import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

type Props = {
  name: string;
  isActive: boolean;
  href: string;
  isUppercase?: boolean;
  icon?: React.ReactNode;
  fullWith?: boolean;
  center: boolean;
};

const GradiantLink = ({
  name,
  isActive,
  href,
  isUppercase = false,
  icon = false,
  fullWith = false,
  center = true,
}: Props) => {
  return (
    <Link
      className={cn(
        "inline-flex min-w-[4rem] text-center gap-2 group hover:text-primary relative px-4 py-2 rounded-md text-[0.7rem] font-medium transition-all duration-200",
        {
          "bg-purple-400/20 hover:bg-purple-500/20 hover:text-gray-50 text-gray-100":
            isActive,
          uppercase: isUppercase,
          "justify-center": !icon,
          "w-full": fullWith,
          "text-center": center,
        },
      )}
      href={href}
    >
      {isActive ? (
        <span className="absolute -inset-1 -z-10 inline-block min-w-[72px] rounded-xl bg-gradient-to-l from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-70 blur-md transition-all duration-200 group-hover:scale-110" />
      ) : null}
      {icon && <span className="inline-block">{icon}</span>}

      <span className="inline-block flex-1">{name}</span>
    </Link>
  );
};

export default GradiantLink;
