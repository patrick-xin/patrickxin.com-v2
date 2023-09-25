import { TextAlignJustifyIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NAGIGATIONS } from "@/lib/constants";

const MobileDrawer = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="rounded-lg border border-border/20 p-2">
          <TextAlignJustifyIcon className="z-200 h-4 w-4 text-primary" />
        </div>
      </SheetTrigger>
      <SheetContent
        className="z-200 h-full w-full opacity-80 backdrop-blur"
        side="top"
      >
        <ul className="flex h-1/2 translate-y-1/2 flex-col items-center justify-around">
          {NAGIGATIONS.map((route) => (
            <li key={route.title}>
              <Link href={`${route.href}`}>{route.title}</Link>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default MobileDrawer;
