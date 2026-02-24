# Competitor Snapshot — Agent Build Guide

This file is the standing brief for building a competitor snapshot pitch page for any new service business prospect. Read this entire file before starting. The UI is already built and data-driven — your job is research + filling in the config.

---

## What This Is

A private, dark-themed web page sent to a prospect via text link (e.g. `yourdomain.com/audit/ben`). It shows them their current online presence problems, benchmarks them against their top local competitor, and ends with a confident, low-pressure close. It is free, takes ~15 minutes to build once you have the data, and is the opener before making the $1,500 website offer.

**Design is already done.** Do not redesign it. See `app/audit/ben/page.tsx` for the live reference — that is the template. Duplicate it at `app/audit/[clientname]/page.tsx`.

---

## Step 1 — Research Checklist

Run every item below before touching any code. Most can be done with web search + web fetch.

### The Prospect

| Field | How to find it |
|---|---|
| Business name | Ask or check their social |
| City, state | Ask or check Google Maps |
| Phone | Their website, Facebook, or Google Maps |
| Services offered | Their Instagram bio or Facebook "About" section — use their exact wording |
| Website URL | Their Facebook page, Yelp, or Google Maps listing |
| **Is the website working?** | Fetch the URL programmatically — if it returns blank or redirects, it's broken. Also note what happens on Safari vs Chrome if known |
| **Is it Google-indexable?** | Fetch the URL. If the response body is empty or JS-only, Google cannot read it |
| Facebook handle + review count + rating | Search Facebook directly |
| Instagram handle | Check their Facebook "About" or search Instagram |
| TikTok / YouTube handles | Check their linktree, Facebook bio, or search the platform |
| Yelp review count + rating | Search "[Business Name] [City] Yelp" |
| **Google Business Profile claimed?** | Search "[Business Name] [City]" on Google. If no GBP panel appears on the right side of results, it's not claimed |
| **Google review count + rating** | Same search — shown in the GBP panel if it exists |
| **Shows up in Google Search?** | Search their core services + city (e.g. "ceramic coating Romeo MI"). Note which services return them and which don't |

### The Top Competitor

Pick the ONE competitor closest to them geographically that is clearly winning on Google. Usually the one with the most Google reviews in the same county/city. Look for:
- Strong GBP (photos, reviews, booking button, services listed)
- A working website
- Active social media

| Field | How to find it |
|---|---|
| Competitor name | Google "[service] [city/county]" — look at the Maps pack |
| City | Their GBP or website |
| Google review count + rating | GBP panel in search results |
| GBP status | Is it fully built? Do they have a "Book Online" button? Photos? Services listed? |
| Website status | Fetch the URL — working, under construction, or broken? |
| Facebook review count | Search Facebook |
| Services offered | Their website or GBP listing |
| Key advantage they have | What are they winning on that the prospect is losing on? |

---

## Step 2 — Fill in the Config

Create a new file: `app/audit/[clientname]/pitch.config.ts`

Copy this schema and fill in every field from your research:

