import { Sidebar } from "./_components/sidebar";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-6">
      <Sidebar />
      <div className="w-full">{children}</div>
    </div>
  );
}
