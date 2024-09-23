"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
} from "../components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-5 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>

        <MenuItem setActive={setActive} active={active} item="Photo type">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/nature">Nature</HoveredLink>
            <HoveredLink href="/moutain">Mountain</HoveredLink>
            <HoveredLink href="/river">River</HoveredLink>
            <HoveredLink href="/nature">People</HoveredLink>
          </div>
        </MenuItem>

        <Link href={"/contact"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact Us"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
