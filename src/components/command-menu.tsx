"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { DialogProps } from "@radix-ui/react-alert-dialog";
import {
  ExitIcon,
  LaptopIcon,
  MagnifyingGlassIcon,
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
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { CATEGORIES, NAGIGATIONS } from "@/lib/constants";
import useDebouncedSearch from "@/lib/hooks/useDebouncedSearch";
import { Button } from "./ui/button";

export function CommandMenu({ ...props }: DialogProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { setTheme } = useTheme();
  const { data } = useSession();

  const { search, posts, loading, handleInputChange } = useDebouncedSearch();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = useCallback((command: () => unknown) => {
    setOpen(false);

    command();
  }, []);

  return (
    <div>
      <Button
        size="icon"
        variant="outline"
        onClick={() => setOpen(true)}
        {...props}
      >
        <TextAlignJustifyIcon className="h-4 w-4 text-gray-400 dark:text-gray-100 lg:hidden" />
        <kbd className="pointer-events-none hidden select-none items-center gap-1 rounded px-1.5 font-medium text-gray-500 lg:inline-flex">
          <span className="text-base dark:text-gray-100">⌘ </span>
          <span>K</span>
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <div className="flex items-center border-b border-border/20 px-3">
          <MagnifyingGlassIcon className="mr-2 h-4 w-4 shrink-0 opacity-50" />
          <input
            value={search}
            className="flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
            onChange={(e) => handleInputChange(e)}
            placeholder="Search whole website..."
          />
        </div>
        <CommandList>
          <CommandEmpty className="my-6 text-center font-black">
            No results found.
          </CommandEmpty>
          <CommandGroup heading="Links">
            {NAGIGATIONS.filter((nav) =>
              nav.title.toLowerCase().includes(search),
            ).map((navItem) => (
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
          <CommandGroup heading="Posts">
            {loading ? (
              <>
                {Array.from({ length: 3 }).map((_, i) => (
                  <CommandItem
                    className="my-2 h-6 w-full animate-pulse rounded bg-primary/20 px-2 py-1.5"
                    key={i}
                  />
                ))}
              </>
            ) : (
              posts?.map((post) => (
                <CommandItem
                  className="flex items-center gap-3"
                  key={post.slug}
                  onSelect={() => {
                    runCommand(() =>
                      router.push(`/post/${post.slug}`, { scroll: true }),
                    );
                  }}
                >
                  <span>{post.title}</span>
                </CommandItem>
              ))
            )}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Category">
            {CATEGORIES.filter((nav) =>
              nav.title.toLowerCase().includes(search),
            ).map((navItem) => (
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
              <SunIcon className="mr-2 h-2 w-2 transition-colors ease-linear group-hover:text-orange-500" />
              Light
            </CommandItem>
            <CommandItem
              className="group"
              onSelect={() => runCommand(() => setTheme("dark"))}
            >
              <MoonIcon className="mr-2 h-2 w-2 transition-colors ease-linear group-hover:text-indigo-500" />
              Dark
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme("system"))}>
              <LaptopIcon className="mr-2 h-2 w-2" />
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
    </div>
  );
}
