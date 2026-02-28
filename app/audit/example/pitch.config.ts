/**
 * Example audit — same dummy company as the demo site (Peak Home Remodeling).
 * Macomb & Oakland County, MI. Use as template; replace with real data for real audits.
 */
export const pitchData = {
  prospect: {
    name: "Peak Home Remodeling",
    city: "Shelby Township, MI",
    services: "Kitchen Remodels · Bathroom Renovations · Decks · Basement Finishing · Full Home Renovations",
    website: "peakhomeremodeling.com",
    websiteStatus: "working-wix" as const,
    websiteIssues: [
      "Phone number in the header isn't clickable on mobile — visitors have to copy or type it manually.",
      "Service area (Macomb & Oakland County) isn't above the fold; some visitors bounce before they know you serve them.",
      "Gallery is strong but the quote form is long; shortening it could improve conversions.",
      "No clear 'What happens next' after submit — a one-line note would set expectations.",
    ],
    gbpClaimed: false,
    gbpNote: "No GBP at the Shelby Township address. When people search 'kitchen remodel Shelby Township' or 'bathroom renovation Macomb County,' you don't show up.",
    googleReviews: 0,
    googleRating: null,
    facebookReviews: 24,
    facebookRating: 4.9,
    yearsInBusiness: 10,
    founded: 2014,
  },

  competitor: {
    name: "Premier Renovations",
    city: "Sterling Heights, MI",
    services: "Kitchens · Bathrooms · Basements · Additions",
    website: "premierrenovationsmi.com",
    websiteStatus: "working" as const,
    gbpClaimed: true,
    googleReviews: 186,
    googleRating: 4.8,
    onlineBooking: true,
  },

  market: [
    {
      name: "Premier Renovations",
      location: "Sterling Heights, MI",
      googleReviews: 186,
      googleRating: 4.8,
      gbp: true,
      note: "Dominant in Macomb — shows for most remodel searches",
    },
    {
      name: "Macomb Home Pros",
      location: "Clinton Township, MI",
      googleReviews: 72,
      googleRating: 4.6,
      gbp: true,
      note: null,
    },
    {
      name: "Peak Home Remodeling",
      location: "Shelby Township, MI",
      googleReviews: 0,
      googleRating: null,
      gbp: false,
      note: "You — same as demo site",
    },
  ],

  opportunities: [
    {
      urgent: false,
      title: "Claim & optimize your listings on every platform customers actually check",
      body: "Google is still the biggest, but in 2026 people also check Apple Maps, BBB, Angi, and Yellow Pages. When those listings are missing or incomplete, you become invisible even if you have real reviews and a good site.\n\nHere's exactly how to do it yourself:\n• Apple Maps → businessconnect.apple.com → search your address and claim it (requires an Apple ID and possible postcard verification).\n• BBB → bbb.org/get-listed → add or claim your business (email + phone verification).\n• Angi → angi.com → join as a service pro and claim your profile (free basic listing).\n• Yellow Pages → yellowpages.com/claim-your-listing → search and claim (email/phone).\n\nEach one takes a little time plus any verification waits, but once they're done you start showing up in more places where customers look. (For Peak Home Remodeling, the Shelby Township slot is currently empty in both Apple Maps and Angi.)",
    },
    {
      urgent: false,
      title: "Build a simple automated review request system so you never miss a chance to ask for feedback",
      body: "After every job, a quick text can go out automatically (\"Loved the work? Tap here for a 15-second review\"). This feeds Google, Apple Maps, Facebook, and the rest without you having to chase customers manually.\n\nSetting it up yourself means: getting a dedicated business line, writing and testing the message templates, making sure it complies with texting rules, and wiring up the trigger after jobs. It's not complicated, but it does take focused time to get right and test thoroughly. Once it's live, the requests go out automatically. (Your 300+ happy customers on Facebook are the fastest fuel for reviews across every platform.)",
    },
    {
      urgent: false,
      title: "Tighten up the site — small fixes that reduce bounce",
      body: "Make the phone number tappable on mobile. Put 'Macomb & Oakland County' above the fold so local customers know you serve them. Add a single line after the quote form ('We'll call within 24 hours') to set expectations. These changes take a few hours and remove friction for people who are ready to get a quote.\n\nThese site fixes work alongside your presence on Google, Apple Maps, BBB, and elsewhere — the more consistent you are everywhere, the better.",
    },
  ],
} as const;
