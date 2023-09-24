import { HeartFilledIcon, VercelLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative mt-40 flex h-36 justify-center border-t border-border/20 text-xs dark:border-muted-foreground/30 lg:h-48 lg:text-sm">
      <div className="mt-6 flex w-full max-w-4xl flex-col justify-between">
        <div className="flex justify-around lg:mt-2">
          <div className="flex flex-col gap-1 md:gap-3">
            <div className="font-semibold">Navigation</div>
            <div>
              <Link
                href="/"
                className="text-muted-foreground transition-colors ease-linear hover:text-primary"
              >
                Home
              </Link>
            </div>
            <div>
              <Link
                href="/about"
                className="text-muted-foreground transition-colors ease-linear hover:text-primary"
              >
                About
              </Link>
            </div>
            <div>
              <Link
                href="/post"
                className="text-muted-foreground transition-colors ease-linear hover:text-primary"
              >
                Post
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-1 md:gap-3">
            <div className="font-semibold">Contact</div>
            <div>
              <a
                href="/newsletter"
                className="text-muted-foreground transition-colors ease-linear hover:text-primary"
              >
                Twitter
              </a>
            </div>
            <div>
              <a
                href="/newsletter"
                className="text-muted-foreground transition-colors ease-linear hover:text-primary"
              >
                Github
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-1 md:gap-3 lg:gap-4">
            <div className="font-semibold"> </div>
            <div>
              <a
                target="_blank"
                href={`${process.env.SITE_URL}sitemap.xml`}
                className="text-muted-foreground transition-colors ease-linear hover:text-primary"
              >
                RSS
              </a>
            </div>
            <div>
              <Link
                href="/newsletter"
                className="text-muted-foreground transition-colors ease-linear hover:text-primary"
              >
                News Letter
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4 text-xs">
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
