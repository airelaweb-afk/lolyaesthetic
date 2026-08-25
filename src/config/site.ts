/**
 * Central site configuration.
 *
 * All external destinations are configurable via Vite environment variables
 * (see .env.example). Replace the PLACEHOLDER values before going live.
 */

const env = import.meta.env as Record<string, string | undefined>;

/** Marked placeholder – replace via env var when the real URL is available. */
const PLACEHOLDER = "#booking-url-not-configured";

export const siteConfig = {
  name: "Loly Aesthetic",
  tagline: "Love yourself",
  description:
    "Personalized facials, laser hair removal, waxing, relaxation therapy, and brightening treatments in Houston, TX.",
  phone: "(346) 453-8123",
  phoneHref: "tel:+13464538123",
  address: {
    street: "110 Meyerland Plaza, Suite 38",
    city: "Houston",
    state: "TX",
    zip: "77096",
    full: "110 Meyerland Plaza, Suite 38, Houston, TX 77096",
  },
  languages: "We Speak Spanish",

  /** VITE_VAGARO_BOOKING_URL */
  bookingUrl: env['VITE_VAGARO_BOOKING_URL'] ?? PLACEHOLDER,
  /** VITE_GOOGLE_MAPS_URL */
  mapsUrl: env['VITE_GOOGLE_MAPS_URL'] ?? "#maps-url-not-configured",
  /** VITE_INSTAGRAM_URL */
  instagramUrl: env['VITE_INSTAGRAM_URL'] ?? "",
  /** VITE_SECOND_SOCIAL_URL */
  secondSocialUrl: env['VITE_SECOND_SOCIAL_URL'] ?? "",
  /** VITE_CONTACT_MESSAGE_URL */
  contactMessageUrl: env['VITE_CONTACT_MESSAGE_URL'] ?? "",
  /** VITE_REVIEWS_URL */
  reviewsUrl: env['VITE_REVIEWS_URL'] ?? "",
} as const;

export const hours = [
  { day: "Sunday", value: "Closed" },
  { day: "Monday", value: "9:00 AM – 6:00 PM" },
  { day: "Tuesday", value: "9:00 AM – 4:00 PM" },
  { day: "Wednesday", value: "9:00 AM – 4:00 PM" },
  { day: "Thursday", value: "9:00 AM – 4:00 PM" },
  { day: "Friday", value: "9:00 AM – 6:00 PM" },
  { day: "Saturday", value: "9:00 AM – 6:00 PM" },
] as const;

export const disclaimer =
  "All services offered at Loly Aesthetic are aesthetic in nature and are not medical treatments. Individual results vary. Please disclose any relevant health information and ask about suitability, contraindications, preparation, and aftercare before booking.";
