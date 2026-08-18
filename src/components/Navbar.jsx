"use client";

import Link from "next/link";

export default function Navbar() {
  const links = [
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6">
        <Link href="/" className="group flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-foreground">
          <span className="inline-block h-2 w-2 rounded-full bg-warm transition-transform group-hover:scale-125" />
          SP
        </Link>

        <nav className="flex items-center gap-6 sm:gap-8">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="relative text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-warm after:transition-all hover:after:w-full"
            >
              {label}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1_rJuBA8_HxgzvyXhOHiKajsB4JFAb8Im/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block rounded-sm border border-foreground/20 px-4 py-1.5 text-sm tracking-wide text-foreground transition-all hover:border-warm hover:text-warm"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
