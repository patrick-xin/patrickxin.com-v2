"use client";

import { TextAlignCenterIcon } from "@radix-ui/react-icons";
import { AnimatePresence, motion } from "framer-motion";
import { useTOCStore } from "@/store/toc";

const TocButton = () => {
  const toggle = useTOCStore((state) => state.toggle);
  const showTOC = useTOCStore((state) => state.showTOC);
  return (
    <AnimatePresence>
      {!showTOC && (
        <motion.button
          type="button"
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={toggle}
          className="bottom-12 right-32 z-40 hidden rounded-full bg-primary/20 p-2 shadow-lg md:p-4 lg:fixed lg:block"
        >
          <TextAlignCenterIcon className="h-6 w-6 fill-current" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default TocButton;
