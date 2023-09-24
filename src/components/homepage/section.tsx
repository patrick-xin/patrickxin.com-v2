type SectionProps = {
  title: string;
  intro: string;
  description: string;
  children: React.ReactNode;
};

const Section = ({ title, intro, description, children }: SectionProps) => {
  return (
    <div className="mx-auto min-h-[50vh] max-w-4xl">
      <div className="flex flex-col items-center justify-center">
        <div className="vertical-divider-light dark:vertical-divider" />
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary shadow-lightGlow dark:shadow-darkGlow" />
      </div>
      <div>
        <div className="mt-6 text-center">
          <div className="text-2xl font-black text-primary lg:text-4xl">
            {title}
          </div>
          <div className="my-6 text-4xl font-black lg:text-6xl">{intro}</div>
          <p className="my-8 text-muted-foreground">{description}</p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Section;
