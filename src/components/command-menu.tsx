"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import type { DialogProps } from "@radix-ui/react-alert-dialog";
import {
  ExitIcon,
  LaptopIcon,
  MoonIcon,
  SunIcon,
  TextAlignJustifyIcon,
} from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { signOut, useSession } from "next-auth/react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { CATEGORIES, NAGIGATIONS } from "@/lib/constants";
import { Button } from "./ui/button";

export function CommandMenu({ ...props }: DialogProps) {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const { setTheme } = useTheme();
  const { data } = useSession();
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      <Button
        size="icon"
        onClick={() => setOpen(true)}
        {...props}
        className="border-gray-200 bg-transparent text-gray-300 hover:border-gray-500 hover:bg-transparent dark:border-gray-200/50 dark:hover:border-gray-100/50 dark:hover:text-gray-100 lg:border"
      >
        <TextAlignJustifyIcon className="h-4 w-4 text-gray-400 dark:text-gray-100 lg:hidden" />
        <kbd className="pointer-events-none hidden select-none items-center gap-1 rounded px-1.5 font-medium text-gray-500 lg:inline-flex">
          <span className="text-base dark:text-gray-100">⌘ </span>
          <span>K</span>
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Links">
            {NAGIGATIONS.map((navItem) => (
              <CommandItem
                className="flex items-center gap-3"
                key={navItem.href}
                value={navItem.title}
                onSelect={() => {
                  runCommand(() =>
                    router.push(navItem.href as string, { scroll: true }),
                  );
                }}
              >
                <span>{navItem.icon}</span>
                <span>{navItem.title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Category">
            {CATEGORIES.map((navItem) => (
              <CommandItem
                className="flex items-center gap-3"
                key={navItem.href}
                value={navItem.title}
                onSelect={() => {
                  runCommand(() =>
                    router.push(navItem.href as string, { scroll: true }),
                  );
                }}
              >
                <span>{navItem.icon}</span>
                <span>{navItem.title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Theme">
            <CommandItem
              className="group"
              onSelect={() => runCommand(() => setTheme("light"))}
            >
              <SunIcon className="mr-2 h-4 w-4 transition-colors ease-linear group-hover:text-orange-500" />
              Light
            </CommandItem>
            <CommandItem
              className="group"
              onSelect={() => runCommand(() => setTheme("dark"))}
            >
              <MoonIcon className="mr-2 h-4 w-4 transition-colors ease-linear group-hover:text-indigo-500" />
              Dark
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme("system"))}>
              <LaptopIcon className="mr-2 h-4 w-4" />
              System
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          {data?.user && (
            <CommandGroup heading="Action">
              <CommandItem onSelect={() => runCommand(() => signOut())}>
                <ExitIcon className="mr-2 h-4 w-4" />
                Logout
              </CommandItem>
            </CommandGroup>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
}
