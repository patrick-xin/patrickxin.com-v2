import React from "react";

import type { Metadata } from "next";
import PostList from "@/app/post/components/list";
import Category from "@/components/category";
import MovingHeader from "@/components/nav/moving-header";
import Footer from "@/components/footer";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.SITE_URL}`),
  title: {
    default: "Posts",
    template: "%s | Patrick Xin",
  },
  description: siteConfig.description,
  openGraph: {
    title: "Patrick Xin",
    description: siteConfig.description,
    url: `${process.env.SITE_URL}`,
    siteName: "Patrick Xin",
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Patrick Xin",
    card: "summary_large_image",
  },
};

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
