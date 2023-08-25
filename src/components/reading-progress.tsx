"use client";

import { Progress } from "@/components/ui/progress";
import useProgress from "@/lib/hooks/useProgress";

const ReadingProgress = () => {
  const readingProgress = useProgress();
  return <Progress value={readingProgress * 100} />;
};

export default ReadingProgress;
