import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, Minus, Plus } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import { useBreakpoint } from "../hooks/useBreakpoint.js";
import { projects } from "../data/projects.js";

import heroImg from "../assets/hearth/hero.webp";
import pHome from "../assets/hearth/home.webp";
import pProduct from "../assets/hearth/product.webp";
import pPricing from "../assets/hearth/pricing.webp";
import pCustomers from "../assets/hearth/customers.webp";
import pAbout from "../assets/hearth/about.webp";
import pCareer from "../assets/hearth/career.webp";
import pContact from "../assets/hearth/contact.webp";

// The project card this page sits behind (Home / Projects / Nav link here).
const PROJECT_ID = "kinetic";

const POPPINS_URL = "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap";

// Hearth's own palette, used for the diagrams and the rebuilt components.
const H = { navy: "#1a2540", yellow: "#f4cd64", cream: "#faf8f3", sand: "#f2eee5", butter: "#f8edcf", mist: "#dee4f0", peri: "#b0bedb", steel: "#8fa3cc", coral: "#e98b78" };

/* ═══════════════════════ Content ═══════════════════════ */

const META = [
  { k: "My role", v: "UX/UI designer: framing, IA, flows, wireframes, visual design, prototype spec", tag: true },
  { k: "Platform", v: "Desktop web, 1440 px artboards, built in Figma" },
  { k: "Scope", v: "7 pages, 41 sections, shared component set" },
  { k: "Timeline", v: "Concept project, about 4 weeks", tag: true },
];

const SECTIONS = [
  ["overview", "Overview"], ["problem", "Problem"], ["research", "Research"], ["personas", "Personas"],
  ["journey", "Journey"], ["ia", "IA"], ["flows", "User flows"], ["strategy", "Strategy"],
  ["wireframes", "Wireframes"], ["visual", "UI"], ["prototype", "Prototype"], ["testing", "Testing"],
  ["final", "Final design"], ["decisions", "Decisions"], ["learnings", "Learnings"], ["next", "What’s next"],
];

const OVERVIEW_CARDS = [
  ["The product", "Hearth brings WhatsApp, Instagram, email, SMS and web chat into one shared inbox that a whole team answers from, on desktop, iOS and Android. It adds the small tools a team needs: routing rules, internal notes, collision alerts, saved replies and weekly reports."],
  ["The background", "The About page frames the origin: two support leads at a busy online shop, juggling nine tabs and one buzzing phone while customers waited. The site is written for that kind of team: five people, not a 500-seat call centre."],
  ["The website’s job", "Turn a curious owner into a trial user without a sales call, route bigger teams to sales, and give candidates and press a clear way in. Seven pages: Home, Product, Pricing, Customers, About, Career, Contact."],
];

const BUSINESS_GOALS = [
  "Drive free-trial starts: the yellow “Start free trial” sits in the nav of every page and in every closing band",
  "Send Business-plan buyers to “Talk to sales” and “Book a demo”",
  "Earn trust on data handling before the trial, not after",
  "Support hiring with a transparent Career page",
];

const USER_GOALS = [
  "Understand what Hearth is and whether it supports my channels",
  "See it working before I hand over an email address",
  "Know what my team will pay, before talking to anyone",
  "Trust it with my customers’ messages",
  "Reach a real person when I’m stuck",
];

const PAIN_POINTS = {
  cols: ["Pain point", "What it looks like", "Where the design answers it"],
  rows: [
    ["Fragmentation", "Messages arrive in WhatsApp, Instagram, email and a shared phone", "Home hero, “Three steps to one inbox”, Product tour"],
    ["Double replies", "Two people answer the same customer differently", "Collision alerts on Home and Product, quoted on Customers"],
    ["Lost context", "The customer repeats their order number after every handoff", "“Answer together, never twice”: notes, @mentions, history"],
    ["No visibility", "No one knows how many chats closed or how fast", "“Mondays start with a clear picture” weekly report band"],
    ["Setup fear", "“We don’t have an IT person”", "“No code, no IT ticket”, average setup 38 minutes"],
    ["Pricing anxiety", "Will I pay for people who only read?", "Seat calculator, “never for viewers”, FAQ “Who counts as a seat?”"],
    ["Data trust", "These are my customers’ private messages", "Encryption card in Home hero, “Private by design” on Product"],
  ],
};

const RESEARCH_PLAN = {
  cols: ["Method", "Why", "Who / how many", "Output"],
  rows: [
    ["Stakeholder interviews", "Align on business goals, plan structure, launch scope", "Founders, product, growth (3 to 4)", "Goals, constraints, success metrics"],
    ["Contextual inquiry", "Watch real reply work on the shop floor and front desk", "4 teams across retail, clinics, services", "Workflow maps, workarounds"],
    ["Semi-structured interviews", "Understand buying triggers, objections, current tools", "8 to 10 owners and team leads", "Affinity map, persona inputs"],
    ["Short survey", "Size channel mix and team sizes", "50+ small businesses", "Channel and seat distributions"],
    ["Competitor audit", "Learn the category’s conventions and gaps", "6 to 8 products", "Positioning map, pattern library"],
    ["Five-second and first-click tests", "Check the hero explains the product", "15 to 20 unmoderated", "Recall of what Hearth does"],
  ],
};

const LANDSCAPE = [
  ["Enterprise helpdesks", "Ticketing suites such as Zendesk or Freshdesk. Deep, but heavy for a five-person shop, and ticket language feels cold for chat.", "reporting and routing, without tickets."],
  ["Shared email inboxes", "Tools like Front or Help Scout. Strong on collaboration, built email-first.", "notes and collision alerts, messaging-first."],
  ["WhatsApp API tools", "Business messaging platforms focused on broadcasts and chatbots.", "official WhatsApp support, with people, not bots."],
  ["The default: phones and apps", "WhatsApp Business app on one shared phone, plus Gmail. Free and familiar, impossible to share well.", "the familiarity, then adds the team."],
];

const HYPOTHESES = [
  ["H1 · Channels first", "Owners decide in seconds by checking whether their channels are supported, so channel names belong in the first screen."],
  ["H2 · Price before trial", "Seat-based pricing causes hesitation unless the total for “my team” is visible before sign-up."],
  ["H3 · Double replies hurt most", "Collisions are the most embarrassing failure, so collision alerts are the most persuasive feature."],
  ["H4 · Setup is the fear", "Non-technical owners worry more about connecting channels than about learning the inbox."],
  ["H5 · Mobile is real work", "Solo and floor staff reply from phones between tasks, so the apps are a buying reason, not a footnote."],
  ["H6 · Humans convert", "A promise that a person answers (“Talk to a person”) lowers the risk of asking for a demo."],
];

const PERSONAS = [
  { i: "AK", name: "Arjun, the owner-operator", role: "Co-owner, 9-person home décor store", quote: "Half our orders start on WhatsApp. I just need everyone looking at the same messages.",
    rows: [["Behaviours", "Sells on Instagram and WhatsApp, shares one phone at the counter, peaks around festive seasons"], ["Needs", "One queue, quick setup, a price he can predict as staff changes"], ["Frustrations", "Missed DMs, customers asking twice, tools that need an IT person"], ["Looks for on the site", "Channel list, setup time, Pricing calculator, a retail story"]] },
  { i: "FN", name: "Farah, the coordinator", role: "Practice manager, 3-clinic dental group", quote: "If two receptionists answer a patient differently, it looks like we don’t know what we’re doing.",
    rows: [["Behaviours", "Handles bookings, reminders and follow-ups across front desks; reports to the owners"], ["Needs", "Clear ownership of each chat, internal notes, privacy she can explain"], ["Frustrations", "Double replies, no record of who said what, vague security claims"], ["Looks for on the site", "Collision alerts, encryption and data residency, a healthcare story"]] },
  { i: "LM", name: "Leo, the solo pro", role: "Photographer, runs a studio with one assistant", quote: "I’m on shoots all day. If I can’t answer from my phone, the lead is gone.",
    rows: [["Behaviours", "Replies in short bursts between jobs, mostly on mobile"], ["Needs", "Mobile apps, saved replies, the cheapest plan that works"], ["Frustrations", "Desktop-only tools, paying for features he won’t use"], ["Looks for on the site", "App Store and Google Play links, Starter plan, a services story"]] },
];

const SECONDARY = [
  ["The evaluator", "An ops or IT lead at a larger small business checking SSO, SCIM, audit log and data region. Served by the Business plan, the comparison table and “Talk to sales”."],
  ["The candidate", "A designer, engineer or care specialist deciding whether to apply. Served by benefits, filterable roles and a hiring process with time estimates."],
  ["Press and partners", "Looking for facts and a contact. Served by the About timeline and direct addresses on Contact."],
];

// level: 0 (low) … 4 (high); low points get a marker
const JOURNEY = [
  { s: "Aware", sub: "referral or ad", doing: "Hears about Hearth from another shop owner", think: "Another tool to learn?", level: 2.3, pain: "Tool fatigue", opp: "Lead with a plain promise", by: "Hero + trust strip" },
  { s: "Explore", sub: "Home", doing: "Scans the hero, checks for WhatsApp and Instagram", think: "Is this for a shop like mine?", level: 2.7, pain: "Jargon would lose him", opp: "Name channels in the first screen", by: "Hero UI and channel cards" },
  { s: "Understand", sub: "Product tour", doing: "Clicks through the tour tabs", think: "Will my staff actually use it?", level: 3.1, pain: "Feature overload", opp: "Let him choose what to see", by: "Product tour tabs" },
  { s: "Price", sub: "Pricing", doing: "Sets plan and seats in the calculator", think: "What if we add people in festive season?", level: 1.2, low: true, pain: "Fear of hidden seat costs", opp: "Show the total for his team", by: "Seat calculator + FAQ" },
  { s: "Trust", sub: "Customers, security", doing: "Reads a retail story, checks encryption", think: "Can I trust it with customer chats?", level: 1.8, pain: "Generic security claims", opp: "Specific encryption and residency facts", by: "Stories + Private by design" },
  { s: "Start", sub: "trial + setup", doing: "Connects channels, invites staff", think: "Will WhatsApp connect without help?", level: 1.0, low: true, pain: "Setup anxiety", opp: "Three steps, real setup time", by: "Three steps to one inbox" },
  { s: "First week", sub: "daily use", doing: "Team replies from desktop and phone", think: "Are we faster than before?", level: 3.8, pain: "No baseline to compare", opp: "Weekly report as a habit", by: "Mondays report band" },
];

