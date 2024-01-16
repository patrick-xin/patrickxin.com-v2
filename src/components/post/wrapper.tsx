"use client";

import { motion } from "framer-motion";
import { useTOCStore } from "@/store/toc";
import Footer from "@/components/footer";

type PostPageWraperProps = {
  children: React.ReactNode;
};

const PostPageWrapper = ({ children }: PostPageWraperProps) => {
  const showTOC = useTOCStore((state) => state.showTOC);

  return (
    <motion.div
      initial={{ marginLeft: 0 }}
      animate={{
        marginLeft: showTOC ? "20rem" : 0,
      }}
      className="relative"
      transition={{ type: "tween" }}
    >
      {children}
      <Footer />
    </motion.div>
  );
};

export default PostPageWrapper;
