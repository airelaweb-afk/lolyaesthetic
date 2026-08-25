import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/primitives";
import { disclaimer, siteConfig } from "@/config/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Studio Policies | Loly Aesthetic, Houston TX" },
      {
        name: "description",
        content:
          "Terms of use and studio policy placeholders for Loly Aesthetic in Houston, TX, including cancellation, late arrival, deposits, refunds, and patch testing.",
      },
      { property: "og:title", content: "Terms & Studio Policies | Loly Aesthetic" },
      { property: "og:description", content: "Terms of use and studio policies for Loly Aesthetic." },
      { property: "og:url", content: "/terms" },
      { property: "og:type", content: "website" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Terms,
});

function Terms() {
  return (
    <Section>
      <SectionHeading eyebrow="Legal" title="Terms & Studio Policies" as="h1" align="left" />
      <div className="mt-8 max-w-3xl space-y-6 text-sm leading-relaxed text-muted-foreground">
        <p className="text-foreground">
          This page is a placeholder to be completed and reviewed by the business before publishing.
        </p>
        <section>
          <h2 className="text-xl text-foreground">Appointments &amp; Cancellations</h2>
          <p className="mt-2">Add the cancellation window and any associated fees.</p>
        </section>
        <section>
          <h2 className="text-xl text-foreground">Late Arrivals</h2>
          <p className="mt-2">Add the grace period and how late arrivals affect service time.</p>
        </section>
        <section>
          <h2 className="text-xl text-foreground">Deposits &amp; Refunds</h2>
          <p className="mt-2">Add deposit requirements, refund conditions, and package terms.</p>
        </section>
        <section>
          <h2 className="text-xl text-foreground">Patch Testing &amp; Suitability</h2>
          <p className="mt-2">
            Add patch-testing requirements, consultation expectations, and information clients should
            disclose before treatment.
          </p>
        </section>
        <section>
          <h2 className="text-xl text-foreground">Disclaimer</h2>
          <p className="mt-2">{disclaimer}</p>
        </section>
        <section>
          <h2 className="text-xl text-foreground">Contact</h2>
          <p className="mt-2">
            {siteConfig.name} · {siteConfig.address.full} · {siteConfig.phone}
          </p>
        </section>
      </div>
    </Section>
  );
}
