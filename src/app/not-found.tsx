import Link from "next/link";
import Planet from "@/components/planet";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center overflow-hidden px-6">
      <div className="mt-32 space-y-10 lg:space-y-16">
        <div className="text-8xl font-bold text-primary">404</div>
        <h1 className="text-3xl md:text-4xl lg:text-6xl">
          Opps, you&apos;re lost in space.
        </h1>
        <p>This page could not be found...</p>
        <Button asChild>
          <Link href="/">Take me back to home</Link>
        </Button>
      </div>
      <Planet />
    </div>
  );
}
