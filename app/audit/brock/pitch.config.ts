export const pitchData = {
  prospect: {
    name: "Horne Residential Services LLC",
    city: "Rochester Hills, MI",
    services:
      "Kitchen Remodeling · Bathroom Renovations · Basement Finishing · Flooring · Tile · Drywall · Painting · Decks · Pressure Washing · Concrete Sealing",
    website: null as null,
    websiteStatus: "none" as const,
    gbpClaimed: true,
    googleReviews: 2,
    googleRating: 5.0,
    facebookHandle: "Horne Residential Services LLC",
    facebookFollowers: 171,
    facebookReviews: 0,
    facebookRating: null as null,
    facebookNote: "Active · real project photos",
    yelp: "Not found",
    angi: "Not found",
    appleMaps: "Not confirmed",
    yellowPages: "Not found",
    credibility: "Licensed & Insured · Serving Macomb and Oakland Counties",
  },

  // Google Reviews comparison — You vs. competition
  competitionTable: [
    {
      name: "Michigan Construction Group",
      reviews: 9,
      rating: 5.0,
      gbp: "Claimed (duplicate listing)",
      website: "Full site",
      isYou: false,
    },
    {
      name: "Gittleman Construction",
      reviews: 17,
      rating: 4.5,
      gbp: "Claimed",
      website: "Full site",
      isYou: false,
    },
    {
      name: "Horne Residential Services",
      reviews: 2,
      rating: 5.0,
      gbp: "Partial",
      website: "None",
      isYou: true,
    },
  ],

  websiteIssues: [
    "Your Facebook page lists Detroit, MI as the location, but your GBP correctly shows Rochester Hills and surrounding areas. When homeowners and search engines see conflicting info across platforms, it creates quiet doubt and can affect where you show up.",
    "Contact email: brockhorne2@gmail.com is listed on your Facebook page, and a separate address (horneresidentialservicesllc@gmail.com) appears in posts. Two different addresses floating around publicly, neither on a professional domain. A custom domain email (brock@horneresidential.com or similar) is a one-time fix that makes everything look more consistent and established.",
    "You're running your personal cell as the business line. That works fine right now, but it means your personal number is public, you can't separate work calls from everything else, and when you miss a call on a job site there's no system in place to respond automatically. Every missed call with no follow-up within minutes is a lead that moves on to the next guy.",
  ],

  opportunities: [
    {
      urgent: true,
      showUrgentTag: false,
      title: "Build the website your GBP is already asking for",
      body: "Google's own panel on your listing shows \"Add website\", meaning Google is flagging the gap on your behalf. A site built around your actual services and your actual geography (Rochester Hills, Rochester, Macomb County, Oakland County) gives Google something to index, gives homeowners somewhere to land, and turns your Facebook project photos into a real portfolio. The build should be mobile-first, built for how Rochester Hills homeowners actually search (on their phones), with a click-to-call button, a short quote request form, and your work front and center. That's what converts a curious visitor into a call. Right now the GBP is doing the job of the website too, and it's not designed for that.",
    },
    {
      urgent: false,
      showUrgentTag: true,
      title: "Go from 2 Google reviews to 20",
      body: "Your 5.0 rating is a real asset. Don't let it sit at 2 reviews. The way to build it is simple: ask every client right after a completed job while the work is still fresh, whether that's in person before you part ways or a quick text with a direct Google review link shortly after. The clients who hired you already like you, they just need to be pointed at where to say it. Getting to 20 reviews does two things: it makes your 5.0 credible to homeowners who are comparing you against established operators, and it improves where you show up in local search. Google factors review velocity into rankings. Consistent new reviews over time outperform a big batch followed by silence.",
    },
    {
      urgent: false,
      showUrgentTag: true,
      title: "Get your name consistent everywhere homeowners look",
      body: "Yelp, Angi, Apple Maps, Yellow Pages — these aren't where the bulk of your leads will come from, but they matter more than most people realize. Nearly half of consumers now use AI tools to research local businesses before ever picking up the phone. AI doesn't just search Google. It pulls from your website, your reviews, your maps listings, and every platform your business appears on. If your information is inconsistent or missing across those platforms, AI either skips you or gets it wrong. Having the same business name, phone number, and service area everywhere is a signal Google uses when deciding who to surface in local search, and it's the data AI tools use when deciding who to recommend. The inconsistencies between your Facebook page and your GBP (Detroit vs. Rochester Hills) are exactly the kind of thing that quietly costs you ranking. Getting them claimed and aligned is the hard part. After that it's just keeping them accurate.",
    },
  ],
} as const;