const IA = [
  ["Home", ["Hero + product UI", "Weekly report", "Answer together", "Three steps", "Feature carousel", "Pricing preview", "CTA band"]],
  ["Product", ["Hero + stats", "Tour: Shared inbox", "Tour: Automations", "Tour: Reports", "Tour: Mobile apps", "Small details grid", "Private by design"]],
  ["Pricing", ["Billing toggle", "Three plans", "Seat calculator", "Compare every feature", "FAQ"]],
  ["Customers", ["Featured story", "Headline metrics", "Stories + filters", "In their words"]],
  ["About", ["Mission + photos", "Origin story", "Timeline 2021–2026", "Values", "Team + hiring card"]],
  ["Career", ["Hero + team facts", "Benefits", "Open roles + filters", "How hiring works", "Write to us"]],
  ["Contact", ["Routes: Sales, Support, Press", "Message form", "Offices"]],
];

const IA_GLOBAL = [
  ["Global header", "Logo · Product · Pricing · Customers · About · Career · Contact · Start free trial (yellow, always visible)"],
  ["Closing band", "One-line promise + primary and secondary CTA on every page, tuned to its audience"],
  ["Global footer", "Product: Shared inbox, Automations, Reports, Pricing · Company: About, Customers, Careers, Contact · App Store, Google Play"],
];

const HOME_STORY = [
  ["What is it?", "Promise, channels, the inbox itself"],
  ["Will it help?", "Weekly report: closed, first reply, solved"],
  ["Will my team clash?", "Notes, @mentions, collision alerts"],
  ["Is it hard to set up?", "Three steps, 38 minutes"],
  ["What else?", "Saved replies, rules, profiles, reports"],
  ["What does it cost?", "Three plans, per seat"],
  ["Okay, let’s go", "“Bring every conversation home.”"],
];

// kinds: page (in the designs), action, decision, missing (not yet designed)
const FLOWS = [
  { t: "Flow 1 · Self-serve trial", who: "Arjun, owner-operator", steps: [["page", "Lands on Home"], ["action", "Reads promise + channels"], ["page", "Opens Product tour"], ["page", "Pricing"], ["action", "Sets plan and seats"], ["decision", "Total fits?", "no: FAQ or Talk to sales"], ["action", "Start free trial"], ["missing", "Sign up, no card"]] },
  { t: "Flow 2 · Sales-led Business plan", who: "Evaluator with security review", steps: [["page", "Pricing"], ["action", "Compare table: security rows"], ["decision", "Needs SSO / audit log?", "no: Start with Team"], ["action", "Talk to sales"], ["page", "Contact form"], ["action", "Picks Sales topic"], ["action", "Send message"], ["missing", "Confirmation state"]] },
  { t: "Flow 3 · Candidate", who: "Designer looking at roles", steps: [["page", "Career"], ["action", "Reads benefits"], ["action", "Filters by Design"], ["decision", "Role fits?", "no: Write to us by email"], ["action", "Opens role"], ["missing", "Role detail page"], ["missing", "Applies"]] },
];

const HMW = [
  "…show five channels becoming one queue without a diagram nobody reads?",
  "…make a per-seat price feel predictable for a team that grows in festive season?",
  "…prove “calm” when we have no live demo on the marketing site?",
  "…earn trust with private customer messages before a trial starts?",
];

const PRINCIPLES = [
  ["Reply like a neighbour", "Plain, human copy. “Talk to a person.” “Not a bot.”"],
  ["Calm over clever", "One accent colour, generous space, few animations, no dark patterns."],
  ["Small teams first", "Price, setup time and mobile apps are shown up front, not behind a demo."],
  ["Privacy is the product", "Security appears in the Home hero, not only on a legal page."],
];

const PRIORITY = [
  { t: "Quick wins", sub: "high impact, low effort", d: "Product UI in the hero · channel names · trust strip (rating, 14-day trial, no card) · “Talk to a person”", strong: true },
  { t: "Big bets", sub: "high impact, high effort", d: "Seat calculator · Product tour tabs · feature comparison table · filterable customer stories", strong: true },
  { t: "Fill-ins", sub: "low impact, low effort", d: "About timeline · office cards · hiring time estimates · footer app links" },
  { t: "Later", sub: "lower impact, high effort", d: "Live sandbox demo · localised pricing · help centre · story detail pages" },
];

const WIRE_NOTES = {
  Home: ["Centred hero: the promise reads in one glance before the eye drops to the UI.", "Real product UI as the hero picture, with proof cards answering “which channels” and “is it safe”.", "Pricing preview on Home so the cost question never needs a click."],
  Pricing: ["Decide, then refine: plan cards first, calculator second, full table third.", "Middle plan highlighted and inverted to anchor the choice.", "FAQ opens on the seat question, the most likely objection."],
  Contact: ["Self-routing on the left: support users leave for the help centre before filling a form.", "Short form: four fields, one tap topic, one message.", "Offices make a remote team feel located and real."],
};

const SWATCHES = [
  ["Navy ink", H.navy, "Text, dark bands, Team plan card"],
  ["Hearth yellow", H.yellow, "Primary action only"],
  ["Cream", H.cream, "Default page ground"],
  ["Sand", H.sand, "Alternate bands, plan cards"],
  ["Butter", H.butter, "Highlight bands: report, values"],
  ["Mist", H.mist, "Product panels, tags"],
  ["Periwinkle", H.peri, "Avatars, chart steps"],
  ["Steel blue", H.steel, "Peak chart step, accents"],
];

const CONTRAST = [
  "Navy on yellow button: 10.0 : 1, passes AA and AAA",
  "Cream on navy, navy on cream: 14.3 : 1",
  "Navy on butter band: 13.0 : 1",
  "Navy on periwinkle chart bar: 6.0 : 1",
  "Yellow on cream: 1.4 : 1. Yellow is never used for text on light grounds, and the designs respect this",
];

const VISUAL_PRINCIPLES = [
  ["Colour as a section turn", "navy, butter, cream and sand bands separate topics without dividers"],
  ["Yellow is reserved", "primary buttons, “Most popular”, check icons, timeline years"],
  ["The product is the illustration", "chat bubbles, tags and avatars recur as graphics"],
  ["Round and soft", "pill buttons and 24px cards echo chat bubbles"],
];

const TYPE_SCALE = [
  ["Display · ~104px", "Regular, tight leading", "One calm inbox", 52, 400],
  ["Section title · ~64–72px", "", "Answer together, never twice", 34, 400],
  ["Card title · ~22–24px", "Medium", "Collision alerts", 22, 500],
  ["Body · ~16–18px", "", "See who else is viewing or typing, so no customer gets two answers.", 16, 400],
  ["Label · ~13–14px", "Medium", "Most popular · per seat / month, billed monthly", 13.5, 500],
];

const INTERACTIONS = {
  cols: ["Interaction", "Behaviour", "Why"],
  rows: [
    ["Billing toggle", "Switches all plan prices and the calculator together", "One mental model of cost"],
    ["Plan + seat stepper", "Total updates on each tap; CTA label follows the plan", "Price for “my team”, instantly"],
    ["Product tour tabs", "Shared inbox, Automations, Reports, Mobile apps swap the panel", "Lets visitors pick their question"],
    ["Feature carousel", "Arrows and progress dashes page through feature cards", "Many features, one band"],
    ["Story filters", "All, Retail, Healthcare, Services, Hospitality", "“Teams like yours” proof"],
    ["Role filters", "Filter 8 open roles by team", "Fast scanning for candidates"],
    ["FAQ accordion", "One open at a time, first open by default", "Answers the top objection without a click"],
    ["Contact topic chips", "Sales, Support, Partners, Press set the route", "Messages reach the right team"],
  ],
};

const SCENARIOS = [
  ["“What will 6 of us pay?”", "Home pricing → Pricing → calculator → Team, 6 seats → Start with Team."],
  ["“Does it stop double replies?”", "Home collision band → Product tour → Small details: Collision alerts → Customers, Healthcare."],
  ["“We need SSO”", "Pricing table: Security and support → Talk to sales → Contact, Sales topic → Send."],
];

const TEST_PLAN = [
  ["Format", "moderated remote sessions, 45 minutes, think-aloud, clickable Figma prototype"],
  ["Participants", "5 to 6 per primary persona, recruited from small retail, clinic and service businesses"],
  ["Metrics", "task success, time on task, Single Ease Question per task, SUS at the end, five-second recall of the hero"],
  ["Success bar", "80% of participants can say what Hearth does after five seconds and find their price unaided"],
];

const TEST_TASKS = [
  "After 5 seconds on Home: what does this product do, and for whom?",
  "Find out whether Hearth works with Instagram.",
  "Work out the monthly cost for a team of six.",
  "Find out how Hearth stops two people answering the same customer.",
  "Your IT lead needs SSO. What plan and next step?",
  "Ask a question and expect a reply from a person.",
];

