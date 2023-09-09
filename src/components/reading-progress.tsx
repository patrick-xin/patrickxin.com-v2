"use client";

import { Progress } from "@/components/ui/progress";
import useProgress from "@/lib/hooks/useProgress";

const ReadingProgress = ({ height }: { height: number }) => {
  const readingProgress = useProgress();

  return (
    <div>
      <Progress value={readingProgress * 100} height={height} />
    </div>
  );
};

export default ReadingProgress;
