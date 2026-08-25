import { Link } from "@tanstack/react-router";
import { Section, SectionHeading, BookNowButton, ExternalButton } from "./primitives";
import { siteConfig } from "@/config/site";

export function BookingCta() {
  return (
    <Section tone="sage">
      <SectionHeading
        eyebrow="Booking"
        title="Find Your Moment"
        description="Your time, your terms. Secure your spot in just a few clicks and experience it for yourself."
        invert
      />
      <div className="mt-9 flex justify-center">
        <BookNowButton variant="light" />
      </div>
    </Section>
  );
}

export function Testimonial() {
  return (
    <Section tone="white">
      <SectionHeading eyebrow="Kind Words" title="What Our Clients Say" />
      <figure className="mx-auto mt-12 max-w-2xl text-center">
        <blockquote className="font-[family-name:var(--font-serif-display)] text-2xl leading-relaxed text-foreground sm:text-[1.75rem]">
          “Loly Aesthetic has a beautiful space. I felt relaxed and comfortable. Dolores Hechavarria
          Moraga did an excellent job explaining the service and performing the facial.”
        </blockquote>
        <figcaption className="mt-6 text-[0.78rem] uppercase tracking-[0.2em] text-muted-foreground">
          — Jeff M
        </figcaption>
      </figure>
      {siteConfig.reviewsUrl ? (
        <div className="mt-10 flex justify-center">
          <ExternalButton href={siteConfig.reviewsUrl} label="Read More Reviews" />
        </div>
      ) : (
        <p className="mt-10 text-center text-xs text-muted-foreground">
          A “Read More Reviews” link can be enabled once a review-platform URL is configured.
        </p>
      )}
    </Section>
  );
}

export function DisclaimerNote({ text }: { text: string }) {
  return (
    <p className="mx-auto max-w-3xl text-center text-xs leading-relaxed text-muted-foreground">
      {text}
    </p>
  );
}

export function AboutTeamLink() {
  return (
    <Link
      to="/about"
      className="inline-flex min-h-11 items-center justify-center rounded-sm border border-primary px-7 py-3.5 text-[0.78rem] font-medium uppercase tracking-[0.18em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
    >
      About Our Team
    </Link>
  );
}

export function InternalButton({
  to,
  label,
  variant = "outline",
}: {
  to: "/" | "/about" | "/services" | "/contact";
  label: string;
  variant?: "outline" | "solid";
}) {
  const cls =
    variant === "solid"
      ? "bg-primary text-primary-foreground hover:bg-accent"
      : "border border-foreground/25 text-foreground hover:border-primary hover:text-primary";
  return (
    <Link
      to={to}
      className={`inline-flex min-h-11 items-center justify-center rounded-sm px-7 py-3.5 text-[0.78rem] font-medium uppercase tracking-[0.18em] transition-colors ${cls}`}
    >
      {label}
    </Link>
  );
}
