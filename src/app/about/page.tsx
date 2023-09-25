import { ChatBubbleIcon, EyeOpenIcon, HeartIcon } from "@radix-ui/react-icons";
import { getSiteStats } from "@/lib/getSiteStats";
import PageWrapper from "@/components/page-wrapper";
import MainNav from "@/components/nav/main-nav";

const AboutPage = async () => {
  const data = await getSiteStats();

  return (
    <PageWrapper>
      <MainNav fixed />
      <div className="mx-auto max-w-3xl space-y-12">
        <section className="space-y-6">
          <h1 className="my-10 text-2xl font-black lg:text-5xl">About Me</h1>
          <p>
            Hello, I&apos;m Patrick Xin. I&apos;m passionate about creating
            beautiful, user-friendly websites. I love sharing my knowledge about
            web development as well we building intresting web apps. My
            favourite tech stack is NextJS, TailwindCSS, Prisma, GraphQL.
          </p>
          <p>
            This website is a continuous working project and completely
            open-source on Github, source code can be found{" "}
            <a
              className="underline decoration-primary underline-offset-2"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/patrick-xin/patrickxin.com"
            >
              here
            </a>
            .
          </p>
        </section>
        <div>
          <div className="my-6">Here is a glance of my site stats so far.</div>
          <section className="grid max-w-3xl grid-cols-1 gap-4 lg:grid-cols-3">
            <div className="flex flex-col items-center justify-center space-y-3 rounded bg-primary/5 p-4">
              <h5>Total Views</h5>
              <div className="flex items-center gap-2">
                <EyeOpenIcon className="h-4 w-4 text-indigo-500" />
                <span className="font-code">{data.viewsCount}</span>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-3 rounded bg-primary/5 p-4">
              <h5>Total Likes</h5>
              <div className="flex items-center gap-2">
                <HeartIcon className="h-4 w-4 text-red-500" />
                <span className="font-code">{data.likesCount}</span>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-3 rounded bg-primary/5 p-4">
              <h5>Total Comments</h5>
              <div className="flex items-center gap-2">
                <ChatBubbleIcon className="h-4 w-4 text-green-500" />
                <span className="font-code">{data.commentsCount}</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </PageWrapper>
  );
};

export default AboutPage;
