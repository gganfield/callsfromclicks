export const pitchData = {
  prospect: {
    name: "Ben's Auto Spa",
    city: "Romeo, MI",
    services: "Window Tinting · PPF · Paint Correction · Ceramic Coating",
    website: "bensautospa.com",
    websiteStatus: "broken" as const,
    websiteChrome: "Redirects to a random auto racing article on an unrelated website.",
    websiteSafari: "Blank white page.",
    websiteNote:
      "This happens when a domain's hosting lapses or gets caught in a parking redirect network. Every referral — from Instagram, Facebook, Yelp, or word of mouth — has hit a dead end.",
    gbpClaimed: false,
    googleReviews: 0,
    googleRating: null,
    facebookHandle: "Bens Auto Spa LLC",
    facebookReviews: 21,
    facebookRating: 5.0,
    instagramHandle: "@bensautospa_",
    tiktokHandle: "@bensautospa_",
    youtubeHandle: "@bensautospa",
    yelpReviews: 1,
    yelpRating: 5.0,
    recentContent: "Posted a full-car tint walkthrough 2 days ago",
    locationNote:
      "Romeo puts you at the northern end of Macomb County — north of where the major shops are clustered. Washington Township, Ray Township, and Armada are all right in your backyard.",
  },

  competitor: {
    name: "Diamond Detailz",
    city: "Shelby Township",
    services: "Window Tinting · PPF · Ceramic Coating",
    websiteStatus: "under-construction" as const,
    gbpClaimed: true,
    gbpNote: "Fully built — photos, services, and online booking live via GBP.",
    googleReviews: 124,
    googleRating: 5.0,
    facebookReviews: 13,
    onlineBooking: true,
    googleSearchNote: "Maps pack for paint correction",
  },

  opportunities: [
    {
      urgent: true,
      title: "Fix and replace the website — it's actively sending people away right now",
      body: "Every person you've pointed to bensautospa.com has either gotten a blank page or a redirect to a random auto racing article. All that consistent content you're posting on Instagram and TikTok has nowhere to land. A working site that Google can read turns your existing audience into actual booked jobs.",
    },
    {
      urgent: false,
      title: "Claim your Google Business Profile — it's free, and Diamond Detailz is using theirs against you",
      body: "Diamond Detailz has 124 Google reviews and a full GBP with photos and a live booking button. That's why they show up when someone types 'ceramic coating near me' and you don't. Claiming yours costs nothing. Converting your existing Facebook 5-star reviewers to Google reviews gets you on the board fast.",
    },
    {
      urgent: false,
      title: "Build a presence specifically for north Macomb",
      body: "The major shops — Diamond Detailz, K&D Auto Spa — are clustered around Shelby Township. A site and GBP built specifically for Romeo, Washington Township, and the surrounding area gives you a clear geographic edge in searches coming from the north end of the county. The audience is there. Right now there's no online destination built for them.",
    },
  ],
} as const;
