import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading, BookNowButton, ExternalButton } from "@/components/site/primitives";
import { Hours, ContactInfo, SocialLinks } from "@/components/site/ContactInfo";
import { siteConfig, disclaimer } from "@/config/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Hours | Loly Aesthetic, Houston TX" },
      {
        name: "description",
        content:
          "Visit Loly Aesthetic at 110 Meyerland Plaza, Suite 38, Houston, TX 77096. Call (346) 453-8123 for hours, directions, and appointments. We speak Spanish.",
      },
      { property: "og:title", content: "Contact & Hours | Loly Aesthetic, Houston TX" },
      {
        property: "og:description",
        content:
          "Address, hours, phone, and booking for Loly Aesthetic in Houston, TX. We speak Spanish.",
      },
      { property: "og:url", content: "/contact" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <Section>
        <SectionHeading
          eyebrow="Contact"
          title="Visit Loly Aesthetic in Houston"
          as="h1"
          description="We are located in Meyerland Plaza and happy to answer questions about services, suitability, preparation, and aftercare before you book."
        />

        <div className="mt-14 grid items-start gap-12 md:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-2xl">Studio Details</h2>
            <span className="dotted-divider mt-4" aria-hidden="true" />
            <ContactInfo className="mt-6" />
            <div className="mt-7 flex flex-wrap gap-3">
              <BookNowButton />
              {siteConfig.contactMessageUrl ? (
                <ExternalButton href={siteConfig.contactMessageUrl} label="Send a Message" />
              ) : null}
            </div>
            <div className="mt-8">
              <h3 className="text-lg">Follow Along</h3>
              <div className="mt-4">
                <SocialLinks />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl">Business Hours</h2>
            <span className="dotted-divider mt-4" aria-hidden="true" />
            <Hours className="mt-5" />
          </div>
        </div>

          <div className="mt-12 rounded-sm border border-border bg-card p-6">
            <h3 className="text-lg">Directions</h3>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
              {siteConfig.address.full}
            </p>
            <ExternalButton
              href={siteConfig.mapsUrl}
              label="Open in Google Maps"
              className="mt-5"
            />
            <p className="mt-4 max-w-xl text-xs leading-relaxed text-muted-foreground">
              A map embed can be enabled once a maps URL is configured. We link out by default to
              avoid loading third-party trackers on page view.
            </p>
          </div>

        <p className="mt-14 max-w-3xl text-xs leading-relaxed text-muted-foreground">{disclaimer}</p>
      </Section>
    </>
  );
}
