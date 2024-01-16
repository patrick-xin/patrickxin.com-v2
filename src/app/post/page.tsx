import React from "react";

import type { Metadata } from "next";
import Image from "next/image";
import Category from "@/components/category";
import Footer from "@/components/footer";
import { siteConfig } from "@/config/site";
import PageWrapper from "@/components/page-wrapper";
import PostList from "@/components/post/list";
import MainNav from "@/components/nav/main-nav";
import bg from "../../../public/assets/images/bg-post.jpg";

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
    <PageWrapper>
      <MainNav fixed />
      <Image
        src={bg}
        fill
        priority
        className="fixed inset-0 -top-24 -z-10 opacity-20 bg-blend-darken dark:opacity-5"
        alt="background-image"
      />
      <div className="mx-auto my-4 max-w-4xl md:my-6 lg:mb-24 lg:mt-12">
        <Category />
        <PostList />
      </div>
      <Footer />
    </PageWrapper>
  );
};

export default AllBlogsPage;
