import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

export function Section({
  children,
  className,
  id,
  tone = "default",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "default" | "muted" | "sage" | "white";
}) {
  const tones = {
    default: "bg-background",
    muted: "bg-secondary",
    white: "bg-card",
    sage: "bg-primary text-primary-foreground",
  } as const;
  return (
    <section id={id} className={cn("px-5 py-16 sm:px-8 md:py-20 lg:py-24", tones[tone], className)}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  as: Tag = "h2",
  invert = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  as?: "h1" | "h2" | "h3";
  invert?: boolean;
}) {
  return (
    <div className={cn("max-w-2xl lg:max-w-3xl", align === "center" ? "mx-auto text-center" : "text-left")}>
      {eyebrow ? (
        <p className={cn("eyebrow", invert && "text-primary-foreground/70")}>{eyebrow}</p>
      ) : null}
      <Tag
        className={cn(
          "mt-3 text-balance text-3xl leading-[1.15] sm:text-4xl lg:text-[2.6rem]",
          invert ? "text-primary-foreground" : "text-foreground",
        )}
      >
        {title}
      </Tag>
      <span className={cn("dotted-divider mt-5", align === "center" && "mx-auto")} aria-hidden="true" />
      {description ? (
        <p
          className={cn(
            "mt-5 text-[0.975rem] leading-relaxed",
            invert ? "text-primary-foreground/85" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

const baseBtn =
  "inline-flex items-center justify-center gap-2 rounded-sm px-7 py-3.5 text-[0.78rem] font-medium uppercase tracking-[0.18em] transition-colors duration-200 min-h-11";

export function BookNowButton({
  label = "Book Now",
  variant = "solid",
  className,
}: {
  label?: string;
  variant?: "solid" | "outline" | "light";
  className?: string;
}) {
  const variants = {
    solid: "bg-primary text-primary-foreground hover:bg-accent",
    outline: "border border-primary text-primary hover:bg-primary hover:text-primary-foreground",
    light:
      "bg-card text-foreground hover:bg-secondary border border-transparent",
  } as const;
  return (
    <a
      href={siteConfig.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(baseBtn, variants[variant], className)}
    >
      {label}
    </a>
  );
}

export function ExternalButton({
  href,
  label,
  variant = "outline",
  className,
}: {
  href: string;
  label: string;
  variant?: "solid" | "outline" | "light";
  className?: string;
}) {
  const variants = {
    solid: "bg-primary text-primary-foreground hover:bg-accent",
    outline: "border border-foreground/25 text-foreground hover:border-primary hover:text-primary",
    light: "bg-card text-foreground hover:bg-secondary",
  } as const;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(baseBtn, variants[variant], className)}
    >
      {label}
    </a>
  );
}