const ISSUES = [
  ["Channel count doesn’t match", "Home hero names 4 channels while its banner announces Instagram; Product claims “6 channels” but 5 are named", "Consistency", "Medium", "Name all five everywhere and fix the stat, or name the sixth"],
  ["“Watch” promises a video", "Home: “Watch the 2-minute tour”; Product’s tour is interactive tabs", "Match with expectations", "Medium", "Rename to “Take the 2-minute tour” and link to the tabs, or design the video modal"],
  ["Yearly price state missing", "Pricing toggle and calculator show only monthly", "Visibility of system status", "Medium", "Design yearly: per-month equivalent plus annual total"],
  ["No limit state on Starter", "Calculator could pair Starter with more than 3 seats", "Error prevention", "Medium", "Inline nudge to Team (built in the prototype above)"],
  ["Plan copy differs by page", "Home vs Pricing: features and CTA labels (“Choose Team” vs “Start with Team”)", "Consistency", "Low", "One shared plan-card component and copy source"],
  ["Footer has no legal links", "Contact cites a privacy policy; Product links a security overview", "Trust, findability", "Medium", "Add Privacy, Terms, Security and status links"],
  ["Carousel hides features", "Home’s fourth feature card sits off-screen", "Recognition over recall", "Low", "Use a grid, or a visible peek plus keyboard controls"],
  ["Unsourced ratings", "“4.8/5 from 1,300+ reviews” repeats with no source", "Credibility", "Low", "Name the review platform and date"],
  ["Nav and footer labels differ", "“Career” in nav, “Careers” in footer", "Consistency", "Low", "Pick one label"],
  ["Desktop only", "Product promises iOS and Android; site has one breakpoint", "Flexibility", "High", "Design tablet and mobile layouts before launch"],
  ["Form states missing", "Contact has no required markers, errors or success message", "Error recovery", "Medium", "Design validation, inline errors and a confirmation"],
];

const PAGES = [
  { url: "hearth.app/", name: "Home", title: "The whole pitch in one scroll", img: pHome, h: 4296, notes: [
    ["Product UI as hero", "Floating channel cards show fragmentation resolving into one list", "Fragmentation"],
    ["Trust strip under the CTAs", "Rating, 14-day trial, no card needed", "Risk"],
    ["Answer together, never twice", "Notes, @mentions and presence avatars", "Double replies, lost context"],
    ["Price on the page", "Three plans with the Team plan inverted", "Pricing anxiety"]] },
  { url: "hearth.app/product", name: "Product", title: "For visitors who want proof before signing up", img: pProduct, h: 2713, notes: [
    ["Stats under the hero", "6 channels, 38 min setup, 4.8/5", "Setup fear"],
    ["Tour tabs", "Visitors choose inbox, automations, reports or mobile", "Feature overload"],
    ["The small details grid", "Six calm features, “no add-ons”", "Hidden costs"],
    ["Private by design", "Encryption, SSO and SCIM, audit log, data residency", "Data trust"]] },
  { url: "hearth.app/pricing", name: "Pricing", title: "Decide, then refine", img: pPricing, h: 3207, notes: [
    ["Audience under each plan", "“For a founder and a helper or two”", "Choosing a plan"],
    ["Seat calculator", "“You only pay for people who reply, never for viewers”", "Pricing anxiety"],
    ["Grouped comparison", "Channels, Teamwork, Automation, Reports, Security", "Evaluator needs"],
    ["FAQ opens on seats", "The first question is the biggest objection", "Pricing anxiety"]] },
  { url: "hearth.app/customers", name: "Customers", title: "Proof from teams like yours", img: pCustomers, h: 2945, notes: [
    ["Featured story with numbers", "Quote, photo, plan and seat count together", "Will it work for me?"],
    ["Industry filters", "Retail, Healthcare, Services, Hospitality", "Relevance"],
    ["One metric per story", "Each card leads with its single result", "Scannability"],
    ["Quote wall", "Short quotes tied to named features", "Double replies, setup fear"]] },
  { url: "hearth.app/about", name: "About", title: "Why a calm inbox exists", img: pAbout, h: 2955, notes: [
    ["Mission headline", "“Every customer deserves a real reply from a real person”", "Human tone"],
    ["Origin story beside a timeline", "Nine tabs in 2021 to 4,200 teams in 2026", "Credibility"],
    ["Values as product rules", "Calm over clever, Privacy is the product", "Trust"],
    ["Team with a hiring card", "People first, link to roles", "Recruiting"]] },
  { url: "hearth.app/career", name: "Career", title: "Hiring as transparent as the product", img: pCareer, h: 2745, notes: [
    ["Team facts as chips", "38 people, 11 countries, two hubs", "Context"],
    ["Benefits grid", "Same for everyone, with real amounts", "Trust"],
    ["Filterable roles", "Team tag, location and type in one row", "Scannability"],
    ["Hiring timeline", "Four steps with durations; paid work sample", "Candidate anxiety"]] },
  { url: "hearth.app/contact", name: "Contact", title: "Talk to a person", img: pContact, h: 1503, notes: [
    ["Promise before the form", "“Not a bot”, reply within one working day", "Human contact"],
    ["Self-routing cards", "Sales, Support with help centre, Press", "Wrong-queue messages"],
    ["Short form with topic chips", "Four fields, one tap topic", "Effort"],
    ["Offices and remote card", "Makes a remote team feel located", "Credibility"]] },
];

const DECISIONS = [
  ["Real product UI in every hero, not abstract illustration", "Visitors see the inbox and the channels at once, which answers “what is it” without reading.", "Mockups need upkeep as the product changes."],
  ["Yellow reserved for the primary action", "With one accent, the next step is findable on every screen and the page stays calm.", "Fewer colours for categories; tags fall back to mist and sand."],
  ["Pricing shown on Home and expanded on Pricing", "Small-business buyers want cost before commitment; hiding it sends them away.", "Less room for features on Home."],
  ["Per-seat calculator with “never for viewers”", "Turns an abstract seat model into one number for my team, and removes the fear of paying for readers.", "Needs the yearly and limit states designed."],
  ["Collision alerts as a headline feature", "The most embarrassing failure for a small team is two different answers; naming it builds instant recognition.", "Other strong features get less airtime."],
  ["Colour bands instead of dividers", "Each band is one question; colour change marks the turn and gives long pages rhythm.", "Bands must be ordered carefully to avoid two similar tones touching."],
  ["Specific numbers in stories", "“Six-hour replies to forty minutes” is believable in a way “faster support” is not.", "Every number needs a real source before launch."],
  ["“Talk to a person” on Contact", "Matches the brand promise and lowers the risk of asking for a demo.", "Commits the company to a response-time promise."],
];

const CHALLENGES = [
  ["Explaining an invisible product", "“Unified inbox” means little in the abstract. I made it concrete with the same four sample customers (Lena, Rohan, Sofia, James) across Home and Product, each tagged with a different channel, so visitors watch the problem resolve inside the UI."],
  ["Calm versus conversion", "A calm brand pulls away from loud CTAs. Reserving yellow for the primary action let the page stay quiet while the next step stayed obvious on every screen."],
  ["Proof without real data", "For a concept, numbers are tempting to oversell. The Home report band labels its figures as “a sample workspace’s first month”, and I’d hold every number to that standard before launch."],
  ["Consistency across 41 sections", "Long pages drift. The review found plan copy and channel counts diverging between pages, which taught me to drive repeated content from single components and content tokens."],
];

const TAKEAWAYS = [
  "Lead with the product’s real interface; it explains faster than any illustration.",
  "Answer cost and trust before asking for anything, especially for non-technical buyers.",
  "Design the states between screens: yearly prices, limits, errors and confirmations are where trust is won or lost.",
];

const METRICS = [
  ["Hero to trial", "Click-through on “Start free trial” from Home"],
  ["Calculator use", "Share of Pricing visitors who change plan or seats"],
  ["Pricing to trial", "Trial starts within the same session"],
  ["Demo requests", "Business-plan leads via Talk to sales"],
  ["Tour engagement", "Tabs opened on the Product tour"],
  ["Five-second recall", "Share who can say what Hearth does"],
];

const FUTURE = [
  ["Responsive breakpoints", "Tablet and mobile layouts, since many target users browse on their phones."],
  ["Local currency pricing", "INR and EUR, matching the Bengaluru and Lisbon hubs and India-focused stories."],
  ["Interactive sandbox", "A sample inbox visitors can click through before signing up."],
  ["Missing states", "Yearly prices, form errors, success messages, sign-up and onboarding."],
  ["Templates", "Customer story detail, role detail, security overview and integrations pages."],
  ["Accessibility pass", "WCAG 2.2 AA audit: focus order, carousel controls, small labels, reduced motion."],
];

/* ═══════════════════════ Building blocks ═══════════════════════ */

function Eyebrow({ children, color, style }) {
  return <div style={{ fontFamily: "Inter", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color, marginBottom: 12, ...style }}>{children}</div>;
}

// Provenance labels from the original case study.
function Tag({ kind, children, isDark }) {
  const tones = {
    designs: isDark ? ["#A6D190", "rgba(166,209,144,0.14)"] : ["#3E6B2F", "rgba(62,107,47,0.09)"],
    proposed: isDark ? ["#E9C07A", "rgba(233,192,122,0.14)"] : ["#875A06", "rgba(135,90,6,0.09)"],
    assumption: isDark ? ["#C8B1F2", "rgba(200,177,242,0.14)"] : ["#5B3E8A", "rgba(91,62,138,0.09)"],
    review: isDark ? ["#F2A28F", "rgba(242,162,143,0.14)"] : ["#9A3B26", "rgba(154,59,38,0.09)"],
  };
  const [fg, bg] = tones[kind];
  return <span style={{ display: "inline-block", padding: "4px 10px", borderRadius: 999, background: bg, color: fg, fontFamily: "Inter", fontSize: 12.5, fontWeight: 600, lineHeight: 1.3 }}>{children}</span>;
}

function Card({ children, theme, style }) {
  return <div style={{ padding: "24px 26px", borderRadius: 18, background: theme.card, border: `1px solid ${theme.line}`, height: "100%", boxSizing: "border-box", ...style }}>{children}</div>;
}

function Bullets({ items, style, ordered }) {
  const Tag_ = ordered ? "ol" : "ul";
  return <Tag_ style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 6, ...style }}>{items.map((it, i) => <li key={i}>{it}</li>)}</Tag_>;
}

