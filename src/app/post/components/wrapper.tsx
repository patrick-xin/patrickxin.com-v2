"use client";

import { motion } from "framer-motion";
import useStore from "@/store";
import Footer from "@/components/footer";

type PostPageWraperProps = {
  children: React.ReactNode;
};

const PostPageWrapper = ({ children }: PostPageWraperProps) => {
  const showTOC = useStore((state) => state.showTOC);

  return (
    <motion.div
      initial={{ marginLeft: 0 }}
      animate={{
        marginLeft: showTOC ? "24rem" : 0,
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
