"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const TableOfContent = () => {
  const [isInView, setInview] = useState(false);
  const [headingId, setHeadingId] = useState<null | string>(null);
  const getAllHeadings = (): HTMLHeadingElement[] => {
    return Array.from(document.querySelectorAll("[data-heading]"));
  };
  const headings = useMemo(() => getAllHeadings(), []);

  const contentRef = useRef<HTMLDivElement>(null);
  const observer = React.useRef<IntersectionObserver>();
  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHeadingId(entry.target.id);
            setInview(true);
          }
        });
      },
      {
        rootMargin: "10% 0px -60% 0px",
        threshold: 0.5,
      },
    );
    headings.forEach((d) => {
      observer.current?.observe(d);
    });
    return () => observer.current?.disconnect();
  }, [headings, setInview, setHeadingId]);

  const getLevel = useMemo(() => {
    return (nodeName: string) => {
      return Number(nodeName.replace("H", ""));
    };
  }, []);
  const mapHeadings = () => {
    return headings.map((heading) => {
      return (
        <a
          href={`#${heading.id}`}
          key={heading.id}
          className={cn(
            "relative hover:text-primary transition-all ease-linear",
            {
              "text-primary hover:text-primary scale-105 before:contents-[''] before:absolute before:inset-0 before:-left-2 before:border-l-2 before:border-border/50":
                headingId === heading.id && isInView,
              "text-sm": getLevel(heading.nodeName) === 2,
              "ml-3 lg:ml-4 text-xs": getLevel(heading.nodeName) === 3,
            },
          )}
        >
          {heading.innerText}
        </a>
      );
    });
  };
  return (
    <div className="relative flex h-full items-center justify-center">
      <div>
        <div className="my-10 text-center font-heading text-xl font-semibold">
          Table of Contents
        </div>
        <nav className="relative flex gap-6">
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mx-auto flex flex-col space-y-2 md:space-y-4"
          >
            {mapHeadings()}
          </motion.div>
        </nav>
      </div>
    </div>
  );
};

export default TableOfContent;
