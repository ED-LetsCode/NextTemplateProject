import Link from "next/link";

import { Icons } from "@/components/Icons";

import { cn, getPath } from "@/lib/utils";

const links: NavigationMenuItemType[] = [
  {
    icon: <Icons.user className="mr-2 h-5 w-5" />,
    text: "YOUR_TEXT",
    href: getPath("YOUR_PATH/TO/ROUTE"),
  },
  {
    icon: <Icons.sun className="mr-2 h-5 w-5" />,
    text: "YOUR_TEXT",
    href: getPath("YOUR_PATH/TO/ROUTE"),
  },
];

const NavbarItem: React.FC<NavigationMenuItemType> = ({ icon, text, href }) => {
  return (
    <Link
      key={href}
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
        <Link href="/" className="flex items-center space-x-2">
          {/* <Icons.camera className="h-5 w-28" /> */}
          <div className=" font-bold">YOUR_LOGO</div>
        </Link>

        {/* NAVBAR ITEMS */}
        {/* You also can use the component from @/components/ui/NavigationMenu.tsx but this will be rendered in the client */}
        <div className="flex items-center space-x-4">
          {links?.map((item, index) => <NavbarItem key={index} {...item} />)}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
