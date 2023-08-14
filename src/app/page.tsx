import { UserButton } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <UserButton afterSignOutUrl="/" />
      <Button>hello</Button>
      <div className="mx-0 bg-red-200 p-0">hi</div>
    </main>
  );
}
