const AdminWrapper = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <div className="relative w-full">
      <h2 className="mb-6 text-3xl font-bold">{title}</h2>
      {children}
    </div>
  );
};

export default AdminWrapper;
