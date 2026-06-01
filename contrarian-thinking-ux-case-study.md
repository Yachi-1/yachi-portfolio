# Designing three different products for the small-business buying community in America (Contrarian Thinking)

**A UX Process Walkthrough**

A complete UX case study for Contrarian Thinking, from desk research and competitor audit, through synthesis, ideation, and design decisions, to three interfaces. Built without inside access, structured to show the thinking, not just the screens.

**The process, in five phases:** Brief → Research → Synthesis → Design → Deliver

---

## Contents

**The process, end-to-end.**

Five phases of UX work, brief, research, synthesis, design, deliver. The interfaces sit at the end as the payoff, not the beginning.

1. **Phase 01 · The Brief** — How I scoped this for myself, the "client," the context, the constraints.
2. **Phase 02 · Research** — Sources · Competitor screens · Competitor matrix.
3. **Phase 03 · Synthesis** — Persona · Journey map · Affinity board · Key insights · Problem statement.
4. **Phase 04 · Ideation & Design** — How might we · What I cut · Key decisions · Wireframes · Design system.
5. **Phase 05 · Deliver** — AI Matcher · Deal Pipeline · Design Hub.
6. **Reflection & Next Steps** — What I learned, and what I'd validate with real users.

---

## The short version.

Contrarian Thinking is a media-and-education company built around Codie Sanchez's "buy boring businesses" thesis. They have 10,000+ paying members. But the actual work members joined to do, finding, evaluating, buying, and running a small business, happens almost entirely outside the product surface. I treated this as a self-directed UX brief and worked through the full process to design what's missing.

| Project Type | Role | Deliverables | Method |
|---|---|---|---|
| Self-Initiated UX Case Study | Sole designer | 3 product prototypes | Desk research, synthesis, ideation, prototyping |

### The five phases, in one sentence each

- **Brief.** Treat Contrarian Thinking's public surface as a brief; identify what a "designer in residence" would be asked to solve.
- **Research.** Study their content, their members' words, their competitors, and the wider small-business-acquisition space.
- **Synthesis.** Turn raw research into a persona, a journey map, and four insight statements.
- **Ideation.** Generate seven candidate products. Cut three. Frame the remaining three with "how might we" questions.
- **Design + deliver.** Make three key UX decisions, then build the interfaces as live prototypes.

> **A note on speculation**
>
> This is self-initiated. I have not worked with Contrarian Thinking, and nothing here is endorsed by them. I've been specific about what I learned from public sources, what I inferred, and what I'd want to validate with real access. The honesty matters: a UX case study without users has to over-index on transparency to be credible.

---

# Phase 01 · The Brief

## Treating the website as a client brief.

I gave myself a fictional engagement: imagine Contrarian Thinking has hired a designer-in-residence for one quarter. What would they ask me to work on? The starting point was their public surface, the website, the newsletters, the podcast, the testimonials. From those, I extracted a one-paragraph brief I'd write back to the "client."

### The brief I wrote myself

> Contrarian Thinking has built a category-defining media business around small-business acquisition. 10,000+ members pay for the Academy. But our product surface stops at the door, once a member commits to buying a business, the actual work happens in their spreadsheets, their Slack DMs, and their heads. Design what should live between the course and the close.
>
> — Brief, self-authored from public information

### What I knew going in

**From the website**

Two flagship programs: Contrarian Academy (for buyers) and Growth Boardroom (for owners). A newsletter claimed at 1M+ readers. An investment arm (Contrarian Thinking Capital). Live events. The brand is sharp, the copy is direct, the visual language leans course-creator more than editorial.

**From the founder**

Codie Sanchez, former Wall Street, NYT bestseller (*Main Street Millionaire*), owns dozens of small businesses. Brand voice: punchy, manifesto-grade ("If you don't choose your hard, your hard will choose you"). The brand has earned the right to be taken seriously.

### The constraints I set

