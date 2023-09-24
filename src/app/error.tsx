"use client";

import { Button } from "@/components/ui/button";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="mx-auto max-w-2xl">
      <p className="mb-12 text-2xl">
        Opts, something went wrong... maybe refresh?
      </p>
      <div className="flex w-full justify-end">
        <Button onClick={reset}>Refresh</Button>
      </div>
    </div>
  );
}
