import { allPosts } from "contentlayer/generated";
import { BOOKMARKS_AI, BOOKMARKS_WEB } from "./bookmark/data";

export default async function sitemap() {
  const posts = allPosts.map((post) => ({
    url: `${process.env.SITE_URL}post/${post.category}/${post.slug}`,
    lastModified: post.publishedAt,
  }));
  const bookmarks = [...BOOKMARKS_WEB, ...BOOKMARKS_AI].map((bookmark) => ({
    url: `${process.env.SITE_URL}bookmark/${bookmark.category}/${bookmark.slug}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));
  const routes = ["", "post", "about"].map((route) => ({
    url: `${process.env.SITE_URL}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...posts, ...bookmarks];
}
