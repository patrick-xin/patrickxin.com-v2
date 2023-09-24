import Link from "next/link";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import MainNav from "@/components/nav/main-nav";
import { prisma } from "@/lib/db";
import Footer from "@/components/footer";
import GradiantLink from "@/components/gradiant-link";
import Hero from "../components/homepage/hero";
import Section from "../components/homepage/section";
import PostTitle from "./post/components/header/title";
import bg from "../../public/assets/images/dark-bg.avif";

const getPosts = async () => {
  const data = await prisma.post.findMany({
    orderBy: {
      view_count: "desc",
    },
    take: 3,
    select: {
      slug: true,
    },
  });
  const posts = data.map((post) => ({
    slug: post.slug,
    title: post.slug.split("-").join(" "),
  }));
  return posts;
};

export default async function Home() {
  const posts = await getPosts();
  return (
    <div className="relative -mt-20">
      <MainNav fixed />
      <Hero />
      <Image
        src={bg}
        fill
        priority
        className="fixed inset-0 -top-24 -z-10 opacity-20 bg-blend-darken dark:opacity-10"
        alt="background-image"
      />

      <div className="lg:space-y-24">
        <Section
          title="Publish"
          intro="I do my best to journal"
          description="I write about my experiences, my thoughts, and my learnings. I
              write about the things I'm passionate about. I write about
              the things I'm curious about. I write about the things
              I'm learning."
        >
          <div className="mx-auto max-w-2xl lg:mt-14">
            <div className="my-4 w-full text-sm text-muted-foreground lg:text-lg">
              Latest Posts
            </div>
            <div className="flex flex-col justify-center space-y-2 lg:space-y-6">
              {posts.map((post) => (
                <Link
                  href={`/post/${post.slug}`}
                  key={post.slug}
                  className="group inline-flex items-center justify-between decoration-primary/10 underline-offset-4 hover:underline"
                >
                  <PostTitle
                    className="text-left font-semibold text-indigo-400 transition-all ease-linear group-hover:underline group-hover:underline-offset-2"
                    title={post.title}
                    size="sm"
                    isGradient={false}
                  />
                  <ArrowTopRightIcon className="h-4 w-4 group-hover:text-primary" />
                </Link>
              ))}
            </div>
            <div className="mx-auto mt-8 flex justify-center lg:justify-start">
              <GradiantLink href="/post" isActive name="All posts" center />
            </div>
          </div>
        </Section>
        <Section
          title="Learn"
          intro="Always stay humble and curious"
          description=" I'm always learning. I'm always trying to improve myself.
            I'm always trying to learn new things. I'm always trying
            to learn new skills. I'm always trying to learn new
            technologies. I'm always trying to learn new ways of thinking."
        >
          <div className="mx-auto mt-8 flex justify-center">
            <GradiantLink
              href="/bookmark"
              isActive
              name="View collections"
              center
            />
          </div>
        </Section>
        <Section
          title="Build"
          intro="I like to build things using code and technology."
          description="I like to build things using code and technology. I like to build
            things that are useful. I like to build things that are fun."
        >
          <div className="mx-auto mt-8 flex justify-center">
            <GradiantLink href="/post" isActive name="View projects" center />
          </div>
        </Section>
      </div>

      <Footer />
    </div>
  );
}
