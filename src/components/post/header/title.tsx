import { cn } from "@/lib/utils";

type PostTitleProps = {
  title: string;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const PostTitle = ({ title, size = "lg", className }: PostTitleProps) => {
  return (
    <div
      className={cn("capitalize font-heading tracking-normal", `${className}`, {
        "text-3xl py-4 font-black md:text-5xl xl:leading-14": size === "lg",
        "text-2xl font-bold lg:font-black xl:text-3xl": size === "md",
        "text-lg font-bold xl:text-2xl": size === "sm",
      })}
    >
      {title}
    </div>
  );
};

export default PostTitle;