```ts
// app/audit/ben/pitch.config.ts — example
export const pitchData = {
  prospect: {
    name: "Ben's Auto Spa",
    city: "Romeo, MI",
    services: "Window Tinting · PPF · Paint Correction · Ceramic Coating",
    website: "bensautospa.com",
    websiteStatus: "broken", // "working" | "broken" | "js-only" (Google can't read it)
    websiteNote: "Chrome redirects to a random auto racing article. Safari loads a blank white page.",
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
    locationAdvantage: "Romeo — north end of Macomb County. Washington Township, Ray Township, and Armada are right in your backyard.",
    serviceArea: "north Macomb County",
  },

  competitor: {
    name: "Diamond Detailz",
    city: "Shelby Township",
    services: "Window Tinting · PPF · Ceramic Coating",
    website: "diamonddetailzllc.com",
    websiteStatus: "under-construction", // "working" | "broken" | "under-construction"
    gbpClaimed: true,
    gbpNote: "Fully built — photos, services, online booking live.",
    googleReviews: 124,
    googleRating: 5.0,
    facebookReviews: 13,
    onlineBooking: true,
    googleSearchVisibility: "Maps pack for paint correction", // What searches do they show up for?
  },

  // What searches did you run where neither of them showed up?
  searchGaps: [
    "ceramic coating Romeo MI",
    "window tinting Romeo MI",
    "PPF Romeo MI",
    "auto detailing Romeo MI",
  ],

  // Market table — 3-4 competitors showing the full landscape (strongest first, prospect last)
  // Always include the prospect as the last row with 0 reviews and gbp: false if unclaimed
  // The "below average rating" row is the most impactful — find a competitor with 3-4 stars
  // who still outranks the prospect. It proves this is about presence, not quality.
  market: [
    {
      name: "Top Competitor",
      location: "City, MI",
      googleReviews: 701,
      googleRating: 4.7,
      gbp: true,
      note: "Dominant — shows up for every local search",
    },
    {
      name: "Mid Competitor (find one with a low rating if possible)",
      location: "City, MI",
      googleReviews: 222,
      googleRating: 3.3,
      gbp: true,
      note: "Below average rating — still outranks prospect",
    },
    {
      name: "Local / Geographic Competitor",
      location: "Same city or adjacent",
      googleReviews: 9,
      googleRating: 4.6,
      gbp: true,
      note: "Their direct local competitor",
    },
    {
      name: "Prospect Business Name",
      location: "Their city, MI",
      googleReviews: 0,
      googleRating: null,
      gbp: false,
      note: "You",
    },
  ],

  // The 3 gaps / opportunities — customize per prospect, keep to 3
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
      body: "The major shops — Diamond Detailz, K&D Auto Spa — are clustered around Shelby Township. A site and GBP built specifically for Romeo, Washington Township, and the surrounding area gives you a clear geographic edge in searches coming from the north end of the county.",
    },
  ],
} as const;
```

---

## Copy Tone Guidelines

- **Observational, not accusatory.** "The reviews haven't been collected in a place Google can see" — not "you have zero reviews to show for it."
- **Frame gaps as opportunities, not failures.** "That position is unclaimed at your address" — not "you're invisible."
- **The data does the heavy lifting.** Let the `0 vs 701` stat land the gut punch. The prose around it should be calm and matter-of-fact.
- **The close is always low-pressure.** "Text me back when you've had a chance to go through this." No urgency language, no scarcity, no fear.

---

## Step 3 — Build the Page

1. Duplicate `app/audit/ben/page.tsx` → `app/audit/[clientname]/page.tsx`
2. Replace all hardcoded strings with values from your `pitchData` config
3. The UI structure stays exactly the same — do not redesign it
4. Update `metadata.title` at the top of the file
5. Run `npm run build` — must be zero errors before the page is shareable

---

## What Always Needs Human Verification

Some things can't be confirmed programmatically. Flag these to the human before sending:

- [ ] Confirm exact Google review count (search on Google Maps on a real device)
- [ ] Confirm GBP is actually unclaimed (sometimes it's claimed but not optimized)
- [ ] Confirm the broken website behavior on a real phone (Safari + Chrome)
- [ ] Confirm competitor's services match what's listed (check their actual GBP, not just the website)
- [ ] Confirm social handles are the prospect's actual accounts (not a different business with a similar name)
- [ ] Double-check any claims about search visibility with real searches

---

## Research Time Target

With this guide, research should take **15–20 minutes**:
- 5 min: prospect's website, socials, GBP status
- 5 min: identify top competitor, pull their GBP stats
- 5 min: run 4–6 test searches and note what shows up
- 5 min: fill in the config and flag anything that needs human eyes

The code build after that should take **10–15 minutes** (mostly copy/paste from the config into the page).

Total: ~30 minutes per prospect. Free bonus that lands before you ever make an offer.

---

## File Reference

```
service-sites/
├── SNAPSHOT_TEMPLATE.md          ← you are here
├── client.config.ts              ← main site branding (one per client)
├── app/
│   ├── audit/
│   │   ├── ben/
│   │   │   ├── page.tsx          ← live reference UI (do not delete)
│   │   │   └── pitch.config.ts   ← Ben's data (create one per prospect)
│   │   └── [nextclient]/
│   │       ├── page.tsx          ← duplicate from audit/ben/page.tsx
│   │       └── pitch.config.ts   ← fill in from research
```
