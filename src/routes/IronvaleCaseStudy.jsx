import { useId, useState } from "react";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import CaseSummary from "../components/CaseSummary.jsx";
import SectionRail, { RAIL_GUTTER } from "../components/SectionRail.jsx";
import { useBreakpoint } from "../hooks/useBreakpoint.js";
import { projects } from "../data/projects.js";

import heroImg from "../assets/ironvale/hero.webp";
import pHome from "../assets/ironvale/home.webp";
import pServices from "../assets/ironvale/services.webp";
import pProjects from "../assets/ironvale/projects.webp";
import pAbout from "../assets/ironvale/about.webp";
import pCareers from "../assets/ironvale/careers.webp";
import pContact from "../assets/ironvale/contact.webp";

// The project card this page sits behind (Home / Projects / Nav link here).
const PROJECT_ID = "nellis";

// Ironvale's own palette, sampled from the exported frames.
const I = { base: "#0E0E0E", surface: "#161616", hairline: "#282828", ink: "#F2F1ED", label: "#A3A29F", muted: "#8A8A84", dim: "#4A4A46", orange: "#E3510F", deep: "#C94400" };

/* ═══════════════════════ Content ═══════════════════════ */

const META = [
  { k: "My role", v: "UX/UI designer, end to end", tag: true },
  { k: "Deliverable", v: "6 desktop pages, 1440px frames, built in Figma" },
  { k: "Pages", v: "Home, About, Services, Projects, Careers, Contact" },
  { k: "Timeline", v: "Concept for a fictional client, about 4 weeks", tag: true },
];

const SECTIONS = [
  ["overview", "Overview"], ["problem", "Problem"], ["research", "Research"], ["personas", "Personas"],
  ["journey", "Journey"], ["ia", "IA"], ["flows", "User flows"], ["strategy", "Strategy"],
  ["wireframes", "Wireframes"], ["visual", "UI"], ["prototype", "Prototype"], ["testing", "Testing"],
  ["final", "Final design"], ["decisions", "Decisions"], ["learnings", "Learnings"], ["next", "What’s next"],
];

const OVERVIEW_CARDS = [
  ["The background", "General contractors win work on trust built over years: references, a safety record, the superintendent you’ll be handed. Their websites rarely reflect that. Most read as photo galleries with a contact form, leaving owners to dig for the facts that actually decide a shortlist."],
  ["The client", "Ironvale is a GC and design-builder founded in 1974 in Cleveland, licensed in OH, PA, MI and IN, with 210 employees, 1,240 projects and 38M sq. ft. built. It serves commercial, industrial and high-end residential clients, including occupied healthcare and manufacturing sites."],
  ["The product", "A desktop marketing site of six pages, sharing one header (nav, phone number, “Request a Quote”) and one footer, with a repeated “Send us the drawings” call-to-action band closing most pages."],
];

const GOALS = [
  ["Win qualified bid requests", "One primary action, visible on every page, leading to a form that captures scope, budget and timing."],
  ["Prove, don’t claim", "Put hard numbers (EMR 0.61, 94% on time, 1,240 jobs) where owners decide."],
  ["Explain delivery methods", "Help owners pick preconstruction, design-build or GC by risk tolerance."],
  ["Recruit craft and field staff", "Lead Careers with tenure, pay and training facts."],
  ["Route secondary audiences", "Subcontractors, job seekers and warranty calls get their own doors, so sales inquiries stay clean."],
];

const TIMELINE = [
  ["Discover", 0, "proposed"], ["Define", 1, "proposed"], ["Ideate and wireframe", 2, "designs"], ["Visual design", 2.6, "designs"], ["Prototype and test", 3, "proposed"],
];

const PROBLEMS = [
  ["P1 · Undifferentiated claims", "“Quality, safety, on time” is on every GC site. Without numbers, owners can’t compare."],
  ["P2 · Portfolio without facts", "Project photos rarely say size, type, location, year or what went right on schedule."],
  ["P3 · Delivery-method confusion", "Owners new to construction don’t know when design-build beats lump-sum GC, or why it matters for risk."],
  ["P4 · Unstructured inquiries", "A bare “message” box gives estimators no budget, type or start date, and owners no idea when they’ll hear back."],
  ["P5 · Mixed audiences", "Subcontractors, job seekers and warranty calls land in the same inbox as new business."],
  ["P6 · Hard-to-hire field roles", "Craft workers decide on pay, stability and training; careers pages often bury those behind HR language."],
];

const HMW = [
  "…make Ironvale’s self-perform model and safety record obvious in the first screen?",
  "…let an owner judge relevant past work by type, size and schedule in under a minute?",
  "…capture enough scope in one form that an estimator can respond with a number?",
  "…send subs, job seekers and warranty calls to the right desk without cluttering the sales path?",
];

const RESEARCH_PLAN = {
  cols: ["Method", "Who", "What it answers", "Output"],
  rows: [
    ["Stakeholder interviews", "Ironvale president, preconstruction director, HR", "What wins work, what loses it, what a “good” inquiry looks like", "Business goals, success metrics"],
    ["Owner-side interviews (6–8)", "Facility directors, developers, owner’s reps", "How they shortlist GCs, what evidence they trust, deal-breakers", "Personas, journey map"],
    ["Inbound inquiry audit", "Last 50 emails and calls to the bids inbox", "What info is missing, how many are misrouted", "Form fields, routing desks"],
    ["Competitive audit", "8–10 GC and design-build sites", "Patterns, gaps, conventions owners expect", "Audit matrix (below)"],
    ["Card sort (open)", "10 owners + 5 trades", "How users group services, markets and company info", "Navigation labels, IA"],
    ["Craft-worker survey", "Current crews and apprentices", "Why people join and stay, what they look for first", "Careers content order"],
    ["Analytics review", "Existing site (if any)", "Entry pages, drop-off, device mix", "Priorities, mobile scope"],
  ],
};

const AUDIT = {
  cols: ["Criterion", "National GCs", "Regional GCs", "Design-build boutiques", "Ironvale’s design answer"],
  rows: [
    ["Primary CTA visibility", "Is a quote path in the header?", "Phone vs. form first?", "Is the form scoped?", "Header CTA + phone + CTA band on every page"],
    ["Proof in first screen", "Stats or awards above the fold?", "Years, regions, licenses?", "Design credentials?", "1,240 / 52 / 38M in the hero image"],
    ["Project detail", "Size, type, year, location?", "Schedule outcomes?", "Before/after?", "Tag, sq. ft., method, city, year on every card"],
    ["Safety evidence", "EMR, certifications shown?", "Numbers or adjectives?", "—", "EMR 0.61, ISO 45001, OSHA 30, days since lost time"],
    ["Delivery methods explained", "Method pages?", "Risk framing?", "Design + build in one?", "Four numbered chapters with 3 proofs each"],
    ["Audience routing", "Separate sub/vendor portal?", "Careers prominence?", "Warranty path?", "Other desks + footer links"],
    ["Response expectation", "Stated SLA?", "Named contact?", "—", "“Two business days, every time”"],
  ],
};

const HYPOTHESES = [
  ["H1 · Owners trust numbers over adjectives", "Stats in the hero, metrics on Services, % on time on About."],
  ["H2 · Owners shortlist by similar past work", "Project filter by market, with size, method and year on each card."],
  ["H3 · Knowing the people reduces perceived risk", "“One superintendent per job”; leadership “Who you’ll deal with” with the mobile-number promise."],
  ["H4 · A stated response time increases form completion", "“An estimator responds within two business days” in the Contact hero and beside the submit button."],
  ["H5 · Budget and timing fields help triage without scaring owners off", "Ranges, not exact figures; “Not yet scheduled” as a safe option."],
  ["H6 · Trades decide on pay, stability and training first", "Careers opens on median tenure (9 yrs), overtime policy and benefits."],
];

const PERSONAS = [
  { i: "MO", name: "Maya Okafor", role: "Director of Facilities, food manufacturer · 46", quote: "I can’t shut the line down for six months. Show me you’ve built around a running plant.",
    rows: [["Goals", "Expand a live plant without halting production; shortlist 3 contractors for her board in two weeks"], ["Behaviours", "Researches on desktop at work, forwards links to the CFO; calls references and trusts safety records"], ["Frustrations", "GC sites that all say the same thing; change orders from design gaps"], ["What Ironvale gives her", "Occupied-site phasing (Home, Services), EMR and ISO 45001, project filter: Industrial"]] },
  { i: "DR", name: "Daniel Reyes", role: "Project Executive, regional developer · 39", quote: "Give me a GMP early, or I can’t get the financing approved.",
    rows: [["Goals", "Lock a guaranteed maximum price before design is done; one accountable party"], ["Behaviours", "Compares bids side by side and reads delivery terms closely; sends drawings at 30% and wants a number"], ["Frustrations", "Brokered GCs that pass risk to subs; slow, vague responses to RFPs"], ["What Ironvale gives him", "Design-Build: “GMP at 60% CDs”; Preconstruction: “price it before you draw it”; a structured inquiry"]] },
  { i: "JT", name: "Jordan Taylor", role: "Carpenter, 4 years in the trade · 27", quote: "I want a company that keeps me working and actually trains me up.",
    rows: [["Goals", "Steady year-round work, a path to foreman, benefits for a young family"], ["Behaviours", "Browses on a phone after shifts; asks friends on crews where pay is fair"], ["Frustrations", "Postings with no pay or benefit info; being a number at a big firm"], ["What Ironvale gives them", "Careers: 9-yr median tenure, overtime always, paid OSHA 30, apprenticeship with no experience needed"]] },
];

// typical / design: -2 (low) … 2 (high)
const JOURNEY = [
  { s: "Trigger", doing: "Expansion approved; needs a GC", think: "“Who can build around a running line?”", pain: "No time, high stakes", opp: "Speak to occupied sites", page: "Home", typical: 0, design: 0 },
  { s: "Search and shortlist", doing: "Googles “industrial GC Ohio”, opens 6 tabs", think: "“They all look the same.”", pain: "Generic claims (P1)", opp: "Proof in the hero: 52 yrs, 1,240 jobs", page: "Home", typical: -0.9, design: 0.6 },
  { s: "Evaluate fit", doing: "Looks for similar plant work", think: "“Have they done this size, this type?”", pain: "Photos without facts (P2)", opp: "Filter + size, method, year", page: "Projects", typical: -0.9, design: 0.9 },
  { s: "Verify trust", doing: "Checks safety record, asks for references", think: "“Will they get someone hurt on my floor?”", pain: "Safety buried or missing (P1)", opp: "EMR, ISO, OSHA as metrics", page: "Services, About", typical: -1.3, design: 1.3 },
  { s: "Reach out", doing: "Fills a contact form", think: "“How much do I share?”", pain: "Bare message box (P4)", opp: "Scoped form with ranges", page: "Contact", typical: -0.7, design: 1.0 },
  { s: "Wait for a number", doing: "Waits, follows up by phone", think: "“Did that go anywhere?”", pain: "No response expectation", opp: "Promise two business days", page: "Contact confirmation", typical: -1.6, design: 1.2 },
];

// kind: "" in file, "cta" conversion path, "implied" not yet in the file
const IA = [
  ["Home", [["Hero + 3 stats"], ["About statement"], ["What we do (4)"], ["Recent projects (4)"], ["Process (4 steps)"], ["Client quote"], ["CTA band", "cta"]]],
  ["About", [["Hero + yard photo"], ["Who we are"], ["3 pillars"], ["History 1974–2026"], ["Leadership (3)"], ["CTA band", "cta"]]],
  ["Services", [["Hero"], ["Anchor chips"], ["01 Preconstruction"], ["02 Design-Build"], ["03 General Contracting"], ["04 Safety + metrics"], ["CTA band", "cta"]]],
  ["Projects", [["Hero"], ["Market filter"], ["Featured project"], ["Project grid (6)"], ["Request archive"], ["Project detail", "implied"]]],
  ["Careers", [["Hero"], ["Tenure + open roles"], ["Open roles (5)"], ["Benefits (4)"], ["CTA band", "cta"], ["Role detail + apply", "implied"]]],
  ["Contact", [["Hero + response promise"], ["Project inquiry form", "cta"], ["Main office"], ["Map"], ["Other desks (3)"], ["Confirmation", "implied"], ["Sub prequal form", "implied"]]],
];

