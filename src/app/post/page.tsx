import React from "react";

import PostList from "@/app/post/components/list";
import Category from "@/components/category";
import MovingHeader from "@/components/nav/moving-header";
import Footer from "@/components/footer";

const AllBlogsPage = () => {
  return (
    <>
      <MovingHeader count={320} />
      <div className="mx-auto my-4 max-w-4xl md:my-6 lg:mb-24 lg:mt-12">
        <Category />
        <PostList />
      </div>
      <Footer />
    </>
  );
};

export default AllBlogsPage;