- **No access.** No member interviews, no analytics, no team Slack. Desk research only.
- **Three weeks of evenings.** Real-time constraint. Forces editing and prioritization.
- **Show the process.** Treat this as a case study from day one, document research and synthesis, not just final screens.
- **Ship working prototypes.** If a product can be built in code, it should be, static mockups are easier to fake than functional UI.

---

# Phase 02 · Research

## Where I went looking for real signal.

Without member interviews, the next-best signal is the words members and operators use in public, newsletters, podcast transcripts, community forums, testimonials. I spent the first week immersed. Below is the source list and what each was useful for.

### Primary sources, Contrarian Thinking's own surface

**Main Street Minute** *(Newsletter, 12 issues)*
Tuesday tactical issue. Heavy on real deal breakdowns from members, the most useful single source for workflow detail.

**Codie Sanchez on YouTube** *(Podcast, 12+ hours)*
Prioritized episodes where members described their buying process in their own words. Verbatim quotes shaped the persona.

**contrarianthinking.co** *(Marketing site, 30+ pages)*
Audited every member-facing page. Captured tone of voice, current information architecture, and unspoken positioning.

**Academy member stories** *(Testimonials, 40+)*
Public testimonials are PR-shaped but reveal which moments members remember as turning points.

### Secondary sources, the wider buyer community

**r/smallbusiness, r/Entrepreneur, r/SearchFunds** *(Reddit)*
Where members go to ask questions outside their paid community. The repeated questions are the unmet needs.

**#BoringBusiness, search-fund operators** *(X / Twitter)*
Following 30+ active buyers, brokers, and SBA lenders gave the language of the workflow.

**BizBuySell Insight Report** *(Industry report)*
Quarterly data on transaction volume, deal sizes, and median multiples. Grounds the market sizing.

**BizBuySell, Acquire.com, DealRoom, Searchfunder** *(Competitor products)*
Audited UX of every product in adjacent space. See next page for the comparison matrix.

---

## Four competitors, screen-by-screen.

Before building the comparison matrix, I audited each competitor's actual interface, their homepages, search experiences, and any free-tier product surface.

**BizBuySell**
The Internet's #1 marketplace · 60,000+ listings.
*Strong sourcing, weak filtering. The list view is a wall of listings.*

**Acquire.com**
Marketplace + deal room for online businesses.
*Better UX. Has light deal-room features, but stops at LOI.*

**DealRoom**
M&A project management for large firms.
*Enterprise-grade. Built for $100M+ deals, not boring businesses.*

**Searchfunder**
Community + content for search-fund operators.
*Community-first, not product-first. Great content, no tools.*

> **What I was looking for in each**
>
> For every competitor, the same five questions: (1) Who is this for? (2) What stage of the journey do they own? (3) What's the strongest moment in the experience? (4) Where does the user fall off? (5) What would I steal vs. avoid? Notes from these became the matrix on the next page.

---

## What the competitors actually solve.

I audited four products in the adjacent space against the five stages of the buyer journey. The gaps in the table below were the most useful finding of the entire research phase, they showed that nobody is serving the whole journey, and that "course + community + product" is an open positioning.

| Product | Source Deals | Evaluate | Track Pipeline | Close Deal | Operate |
|---|---|---|---|---|---|
| BizBuySell | ✓ | partial | — | — | — |
| Acquire.com | ✓ | partial | partial | — | — |
| DealRoom | — | ✓ | ✓ | partial | — |
| Searchfunder | partial | partial | — | — | — |
| **CT (today)** | — | — | — | — | — |

**What the matrix told me**

Marketplaces (BizBuySell, Acquire) own sourcing but stop there. M&A tools (DealRoom) own pipeline tracking but assume you already found a deal. Nobody covers the journey end-to-end, and crucially: nobody owns the "operate the business you just bought" stage at all.

**What this meant for the brief**

