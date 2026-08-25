import { createFileRoute } from "@tanstack/react-router";
import teamImg from "@/assets/studio-team.jpg.asset.json";
import doloresImg from "@/assets/dolores.jpg.asset.json";
import facialImg from "@/assets/facial.jpg.asset.json";
import { Section, SectionHeading } from "@/components/site/primitives";
import { BookingCta } from "@/components/site/Blocks";
import { disclaimer } from "@/config/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Loly Aesthetic | Our Studio & Team in Houston, TX" },
      {
        name: "description",
        content:
          "Meet the team behind Loly Aesthetic in Houston, TX. Learn about our philosophy, client experience, and the expertise behind our aesthetic services.",
      },
      { property: "og:title", content: "About Loly Aesthetic | Our Studio & Team in Houston, TX" },
      {
        property: "og:description",
        content:
          "Our philosophy, client experience, and the certified esthetician behind Loly Aesthetic in Houston, TX.",
      },
      { property: "og:url", content: "/about" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <Section>
        <SectionHeading
          eyebrow="About Us"
          title="About Loly Aesthetic"
          as="h1"
          description="Loly Aesthetic, located in the vibrant city of Houston, TX, is dedicated to enhancing your overall appearance and well-being through specialized aesthetic services."
        />
        <div className="mt-12 grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <img
            src={teamImg.url}
            alt="Loly Aesthetic team standing in front of the studio's branded wall"
            width={1279}
            height={846}
            className="aspect-[4/3] w-full rounded-sm object-cover"
          />
          <div>
            <h2 className="text-2xl sm:text-3xl">Our Philosophy</h2>
            <span className="dotted-divider mt-4" aria-hidden="true" />
            <p className="mt-5 text-[0.975rem] leading-relaxed text-muted-foreground">
              Our skilled professionals provide attentive care and personalized treatments designed
              around your individual needs. We believe in creating a welcoming environment where you
              can relax, rejuvenate, and feel confident in your own skin.
            </p>
            <p className="mt-4 text-[0.975rem] leading-relaxed text-muted-foreground">
              Every service begins with listening. We review your goals, comfort level, and skin
              concerns so the plan we build together feels right for you—never rushed, never
              one-size-fits-all.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl sm:text-3xl">The Client Experience</h2>
            <span className="dotted-divider mt-4" aria-hidden="true" />
            <ul className="mt-6 space-y-4 text-[0.975rem] leading-relaxed text-muted-foreground">
              <li>A calm, private studio where you can settle in and unwind.</li>
              <li>
                A complimentary 3D skin analysis available to help guide a personalized treatment
                plan.
              </li>
              <li>Clear explanations of each step, including preparation and aftercare guidance.</li>
              <li>Care in English and Spanish—hablamos español.</li>
              <li>A judgment-free environment focused on natural-looking results.</li>
            </ul>
          </div>
          <img
            src={facialImg.url}
            alt="A client receiving a mask application during a facial treatment"
            width={1080}
            height={720}
            loading="lazy"
            className="order-1 aspect-[4/3] w-full rounded-sm object-cover md:order-2"
          />
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading eyebrow="Our Team" title="Meet Our Team" />
        <article className="mx-auto mt-12 grid max-w-4xl items-start gap-10 md:grid-cols-[320px_minmax(0,1fr)]">
          <img
            src={doloresImg.url}
            alt="Dolores Hechavarria Moraga, licensed esthetician, working in the Loly Aesthetic treatment room"
            width={1024}
            height={1638}
            loading="lazy"
            className="aspect-[3/4] w-full rounded-sm object-cover"
          />
          <div>
            <h3 className="text-2xl sm:text-3xl">Dolores Hechavarria Moraga</h3>
            <p className="eyebrow mt-3">Esthetician · Laser Hair Removal Technician</p>
            <span className="dotted-divider mt-4" aria-hidden="true" />
            <p className="mt-5 text-[0.975rem] leading-relaxed text-muted-foreground">
              Dolores Hechavarria Moraga is certified in the State of Texas as an Esthetician and
              Professional Laser Hair Removal Technician. She has worked as an esthetician for one
              year through an internship at her school and spa, providing advanced services including
              microneedling, dermaplaning, microdermabrasion, HydraFacial, anti-aging treatments,
              acne treatments, and hyperpigmentation-focused care.
            </p>
            <p className="mt-4 text-[0.975rem] leading-relaxed text-muted-foreground">
              She also has training and experience in full-body waxing through her internship, spa
              experience, Hive Beauty Education, and Honeycomb Wax Co. In addition, she has training
              and experience in relaxation therapy through her internship and spa work.
            </p>
            <p className="mt-4 text-[0.975rem] leading-relaxed text-muted-foreground">
              Dolores is committed to creating a comfortable, welcoming experience and tailoring each
              service to the client’s goals, needs, and comfort level.
            </p>

            <h4 className="mt-8 text-xl">Credentials &amp; Areas of Service</h4>
            <ul className="mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
              <li>Certified Esthetician — State of Texas</li>
              <li>Professional Laser Hair Removal Technician — State of Texas</li>
              <li>Microneedling, dermaplaning, microdermabrasion</li>
              <li>HydraFacial, anti-aging and acne-focused facials</li>
              <li>Hyperpigmentation-focused care</li>
              <li>Full-body waxing (Hive Beauty Education, Honeycomb Wax Co.)</li>
              <li>Relaxation therapy</li>
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-muted-foreground">{disclaimer}</p>
          </div>
        </article>
      </Section>

      <BookingCta />
    </>
  );
}
