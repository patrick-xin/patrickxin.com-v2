import Image from "next/image";
import { allPosts } from "contentlayer/generated";
import PostCategory from "@/components/category";
import Footer from "@/components/footer";
import PageWrapper from "@/components/page-wrapper";
import { absoluteUrl } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import PostItem from "@/components/post/item";
import MainNav from "@/components/nav/main-nav";
import bg from "../../../../public/assets/images/bg-bookmark.jpg";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post.category }));

export const generateMetadata = ({
  params,
}: {
  params: { category: string };
}) => {
  const category = allPosts.find((b) => b.category === params.category)
    ?.category;
  if (!category) {
    return {};
  }
  return {
    title: `${category}`,
    description: `articles about ${category} posts`,
    openGraph: {
      title: category,
      description: `${category} posts`,
      type: "article",
      url: absoluteUrl(`/post/${category}}`),
    },
    twitter: {
      card: "summary_large_image",
      title: category,
      description: `${category} posts}`,
      images: [siteConfig.assets.ogImage],
      creator: "@alpesdream",
    },
  };
};

const Page = ({ params }: { params: { slug: string } }) => {
  const posts = allPosts.filter((p) => {
    return p.category === params.slug;
  });

  return (
    <PageWrapper>
      <MainNav fixed />
      <Image
        src={bg}
        fill
        priority
        className="fixed inset-0 -top-24 -z-10 opacity-20 bg-blend-hue dark:opacity-5"
        alt="background-image"
      />
      <div className="mx-auto my-4 max-w-4xl md:my-6 lg:mb-24 lg:mt-12">
        <PostCategory />
        <section className="grid w-full grid-cols-1 gap-2 md:grid-cols-2 md:gap-8 lg:gap-12">
          {posts.map((post, index) => (
            <PostItem
              key={post.slug}
              post={post}
              noBorder={
                (posts.length % 2 === 1 && index === posts.length - 1) ||
                (posts.length % 2 === 0 &&
                  (index === posts.length - 1 || index === posts.length - 2))
              }
            />
          ))}
        </section>
      </div>
      <Footer />
    </PageWrapper>
  );
};

export default Page;
