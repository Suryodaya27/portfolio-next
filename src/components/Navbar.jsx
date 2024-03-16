"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
// import { Icons } from "@/components/icons"
// import { Badge } from "@/registry/new-york/ui/badge"

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div>
      <div className="py-3 md:py-3 md:my-2 md:px-20 flex flex-row gap-5 justify-between">
        <Link
          href="/"
          className=" flex items-center space-x-2 font-medium text-xl"
        >
          Suryodaya
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          {/* <Link
            href="/"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname === "/"
                ? "text-foreground px-4 py-2 bg-blue-300 rounded-md"
                : "text-foreground/60"
            )}
          >
            Home
          </Link> */}
          <Link
            href="/about"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname === "/about"
                ? "text-foreground px-4 py-2 bg-blue-300 rounded-md"
                : "text-foreground/30"
            )}
          >
            About
          </Link>
          <Link
            href="/projects"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname === "/projects"
                ? "text-foreground px-4 py-2 bg-blue-300 rounded-md"
                : "text-foreground/60"
            )}
          >
            Projects
          </Link>
        </nav>
        <div>
          <Button
            variant="outline"
            size="sm"
            // onclicking button link to drive link for resume on new window like href
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1_rJuBA8_HxgzvyXhOHiKajsB4JFAb8Im/view?usp=drive_link"
              )
            }
          >
            Resume
          </Button>
        </div>
      </div>
      <div>
        <Separator />
      </div>
    </div>
  );
}