function DataTable({ cols, rows, theme, minWidth = 640, render }) {
  return (
    <div data-lenis-prevent style={{ overflowX: "auto", borderRadius: 18, border: `1px solid ${theme.line}`, background: theme.card }}>
      <table style={{ width: "100%", minWidth, borderCollapse: "collapse", fontFamily: "Inter", fontSize: 14.5, lineHeight: 1.5, color: theme.inkSoft }}>
        <thead><tr>{cols.map((c) => <th key={c} scope="col" style={{ textAlign: "left", padding: "14px 18px", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: theme.inkMute, borderBottom: `1px solid ${theme.line}` }}>{c}</th>)}</tr></thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} style={{ borderTop: i ? `1px solid ${theme.line}` : "none" }}>
              {r.map((cell, j) => <td key={j} style={{ padding: "14px 18px", verticalAlign: "top", color: j === 0 ? theme.ink : undefined, fontWeight: j === 0 ? 600 : 400 }}>{render ? render(cell, j) : cell}</td>)}
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
      <div data-lenis-prevent tabIndex={0} role="region" aria-label={`${label} page, full design (scrollable)`} style={{ maxHeight: maxH, overflowY: "auto", overscrollBehavior: "contain", outlineOffset: -3 }}>
        <img src={src} width={1000} height={h} alt={`Full-length design of the Hearth ${label} page.`} loading="lazy" decoding="async" style={{ width: "100%", height: "auto", display: "block" }} />
      </div>
    </div>
  );
}

function Section({ id, n, eyebrow, title, intro, tag, children, alt, theme, isMobile, isMobileOrTablet }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} style={{ padding: isMobile ? "56px 4vw" : "96px 6vw", background: alt ? theme.bgAlt : "transparent", borderTop: `1px solid ${theme.line}` }}>
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

/* ── Problem diagram: scattered vs one queue ── */

function ProblemDiagram({ theme, isDark, isMobile }) {
  const channels = ["WhatsApp", "Instagram", "Email", "SMS", "Web chat"];
  const people = [["A", "Two people reply to Lena"], ["B", "Asks Rohan to repeat himself"], ["C", "Misses James on SMS"]];
  const ink = theme.ink, mute = theme.inkMute;
  const pill = (x, y, t) => (
    <g key={t + x}>
      <rect x={x} y={y - 15} width={112} height={30} rx={15} fill={H.butter} />
      <text x={x + 56} y={y + 5} textAnchor="middle" fontFamily="Inter" fontSize="13" fill={H.navy}>{t}</text>
    </g>
  );
  const cy = (i) => 40 + i * 52;
  const py = (i) => 66 + i * 78;
  const panel = (left) => (
    <svg viewBox="0 0 520 300" role="img" aria-label={left ? "Today: five channels are each watched by every teammate, with tangled lines to three people. One gives a double reply, one makes a customer repeat themselves, one misses an SMS." : "With Hearth: the five channels flow into one Hearth queue, which routes each chat to one owner, A, B or C, by topic such as Billing or Returns."} style={{ width: "100%", height: "auto", display: "block" }}>
      {channels.map((c, i) => pill(8, cy(i), c))}
      {left ? (
        <>
          {channels.map((_, i) => people.map((_, j) => (
            <path key={`${i}-${j}`} d={`M120 ${cy(i)} C 220 ${cy(i)}, 250 ${py(j)}, 330 ${py(j)}`} fill="none" stroke={H.coral} strokeWidth="1.4" opacity="0.85" />
          )))}
          {people.map(([l, t], j) => (
            <g key={l}>
              <circle cx={350} cy={py(j)} r={20} fill={H.peri} />
              <text x={350} y={py(j) + 5} textAnchor="middle" fontFamily="Inter" fontSize="14" fontWeight="600" fill={H.navy}>{l}</text>
              <text x={380} y={py(j) - 3} fontFamily="Inter" fontSize="12.5" fill={ink}>{t.split(" ").slice(0, 2).join(" ")}</text>
              <text x={380} y={py(j) + 14} fontFamily="Inter" fontSize="12.5" fill={ink}>{t.split(" ").slice(2).join(" ")}</text>
            </g>
          ))}
        </>
      ) : (
        <>
          {channels.map((_, i) => <path key={i} d={`M120 ${cy(i)} C 170 ${cy(i)}, 175 144, 225 144`} fill="none" stroke={mute} strokeWidth="1.4" />)}
          <rect x={225} y={106} width={130} height={76} rx={14} fill={isDark ? "#0E1424" : H.navy} stroke={isDark ? theme.line : "none"} />
          <text x={290} y={140} textAnchor="middle" fontFamily="Inter" fontSize="15" fontWeight="600" fill="#fff">Hearth</text>
          <text x={290} y={160} textAnchor="middle" fontFamily="Inter" fontSize="12" fill={H.peri}>one queue</text>
          {people.map(([l], j) => (
            <g key={l}>
              <path d={`M355 144 C 395 144, 395 ${66 + j * 78}, 430 ${66 + j * 78}`} fill="none" stroke={mute} strokeWidth="1.4" />
              <circle cx={452} cy={66 + j * 78} r={20} fill={H.yellow} />
              <text x={452} y={71 + j * 78} textAnchor="middle" fontFamily="Inter" fontSize="14" fontWeight="600" fill={H.navy}>{l}</text>
            </g>
          ))}
          <text x={452} y={290} textAnchor="middle" fontFamily="Inter" fontSize="12" fill={mute}>Billing · Returns</text>
        </>
      )}
    </svg>
  );
  return (
    <Card theme={theme} style={{ padding: isMobile ? 18 : 28 }}>
      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 28 : 40 }}>
        <div><div style={{ fontFamily: "Inter", fontSize: 14.5, fontWeight: 600, color: theme.ink, marginBottom: 12 }}>Today: every teammate watches every app</div>{panel(true)}</div>
        <div style={{ borderLeft: isMobile ? "none" : `1px solid ${theme.line}`, paddingLeft: isMobile ? 0 : 40 }}><div style={{ fontFamily: "Inter", fontSize: 14.5, fontWeight: 600, color: theme.ink, marginBottom: 12 }}>With Hearth: one queue, one owner per chat</div>{panel(false)}</div>
      </div>
      <p style={{ fontFamily: "Inter", fontSize: 13.5, color: theme.inkMute, margin: "16px 0 0" }}>The problem the product solves, drawn from the story the designs tell (customer names are the sample names used in the mockups).</p>
    </Card>
  );
}

/* ── Wireframes, rebuilt as blocks ── */

function WB({ children, theme, h = 30, style }) {
  return <div style={{ minHeight: h, display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "4px 8px", borderRadius: 7, border: `1px dashed ${theme.inkMute}`, fontFamily: "ui-monospace, Menlo, monospace", fontSize: 11.5, lineHeight: 1.3, color: theme.inkSoft, boxSizing: "border-box", ...style }}>{children}</div>;
}

function Wireframe({ kind, theme }) {
  const r = (cols, items, h) => <div style={{ display: "grid", gridTemplateColumns: cols, gap: 6 }}>{items.map((t, i) => <WB key={i} theme={theme} h={h}>{t}</WB>)}</div>;
  const rows = {
    Home: [r("1fr 2.2fr 1fr", ["Logo", "6 nav links", "CTA"]), r("1fr", ["Announcement pill"]), r("1fr", ["Headline, 2 lines, centred"], 40), r("1fr 1fr", ["Primary CTA", "Tour"]), r("1fr", ["Product UI + floating proof cards"], 104), r("1fr 1fr", ["Report copy", "Big number"]), r("1fr 1fr", ["Chat demo", "Collab copy + CTA"], 44), r("1fr 1fr", ["3 steps", "Channel orbit"]), r("1fr", ["Feature carousel"]), r("1fr 1fr 1fr", ["Plan", "Plan", "Plan"]), r("1fr", ["CTA band + footer"])],
    Pricing: [r("1fr 2.2fr 1fr", ["Logo", "Nav", "CTA"]), r("1fr", ["Headline + reassurance line"]), r("1fr", ["Monthly / Yearly toggle"]), r("1fr 1fr 1fr", ["Starter", "Team, highlighted", "Business"], 96), r("1fr 1fr", ["Explainer", "Plan × seats = total"], 76), r("1fr", ["Comparison table, grouped rows"], 112), r("1fr 2fr", ["FAQ intro", "Accordion"], 64), r("1fr", ["CTA band + footer"])],
    Contact: [r("1fr 2.2fr 1fr", ["Logo", "Nav", "CTA"]), <div key="c" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}><div style={{ display: "flex", flexDirection: "column", gap: 6 }}><WB theme={theme} h={60}>Headline + promise</WB><WB theme={theme} h={50}>Sales route</WB><WB theme={theme} h={50}>Support route</WB><WB theme={theme} h={50}>Press route</WB></div><div style={{ display: "flex", flexDirection: "column", gap: 6 }}><WB theme={theme}>Name · Email</WB><WB theme={theme} h={44}>Company · Team size</WB><WB theme={theme}>Topic chips</WB><WB theme={theme} h={60}>Message</WB><WB theme={theme}>Send</WB></div></div>, r("1fr 1fr 1fr", ["Hub", "Hub", "Remote"], 64), r("1fr", ["Footer"])],
  };
  return <div role="img" aria-label={`Low-fidelity wireframe of the ${kind} page`} style={{ padding: 12, borderRadius: 16, border: `1px solid ${theme.line}`, background: theme.card, display: "flex", flexDirection: "column", gap: 6 }}>{rows[kind]}</div>;
}

/* ── Prototype: the pricing calculator, with yearly and Starter-limit states ── */

