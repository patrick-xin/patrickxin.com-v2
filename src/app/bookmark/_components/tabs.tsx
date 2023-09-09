"use client";

import {
  BackpackIcon,
  FileIcon,
  LightningBoltIcon,
  MagicWandIcon,
  RadiobuttonIcon,
  ReaderIcon,
  ScissorsIcon,
  StarFilledIcon,
  VideoIcon,
} from "@radix-ui/react-icons";
import { usePathname, useRouter } from "next/navigation";

import GradiantLink from "@/components/gradiant-link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BOOKMARKS_AI, BOOKMARKS_WEB } from "../data";

const CategoryTabs = () => {
  const renderIcon = (name: string) => {
    switch (name) {
      case "all":
        return <FileIcon />;
      case "articles":
        return <ReaderIcon />;
      case "inspirations":
        return <StarFilledIcon />;
      case "resources":
        return <BackpackIcon />;
      case "tools":
        return <ScissorsIcon />;
      case "videos":
        return <VideoIcon />;
      case "prompting":
        return <LightningBoltIcon />;
      case "text-to-image":
        return <MagicWandIcon />;
      case "podcasts":
        return <RadiobuttonIcon />;
      default:
        return <FileIcon />;
    }
  };
  const pathname = usePathname();
  const defaultTab = pathname.split("/")[2];

  const segment = pathname.split("/")[3];
  const router = useRouter();
  return (
    <Tabs defaultValue={defaultTab}>
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger onClick={() => router.push("/bookmark/web")} value="web">
          Web
        </TabsTrigger>
        <TabsTrigger onClick={() => router.push("/bookmark/ai")} value="ai">
          AI
        </TabsTrigger>
      </TabsList>
      <TabsContent value="web">
        <div className="my-4 flex flex-wrap gap-2 lg:my-10 lg:flex-col lg:gap-4">
          {BOOKMARKS_WEB.map(({ name, href, slug }) => (
            <div key={name} className="lg:w-full">
              <GradiantLink
                center={false}
                href={href}
                isActive={
                  (segment === undefined &&
                    name.toLocaleLowerCase() === "all") ||
                  segment === slug
                }
                name={name}
                icon={renderIcon(slug)}
                fullWith
              />
            </div>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="ai">
        <div className="my-4 flex flex-wrap gap-2 lg:my-10 lg:flex-col lg:gap-4">
          {BOOKMARKS_AI.map(({ name, href, slug }) => (
            <div key={name} className="lg:w-full">
              <GradiantLink
                center={false}
                href={href}
                isActive={
                  (segment === undefined &&
                    name.toLocaleLowerCase() === "all") ||
                  segment === slug
                }
                name={name}
                icon={renderIcon(slug)}
                fullWith
              />
            </div>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default CategoryTabs;