CT's product surface today is empty on this matrix, which is a feature, not a bug. It means they can build the integrated journey nobody else has, with the audience already trusting them. The three products I'd design map directly to the empty cells.

> **The honest limit of this audit**
>
> I audited these products from their public-facing pages and free trials. I did not run usability tests, time-on-task measurements, or interview their users. The matrix shows what each product *claims to do*, not necessarily what their users *actually use them for*. With real access I'd validate.

---

# Phase 03 · Synthesis

## The person I was designing for.

From the patterns across testimonials, podcast quotes, and community threads, one persona emerged repeatedly. Not a fictional composite, a real type of member that appeared in nearly every source. I gave this person a name and a working life so I could keep checking design decisions against them.

### Marcus, 34

*Mid-career corporate · 5 months into the Academy*

> "I've looked at maybe 200 listings on BizBuySell. I have no idea which of them I should actually pursue."

**Goals**
Leave his marketing job. Own a cash-flowing business that runs without him within two years. $300k–$500k capital from savings + SBA.

**Frustrations**
Information overload. Eight tabs open. A Google Sheet with 40 leads breaking down. Forgot to follow up with a seller for two weeks.

**What works for him**
The Academy's structured frameworks. The community's deal breakdowns. Clear, opinionated advice from operators who've done it.

**Where he goes dark**
Months 3–6, when he's evaluating deals alone in spreadsheets. This is when most members in testimonials describe nearly quitting.

### Why one persona, not three

Most UX case studies show three personas. I considered it (Marcus the first-time buyer, Sarah the experienced operator, David the search-fund investor) but ultimately cut down to one. Reason: the three products are all designed for the buyer journey, and the buyer is overwhelmingly Marcus-shaped. Designing for three personas at once would have meant designing for none of them well. With real access, I'd validate that this concentration is correct.

---

## Marcus's journey, mapped.

Five stages from "curious about owning a business" to "owns one." For each stage I noted what Marcus does, what he feels, what tools he uses, and whether Contrarian Thinking's current product covers it. The pattern is unmistakable.

| Stage | 01 Discover the idea | 02 Convert to member | 03 Learn the system | 04 Find & evaluate deals | 05 Close & operate |
|---|---|---|---|---|---|
| **Doing** | Listening to podcasts, reading the newsletter | Watches webinar, signs up for Academy | Cohort, playbooks, community | 200+ listings, 8 tabs, Google Sheets | Owns the business · needs to grow it |
| **Tool** | Newsletter, YouTube | Marketing site, checkout | Academy LMS, Slack | None from CT | None from CT |
| **Feeling** | Excited | Committed | Confident | **Overwhelmed** | **Alone** |
| **Status** | covered | covered | covered | **GAP** | **GAP** |

### What this told me

Marcus's emotional confidence collapses at stage 4. This is the moment he paid Contrarian Thinking to help him through, and it's the moment the product abandons him. Stages 4 and 5 also happen to be where the journey lasts the longest, 4 to 12 months for stage 4, and the rest of his working life for stage 5. The intervention with the highest leverage is anything that supports stages 4 and 5.

---

## Sticky notes, then themes.

Before writing insights, I dumped every notable quote, complaint, and observation from the research onto sticky notes, about 80 of them. Then I grouped them into themes. Below is the final board, simplified to one column per theme. This is the synthesis step that connects raw research to insight statements.

### Theme · Overwhelm

- "200 listings on BizBuySell. No idea which to pursue." *(Reddit · r/smallbusiness)*
- Eight tabs open across BizBuySell, broker sites, county records *(Podcast · ep 142)*
- "I spent 6 weeks before sending a single email" *(Testimonial)*
- Filter fatigue: SIC code, geography, revenue, multiple *(Acquire.com)*
- "Should I even be looking at SaaS? Or laundromats?" *(X reply)*

### Theme · Lost track

