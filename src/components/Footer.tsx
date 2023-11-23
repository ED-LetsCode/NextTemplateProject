import { FC } from "react";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import FooterDropdown from "@/components/FooterDropdown";
import { Icons } from "@/components/Icons";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="mt-20 w-full border-t xl:fixed  xl:bottom-0 xl:left-0 xl:backdrop-blur-2xl ">
      <div className="container flex  w-full  items-center justify-between space-x-2  py-4">
        {/* Initials */}
        <div className="flex items-center justify-between space-x-4 ">
          <FooterDropdown />
          <p className="hidden text-xs lg:block lg:text-xs lg:text-muted-foreground  ">
            © {new Date().getFullYear()} YOURE INITIALS
          </p>
        </div>

        {/* Social Media */}
        <div className="flex items-center justify-between rounded-full border text-muted-foreground ">
          <Button asChild size="icon" variant="ghost" className="rounded-full">
            <Link href="/" target="_blank">
              <Icons.info className="h-5 w-5" />
            </Link>
          </Button>

          <Button asChild size="icon" variant="ghost" className="rounded-full">
            <Link href="mailto:">
              <Icons.mail className="h-5 w-5" />
            </Link>
          </Button>
        </div>

        {/* Other Links */}
        <div className="flex items-center justify-between rounded-full border text-muted-foreground">
          <Button asChild size="icon" variant="ghost" className="rounded-full">
            <Link href="/">
              <Icons.info className="h-5 w-5" />
            </Link>
          </Button>

          <Button asChild size="icon" variant="ghost" className="rounded-full">
            <Link href="/">
              <Icons.info className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
