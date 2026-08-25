export type Service = {
  name: string;
  price: string;
  description: string;
  note?: string;
  badge?: "Package" | "Promotion" | "Women Only" | "Complimentary";
};

export type ServiceCategory = {
  slug: string;
  title: string;
  summary: string;
  intro?: string;
  note?: string;
  womenOnly?: boolean;
  services: Service[];
  packages?: { title: string; services: Service[] };
};

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "facials",
    title: "Facials",
    summary:
      "Signature cleansing, resurfacing, and advanced skin-renewal treatments designed around your skin's needs.",
    intro:
      "From a complimentary 3D skin analysis to advanced microneedling, each facial is selected with you after reviewing your goals, comfort level, and skin concerns.",
    services: [
      {
        name: "Skin Analysis",
        price: "Complimentary",
        badge: "Complimentary",
        description:
          "A state-of-the-art 3D intelligent skin analysis using advanced spectrum imaging to assess key indicators across the surface and deeper layers of the skin. The analysis provides a detailed interpretation of skin conditions and helps guide a personalized treatment plan.",
      },
      {
        name: "Deep Cleansing Facial",
        price: "$139",
        description:
          "A signature facial experience featuring thorough cleansing, advanced exfoliation, premium serum application, facial lifting massage, luxury mask, and LED light therapy. Designed to leave the skin luminous, hydrated, firmer, and revitalized.",
      },
      {
        name: "Microdermabrasion Renewal",
        price: "$159",
        description:
          "A gentle exfoliating treatment that removes dead surface cells, supports cell renewal, refines the appearance of pores, improves skin texture, and restores a radiant glow.",
      },
      {
        name: "CO₂ Carboxy Therapy",
        price: "$179",
        description:
          "A non-invasive treatment designed to support skin oxygenation while improving the appearance of firmness and vitality for a refreshed, radiant complexion.",
      },
      {
        name: "Dermaplaning Glow",
        price: "$159",
        description:
          "A rejuvenating treatment combining facial cleansing, meticulous dermaplaning, a nourishing mask, and a facial lifting massage for ultra-smooth skin and an immediate-looking glow.",
      },
      {
        name: "Oxygeneo Pollogen CO₂",
        price: "$179",
        description:
          "A comprehensive treatment that cleanses, exfoliates, hydrates, and oxygenates the skin to help revitalize dull or tired-looking complexions.",
      },
      {
        name: "Luminfusion Glow Plus",
        price: "$250",
        description:
          "A comprehensive skincare experience with deep cleansing, infusion, LED therapy, rejuvenating facial massage, targeted eye treatment, and a light peel with nano-infusion. Designed for instant-looking radiance, improved texture, softened appearance of expression lines, and a more even-looking skin tone.",
      },
      {
        name: "Melasma Control",
        price: "$179",
        description:
          "A specialized brightening protocol combining controlled exfoliation, brightening actives, and LED light therapy.",
        note: "This progressive service is generally performed as part of a multiple-session plan. Results vary.",
      },
      {
        name: "Acne Facial",
        price: "$169",
        description:
          "A targeted facial using deep cleansing, gentle peeling, high-frequency treatment, sebum-regulating actives, and LED light therapy. Designed to calm the appearance of inflammation, support oil balance, and improve the look and feel of skin texture.",
      },
      {
        name: "Microneedling with Exosomes",
        price: "$359",
        description:
          "An advanced skin-renewal treatment combining controlled microneedling with exosome-based care. Designed to support recovery, improve the appearance of texture and radiance, and soften the appearance of fine lines, acne scars, and enlarged pores.",
      },
      {
        name: "Microneedling with PDRN",
        price: "$359",
        description:
          "A regenerative-focused treatment combining microneedling with PDRN, described by the provider as derived from salmon DNA, to support skin repair, firmness, texture, tone, and radiance.",
      },
      {
        name: "Microneedling with Highly Moisturizing Serum",
        price: "$199",
        description:
          "Microneedling combined with a moisturizing serum option such as hyaluronic acid, Pro-Restor, niacinamide, or PowerBright, depending on skin needs. Designed to support hydration, skin-barrier care, smoothness, and a fresher-looking complexion.",
      },
      {
        name: "Back Facial",
        price: "$150",
        description:
          "A cleansing, exfoliating, and hydrating treatment for the back. Suitable for breakout-prone or dry-looking skin and designed to improve texture while providing a soothing experience.",
      },
      {
        name: "8-Session Melasma Control",
        price: "$855",
        badge: "Package",
        description:
          "A progressive melasma-focused package combining in-studio treatments with a recommended home-care routine.",
        note: "Pigmentation concerns typically require a comprehensive plan and ongoing care. Results vary by individual.",
      },
      {
        name: "BioRePeel CL3 Blue Facial",
        price: "$259",
        description:
          "A biorevitalizing peel designed to improve the appearance of blemishes, acne, pores, uneven texture, and dullness while supporting visible skin renewal with minimal downtime. No microneedling included.",
      },
      {
        name: "BioRePeel CL3 Facial with Microneedling",
        price: "$350",
        description:
          "An advanced combination of BioRePeel CL3 and microneedling designed to support collagen production and improve the appearance of dark spots, acne scars, fine lines, and uneven texture.",
      },
    ],
  },
  {
    slug: "relaxation-therapy",
    title: "Relaxation Therapy (Women Only)",
    womenOnly: true,
    summary:
      "A restorative body ritual designed to exfoliate, hydrate, and help you unwind. Available for women only.",
    services: [
      {
        name: "Chocolate Therapy",
        price: "$120",
        badge: "Women Only",
        description:
          "A luxurious body treatment combining an invigorating organic coffee and seaweed scrub with an antioxidant-rich chocolate application. The experience exfoliates, supports circulation, deeply hydrates the skin, and promotes relaxation.",
      },
    ],
  },
  {
    slug: "waxing",
    title: "Waxing",
    summary:
      "Careful, comfortable hair removal for face and body, with clear preparation guidance before every appointment.",
    note: "Before your appointment: Please allow the hair to grow to approximately 3–5 mm. Arrive with clean skin free of creams, lotions, deodorant, or other products depending on the treatment area. Avoid tanning and exfoliating on the same day as your appointment.",
    services: [
      { name: "Lip and Chin", price: "$35", description: "Upper lip and chin waxing." },
      { name: "Underarms", price: "$35", description: "Waxing of both underarms." },
      { name: "Basic Bikini", price: "$35", description: "Waxing of the bikini line." },
      { name: "Brazilian Wax", price: "$80", description: "Brazilian waxing service." },
      { name: "Full Legs", price: "$100", description: "Full-leg waxing, including the feet." },
      {
        name: "Half Legs",
        price: "$60",
        description:
          "Waxing of either the upper leg including the knee, or the lower leg including the feet.",
      },
    ],
  },
  {
    slug: "laser-hair-removal",
    title: "Laser Hair Removal",
    summary:
      "Diode laser hair removal designed to help reduce hair growth over a series of sessions.",
    intro:
      "Eliminate unwanted hair with safe and effective diode laser technology. This treatment is designed to help reduce hair growth over a series of sessions and leave the skin feeling smoother. Individual results vary.",
    note: "Please ask about suitability, consultation, preparation, contraindications, and aftercare before booking your diode laser sessions.",
    services: [
      { name: "Brazilian", price: "$140", description: "Diode laser hair removal for the Brazilian area, including the buttocks." },
      { name: "Chest", price: "$140", description: "Diode laser hair removal for the chest." },
      { name: "Buttocks", price: "$85", description: "Diode laser hair removal for the buttocks." },
      { name: "Nose", price: "$35", description: "Diode laser hair removal for the nose area." },
      { name: "Half Legs + Feet", price: "$150", description: "Diode laser hair removal for half legs including the feet." },
      { name: "Full Legs + Feet", price: "$199", description: "Diode laser hair removal for full legs including the feet." },
      { name: "Neck", price: "$50", description: "Diode laser hair removal for the neck." },
      { name: "Full Face + Neck", price: "$149", description: "Diode laser hair removal for the full face and neck." },
      { name: "Full Face", price: "$99", description: "Diode laser hair removal for the full face." },
      { name: "Bikini Plus", price: "$89", description: "Diode laser hair removal for the extended bikini area." },
      { name: "Bikini Line", price: "$79", description: "Diode laser hair removal for the bikini line." },
      { name: "Chin", price: "$39", description: "Diode laser hair removal for the chin." },
      { name: "Back", price: "$175", description: "Diode laser hair removal for the back." },
      { name: "Underarms", price: "$60", description: "Diode laser hair removal for both underarms." },
      { name: "Arms", price: "$99", description: "Diode laser hair removal for the arms." },
      { name: "Areola", price: "$29", description: "Diode laser hair removal for the areola." },
      { name: "Upper Lip", price: "$40", description: "Diode laser hair removal for the upper lip." },
      { name: "Full Body", price: "$500", description: "Full-body diode laser hair removal session." },
    ],
    packages: {
      title: "Packages & Offers",
      services: [
        { name: "3 Brazilian Sessions", price: "$350", badge: "Package", description: "A package of three Brazilian diode laser sessions." },
        { name: "6 Brazilian Sessions", price: "$588", badge: "Package", description: "A package of six Brazilian diode laser sessions." },
        { name: "3 Full Legs + Feet Sessions", price: "$600", badge: "Package", description: "A package of three full legs and feet diode laser sessions." },
        { name: "6 Full Legs + Feet Sessions", price: "$1,050", badge: "Package", description: "A package of six full legs and feet diode laser sessions." },
        { name: "3 Full Body Laser Hair Removal Sessions", price: "$1,300", badge: "Package", description: "A package of three full-body diode laser sessions." },
        { name: "6 Full Body Laser Hair Removal Sessions", price: "$2,100", badge: "Package", description: "A package of six full-body diode laser sessions." },
        {
          name: "Two Small Areas Promotional Offer",
          price: "$120",
          badge: "Promotion",
          description:
            "Choose one of the following combinations: Underarms + Face, Hands + Feet, or Face + Neck.",
        },
      ],
    },
  },
  {
    slug: "whitening",
    title: "Whitening",
    summary:
      "Brightening-focused aesthetic services for selected areas, designed to improve the appearance of uneven tone.",
    note: "Brightening-focused aesthetic services designed to improve the appearance of uneven tone in selected areas. Results vary by individual. A consultation may be recommended to determine suitability and appropriate aftercare.",
    services: [
      { name: "Intimate Area / Brazilian Whitening", price: "$225", description: "A brightening-focused aesthetic service for the intimate/Brazilian area." },
      { name: "Underarm Whitening", price: "$199", description: "A brightening-focused aesthetic service for the underarms." },
      { name: "Inner Thigh Whitening", price: "$350", description: "A brightening-focused aesthetic service for the inner thighs." },
      { name: "Intimate Area / Brazilian + Buttocks Whitening", price: "$450", description: "A brightening-focused aesthetic service for the intimate/Brazilian area and buttocks." },
    ],
  },
];
