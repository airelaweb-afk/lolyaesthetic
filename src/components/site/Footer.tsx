import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png.asset.json";
import { siteConfig, disclaimer } from "@/config/site";
import { Hours, ContactInfo, SocialLinks } from "./ContactInfo";
import { BookNowButton } from "./primitives";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary px-5 pb-10 pt-16 sm:px-8">
      <div className="mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-3">
        <div>
          <img src={logo.url} alt="Loly Aesthetic logo" width={180} height={180} loading="lazy" className="h-20 w-auto" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            An aesthetic studio in Houston, TX offering personalized facials, laser hair removal,
            waxing, relaxation therapy, and brightening services.
          </p>
          <div className="mt-6">
            <SocialLinks />
          </div>
        </div>

        <div>
          <h2 className="text-lg">Visit Us</h2>
          <span className="dotted-divider mt-3" aria-hidden="true" />
          <ContactInfo className="mt-5" />
          <nav aria-label="Footer" className="mt-7 flex flex-col gap-2 text-sm">
            <Link to="/about" className="text-muted-foreground transition-colors hover:text-primary">
              About Us
            </Link>
            <Link to="/services" className="text-muted-foreground transition-colors hover:text-primary">
              Services
            </Link>
            <Link to="/contact" className="text-muted-foreground transition-colors hover:text-primary">
              Contact
            </Link>
            <Link to="/privacy-policy" className="text-muted-foreground transition-colors hover:text-primary">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-muted-foreground transition-colors hover:text-primary">
              Terms &amp; Policies
            </Link>
          </nav>
        </div>

        <div>
          <h2 className="text-lg">Hours</h2>
          <span className="dotted-divider mt-3" aria-hidden="true" />
          <Hours className="mt-4" />
          <BookNowButton className="mt-6 w-full" />
        </div>
      </div>

      <div className="mx-auto mt-14 w-full max-w-6xl border-t border-border pt-6">
        <p className="max-w-3xl text-xs leading-relaxed text-muted-foreground">{disclaimer}</p>
        <p className="mt-4 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