const IA_NOTES = [
  ["Navigation hierarchy", "Primary nav (6 items) + phone + “Request a Quote” in the header. Breadcrumbs (Home › Page) on every inner page. The footer is a second navigation layer split by Services, Company and Contact."],
  ["Two taxonomies", "The footer lists markets (commercial, industrial, residential) while the Services page lists delivery methods, and Projects filter by market. This is sound, but it should be labelled as such so owners don’t look for “Industrial” on Services."],
  ["Content ordering", "Each page follows the same rhythm: a two-part hero (claim left, proof right), evidence sections, then the CTA band. Repetition makes a six-page site learnable in one visit."],
];

// kinds: entry, page (in the file), action, decision, missing (not yet in the file)
const FLOWS = [
  { t: "A · Owner requests a quote", who: "Maya / Daniel", steps: [["entry", "Lands on Home"], ["page", "Reads hero proof stats"], ["action", "Clicks “Start a bid”"], ["page", "Contact: Project inquiry"], ["decision", "All fields valid?", "no: inline error, keep input (not in file yet)"], ["action", "Send inquiry"], ["missing", "Confirmation"]] },
  { t: "B · Owner evaluates proof first", who: "Maya", steps: [["entry", "Search result or referral"], ["page", "Projects page"], ["action", "Filter: Industrial"], ["page", "Cedar Point, 1.1M sq. ft."], ["missing", "Project detail"], ["page", "CTA band"]] },
  { t: "C · Tradesperson finds a role", who: "Jordan", steps: [["entry", "Footer or nav “Careers”"], ["page", "Tenure + pay facts"], ["page", "Open roles"], ["decision", "Has experience?", "no: Carpentry Apprentice → apprentice application (not in file yet)"], ["action", "Opens role"], ["missing", "Role detail + apply"]] },
  { t: "D · Subcontractor gets prequalified", who: "Sub / supplier", steps: [["entry", "Any page"], ["page", "Footer: Sub prequal"], ["page", "Contact: Other desks"], ["missing", "Prequal form"], ["missing", "Added to bid list"]] },
];

const PRINCIPLES = [
  ["01 · Proof before pitch", "Every claim is paired with a number, a name or a date. If it can’t be proven, it isn’t a headline."],
  ["02 · One action everywhere", "“Request a Quote” in the header, a CTA band on every page, the same orange throughout."],
  ["03 · Speak the owner’s language", "GMP, CDs, CM at risk, EMR, punch, warranty walk. The audience is professional; plain jargon builds trust."],
  ["04 · A door for every visitor", "Owners, trades and subs each get a clear path, so no one uses the wrong form."],
];

const IDEAS = {
  cols: ["Moment", "Options considered", "Chosen in the design"],
  rows: [
    ["Hero", "Full-bleed photo with centred headline · Video background · Split claim + proof cards", "Split cards: headline, crew video thumbnail and CTAs left; site photo with 3 stats right"],
    ["Services overview", "Icon grid · Tabs · Big typographic list with hover image", "Typographic list (01–04) with floating photos; full detail on Services with anchor chips"],
    ["Project portfolio", "Masonry gallery · Map · Filterable grid with facts", "Featured hero card + filterable grid; facts under every image; “Showing 6 of 1,240”"],
    ["Safety", "Badge row · Paragraph · Metric dashboard", "Metric card: EMR, ISO 45001, OSHA 30, days since lost time"],
    ["Quote request", "Phone only · Short message form · Multi-step wizard · Single structured form", "Single structured form with chips and ranges, plus office details and other desks beside it"],
    ["Careers", "Link to job board · Values page · Facts-first page with role list", "Facts-first: tenure stat, 5 roles as rows, 4 concrete benefits"],
  ],
};

const MOSCOW = [
  ["Must", ["Persistent quote CTA in header", "Structured inquiry form", "Hero proof stats", "Service breakdown by method", "Safety metrics", "Project grid with facts"]],
  ["Should", ["Market filter on projects", "Open roles list", "Other desks routing", "Leadership + contact promise", "History timeline", "Breadcrumbs"]],
  ["Could", ["Project detail pages", "Role detail + apply", "Archive request flow", "Hero crew video", "Client testimonial carousel"]],
  ["Won’t (this release)", ["Drawing upload portal (file: “drawings can follow by email”)", "Client project portal", "Live job-site cams", "Cost calculator"]],
];

const WIRE_NOTES = {
  Home: ["Claim and proof share the first screen, so a five-second glance gets both “what” and “how much”.", "Services as a type list keeps the page scannable; photos appear only on hover.", "Process (4 steps) answers “what happens after I call?” before the CTA asks for the call."],
  Services: ["Anchor chips let owners jump straight to the method they came for.", "Alternating image sides give a long page rhythm without changing the component.", "Safety breaks the pattern on purpose: a card of numbers, not a photo."],
  Projects: ["One featured project sets the quality bar before the grid.", "Facts sit under every image in the same order: name, size, method, place, year.", "The count (“6 of 1,240”) is honest curation and invites the archive request."],
  Contact: ["The form is the page; office details and other desks sit beside it, not above it.", "Two-column field pairs keep a 9-field form to one screen.", "The reply promise repeats next to the button, where hesitation happens."],
};

const SWATCHES = [
  ["Base", I.base, "Page background", "—"],
  ["Surface", I.surface, "Cards, footer", "—"],
  ["Hairline", I.hairline, "Borders, rules", "—"],
  ["Ink", I.ink, "Headlines, body", "17.1 : 1"],
  ["Label grey", I.label, "Stat captions", "≈ 7.9 : 1"],
  ["Muted", I.muted, "Body copy on cards", "5.6 : 1"],
  ["Dim", I.dim, "Unlit statement text", "2.2 : 1 ⚠"],
  ["Safety orange", I.orange, "CTAs, metrics, active", "5.0 : 1 · white on it 3.9 : 1"],
];

const TYPE_SCALE = [
  ["Display · ~80px", "Bold · −2%", "Building what lasts.", 52, 700, false],
  ["Statement · ~48px", "Semibold · Upper", "Nobody gets hurt", 34, 600, true],
  ["Heading · ~26px", "Semibold · Upper", "Project superintendent", 22, 600, true],
  ["Body · ~15px", "Regular", "Conceptual estimating from a napkin sketch through GMP.", 15, 400, false],
  ["Label · ~11px", "Semibold · +12%", "Years of service", 11.5, 600, true],
];

const GRID = [
  "1440px frame, about 80px side margins, about 1280px content width",
  "Two-column hero split near 50/50; 12-column logic underneath (4-up process, benefits, metrics)",
  "Generous section rhythm, roughly 140–180px between sections",
  "Rounded cards and images (around 24px radius); fully rounded pills for every button and chip",
  "1px hairline rules (#282828) divide lists, stats and footers instead of boxes",
  "An orange dash + tracked label marks every section start",
];

const VISUAL_PRINCIPLES = [
  ["Industrial restraint", "Black, white, one orange. Nothing decorative."],
  ["Numbers are the hero", "Stats get display sizes; adjectives don’t."],
  ["Orange means act or trust", "CTAs, metrics, active filters, timeline dots."],
  ["Real crews, real sites", "Photography of people working, not stock handshakes."],
];

const INTERACTIONS = [
  ["Persistent header", "Sticky header keeps the phone number and “Request a Quote” in reach on long pages; active page in bold white (seen on every frame)."],
  ["Services hover list", "On Home, “Design-Build” is lit while the others are grey, with a tilted photo floating beside it: hover or scroll focus reveals each service’s image."],
  ["Scroll-lit statement", "About statements are two-tone (white and dim grey): words likely light up as the user scrolls. Needs a static fallback for reduced motion."],
  ["Rotating badge", "A circular “Self-perform crews · Four states” badge on the hero seam, a slow rotation drawing the eye to the photo."],
  ["Filter chips + live count", "On Projects, chips filter the grid and update “Showing 6 of 1,240” in place, with no page reload."],
  ["Anchor chips", "On Services, 01–04 chips smooth-scroll to each chapter; they should highlight the chapter in view."],
  ["Leadership carousel", "The third leader card is cropped at the right edge, implying a horizontal scroll. Needs arrows or a visible scrollbar."],
  ["Role rows + form chips", "Career rows and Other desks rows show an orange ↗ on hover; project type chips toggle a single selection in the inquiry form."],
];

const SCENARIOS = {
  cols: ["Scenario", "Start", "Path", "Success state"],
  rows: [
    ["Quote for a live plant", "Home", "Hero → “Start a bid” → Contact → type Industrial, $10–50M, 6–12 months → Send", "Confirmation with file number and 2-day promise"],
    ["Check relevant work", "Search → Projects", "Filter Industrial → Cedar Point → back → CTA band", "Owner reaches Contact with confidence"],
    ["Pick a delivery method", "Home “All capabilities”", "Services → chip 02 Design-Build → read GMP at 60% CDs", "Owner can say which method fits and why"],
    ["Apply as apprentice", "Footer “Careers”", "Open roles → Carpentry Apprentice → apply", "Application started without experience"],
    ["Subcontractor prequal", "Footer", "“Subcontractor prequalification” → form", "Sub never touches the owner quote form"],
  ],
};

const TEST_PLAN = [
  ["Method", "moderated remote sessions on a clickable Figma prototype, think-aloud"],
  ["Participants", "5 owner-side (facilities, developers), 5 trades (job seekers), 3 subcontractors"],
  ["Plus", "a 5-second test on the Home hero; a first-click test on “how would you get a price?”"],
  ["Metrics", "task success, time on task, Single Ease Question per task, SUS at the end"],
  ["Pass bar (target, not result)", "80%+ task success, SEQ 5.5+ on the quote task"],
];

const TEST_TASKS = [
  "In 5 seconds: what does this company do, and where?",
  "Find a past industrial project over 1M sq. ft.",
  "Which service would you choose if you want one contract and one price? Why?",
  "How safe is this contractor? Find evidence.",
  "Request a quote for a $5M commercial job starting in 4 months.",
  "(Trades) Find an entry-level role and what it pays in benefits.",
  "(Subs) Get on Ironvale’s bid list.",
];

const ISSUES = [
  ["Header phone (987) 654-3210 differs from footer and Contact (216) 555-0148", "All pages", "Consistency", "High", "Use one number everywhere; make it tappable"],
  ["Budget and Target start show all options inside one pill, reading as a broken select", "Contact", "Affordance", "High", "Segmented chips (try the demo below) or a real dropdown"],
  ["No confirmation or error states for the inquiry form", "Contact", "Visibility of status", "High", "Add a success screen, inline validation, required markers"],
  ["Unlit statement text (#4A4A46) is about 2.2:1 on the background", "Home, About", "WCAG 1.4.3", "Medium", "Raise to 4.5:1, or fully light the text when scroll effects are off"],
  ["White button labels on orange are about 3.9:1 at ~13px", "All CTAs", "WCAG 1.4.3", "Medium", "Darken orange to about #C94400, or set labels 18px bold"],
  ["Copy says “Five recent deliveries” but four cards show", "Home projects", "Match with the real world", "Medium", "Show five, or change the copy to four"],
  ["“We’ll price all three” sits above four services", "Services hero", "Clarity", "Medium", "Clarify: three delivery methods, plus safety"],
  ["Two labels for one action: “Start a bid” and “Request a Quote”", "Home, global", "Consistency", "Low", "Pick one verb across hero, header and CTA band"],
  ["Leadership row is cut off with no scroll controls", "About", "User control", "Low", "Add arrows or fit three cards"],
  ["Map has no office pin; tracked micro-labels near 11px", "Contact; global", "Recognition; legibility", "Low", "Pin Cleveland; set labels to 12–13px minimum"],
];

