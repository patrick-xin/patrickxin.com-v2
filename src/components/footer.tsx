import { HeartFilledIcon, VercelLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

type FooterProps = {
  hasMarginBottom: boolean;
};

const Footer = ({ hasMarginBottom }: FooterProps) => {
  return (
    <footer
      className={`flex h-36 justify-center border-t text-xs dark:border-muted-foreground/30 lg:mb-0 lg:h-48 lg:text-sm ${
        hasMarginBottom ? "mb-16" : "mb-0"
      } py-4`}
    >
      <div className="flex w-full max-w-4xl flex-col justify-between">
        <div className="flex justify-around lg:mt-2">
          <div className="flex flex-col gap-1 md:gap-3 lg:gap-4">
            <div>
              <Link href="/">Home</Link>
            </div>
            <div>
              <Link href="/about">About</Link>
            </div>
            <div>
              <Link href="/post">Post</Link>
            </div>
          </div>
          <div className="flex flex-col gap-1 md:gap-3 lg:gap-4">
            <div>
              <a href="/newsletter">Twitter</a>
            </div>
            <div>
              <a href="/newsletter">Github</a>
            </div>
          </div>
          <div className="flex flex-col gap-1 md:gap-3 lg:gap-4">
            <div>
              <a href="/newsletter">RSS</a>
            </div>
            <div>
              <Link href="/newsletter">News Letter</Link>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <div className="flex items-center">
            <span className="inline-block lg:mb-0">Made with</span>
            <HeartFilledIcon className="mx-1 -mt-0.5 inline-block h-4 w-4 text-red-600" />
          </div>
          <div className="flex items-center">
            <span className="inline-block">Powered by Vercel</span>
            <VercelLogoIcon className="mx-1 -mt-0.5 inline-block h-4 w-4" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
