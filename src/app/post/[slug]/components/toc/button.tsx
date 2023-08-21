"use client";

import { TextAlignCenterIcon } from "@radix-ui/react-icons";
import { AnimatePresence, motion } from "framer-motion";
import useStore from "@/store";

const TocButton = () => {
  const toggle = useStore((state) => state.toggle);
  const showTOC = useStore((state) => state.showTOC);
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
          className="fixed bottom-12 right-32 z-40 rounded-full bg-[#d3bbe5] p-2 shadow-lg dark:bg-[#4dcead]/50 md:p-4"
        >
          <TextAlignCenterIcon className="h-6 w-6 fill-current text-[#f0f1f4]" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default TocButton;
