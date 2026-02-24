/**
 * client.config.ts — THE ONLY FILE THAT CHANGES PER CLIENT
 *
 * To deploy for a new client:
 * 1. Duplicate this repo on GitHub
 * 2. Replace all values below with the client's real info
 * 3. Replace /public/images/ with their photos
 * 4. Deploy new Vercel project → connect repo → add custom domain
 *
 * Current: Peak Home Remodeling (DEMO — Macomb County, MI)
 */

export const config = {
  business: {
    name: "Peak Home Remodeling",
    tagline: "Macomb County's Trusted Remodeling Crew",
    phone: "(586) 555-0142",
    phoneRaw: "5865550142",
    email: "info@peakhomeremodeling.com",
    address: "Shelby Township, MI 48315",
    serviceArea: "Macomb & Oakland County",
    hours: "Mon–Fri 7am–6pm · Sat 8am–2pm",
    yearFounded: 2014,
    reviewCount: 94,
    reviewRating: "4.9",
    jobsCompleted: 300,
    license: "MI Residential Builder #123456",
  },

  brand: {
    // Swap these 6 values to fully rebrand for any client
    primary: "#b45309",          // amber-700 — warm, premium
    primarySoft: "rgba(180, 83, 9, 0.10)",
    accent: "#1e293b",           // slate-800 — dark contrast
    bg: "#ffffff",
    bgSection: "#f8fafc",
    bgDark: "#0f172a",           // footer background
    text1: "#0f172a",            // headings
    text2: "#475569",            // body
    text3: "#94a3b8",            // muted / labels
    border: "rgba(15, 23, 42, 0.08)",
    fontHeading: "Poppins",      // Google Font — bold, friendly
    fontBody: "Inter",           // Google Font — clean, readable
  },

  hero: {
    headline: "Your Home, Built Better.",
    subline:
      "Kitchen remodels, bathroom renovations, decks, and full home transformations — done right the first time by a crew that's been trusted in Macomb County for over 10 years.",
    ctaPrimary: "Get a Free Quote",
    ctaSecondary: "See Our Work",
    // Replace with a real before/after or finished remodel photo
    backgroundImage: "/images/hero-bg.jpg",
  },

  trustBar: [
    { label: "Licensed & Insured", icon: "shield" },
    { label: "4.9★ Google Rating", icon: "star" },
    { label: "300+ Projects Completed", icon: "hammer" },
    { label: "Macomb & Oakland County", icon: "map" },
    { label: "10+ Years in Business", icon: "calendar" },
  ],

  services: [
    {
      name: "Kitchen Remodels",
      description:
        "Full gut-and-rebuild or targeted upgrades. Cabinets, countertops, flooring, lighting — we handle every trade.",
      icon: "kitchen",
    },
    {
      name: "Bathroom Renovations",
      description:
        "From basic refreshes to full primary suite builds. Tile work, vanities, custom showers, and plumbing.",
      icon: "bath",
    },
    {
      name: "Deck & Outdoor Living",
      description:
        "Composite and wood decks, pergolas, and covered patios built to Michigan winters and your lifestyle.",
      icon: "outdoor",
    },
    {
      name: "Basement Finishing",
      description:
        "Turn your unfinished basement into usable square footage — home office, rec room, or in-law suite.",
      icon: "basement",
    },
    {
      name: "Full Home Renovations",
      description:
        "Whole-home updates or additions. One crew, one contract, one point of contact from start to finish.",
      icon: "home",
    },
    {
      name: "Handyman & Repairs",
      description:
        "Drywall, trim, doors, windows, and anything in between. No job too small if you're already a client.",
      icon: "wrench",
    },
  ],

  whyUs: [
    {
      claim: "One Crew. No Subcontractors.",
      proof:
        "Our team handles every trade in-house. You get consistent quality and one person accountable from demo to final walkthrough.",
      icon: "people",
    },
    {
      claim: "Written Quote. Fixed Price.",
      proof:
        "We give you a detailed, itemized quote before we start. No surprise add-ons, no invoices that balloon mid-project.",
      icon: "doc",
    },
    {
      claim: "10-Year Workmanship Warranty.",
      proof:
        "We stand behind our labor for a decade. If something we built fails, we fix it — no argument, no charge.",
      icon: "warranty",
    },
  ],

  reviews: [
    {
      name: "Lisa M.",
      location: "Shelby Township",
      rating: 5,
      text: "Peak completely transformed our kitchen and it came in on budget. Jake was communicative the entire time and the crew was clean and respectful of our home. We've already referred them to three neighbors.",
    },
    {
      name: "Derek K.",
      location: "Macomb Township",
      rating: 5,
      text: "The deck they built for us is incredible. Fixed-price quote, finished two days early. This is what every contractor should be like. Will absolutely be calling them for our bathroom next.",
    },
    {
      name: "Sandra T.",
      location: "Washington Township",
      rating: 5,
      text: "We interviewed four contractors. Peak was not the cheapest but they were the most professional and the only one who gave us a written warranty. Bathroom came out better than we imagined.",
    },
  ],

  gallery: [
    // Replace src paths with actual client photos
    // Free Unsplash alternatives listed as placeholders
    { src: "/images/gallery-1.jpg", alt: "Kitchen remodel — Shelby Township" },
    { src: "/images/gallery-2.jpg", alt: "Master bathroom — Macomb Township" },
    { src: "/images/gallery-3.jpg", alt: "Composite deck — Washington Township" },
    { src: "/images/gallery-4.jpg", alt: "Basement finish — Shelby Township" },
    { src: "/images/gallery-5.jpg", alt: "Kitchen remodel — Romeo" },
    { src: "/images/gallery-6.jpg", alt: "Outdoor living — Clinton Township" },
  ],

  cta: {
    headline: "Ready to Start Your Project?",
    subline:
      "Free quotes, honest timelines, and a crew that shows up when they say they will. Serving Macomb and Oakland County.",
    buttonText: "Get a Free Quote",
  },

  social: {
    facebook: "https://facebook.com/peakhomeremodeling",
    instagram: "https://instagram.com/peakhomeremodeling",
    google: "",
  },

  form: {
    // Resend API — replace with client's actual email address on deployment
    toEmail: "info@peakhomeremodeling.com",
    serviceOptions: [
      "Kitchen Remodel",
      "Bathroom Renovation",
      "Deck / Outdoor Living",
      "Basement Finishing",
      "Full Home Renovation",
      "Handyman / Repair",
      "Other",
    ],
  },
} as const;

export type SiteConfig = typeof config;
