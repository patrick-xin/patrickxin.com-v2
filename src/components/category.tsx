"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { CATEGORIES } from "@/lib/constants";
import useScrollCounter from "@/lib/hooks/useScrollCounter";
import { cn } from "@/lib/utils";
import GradiantLink from "./gradiant-link";
import { CommandMenu } from "./command-menu";

const Category = () => {
  const pathName = usePathname();
  const active = pathName.split("/")[2];
  const reached = useScrollCounter(400);

  return (
    <div
      className={cn(
        "flex h-16 w-full items-center gap-6 z-40 transition-transform duration-700 ease-linear",
        {
          "fixed top-0 left-0 backdrop-blur-md bg-muted/10": reached,
        },
      )}
    >
      <div
        className={cn("flex w-full max-w-3xl items-center justify-between", {
          "mx-4 lg:mx-auto": reached,
        })}
      >
        <div className="flex items-center gap-4">
          {CATEGORIES.map(({ title, path, href }) => (
            <GradiantLink
              key={title}
              name={title}
              href={href}
              isActive={path === active}
            />
          ))}
        </div>
        {reached && <CommandMenu />}
      </div>
    </div>
  );
};

export default Category;