const PAGES = [
  { url: "ironvale.build/", name: "Home", title: "The pitch in one scroll", img: pHome, h: 4756, notes: [
    ["Split hero: claim + proof", "“Building what lasts.” on the left; 1,240 projects, 52 years, 38M sq. ft. over a live site photo on the right. “Now bidding Q1 2027” signals availability.", "P1 · H1 · all personas"],
    ["About statement", "A two-tone uppercase statement puts “general contractor”, “self-perform crews” and “fifty-two years, four states” in white.", "P1 · H3"],
    ["What we do", "Four services as a large type list with floating photos, one tap to “All capabilities”.", "P3"],
    ["Recent projects", "Four projects at varied heights with name and year; “1,240 delivered since 1974” as context.", "P2 · H2"],
    ["Process", "Preconstruction → Buy out → Construction → Close out, each with a concrete promise (warranty walk at eleven months).", "P1 · Maya"],
    ["Client voice + CTA", "A testimonial about schedule recovery, then “Send us the drawings. We’ll send back a number you can build to.”", "P1 · P4"]] },
  { url: "ironvale.build/services", name: "Services", title: "Four methods, one contract", img: pServices, h: 3250, notes: [
    ["Hero + anchor chips", "“Everything under one contract.” with 01–04 chips to jump to a method.", "P3 · Daniel"],
    ["Preconstruction", "“Price it before you draw it.” Conceptual through GMP estimating, constructability review, logistics plans.", "P3 · H1 · Daniel"],
    ["Design-Build", "“One contract, one number.” Single-source, GMP at 60% CDs, permits handled.", "P3 · Daniel"],
    ["General Contracting", "“Crews on your site, not brokers.” Self-perform concrete, carpentry and steel; weekly look-ahead; occupied-site phasing.", "P1 · Maya"],
    ["Safety compliance", "“Nobody gets hurt building your building.” EMR 0.61, ISO 45001, 100% of foremen OSHA 30, 1,410 days since lost time.", "P1 · H1 · Maya"]] },
  { url: "ironvale.build/projects", name: "Projects", title: "Curated proof, honest count", img: pProjects, h: 2359, notes: [
    ["Hero with an honest count", "“1,240 jobs. Six worth showing.” frames curation as a choice, with the full archive on request.", "P2"],
    ["Market filter", "All work / Commercial / Industrial / Residential with “Showing 6 of 1,240”.", "P2 · H2"],
    ["Featured project", "Vantage Tower: 24 stories over an occupied garage, topped out four weeks early; 410,000 sq. ft., Cleveland, 2025.", "P1 · P2"],
    ["Fact-first grid", "Each card: market tag, name, size, method, city, year (e.g. Cedar Point, 1.1M sq. ft. tilt-up).", "P2 · Maya"],
    ["Archive request", "“Request the full archive” turns depth into a lead.", "P4"]] },
  { url: "ironvale.build/about", name: "About", title: "People you can call", img: pAbout, h: 3157, notes: [
    ["Origin hero", "“Fifty-two years of holding the line.” with the Foundry Road yard and “210 employees” tags.", "P1"],
    ["Three pillars", "Self-perform; On schedule (94% on or ahead over five years); Safety first.", "P1 · H1"],
    ["History", "1974 → 1996 → 2011 → 2026: from concrete outfit to design-build studio and 38M sq. ft.", "P1"],
    ["Leadership", "President, VP Field Operations, Director of Preconstruction, with the promise of their mobile number at signing.", "H3 · Maya · Daniel"]] },
  { url: "ironvale.build/careers", name: "Careers", title: "Facts tradespeople look for", img: pCareers, h: 2470, notes: [
    ["Hero", "“Build here. Stay here.” with overtime at time and a half and promotion from the apprenticeship.", "P6 · H6 · Jordan"],
    ["Tenure + roles stats", "Median tenure 9 yrs in an orange block; 05 open roles; 210 employees · 4 states.", "P6 · Jordan"],
    ["Open roles list", "Five roles as rows with location and type; the apprenticeship is tagged “No experience”.", "P6 · Jordan"],
    ["Benefits", "Full medical from day 31, profit share, paid OSHA 30 and certifications, three weeks off plus a holiday shutdown.", "P6 · H6"]] },
  { url: "ironvale.build/contact", name: "Contact", title: "A form estimators can act on", img: pContact, h: 1635, notes: [
    ["Hero + promise", "“Let’s talk scope.” with “an estimator responds within two business days, every time.”", "P4 · H4"],
    ["Project inquiry form", "Name, company, email, phone, type chips, budget range, target start, scope notes.", "P4 · H5 · Daniel"],
    ["Reply promise at the button", "The response time and “drawings can follow by email” sit beside “Send inquiry”.", "P4 · H4"],
    ["Office + map", "Cleveland address, phone, email, hours, and a regional map of the four-state area.", "P1"],
    ["Other desks", "Subcontractor prequal, careers and apprenticeship, warranty and service.", "P5 · Subs"]] },
];

const DECISIONS = [
  ["Dark UI with one orange accent", "Construction photography is busy and colourful; a near-black ground frames it like a monitor in a site trailer and makes orange unmistakable as “act here”.", "Dark pages need extra care on contrast (see review); some owners print pages."],
  ["Stats inside the hero photo", "H1: numbers beat adjectives. Putting them on the photo ties “1,240 projects” to a real building.", "Text over imagery depends on a dark photo area; needs a scrim."],
  ["Uppercase two-tone statements", "Gives positioning lines the weight of signage and lets key phrases read first.", "Uppercase is slower to read in long lines; the grey text fails contrast."],
  ["Services as numbered chapters", "Owners compare methods; numbered chapters with three checks each make that comparison parallel.", "A long page; anchors and sticky chips are needed."],
  ["Featured project + facts on every card", "A single standout sets the bar; consistent facts let owners compare like for like.", "Requires disciplined content entry for every project."],
  ["Safety as metrics, not prose", "EMR and lost-time days are what risk managers actually ask for.", "Metrics must be kept current or they hurt trust."],
  ["Named leaders with a phone promise", "Reduces perceived risk (H3): you know who answers.", "Commits the principals to that promise."],
  ["Careers led by tenure and pay facts", "Tradespeople decide on stability and money (H6).", "Less room for culture storytelling."],
  ["Structured form with ranges", "Gives estimators triage data (H5) while ranges and “Not yet scheduled” lower the commitment.", "More fields than a bare form; needs testing for drop-off."],
  ["“Other desks” beside the form", "Keeps subs, job seekers and warranty calls out of the bids inbox (P5).", "Adds options to the Contact page."],
  ["Same CTA band on every page", "Every page ends at the same ask, so any entry point leads to a quote.", "Repetition can feel heavy on About and Careers."],
];

const CHALLENGES = [
  ["Two audiences, one site", "Owners and tradespeople want opposite things from the same brand. Solved by shared structure but separate entry points, and content that speaks to each in its own terms."],
  ["Dense facts, premium feel", "Specs (GMP, EMR, sq. ft.) can read like a brochure dump. Hairline rules, generous spacing and display-size numbers kept density calm."],
  ["Static frames, motion intent", "Several effects (scroll-lit text, hover images, carousel) exist only as frozen moments. I documented them so the prototype and build don’t lose them."],
  ["Form length vs. completion", "Estimators want more fields; owners want fewer. Ranges and chips keep it quick to answer while still useful."],
  ["Dark theme accessibility", "The dim-grey and orange-button pairings fall below WCAG AA; caught in review and queued as iterations."],
  ["No research access", "Without interviews, the design rests on hypotheses. I made them explicit and testable instead of presenting them as facts."],
];

const TAKEAWAYS = [
  "In B2B, credibility is content strategy before it is visual design: the right numbers did more than any layout.",
  "Consistency is a trust signal. A mismatched phone number undoes a page of proof.",
  "Design every state, not just the happy frame: confirmation, error and empty states are where conversion is won.",
  "Label hypotheses as hypotheses; it makes the case study and the next research round stronger.",
];

const IMPACT = [
  "More inquiries arrive with type, budget and start date filled in",
  "Fewer misrouted emails (subs, job seekers, warranty) in the bids inbox",
  "Shorter shortlist evaluation for owners who find proof without calling",
  "More applications for field roles, especially the apprenticeship",
];

const FUTURE = [
  ["Responsive layouts", "Tablet and mobile, starting with Careers, since trades browse on phones."],
  ["Project detail template", "Schedule, challenge, method and outcome for each job."],
  ["Role detail + apply", "A role page and a short mobile apply flow."],
  ["Subcontractor prequal", "The prequalification form and its confirmation."],
  ["Accessibility pass", "Contrast fixes, focus states and reduced motion."],
  ["Research with real people", "Run the proposed tests, then revise the personas with real data."],
];

const ASSUMPTIONS = [
  "Ironvale is a fictional client (555 numbers, sample people), treated as a concept project",
  "Role: sole UX/UI designer; timeline about 4 weeks",
  "Desktop only at 1440px; no mobile frames were made",
  "Typeface renders as Inter; colours sampled from exported frames, sizes approximate",
  "Interactions inferred from static frames",
  "All personas, research, test plans and impact are proposed or hypothetical",
];

/* ═══════════════════════ Building blocks ═══════════════════════ */

function Eyebrow({ children, color, style }) {
  return <div style={{ fontFamily: "Inter", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color, marginBottom: 12, ...style }}>{children}</div>;
}

// Provenance labels from the original case study.
function Tag({ kind, children, isDark }) {
  const tones = {
    designs: isDark ? ["#A6D190", "rgba(166,209,144,0.14)"] : ["#3E6B2F", "rgba(62,107,47,0.09)"],
    proposed: isDark ? ["#F2A28F", "rgba(242,162,143,0.14)"] : ["#9A3B26", "rgba(154,59,38,0.09)"],
    assumption: isDark ? ["#E9C07A", "rgba(233,192,122,0.14)"] : ["#875A06", "rgba(135,90,6,0.09)"],
    review: isDark ? ["#C8B1F2", "rgba(200,177,242,0.14)"] : ["#5B3E8A", "rgba(91,62,138,0.09)"],
  };
  const [fg, bg] = tones[kind];
  return <span style={{ display: "inline-block", padding: "4px 10px", borderRadius: 999, background: bg, color: fg, fontFamily: "Inter", fontSize: 12.5, fontWeight: 600, lineHeight: 1.3 }}>{children}</span>;
}

function Card({ children, theme, style }) {
  return <div style={{ padding: "24px 26px", borderRadius: 18, background: theme.card, border: `1px solid ${theme.line}`, height: "100%", boxSizing: "border-box", ...style }}>{children}</div>;
}

function Bullets({ items, style, ordered }) {
  const L = ordered ? "ol" : "ul";
  return <L style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 6, ...style }}>{items.map((it, i) => <li key={i}>{it}</li>)}</L>;
}

