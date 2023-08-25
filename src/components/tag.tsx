interface TagProps {
  text: string;
}
const Tag = ({ text }: TagProps) => {
  return (
    <div className="mb-2 mr-2 inline-block rounded-full border border-gray-200/5 bg-indigo-500/5 px-3 py-1 text-xs font-semibold">
      {text}
    </div>
  );
};

export default Tag;
