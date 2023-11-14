import Link from "next/link";

import { Icons } from "@/components/Icons";
import { ThemeToggle } from "@/components/ThemeToggle";

import { cn, getPath } from "@/lib/utils";

import NavbarDropdown from "./NavbarDropdown";

const links: NavigationMenuItemType[] = [
  {
    icon: <Icons.user className="mr-2 h-5 w-5" />,
    text: "YOURE_LINK",
    href: getPath("YOUR_PATH/TO/ROUTE"),
  },
  {
    icon: <Icons.sun className="mr-2 h-5 w-5" />,
    text: "YOURE_LINK",
    href: getPath("YOUR_PATH/TO/ROUTE"),
  },
];

export const NavbarItem: React.FC<NavigationMenuItemType> = ({
  icon,
  text,
  href,
}) => {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
      )}
    >
      {icon}
      {text}
    </Link>
  );
};

const Navbar = async () => {
  return (
    <nav className="flex h-14 w-full items-center border py-2">
      <div className="container mx-auto flex items-center justify-between">
        {/* LOGO */}
        <Link href={getPath("")} className="flex items-center space-x-2">
          <div className=" font-bold">YOUR_LOGO</div>
        </Link>

        {/* NAVBAR ITEMS */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex md:items-center md:space-x-4">
            {links?.map((item, index) => <NavbarItem key={index} {...item} />)}
            <ThemeToggle />
          </div>

          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <NavbarDropdown links={links} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
