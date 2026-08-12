import { Link, useLocation, useRoute } from "wouter";

export function Navbar() {
  const [isHome] = useRoute("/");
  const [isAbout] = useRoute("/about");
  const [isBlog] = useRoute("/blog/:slug");
  const isWriting = isBlog || (!isHome && !isAbout); // fallback active state
  const [, setLocation] = useLocation();

  const goToWriting = (e: React.MouseEvent) => {
    e.preventDefault();
    const scroll = () =>
      document.getElementById("writing")?.scrollIntoView({ behavior: "smooth", block: "start" });
    if (isHome) {
      scroll();
    } else {
      setLocation("/");
      // wait for Home to render before scrolling
      setTimeout(scroll, 50);
    }
  };
  
  return (
    <nav className="w-full px-6 py-8 sm:px-12 sm:py-12 flex items-center justify-between max-w-4xl mx-auto">
      <Link 
        href="/" 
        className="group flex items-center gap-3 text-lg font-bold tracking-tight text-foreground transition-transform hover:-translate-y-0.5"
        data-testid="nav-logo"
      >
        <div className="w-4 h-4 bg-coral rounded-full group-hover:scale-110 transition-transform" />
        Josh.
      </Link>

      <div className="flex items-center gap-6 sm:gap-8 text-[15px] font-semibold">
        <Link 
          href="/" 
          className={`relative py-1 transition-colors hover:text-azure ${
            isHome ? "text-azure" : "text-foreground"
          }`}
          data-testid="nav-link-home"
        >
          Home
          {isHome && <div className="absolute -bottom-1 left-0 right-0 h-1 bg-azure rounded-full" />}
        </Link>
        <a
          href="#writing"
          onClick={goToWriting}
          className={`relative py-1 transition-colors hover:text-lavender ${
            isWriting && !isHome ? "text-lavender" : "text-foreground"
          }`}
          data-testid="nav-link-writing"
        >
          Writing
          {isWriting && !isHome && <div className="absolute -bottom-1 left-0 right-0 h-1 bg-lavender rounded-full" />}
        </a>
        <Link 
          href="/about" 
          className={`relative py-1 transition-colors hover:text-mint ${
            isAbout ? "text-mint" : "text-foreground"
          }`}
          data-testid="nav-link-about"
        >
          About
          {isAbout && <div className="absolute -bottom-1 left-0 right-0 h-1 bg-mint rounded-full" />}
        </Link>
      </div>
    </nav>
  );
}
