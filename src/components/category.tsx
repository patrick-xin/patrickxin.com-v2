"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { PATH } from "@/lib/constants";
import GradiantLink from "./gradiant-link";

const Category = () => {
  const pathName = usePathname();
  const active = pathName.split("/")[3];

  return (
    <div className="flex items-center gap-6">
      {PATH.map(({ name, path, href }) => (
        <GradiantLink
          key={name}
          name={name}
          href={href}
          isActive={path === active}
        />
      ))}
    </div>
  );
};

export default Category;
