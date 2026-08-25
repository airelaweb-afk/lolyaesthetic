import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/primitives";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Loly Aesthetic, Houston TX" },
      {
        name: "description",
        content:
          "How Loly Aesthetic in Houston, TX handles client information collected through this website and appointment booking.",
      },
      { property: "og:title", content: "Privacy Policy | Loly Aesthetic" },
      { property: "og:description", content: "Privacy practices for Loly Aesthetic in Houston, TX." },
      { property: "og:url", content: "/privacy-policy" },
      { property: "og:type", content: "website" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <Section>
      <SectionHeading eyebrow="Legal" title="Privacy Policy" as="h1" align="left" />
      <div className="mt-8 max-w-3xl space-y-6 text-sm leading-relaxed text-muted-foreground">
        <p className="text-foreground">
          This page is a placeholder to be completed and reviewed by the business before publishing.
        </p>
        <section>
          <h2 className="text-xl text-foreground">Information We Collect</h2>
          <p className="mt-2">
            Describe the information collected through this website, phone inquiries, and the online
            booking platform, including names, contact details, and appointment preferences.
          </p>
        </section>
        <section>
          <h2 className="text-xl text-foreground">How Information Is Used</h2>
          <p className="mt-2">
            Describe how client information is used to schedule appointments, provide services, and
            communicate about visits.
          </p>
        </section>
        <section>
          <h2 className="text-xl text-foreground">Third-Party Services</h2>
          <p className="mt-2">
            Describe third-party providers used for online booking, payments, mapping, and analytics,
            and link to their privacy policies.
          </p>
        </section>
        <section>
          <h2 className="text-xl text-foreground">Your Choices</h2>
          <p className="mt-2">
            Describe how clients may request access to, correction of, or deletion of their
            information, and how to opt out of marketing communications.
          </p>
        </section>
        <section>
          <h2 className="text-xl text-foreground">Contact</h2>
          <p className="mt-2">
            Questions about this policy may be directed to {siteConfig.name} at {siteConfig.phone},{" "}
            {siteConfig.address.full}.
          </p>
        </section>
      </div>
    </Section>
  );
}