function Checks({ items, theme, accent, style }) {
  return (
    <ul style={{ listStyle: "none", margin: 0, padding: 0, ...style }}>
      {items.map((it, i) => (
        <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "10px 0", borderTop: i ? `1px solid ${theme.line}` : "none" }}>
          <Check size={16} color={accent} aria-hidden="true" style={{ flexShrink: 0, marginTop: 3 }} />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

function DataTable({ cols, rows, theme, minWidth = 640, render }) {
  return (
    <div data-lenis-prevent style={{ overflowX: "auto", borderRadius: 18, border: `1px solid ${theme.line}`, background: theme.card }}>
      <table style={{ width: "100%", minWidth, borderCollapse: "collapse", fontFamily: "Inter", fontSize: 14.5, lineHeight: 1.5, color: theme.inkSoft }}>
        <thead><tr>{cols.map((c) => <th key={c} scope="col" style={{ textAlign: "left", padding: "14px 18px", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: theme.inkMute, borderBottom: `1px solid ${theme.line}` }}>{c}</th>)}</tr></thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} style={{ borderTop: i ? `1px solid ${theme.line}` : "none" }}>
              {r.map((cell, j) => <td key={j} style={{ padding: "14px 18px", verticalAlign: "top", color: j === 0 ? theme.ink : undefined, fontWeight: j === 0 ? 600 : 400 }}>{render ? render(cell, j, r) : cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ScrollFrame({ src, h, label, url, theme, shadow, maxH }) {
  return (
    <div style={{ borderRadius: 16, border: `1px solid ${theme.line}`, background: theme.card, boxShadow: shadow, overflow: "hidden" }}>
      <div style={{ padding: "9px 14px", borderBottom: `1px solid ${theme.line}`, fontFamily: "ui-monospace, Menlo, monospace", fontSize: 12.5, color: theme.inkMute, display: "flex", alignItems: "center", gap: 8 }}>
        <span aria-hidden="true" style={{ display: "inline-flex", gap: 5 }}>{["#FF5F56", "#FFBD2E", "#27C93F"].map((c) => <span key={c} style={{ width: 9, height: 9, borderRadius: 9, background: c }} />)}</span>
        {url}
      </div>
      <div data-lenis-prevent tabIndex={0} role="region" aria-label={`${label} page, full design (scrollable)`} style={{ maxHeight: maxH, overflowY: "auto", overscrollBehavior: "contain", outlineOffset: -3, background: I.base }}>
        <img src={src} width={1200} height={h} alt={`Full-length design of the Ironvale ${label} page.`} loading="lazy" decoding="async" style={{ width: "100%", height: "auto", display: "block" }} />
      </div>
    </div>
  );
}

function Section({ id, n, eyebrow, title, intro, tag, children, alt, theme, isMobile, isMobileOrTablet }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} style={{ padding: isMobile ? "56px 4vw" : isMobileOrTablet ? "96px 6vw" : `96px 6vw 96px ${RAIL_GUTTER}`, background: alt ? theme.bgAlt : "transparent", borderTop: `1px solid ${theme.line}` }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Reveal>
          <Eyebrow color={theme.inkMute}>{String(n).padStart(2, "0")} · {eyebrow}</Eyebrow>
          <div style={{ display: "grid", gridTemplateColumns: isMobileOrTablet || !intro ? "1fr" : "1.1fr 1fr", gap: isMobile ? 14 : 48, alignItems: "end" }}>
            <h2 id={`${id}-title`} style={{ fontFamily: "Inter", fontSize: "clamp(26px, 3.4vw, 44px)", fontWeight: 500, letterSpacing: "-0.03em", color: theme.ink, margin: 0, lineHeight: 1.15 }}>{title}</h2>
            {intro && (
              <div>
                <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 17.5, lineHeight: 1.65, color: theme.inkSoft, margin: 0 }}>{intro}</p>
                {tag && <div style={{ marginTop: 10 }}>{tag}</div>}
              </div>
            )}
          </div>
        </Reveal>
        <div style={{ marginTop: isMobile ? 28 : 44 }}>{children}</div>
      </div>
    </section>
  );
}

/* ── Wireframes, rebuilt as blocks ── */

function WB({ children, theme, h = 30, cta, style }) {
  return <div style={{ minHeight: h, display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "4px 8px", borderRadius: 7, border: `1px dashed ${cta ? I.orange : theme.inkMute}`, background: cta ? "rgba(227,81,15,0.12)" : "transparent", fontFamily: "ui-monospace, Menlo, monospace", fontSize: 11.5, lineHeight: 1.3, color: theme.inkSoft, boxSizing: "border-box", ...style }}>{children}</div>;
}

function Wireframe({ kind, theme }) {
  const r = (cols, items, h) => <div style={{ display: "grid", gridTemplateColumns: cols, gap: 6 }}>{items.map((t, i) => { const cta = typeof t === "object"; return <WB key={i} theme={theme} h={h} cta={cta}>{cta ? t.t : t}</WB>; })}</div>;
  const head = r("1fr 2fr 1fr 1fr", ["Logo", "Nav (6)", "Phone", { t: "Quote" }]);
  const foot = r("1fr 1fr", ["CTA statement", { t: "Request a Quote" }]);
  const footer = r("repeat(4, 1fr)", ["About", "Services", "Company", "Contact"]);
  const rows = {
    Home: [head, r("1fr 1fr", ["Headline + video thumb", "Site photo + 3 stats"], 64), r("1fr 1fr", [{ t: "Intro + 2 CTAs" }, ""]), r("1fr 3fr", ["Label", "About statement"], 40), r("1fr", ["What we do: 4-item type list + hover images"], 64), r("repeat(4, 1fr)", ["Step", "Step", "Step", "Step"]), r("1fr", ["Client quote"]), foot, footer],
    Services: [head, r("1fr 1fr", ["Headline", "Intro"]), r("repeat(4, 1fr)", ["01", "02", "03", "04"]), r("1fr 1fr", ["Photo", "[01] Headline · body · 3 checks"], 60), r("1fr 1fr", ["[02] Headline · body · 3 checks", "Photo"], 60), r("1fr 1fr", ["Photo", "[03] Headline · body + checks"], 60), r("1fr", ["[04] Safety: headline + 4 metrics"], 40), foot, footer],
    Projects: [head, r("1fr 1fr", ["Headline", "Intro"]), r("repeat(4, 1fr) 2fr", [{ t: "All" }, "Com", "Ind", "Res", "Showing 6 of 1,240"]), r("1fr", ["Featured project: image + overlay facts"], 96), r("1fr 1fr", ["Name · facts · year", "Name · facts · year"], 56), r("1fr 1fr 1fr", ["Card", "Card", "Card"], 44), r("1fr", [{ t: "Request archive" }]), footer],
    Contact: [head, r("1fr 1fr", ["Headline", "Intro + response promise"]), <div key="c" style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 6 }}><div style={{ display: "flex", flexDirection: "column", gap: 6 }}><WB theme={theme}>Project inquiry</WB>{r("1fr 1fr", ["Name", "Company"])}{r("1fr 1fr", ["Email", "Phone"])}<WB theme={theme}>Type chips</WB>{r("1fr 1fr", ["Budget", "Start"])}<WB theme={theme} h={44}>Scope notes</WB>{r("1fr 1fr", ["Reply promise", { t: "Send" }])}</div><div style={{ display: "flex", flexDirection: "column", gap: 6 }}><WB theme={theme} h={70}>Main office</WB><WB theme={theme} h={70}>Map</WB><WB theme={theme} h={70}>Other desks (3)</WB></div></div>, footer],
  };
  return <div role="img" aria-label={`Low-fidelity wireframe of the ${kind} page; orange blocks mark the primary action`} style={{ padding: 12, borderRadius: 16, border: `1px solid ${theme.line}`, background: theme.card, display: "flex", flexDirection: "column", gap: 6 }}>{rows[kind]}</div>;
}

/* ── Prototype: the inquiry form's budget and timing fields, redesigned ── */

const FORM_OPTS = {
  type: ["Commercial", "Industrial", "Residential"],
  budget: ["Under $2M", "$2M–$10M", "$10M–$50M", "$50M+"],
  start: ["Within 3 months", "3–6 months", "6–12 months", "Not yet scheduled"],
};
const FORM_LABELS = { type: "Project type", budget: "Budget range", start: "Target start" };

function ChipGroup({ name, value, onPick, error, isDark, theme }) {
  const id = useId();
  const on = isDark ? I.orange : I.deep;
  return (
    <fieldset aria-describedby={error ? `${id}-err` : undefined} style={{ border: "none", margin: "0 0 18px", padding: 0, minWidth: 0 }}>
      <legend style={{ fontFamily: "Inter", fontSize: 12.5, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: theme.inkMute, marginBottom: 10, padding: 0 }}>{FORM_LABELS[name]} <span aria-hidden="true" style={{ color: on }}>*</span><span style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }}> (required)</span></legend>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {FORM_OPTS[name].map((o) => {
          const sel = value === o;
          return (
            <button key={o} type="button" aria-pressed={sel} onClick={() => onPick(o)} data-cursor="hover"
              style={{ padding: "9px 16px", borderRadius: 999, cursor: "pointer", fontFamily: "Inter", fontSize: 14, fontWeight: 600, border: `1.5px solid ${sel ? on : error ? on : theme.inkMute}`, background: sel ? on : "transparent", color: sel ? "#fff" : theme.ink, transition: "background .15s ease, border-color .15s ease" }}>
              {o}
            </button>
          );
        })}
      </div>
      {error && <div id={`${id}-err`} style={{ fontFamily: "Inter", fontSize: 13.5, color: isDark ? "#F2A28F" : "#9A3B26", marginTop: 8 }}>Choose a {FORM_LABELS[name].toLowerCase()}.</div>}
    </fieldset>
  );
}

