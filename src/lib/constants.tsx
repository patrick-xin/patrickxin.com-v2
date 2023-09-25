import {
  HomeIcon,
  Pencil2Icon,
  KeyboardIcon,
  RocketIcon,
  BookmarkIcon,
  InfoCircledIcon,
} from "@radix-ui/react-icons";

export const PATH = [
  { name: "All", path: undefined, href: "/post" },
  { name: "AI", path: "ai", href: "/category/ai" },
  { name: "Web", path: "web", href: "/category/web" },
];

export const NAGIGATIONS = [
  {
    title: "Home",
    href: "/",
    icon: <HomeIcon className="h-2 w-2" />,
  },
  {
    title: "Posts",
    href: "/post",
    icon: <Pencil2Icon className="h-3 w-3" />,
  },
  {
    title: "Bookmarks",
    href: "/bookmark/web",
    icon: <BookmarkIcon className="h-3 w-3" />,
  },
  {
    title: "About",
    href: "/about",
    icon: <InfoCircledIcon className="h-3 w-3" />,
  },
];

export const CATEGORIES = [
  {
    title: "ALL",
    href: "/post",
    icon: "⚒️",
    path: undefined,
  },
  {
    title: "WEB",
    href: "/post/web",
    icon: <RocketIcon />,
    path: "web",
  },
  {
    title: "AI",
    href: "/post/ai",
    icon: <KeyboardIcon />,
    path: "ai",
  },
];
