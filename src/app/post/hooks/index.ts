import useSWR from "swr";
import { useLocalStorage } from "@/lib/hooks";
import { fetcher } from "@/lib/utils";
import type { CommentWithUserAndReply } from "@/types";

export const usePostLikes = (slug: string) => {
  // Use the useLocalStorage hook to store the like state in the browser.
  const [isLiked, setLike] = useLocalStorage(slug, false);

  const { data, mutate, isLoading } = useSWR<{ likes: number }>(
    `/post/${slug}/api/likes`,
    fetcher,
  );

  const handleLike = async () => {
    // Only allow liking once.
    if (isLiked) return;

    setLike(true);
    await fetch(`/post/${slug}/api/likes`, { method: "POST" });
    mutate({ likes: data?.likes ?? 0 + 1 });
  };

  return { likes: data?.likes, handleLike, isLoading, isLiked };
};

export const usePostViews = (slug: string) => {
  const { data, error, isLoading } = useSWR<{ views: number }>(
    `/post/${slug}/api/views`,
    fetcher,
    { revalidateOnFocus: false },
  );
  return { views: data?.views, isLoading, error };
};

export const usePostComments = (slug: string) => {
  const { data, isLoading, mutate } = useSWR<{
    commentsCount: number;
    comments: CommentWithUserAndReply[];
  }>(`/post/${slug}/api/comments`, fetcher);
  return {
    commentsCount: data?.commentsCount,
    comments: data?.comments,
    isLoading,
    mutate,
  };
};
