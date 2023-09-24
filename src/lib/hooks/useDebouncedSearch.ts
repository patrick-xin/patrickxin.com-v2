import { useState, useEffect } from "react";
import useDebounce from "./useDebounce";
import { CATEGORIES, NAGIGATIONS } from "../constants";
import { capitalizeFirstLetter } from "../utils";

type PostType = { title: string; slug: string };

interface UseDebouncedSearchOptions {
  debounceTime?: number;
  initialSearch?: string;
}

const nonApiTriggerTerms = [
  ...NAGIGATIONS.map((nav) => nav.title.toLowerCase()),
  ...CATEGORIES.map((cat) => cat.title.toLowerCase()),
  "light",
  "dark",
  "system",
  "logout",
];

const useDebouncedSearch = ({
  debounceTime = 1000,
  initialSearch = "",
}: UseDebouncedSearchOptions = {}) => {
  const [search, setSearch] = useState(initialSearch);
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loading, setLoading] = useState(false);
  const debouncedSearch = useDebounce<string>(
    search.toLowerCase(),
    debounceTime,
  );
  const fetchPosts = async () => {
    const res = await fetch(`/api/search?`, {
      body: JSON.stringify({ search: debouncedSearch }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result: { posts: { slug: string }[] } = await res.json();

    const data = result.posts.map((post) => ({
      title: capitalizeFirstLetter(post.slug.split("-").join(" ")),
      slug: post.slug,
    }));
    setPosts(data);
    setLoading(false);
  };
  useEffect(() => {
    if (debouncedSearch) {
      fetchPosts();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch]);

  const doesInputMatchAnyTitle = (input: string) => {
    return nonApiTriggerTerms.some((term) =>
      input.toLowerCase().includes(term),
    );
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setSearch(newValue);

    // Check if input doesn't match any title in NAVIGATIONS and CATEGORIES
    if (!doesInputMatchAnyTitle(newValue) && newValue.length > search.length) {
      setLoading(true);
    }
  };

  return {
    search,
    posts,
    loading,
    handleInputChange,
  };
};

export default useDebouncedSearch;
