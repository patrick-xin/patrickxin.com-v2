"use client";

import { AnimatePresence, motion } from "framer-motion";

import { Cross1Icon } from "@radix-ui/react-icons";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import useStore from "@/store";
import TableOfContent from "./content";

const TocDrawer = () => {
  const showTOC = useStore((state) => state.showTOC);
  const toggle = useStore((state) => state.toggle);
  const pathname = usePathname();
  useEffect(() => {
    console.log(pathname);
  }, [pathname]);
  return (
    <AnimatePresence>
      {showTOC && (
        <motion.aside
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{
            x: "-100%",
            transition: { duration: 0.4 },
          }}
          transition={{ type: "tween", duration: 0.3 }}
          className="relative left-0 top-0 z-100 hidden h-screen w-[60vw] flex-col overflow-y-scroll border-r border-border/20 bg-background px-6
      shadow-md md:block md:w-[40vw] lg:fixed lg:w-[24vw] lg:px-12"
        >
          <motion.div
            className="relative mt-4 flex justify-end px-6"
            initial={{ opacity: 0 }}
            animate={{
              opacity: showTOC ? 1 : 0,
            }}
            exit={{ opacity: 0 }}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed left-2 top-2 z-40 rounded-full bg-primary/20 shadow-lg md:p-4 lg:left-4 lg:top-4"
              onClick={toggle}
            >
              <Cross1Icon className="h-4 w-4 fill-current" />
            </motion.button>
          </motion.div>

          <TableOfContent />
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default TocDrawer;
