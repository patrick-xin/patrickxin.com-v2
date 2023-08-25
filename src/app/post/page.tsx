import React from "react";

import PostList from "@/app/post/components/list";
import Category from "@/components/category";
import MovingHeader from "@/components/nav/moving-header";

const AllBlogsPage = () => {
  return (
    <>
      <MovingHeader count={320} />
      <div className="mx-auto max-w-4xl">
        <Category />
        <PostList />
      </div>
    </>
  );
};

export default AllBlogsPage;