- "Google Sheet broke at row 40, deals fell off" *(Podcast · ep 156)*
- Forgot to follow up with seller for two weeks *(Newsletter case study)*
- No system for which lender is on which deal *(Reddit thread)*
- "Same questions on diligence checklist every time" *(Slack community)*
- Days-since-contact is the most common dropped ball *(X · search-fund operator)*

### Theme · After close

- "Previous owner's face is still on my Yelp" *(Main Street Minute · Apr 28)*
- Website hasn't been updated since 2014 *(Podcast · ep 138)*
- "Do I hire someone or learn Canva myself?" *(Reddit · r/Entrepreneur)*
- Existing customers don't know there's a new owner *(Testimonial)*
- Marketing spend that won't make this quarter back *(Podcast guest)*

### Theme · Brand fit

- "CT content is sharp, site feels like a course funnel" *(Own audit notes)*
- Editorial voice doesn't match visual register *(Site audit)*
- $10k+ Academy buyers expect investor-grade brand *(Inferred)*
- Codie's voice is manifesto, container is funnel *(Own audit notes)*
- "Step Inside" CTA already on brand-voice *(Site copy)*

### What this clustering told me

Four themes, each pointing at a different moment in the journey. Overwhelm happens early when Marcus is looking at listings. Lost-track happens mid-search when his pipeline outgrows a spreadsheet. After-close happens once he owns the business and his problem changes from buying to operating. Brand-fit is structural, it sits underneath all three. The neatness of the clustering was actually suspicious: real research usually has messier themes. Worth flagging as a place I'd want real users to push back.

---

## Four insights that framed the work.

From the persona, the journey map, and the competitor audit, I distilled four insight statements. Each one is short enough to fit in my head while designing. Each one points at a specific product opportunity. These became the brief-within-the-brief.

### Insight 01

> Members spend 4–12 months in a phase the current product doesn't support.

*Source: timeline patterns in 40+ public testimonials, confirmed by deal-breakdown podcast episodes. The "find a deal" phase is the longest single stage of the journey and the most product-poor.*

### Insight 02

> The hard part isn't choosing a business, it's narrowing 200+ listings to 3 worth pursuing.

*Source: the most-repeated complaint across Reddit, X, and Academy member testimonials. A recommender, not another search engine, is the right product shape for this insight.*

### Insight 03

> Buyers run their pipeline in spreadsheets that break down by week three.

*Source: search-fund operator threads on X, Acquire.com community discussions, and one podcast episode where a buyer described "losing" a seller because their tracking system was a Google Sheet that didn't trigger follow-ups.*

### Insight 04

> The moment a deal closes, the buyer's problem changes, but no product changes with them.

*Source: the Main Street Minute issue covering the car wash acquisition where the new owner described being stuck with the previous owner's website for six months. Pattern repeats across most "first 90 days" stories.*

---

## The problem, in one sentence.

Four insights, one persona, and one journey map all point to the same problem. Naming it explicitly, in one sentence, was the synthesis exercise that gave me permission to start designing. Every design decision downstream can be traced back to this statement.

> **PROBLEM STATEMENT**
>
> Marcus, a mid-career professional 5 months into the Academy, needs a way to *compress 200 listings to 3 high-confidence options* and *track the deals he pursues without his Google Sheet collapsing*, because the journey from "I want to buy a business" to "I own one" lasts 4–12 months, and Contrarian Thinking's current product abandons him for most of it.

### The problem, broken into its parts

| User | Need | Insight (Why) |
|---|---|---|
| Marcus, corporate, motivated, $300k–$500k capital, 5 months into Academy | Compress search space & hold pipeline without losing deals | Because the buy-phase is product-poor and Marcus goes dark in months 3–6 |

### Why this framing matters

A problem statement isn't a feature wishlist. It names *who*, *what they need*, and *why the current state fails them*, without prescribing the solution. This statement doesn't say "build an AI matcher and a pipeline dashboard." Those are the answers I happened to land on. The statement is the constraint, not the conclusion.

---

