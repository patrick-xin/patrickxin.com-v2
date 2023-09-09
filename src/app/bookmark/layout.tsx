import MainNav from "@/components/nav/main-nav";
import BookmarkSidebar from "./_components/sidebar";

export default function BookmarkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MainNav fixed />
      <div className="relative mx-auto my-8 max-w-5xl grid-cols-6 gap-4 md:my-10 lg:grid lg:gap-8 xl:gap-12">
        <BookmarkSidebar />
        {children}
      </div>
    </>
  );
}
