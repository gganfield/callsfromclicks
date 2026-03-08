export const pitchData = {
  prospect: {
    name: "Big Dawgs Lawn & Landscape",
    city: "Romeo, MI",
    services: "Lawn Care · Landscaping · Bush Trimming · Mulch & Rock · Fall Cleanups · Snow Removal",
    website: "bigdawgslandscape.com",
    websiteStatus: "working-wix" as const,
    websiteIssues: [
      "Three testimonial slots in the carousel, only one is filled — the auto-scroll reveals two blank slots.",
      "Phone number and email in the header aren't clickable. On mobile, visitors have to manually type them out — most won't.",
      "Some project photos have 'AFTER' text on them, others don't. Inconsistent presentation.",
      "'Proudly created with Wix.com' visible in the footer — signals a DIY build to potential customers.",
      "Contact forms are longer than they need to be for a quote request.",
    ],
    gbpClaimed: false,
    gbpNote: "No GBP exists for the Romeo, MI location. A different business (Big Dawg Landscape, Indiana) appears in some searches — this is unrelated and doesn't block Zach from creating his own at his address.",
    googleReviews: 0,
    googleRating: null,
    facebookReviews: 1,
    facebookRating: 5.0,
    yearsInBusiness: 16,
    founded: 2009,
  },

  // Primary competitor — used in the hero stat block
  competitor: {
    name: "Grant Property Service",
    city: "Washington Township, MI",
    gbpClaimed: true,
    googleReviews: 9,
    googleRating: 4.6,
  },

  // Full market table — shows the broader competitive landscape
  market: [
    {
      name: "Grant Property Service",
      location: "Washington, MI",
      googleReviews: 9,
      googleRating: 4.6,
      gbp: true,
      note: "North Macomb — your direct geographic competitor",
    },
    {
      name: "Green Meadows Lawnscape",
      location: "Rochester Hills, MI",
      googleReviews: 222,
      googleRating: 3.3,
      gbp: true,
      note: "Below average rating — still appears in search",
    },
    {
      name: "Big Dawgs Lawn & Landscape",
      location: "Romeo, MI",
      googleReviews: 0,
      googleRating: null,
      gbp: false,
      note: "You",
    },
  ],

  opportunities: [
    {
      urgent: false,
      title: "Clean up the site — a few things are quietly losing you customers",
      body: "The testimonials carousel on your homepage is empty — visitors see blank slots where social proof should be. The contact form asks for company name, address, and photo uploads just to request a quote. The Wix footer branding signals a DIY build to potential customers. These are not dealbreakers but they are the difference between someone trusting you and bouncing to whoever is next in search. Some of these may already be in progress — if so, great.",
    },
    {
      urgent: true,
      title: "Claim your GBP — the slot in Romeo is open right now",
      body: "A Google Business Profile is free and shows up above every search result with your phone number, photos, hours, and a directions link visible before anyone clicks anything. Right now every search for lawn care, landscaping, or snow removal in Romeo routes to someone else. Grant Property Service claimed theirs with 9 reviews and is already ahead of you geographically. Your past customers are the fastest path to getting reviews on the board once you claim it.",
    },
    {
      urgent: false,
      title: "North Macomb is yours to own — and right now it's wide open",
      body: "Grant Property Service has been in Washington Township since 2013 and still has no real web presence beyond a basic GBP and 9 reviews. Romeo, Washington Township, Ray Township, and Armada are wide open. A site and GBP built specifically for north Macomb means you show up first when someone in your own backyard searches for lawn care or snow removal. That position is unclaimed. It will not stay that way.",
    },
  ],
} as const;
