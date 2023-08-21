import { ChatBubbleIcon, EyeOpenIcon, HeartIcon } from "@radix-ui/react-icons";
import { prisma } from "@/lib/db";
import StatisticsCard from "./_components/stats-card";
import AddPost from "./_components/add-post";

const getData = async () => {
  const data = await prisma.post.findMany({
    select: {
      _count: {
        select: {
          comments: true,
        },
      },
      like_count: true,
      view_count: true,
      slug: true,
      comments: {
        select: {
          createdAt: true,
        },
      },
    },
  });

  const posts = data.map((post) => ({
    slug: post.slug,
    views: post.view_count,
    likes: post.like_count,
    comments_count: post._count?.comments,
  }));

  const result = posts.reduce(
    (a, b) => ({
      viewsCount: a.viewsCount + b.views,
      likesCount: a.likesCount + b.likes,
      commentsCount: a.commentsCount + b.comments_count,
    }),
    { viewsCount: 0, likesCount: 0, commentsCount: 0 },
  );

  return result;
};

const Page = async () => {
  const data = await getData();

  return (
    <div className="relative mx-auto flex max-w-5xl flex-col justify-center">
      <AddPost />
      <h2 className="mb-12 text-3xl font-bold">Dashboard</h2>
      <section className="mt-20 flex flex-wrap items-center gap-6">
        <StatisticsCard
          count={data.commentsCount}
          icon={<EyeOpenIcon />}
          iconBg="bg-site"
          title="Comments"
        />
        <StatisticsCard
          count={data.likesCount}
          icon={<HeartIcon />}
          iconBg="bg-red-500"
          title="Likes"
        />
        <StatisticsCard
          count={data.viewsCount}
          icon={<ChatBubbleIcon />}
          iconBg="bg-purple-500"
          title="Views"
        />
      </section>
    </div>
  );
};

export default Page;
