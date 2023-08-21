"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const TOC = () => {
  const [isInView, setInview] = useState(false);
  const [headingId, setHeadingId] = useState<null | string>(null);
  const getAllHeadings = (): HTMLHeadingElement[] => {
    return Array.from(document.querySelectorAll("[data-heading]"));
  };
  const headings = useMemo(() => getAllHeadings(), []);

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
            "relative hover:text-orange dark:hover:text-mint transition-colors ease-linear cursor-pointer",
            {
              "text-site": headingId === heading.id && isInView,
              "text-base lg:text-lg": getLevel(heading.nodeName) === 2,
              "ml-3 lg:ml-4 text-xs lg:text-sm":
                getLevel(heading.nodeName) === 3,
            },
          )}
        >
          {heading.innerText}
        </a>
      );
    });
  };
  return (
    <aside className="py-6 md:my-16 lg:my-20">
      <nav className="flex flex-col">
        <div
          className={cn(
            "mb-6 w-full inline-flex justify-center gap-2 text-site font-heading text-2xl",
          )}
        >
          Table of Contents
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mx-auto flex flex-col space-y-2 md:space-y-4"
        >
          {mapHeadings()}
        </motion.div>
      </nav>
    </aside>
  );
};

export default TOC;
