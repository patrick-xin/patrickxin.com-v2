import { useScroll } from "framer-motion";
import React from "react";

const useProgress = () => {
  const [readingProgress, setReadingProgress] = React.useState(0);
  const { scrollYProgress } = useScroll();

  React.useEffect(() => {
    scrollYProgress.on("change", (latest: number) => {
      setReadingProgress(parseFloat(latest.toFixed(2)));
    });
  }, [scrollYProgress]);

  return readingProgress;
};

export default useProgress;
