interface TagProps {
  text: string;
}
const Tag = ({ text }: TagProps) => {
  return (
    <div className="mb-2 mr-2 inline-block rounded-full bg-indigo-500/40 px-3 py-1 text-sm font-semibold">
      {text}
    </div>
  );
};

export default Tag;
