export default function Footer() {
  return (
    <footer className="border-t border-border/50 py-8">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 text-xs text-muted-foreground">
        <span>&copy; {new Date().getFullYear()} Suryodaya Pandey</span>
        <span>Built with Next.js</span>
      </div>
    </footer>
  );
}
