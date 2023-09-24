import { Sidebar } from "./_components/sidebar";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto grid grid-cols-6">
      <Sidebar />
      <div className="col-span-full col-start-2 mx-auto max-w-4xl">
        {children}
      </div>
    </div>
  );
}
