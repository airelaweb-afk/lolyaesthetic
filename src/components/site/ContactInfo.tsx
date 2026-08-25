import { MapPin, Phone, MessageCircle, Instagram, Facebook } from "lucide-react";
import { hours, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Hours({ className, invert = false }: { className?: string; invert?: boolean }) {
  return (
    <dl className={cn("divide-y", invert ? "divide-primary-foreground/20" : "divide-border", className)}>
      {hours.map((h) => (
        <div key={h.day} className="flex items-baseline justify-between gap-4 py-2.5 text-sm">
          <dt className={invert ? "text-primary-foreground/80" : "text-muted-foreground"}>{h.day}</dt>
          <dd className={cn("tabular-nums", invert ? "text-primary-foreground" : "text-foreground")}>
            {h.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function ContactInfo({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-5 text-sm", className)}>
      <a
        href={siteConfig.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-start gap-3 text-foreground transition-colors hover:text-primary"
      >
        <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
        <span>
          {siteConfig.address.street}
          <br />
          {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
        </span>
      </a>
      <a
        href={siteConfig.phoneHref}
        className="flex items-center gap-3 text-foreground transition-colors hover:text-primary"
      >
        <Phone className="size-5 shrink-0 text-primary" aria-hidden="true" />
        {siteConfig.phone}
      </a>
      {siteConfig.contactMessageUrl ? (
        <a
          href={siteConfig.contactMessageUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-foreground transition-colors hover:text-primary"
        >
          <MessageCircle className="size-5 shrink-0 text-primary" aria-hidden="true" />
          Send us a message
        </a>
      ) : null}
      <p className="pt-1 text-[0.78rem] font-medium uppercase tracking-[0.18em] text-primary">
        {siteConfig.languages}
      </p>
    </div>
  );
}

export function SocialLinks({ invert = false }: { invert?: boolean }) {
  const cls = cn(
    "inline-flex size-11 items-center justify-center rounded-full border transition-colors",
    invert
      ? "border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
      : "border-border text-foreground hover:border-primary hover:text-primary",
  );
  if (!siteConfig.instagramUrl && !siteConfig.secondSocialUrl) {
    return (
      <p className={cn("text-xs", invert ? "text-primary-foreground/70" : "text-muted-foreground")}>
        Social profile links are configurable and not yet set.
      </p>
    );
  }
  return (
    <div className="flex items-center gap-3">
      {siteConfig.instagramUrl ? (
        <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={cls}>
          <Instagram className="size-5" aria-hidden="true" />
        </a>
      ) : null}
      {siteConfig.secondSocialUrl ? (
        <a href={siteConfig.secondSocialUrl} target="_blank" rel="noopener noreferrer" aria-label="Second social profile" className={cls}>
          <Facebook className="size-5" aria-hidden="true" />
        </a>
      ) : null}
    </div>
  );
}
