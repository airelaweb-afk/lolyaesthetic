import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/studio-team.jpg.asset.json";
import aboutImg from "@/assets/studio-detail.jpg.asset.json";
import { serviceCategories } from "@/data/services";
import { Section, SectionHeading, BookNowButton } from "@/components/site/primitives";
import { ServiceAccordion } from "@/components/site/ServiceAccordion";
import { BookingCta, Testimonial, InternalButton } from "@/components/site/Blocks";
import { Hours, ContactInfo, SocialLinks } from "@/components/site/ContactInfo";
import { disclaimer } from "@/config/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Loly Aesthetic | Personalized Aesthetic Treatments in Houston, TX" },
      {
        name: "description",
        content:
          "Discover personalized facials, laser hair removal, waxing, relaxation therapy, and brightening treatments at Loly Aesthetic in Houston, TX. Book your appointment today.",
      },
      { property: "og:title", content: "Loly Aesthetic | Personalized Aesthetic Treatments in Houston, TX" },
      {
        property: "og:description",
        content:
          "Personalized aesthetic treatments in Houston, TX designed to enhance your natural beauty. Book your appointment today.",
      },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: "Loly Aesthetic | Aesthetic Studio in Houston, TX" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background px-5 pb-14 pt-10 sm:px-8 md:pb-20 md:pt-16 lg:pb-24 lg:pt-20">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 md:grid-cols-[1.05fr_0.95fr] md:gap-14 lg:gap-20">
          <div>
            <p className="eyebrow">Aesthetic Studio · Houston, TX</p>
            <h1 className="mt-5 text-[1.9rem] leading-[1.14] sm:text-[2.15rem] lg:text-[2.35rem]">
              You deserve to look in the mirror and love what you see—without filters, without
              hesitation, and without second-guessing your confidence.
            </h1>
            <span className="dotted-divider mt-6" aria-hidden="true" />
            <p className="mt-6 max-w-xl text-[0.975rem] leading-relaxed text-muted-foreground">
              Personalized aesthetic treatments designed to enhance your natural beauty, restore your
              glow, and help you feel like your best self—inside and out.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <BookNowButton />
              <InternalButton to="/services" label="Explore Services" />
            </div>
          </div>
          <div className="relative">
            <img
              src={heroImg.url}
              alt="The Loly Aesthetic team in the studio in Houston, Texas"
              width={1279}
              height={846}
              className="aspect-[4/3] w-full rounded-sm object-cover md:aspect-[4/5] lg:aspect-[5/6]"
            />
          </div>
        </div>
      </section>

      {/* Trust */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Our Approach"
          title="What Makes Us Different?"
          description="Every treatment is thoughtfully tailored to your unique needs, goals, and comfort level—because no two clients are the same. We focus on enhancing your natural features for radiant, confidence-boosting results in a welcoming, judgment-free environment where you’ll always feel at ease."
        />
        <div className="mt-9 flex justify-center">
          <BookNowButton label="Get Started" />
        </div>
      </Section>

      {/* Services */}
      <Section id="services" tone="white">
        <SectionHeading
          eyebrow="Treatments"
          title="Our Services"
          description="Explore our five service categories. The complete catalogue, with pricing and details, lives on the Services page."
        />
        <div className="mt-12">
          <ServiceAccordion
            categories={serviceCategories.map(({ packages, ...c }) => ({
              ...c,
              services: c.services.slice(0, 3),
            }))}
          />

        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <InternalButton to="/services" label="View All Services" variant="solid" />
          <BookNowButton variant="outline" />
        </div>
      </Section>

      {/* About preview */}
      <Section>
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14 lg:gap-20">
          <img
            src={aboutImg.url}
            alt="Loly Aesthetic business cards displayed in the studio reception area"
            width={1280}
            height={853}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-sm object-cover"
          />
          <div>
            <SectionHeading eyebrow="About Us" title="Warm, Personal Care in Houston" align="left" />
            <p className="mt-6 text-[0.975rem] leading-relaxed text-muted-foreground">
              Loly Aesthetic, located in the vibrant city of Houston, TX, is dedicated to enhancing
              your overall appearance and well-being through specialized aesthetic services. Our
              skilled professionals provide attentive care and personalized treatments designed
              around your individual needs. We believe in creating a welcoming environment where you
              can relax, rejuvenate, and feel confident in your own skin.
            </p>
            <div className="mt-8">
              <InternalButton to="/about" label="About Our Team" />
            </div>
          </div>
        </div>
      </Section>

      <Testimonial />
      <BookingCta />

      {/* Contact preview */}
      <Section tone="muted">
        <SectionHeading eyebrow="Visit" title="Hours & Location" />
        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:gap-20">
          <div>
            <h3 className="text-xl">Business Hours</h3>
            <Hours className="mt-4" />
          </div>
          <div>
            <h3 className="text-xl">Get in Touch</h3>
            <ContactInfo className="mt-5" />
            <div className="mt-6">
              <SocialLinks />
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <BookNowButton />
              <InternalButton to="/contact" label="Contact Page" />
            </div>
          </div>
        </div>
        <p className="mx-auto mt-12 max-w-3xl text-center text-xs leading-relaxed text-muted-foreground">
          {disclaimer}
        </p>
      </Section>
    </>
  );
}
