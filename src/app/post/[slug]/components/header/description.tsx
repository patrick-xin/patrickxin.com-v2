const Description = ({ description }: { description: string }) => {
  return (
    <p
      className="my-6 border-y border-black/10
      p-4 text-base italic opacity-75 dark:border-white/30 lg:py-10 lg:text-xl"
    >
      {description}
    </p>
  );
};

export default Description;
