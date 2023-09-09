import CategoryTabs from "./tabs";

const BookmarkSidebar = () => {
  return (
    <div className="top-32 mb-10 h-[120px] pb-4 lg:sticky lg:mb-0 lg:border-b lg:border-none lg:border-border/10 lg:pb-0">
      <h3 className="p-4 pt-0 text-4xl font-bold lg:mb-0 lg:hidden">
        Bookmarks
      </h3>

      <CategoryTabs />
    </div>
  );
};

export default BookmarkSidebar;
