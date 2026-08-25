import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import { siteConfig } from "@/config/site";
import { BookNowButton } from "./primitives";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <Link to="/" className="flex shrink-0 items-center" aria-label="Loly Aesthetic — home">
          <img
            src={logo.url}
            alt="Loly Aesthetic logo"
            width={168}
            height={168}
            className="h-12 w-auto sm:h-14"
          />
        </Link>

        <nav aria-label="Main" className="hidden flex-1 items-center justify-center gap-9 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-primary" }}
              className="text-[0.72rem] font-medium uppercase tracking-[0.2em] text-foreground/75 transition-colors hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-5">
          <a
            href={siteConfig.phoneHref}
            className="hidden items-center gap-2 text-[0.8rem] text-muted-foreground transition-colors hover:text-primary xl:inline-flex"
          >
            <Phone className="size-4 shrink-0" aria-hidden="true" />
            <span>{siteConfig.phone}</span>
          </a>
          <BookNowButton className="hidden px-6 py-3 sm:inline-flex" />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-11 items-center justify-center rounded-sm text-foreground lg:hidden"
          >
            {open ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-border bg-background lg:hidden">
          <nav aria-label="Mobile" className="mx-auto flex max-w-6xl flex-col px-5 py-4 sm:px-8">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-primary" }}
                className="border-b border-border/60 py-4 text-sm uppercase tracking-[0.16em] text-foreground/85"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={siteConfig.phoneHref}
              className="flex items-center gap-2 border-b border-border/60 py-4 text-sm text-muted-foreground"
            >
              <Phone className="size-4" aria-hidden="true" /> {siteConfig.phone}
            </a>
            <BookNowButton className="mt-5 w-full" />
          </nav>
        </div>
      ) : null}
    </header>
  );
}
