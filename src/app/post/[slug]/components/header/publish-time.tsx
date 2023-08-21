const PublishTime = ({
  publishedAt,
  className,
}: {
  publishedAt: string;
  className?: string;
}) => {
  return (
    <span className={className || "text-xs tracking-normal lg:text-sm"}>
      {publishedAt}
    </span>
  );
};

export default PublishTime;
