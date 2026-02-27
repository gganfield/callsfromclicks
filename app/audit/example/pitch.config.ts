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
      urgent: true,
      title: "Claim your Google Business Profile — the Shelby Township slot is open",
      body: "A GBP at your address is free and shows up above organic results with your phone number, hours, photos, and reviews. Right now that position is empty when people search 'kitchen remodel Shelby Township' or 'bathroom renovation Macomb County.' Your existing Facebook reviewers and 300+ happy customers are the fastest path to getting your first 15–20 Google reviews and showing up where it matters.",
    },
    {
      urgent: false,
      title: "Tighten up the site — small fixes that reduce bounce",
      body: "Make the phone number tappable on mobile. Put 'Macomb & Oakland County' above the fold so local customers know you serve them. Add a single line after the quote form ('We'll call within 24 hours') to set expectations. These changes take a few hours and remove friction for people who are ready to get a quote.",
    },
    {
      urgent: false,
      title: "Own Shelby Township and north Macomb before more competitors pile in",
      body: "Premier Renovations is strong in Sterling Heights and central Macomb. Shelby Township, Washington Township, Romeo, and north Oakland are a natural fit for a crew based in Shelby. A site and GBP that explicitly name those areas will rank for searches from homeowners who are already in your service area.",
    },
  ],
} as const;
