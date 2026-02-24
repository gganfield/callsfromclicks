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
    name: "Big Lakes Lawncare",
    city: "Macomb, MI",
    address: "51540 Romeo Plank Rd",
    services: "Lawn Mowing · Fertilization · Weed Control · Aeration · Mulch · Shrub Trimming · Snow Removal",
    website: "biglakeslawncare.com",
    websiteStatus: "working" as const,
    gbpClaimed: true,
    googleReviews: 701,
    googleRating: 4.7,
    onlineBooking: true,
  },

  // Full market table — shows the broader competitive landscape
  market: [
    {
      name: "Big Lakes Lawncare",
      location: "Macomb, MI",
      googleReviews: 701,
      googleRating: 4.7,
      gbp: true,
      note: "Dominant — shows up for every local search",
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
      name: "Grant Property Service",
      location: "Washington, MI",
      googleReviews: 9,
      googleRating: 4.6,
      gbp: true,
      note: "North Macomb — your direct geographic competitor",
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
      title: "Upgrade the site — it has small issues that quietly lose customers",
      body: "The site works, but a few things are actively undermining trust. The testimonial carousel scrolls to two empty slots. The phone number and email aren't tappable on mobile — visitors have to manually type them out. The Wix footer branding signals a DIY build. These aren't catastrophic, but they're the difference between a visitor trusting you and bouncing to someone else.",
    },
    {
      urgent: true,
      title: "Set up a Google Business Profile — the slot is open in Romeo",
      body: "A GBP at your address is free to create and shows up above regular search results with your phone number, photos, hours, and reviews visible before anyone clicks anything. Right now that spot sits empty in your city while every search for lawn care, snow removal, or landscaping in the area routes to someone else. Your past Facebook customers are the fastest path to getting reviews on the board.",
    },
    {
      urgent: false,
      title: "Build something specifically for north Macomb customers",
      body: "Big Lakes is optimized for Macomb and Chesterfield — central and south county. Romeo, Washington Township, Ray Township, and Armada are a natural fit for a business based here. A site and GBP that specifically names those areas ranks organically in searches coming from customers who are already closer to your door than to theirs.",
    },
  ],
} as const;
