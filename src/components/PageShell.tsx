import { Link } from "@tanstack/react-router";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <nav className="sticky top-0 z-10 border-b border-border/60 bg-background/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <Link to="/" className="flex items-center gap-2 text-lg font-bold">
            <span className="rainbow-text">✦ Persona</span>
          </Link>
          <div className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <Link to="/" className="transition hover:text-foreground" activeOptions={{ exact: true }} activeProps={{ className: "text-foreground" }}>Home</Link>
            <Link to="/test" className="transition hover:text-foreground" activeProps={{ className: "text-foreground" }}>Test</Link>
            <a href="#about" className="transition hover:text-foreground">About</a>
            <a href="#contact" className="transition hover:text-foreground">Contact</a>
          </div>
        </div>
      </nav>
      <div className="flex-1">{children}</div>
      <footer id="contact" className="mt-12 border-t border-border/60 bg-background/60">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} <span className="rainbow-text font-semibold">Persona</span>. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
