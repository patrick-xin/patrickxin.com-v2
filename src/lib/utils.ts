import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { allPosts } from "contentlayer/generated";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
type FetcherArgs = Parameters<typeof fetch>;
type FetcherReturn<T> = Promise<T>;

export const fetcher = <T = any>(...args: FetcherArgs): FetcherReturn<T> =>
  fetch(...args).then((res) => res.json());

export const getYear = () => {
  const d = new Date();
  return d.getFullYear();
};

export const capitalizeFirstLetter = (string: string) => {
  return string
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export function absoluteUrl(path: string) {
  return `${process.env.SITE_URL}${path}`;
}

export function getRandomColor(): string {
  const assignedColors: string[] = [];
  const colors = [
    "bg-red-700/20",
    "bg-blue-700/20",
    "bg-green-700/20",
    "bg-yellow-700/20",
    "bg-indigo-700/20",
    "bg-purple-700/20",
    "bg-pink-700/20",
    "bg-teal-700/20",
    "bg-orange-700/20",
    "bg-cyan-700/20",
    "bg-lime-700/20",
    "bg-amber-700/20",
    "bg-emerald-700/20",
    "bg-gray-700/20",
  ];
  if (colors.length === 0) {
    // All colors have been assigned, reset the available colors
    colors.push(...assignedColors);
    assignedColors.length = 0;
  }

  const randomIndex = Math.floor(Math.random() * colors.length);
  const colorClass = colors[randomIndex];

  // Move the assigned color to the assignedColors array
  assignedColors.push(colorClass);
  colors.splice(randomIndex, 1);

  return colorClass;
}

export const copyToClipboard = (text: string) => {
  return new Promise((resolve, reject) => {
    if (navigator?.clipboard) {
      const cb = navigator.clipboard;

      cb.writeText(text).then(resolve).catch(reject);
    } else {
      try {
        const body = document.querySelector("body");

        const textarea = document.createElement("textarea");
        body?.appendChild(textarea);

        textarea.value = text;
        textarea.style.position = `absolute`;
        textarea.style.left = `-9999px`;
        textarea.select();
        document.execCommand("copy");

        body?.removeChild(textarea);

        resolve(text);
      } catch (e) {
        reject(e);
      }
    }
  });
};

export const getAdjacentPosts = (slug: string) => {
  const postIndex = Math.abs(allPosts.findIndex((post) => post?.slug === slug));
  return {
    previous:
      postIndex <= 0
        ? null
        : {
            slug: allPosts[postIndex - 1].slug,
            title: allPosts[postIndex - 1].title,
          },
    next:
      postIndex >= allPosts.length - 1
        ? null
        : {
            slug: allPosts[postIndex + 1].slug,
            title: allPosts[postIndex + 1].title,
          },
  };
};

export const getMostRecentPost = () =>
  allPosts.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)),
  )[0];
