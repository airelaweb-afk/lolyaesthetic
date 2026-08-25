import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { serviceCategories } from "@/data/services";
import { Section, SectionHeading, BookNowButton } from "@/components/site/primitives";
import { ServiceAccordion } from "@/components/site/ServiceAccordion";
import { BookingCta } from "@/components/site/Blocks";
import { disclaimer } from "@/config/site";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Pricing | Loly Aesthetic, Houston TX" },
      {
        name: "description",
        content:
          "Full service menu and pricing for facials, relaxation therapy, waxing, diode laser hair removal, and brightening services at Loly Aesthetic in Houston, TX.",
      },
      { property: "og:title", content: "Services & Pricing | Loly Aesthetic, Houston TX" },
      {
        property: "og:description",
        content:
          "Facials, relaxation therapy, waxing, diode laser hair removal, and brightening services with clear USD pricing.",
      },
      { property: "og:url", content: "/services" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

function Services() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return serviceCategories;
    return serviceCategories
      .map((c) => {
        const services = c.services.filter(
          (s) =>
            s.name.toLowerCase().includes(q) ||
            s.description.toLowerCase().includes(q) ||
            c.title.toLowerCase().includes(q),
        );
        const packages = c.packages
          ? {
              ...c.packages,
              services: c.packages.services.filter(
                (s) => s.name.toLowerCase().includes(q) || c.title.toLowerCase().includes(q),
              ),
            }
          : undefined;
        return { ...c, services, ...(packages ? { packages } : {}) };
      })
      .filter((c) => c.services.length > 0 || (c.packages?.services.length ?? 0) > 0);
  }, [query]);

  return (
    <>
      <Section>
        <SectionHeading
          eyebrow="Service Menu"
          title="Our Services & Pricing"
          as="h1"
          description="Explore our complete catalogue of aesthetic services in Houston, TX. Every treatment is selected with you, based on your goals, comfort level, and skin concerns."
        />

        <div className="mx-auto mt-10 max-w-xl">
          <label htmlFor="service-search" className="eyebrow block">
            Search services
          </label>
          <Input
            id="service-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g. microneedling, Brazilian, waxing"
            className="mt-2 h-12 rounded-sm bg-card"
          />
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {serviceCategories.map((c) => (
            <button
              key={c.slug}
              type="button"
              onClick={() => setQuery(c.title)}
              className="inline-flex min-h-11 items-center rounded-sm border border-border bg-card px-4 py-2 text-[0.72rem] uppercase tracking-[0.14em] text-foreground/80 transition-colors hover:border-primary hover:text-primary"
            >
              {c.title}
            </button>
          ))}
          {query ? (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="inline-flex min-h-11 items-center rounded-sm border border-primary bg-card px-4 py-2 text-[0.72rem] uppercase tracking-[0.14em] text-primary"
            >
              Show all
            </button>
          ) : null}
        </div>

        <div className="mt-12">
          {filtered.length === 0 ? (
            <p className="text-center text-sm text-muted-foreground">
              No services match “{query}”. Try another search term.
            </p>
          ) : (
            <ServiceAccordion categories={filtered} defaultValue={filtered[0]?.slug} />
          )}
        </div>

        <div className="mt-12 flex justify-center">
          <BookNowButton />
        </div>

        <div className="mt-14 space-y-4 border-t border-border pt-8">
          <h2 className="text-xl">Studio Policies</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Cancellation, late arrival, deposit, refund, and patch-testing policies will be published
            here. Please contact the studio for current policy details before booking.
          </p>
          <p className="text-xs leading-relaxed text-muted-foreground">{disclaimer}</p>
        </div>
      </Section>

      <BookingCta />
    </>
  );
}