# Phase 04 · Ideation

## Three "how might we" questions.

Each insight became a how-might-we question framed broadly enough that multiple solutions could fit. The questions are the bridge between research and design, they keep me honest about what I'm trying to solve before I start sketching.

### HMW 01

> How might we help Marcus go from 200 listings to 3 high-confidence options without him doing the filtering himself?

→ Leads to **AI Acquisition Matcher**

### HMW 02

> How might we give buyers a tool that holds their pipeline so it stops collapsing in week three?

→ Leads to **Deal Pipeline Dashboard**

### HMW 03

> How might we support members in the first 90 days of ownership when their problem suddenly changes from buying to operating?

→ Leads to **Marketing Design Hub**

### Why HMW questions, not feature lists

The temptation at this stage is to jump straight to "build a CRM, build a marketplace." That short-circuits design thinking. The HMW format keeps the question open enough that the answer could be a product, a feature, a content piece, or a service. Forcing myself to write the question first meant the answer was actually considered, not assumed.

---

## Seven products sketched. Four cut.

Before settling on three products, I sketched seven. Cutting four of them was the highest-leverage decision in the entire project, anything I kept was a claim I'd have to defend. Here's what got cut, what stayed, and the one-sentence reason for each.

### ★ Kept

| Product | Reason |
|---|---|
| **AI Acquisition Matcher** | Highest user pain · highest signal in research · most defensible product shape |
| **Deal Pipeline Dashboard** | Clear workflow problem · proven product category · easiest to validate |
| **Marketing Design Hub** | Covers an underserved post-close moment · brand-defensible |

### ✕ Cut

| Product | Reason |
|---|---|
| **Brand Site Redesign** | Visual refresh, not a product problem · stand-alone work, not part of the ecosystem |
| **SBA Lender Marketplace** | Adjacent industry · regulatory complexity · not a design problem at this stage |
| **Member Mastermind Tool** | Slack already does this · low marginal value · would dilute focus |
| **Deal Valuation Calculator** | Solved by the course's existing templates · narrow product · feature, not a product |

**↓ Final 3 of 7 kept** — 57% cut rate · focus is the work.

> **The cutting criteria**
>
> Three filters: (1) Does it solve a problem that appeared in the journey-map gaps? (2) Is this a design problem, or is it something else dressed up as one? (3) Would shipping it make the other products more valuable, or compete with them? Anything that didn't pass all three got cut.

---

# Phase 04 · Design

## Three products, three design decisions.

For each product, one architectural decision shaped everything downstream. These weren't aesthetic choices, they were the calls about what kind of product each one fundamentally is. Getting these right before opening Figma was the difference between designing screens and designing products.

### 01 · AI Acquisition Matcher

**A recommender, not a search engine.**

Marketplaces hand the filtering work to the user. A recommender does the work for them, Marcus describes himself once, the system ranks every live deal against that profile. The homepage stops being a filter form and becomes a feed of pre-evaluated opportunities.

▸ **Recommender** vs ~~Search engine~~

### 02 · Deal Pipeline Dashboard

**A CRM, not a project tracker.**

Acquisition is a relationship with a seller, brokers, and lenders, not a project with tasks. Tasks live inside relationships, so the pipeline is the primary noun. Stages mirror the Academy's vocabulary (Sourcing → LOI → Diligence → Financing → Close) so there's no translation cost.

▸ **CRM shape** vs ~~Project tracker~~

### 03 · Marketing Design Hub

**Vertical-specific packs, not a generic library.**

A "Canva for small business" is a worse version of Canva. The win is to be vertical-specific, a laundromat pack with templates that already say the right things, a car-wash pack, a handyman pack. The library expands with each Main Street Minute issue. Content moat, not engineering moat.

▸ **Vertical packs** vs ~~Generic library~~

---

## Wireframes before pixels.

