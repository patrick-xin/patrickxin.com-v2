import { ChatBubbleIcon, DotsHorizontalIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { usePostComments } from "../../hooks";

const PostCommentStats = ({
  slug,
  category,
}: {
  slug: string;
  category: string;
}) => {
  const { commentsCount, isLoading } = usePostComments(slug);
  const router = useRouter();

  return (
    <div>
      {isLoading ? (
        <DotsHorizontalIcon className="mx-1 h-3 w-3 animate-ping" />
      ) : (
        <div className="flex items-center gap-1">
          <Button
            onClick={() => router.push(`/post/${category}/${slug}#comment`)}
            variant="secondary"
            size="icon"
            className="cursor-default"
          >
            <ChatBubbleIcon className="h-4 w-4 cursor-pointer text-green-500" />
          </Button>
          <div className="font-heading text-xs lg:text-sm">{commentsCount}</div>
        </div>
      )}
    </div>
  );
};

export default PostCommentStats;
