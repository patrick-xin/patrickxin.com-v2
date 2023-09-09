import { Sidebar } from "./_components/sidebar";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-6">
      <Sidebar />
      <div className="col-span-full col-start-2 mx-auto max-w-5xl">
        {children}
      </div>
    </div>
  );
}
