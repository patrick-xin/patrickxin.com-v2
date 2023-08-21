import { HeartFilledIcon, VercelLogoIcon } from "@radix-ui/react-icons";

type FooterProps = {
  hasMarginBottom: boolean;
};

const Footer = ({ hasMarginBottom }: FooterProps) => {
  return (
    <footer
      className={`flex items-center justify-center border-t text-xs dark:border-muted-foreground/30 lg:mb-0 lg:text-sm ${
        hasMarginBottom ? "mb-16" : "mb-0"
      } py-4`}
    >
      <div className="items-center gap-2 text-center lg:mr-2 lg:flex">
        <span className="inline-block lg:mb-0">Made with</span>
        <HeartFilledIcon className="mx-1 -mt-0.5 inline-block h-4 w-4 text-red-600" />
      </div>
      <div className="items-center gap-2 text-center lg:mr-2 lg:flex">
        <span className="inline-block lg:mb-0">Powered by Vercel</span>
        <VercelLogoIcon width={50} height={50} className="h-4 w-4" />
      </div>
    </footer>
  );
};

export default Footer;