Before opening Figma, I sketched the key flows in low fidelity to pressure-test the design decisions. Wireframes catch architectural problems that polish hides, if a layout doesn't work in greyboxes, no amount of typography fixes it. Below are three wireframes that drove iteration on the final UI.

### AI Matcher — Profile-left, results-right *(Iteration 02 · Kept)*

V1 had filters at the top; users would have to re-filter every visit. V2 moved the profile to a persistent left rail so results are always personalized. Won.

### Pipeline Dashboard — Kanban by stage *(Iteration 03 · Kept)*

V1 was a list view sorted by date. V2 was a kanban with 7 stages, too many. V3 collapsed to 5 stages matching the Academy's curriculum vocabulary. Locked.

### Design Hub — Pack-based grid *(Iteration 02 · Kept)*

V1 was a flat searchable library, too generic. V2 reframed as industry-specific "packs" (laundromat, car wash, handyman). Stronger positioning, clearer value.

---

## One design language across three products.

All three interfaces share a system, same type, same palette, same components, same voice. Without it, the three products would have felt like three startups. With it, they feel like one ecosystem. The system is small on purpose: editorial work, not engineering work.

### 01 · Color

| Token | Hex | Use |
|---|---|---|
| Paper | `#FDFAF5` | Workhorse background |
| Cream | `#F5F0E8` | Secondary surface |
| Ink | `#1A1410` | Typography |
| Amber | `#C8832A` | Action, money, opportunity |
| Rust | `#8B3A2A` | Risk, stalled deals |

A five-color palette. Cream and paper are the workhorses (90% of every screen). Ink anchors typography. Amber signals action, money, opportunity. Rust signals risk and warns of stalled deals.

### 02 · Typography

- **Playfair Display** — Display · 700/Italic · Headlines, pull quotes
- **Inter** — 400/500/600 · Body, UI labels
- **JetBrains Mono** — 400 · Eyebrow labels, data, codes

Inter is the workhorse for body and UI, neutral, modern, doesn't fight the editorial type.

### 03 · Components

Three button states (Primary CTA, Ghost Secondary), one pill style (color-coded by stage). Anything more would be feature creep; anything less would force one-off styling.

### 04 · Voice

> "If you don't choose your hard, your hard will choose you."

- **Direct.** No softening. No throat-clearing.
- **Italicized emphasis.** One word per sentence carries the punch.
- **Speakeasy energy.** "Step Inside," not "Get Started."
- **Operator-grade.** Members are running businesses, not learning to.

### Why a system, not a style

A style is what something looks like. A system is the set of decisions that make every future screen consistent without thinking. By the time I built interface three, I wasn't choosing a button color or a font weight, those were already decided. That's what frees a designer to actually solve the user's problem on each new screen instead of relitigating the visual basics.

---

# Phase 05 · Deliver

## Three interfaces, live and clickable.

The three products from the synthesis became three interfaces: live prototypes built in Next.js and deployed on Vercel. The next three pages walk through each one, what the screen shows, why it's designed that way, and how to try it.

| 01 · AI Matcher | 02 · Deal Pipeline | 03 · Design Hub |
|---|---|---|
| Functional prototype, Next.js · Vercel | Functional prototype, Next.js · Vercel | Functional prototype, Next.js · Vercel |

### How they connect

The three interfaces are designed to share a member profile, a design system, and an event log. The matcher learns from what closes in the pipeline; the pipeline triggers the design hub on close; all three live behind a shared design system. That shared spine is what makes this an ecosystem rather than three separate apps, and what gives Contrarian Thinking a defensible product moat no single-product startup can replicate.

> **How to read the next three pages**
>
> Each interface gets one page: a stylized screen mockup, the live URL, and three to four annotations explaining the key UX choices. The annotations reference back to the key decisions earlier, so it's clear that each screen is an artifact of a thought-out decision, not a Figma exercise.

---

## Interface 01 · AI Acquisition Matcher

### Profile in, ranked deals out.

