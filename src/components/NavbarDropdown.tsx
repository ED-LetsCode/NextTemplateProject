"use client";

import { FC } from "react";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icons } from "@/components/Icons";

interface NavbarDropdownProps {
  links: NavigationMenuItemType[];
}

const NavbarDropdown: FC<NavbarDropdownProps> = ({ links }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Icons.menu className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {links?.map((link, index) => (
          <DropdownMenuItem key={index + link.href}>
            <Link href={link.href} className="flex items-center">
              <span className="mr-2 h-4 w-4">{link.icon}</span>
              <span>{link.text}</span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavbarDropdown;
