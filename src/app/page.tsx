import MainNav from "@/components/nav/main-nav";
import { prisma } from "@/lib/db";
import Footer from "@/components/footer";
import Hero from "@/components/homepage/hero";
import Section from "@/components/homepage/section";
import Publish from "@/components/homepage/publish";
import Learn from "@/components/homepage/Learn";
import Build from "@/components/homepage/Build";

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
    <div>
      <MainNav fixed />
      <Hero />
      <Section
        title="Publish"
        intro="I do my best to journal"
        description="I write about my experiences, my thoughts, and my learnings. I
              write about the things I'm passionate about. I write about
              the things I'm curious about. I write about the things
              I'm learning."
      >
        <Publish posts={posts} />
      </Section>
      <Section
        title="Learn"
        intro="Always stay humble and curious"
        description=" I'm always learning. I'm always trying to improve myself.
            I'm always trying to learn new things. I'm always trying
            to learn new skills. I'm always trying to learn new
            technologies. I'm always trying to learn new ways of thinking."
      >
        <Learn />
      </Section>

      <Section
        title="Build"
        intro="I like to build things using code and technology."
        description="I like to build things using code and technology. I like to build
            things that are useful. I like to build things that are fun."
      >
        <Build />
      </Section>

      <Footer />
    </div>
  );
}
