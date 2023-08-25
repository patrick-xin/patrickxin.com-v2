/* eslint-disable jsx-a11y/heading-has-content */
import Image from "next/image";
import Link from "next/link";

import { HashIcon, QuoteEndIcon, QuoteStartIcon } from "@/components/icon";
import Pre from "./pre";

const MDXComponents = {
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
          className="relative inline-block font-medium underline underline-offset-4 transition-colors ease-linear"
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
          className="ml-2 mt-1 inline-block origin-left scale-0 text-site-foreground opacity-0
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
    return (
      <p {...props} className="my-6 leading-8 md:leading-10 lg:my-8 xl:my-10" />
    );
  },
  em: ({ ...props }) => {
    return <em {...props} className="italic" />;
  },
  hr: ({ ...props }) => {
    return <hr {...props} className="my-10" />;
  },
  blockquote: ({ ...props }) => {
    return (
      <div
        className="relative mx-auto my-4 flex rounded-lg bg-gray-50 p-2 font-quote font-semibold dark:bg-white/5 lg:my-12 lg:text-xl
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
      className="my-6 list-inside list-disc space-y-2 text-sm font-medium italic
       leading-8 md:my-6 md:ml-4 md:pl-8 lg:space-y-3 lg:leading-9"
      {...props}
    />
  ),
  ol: ({ ...props }) => (
    <ol
      className="list-inside list-decimal space-y-2 p-2 text-sm font-medium italic leading-6 md:my-4 md:p-4 md:pl-10 md:leading-7 lg:my-6 lg:space-y-3 lg:text-lg lg:leading-9"
      {...props}
    />
  ),
  pre: Pre,
};

export default MDXComponents;