function InquiryDemo({ theme, isDark }) {
  const [vals, setVals] = useState({ type: "", budget: "", start: "", email: "" });
  const [tried, setTried] = useState(false);
  const [fileNo, setFileNo] = useState(null);
  const emailId = useId();
  const on = isDark ? I.orange : I.deep;
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(vals.email.trim());
  const errors = { type: !vals.type, budget: !vals.budget, start: !vals.start, email: !emailOk };
  const set = (k) => (v) => setVals((s) => ({ ...s, [k]: v }));

  const submit = (e) => {
    e.preventDefault();
    setTried(true);
    if (Object.values(errors).some(Boolean)) return;
    const d = new Date();
    setFileNo(`IV-${String(d.getFullYear()).slice(2)}${String(d.getMonth() + 1).padStart(2, "0")}-${String(Math.floor(1000 + Math.random() * 9000))}`);
  };
  const reset = () => { setVals({ type: "", budget: "", start: "", email: "" }); setTried(false); setFileNo(null); };

  if (fileNo) {
    return (
      <div role="status" style={{ minHeight: 360, display: "flex", flexDirection: "column", justifyContent: "center", gap: 12 }}>
        <span aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 99, background: on, display: "inline-flex", alignItems: "center", justifyContent: "center" }}><Check size={22} color="#fff" /></span>
        <div style={{ fontFamily: "Inter", fontSize: 22, fontWeight: 600, color: theme.ink, letterSpacing: "-0.01em" }}>Inquiry received</div>
        <div style={{ fontFamily: "Inter", fontSize: 15.5, lineHeight: 1.6, color: theme.inkSoft }}>
          File number <strong style={{ color: theme.ink, fontFamily: "ui-monospace, Menlo, monospace" }}>{fileNo}</strong>. An estimator will reply to {vals.email.trim()} within two business days. Drawings can follow by email; quote the file number.
        </div>
        <div style={{ fontFamily: "Inter", fontSize: 14, color: theme.inkMute }}>{vals.type} · {vals.budget} · {vals.start}</div>
        <button type="button" onClick={reset} data-cursor="hover" style={{ alignSelf: "flex-start", marginTop: 6, padding: "9px 18px", borderRadius: 999, border: `1.5px solid ${theme.inkMute}`, background: "transparent", color: theme.ink, fontFamily: "Inter", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>Start over</button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate>
      {["type", "budget", "start"].map((k) => <ChipGroup key={k} name={k} value={vals[k]} onPick={set(k)} error={tried && errors[k]} isDark={isDark} theme={theme} />)}
      <label htmlFor={emailId} style={{ display: "block", fontFamily: "Inter", fontSize: 12.5, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: theme.inkMute, marginBottom: 10 }}>Work email <span aria-hidden="true" style={{ color: on }}>*</span></label>
      <input id={emailId} type="email" required autoComplete="email" placeholder="you@company.com" value={vals.email} onChange={(e) => set("email")(e.target.value)}
        aria-invalid={tried && errors.email} aria-describedby={tried && errors.email ? `${emailId}-err` : undefined}
        style={{ width: "100%", boxSizing: "border-box", padding: "12px 18px", borderRadius: 999, border: `1.5px solid ${tried && errors.email ? on : theme.inkMute}`, background: "transparent", color: theme.ink, fontFamily: "Inter", fontSize: 15.5, outlineColor: on }} />
      {tried && errors.email && <div id={`${emailId}-err`} style={{ fontFamily: "Inter", fontSize: 13.5, color: isDark ? "#F2A28F" : "#9A3B26", marginTop: 8 }}>Enter a work email so the estimator can reply.</div>}
      <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap", marginTop: 22 }}>
        <button type="submit" data-cursor="hover" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 22px", borderRadius: 999, border: "none", background: I.deep, color: "#fff", fontFamily: "Inter", fontSize: 15, fontWeight: 700, cursor: "pointer" }}>
          Send inquiry <ArrowUpRight size={16} aria-hidden="true" />
        </button>
        <span style={{ fontFamily: "Inter", fontSize: 13.5, color: theme.inkSoft, lineHeight: 1.45, flex: "1 1 180px" }}>An estimator replies within two business days.</span>
      </div>
      <p style={{ fontFamily: "Inter", fontSize: 13, color: theme.inkMute, margin: "14px 0 0" }}>Prototype only: nothing is sent. Submit empty to see the error states.</p>
    </form>
  );
}

/* ═══════════════════════ Page ═══════════════════════ */

// Hero content for the case study page.
const SUMMARY = {
  eyebrow: "UX/UI case study · Marketing website for a general contractor",
  title: "Ironvale: a contractor site built to",
  accent: "earn the bid",
  lede: "A six-page website for a Midwest general contractor that makes its real advantages (self-perform crews, early pricing, a safety record) clear in seconds, and turns that trust into a quote request an estimator can act on.",
  meta: [
    { k: "Role", v: "UX/UI designer, end to end" },
    { k: "Deliverable", v: "6 desktop pages, 1440px, Figma" },
    { k: "Audience", v: "Owners, developers, trades, subs" },
    { k: "Type", v: "Concept project, about 4 weeks" },
  ],
  hero: { src: heroImg, w: 1200, h: 760, bg: "#0E0E0E", position: "center bottom", alt: "The Ironvale homepage hero on near-black: the headline “Building what lasts.”, an orange Start a bid button, and a crane over a steel frame with the stats 1,240 projects, 52 years and 38M sq. ft. built." },
  problem: {
    title: "Owners can’t see the difference between builders",
    text: "From a website, a contractor with its own crews and one superintendent per job looks the same as a firm that brokers every trade. Owners find out in interviews, and estimators get vague inquiries they have to chase.",
    points: [
      ["Same claims everywhere", "“Quality, safety, on time” is on every GC site; without numbers owners can’t compare."],
      ["Photos without facts", "Portfolios rarely say size, type, year or what went right on schedule."],
      ["Unscoped inquiries", "A bare message box gives estimators no budget, type or start date, and mixes in subs and job seekers."],
    ],
  },
  approach: ["Research plan + hypotheses", "Personas and journey", "IA and four user flows", "Wireframes → 6 pages", "Heuristic review + iteration"],
  highlights: [
    ["Proof in the first screen", "1,240 projects, 52 years and 38M sq. ft. sit on a live site photo beside the headline."],
    ["Facts on every project", "A market filter and the same facts under every card: size, method, city, year. “Showing 6 of 1,240.”"],
    ["Safety as metrics", "EMR 0.61, ISO 45001, OSHA 30 and 1,410 days since lost time, instead of adjectives."],
    ["A form estimators can use", "Chips for type, budget and start date, a two-day reply promise by the button, and separate desks for subs and jobs."],
  ],
  stats: [["6", "pages designed"], ["4", "audiences routed"], ["10", "issues found in review"]],
  takeaway: "In B2B, credibility is content strategy before visual design: the right numbers did more than any layout. Consistency is a trust signal too; one mismatched phone number undoes a page of proof.",
  project: "Ironvale",
  screensLabel: "All pages",
  screens: PAGES.map((p) => ({ src: p.img, w: 1200, h: p.h, label: p.name })),
  note: "Concept for a fictional client: research, personas and testing are proposed or hypothetical.",
};

export default function IronvaleCaseStudy({ theme, mode, setRoute }) {
  const { isMobile, isMobileOrTablet } = useBreakpoint();
  const idx = projects.findIndex((p) => p.id === PROJECT_ID);
  const next = projects[(idx + 1) % projects.length];
  const isDark = mode === "dark";
  const sp = { theme, isMobile, isMobileOrTablet };
  // Orange that passes 4.5:1 as text on the portfolio's light or dark ground.
  const accent = isDark ? "#F07A3F" : I.deep;

  const cols2 = isMobileOrTablet ? "minmax(0, 1fr)" : "repeat(2, minmax(0, 1fr))";
  const cols3 = isMobileOrTablet ? "minmax(0, 1fr)" : "repeat(3, minmax(0, 1fr))";
  const cols4 = isMobile ? "minmax(0, 1fr)" : isMobileOrTablet ? "repeat(2, minmax(0, 1fr))" : "repeat(4, minmax(0, 1fr))";
  const shadow = isDark ? "0 12px 40px rgba(0,0,0,0.45)" : "0 12px 40px rgba(0,0,0,0.07)";
  const cardTitle = { fontFamily: "Inter", fontSize: 18, fontWeight: 600, color: theme.ink, marginBottom: 8, letterSpacing: "-0.01em", lineHeight: 1.35 };
  const body = { fontFamily: "Inter", fontSize: 15.5, lineHeight: 1.6, color: theme.inkSoft };
  const sub = { fontFamily: "Inter", fontSize: 22, fontWeight: 600, letterSpacing: "-0.02em", color: theme.ink, margin: "0 0 16px" };
  const label = { fontFamily: "Inter", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: theme.inkMute, margin: "14px 0 4px" };
  const T = (k, c) => <Tag kind={k} isDark={isDark}>{c}</Tag>;
  const sevColor = (s) => (s === "High" ? (isDark ? "#F2A28F" : "#9A3B26") : s === "Medium" ? (isDark ? "#E9C07A" : "#875A06") : (isDark ? "#A6D190" : "#3E6B2F"));

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (window.lenis) window.lenis.scrollTo(el, { offset: -90 }); else el.scrollIntoView({ block: "start" });
  };

  const cardGrid = (items, cols, titleColor) => (
    <div style={{ display: "grid", gridTemplateColumns: cols, gap: 16 }}>
      {items.map(([t, d], i) => <Reveal key={t} delay={0.04 * (i % 3)}><Card theme={theme}><div style={{ ...cardTitle, color: titleColor || theme.ink }}>{t}</div><div style={body}>{d}</div></Card></Reveal>)}
    </div>
  );

  return (
    <div style={{ paddingTop: isMobile ? 100 : 130 }}>

      <CaseSummary {...SUMMARY} theme={theme} mode={mode} setRoute={setRoute}>
      {!isMobileOrTablet && <SectionRail sections={SECTIONS} theme={theme} onJump={scrollTo} />}
      <section style={{ padding: isMobile ? "8px 4vw 40px" : "8px 6vw 56px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal>
            <Card theme={theme} style={{ marginTop: 24 }}>
              <div style={cardTitle}>How to read this case study</div>
              <p style={{ ...body, margin: "0 0 14px" }}>The six page designs are the source of truth. Ironvale is a fictional client, so no real users were interviewed and no tests were run. Everything below is labelled by where it comes from.</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 18px", alignItems: "center", ...body, fontSize: 14 }}>
                <span>{T("designs", "From the design file")} What the screens actually contain</span>
                <span>{T("assumption", "Assumption")} Context not in the file</span>
                <span>{T("proposed", "Proposed")} Research, personas, tests and outcomes that are planned or hypothetical</span>
                <span>{T("review", "Expert review")} My own audit of the screens</span>
              </div>
            </Card>
          </Reveal>
          {isMobileOrTablet && (
          <Reveal delay={0.1}>
            <nav aria-label="Case study sections" style={{ marginTop: 28 }}>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexWrap: "wrap", gap: 8 }}>
                {SECTIONS.map(([id, name], i) => (
                  <li key={id}>
                    <a href={`#${id}`} data-cursor="hover" onClick={(e) => { e.preventDefault(); scrollTo(id); }}
                      style={{ display: "inline-block", padding: "7px 14px", borderRadius: 999, border: `1px solid ${theme.line}`, background: theme.card, color: theme.inkSoft, textDecoration: "none", fontFamily: "Inter", fontSize: 13.5 }}>
                      <span style={{ color: theme.accent, fontWeight: 600, marginRight: 6 }}>{String(i + 1).padStart(2, "0")}</span>{name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </Reveal>
          )}
        </div>
      </section>

      {/* 1 ── OVERVIEW */}
      <Section {...sp} n={1} id="overview" eyebrow="Project overview" title="A builder that sells certainty" intro="Ironvale’s pitch, as written in the file, is about control: its own crews pour the concrete, one superintendent stays from mobilization to warranty walk, and pricing starts before the drawings are final. The website’s job is to prove that, fast, to people who are about to commit millions of dollars." alt>
        <div style={{ display: "grid", gridTemplateColumns: cols3, gap: 16 }}>
          {OVERVIEW_CARDS.map(([t, d], i) => <Reveal key={t} delay={0.04 * i}><Card theme={theme}><div style={cardTitle}>{t}</div><div style={body}>{d}</div><div style={{ marginTop: 12 }}>{T("designs", "From the design file")}</div></Card></Reveal>)}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: isMobileOrTablet ? "minmax(0, 1fr)" : "minmax(0, 1.2fr) minmax(0, 1fr)", gap: 16, marginTop: 16 }}>
          <Reveal>
            <Card theme={theme}>
              <div style={cardTitle}>Project goals</div>
              <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {GOALS.map(([k, v], i) => (
                  <li key={k} style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "10px 0", borderTop: i ? `1px solid ${theme.line}` : "none", ...body }}>
                    <Check size={16} color={accent} aria-hidden="true" style={{ flexShrink: 0, marginTop: 4 }} />
                    <span><strong style={{ color: theme.ink, fontWeight: 600 }}>{k}.</strong> {v}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
          <Reveal delay={0.05}>
            <Card theme={theme}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 14 }}><span style={{ ...cardTitle, marginBottom: 0 }}>Timeline</span>{T("assumption", "Assumption")}</div>
              <div role="img" aria-label="Four-week timeline: Discover in week 1 and Define in week 2 are proposed; Ideate and wireframe in week 3 and Visual design in weeks 3 to 4 are in the file; Prototype and test in week 4 is proposed.">
                <div style={{ display: "grid", gridTemplateColumns: "140px repeat(4, 1fr)", gap: 0, fontFamily: "Inter", fontSize: 12.5, color: theme.inkMute, marginBottom: 6 }}>
                  <span />{[1, 2, 3, 4].map((w) => <span key={w} style={{ textAlign: "center" }}>Week {w}</span>)}
                </div>
                {TIMELINE.map(([name, start, kind]) => (
                  <div key={name} style={{ display: "grid", gridTemplateColumns: "140px 1fr", alignItems: "center", padding: "7px 0", borderTop: `1px solid ${theme.line}` }}>
                    <span style={{ fontFamily: "Inter", fontSize: 13.5, color: theme.inkSoft }}>{name}</span>
                    <div style={{ position: "relative", height: 24 }}>
                      <span style={{ position: "absolute", left: `${(start / 4) * 100}%`, width: "25%", top: 0, bottom: 0, borderRadius: 999, boxSizing: "border-box", ...(kind === "designs" ? { background: accent } : { border: `1.5px dashed ${accent}` }) }} />
                    </div>
                  </div>
                ))}
                <div style={{ display: "flex", gap: 18, flexWrap: "wrap", marginTop: 12, fontFamily: "Inter", fontSize: 12.5, color: theme.inkSoft }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><span style={{ width: 18, height: 10, borderRadius: 9, background: accent }} />In the file</span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><span style={{ width: 18, height: 10, borderRadius: 9, border: `1.5px dashed ${accent}`, boxSizing: "border-box" }} />Proposed</span>
                </div>
              </div>
            </Card>
          </Reveal>
        </div>
      </Section>

      {/* 2 ── PROBLEM */}
      <Section {...sp} n={2} id="problem" eyebrow="Problem statement" title="Owners can’t see the difference between builders" intro="From a website, a self-perform contractor with one superintendent per job looks the same as a firm that brokers every trade. Owners are left to find out in interviews, and estimators get vague inquiries they have to chase.">
        <Reveal>
          <div style={{ padding: isMobile ? "22px 22px" : "30px 36px", borderRadius: 18, border: `1.5px solid ${accent}`, fontFamily: "Inter", fontSize: isMobile ? 17 : 21, lineHeight: 1.55, color: theme.inkSoft }}>
            Facility directors and developers choosing a contractor <strong style={{ color: theme.ink, fontWeight: 600 }}>need fast, verifiable evidence of schedule, safety and cost control</strong>, because a wrong pick means delays, change orders or a shutdown. Ironvale needs a site that <strong style={{ color: theme.ink, fontWeight: 600 }}>surfaces that evidence early</strong> and <strong style={{ color: theme.ink, fontWeight: 600 }}>turns interest into a scoped quote request</strong> without a cycle of phone tag.
          </div>
        </Reveal>
        <div style={{ marginTop: 16 }}>{cardGrid(PROBLEMS, cols3, accent)}</div>
        <Reveal><p style={{ ...body, fontSize: 14, margin: "12px 0 0" }}>{T("proposed", "Proposed")} P1–P6 are design hypotheses drawn from the brief and the content in the file. They are the claims the research in section 03 is designed to test.</p></Reveal>
        <Reveal><h3 style={{ ...sub, marginTop: 40 }}>How might we…</h3></Reveal>
        <div style={{ display: "grid", gridTemplateColumns: cols2, gap: 12 }}>
          {HMW.map((h) => <Reveal key={h}><div style={{ ...body, padding: "16px 20px", borderRadius: 14, background: theme.bgAlt, color: theme.ink, height: "100%", boxSizing: "border-box" }}><span style={{ color: accent, fontWeight: 600 }}>How might we</span> {h.replace(/^…/, "")}</div></Reveal>)}
        </div>
      </Section>

      {/* 3 ── RESEARCH */}
      <Section {...sp} n={3} id="research" eyebrow="Research and discovery" title="What we’d need to learn, and how" intro="No user research is documented with this design. Below is the research plan that fits the problem, and the working hypotheses the design was built on. None of it is presented as completed findings." tag={T("proposed", "Proposed")} alt>
        <Reveal><DataTable cols={RESEARCH_PLAN.cols} rows={RESEARCH_PLAN.rows} theme={theme} minWidth={780} /></Reveal>
        <Reveal><div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", margin: "40px 0 6px" }}><h3 style={{ ...sub, margin: 0 }}>Competitive audit framework</h3>{T("proposed", "Proposed")}</div></Reveal>
        <Reveal><p style={{ ...body, margin: "0 0 16px", maxWidth: 760 }}>Rather than naming competitors without having audited them, this is the rubric to score 8–10 contractor sites across three archetypes. The cells describe what to check, not results.</p></Reveal>
        <Reveal><DataTable cols={AUDIT.cols} rows={AUDIT.rows} theme={theme} minWidth={900} render={(c, j) => j === 4 ? <span style={{ color: theme.ink, fontWeight: 500 }}>{c}</span> : c} /></Reveal>
        <Reveal><div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", margin: "40px 0 16px" }}><h3 style={{ ...sub, margin: 0 }}>Working hypotheses that shaped the design</h3>{T("proposed", "To validate")}</div></Reveal>
        <div style={{ display: "grid", gridTemplateColumns: cols2, gap: 16 }}>
          {HYPOTHESES.map(([t, d], i) => <Reveal key={t} delay={0.04 * (i % 2)}><Card theme={theme}><div style={cardTitle}>{t}</div><div style={body}><strong style={{ color: theme.ink, fontWeight: 600 }}>Design response:</strong> {d}</div></Card></Reveal>)}
        </div>
      </Section>

      {/* 4 ── PERSONAS */}
      <Section {...sp} n={4} id="personas" eyebrow="Target audience and personas" title="Three people, three decisions" intro="The site’s content points to three primary audiences: owners with live facilities, developers comparing bids, and tradespeople looking for a stable employer. Subcontractors are a secondary audience the footer and Contact page route separately. The personas are hypothetical archetypes for design, not interviewed people." tag={T("proposed", "Hypothetical")}>
        <div style={{ display: "grid", gridTemplateColumns: cols3, gap: 16 }}>
          {PERSONAS.map((p, i) => (
            <Reveal key={p.i} delay={0.05 * i}>
              <Card theme={theme}>
                <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 14 }}>
                  <span aria-hidden="true" style={{ width: 44, height: 44, flexShrink: 0, borderRadius: 99, border: `1.5px solid ${accent}`, color: accent, display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: "Inter", fontWeight: 700, fontSize: 14 }}>{p.i}</span>
                  <div><div style={{ ...cardTitle, marginBottom: 0 }}>{p.name}</div><div style={{ ...body, fontSize: 14 }}>{p.role}</div></div>
                </div>
                <blockquote style={{ margin: 0, paddingLeft: 14, borderLeft: `3px solid ${I.orange}`, fontFamily: "Inter", fontSize: 15.5, lineHeight: 1.55, color: theme.ink }}>“{p.quote}”</blockquote>
                {p.rows.map(([k, v]) => <div key={k}><div style={{ ...label, color: k.startsWith("What") ? accent : theme.inkMute }}>{k}</div><div style={{ ...body, fontSize: 14.5 }}>{v}</div></div>)}
              </Card>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <Card theme={theme} style={{ marginTop: 16 }}>
            <div style={{ display: "grid", gridTemplateColumns: isMobileOrTablet ? "1fr" : "260px 1fr", gap: isMobile ? 8 : 28 }}>
              <div><div style={{ ...label, margin: "0 0 4px" }}>Secondary audience</div><div style={{ ...cardTitle, marginBottom: 0 }}>Subcontractors and suppliers</div></div>
              <div style={body}>Need: get prequalified and on the bid list. The design gives them “Subcontractor prequalification” in the footer of every page and “Subcontractor prequal” under Other desks on Contact, so they never enter the owner’s quote form.</div>
            </div>
          </Card>
        </Reveal>
      </Section>

      {/* 5 ── JOURNEY */}
      <Section {...sp} n={5} id="journey" eyebrow="User journey map" title="From a stalled site to a number she can take to the board" intro="Maya’s journey, from the moment she needs a contractor to the moment she’s waiting for a number. The emotion lines show where the current experience (typical GC sites) dips, and where the Ironvale design intervenes." tag={T("proposed", "Hypothetical")} alt>
        <Reveal>
          <div data-lenis-prevent style={{ overflowX: "auto", borderRadius: 18, border: `1px solid ${theme.line}`, background: theme.card }}>
            <div style={{ minWidth: 940, display: "grid", gridTemplateColumns: `128px repeat(${JOURNEY.length}, 1fr)`, fontFamily: "Inter", fontSize: 13.5, lineHeight: 1.45 }}>
              {(() => {
                const out = [];
                const head = (t, k) => <div key={k} style={{ padding: "12px 14px", borderTop: `1px solid ${theme.line}`, fontWeight: 600, color: theme.ink }}>{t}</div>;
                const cell = (c, k, extra) => <div key={k} style={{ padding: "12px 14px", borderTop: `1px solid ${theme.line}`, borderLeft: `1px solid ${theme.line}`, color: theme.inkSoft, ...extra }}>{c}</div>;
                out.push(<div key="h" style={{ padding: "12px 14px", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: theme.inkMute }}>Stage</div>);
                JOURNEY.forEach((j, i) => out.push(<div key={`s${i}`} style={{ padding: "12px 14px", borderLeft: `1px solid ${theme.line}`, fontWeight: 600, color: theme.ink }}>{j.s}</div>));
                out.push(head("Doing", "d")); JOURNEY.forEach((j, i) => out.push(cell(j.doing, `d${i}`)));
                out.push(head("Thinking", "t")); JOURNEY.forEach((j, i) => out.push(cell(j.think, `t${i}`, { color: theme.ink })));
                out.push(head("Pain point", "p")); JOURNEY.forEach((j, i) => out.push(cell(j.pain, `p${i}`, { color: isDark ? "#F2A28F" : "#9A3B26" })));
                out.push(head("Opportunity", "o")); JOURNEY.forEach((j, i) => out.push(cell(j.opp, `o${i}`, { color: isDark ? "#A6D190" : "#3E6B2F" })));
                out.push(head("Ironvale page", "a")); JOURNEY.forEach((j, i) => out.push(cell(j.page, `a${i}`, { color: theme.ink, fontWeight: 500 })));
                out.push(head("Emotion", "f"));
                const n = JOURNEY.length, W = n * 100, y = (v) => 50 - v * 20;
                const line = (k) => JOURNEY.map((j, i) => `${50 + i * 100},${y(j[k])}`).join(" ");
                out.push(
                  <div key="fl" style={{ gridColumn: "2 / -1", borderTop: `1px solid ${theme.line}`, borderLeft: `1px solid ${theme.line}`, padding: "10px 0" }}>
                    <svg viewBox={`0 0 ${W} 100`} preserveAspectRatio="none" role="img" aria-label="Emotion lines. Typical GC sites: starts neutral, dips through search, evaluation and trust, and ends at its lowest while waiting for a number. With this design: rises steadily through each stage and stays high while waiting, because a response time is promised." style={{ width: "100%", height: 100, display: "block" }}>
                      <line x1="0" y1="50" x2={W} y2="50" stroke={theme.line} strokeWidth="1" vectorEffect="non-scaling-stroke" />
                      <polyline points={line("typical")} fill="none" stroke={theme.inkMute} strokeWidth="2" strokeDasharray="6 5" vectorEffect="non-scaling-stroke" />
                      <polyline points={line("design")} fill="none" stroke={I.orange} strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
                    </svg>
                  </div>
                );
                return out;
              })()}
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div style={{ display: "flex", gap: 22, flexWrap: "wrap", marginTop: 12, fontFamily: "Inter", fontSize: 13.5, color: theme.inkSoft }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}><svg width="26" height="6" aria-hidden="true"><line x1="0" y1="3" x2="26" y2="3" stroke={theme.inkMute} strokeWidth="2" strokeDasharray="5 4" /></svg>Typical current-state experience</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}><svg width="26" height="6" aria-hidden="true"><line x1="0" y1="3" x2="26" y2="3" stroke={I.orange} strokeWidth="2.5" /></svg>Intended experience with this design</span>
            <span style={{ color: theme.inkMute }}>Scroll sideways on small screens.</span>
          </div>
        </Reveal>
      </Section>

      {/* 6 ── IA */}
      <Section {...sp} n={6} id="ia" eyebrow="Information architecture" title="Six pages, one path to a quote" intro="A flat, shallow structure: every page sits one click from Home, and every page ends at the same call to action. The sitemap is drawn from the section order in the file; dashed boxes are pages the design implies but doesn’t yet include." tag={T("designs", "From the design file")}>
        <Reveal>
          <Card theme={theme} style={{ padding: isMobile ? 18 : 28 }}>
            <div style={{ padding: "10px 16px", borderRadius: 999, background: I.surface, color: I.ink, fontFamily: "Inter", fontSize: 13.5, textAlign: "center", border: `1px solid ${I.hairline}` }}>
              Global on every page: Header (nav · phone · Request a Quote) · CTA band “Send us the drawings” · Footer (Services · Company · Contact)
            </div>
            <div style={{ textAlign: "center", margin: "18px 0" }}>
              <span style={{ display: "inline-block", padding: "8px 26px", borderRadius: 10, background: I.orange, color: "#fff", fontFamily: "Inter", fontWeight: 700 }}>ironvale.build</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : isMobileOrTablet ? "repeat(3, 1fr)" : "repeat(6, 1fr)", gap: 12 }}>
              {IA.map(([t, items]) => (
                <div key={t} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <span style={{ padding: "9px 6px", borderRadius: 10, background: "#262626", border: `1.5px solid ${t === "Contact" ? I.orange : "#262626"}`, color: "#fff", textAlign: "center", fontFamily: "Inter", fontWeight: 600, fontSize: 14.5 }}>{t}</span>
                  {items.map(([it, kind]) => (
                    <span key={it} style={{ padding: "6px 8px", borderRadius: 7, fontFamily: "Inter", fontSize: 12.5, lineHeight: 1.35,
                      ...(kind === "implied" ? { border: `1.5px dashed ${theme.inkMute}`, color: theme.inkSoft, background: "transparent", marginTop: 6 } : kind === "cta" ? { background: "#3A1A0B", border: `1px solid ${I.orange}`, color: "#FFB58F" } : { background: I.surface, border: `1px solid ${I.hairline}`, color: I.ink }) }}>{it}</span>
                  ))}
                </div>
              ))}
            </div>
            <p style={{ ...body, fontSize: 13, color: theme.inkMute, margin: "16px 0 0" }}>Dashed = implied by the design, not yet in the file · Orange = conversion path</p>
          </Card>
        </Reveal>
        <div style={{ marginTop: 16 }}>{cardGrid(IA_NOTES, cols3)}</div>
      </Section>

      {/* 7 ── FLOWS */}
      <Section {...sp} n={7} id="flows" eyebrow="User flows" title="Every audience has a door" intro="Four task flows built on the screens in the file. Solid nodes exist in the design; dashed nodes are states the flow needs but the file doesn’t show yet, such as the post-submit confirmation." alt>
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {FLOWS.map((f) => (
            <Reveal key={f.t}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap", alignItems: "baseline", marginBottom: 14 }}>
                <div style={{ ...cardTitle, fontSize: 20, marginBottom: 0 }}>{f.t}</div>
                <div style={{ ...body, fontSize: 14 }}>Persona: {f.who}</div>
              </div>
              <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: 8 }}>
                {f.steps.map(([kind, t, branch], i) => {
                  const st = {
                    entry: { background: "#262626", color: "#fff", border: `1.5px solid ${isDark ? "#A6D190" : "#3E6B2F"}`, borderRadius: 999 },
                    page: { background: "#262626", color: "#fff", border: "1.5px solid #262626" },
                    action: { background: I.deep, color: "#fff", border: `1.5px solid ${I.deep}` },
                    decision: { background: "#262626", color: "#fff", border: "1.5px solid #E9C07A", borderRadius: 4 },
                    missing: { background: "transparent", color: theme.ink, border: `1.5px dashed ${theme.inkMute}` },
                  }[kind];
                  return (
                    <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                      <span style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                        <span style={{ display: "inline-block", padding: "11px 14px", borderRadius: 12, fontFamily: "Inter", fontSize: 14, fontWeight: kind === "missing" ? 500 : 600, lineHeight: 1.3, textAlign: "center", ...st }}>
                          {kind === "decision" && <span aria-hidden="true">◆ </span>}{t}
                          {kind === "missing" && <span style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }}> (not in the file yet)</span>}
                        </span>
                        {branch && <span style={{ fontFamily: "Inter", fontSize: 12.5, color: theme.inkSoft, maxWidth: 180, textAlign: "center" }}>↓ {branch}</span>}
                      </span>
                      {i < f.steps.length - 1 && <span aria-hidden="true" style={{ paddingTop: 11, display: "inline-flex" }}><ArrowRight size={16} color={theme.inkMute} />{kind === "decision" && <span style={{ fontFamily: "Inter", fontSize: 11.5, color: theme.inkMute, marginLeft: 2 }}>yes</span>}</span>}
                    </li>
                  );
                })}
              </ol>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 22px", marginTop: 28, fontFamily: "Inter", fontSize: 13.5, color: theme.inkSoft }}>
            {[["Entry", { background: "#262626", border: `1.5px solid ${isDark ? "#A6D190" : "#3E6B2F"}`, borderRadius: 99 }], ["Screen", { background: "#262626" }], ["User action", { background: I.deep }], ["Decision", { background: "#262626", border: "1.5px solid #E9C07A" }], ["Not in the file yet", { border: `1.5px dashed ${theme.inkMute}` }]].map(([l, s]) => (
              <span key={l} style={{ display: "inline-flex", alignItems: "center", gap: 8 }}><span aria-hidden="true" style={{ width: 18, height: 14, borderRadius: 4, boxSizing: "border-box", ...s }} />{l}</span>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* 8 ── STRATEGY */}
      <Section {...sp} n={8} id="strategy" eyebrow="Ideation and UX strategy" title="Proof before pitch" intro="The strategy came from one observation: in Ironvale’s own copy, the most persuasive lines are numbers and promises (“0.61 EMR”, “an estimator responds within two business days”). So the design is a delivery system for evidence, with one action at the end of every page.">
        {cardGrid(PRINCIPLES, cols4)}
        <Reveal><div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", margin: "40px 0 6px" }}><h3 style={{ ...sub, margin: 0 }}>Ideas explored</h3>{T("assumption", "Assumption")}</div></Reveal>
        <Reveal><p style={{ ...body, margin: "0 0 16px", maxWidth: 780 }}>Directions weighed for the key moments, and what was chosen. The selected options are what appears in the file; the alternatives are a reconstruction of the decision space.</p></Reveal>
        <Reveal><DataTable cols={IDEAS.cols} rows={IDEAS.rows} theme={theme} minWidth={760} render={(c, j) => j === 2 ? <span style={{ color: theme.ink, fontWeight: 500 }}>{c}</span> : c} /></Reveal>
        <Reveal><h3 style={{ ...sub, marginTop: 40 }}>Feature prioritisation (MoSCoW)</h3></Reveal>
        <div style={{ display: "grid", gridTemplateColumns: cols4, gap: 16 }}>
          {MOSCOW.map(([t, items], i) => (
            <Reveal key={t} delay={0.04 * i}>
              <Card theme={theme} style={i === 0 ? { border: `1.5px solid ${accent}` } : undefined}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 10, paddingBottom: 10, borderBottom: `1px solid ${theme.line}` }}>
                  <span style={{ ...cardTitle, marginBottom: 0, fontSize: 20 }}>{t}</span>
                  <span style={{ fontFamily: "Inter", fontSize: 14, color: theme.inkMute }}>{items.length}</span>
                </div>
                <Checks items={items} theme={theme} accent={accent} style={{ ...body, fontSize: 14.5 }} />
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 9 ── WIREFRAMES */}
      <Section {...sp} n={9} id="wireframes" eyebrow="Wireframing" title="Structure before skin" intro="Low-fidelity layouts reconstructed from the final frames, to show the structural decisions independent of photography and colour. Orange blocks mark the primary action." tag={T("assumption", "Reconstructed")} alt>
        <div style={{ display: "grid", gridTemplateColumns: cols2, gap: isMobile ? 32 : 28 }}>
          {Object.entries(WIRE_NOTES).map(([k, notes], i) => (
            <Reveal key={k} delay={0.04 * (i % 2)}>
              <div>
                <div style={{ ...cardTitle, fontSize: 20 }}>{k}</div>
                <Wireframe kind={k} theme={theme} />
                <Bullets ordered items={notes} style={{ ...body, fontSize: 14.5, marginTop: 14 }} />
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 10 ── VISUAL */}
      <Section {...sp} n={10} id="visual" eyebrow="UI design and visual direction" title="Night shift, safety orange" intro="A near-black canvas lets site photography (blue sky, steel, hi-vis vests) carry the colour. One accent, the orange of safety gear, is reserved for action and proof. Values were sampled from the exported frames; sizes are approximate at the 1440px frame." tag={T("designs", "From the design file")}>
        <Reveal>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)", gap: 12 }}>
            {SWATCHES.map(([n, hex, use, ratio]) => (
              <div key={n} style={{ borderRadius: 16, overflow: "hidden", border: `1px solid ${theme.line}`, background: theme.card }}>
                <div aria-hidden="true" style={{ height: isMobile ? 64 : 88, background: hex, borderBottom: `1px solid ${theme.line}` }} />
                <div style={{ padding: "12px 14px", fontFamily: "Inter" }}>
                  <div style={{ fontSize: 14.5, fontWeight: 600, color: theme.ink }}>{n}</div>
                  <div style={{ fontSize: 12.5, color: theme.inkMute, fontFamily: "ui-monospace, Menlo, monospace", margin: "2px 0 4px" }}>{hex}</div>
                  <div style={{ fontSize: 13, color: theme.inkSoft, lineHeight: 1.4 }}>{use}</div>
                  <div style={{ fontSize: 12.5, color: ratio.includes("⚠") ? (isDark ? "#F2A28F" : "#9A3B26") : theme.inkMute, marginTop: 6 }}>{ratio}</div>
                </div>
              </div>
            ))}
          </div>
          <p style={{ ...body, fontSize: 13.5, color: theme.inkMute, margin: "10px 0 0" }}>Contrast ratios against the #0E0E0E base, calculated from the sampled values.</p>
        </Reveal>
        <Reveal>
          <Card theme={theme} style={{ marginTop: 16 }}>
            <div style={cardTitle}>Typography: one neo-grotesque family</div>
            <p style={{ ...body, margin: "0 0 12px" }}>Renders as Inter (to confirm in the Figma file), in three voices: sentence-case display for heroes, uppercase for section statements, tracked micro-labels for metadata.</p>
            <div style={{ borderRadius: 14, background: I.base, padding: isMobile ? "6px 16px" : "6px 24px" }}>
              {TYPE_SCALE.map(([k, w, sample, size, weight, upper], i) => (
                <div key={k} style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "190px 1fr", gap: isMobile ? 4 : 20, alignItems: "baseline", padding: "14px 0", borderTop: i ? `1px solid ${I.hairline}` : "none" }}>
                  <div style={{ fontFamily: "Inter", fontSize: 12.5, color: I.label, lineHeight: 1.4 }}>{k}<br />{w}</div>
                  <div style={{ fontFamily: "Inter", fontSize: isMobile ? Math.min(size, 34) : size, fontWeight: weight, color: I.ink, lineHeight: 1.15, letterSpacing: size > 40 ? "-0.02em" : size < 12 ? "0.12em" : 0, textTransform: upper ? "uppercase" : "none" }}>{sample}</div>
                </div>
              ))}
            </div>
          </Card>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: cols2, gap: 16, marginTop: 16 }}>
          <Reveal><Card theme={theme}><div style={cardTitle}>Grid, spacing and shape</div><Checks items={GRID} theme={theme} accent={accent} style={{ ...body, fontSize: 14.5 }} /></Card></Reveal>
          <Reveal delay={0.05}><Card theme={theme}><div style={cardTitle}>Design principles</div><Checks items={VISUAL_PRINCIPLES.map(([k, v]) => <span key={k}><strong style={{ color: theme.ink, fontWeight: 600 }}>{k}.</strong> {v}</span>)} theme={theme} accent={accent} style={{ ...body, fontSize: 14.5 }} /></Card></Reveal>
        </div>
        <Reveal>
          <Card theme={theme} style={{ marginTop: 16 }}>
            <div style={cardTitle}>Component library, rebuilt</div>
            <div style={{ borderRadius: 14, background: I.base, padding: isMobile ? 18 : 28, display: "grid", gridTemplateColumns: isMobileOrTablet ? "1fr" : "1fr 1fr", gap: 28, fontFamily: "Inter" }}>
              <div>
                <div style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: "0.12em", color: I.label, marginBottom: 12 }}>BUTTONS</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 18px", borderRadius: 999, background: I.orange, color: "#fff", fontSize: 14, fontWeight: 600 }}>Request a Quote <ArrowUpRight size={14} aria-hidden="true" /></span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "6px 6px 6px 16px", borderRadius: 999, background: I.orange, color: "#fff", fontSize: 12.5, fontWeight: 700, letterSpacing: "0.08em" }}>START A BID <span style={{ width: 26, height: 26, borderRadius: 99, background: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center" }}><ArrowUpRight size={14} color={I.orange} aria-hidden="true" /></span></span>
                  <span style={{ padding: "9px 16px", borderRadius: 999, border: `1px solid ${I.hairline}`, color: I.ink, fontSize: 12.5, fontWeight: 600, letterSpacing: "0.08em" }}><span style={{ color: I.orange }}>●</span> ALL PROJECTS</span>
                </div>
              </div>
              <div>
                <div style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: "0.12em", color: I.label, marginBottom: 12 }}>CHIPS AND TAGS</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {[["ALL WORK", { background: I.orange, color: "#fff" }], ["COMMERCIAL", { border: `1px solid ${I.hairline}`, color: I.label }], ["NO EXPERIENCE", { background: "#3A1A0B", color: "#FFB58F", border: `1px solid ${I.orange}` }], ["CLEVELAND, OH", { border: `1px solid ${I.hairline}`, color: I.label }]].map(([t, s]) => (
                    <span key={t} style={{ padding: "6px 12px", borderRadius: 999, fontSize: 11.5, fontWeight: 600, letterSpacing: "0.1em", ...s }}>{t}</span>
                  ))}
                </div>
              </div>
              <div>
                <div style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: "0.12em", color: I.label, marginBottom: 12 }}>METRIC BLOCK</div>
                <div style={{ display: "flex", gap: 36, flexWrap: "wrap" }}>
                  {[["0.61", "EXPERIENCE MOD RATE"], ["1,410", "DAYS SINCE LOST TIME"]].map(([n, c]) => (
                    <div key={c}><div style={{ fontSize: 40, fontWeight: 700, color: I.orange, letterSpacing: "-0.02em", lineHeight: 1.1 }}>{n}</div><div style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: "0.12em", color: I.label, marginTop: 6 }}>{c}</div></div>
                  ))}
                </div>
              </div>
              <div>
                <div style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: "0.12em", color: I.label, marginBottom: 12 }}>LIST ROW</div>
                <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", padding: "14px 0", borderTop: `1px solid ${I.hairline}`, borderBottom: `1px solid ${I.hairline}` }}>
                  <span style={{ fontSize: 17, fontWeight: 600, color: I.ink, flex: "1 1 auto" }}>SENIOR ESTIMATOR</span>
                  <span style={{ padding: "5px 11px", borderRadius: 999, border: `1px solid ${I.hairline}`, color: I.label, fontSize: 11, fontWeight: 600, letterSpacing: "0.1em" }}>CLEVELAND, OH</span>
                  <span style={{ fontSize: 13, color: I.muted }}>Full-time</span>
                  <ArrowUpRight size={16} color={I.orange} aria-hidden="true" />
                </div>
              </div>
            </div>
            <p style={{ ...body, fontSize: 14, margin: "14px 0 0" }}>Also: the hero pattern (claim card, proof photo with stats, rotating badge), the metric card (four proofs on a hairline grid) and the timeline (orange nodes on a single rule, year as display number).</p>
          </Card>
        </Reveal>
      </Section>

      {/* 11 ── PROTOTYPE */}
      <Section {...sp} n={11} id="prototype" eyebrow="Prototyping" title="The interactions that carry the story" intro="The file is static, but several frames clearly capture a moment in an interaction: a highlighted service with a floating photo, a half-lit statement, a card cut off at the edge. These are the interactions the prototype should model." tag={T("assumption", "Inferred from frames")} alt>
        {cardGrid(INTERACTIONS, cols2)}
        <Reveal><div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", margin: "40px 0 16px" }}><h3 style={{ ...sub, margin: 0 }}>Key scenarios to prototype</h3>{T("proposed", "Proposed")}</div></Reveal>
        <Reveal><DataTable cols={SCENARIOS.cols} rows={SCENARIOS.rows} theme={theme} minWidth={820} /></Reveal>
      </Section>

      {/* 12 ── TESTING */}
      <Section {...sp} n={12} id="testing" eyebrow="Usability testing" title="Test plan, review, iteration" intro="No usability tests have been run on this design. This section has three honest parts: the test plan, a heuristic review of the actual frames, and the design iteration that review leads to.">
        <div style={{ display: "grid", gridTemplateColumns: cols2, gap: 16 }}>
          <Reveal><Card theme={theme}><div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}><span style={{ ...cardTitle, marginBottom: 0 }}>Test plan</span>{T("proposed", "Proposed")}</div><Checks items={TEST_PLAN.map(([k, v]) => <span key={k}><strong style={{ color: theme.ink, fontWeight: 600 }}>{k}:</strong> {v}</span>)} theme={theme} accent={accent} style={{ ...body, fontSize: 14.5 }} /></Card></Reveal>
          <Reveal delay={0.05}><Card theme={theme}><div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}><span style={{ ...cardTitle, marginBottom: 0 }}>Tasks</span>{T("proposed", "Proposed")}</div><Bullets ordered items={TEST_TASKS} style={body} /></Card></Reveal>
        </div>
        <Reveal><div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", margin: "40px 0 6px" }}><h3 style={{ ...sub, margin: 0 }}>Heuristic review of the frames</h3>{T("review", "Expert review")}</div></Reveal>
        <Reveal><p style={{ ...body, margin: "0 0 16px", maxWidth: 780 }}>Issues found by inspecting the six exported pages against Nielsen’s heuristics and WCAG 2.2. These are real observations of the file, not participant feedback.</p></Reveal>
        <Reveal>
          <DataTable cols={["Issue", "Where", "Heuristic", "Severity", "Iteration"]} rows={ISSUES} theme={theme} minWidth={900}
            render={(c, j) => j === 3 ? <span style={{ fontWeight: 700, color: sevColor(c) }}>{c}</span> : c} />
        </Reveal>
        <Reveal><h3 style={{ ...sub, marginTop: 40 }}>Iteration: the budget and timing fields</h3></Reveal>
        <div style={{ display: "grid", gridTemplateColumns: cols2, gap: 16, alignItems: "stretch" }}>
          <Reveal>
            <Card theme={theme}>
              <div style={{ ...cardTitle, marginBottom: 16 }}>Before, as in the file</div>
              {[["Budget range", ["Under $2M", "$2M – $10M", "$10M – $50M", "$50M+"]], ["Target start", ["Within 3 months", "3 – 6 months", "6 – 12 months", "Not yet scheduled"]]].map(([l, opts]) => (
                <div key={l} style={{ marginBottom: 18 }}>
                  <div style={{ fontFamily: "Inter", fontSize: 12.5, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: theme.inkMute, marginBottom: 10 }}>{l}</div>
                  <div aria-hidden="true" style={{ padding: "12px 20px", borderRadius: 22, border: `1.5px solid ${theme.inkMute}`, fontFamily: "Inter", fontSize: 14, lineHeight: 1.45, color: theme.inkSoft }}>{opts.map((o) => <div key={o}>{o}</div>)}</div>
                </div>
              ))}
              <p style={{ ...body, fontSize: 14.5, margin: 0 }}>All options stacked inside one pill field. It reads as filled-in text or a broken select, with no clear way to pick one.</p>
            </Card>
          </Reveal>
          <Reveal delay={0.05}>
            <Card theme={theme}>
              <div style={{ ...cardTitle, marginBottom: 16 }}>After: segmented choices, try it</div>
              <InquiryDemo theme={theme} isDark={isDark} />
            </Card>
          </Reveal>
        </div>
      </Section>

      {/* 13 ── FINAL DESIGN */}
      <Section {...sp} n={13} id="final" eyebrow="Final design and solution" title="The six pages, explained" intro="Each screen is the full exported frame; scroll inside it to see the whole page. The notes connect each section to the problems (P1–P6), hypotheses and personas it answers." alt>
        <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 48 : 64 }}>
          {PAGES.map((p, i) => (
            <Reveal key={p.name}>
              <div style={{ display: "grid", gridTemplateColumns: isMobileOrTablet ? "minmax(0, 1fr)" : "minmax(0, 1.15fr) minmax(0, 1fr)", gap: isMobile ? 20 : 48, alignItems: "start", paddingTop: i ? (isMobile ? 40 : 56) : 0, borderTop: i ? `1px solid ${theme.line}` : "none" }}>
                <ScrollFrame src={p.img} h={p.h} label={p.name} url={p.url} theme={theme} shadow={shadow} maxH={isMobile ? 440 : 620} />
                <div>
                  <h3 style={{ fontFamily: "Inter", fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 500, letterSpacing: "-0.02em", color: theme.ink, margin: "0 0 10px", lineHeight: 1.25 }}>{p.name}: {p.title}</h3>
                  {T("designs", "From the design file")}
                  <ol style={{ listStyle: "none", margin: "20px 0 0", padding: 0, display: "flex", flexDirection: "column", gap: 18 }}>
                    {p.notes.map(([t, d, s], k) => (
                      <li key={t} style={{ display: "grid", gridTemplateColumns: "26px 1fr", gap: 8 }}>
                        <span style={{ fontFamily: "Inter", fontSize: 14, fontWeight: 600, color: accent, paddingTop: 1 }}>{k + 1}</span>
                        <div>
                          <div style={{ fontFamily: "Inter", fontSize: 16, fontWeight: 600, color: theme.ink }}>{t}</div>
                          <div style={{ ...body, fontSize: 15 }}>{d}</div>
                          <div style={{ fontFamily: "Inter", fontSize: 13, color: theme.inkMute, marginTop: 2 }}>Answers: {s}</div>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 14 ── DECISIONS */}
      <Section {...sp} n={14} id="decisions" eyebrow="Design decisions and UX rationale" title="Why it looks and works this way" intro="The decisions with the biggest effect on the experience, the reasoning behind each, and what was traded away.">
        <div style={{ display: "grid", gridTemplateColumns: cols2, gap: 16 }}>
          {DECISIONS.map(([t, why, cost], i) => (
            <Reveal key={t} delay={0.04 * (i % 2)}>
              <Card theme={theme}>
                <div style={cardTitle}>{t}</div>
                <div style={label}>Why</div><div style={body}>{why}</div>
                <div style={label}>Trade-off</div><div style={body}>{cost}</div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 15 ── LEARNINGS */}
      <Section {...sp} n={15} id="learnings" eyebrow="Challenges and learnings" title="What was hard, what it taught" intro="The challenges are the ones visible in the problem and the file; the learnings are my takeaways." alt>
        {cardGrid(CHALLENGES, cols3)}
        <Reveal><h3 style={{ ...sub, marginTop: 40 }}>Key takeaways</h3></Reveal>
        <div style={{ display: "grid", gridTemplateColumns: cols2, gap: 16 }}>
          {TAKEAWAYS.map((t, i) => <Reveal key={t} delay={0.04 * (i % 2)}><Card theme={theme} style={{ borderLeft: `4px solid ${I.orange}` }}><div style={{ ...body, color: theme.ink }}>{t}</div></Card></Reveal>)}
        </div>
      </Section>

      {/* 16 ── NEXT */}
      <Section {...sp} n={16} id="next" eyebrow="Conclusion and future improvements" title="Send us the drawings" intro="Ironvale’s site turns a contractor’s private reputation into public evidence: numbers in the hero, facts on every project, safety as metrics, people you’ll actually deal with, and one consistent ask. Whether it works is a question for the test plan, not this page; the expected outcomes and how to measure them are below.">
        <div style={{ display: "grid", gridTemplateColumns: cols2, gap: 16 }}>
          <Reveal>
            <Card theme={theme}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 8 }}><span style={{ ...cardTitle, marginBottom: 0 }}>Expected impact</span>{T("proposed", "Hypothetical")}</div>
              <Checks items={IMPACT} theme={theme} accent={accent} style={{ ...body, fontSize: 14.5 }} />
              <p style={{ ...body, fontSize: 14, margin: "14px 0 0", paddingTop: 14, borderTop: `1px solid ${theme.line}` }}><strong style={{ color: theme.ink, fontWeight: 600 }}>KPIs to track:</strong> quote-form start and completion rate, share of inquiries an estimator rates “quotable”, time to first response, applications per open role, prequal submissions. No baseline exists yet.</p>
            </Card>
          </Reveal>
          <Reveal delay={0.05}>
            <Card theme={theme}>
              <div style={cardTitle}>Next iterations</div>
              <Checks items={FUTURE.map(([k, v]) => <span key={k}><strong style={{ color: theme.ink, fontWeight: 600 }}>{k}.</strong> {v}</span>)} theme={theme} accent={accent} style={{ ...body, fontSize: 14.5 }} />
            </Card>
          </Reveal>
        </div>
        <Reveal>
          <Card theme={theme} style={{ marginTop: 16 }}>
            <div style={cardTitle}>Assumptions register</div>
            <Checks items={ASSUMPTIONS} theme={theme} accent={accent} style={{ ...body, fontSize: 14.5 }} />
          </Card>
        </Reveal>
        <Reveal><p style={{ ...body, fontSize: 14, color: theme.inkMute, margin: "28px 0 0" }}>Ironvale, its people, clients and figures are sample content from the design file.</p></Reveal>
      </Section>

      </CaseSummary>

      {/* ── NEXT CASE ── */}
      {next && next.id !== PROJECT_ID && (
        <section style={{ padding: isMobile ? "24px 4vw 80px" : "32px 6vw 120px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <Reveal>
              <button onClick={() => setRoute(`project:${next.id}`)} data-cursor="hover"
                style={{ width: "100%", textAlign: "left", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, padding: isMobile ? "24px 22px" : "36px 40px", borderRadius: 22, background: theme.card, border: `1px solid ${theme.line}`, color: theme.ink, fontFamily: "Inter" }}>
                <span>
                  <span style={{ display: "block", fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: theme.inkMute, marginBottom: 8 }}>Next case</span>
                  <span style={{ display: "block", fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 500, letterSpacing: "-0.03em" }}>{next.title}</span>
                </span>
                <ArrowUpRight size={isMobile ? 26 : 34} color={theme.accent} aria-hidden="true" style={{ flexShrink: 0 }} />
              </button>
            </Reveal>
          </div>
        </section>
      )}
    </div>
  );
}
