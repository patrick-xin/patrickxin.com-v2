import { cn } from "@/lib/utils";

type PageHeaderProps = {
  titleInfo: string;
  titleInfoMain: string;
  className?: string;
};

const PageHeader = ({
  titleInfo,
  titleInfoMain,
  className,
}: PageHeaderProps) => {
  return (
    <div className={cn("my-8", `${className}`)}>
      <div className="flex items-center gap-4">
        <div className="h-2 w-2 animate-pulse rounded-full bg-foreground dark:bg-muted-foreground" />
        <h1 className="my-6 text-left font-heading text-xl font-black uppercase tracking-widest lg:text-5xl">
          <span className="inline-block">{titleInfo}</span>
          <span className="text-gradient ml-2 inline-block">
            {titleInfoMain}
          </span>
        </h1>
      </div>
    </div>
  );
};

export default PageHeader;
