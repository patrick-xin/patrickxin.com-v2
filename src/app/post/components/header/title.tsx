import { cn } from "@/lib/utils";

type PostTitleProps = {
  title: string;
  isGradient?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const PostTitle = ({
  title,
  isGradient = true,
  size = "lg",
  className,
}: PostTitleProps) => {
  return (
    <h1
      className={cn("capitalize font-heading tracking-normal", `${className}`, {
        "text-3xl py-4 font-black md:text-5xl xl:leading-14": size === "lg",
        "text-2xl font-bold lg:font-black xl:text-3xl": size === "md",
        "text-lg font-bold xl:text-2xl": size === "sm",
        "text-gradient": isGradient,
      })}
    >
      {title}
    </h1>
  );
};

export default PostTitle;
