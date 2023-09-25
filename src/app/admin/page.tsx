import { ChatBubbleIcon, EyeOpenIcon, HeartIcon } from "@radix-ui/react-icons";
import { getSiteStats } from "@/lib/getSiteStats";
import StatisticsCard from "./_components/stats-card";
import AddPost from "./_components/add-post";
import AdminWrapper from "./_components/wrapper";
import AddEmbeddings from "./_components/add-embeddings";

const Page = async () => {
  const data = await getSiteStats();

  return (
    <AdminWrapper title="Dashboard">
      <AddPost />
      <AddEmbeddings />
      <section className="mt-6 flex flex-wrap items-center gap-6">
        <StatisticsCard
          count={data.commentsCount}
          icon={<EyeOpenIcon />}
          iconBg="bg-primary/50"
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
    </AdminWrapper>
  );
};

export default Page;
