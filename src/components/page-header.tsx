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
    <div className={`${className || ""}`}>
      <div className="flex items-center gap-4">
        <div className="h-2 w-2 animate-pulse rounded-full bg-foreground dark:bg-muted-foreground" />
        <h1 className="my-6 text-center font-heading text-xl font-black capitalize lg:text-4xl">
          <span className="inline-block">{titleInfo}</span>
          <span className="ml-2 inline-block">{titleInfoMain}</span>
        </h1>
      </div>
    </div>
  );
};

export default PageHeader;
