"use client";

import { AnimatePresence, motion } from "framer-motion";

import { ArrowUpIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { useScrollToTop } from "@/lib/hooks";

type ScrollTopProps = {
  top: number;
  isFixed: boolean;
};

const ScrollTop = ({ top, isFixed }: ScrollTopProps) => {
  const { visible, scrollToTop } = useScrollToTop({ top });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
            "shadow-lg hidden lg:block bg-[#d3bbe5] dark:bg-[#4dcead]/50 p-2 z-100 md:p-4 rounded-full bottom-8 right-4 md:bottom-12 md:right-12",
            {
              static: !isFixed,
              fixed: isFixed,
            },
          )}
          onClick={scrollToTop}
        >
          <ArrowUpIcon className="h-4 w-4 fill-current text-[#f0f1f4] md:h-6 md:w-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollTop;