**Live prototype:** `ai-acquisition-matcher-by-yachi.vercel.app`

The buyer fills in a profile once (capital available, geography, operator experience, time commitment, risk tolerance). The matcher ranks every live deal against that profile and shows the top three matches with a fit score and the reasoning behind it.

### Annotations

**01. Profile is the primary input**
Captured once. All results pre-filtered against it. No filter form, no friction.

**02. Score visible, not hidden**
94, 87, 82. Transparent scoring earns trust. Members learn which scores are worth their time.

---

## Interface 02 · Deal Pipeline Dashboard

### A CRM that speaks the buyer's language.

**Live prototype:** `deal-pipeline-dashboard-by-yachi.vercel.app`

A pipeline view with five stages drawn directly from the Academy curriculum: Sourcing → LOI → Diligence → Financing → Close. The header shows total deals in flight and total dollar volume. Each card shows price, days in stage, and risk color.

### Annotations

**01. Workflow-native stage names**
Sourcing → LOI → Diligence → Financing → Close. Same language Codie teaches in the Academy.

**02. Color codes risk**
LOI cards get amber, diligence gets rust, because that's where deals die. Color is a triage tool.

---

## Interface 03 · Marketing Design Hub

### Vertical packs for newly-acquired Main Street.

**Live prototype:** `marketing-design-hub-by-yachi.vercel.app`

Industry-specific template packs for the newly-acquired business owner. The Laundromat Starter Pack ships with 12 templates, "New owner" flyer, GBP rewrite, refer-a-friend signage, 90-day email to regulars, wash & fold launch poster, Yelp request card, and more.

### Annotations

**01. Pack, not library**
"Laundromat starter pack" reframes the offering. The pack already knows what the member needs.

**02. Pre-written, not blank**
Every template ships with copy in the right voice. The member edits a name, not a paragraph.

---

# Reflection & Next Steps

## What I'd do next.

The case study ends here, but the real work would be the validation I couldn't do alone. If I had thirty days inside Contrarian Thinking, this is the order I'd answer the open questions in.

- **Interview five Academy members at different stages of the journey.** Validate that the persona is right, that the journey map matches reality, and that the three products solve problems they recognize.
- **Test the matcher's recommendations against five real closed deals.** If the model would have surfaced those deals to the buyer who bought them, the concept has foundation. If not, kill it.
- **Decide the matcher's data source.** BizBuySell scrape, partnership, member-submitted, or original from Contrarian Thinking Capital? Each is a different business.
- **Pricing model.** Member benefit, separate SKU, or freemium. Test all three with 20 members on a call before writing more code.
- **Kill at least one product.** Probably the Design Hub, it's furthest from the brand's core trust. Cutting it earns six months of focus.

### What I learned from the process itself

**The hardest part wasn't designing three products. It was deciding they belonged together.** I sketched seven. Picking the three that share a journey, and cutting four that didn't, was the highest-leverage decision in the project.

**I built the matcher's UI before answering where the deal data comes from.** Mistake. The data question is a product question; ignoring it let me design something that looks good and would collapse on contact with reality. Next time, data and pricing get resolved before Figma opens.

**Speculative work has to over-index on honesty.** Every line of "users said" or "we tested" I couldn't back up would have weakened the document. Naming the limits, and showing the validation plan with real access, is what made the work credible instead of fan fiction.

---

## Try the prototypes

Every product in this case study is live, deployed, and built to be evaluated, not just looked at. Below are direct links to all three deliverables.

- **Interface 01 · Live Prototype** — AI Acquisition Matcher
  `ai-acquisition-matcher-by-yachi.vercel.app`

- **Interface 02 · Live Prototype** — Deal Pipeline Dashboard
  `deal-pipeline-dashboard-by-yachi.vercel.app`

- **Interface 03 · Live Prototype** — Marketing Design Hub
  `marketing-design-hub-by-yachi.vercel.app`

---

**Designed by Yachi · 2026**
