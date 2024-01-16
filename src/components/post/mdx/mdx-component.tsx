/* eslint-disable jsx-a11y/heading-has-content */
import Image from "next/image";
import Link from "next/link";

import { HashIcon, QuoteEndIcon, QuoteStartIcon } from "@/components/icon";
import Pre from "./pre";
import ToastForPost from "./post-toast";

const MDXComponents = {
  ToastForPost,
  MDXImage: ({ ...props }) => (
    <Image
      {...props}
      src={props.src}
      alt={props.alt}
      className="aspect-[4/3] rounded-md object-fill"
      width={800}
      height={600}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 60vw"
    />
  ),
  a: ({ ...props }) => {
    if (props.href.startsWith("https")) {
      return (
        // eslint-disable-next-line jsx-a11y/anchor-has-content
        <a
          className="relative inline-block font-medium text-primary underline underline-offset-4 transition-colors ease-linear"
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        />
      );
    }

    if (props.href.startsWith("#")) {
      return (
        <a
          {...props}
          href={props.href}
          className="ml-2 mt-1 inline-block origin-left scale-0 opacity-0
          transition-transform duration-75 ease-out group-hover:scale-100
          group-hover:opacity-100"
        >
          <HashIcon />
        </a>
      );
    }

    return (
      <Link href={props.href}>
        <a {...props}>{props.children}</a>
      </Link>
    );
  },
  strong: ({ ...props }) => <strong {...props} className="font-bold" />,
  h2: ({ ...props }) => {
    return (
      <h2
        {...props}
        data-heading
        className="group my-4 flex scroll-mt-20 items-center font-heading text-2xl font-bold capitalize 
        tracking-wide lg:mt-14 lg:text-3xl"
      />
    );
  },
  h3: ({ ...props }) => {
    return (
      <h3
        {...props}
        data-heading
        className="group my-4 flex scroll-mt-20 items-center font-code text-xl font-semibold capitalize"
      />
    );
  },
  p: ({ ...props }) => {
    return <p {...props} className="my-6 leading-8 lg:my-8" />;
  },
  em: ({ ...props }) => {
    return <em {...props} className="italic" />;
  },
  hr: ({ ...props }) => {
    return <hr {...props} className="my-10 h-[1px] border-border/20" />;
  },
  blockquote: ({ ...props }) => {
    return (
      <div
        className="relative mx-auto my-4 flex rounded-lg bg-gray-50 p-2 font-code tracking-wide dark:bg-white/5 lg:my-12
"
      >
        <div>
          <QuoteStartIcon />
        </div>
        <blockquote {...props} className="p-2 leading-3 lg:p-4" />
        <div className="self-end">
          <QuoteEndIcon />
        </div>
      </div>
    );
  },
  ul: ({ ...props }) => (
    <ul
      className="my-6 list-inside list-disc space-y-2 text-sm font-medium leading-8
       md:my-6 md:ml-4 md:pl-8 lg:space-y-3 lg:text-base lg:leading-9"
      {...props}
    />
  ),
  ol: ({ ...props }) => (
    <ol
      className="list-inside list-decimal space-y-2 p-2 text-sm font-medium leading-6 md:my-4 md:p-4 md:pl-10 md:leading-7 lg:my-6 lg:space-y-3 lg:text-base lg:leading-9"
      {...props}
    />
  ),
  pre: Pre,
  table: ({ ...props }) => (
    <table
      className="my-6 w-full caption-bottom border-collapse overflow-hidden border border-border/20 text-sm"
      {...props}
    />
  ),
  thead: ({ ...props }) => <thead {...props} className="[&_tr]:border-b" />,
  tbody: ({ ...props }) => (
    <tbody
      {...props}
      className="[&>*:nth-child(odd)]:bg-primary/5 [&_tr:last-child]:border-0"
    />
  ),
  tr: ({ ...props }) => (
    <tr
      {...props}
      className="border-t border-border/20 data-[state=selected]:bg-muted"
    />
  ),
  th: ({ ...props }) => (
    <th
      {...props}
      className="h-10 w-auto border border-border/20 px-2 text-center align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]"
    />
  ),
  td: ({ ...props }) => (
    <td
      {...props}
      className="border border-border/20 p-3 align-middle leading-loose [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]"
    />
  ),
};

export default MDXComponents;