const PLANS = { Starter: { price: 19, max: 3 }, Team: { price: 39 }, Business: { price: 79 } };
const usd = (n) => `$${Number.isInteger(n) ? n.toLocaleString("en-US") : n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

function PricingCalculator({ theme, isDark }) {
  const [yearly, setYearly] = useState(false);
  const [plan, setPlan] = useState("Team");
  const [seats, setSeats] = useState(5);
  const [clamped, setClamped] = useState(false);
  const p = PLANS[plan];
  const perSeat = yearly ? Math.round(p.price * 0.8 * 100) / 100 : p.price;
  const monthly = Math.round(perSeat * seats * 100) / 100;
  const atStarterLimit = plan === "Starter" && seats >= PLANS.Starter.max;

  const choosePlan = (k) => {
    setPlan(k);
    if (k === "Starter" && seats > PLANS.Starter.max) { setSeats(PLANS.Starter.max); setClamped(true); } else setClamped(false);
  };
  const step = (d) => {
    setClamped(false);
    setSeats((s) => Math.max(1, Math.min(plan === "Starter" ? PLANS.Starter.max : 99, s + d)));
  };
  const seg = (opts, value, onPick, label) => (
    <div role="group" aria-label={label} style={{ display: "inline-flex", padding: 3, borderRadius: 999, background: theme.bgAlt, border: `1px solid ${theme.line}`, flexWrap: "wrap" }}>
      {opts.map(([k, l]) => (
        <button key={k} type="button" aria-pressed={value === k} onClick={() => onPick(k)} data-cursor="hover"
          style={{ padding: "7px 14px", borderRadius: 999, border: "none", cursor: "pointer", fontFamily: "Inter", fontSize: 13.5, fontWeight: 600, background: value === k ? (isDark ? theme.ink : H.navy) : "transparent", color: value === k ? (isDark ? theme.bg : "#fff") : theme.inkSoft }}>{l}</button>
      ))}
    </div>
  );
  const row = { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, padding: "14px 0", borderTop: `1px solid ${theme.line}`, flexWrap: "wrap" };
  const lbl = { fontFamily: "Inter", fontSize: 15, fontWeight: 600, color: theme.ink };

  return (
    <Card theme={theme} style={{ padding: "26px 28px" }}>
      <div style={{ ...row, borderTop: "none", paddingTop: 0 }}><span style={lbl}>Billing</span>{seg([[false, "Monthly"], [true, "Yearly, save 20%"]], yearly, setYearly, "Billing")}</div>
      <div style={row}><span style={lbl}>Plan</span>{seg(Object.keys(PLANS).map((k) => [k, k]), plan, choosePlan, "Plan")}</div>
      <div style={row}>
        <span style={lbl}>Seats</span>
        <div role="group" aria-label="Seats" style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
          {[[-1, "Remove a seat", Minus], [1, "Add a seat", Plus]].map(([d, a, Icon], i) => {
            const disabled = (d < 0 && seats <= 1) || (d > 0 && (atStarterLimit || seats >= 99));
            const btn = (
              <button key={a} type="button" aria-label={a} onClick={() => step(d)} disabled={disabled} data-cursor="hover"
                style={{ width: 38, height: 38, borderRadius: 99, border: `1px solid ${theme.inkMute}`, background: "transparent", color: theme.ink, cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.35 : 1, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                <Icon size={16} aria-hidden="true" />
              </button>
            );
            return i === 0 ? [btn, <span key="n" aria-live="polite" style={{ minWidth: 26, textAlign: "center", fontFamily: "Inter", fontSize: 20, fontWeight: 500, color: theme.ink }}>{seats}</span>] : btn;
          })}
        </div>
      </div>
      {(atStarterLimit || clamped) && (
        <div role="status" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap", padding: "12px 14px", margin: "2px 0 6px", borderRadius: 12, background: isDark ? "rgba(244,205,100,0.12)" : H.butter, color: isDark ? theme.ink : H.navy, fontFamily: "Inter", fontSize: 14, lineHeight: 1.45 }}>
          <span>{clamped ? "Starter covers up to 3 teammates, so seats were set to 3." : "Starter covers up to 3 teammates."} Team has unlimited teammates.</span>
          <button type="button" onClick={() => { setPlan("Team"); setClamped(false); }} data-cursor="hover" style={{ padding: "6px 14px", borderRadius: 999, border: `1px solid ${isDark ? theme.ink : H.navy}`, background: "transparent", color: "inherit", fontFamily: "Inter", fontSize: 13.5, fontWeight: 600, cursor: "pointer" }}>Switch to Team</button>
        </div>
      )}
      <div style={{ borderTop: `1px solid ${theme.line}`, paddingTop: 16 }}>
        <div style={{ fontFamily: "Inter", fontSize: 13.5, color: theme.inkMute }}>Estimated total</div>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
          <span aria-live="polite" style={{ fontFamily: "'Poppins', Inter, sans-serif", fontSize: 56, fontWeight: 400, letterSpacing: "-0.02em", color: theme.ink, lineHeight: 1.1 }}>{usd(monthly)}</span>
          <span style={{ fontFamily: "Inter", fontSize: 13.5, color: theme.inkSoft, textAlign: "right", lineHeight: 1.4 }}>
            per month<br />{yearly ? <>billed yearly · {usd(Math.round(monthly * 12 * 100) / 100)} a year</> : "billed monthly"}
          </span>
        </div>
        <div style={{ fontFamily: "Inter", fontSize: 13.5, color: theme.inkMute, marginTop: 6 }}>{usd(perSeat)} per seat / month · {seats} {seats === 1 ? "seat" : "seats"}</div>
        <div style={{ marginTop: 18, display: "inline-block", padding: "11px 22px", borderRadius: 999, background: H.yellow, color: H.navy, fontFamily: "Inter", fontSize: 15, fontWeight: 600 }}>{plan === "Business" ? "Talk to sales" : `Start with ${plan}`}</div>
      </div>
    </Card>
  );
}

/* ═══════════════════════ Page ═══════════════════════ */

export default function HearthCaseStudy({ theme, mode, setRoute }) {
  const { isMobile, isMobileOrTablet } = useBreakpoint();
  const idx = projects.findIndex((p) => p.id === PROJECT_ID);
  const next = projects[(idx + 1) % projects.length];
  const isDark = mode === "dark";
  const sp = { theme, isMobile, isMobileOrTablet };

  useEffect(() => {
    if (document.getElementById("hearth-poppins")) return;
    const l = document.createElement("link");
    l.id = "hearth-poppins"; l.rel = "stylesheet"; l.href = POPPINS_URL;
    document.head.appendChild(l);
  }, []);

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

  const cardGrid = (items, cols) => (
    <div style={{ display: "grid", gridTemplateColumns: cols, gap: 16 }}>
      {items.map(([t, d], i) => <Reveal key={t} delay={0.04 * (i % 3)}><Card theme={theme}><div style={cardTitle}>{t}</div><div style={body}>{d}</div></Card></Reveal>)}
    </div>
  );

  return (
    <div style={{ paddingTop: isMobile ? 100 : 130 }}>

      {/* ── HERO ── */}
      <section style={{ padding: isMobile ? "0 4vw 48px" : "0 6vw 72px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal>
            <button onClick={() => setRoute("projects")} data-cursor="hover"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", border: "none", fontFamily: "Inter", fontSize: 13.5, color: theme.inkSoft, cursor: "pointer", padding: "8px 6px", marginLeft: -6, marginBottom: 28, transition: "color 0.2s ease, transform 0.2s ease" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = theme.accent; e.currentTarget.style.transform = "translateX(-4px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = theme.inkSoft; e.currentTarget.style.transform = "translateX(0)"; }}>
              <ArrowRight size={14} style={{ transform: "rotate(180deg)" }} /> Back to all projects
            </button>
          </Reveal>
          <Reveal delay={0.05}><Eyebrow color={theme.inkMute}>UX/UI case study · Marketing website for a SaaS shared inbox</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h1 style={{ fontFamily: "Inter", fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 500, letterSpacing: "-0.04em", color: theme.ink, margin: "0 0 18px", lineHeight: 1.1, maxWidth: 1000 }}>
              Hearth: one calm inbox for teams who talk to{" "}
              <span style={{ fontFamily: "'Caveat', cursive", color: theme.accent, fontSize: "1.08em" }}>customers all day</span>
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p style={{ ...body, fontSize: isMobile ? 16 : 19, margin: 0, maxWidth: 820 }}>
              How I designed a seven-page website that explains a multi-channel shared inbox to busy small-business owners, answers their price and trust questions up front, and turns that understanding into a free trial.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)", gap: isMobile ? 20 : 32, marginTop: isMobile ? 36 : 52, paddingTop: isMobile ? 24 : 32, borderTop: `1px solid ${theme.line}` }}>
              {META.map((m) => (
                <div key={m.k}>
                  <div style={{ fontFamily: "Inter", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: theme.inkMute, marginBottom: 6 }}>{m.k}</div>
                  <div style={{ fontFamily: "Inter", fontSize: isMobile ? 14 : 15.5, fontWeight: 500, color: theme.ink, lineHeight: 1.4 }}>{m.v}</div>
                  {m.tag && <div style={{ marginTop: 8 }}>{T("assumption", "Assumption")}</div>}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.25}>
            <div style={{ marginTop: isMobile ? 36 : 56, borderRadius: 20, overflow: "hidden", border: `1px solid ${theme.line}`, boxShadow: shadow }}>
              <img src={heroImg} width={2000} height={1389} alt="The Hearth homepage hero on navy: the headline “One calm inbox for every customer.”, a yellow Start free trial button, and the shared inbox UI with floating cards for a WhatsApp message, an assignment and an encryption promise." fetchpriority="high" decoding="async" style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
          </Reveal>
          <Reveal>
            <Card theme={theme} style={{ marginTop: 24 }}>
              <div style={cardTitle}>How to read this case study</div>
              <p style={{ ...body, margin: "0 0 14px" }}>The seven page designs are the source of truth. Hearth is a concept product, so no real users were interviewed and no tests were run. Everything below is labelled by where it comes from.</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 18px", alignItems: "center", ...body, fontSize: 14 }}>
                <span>{T("designs", "From the designs")} Seen directly in the PDFs</span>
                <span>{T("proposed", "Proposed")} Research, personas or tests I would run</span>
                <span>{T("assumption", "Assumption")} Filled-in context, to confirm</span>
                <span>{T("review", "Expert review")} My own audit of the screens</span>
              </div>
            </Card>
          </Reveal>
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
        </div>
      </section>

      {/* 1 ── OVERVIEW */}
      <Section {...sp} n={1} id="overview" eyebrow="Project overview" title="A shared inbox, and a website that has to explain it in five seconds" intro="Customer numbers, ratings and testimonials on the pages are part of the concept’s marketing copy. I treat them as content in the design, never as evidence of results." alt>
        <div style={{ display: "grid", gridTemplateColumns: cols3, gap: 16 }}>
          {OVERVIEW_CARDS.map(([t, d], i) => <Reveal key={t} delay={0.04 * i}><Card theme={theme}><div style={cardTitle}>{t}</div><div style={body}>{d}</div><div style={{ marginTop: 12 }}>{T("designs", "From the designs")}</div></Card></Reveal>)}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: cols2, gap: 16, marginTop: 16 }}>
          <Reveal><Card theme={theme}><div style={cardTitle}>Business goals</div><Bullets items={BUSINESS_GOALS} style={body} /><div style={{ marginTop: 12 }}>{T("assumption", "Assumption, inferred from CTA placement")}</div></Card></Reveal>
          <Reveal delay={0.05}><Card theme={theme}><div style={cardTitle}>User goals</div><Bullets items={USER_GOALS} style={body} /><div style={{ marginTop: 12 }}>{T("proposed", "Proposed, to validate")}</div></Card></Reveal>
        </div>
      </Section>

      {/* 2 ── PROBLEM */}
      <Section {...sp} n={2} id="problem" eyebrow="Problem statement" title="Conversations are scattered across apps, phones and people" intro="Small teams that sell and support over messaging apps have no single place to see who is waiting, who is answering and what was already said. Customers wait, get two answers, or get none. Enterprise helpdesks solve this, but feel built for call centres.">
        <Reveal><ProblemDiagram theme={theme} isDark={isDark} isMobile={isMobile} /></Reveal>
        <Reveal><h3 style={{ ...sub, marginTop: 40 }}>Pain points the designs respond to</h3></Reveal>
        <Reveal><DataTable cols={PAIN_POINTS.cols} rows={PAIN_POINTS.rows} theme={theme} minWidth={720} /></Reveal>
        <Reveal><p style={{ ...body, fontSize: 14, margin: "12px 0 0" }}>{T("proposed", "Proposed")} Pain points are hypotheses drawn from the product’s positioning; research below is designed to confirm or kill them.</p></Reveal>
      </Section>

      {/* 3 ── RESEARCH */}
      <Section {...sp} n={3} id="research" eyebrow="Research and discovery" title="A research plan built around how small teams actually reply" intro="No research was conducted for this concept. This is the plan I would run, and the hypotheses it is designed to test." tag={T("proposed", "Proposed")} alt>
        <Reveal><DataTable cols={RESEARCH_PLAN.cols} rows={RESEARCH_PLAN.rows} theme={theme} minWidth={760} /></Reveal>
        <Reveal><h3 style={{ ...sub, marginTop: 40 }}>Competitive landscape by category</h3></Reveal>
        <div style={{ display: "grid", gridTemplateColumns: cols4, gap: 16 }}>
          {LANDSCAPE.map(([t, d, take], i) => <Reveal key={t} delay={0.04 * i}><Card theme={theme}><div style={cardTitle}>{t}</div><div style={{ ...body, fontSize: 14.5 }}>{d}</div><div style={{ ...body, fontSize: 14.5, marginTop: 12, color: theme.ink }}><strong style={{ fontWeight: 600 }}>Hearth takes:</strong> {take}</div></Card></Reveal>)}
        </div>
        <Reveal><p style={{ ...body, fontSize: 14, margin: "12px 0 0" }}>{T("assumption", "Assumption")} Category-level positioning; verify each product’s current features and pricing before publishing.</p></Reveal>
        <Reveal><h3 style={{ ...sub, marginTop: 40 }}>Hypotheses the research must test</h3></Reveal>
        {cardGrid(HYPOTHESES, cols3)}
      </Section>

      {/* 4 ── PERSONAS */}
      <Section {...sp} n={4} id="personas" eyebrow="Target audience and user personas" title="Three proto-personas, from the segments the site already speaks to" intro="The Customers page filters stories by Retail, Healthcare, Services and Hospitality. I built one proto-persona per primary buying context. They are hypothetical and need interview data before they are trusted." tag={T("proposed", "Proposed")}>
        <div style={{ display: "grid", gridTemplateColumns: cols3, gap: 16 }}>
          {PERSONAS.map((p, i) => (
            <Reveal key={p.i} delay={0.05 * i}>
              <Card theme={theme}>
                <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 14 }}>
                  <span aria-hidden="true" style={{ width: 44, height: 44, flexShrink: 0, borderRadius: 99, background: H.mist, color: H.navy, display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: "Inter", fontWeight: 700, fontSize: 14 }}>{p.i}</span>
                  <div><div style={{ ...cardTitle, marginBottom: 0 }}>{p.name}</div><div style={{ ...body, fontSize: 14 }}>{p.role}</div></div>
                </div>
                <blockquote style={{ margin: 0, paddingLeft: 14, borderLeft: `3px solid ${H.yellow}`, fontFamily: "Inter", fontSize: 15.5, lineHeight: 1.55, color: theme.ink }}>“{p.quote}”</blockquote>
                {p.rows.map(([k, v]) => <div key={k}><div style={label}>{k}</div><div style={{ ...body, fontSize: 14.5 }}>{v}</div></div>)}
              </Card>
            </Reveal>
          ))}
        </div>
        <Reveal><h3 style={{ ...sub, marginTop: 40 }}>Secondary audiences</h3></Reveal>
        {cardGrid(SECONDARY, cols3)}
      </Section>

      {/* 5 ── JOURNEY */}
      <Section {...sp} n={5} id="journey" eyebrow="User journey mapping" title="Arjun’s path from “who is Hearth?” to his first shared reply" intro="Hypothesised journey for the primary persona. The emotion line marks where doubt is likely, which is where the design spends the most effort." tag={T("proposed", "Proposed")} alt>
        <Reveal>
          <div data-lenis-prevent style={{ overflowX: "auto", borderRadius: 18, border: `1px solid ${theme.line}`, background: theme.card }}>
            <div style={{ minWidth: 980, display: "grid", gridTemplateColumns: `128px repeat(${JOURNEY.length}, 1fr)`, fontFamily: "Inter", fontSize: 13.5, lineHeight: 1.45 }}>
              {(() => {
                const out = [];
                const head = (t, k) => <div key={k} style={{ padding: "12px 14px", borderTop: `1px solid ${theme.line}`, fontWeight: 600, color: theme.ink }}>{t}</div>;
                const cell = (c, k, extra) => <div key={k} style={{ padding: "12px 14px", borderTop: `1px solid ${theme.line}`, borderLeft: `1px solid ${theme.line}`, color: theme.inkSoft, ...extra }}>{c}</div>;
                out.push(<div key="h" style={{ padding: "12px 14px", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: theme.inkMute }}>Stage</div>);
                JOURNEY.forEach((j, i) => out.push(<div key={`s${i}`} style={{ padding: "12px 14px", borderLeft: `1px solid ${theme.line}` }}><div style={{ fontWeight: 600, color: theme.ink }}>{j.s}</div><div style={{ fontSize: 12.5, color: theme.inkMute }}>{j.sub}</div></div>));
                out.push(head("Doing", "d")); JOURNEY.forEach((j, i) => out.push(cell(j.doing, `d${i}`)));
                out.push(head("Thinking", "t")); JOURNEY.forEach((j, i) => out.push(cell(j.think, `t${i}`, { color: theme.ink })));
                out.push(head("Feeling", "f"));
                const n = JOURNEY.length, W = n * 100;
                const pts = JOURNEY.map((j, i) => [50 + i * 100, 72 - j.level * 17]);
                out.push(
                  <div key="fl" style={{ gridColumn: "2 / -1", borderTop: `1px solid ${theme.line}`, borderLeft: `1px solid ${theme.line}`, padding: "8px 0" }}>
                    <svg viewBox={`0 0 ${W} 76`} preserveAspectRatio="none" aria-label="Feeling line: rises through Aware, Explore and Understand, drops at Price, recovers slightly at Trust, hits its lowest at Start, then peaks in the first week." role="img" style={{ width: "100%", height: 76, display: "block" }}>
                      <line x1="0" y1="38" x2={W} y2="38" stroke={theme.line} strokeWidth="1" vectorEffect="non-scaling-stroke" />
                      <polyline points={pts.map((p) => p.join(",")).join(" ")} fill="none" stroke={H.steel} strokeWidth="2" vectorEffect="non-scaling-stroke" />
                    </svg>
                    <div style={{ display: "grid", gridTemplateColumns: `repeat(${n}, 1fr)`, marginTop: -2 }}>
                      {JOURNEY.map((j) => <span key={j.s} style={{ textAlign: "center", fontSize: 12, color: j.low ? (isDark ? "#F2A28F" : "#9A3B26") : "transparent" }}>{j.low ? "● low point" : "·"}</span>)}
                    </div>
                  </div>
                );
                out.push(head("Pain points", "p")); JOURNEY.forEach((j, i) => out.push(cell(j.pain, `p${i}`)));
                out.push(head("Opportunities", "o")); JOURNEY.forEach((j, i) => out.push(cell(j.opp, `o${i}`)));
                out.push(head("Answered by", "a")); JOURNEY.forEach((j, i) => out.push(cell(j.by, `a${i}`, { color: theme.ink, fontWeight: 500 })));
                return out;
              })()}
            </div>
          </div>
        </Reveal>
        <Reveal><p style={{ ...body, fontSize: 13.5, color: theme.inkMute, margin: "10px 0 0" }}>Scroll sideways on small screens. Red marks the likely low points.</p></Reveal>
      </Section>

      {/* 6 ── IA */}
      <Section {...sp} n={6} id="ia" eyebrow="Information architecture" title="Six links, one action, and a footer that mirrors the product" intro="A flat structure: every page is one click from the nav, and the trial button never moves. Product and Company footer groups repeat the nav for people who scroll to the end." tag={T("designs", "From the designs")}>
        <Reveal>
          <Card theme={theme} style={{ padding: isMobile ? 18 : 28 }}>
            <div style={{ textAlign: "center", marginBottom: 18 }}>
              <span style={{ display: "inline-block", padding: "8px 26px", borderRadius: 12, border: `1.5px solid ${theme.ink}`, fontFamily: "Inter", fontWeight: 600, color: theme.ink }}>hearth.app</span>
              <div style={{ ...body, fontSize: 13, color: theme.inkMute, marginTop: 6 }}>Logo returns to Home</div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : isMobileOrTablet ? "repeat(4, 1fr)" : "repeat(7, 1fr)", gap: 14 }}>
              {IA.map(([t, items]) => (
                <div key={t} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <span style={{ padding: "8px 6px", borderRadius: 10, border: `1.5px solid ${theme.ink}`, textAlign: "center", fontFamily: "Inter", fontWeight: 600, fontSize: 14.5, color: theme.ink }}>{t}</span>
                  {items.map((it) => <span key={it} style={{ ...body, fontSize: 13.5, lineHeight: 1.35, textAlign: "center" }}>{it}</span>)}
                </div>
              ))}
            </div>
          </Card>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: cols3, gap: 16, marginTop: 16 }}>
          {IA_GLOBAL.map(([t, d], i) => <Reveal key={t} delay={0.04 * i}><Card theme={theme} style={{ border: `1.5px dashed ${theme.inkMute}` }}><div style={cardTitle}>{t}</div><div style={{ ...body, fontSize: 14.5 }}>{d}</div></Card></Reveal>)}
        </div>
        <Reveal>
          <h3 style={{ ...sub, marginTop: 40, marginBottom: 6 }}>The Home page is a conversation, not a feature list</h3>
          <p style={{ ...body, margin: "0 0 16px" }}>Each band answers the next question a visitor is likely to ask. Background colour changes mark each turn.</p>
          <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : isMobileOrTablet ? "repeat(4, 1fr)" : "repeat(7, 1fr)", gap: 10 }}>
            {HOME_STORY.map(([q, a], i) => {
              const bands = [H.navy, H.butter, H.cream, H.sand, H.cream, H.sand, H.navy];
              const dark = i === 0 || i === 6;
              return (
                <li key={q} style={{ padding: "14px 14px 16px", borderRadius: 14, background: bands[i], border: `1px solid ${theme.line}`, color: dark ? "#fff" : H.navy, fontFamily: "Inter" }}>
                  <div style={{ fontSize: 14.5, fontWeight: 600, marginBottom: 6 }}>{q}</div>
                  <div style={{ fontSize: 13, lineHeight: 1.45, opacity: 0.85 }}>{a}</div>
                </li>
              );
            })}
          </ol>
        </Reveal>
      </Section>

      {/* 7 ── FLOWS */}
      <Section {...sp} n={7} id="flows" eyebrow="User flows" title="Three paths through the site, one for each kind of visitor" intro="Steps on designed pages are solid. Screens the PDF doesn’t include (sign-up, role detail, confirmation) are dashed and marked as next to design." alt>
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {FLOWS.map((f) => (
            <Reveal key={f.t}>
              <div style={{ ...cardTitle, fontSize: 20, marginBottom: 2 }}>{f.t}</div>
              <div style={{ ...body, fontSize: 14.5, marginBottom: 14 }}>{f.who}</div>
              <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: 8 }}>
                {f.steps.map(([kind, t, branch], i) => {
                  const st = {
                    page: { background: H.yellow, color: H.navy, border: `1.5px solid ${H.yellow}` },
                    action: { background: H.mist, color: H.navy, border: `1.5px solid ${H.mist}` },
                    decision: { background: H.navy, color: "#fff", border: `1.5px solid ${isDark ? theme.inkMute : H.navy}` },
                    missing: { background: "transparent", color: theme.ink, border: `1.5px dashed ${theme.inkMute}` },
                  }[kind];
                  return (
                    <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                      <span style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                        <span style={{ display: "inline-block", padding: "11px 14px", borderRadius: kind === "decision" ? 6 : 12, fontFamily: "Inter", fontSize: 14, fontWeight: kind === "page" || kind === "decision" ? 600 : 500, lineHeight: 1.3, textAlign: "center", ...st }}>
                          {kind === "decision" && <span aria-hidden="true">◆ </span>}{t}
                          {kind === "missing" && <span style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }}> (not yet designed)</span>}
                        </span>
                        {branch && <span style={{ fontFamily: "Inter", fontSize: 12.5, color: theme.inkSoft, maxWidth: 160, textAlign: "center" }}>↓ {branch}</span>}
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
            {[["Page or section in the designs", { background: H.yellow }], ["User action", { background: H.mist }], ["Not yet designed", { border: `1.5px dashed ${theme.inkMute}` }], ["Decision", { background: H.navy, border: isDark ? `1px solid ${theme.inkMute}` : "none" }]].map(([l, s]) => (
              <span key={l} style={{ display: "inline-flex", alignItems: "center", gap: 8 }}><span aria-hidden="true" style={{ width: 18, height: 14, borderRadius: 4, boxSizing: "border-box", ...s }} />{l}</span>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* 8 ── STRATEGY */}
      <Section {...sp} n={8} id="strategy" eyebrow="Ideation and UX strategy" title="Show the product, price it plainly, and keep it quiet" intro="The rationale below is reconstructed from the final screens: it explains the choices the designs make, framed as the process that leads to them.">
        <Reveal><h3 style={sub}>How might we…</h3></Reveal>
        <div style={{ display: "grid", gridTemplateColumns: cols2, gap: 12 }}>
          {HMW.map((h) => <Reveal key={h}><div style={{ ...body, padding: "16px 20px", borderRadius: 14, background: theme.bgAlt, color: theme.ink }}>{h}</div></Reveal>)}
        </div>
        <Reveal><h3 style={{ ...sub, marginTop: 40 }}>Design principles, borrowed from Hearth’s own values</h3></Reveal>
        {cardGrid(PRINCIPLES, cols4)}
        <Reveal><h3 style={{ ...sub, marginTop: 40 }}>Prioritising what the website must carry</h3></Reveal>
        <Reveal>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 12 }}>
            {PRIORITY.map((q) => (
              <div key={q.t} style={{ padding: "20px 22px", borderRadius: 16, background: q.strong ? theme.card : "transparent", border: `1px ${q.strong ? "solid" : "dashed"} ${q.strong ? theme.line : theme.inkMute}` }}>
                <div style={{ ...cardTitle, marginBottom: 2 }}>{q.t}</div>
                <div style={{ fontFamily: "Inter", fontSize: 13, color: theme.inkMute, marginBottom: 10 }}>{q.sub}</div>
                <div style={{ ...body, fontSize: 14.5 }}>{q.d}</div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "Inter", fontSize: 12.5, color: theme.inkMute, marginTop: 8 }}><span>Top row: high impact on the trial decision</span><span>Right column: high effort →</span></div>
        </Reveal>
      </Section>

      {/* 9 ── WIREFRAMES */}
      <Section {...sp} n={9} id="wireframes" eyebrow="Wireframing" title="Low-fidelity skeletons, before colour and copy" intro="Reconstructed low-fidelity wireframes of three key pages. They strip the final layouts back to structure so the layout decisions can be judged on their own." alt>
        <div style={{ display: "grid", gridTemplateColumns: cols3, gap: isMobile ? 28 : 24 }}>
          {Object.entries(WIRE_NOTES).map(([k, notes], i) => (
            <Reveal key={k} delay={0.04 * i}>
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
      <Section {...sp} n={10} id="visual" eyebrow="UI design and visual direction" title="Warm paper, deep ink, and one yellow that means “act”" intro="Colours sampled from the exported pages; sizes measured from the 1440px artboards, so treat them as close approximations of the Figma values." tag={T("designs", "From the designs")}>
        <Reveal>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)", gap: 12 }}>
            {SWATCHES.map(([n, hex, use]) => (
              <div key={n} style={{ borderRadius: 16, overflow: "hidden", border: `1px solid ${theme.line}`, background: theme.card }}>
                <div aria-hidden="true" style={{ height: isMobile ? 64 : 88, background: hex, borderBottom: `1px solid ${theme.line}` }} />
                <div style={{ padding: "12px 14px", fontFamily: "Inter" }}>
                  <div style={{ fontSize: 14.5, fontWeight: 600, color: theme.ink }}>{n}</div>
                  <div style={{ fontSize: 12.5, color: theme.inkMute, fontFamily: "ui-monospace, Menlo, monospace", margin: "2px 0 4px" }}>{hex}</div>
                  <div style={{ fontSize: 13, color: theme.inkSoft, lineHeight: 1.4 }}>{use}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: cols2, gap: 16, marginTop: 16 }}>
          <Reveal><Card theme={theme}><div style={cardTitle}>Contrast checks</div><Bullets items={CONTRAST} style={body} /></Card></Reveal>
          <Reveal delay={0.05}><Card theme={theme}><div style={cardTitle}>Principles in the visual language</div><ul style={{ ...body, margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 6 }}>{VISUAL_PRINCIPLES.map(([k, v]) => <li key={k}><strong style={{ color: theme.ink, fontWeight: 600 }}>{k}:</strong> {v}</li>)}</ul></Card></Reveal>
        </div>
        <Reveal>
          <Card theme={theme} style={{ marginTop: 16 }}>
            <div style={cardTitle}>Typography: Poppins throughout</div>
            <p style={{ ...body, margin: "0 0 12px" }}>A geometric sans with friendly round forms. Display sizes use the regular weight, which keeps big headlines calm rather than shouty.</p>
            {TYPE_SCALE.map(([k, w, sample, size, weight], i) => (
              <div key={k} style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "190px 1fr", gap: isMobile ? 4 : 20, alignItems: "baseline", padding: "14px 0", borderTop: i ? `1px solid ${theme.line}` : "none" }}>
                <div style={{ fontFamily: "Inter", fontSize: 12.5, color: theme.inkMute, lineHeight: 1.4 }}>{k}{w && <><br />{w}</>}</div>
                <div style={{ fontFamily: "'Poppins', Inter, sans-serif", fontSize: isMobile ? Math.min(size, 34) : size, fontWeight: weight, color: theme.ink, lineHeight: 1.15, letterSpacing: size > 30 ? "-0.02em" : 0 }}>{sample}</div>
              </div>
            ))}
          </Card>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: cols2, gap: 16, marginTop: 16 }}>
          <Reveal>
            <Card theme={theme}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 8 }}><span style={{ ...cardTitle, marginBottom: 0 }}>Spacing and layout</span>{T("assumption", "Assumption")}</div>
              <p style={{ ...body, margin: "0 0 18px" }}>1440px artboard, 1152px content column (144px margins), cards on a 3- or 4-column grid with ~24px gutters, sections around 96–120px tall padding. An 8-point scale is assumed.</p>
              <div aria-hidden="true" style={{ display: "flex", alignItems: "flex-end", gap: 12, flexWrap: "wrap" }}>
                {[8, 16, 24, 32, 48, 64, 96].map((s) => (
                  <div key={s} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                    <span style={{ width: s * 0.6, height: s * 0.6, background: H.peri, borderRadius: 3 }} />
                    <span style={{ fontFamily: "Inter", fontSize: 12, color: theme.inkMute }}>{s}</span>
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>
          <Reveal delay={0.05}>
            <Card theme={theme}>
              <div style={cardTitle}>Core components</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center", fontFamily: "'Poppins', Inter, sans-serif" }}>
                <span style={{ padding: "10px 20px", borderRadius: 999, background: H.yellow, color: H.navy, fontSize: 14.5, fontWeight: 500 }}>Start free trial</span>
                <span style={{ padding: "10px 20px", borderRadius: 999, background: H.navy, color: "#fff", fontSize: 14.5, fontWeight: 500, border: isDark ? `1px solid ${theme.inkMute}` : "none" }}>Send message</span>
                <span style={{ padding: "9px 19px", borderRadius: 999, border: `1.5px solid ${theme.ink}`, color: theme.ink, fontSize: 14.5, fontWeight: 500 }}>Book a demo</span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 14, fontFamily: "'Poppins', Inter, sans-serif", fontSize: 13 }}>
                <span style={{ padding: "6px 12px", borderRadius: 999, background: H.navy, color: "#fff", border: isDark ? `1px solid ${theme.inkMute}` : "none" }}>All teams</span>
                <span style={{ padding: "6px 12px", borderRadius: 999, border: `1px solid ${theme.inkMute}`, color: theme.ink }}>Engineering</span>
                <span style={{ padding: "6px 12px", borderRadius: 999, background: H.mist, color: H.navy }}>Email</span>
                <span style={{ padding: "6px 12px", borderRadius: 999, background: H.yellow, color: H.navy }}>Most popular</span>
              </div>
              <div style={{ marginTop: 14, padding: "14px 16px", borderRadius: 18, background: H.cream, color: H.navy, maxWidth: 340, boxShadow: "0 8px 24px rgba(26,37,64,0.12)", fontFamily: "'Poppins', Inter, sans-serif" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}><span style={{ fontSize: 14, fontWeight: 500 }}>Rohan Amin</span><span style={{ fontSize: 11.5, padding: "2px 8px", borderRadius: 999, background: H.mist }}>WhatsApp</span></div>
                <div style={{ fontSize: 14, lineHeight: 1.45 }}>Is the oak table still available in 180 cm?</div>
              </div>
              <p style={{ ...body, fontSize: 14, margin: "14px 0 0" }}>Also: segmented toggle, seat stepper, feature table, accordion, story card, role row, form field, office card.</p>
            </Card>
          </Reveal>
        </div>
      </Section>

      {/* 11 ── PROTOTYPE */}
      <Section {...sp} n={11} id="prototype" eyebrow="Prototyping" title="The pricing calculator, working" intro="A live rebuild of the calculator from the Pricing page, including two states the PDF doesn’t show: yearly billing and the Starter seat limit. Try 4 seats on Starter." tag={T("assumption", "Yearly = 20% off, from the toggle label")} alt>
        <div style={{ display: "grid", gridTemplateColumns: isMobileOrTablet ? "minmax(0, 1fr)" : "minmax(0, 1fr) minmax(0, 1.15fr)", gap: 24, alignItems: "start" }}>
          <Reveal><PricingCalculator theme={theme} isDark={isDark} /></Reveal>
          <Reveal delay={0.05}>
            <div>
              <h3 style={sub}>Key interactions across the site</h3>
              <DataTable cols={INTERACTIONS.cols} rows={INTERACTIONS.rows} theme={theme} minWidth={520} />
              <p style={{ ...body, fontSize: 14, margin: "12px 0 0" }}>Behaviours are specified from the static states in the designs. {T("proposed", "Proposed spec")}</p>
            </div>
          </Reveal>
        </div>
        <Reveal><h3 style={{ ...sub, marginTop: 40 }}>Key scenarios the prototype should cover</h3></Reveal>
        {cardGrid(SCENARIOS, cols3)}
      </Section>

      {/* 12 ── TESTING */}
      <Section {...sp} n={12} id="testing" eyebrow="Usability testing" title="A test plan, and what an expert review already found" intro="No usability tests were run. The plan below is proposed; the issues table is my own heuristic review of the seven screens, so these are real observations, not user findings.">
        <div style={{ display: "grid", gridTemplateColumns: cols2, gap: 16 }}>
          <Reveal><Card theme={theme}><div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}><span style={{ ...cardTitle, marginBottom: 0 }}>Test plan</span>{T("proposed", "Proposed")}</div><ul style={{ ...body, margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 6 }}>{TEST_PLAN.map(([k, v]) => <li key={k}><strong style={{ color: theme.ink, fontWeight: 600 }}>{k}:</strong> {v}</li>)}</ul></Card></Reveal>
          <Reveal delay={0.05}><Card theme={theme}><div style={cardTitle}>Tasks</div><Bullets ordered items={TEST_TASKS} style={body} /></Card></Reveal>
        </div>
        <Reveal><div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", margin: "40px 0 16px" }}><h3 style={{ ...sub, margin: 0 }}>Issues found in review</h3>{T("review", "Expert review")}</div></Reveal>
        <Reveal>
          <DataTable cols={["Issue", "Where", "Heuristic", "Severity", "Proposed iteration"]} rows={ISSUES} theme={theme} minWidth={900}
            render={(c, j) => j === 3 ? <span style={{ fontWeight: 700, color: sevColor(c) }}>{c}</span> : c} />
        </Reveal>
      </Section>

      {/* 13 ── FINAL DESIGN */}
      <Section {...sp} n={13} id="final" eyebrow="Final design and solution" title="Seven pages, each answering one visitor’s question" intro="Full pages from the designs. Scroll inside each frame to see the whole page; the notes connect what you see back to the problems above." alt>
        <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 48 : 64 }}>
          {PAGES.map((p, i) => (
            <Reveal key={p.name}>
              <div style={{ display: "grid", gridTemplateColumns: isMobileOrTablet ? "minmax(0, 1fr)" : "minmax(0, 1.15fr) minmax(0, 1fr)", gap: isMobile ? 20 : 48, alignItems: "start", paddingTop: i ? (isMobile ? 40 : 56) : 0, borderTop: i ? `1px solid ${theme.line}` : "none" }}>
                <ScrollFrame src={p.img} h={p.h} label={p.name} url={p.url} theme={theme} shadow={shadow} maxH={isMobile ? 440 : 620} />
                <div>
                  <h3 style={{ fontFamily: "Inter", fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 500, letterSpacing: "-0.02em", color: theme.ink, margin: "0 0 10px", lineHeight: 1.25 }}>{p.name}: {p.title}</h3>
                  {T("designs", "From the designs")}
                  <div style={{ display: "flex", flexDirection: "column", gap: 18, marginTop: 20 }}>
                    {p.notes.map(([t, d, s]) => (
                      <div key={t}>
                        <div style={{ fontFamily: "Inter", fontSize: 16, fontWeight: 600, color: theme.ink }}>{t}</div>
                        <div style={{ ...body, fontSize: 15 }}>{d}</div>
                        <div style={{ fontFamily: "Inter", fontSize: 13, color: theme.inkMute, marginTop: 2 }}>Solves: {s}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 14 ── DECISIONS */}
      <Section {...sp} n={14} id="decisions" eyebrow="Design decisions and UX rationale" title="Why it looks and works this way" intro="Each decision, the reason behind it, and what it costs.">
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
      <Section {...sp} n={15} id="learnings" eyebrow="Challenges and learnings" title="What was hard, and what I’d keep doing" alt>
        {cardGrid(CHALLENGES, cols2)}
        <Reveal><h3 style={{ ...sub, marginTop: 40 }}>Key takeaways</h3></Reveal>
        <div style={{ display: "grid", gridTemplateColumns: cols3, gap: 16 }}>
          {TAKEAWAYS.map((t, i) => <Reveal key={t} delay={0.04 * i}><Card theme={theme} style={{ borderLeft: `4px solid ${H.yellow}` }}><div style={{ ...body, color: theme.ink }}>{t}</div></Card></Reveal>)}
        </div>
      </Section>

      {/* 16 ── NEXT */}
      <Section {...sp} n={16} id="next" eyebrow="Conclusion and future improvements" title="A clear story today, a measurable one next" intro="Hearth’s website takes a scattered, stressful job and presents it as one calm place: the promise in the first screen, the product as the picture, price and privacy answered in the open, and a person at the end of every question. The next step is to prove it with real users and real numbers.">
        <Reveal><div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 16 }}><h3 style={{ ...sub, margin: 0 }}>What I’d measure after launch</h3>{T("proposed", "Proposed")}</div></Reveal>
        {cardGrid(METRICS, cols3)}
        <Reveal><h3 style={{ ...sub, marginTop: 40 }}>Future improvements</h3></Reveal>
        {cardGrid(FUTURE, cols3)}
        <Reveal><p style={{ ...body, fontSize: 14, color: theme.inkMute, margin: "28px 0 0" }}>Hearth is a concept product. Names, figures and testimonials in the screens are design content.</p></Reveal>
      </Section>

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
