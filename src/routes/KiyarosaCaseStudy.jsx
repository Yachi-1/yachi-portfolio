import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, Minus, Plus } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import { useBreakpoint } from "../hooks/useBreakpoint.js";
import { projects } from "../data/projects.js";

import heroImg from "../assets/kiyarosa/hero.webp";
import dirV2 from "../assets/kiyarosa/dir-v2.webp";
import dirV3 from "../assets/kiyarosa/dir-v3.webp";
import dirV4 from "../assets/kiyarosa/dir-v4.webp";
import scrHome from "../assets/kiyarosa/home.webp";
import scrShop from "../assets/kiyarosa/shop.webp";
import scrCategories from "../assets/kiyarosa/categories.webp";
import scrConcerns from "../assets/kiyarosa/concerns.webp";
import scrProduct from "../assets/kiyarosa/product.webp";
import scrWishlist from "../assets/kiyarosa/wishlist.webp";
import scrCart from "../assets/kiyarosa/cart.webp";
import scrCheckoutDetails from "../assets/kiyarosa/checkout-details.webp";
import scrCheckoutPayment from "../assets/kiyarosa/checkout-payment.webp";
import scrOrderPlaced from "../assets/kiyarosa/order-placed.webp";
import scrAbout from "../assets/kiyarosa/about.webp";
import scrJournal from "../assets/kiyarosa/journal.webp";
import scrSignIn from "../assets/kiyarosa/sign-in.webp";
import scrCreateAccount from "../assets/kiyarosa/create-account.webp";
import scrAccount from "../assets/kiyarosa/account.webp";
import scrOrders from "../assets/kiyarosa/orders.webp";
import scrAddresses from "../assets/kiyarosa/addresses.webp";
import scrPaymentMethods from "../assets/kiyarosa/payment-methods.webp";
import scrSettings from "../assets/kiyarosa/settings.webp";
import scrSignOut from "../assets/kiyarosa/sign-out.webp";

// The project card this page sits behind (Home / Projects / Nav link here).
const PROJECT_ID = "vegas";

const SCRIPT_FONT_URL = "https://fonts.googleapis.com/css2?family=Italianno&display=swap";

/* ═══════════════════════ Content ═══════════════════════ */

const META = [
  { k: "Product", v: "Kiyarosa, Ayurvedic skincare (D2C)" },
  { k: "Scope", v: "20 final desktop screens" },
  { k: "Explored", v: "4 homepage directions" },
  { k: "Catalogue", v: "59 products · 4 collections" },
];

const SECTIONS = [
  ["overview", "Overview"], ["problem", "Problem"], ["research", "Research"], ["personas", "Personas"],
  ["journey", "Journey"], ["ia", "IA"], ["flows", "Flows"], ["ideation", "Ideation"],
  ["wireframes", "Wireframes"], ["visual", "Visual"], ["prototype", "Prototype"], ["testing", "Testing"],
  ["final", "Final design"], ["decisions", "Decisions"], ["learnings", "Learnings"], ["next", "What’s next"],
];

const GOALS = [
  "Let shoppers browse by concern as easily as by product type",
  "Make ingredients and proof visible before the product page",
  "Use one clear offer that doesn’t pressure people",
  "Give a three-step checkout with UPI and cash on delivery",
  "Build one design system that holds across every page",
];

const STATS = [
  { n: "4", t: "homepage directions explored" },
  { n: "20", t: "final desktop screens" },
  { n: "59", t: "products across 4 collections" },
  { n: "6", t: "concerns used as a second way in" },
  { n: "3", t: "checkout steps, cart to payment" },
];

const TIMELINE = [
  ["Week 1", "brief, audit and structure"],
  ["Week 2", "four homepage directions"],
  ["Week 3", "review, feedback and choosing a direction"],
  ["Weeks 4–5", "shop, category, concern, product page, cart and checkout"],
  ["Week 6", "wishlist, auth, account, polish and handoff"],
];

const PAINS = [
  { t: "“I know my problem, not the product”", d: "Someone with hair fall doesn’t think “Oil & Hair, 12 products”. A store organised only by category makes them translate their problem into its labels." },
  { t: "“Is it really natural?”", d: "“Organic” and “Ayurvedic” are easy to claim. Without ingredients and proof up front, shoppers hesitate or leave to check reviews elsewhere." },
  { t: "“Will paying be safe?”", d: "Many Indian shoppers trust UPI and cash on delivery more than cards when buying from a new brand. If COD only appears at the last step, people are left unsure the whole way through." },
  { t: "“What goes with what?”", d: "Ayurvedic care is built on routines. One product in isolation doesn’t tell you the order of use or what to pair it with." },
  { t: "“Too many offers”", d: "Countdown timers, stacked badges and pop-ups feel at odds with a calm, ritual-led brand, and they make the real value harder to see." },
  { t: "“Surprise costs”", d: "Shipping thresholds and bundle maths that only appear at checkout feel like a bait-and-switch." },
];

const HMW = [
  "…let people start from their concern and still reach the full catalogue?",
  "…show what’s inside every product without crowding the cards?",
  "…make payment trust visible from the first screen to the last?",
  "…promote one offer clearly without any urgency tactics?",
];

const RESEARCH_PLAN = {
  cols: ["Method", "What it answers", "Who / how many", "Output"],
  rows: [
    ["Stakeholder interview", "Brand story, best sellers, margins on bundles, why COD matters", "Founder and team, 1–2 sessions", "Business goals and constraints"],
    ["Competitive audit", "How Ayurvedic and natural D2C stores handle concerns, ingredients, offers and checkout", "6–8 storefronts", "Pattern library, gaps to own"],
    ["Short survey", "Top concerns, preferred payment, what “natural” has to prove", "About 100 skincare shoppers", "Concern ranking, payment mix"],
    ["User interviews", "How people choose a product, build routines and decide to trust a brand", "6–8 remote, 45 min", "Personas, journey map"],
    ["Open card sort", "Do people group the 59 products by type, by concern or by both?", "15–20 online", "Navigation labels and hierarchy"],
    ["Review mining", "The words customers use for results, worries and complaints", "Existing product reviews", "Copy, FAQ and PDP content"],
  ],
};

const AUDIT_QUESTIONS = [
  "Is there a concern-based path, and how deep does it go?",
  "Where do ingredients appear: card, product page or nowhere?",
  "How visible are COD and UPI before checkout?",
  "What kind of offers: urgency, bundles or thresholds?",
  "How does content (rituals, sourcing) connect back to products?",
];

const HYPOTHESES = [
  ["H1", "At least as many people will start from a concern as from a product type."],
  ["H2", "Ingredients on the product card cut the number of product pages opened just to check them."],
  ["H3", "Showing COD and UPI early lowers drop-off at checkout for first-time buyers."],
  ["H4", "A calm, warm look builds more trust for this brand than urgency cues."],
  ["H5", "Bundles need their maths spelled out (₹700 for 3) to be used."],
];

const PERSONAS = [
  {
    name: "Meera", age: 27, role: "Marketing executive, Bengaluru",
    quote: "I have oily, acne-prone skin and I read every label. I just want something that works and isn’t harsh.",
    goals: "Clear skin without harsh actives; know exactly what’s in a product",
    behaviours: "Researches at night, compares ingredients, reads reviews before buying",
    frustrations: "Vague “natural” claims; ten-step routines; having to open every product page",
    answer: "Acne Control row with key botanicals and a 3-step ritual; ingredients on every card",
  },
  {
    name: "Kavita", age: 44, role: "School administrator, Ahmedabad",
    quote: "My mother used hair oils like this. I’ll try a new brand, but I’ll pay when it arrives.",
    goals: "Traditional remedies made convenient; reduce hair fall",
    behaviours: "Prefers cash on delivery; follows orders on WhatsApp; trusts recommendations",
    frustrations: "Paying upfront to unknown brands; small, low-contrast text; long forms",
    answer: "COD shown in the trust strip, product page, cart and checkout; WhatsApp updates in settings; hair-oiling guide in the Journal",
  },
  {
    name: "Arjun", age: 32, role: "Software engineer, Pune",
    quote: "I reorder the same body wash and pick up gifts. Don’t make me type my address again.",
    goals: "Fast reorders, good value bundles, gifts that look premium",
    behaviours: "Repeat buyer, saves items, pays by UPI",
    frustrations: "Re-entering details; offers with hidden conditions",
    answer: "Buy again on orders, saved addresses and UPI, the Buy 2 Get 1 pack selector, Add all to cart from the wishlist",
  },
];

const JOURNEY = [
  { stage: "Discover", sub: "Ad or search → homepage", doing: "Scans the hero and the proof cards, spots “Shop by concern”", thinking: "“Is this a real Ayurvedic brand or a white label?”", feeling: "curious", level: 1, pain: "Generic hero copy gives her no reason to trust the brand", opp: "Proof cards, trust strip and founder story on the homepage" },
  { stage: "Explore", sub: "Concern → Acne Control", doing: "Picks Acne Control, reads the key botanicals and the 3-step ritual", thinking: "“Finally, a page for my exact problem.”", feeling: "understood", level: 2, pain: "The same product type sits under several concerns", opp: "Concern rows with key botanicals and a 3-step ritual" },
  { stage: "Evaluate", sub: "Product page, reviews", doing: "Checks ingredients, the pack options and two reviews", thinking: "“Neem and green clay. Is it gentle enough?”", feeling: "unsure", level: 0, pain: "Sensitive-skin worry; no sample size", opp: "Ingredients under the title, a review summary next to the gallery, accordions" },
];

const IA = [
  { t: "Shop", items: ["All products (59)", "Filters: concern, ingredient, price, rating", "Product page", "Complete the ritual"] },
  { t: "Categories", items: ["Oil & Hair · 12", "Lip & Make Up · 16", "Body Care · 18", "Face Cream · 13"] },
  { t: "Concerns", badge: "NEW", items: ["Uneven Tone", "Acne Control", "Oiliness · Wrinkles", "Hair Fall · Anti-Dandruff"] },
  { t: "About", items: ["Brand story", "Founder’s note", "From farm to jar"] },
  { t: "Journal", items: [] },
];

const IA_GLOBAL = [
  ["Promo bar", "Find a store · Track order · Buy 2 Get 1 Free · Help · Language and currency"],
  ["Footer: Shop", "The four collections"],
  ["Footer: Concerns", "All six concerns"],
];

const IA_PRINCIPLES = [
  { t: "Depth stays shallow", d: "Every product is two clicks from the homepage, through a category, a concern or All products. The breadcrumb (Home / Shop / Product) always shows the way back." },
  { t: "Labels match how people talk", d: "Concerns are named as problems (“Hair Fall”), and categories as places in the bathroom (“Body Care”). The “NEW” badge on Concerns points people to the less familiar path." },
  { t: "Same pattern at every level", d: "Category and Concern pages share one row layout: a context card on the left and a product carousel on the right. Learn it once and it works everywhere." },
];

// kind: "step" (solid), "decision" (dashed), "end" (green)
const FLOWS = [
  { t: "A. Concern-led first purchase", who: "Meera", steps: [
    ["step", "Home", "Shop by concern"], ["step", "Concerns page", "Acne Control row"], ["decision", "Right product?", "Botanicals, ritual"],
    ["step", "Product page", "Pick pack, Add to cart"], ["decision", "Under ₹999?", "Meter shows gap"], ["step", "Details", "Contact, address, delivery"],
    ["step", "Payment", "UPI · card · PayPal · COD"], ["end", "Order placed", "#KR-123456"],
  ] },
  { t: "B. Cash on delivery, no account", who: "Kavita", steps: [
    ["step", "Trust strip", "“Cash on delivery”"], ["step", "Categories", "Oil & Hair"], ["step", "Cart", "COD note under total"],
    ["decision", "Has account?", "Sign in link, optional"], ["step", "Details as guest", ""], ["step", "Payment", "Cash on delivery"], ["end", "Order placed", ""],
  ] },
  { t: "C. Wishlist to account", who: "Arjun", steps: [
    ["step", "Heart on any card", ""], ["step", "Wishlist", "Guest, this device only"], ["decision", "Sync across devices?", ""],
    ["step", "Create account", "Optional skin type"], ["step", "Add all to cart (5)", "Out-of-stock item skipped"], ["end", "Cart", ""],
  ] },
  { t: "D. Track an order and sign out", who: "any returning user", steps: [
    ["step", "Account icon", ""], ["step", "Overview", "Latest order tracker"], ["step", "Track order / My orders", "Buy again, review"],
    ["decision", "Leave?", "Stay or sign out"], ["end", "Signed out", "Cart and wishlist kept"],
  ] },
];

const DIRECTIONS = [
  { v: "Version 2", name: "Midnight apothecary", img: dirV2, h: 4458,
    d: "Dark green and mint, an all-caps wordmark, and the headline “Clean botanicals. Honest results.” Search-first header, with Category, Concern and Ingredient tabs and a full filter bar right on the homepage.",
    worked: "Ingredient transparency (“Know what goes on your skin”), and the “Targets” line on product cards.",
    risk: ["Risk", "Reads as night-time luxury rather than warm Ayurveda. Putting the filters on the homepage turns it into a listing page."] },
  { v: "Version 3", name: "Clean commerce", img: dirV3, h: 4573,
    d: "Navy and pale blue, with a countdown in the promo bar, a nine-item category bar, a hero carousel, “Trending now” with filter chips, kits and combos, and an ingredient of the week.",
    worked: "Strong conversion tools: the trust strip under the hero, quantity steppers on cards, and bundles.",
    risk: ["Risk", "Looks like a pharmacy or marketplace. The urgency timer and stacked badges clash with a calm, natural brand."] },
  { v: "Version 4", name: "Clinically kind", img: dirV4, h: 4169,
    d: "Plum and rose, with the headline “Ayurvedic actives, clinically kind”. A free skin quiz in the header, an interactive “What would you like to treat?” concern explorer, and “Know your actives”.",
    worked: "Treats concerns as a first-class path. The quiz banner explains its three steps.",
    risk: ["Risk", "The clinical tone pulls away from Ayurvedic heritage. The sidebar filters make the homepage feel like a catalogue."] },
  { v: "Final", name: "Earth & ritual", chosen: true, img: scrHome, h: 5057,
    d: "Espresso and sand, script eyebrows over bold uppercase titles, a pill navigation bar, and an image-led hero with a grid of proof cards. Concerns are shown as arch cards. The page tells the brand story in a sequence of sections.",
    worked: "The most distinctive and the most on-brand. It reads as a story first and a shop second.",
    risk: ["Trade-off", "Lighter on commerce tools than versions 3 and 4, so those moved to the Shop page."] },
];

const MATRIX = {
  cols: ["Version 2", "Version 3", "Version 4", "Final"],
  rows: [
    ["Brand fit: warm, Ayurvedic, natural", [2, 1, 1, 3]],
    ["Calm, easy to read", [2, 1, 2, 3]],
    ["Discovery by concern", [2, 2, 3, 3]],
    ["Ingredient transparency", [3, 2, 3, 3]],
    ["Commerce tools on the homepage", [2, 3, 3, 2]],
    ["Distinctive among competitors", [2, 1, 2, 3]],
    ["Scales to 20 pages", [2, 3, 2, 3]],
  ],
};

const KEPT = [
  ["Kept from version 2", "Ingredient lines on every product card. “Know what goes on your skin” became the Key ingredient filter and the “Key botanicals” chips on the Concerns page."],
  ["Kept from version 3", "The four-point trust strip (free shipping, COD, cruelty-free, derm-approved). Kits and combos turned into the “Buy 2 Get 1” pack selector and the “Build your bundle” tile."],
  ["Kept from version 4", "The concern explorer turned into the row pattern on the Concerns page, and the quiz into “Take the skin quiz” links. The product-tagged reviews stayed."],
];

const PRINCIPLES = [
  ["Start from the problem", "Concerns are a main navigation item marked NEW, a homepage section, a full page and a filter."],
  ["Show what’s inside", "Every product card lists its key ingredients, so the first comparison happens on the grid."],
  ["Calm commerce", "One offer, Buy 2 Get 1 Free, used the same way everywhere. No timers, no pop-ups."],
  ["Trust where doubt starts", "COD, derm-approved and cruelty-free sit under the hero, on the product page, in the cart and in checkout."],
  ["Rituals, not single products", "3-step rituals, “Complete the ritual”, and Journal guides teach how products work together."],
  ["One system, many pages", "Sand header band, script eyebrow, uppercase title and arches repeat on every page."],
];

const MOSCOW = [
  ["Must have", ["Category and concern navigation", "Shop with filters", "Product page with pack options", "Cart and three-step checkout", "UPI and COD", "Sign in"]],
  ["Should have", ["Wishlist with stock states", "Account: orders, addresses, payments, settings", "Reviews on the product page", "Journal"]],
  ["Could have", ["Skin quiz (linked, not yet designed)", "Bundle builder", "Price-drop and back-in-stock alerts", "Share wishlist"]],
  ["Not in this release", ["Mobile layouts", "Subscriptions and auto-refill", "Store locator", "Hindi and Gujarati"]],
];

const WIRE_NOTES = {
  Homepage: ["Image-led hero, short tagline, long statement below", "Proof cards around one central CTA", "Trust strip as a full-width band", "Concern arches after categories"],
  Shop: ["Short intro, offer kept to one side", "Category pills with counts, sort and view", "Sticky filters with a quiz fallback", "Offer tile placed inside the grid"],
  "Product page": ["Gallery with thumbnails; reviews underneath", "Ingredients right under the name", "Pack options shown as two choices with prices", "“Complete the ritual” carousel"],
  Checkout: ["A 3-step indicator in the header band", "Numbered cards in a single column", "Delivery price shown before payment", "Summary stays on screen with the total"],
};

const SWATCHES = [
  ["Espresso", "#2E2118", "Promo bar, footer, text"],
  ["Cocoa", "#4A3325", "Buttons, trust strip, active"],
  ["Bark", "#604C40", "Secondary text"],
  ["Linen", "#EFE4D8", "Cards, chips"],
  ["Sand", "#F6EFE7", "Section bands"],
  ["White", "#FFFFFF", "Page, product cards"],
];

const CONTRAST = [
  ["Espresso on sand", "13.7 : 1"],
  ["Espresso on white", "15.6 : 1"],
  ["White on cocoa (buttons)", "11.7 : 1"],
  ["Bark on sand (secondary)", "7.1 : 1"],
];

const SPACING = [
  "Content inside a 1440 frame with roughly 80px side margins",
  "Cards with rounded corners (about 12–20px); buttons, chips and nav as full pills",
  "Alternating white and sand full-width bands give each section a clear break",
  "The arch shape is the brand motif: concerns, founder portrait, farm-to-jar steps, sign out",
];

const VISUAL_PRINCIPLES = [
  ["Warm, not clinical", "Earth tones and real photography, rather than lab white or neon."],
  ["Quiet hierarchy", "One filled button per view. Everything else is outlined or text."],
  ["Human detail", "Script eyebrows, “namaste name” and “leaving so soon?” give the brand a voice."],
  ["Repeat to build trust", "The same trust icons and offer show up wherever doubt comes up."],
];

const INTERACTIONS = [
  "Hover on product cards; heart toggles wishlist state",
  "Top picks tabs: New this week, Best sellers, Sale",
  "Carousel arrows and progress dots on category and concern rows",
  "FAQ and product page accordions, one open at a time",
  "Pack selector updates the button price; quantity stepper",
  "Free-shipping meter fills as the cart grows",
  "Choosing a payment method reveals its field (UPI ID)",
  "Order-placed modal over the payment step",
  "Sign in / Create account toggle; show-password button",
  "Account side nav with live counts; order status tabs",
];

const SCENARIOS = [
  ["First purchase by concern", "Home → Concerns → product page → cart → details → payment → order placed"],
  ["Bundle value", "switch to Buy 2 Get 1 and watch the price and meter update"],
  ["Cash on delivery", "guest checkout with COD selected"],
  ["Guest to member", "wishlist → sign in to sync → create account"],
  ["Returning customer", "Overview → track the latest order → buy again"],
  ["Sign out", "confirm and see that the cart and wishlist are kept"],
];

const TEST_APPROACH = [
  "Moderated remote sessions on the desktop prototype, 45 minutes",
  "5–6 participants matching the three personas, at least two who prefer COD",
  "Think-aloud, then a short interview",
  "Measures: task success, time on task, errors, an ease rating after each task (SEQ), and a System Usability Scale (SUS) score at the end",
];

const TEST_TASKS = [
  ["T1", "Find something for hair fall and add it to your cart"],
  ["T2", "Choose the better-value pack of the face wash"],
  ["T3", "Check out paying cash on delivery"],
  ["T4", "Save two items, then keep them on another device"],
  ["T5", "Find when your latest order arrives"],
  ["T6", "Find out where the botanicals come from"],
];

const HEURISTICS = {
  cols: ["Issue", "Where", "Heuristic", "Severity", "Iteration"],
  rows: [
    ["Currency selector reads “EN / USD”, but every price is in ₹", "Promo bar, all pages", "Consistency", "High", "Change to EN / INR, or show the selected currency"],
    ["The quiz is linked but has no screens, so the link leads nowhere", "Home, Shop", "User control", "High", "Design the 3-step quiz or hide the links for launch"],
    ["Price filter runs ₹350–₹500 but products go from ₹300 to ₹800", "Shop filters", "Match with reality", "Medium", "Set the range from catalogue min and max"],
    ["“Face Cream” holds face washes and masks; the product page tags it “Face care”", "Categories", "Match with reality", "Medium", "Rename the collection “Face Care”"],
    ["“Oil & Hair” in the header, “Hair & Oil” in the footer; “Anti-Danruff” on the homepage and footer", "Home, footer", "Consistency", "Medium", "One label per item; fix the spelling"],
    ["Each concern row repeats one product three times", "Concerns page", "Recognition", "Medium", "Fill with the real 5 products per concern"],
    ["No search results, empty or error states", "Search, forms", "Error recovery", "Medium", "Add results, no-results and form-error states"],
    ["“Find a store” with no store page; unclear if physical stores exist", "Promo bar", "Minimalism", "Low", "Remove or link to a stockist page"],
  ],
};

const SCREEN_GROUPS = [
  { t: "Discover", d: "Help people find their way in, by brand, by product type or by problem.", screens: [
    { name: "Homepage", url: "kiyarosa/", img: scrHome, h: 5057, points: ["Image-led hero with the tagline “Nature, Refined Into Beauty.” and a long statement underneath", "Proof cards (+1000 customers, 100% nature-led, 50+ products) around one “Shop All Products” button", "Trust strip, category cards with counts, concern arches with a link to the skin quiz", "Top picks tabs, About bento, product-tagged reviews, FAQ with a live-help card, newsletter"], why: "Answers “can I trust this brand?” before asking anyone to browse." },
    { name: "Shop all products", url: "kiyarosa/shop", img: scrShop, h: 2028, points: ["Category pills with counts that add up to 59; sort and grid/list toggle", "Filters for concern, key ingredient, price and rating, with a “Find your ritual” quiz card under them", "Buy 2 Get 1 shown as a tile inside the grid, not a pop-up", "“Showing 8 of 59” progress bar with Load more"], why: "Brings version 3’s commerce tools onto the page where shoppers expect them." },
    { name: "Shop by category", url: "kiyarosa/categories", img: scrCategories, h: 2428, points: ["Hero thumbnails jump to each collection", "Each row: count, short description, “Every order includes” checklist, View all", "Three-product carousel with arrows and progress dots"], why: "Keeps the classic product-type path one click deep." },
    { name: "Shop by concerns", url: "kiyarosa/concerns", img: scrConcerns, h: 3287, points: ["Concern arches at the top as jump links", "The context card adds key botanicals and a 3-step ritual (for example Cleanse, Clarify, Protect)", "Same carousel pattern as categories"], why: "Lets people start from the problem and learn the routine. This is version 4’s idea in the final style." },
  ] },
  { t: "Decide", d: "Give people enough detail to commit, and a place to save the maybes.", screens: [
    { name: "Product page", url: "kiyarosa/shop/honey-saffron-face-wash", img: scrProduct, h: 2021, points: ["Ingredients under the title; tags “Face care” and “For all skin types”", "Price including taxes, stock and COD shown before the button", "Pack selector: Single ₹350 or Buy 2 Get 1 ₹700 for 3 bottles; the button shows the price", "Review summary under the gallery; accordions; “Complete the ritual” carousel"], why: "Every doubt (what’s in it, what it costs, can I pay on delivery) is answered above the fold." },
    { name: "Wishlist", url: "kiyarosa/wishlist", img: scrWishlist, h: 1830, points: ["Filter by Face, Body, Hair; sort by recently added", "Stock labels: Only a few left, In stock, Out of stock → Notify me when back", "Add all to cart (5) skips the sold-out item", "Guest banner: sign in to sync across devices"], why: "A wishlist that helps people buy later instead of becoming a dead list." },
  ] },
  { t: "Buy", d: "Three steps, no surprises, and the payment methods people actually use.", screens: [
    { name: "Cart", url: "kiyarosa/cart", img: scrCart, h: 1165, points: ["Cart → Details → Payment indicator", "“You’re ₹149 away from free shipping” with a progress bar", "Move to wishlist or remove; Buy 2 Get 1 nudge to add a product", "Summary with promo code, COD and secure-checkout notes"], why: "Turns the shipping threshold into a goal instead of a surprise." },
    { name: "Checkout: details", url: "kiyarosa/checkout/details", img: scrCheckoutDetails, h: 1515, points: ["Numbered cards: Contact, Shipping address, Delivery", "Optional sign-in link; save address for next time", "Standard ₹50 or Express ₹100; COD reminder", "Summary updates to a ₹900 total"], why: "Guest-friendly, with delivery cost shown before payment." },
    { name: "Checkout: payment", url: "kiyarosa/checkout/payment", img: scrCheckoutPayment, h: 1341, points: ["Contact, ship to and delivery collapsed, with Change links", "UPI first, then card, PayPal and cash on delivery", "The selected method reveals its field (UPI ID)", "“We never store your card details” note"], why: "Reassures at the most anxious step and matches how people in India commonly pay." },
    { name: "Order placed", url: "kiyarosa/checkout/confirmation", img: scrOrderPlaced, h: 1341, points: ["Modal over the payment step with a clear success icon", "Order number, arrival date and total paid in one row", "View order details, Go to my account, Continue shopping"], why: "Closes the loop with the three facts people check first." },
  ] },
  { t: "Belong", d: "The brand story and the reading that brings people back.", screens: [
    { name: "About", url: "kiyarosa/about", img: scrAbout, h: 2602, points: ["Statement with small images set into the line", "Founder’s note in an arch portrait with a “Pure botanical, Ayurvedic beauty” badge", "From farm to jar in four steps: sourced, prepared, crafted, reviewed"], why: "Backs up the “organic” claim with a process, not just an adjective." },
    { name: "Journal", url: "kiyarosa/journal", img: scrJournal, h: 2142, points: ["Search stories, rituals and ingredients", "Featured story with read time and author", "Nine stories tagged Ingredients, Hair care, Skin concerns, Rituals or Ayurveda"], why: "Teaches rituals and ingredients, which supports the product pages." },
  ] },
  { t: "Account", d: "Sign in, keep track of orders, and leave without losing anything.", screens: [
    { name: "Sign in", url: "kiyarosa/sign-in", img: scrSignIn, h: 667, points: ["Split screen: brand image with three member benefits", "Sign in / Create account toggle; email or phone", "Show password, keep me signed in, Google and Apple"], why: "Lists the benefits so signing in doesn’t feel like a chore." },
    { name: "Create account", url: "kiyarosa/create-account", img: scrCreateAccount, h: 787, points: ["Name, email, phone (+91), password with an 8-character hint", "Optional skin type chips: Dry, Oily, Combination, Sensitive, Normal", "Terms checkbox and an opt-in for ritual guides"], why: "Short form, with personalisation that’s clearly optional." },
    { name: "Account overview", url: "kiyarosa/account", img: scrAccount, h: 1152, points: ["“namaste name” greeting with counts for orders, addresses and wishlist", "Latest order with a 4-step tracker and a “Being prepared” status", "Default address and saved UPI with Manage; wishlist teaser; help card"], why: "Answers “where’s my order?” first." },
    { name: "My orders", url: "kiyarosa/account/orders", img: scrOrders, h: 1223, points: ["Tabs: All, In progress, Delivered, Cancelled", "Actions depend on status: Track, Buy again, Write a review", "Cancelled orders confirm “refund processed”"], why: "Makes reordering, Arjun’s main job, a single click." },
    { name: "Addresses", url: "kiyarosa/account/addresses", img: scrAddresses, h: 1151, points: ["Home (default) and Work cards", "Edit, Set as default, Remove; add a new address"], why: "Saved once, used at every checkout." },
    { name: "Payment methods", url: "kiyarosa/account/payment-methods", img: scrPaymentMethods, h: 1152, points: ["UPI (default) and a Visa ending 1234", "Note that cards are held by the payment partner"], why: "Faster checkout with a clear privacy promise." },
    { name: "Settings", url: "kiyarosa/account/settings", img: scrSettings, h: 1386, points: ["Profile and skin type", "Notification toggles: order updates by email and WhatsApp, offers, ritual guides, SMS", "Change password; delete account explained"], why: "Puts people in control of messages, including WhatsApp for shoppers like Kavita." },
    { name: "Sign out", url: "kiyarosa/sign-out", img: scrSignOut, h: 993, points: ["Arch card: “leaving so soon?” with the signed-in email", "Stay signed in or Sign out", "Reassurance: cart saved, wishlist kept safe"], why: "A gentle confirmation that removes the fear of losing a cart." },
  ] },
];

const DECISIONS = {
  cols: ["Decision", "Why", "Solves"],
  rows: [
    ["Concerns as a top-level nav item, marked NEW", "The less familiar path needs a nudge to be found; the badge does that without a pop-up", "“I know my problem”"],
    ["One row pattern for categories and concerns", "A context card explains the group (count, botanicals, ritual) before the products; shoppers learn it once", "“What goes with what?”"],
    ["Ingredients on every product card", "Comparison happens on the grid instead of across tabs; it backs up the “natural” claim", "“Is it really natural?”"],
    ["Proof cards around a single CTA on the homepage", "Proof (customers, 100% nature-led, 50+ products) sits next to the action, not below the fold", "Trust on first visit"],
    ["Trust strip repeated on Home, About, PDP, cart and checkout", "COD and derm-approved answer doubts wherever they come up, not only on the last step", "“Will paying be safe?”"],
    ["A single offer, with its maths spelled out", "“₹700 · 3 bottles” and “the lowest-priced one is on us” make the value concrete and the brand calm", "“Too many offers”"],
    ["Free-shipping meter in the cart", "Turns a hidden threshold into a visible goal (₹149 to go)", "“Surprise costs”"],
    ["Three-step checkout with a persistent summary and Change links", "Shows where you are and what’s left; editing doesn’t mean starting over", "Checkout anxiety"],
    ["UPI listed first, COD always available", "Matches how people in India commonly pay; COD stays visible for people who won’t prepay", "“Will paying be safe?”"],
    ["Stock-aware wishlist actions", "“Notify me when back” replaces a dead button; Add all counts only items that can be bought (5 of 6)", "Frustration at sold-out items"],
    ["Account opens on the latest order tracker", "The most common reason to sign in is “where is my order?”", "Post-purchase worry"],
    ["Optional skin type at sign-up and in settings", "Light personalisation without a long form; marked “Optional · helps us suggest products”", "Finding the right product"],
    ["Script eyebrow plus uppercase title on every section", "Gives each section a clear label and keeps the brand voice; the warmth comes from the type, not from decoration", "Brand fit, scannability"],
  ],
};

const CHALLENGES = [
  ["Two ways into one catalogue", "Category and concern overlap; the same face wash belongs in both. I gave them one shared row component with different context cards, and gave Shop filters for both, so neither path feels secondary."],
  ["Choosing from four good directions", "Each version had real strengths. Judging them against fixed criteria, rather than taste, made the decision explainable, and showed what to borrow from the versions that didn’t win."],
  ["Trust without coldness", "Clinical cues (version 4) build credibility but drain warmth. I kept the warmth in colour and type and moved credibility into content: derm-approved, farm-to-jar steps, ingredient lists."],
  ["Selling without pressure", "Version 3’s timer and badges would likely convert, but they don’t fit the brand. One offer repeated in the same words everywhere does the selling instead."],
  ["Holding 20 screens together", "The fix was a small set of patterns: header band, row card, product card, summary panel and arch. New pages became mostly assembly."],
];

const TAKEAWAYS = [
  "Explore wide early; it’s cheaper than changing direction later",
  "Write the decision criteria down before the review",
  "Content is a design material: ingredients and steps carry trust",
  "Audit labels and data before testing, not after",
];

/* ═══════════════════════ Building blocks ═══════════════════════ */

function Eyebrow({ children, color, style }) {
  return (
    <div style={{ fontFamily: "Inter", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color, marginBottom: 12, ...style }}>
      {children}
    </div>
  );
}

// Provenance labels from the original case study, so readers can tell what
// is shown in the designs from what is planned or assumed.
function Tag({ kind, children, isDark }) {
  const tones = {
    designs: isDark ? ["#A6D190", "rgba(166,209,144,0.14)"] : ["#3E6B2F", "rgba(62,107,47,0.09)"],
    proposed: isDark ? ["#E9C07A", "rgba(233,192,122,0.14)"] : ["#875A06", "rgba(135,90,6,0.09)"],
    assumption: isDark ? ["#C8B1F2", "rgba(200,177,242,0.14)"] : ["#5B3E8A", "rgba(91,62,138,0.09)"],
  };
  const [fg, bg] = tones[kind];
  return (
    <span style={{ display: "inline-block", padding: "4px 10px", borderRadius: 999, background: bg, color: fg, fontFamily: "Inter", fontSize: 12.5, fontWeight: 600, lineHeight: 1.3 }}>
      {children}
    </span>
  );
}

function Card({ children, theme, style }) {
  return (
    <div style={{ padding: "24px 26px", borderRadius: 18, background: theme.card, border: `1px solid ${theme.line}`, height: "100%", boxSizing: "border-box", ...style }}>
      {children}
    </div>
  );
}

function Bullets({ items, style }) {
  return (
    <ul style={{ margin: 0, paddingLeft: 18, display: "flex", flexDirection: "column", gap: 6, ...style }}>
      {items.map((it, i) => <li key={i}>{it}</li>)}
    </ul>
  );
}

function DataTable({ cols, rows, theme, minWidth = 640, firstBold = true }) {
  return (
    <div data-lenis-prevent style={{ overflowX: "auto", borderRadius: 18, border: `1px solid ${theme.line}`, background: theme.card }}>
      <table style={{ width: "100%", minWidth, borderCollapse: "collapse", fontFamily: "Inter", fontSize: 14.5, lineHeight: 1.5, color: theme.inkSoft }}>
        <thead>
          <tr>
            {cols.map((c) => (
              <th key={c} scope="col" style={{ textAlign: "left", padding: "14px 18px", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: theme.inkMute, borderBottom: `1px solid ${theme.line}` }}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} style={{ borderTop: i ? `1px solid ${theme.line}` : "none" }}>
              {r.map((cell, j) => (
                <td key={j} style={{ padding: "14px 18px", verticalAlign: "top", color: j === 0 && firstBold ? theme.ink : undefined, fontWeight: j === 0 && firstBold ? 600 : 400 }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Dots({ n, theme }) {
  return (
    <span role="img" aria-label={`${n} of 3`} style={{ display: "inline-flex", gap: 5 }}>
      {[0, 1, 2].map((i) => (
        <span key={i} style={{ width: 11, height: 11, borderRadius: 99, background: i < n ? theme.ink : "transparent", border: `1.5px solid ${i < n ? theme.ink : theme.inkMute}`, boxSizing: "border-box" }} />
      ))}
    </span>
  );
}

// A scrollable window onto a full-length page design.
function ScrollFrame({ src, h, label, theme, shadow, maxH }) {
  return (
    <div
      data-lenis-prevent
      tabIndex={0}
      role="region"
      aria-label={`${label}, full page design (scrollable)`}
      style={{ maxHeight: maxH, overflowY: "auto", overscrollBehavior: "contain", outlineOffset: -3, borderRadius: 16, border: `1px solid ${theme.line}`, background: theme.card, boxShadow: shadow }}
    >
      <img src={src} width={1000} height={h} alt={`Full-length design of the Kiyarosa ${label}.`} loading="lazy" decoding="async" style={{ width: "100%", height: "auto", display: "block" }} />
    </div>
  );
}

function Section({ id, n, eyebrow, title, intro, children, alt, theme, isMobile }) {
  const sectionPad = isMobile ? "56px 4vw" : "96px 6vw";
  return (
    <section id={id} aria-labelledby={`${id}-title`} style={{ padding: sectionPad, background: alt ? theme.bgAlt : "transparent", borderTop: `1px solid ${theme.line}` }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Reveal>
          <Eyebrow color={theme.inkMute}>{String(n).padStart(2, "0")} · {eyebrow}</Eyebrow>
          <h2 id={`${id}-title`} style={{ fontFamily: "Inter", fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 500, letterSpacing: "-0.03em", color: theme.ink, margin: intro ? "0 0 14px" : 0, lineHeight: 1.2 }}>{title}</h2>
          {intro && <p style={{ fontFamily: "Inter", fontSize: isMobile ? 16 : 18, lineHeight: 1.65, color: theme.inkSoft, margin: 0, maxWidth: 820 }}>{intro}</p>}
        </Reveal>
        <div style={{ marginTop: isMobile ? 28 : 40 }}>{children}</div>
      </div>
    </section>
  );
}

/* ── Wireframes, rebuilt as simple blocks ── */

function WireBox({ children, n, theme, dashed, arch, style }) {
  return (
    <div style={{
      position: "relative", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center",
      padding: "6px 8px", minHeight: 26, borderRadius: arch ? "999px 999px 6px 6px" : 8,
      border: `1px ${dashed ? "dashed" : "solid"} ${theme.inkMute}`,
      background: dashed ? "transparent" : theme.bgAlt,
      fontFamily: "Inter", fontSize: 11.5, lineHeight: 1.3, color: theme.inkSoft, boxSizing: "border-box", ...style,
    }}>
      {n && <span style={{ position: "absolute", top: 4, left: 6, fontSize: 10, fontWeight: 700, color: theme.accent }}>{n}</span>}
      {children}
    </div>
  );
}

function Wireframe({ kind, theme }) {
  const row = (gap = 6) => ({ display: "flex", gap });
  const col = (gap = 6) => ({ display: "flex", flexDirection: "column", gap });
  const W = (p) => <WireBox theme={theme} {...p} />;
  let body;
  if (kind === "Homepage") body = (
    <div style={col(8)}>
      {W({ children: "Logo · pill nav · search · cart" })}
      {W({ n: "1", children: "Hero image + statement", style: { minHeight: 92 } })}
      <div style={row()}>{W({ n: "2", children: "Proof", style: { flex: 1, minHeight: 48 } })}{W({ dashed: true, children: "CTA", style: { flex: 1, minHeight: 48 } })}{W({ children: "Proof", style: { flex: 1, minHeight: 48 } })}</div>
      {W({ n: "3", children: "Trust strip" })}
      <div style={row()}>{["Cat", "Cat", "Cat", "Cat"].map((c, i) => <div key={i} style={{ flex: 1 }}>{W({ children: c, style: { minHeight: 40 } })}</div>)}</div>
      <div style={row()}>{[0, 1, 2, 3].map((i) => <div key={i} style={{ flex: 1 }}>{W({ arch: true, n: i === 0 ? "4" : undefined, children: "Concern", style: { minHeight: 52 } })}</div>)}</div>
    </div>
  );
  if (kind === "Shop") body = (
    <div style={col(8)}>
      {W({ children: "Header" })}
      <div style={row()}>{W({ n: "1", children: "Title + intro", style: { flex: 2, minHeight: 48 } })}{W({ children: "Offer image", style: { flex: 1, minHeight: 48 } })}</div>
      <div style={row(4)}>{[0, 1, 2, 3, 4].map((i) => <div key={i} style={{ flex: 1 }}>{W({ dashed: true, n: i === 0 ? "2" : undefined, children: "", style: { minHeight: 20, borderRadius: 99 } })}</div>)}</div>
      <div style={row(8)}>
        <div style={{ ...col(6), flex: 1 }}>{W({ n: "3", children: "Filters", style: { minHeight: 96 } })}{W({ dashed: true, children: "Quiz", style: { minHeight: 34 } })}</div>
        <div style={{ flex: 2.4, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 6 }}>
          {[0, 1, 2, 3, 4, 5].map((i) => <div key={i}>{i === 4 ? W({ dashed: true, n: "4", children: "Offer", style: { minHeight: 62 } }) : W({ children: "Product", style: { minHeight: 62 } })}</div>)}
        </div>
      </div>
      {W({ dashed: true, children: "Showing 8 of 59 · Load more" })}
    </div>
  );
  if (kind === "Product page") body = (
    <div style={col(8)}>
      {W({ children: "Header · breadcrumb" })}
      <div style={row(8)}>
        <div style={{ ...col(6), flex: 1 }}>
          {W({ n: "1", children: "Gallery", style: { minHeight: 150 } })}
          <div style={row(4)}>{[0, 1, 2, 3].map((i) => <div key={i} style={{ flex: 1 }}>{W({ children: "", style: { minHeight: 22 } })}</div>)}</div>
        </div>
        <div style={{ ...col(6), flex: 1 }}>
          {W({ n: "2", children: "Title · ingredients · rating", style: { minHeight: 40 } })}
          {W({ children: "Price · stock · COD" })}
          <div style={row(4)}>{W({ n: "3", dashed: true, children: "Single", style: { flex: 1 } })}{W({ dashed: true, children: "B2G1", style: { flex: 1 } })}</div>
          {W({ children: "Qty · Add to cart" })}
          {W({ dashed: true, children: "Buy it now" })}
          {W({ children: "Accordions", style: { minHeight: 34 } })}
        </div>
      </div>
      <div style={row()}>{[0, 1, 2, 3].map((i) => <div key={i} style={{ flex: 1 }}>{W({ n: i === 0 ? "4" : undefined, children: i === 0 ? "Ritual" : "", style: { minHeight: 44 } })}</div>)}</div>
    </div>
  );
  if (kind === "Checkout") body = (
    <div style={col(8)}>
      <div style={row()}>{W({ children: "Header · title", style: { flex: 2 } })}{W({ n: "1", dashed: true, children: "1 — 2 — 3", style: { flex: 1 } })}</div>
      <div style={row(8)}>
        <div style={{ ...col(6), flex: 1.6 }}>
          {W({ n: "2", children: "Contact", style: { minHeight: 52 } })}
          {W({ children: "Shipping address", style: { minHeight: 70 } })}
          {W({ n: "3", children: "Delivery options", style: { minHeight: 52 } })}
        </div>
        <div style={{ ...col(6), flex: 1 }}>
          {W({ n: "4", children: "Order summary", style: { minHeight: 80 } })}
          {W({ dashed: true, children: "Promo" })}
          {W({ children: "Continue" })}
          {W({ dashed: true, children: "Trust note", style: { minHeight: 40 } })}
        </div>
      </div>
    </div>
  );
  return (
    <div role="img" aria-label={`Low-fidelity wireframe of the ${kind}`} style={{ padding: 14, borderRadius: 16, border: `1px solid ${theme.line}`, background: theme.card }}>
      {body}
    </div>
  );
}

/* ── Prototype: pack selector + free-shipping meter ── */

const inr = (n) => `₹${n.toLocaleString("en-IN")}`;
const FREE_SHIPPING_AT = 999;
const MASK_PRICE = 500;
const PACKS = {
  single: { label: "Single", price: 350, bottles: 1 },
  bundle: { label: "Buy 2 Get 1 Free", price: 700, bottles: 3 },
};

function PackDemo({ theme, isDark, isMobile }) {
  const [pack, setPack] = useState("single");
  const [qty, setQty] = useState(1);
  const p = PACKS[pack];
  const line = p.price * qty;
  const bottles = p.bottles * qty;
  const subtotal = MASK_PRICE + line;
  const shipping = subtotal >= FREE_SHIPPING_AT ? 0 : 50;
  const gap = Math.max(0, FREE_SHIPPING_AT - subtotal);
  const pct = Math.min(100, Math.round((subtotal / FREE_SHIPPING_AT) * 100));
  const espresso = isDark ? theme.ink : "#2E2118";

  const option = (key) => {
    const o = PACKS[key]; const on = pack === key;
    return (
      <button
        key={key}
        type="button"
        aria-pressed={on}
        onClick={() => setPack(key)}
        data-cursor="hover"
        style={{ flex: 1, textAlign: "left", padding: "12px 16px", borderRadius: 14, cursor: "pointer", background: theme.card, color: theme.ink, border: `${on ? 2 : 1}px solid ${on ? espresso : theme.line}`, fontFamily: "Inter" }}
      >
        <span style={{ display: "block", fontSize: 15, fontWeight: 600 }}>{o.label}</span>
        <span style={{ display: "block", fontSize: 13, color: theme.inkSoft, marginTop: 2 }}>{inr(o.price)} · {o.bottles} {o.bottles === 1 ? "bottle" : "bottles"}</span>
      </button>
    );
  };
  const step = (delta, label, Icon) => (
    <button type="button" aria-label={label} onClick={() => setQty((q) => Math.min(9, Math.max(1, q + delta)))} disabled={(delta < 0 && qty === 1) || (delta > 0 && qty === 9)} data-cursor="hover"
      style={{ width: 36, height: 36, borderRadius: 99, border: "none", background: "transparent", color: theme.ink, cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", opacity: (delta < 0 && qty === 1) || (delta > 0 && qty === 9) ? 0.35 : 1 }}>
      <Icon size={16} aria-hidden="true" />
    </button>
  );
  const rowStyle = { display: "flex", justifyContent: "space-between", gap: 12, padding: "10px 0", borderTop: `1px solid ${theme.line}`, fontSize: 15 };

  return (
    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 16 }}>
      <Card theme={theme}>
        <Tag kind="proposed" isDark={isDark}>Try it: the pack selector and free-shipping meter, rebuilt</Tag>
        <div style={{ fontFamily: "Inter", fontSize: 21, fontWeight: 600, color: theme.ink, margin: "14px 0 6px" }}>Honey Saffron Face Wash</div>
        <div style={{ fontFamily: "Inter", fontSize: 13.5, color: theme.inkSoft, lineHeight: 1.5, marginBottom: 16 }}>Aloevera, Saffron, Neem, Honey, Glycerine · Avocado dead sea mask ({inr(MASK_PRICE)}) already in cart</div>
        <div role="group" aria-label="Pack" style={{ display: "flex", gap: 10, flexDirection: isMobile ? "column" : "row" }}>{option("single")}{option("bundle")}</div>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 14, flexWrap: "wrap" }}>
          <div role="group" aria-label="Quantity" style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "2px 6px", borderRadius: 99, border: `1px solid ${theme.line}` }}>
            {step(-1, "Decrease quantity", Minus)}
            <span aria-live="polite" style={{ minWidth: 20, textAlign: "center", fontFamily: "Inter", fontSize: 16, fontWeight: 600, color: theme.ink }}>{qty}</span>
            {step(1, "Increase quantity", Plus)}
          </div>
          <span style={{ padding: "10px 20px", borderRadius: 99, background: espresso, color: isDark ? theme.bg : "#fff", fontFamily: "Inter", fontSize: 14.5, fontWeight: 600 }}>Add to cart · {inr(line)}</span>
        </div>
        <div style={{ fontFamily: "Inter", fontSize: 13.5, color: theme.inkSoft, marginTop: 12 }}>{inr(Math.round(line / bottles))} per bottle · {bottles} {bottles === 1 ? "bottle" : "bottles"}</div>
      </Card>

      <Card theme={theme}>
        <div style={{ fontFamily: "Inter", fontSize: 21, fontWeight: 600, color: theme.ink, marginBottom: 12 }}>Your cart</div>
        <div aria-live="polite" style={{ fontFamily: "Inter", fontSize: 15, color: theme.ink, marginBottom: 10 }}>
          {gap > 0 ? <>You’re <strong>{inr(gap)}</strong> away from free shipping</> : <>You’ve unlocked <strong>free shipping</strong></>}
        </div>
        <div role="progressbar" aria-label="Progress to free shipping" aria-valuemin={0} aria-valuemax={100} aria-valuenow={pct} style={{ height: 8, borderRadius: 99, background: theme.bgAlt, overflow: "hidden", marginBottom: 18 }}>
          <div style={{ width: `${pct}%`, height: "100%", background: espresso, transition: "width .4s ease" }} />
        </div>
        <div style={{ fontFamily: "Inter", color: theme.inkSoft }}>
          <div style={rowStyle}><span>Avocado dead sea mask</span><span>{inr(MASK_PRICE)}</span></div>
          <div style={rowStyle}><span>Honey saffron face wash × {bottles}</span><span>{inr(line)}</span></div>
          <div style={rowStyle}><span>Shipping</span><span>{shipping ? inr(shipping) : "Free"}</span></div>
          <div style={{ ...rowStyle, fontSize: 17, fontWeight: 700, color: theme.ink }}><span>Total</span><span>{inr(subtotal + shipping)}</span></div>
        </div>
        <div style={{ fontFamily: "Inter", fontSize: 13, color: theme.inkMute, marginTop: 10, lineHeight: 1.5 }}>Defaults match the designed cart: ₹850 subtotal, ₹149 short of free shipping, ₹50 standard delivery, ₹900 total.</div>
      </Card>
    </div>
  );
}

/* ═══════════════════════ Page ═══════════════════════ */

export default function KiyarosaCaseStudy({ theme, mode, setRoute }) {
  const { isMobile, isMobileOrTablet } = useBreakpoint();
  const idx = projects.findIndex((p) => p.id === PROJECT_ID);
  const next = projects[(idx + 1) % projects.length];
  const isDark = mode === "dark";

  // The script face used for the typography sample.
  useEffect(() => {
    if (document.getElementById("kiyarosa-script-font")) return;
    const link = document.createElement("link");
    link.id = "kiyarosa-script-font"; link.rel = "stylesheet"; link.href = SCRIPT_FONT_URL;
    document.head.appendChild(link);
  }, []);

  const cols2 = isMobileOrTablet ? "1fr" : "1fr 1fr";
  const cols3 = isMobileOrTablet ? "1fr" : "repeat(3, 1fr)";
  const shadow = isDark ? "0 12px 40px rgba(0,0,0,0.45)" : "0 12px 40px rgba(0,0,0,0.07)";
  const cardTitle = { fontFamily: "Inter", fontSize: 18, fontWeight: 600, color: theme.ink, marginBottom: 8, letterSpacing: "-0.01em", lineHeight: 1.35 };
  const body = { fontFamily: "Inter", fontSize: 15.5, lineHeight: 1.6, color: theme.inkSoft };
  const label = { fontFamily: "Inter", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: theme.inkMute, margin: "14px 0 4px" };
  const frameMax = isMobile ? 420 : 560;

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (window.lenis) window.lenis.scrollTo(el, { offset: -90 });
    else el.scrollIntoView({ block: "start" });
  };

  const sp = { theme, isMobile };

  return (
    <div style={{ paddingTop: isMobile ? 100 : 130 }}>

      {/* ── HERO ── */}
      <section style={{ padding: isMobile ? "0 4vw 48px" : "0 6vw 72px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal>
            <button
              onClick={() => setRoute("projects")}
              data-cursor="hover"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", border: "none", fontFamily: "Inter", fontSize: 13.5, color: theme.inkSoft, cursor: "pointer", padding: "8px 6px", marginLeft: -6, marginBottom: 28, transition: "color 0.2s ease, transform 0.2s ease" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = theme.accent; e.currentTarget.style.transform = "translateX(-4px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = theme.inkSoft; e.currentTarget.style.transform = "translateX(0)"; }}
            >
              <ArrowRight size={14} style={{ transform: "rotate(180deg)" }} /> Back to all projects
            </button>
          </Reveal>
          <Reveal delay={0.05}><Eyebrow color={theme.inkMute}>UX/UI case study · Ayurvedic skincare e-commerce</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h1 style={{ fontFamily: "Inter", fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 500, letterSpacing: "-0.04em", color: theme.ink, margin: "0 0 18px", lineHeight: 1.1 }}>
              Kiyarosa: an Ayurvedic store built around{" "}
              <span style={{ fontFamily: "'Caveat', cursive", color: theme.accent, fontSize: "1.08em" }}>concerns</span>
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p style={{ ...body, fontSize: isMobile ? 16 : 19, margin: 0, maxWidth: 820 }}>
              The work needed a store that feels like the brand, which is warm, botanical and rooted in Ayurveda. It also had to work as well as the big marketplaces Indian shoppers already use.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)", gap: isMobile ? 20 : 32, marginTop: isMobile ? 36 : 52, paddingTop: isMobile ? 24 : 32, borderTop: `1px solid ${theme.line}` }}>
              {META.map((m) => (
                <div key={m.k}>
                  <div style={{ fontFamily: "Inter", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: theme.inkMute, marginBottom: 6 }}>{m.k}</div>
                  <div style={{ fontFamily: "Inter", fontSize: isMobile ? 14 : 15.5, fontWeight: 500, color: theme.ink, lineHeight: 1.4 }}>{m.v}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.25}>
            <div style={{ marginTop: isMobile ? 36 : 56, borderRadius: 20, overflow: "hidden", border: `1px solid ${theme.line}`, boxShadow: shadow }}>
              <img src={heroImg} width={2000} height={875} alt="The top of the Kiyarosa homepage: a pill navigation bar with a NEW badge on Concerns, and a hero photo of brass bowls of turmeric, saffron, sandalwood and aloe under the tagline “Nature, Refined Into Beauty.”" fetchpriority="high" decoding="async" style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <nav aria-label="Case study sections" style={{ marginTop: isMobile ? 28 : 40 }}>
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
      <Section {...sp} n={1} id="overview" eyebrow="The brief" title="Project overview" alt>
        <Reveal>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
            <Tag kind="designs" isDark={isDark}>From the designs: seen in the screens</Tag>
            <Tag kind="proposed" isDark={isDark}>Proposed: a plan, not yet run</Tag>
            <Tag kind="assumption" isDark={isDark}>Assumption: filled in where the files are silent</Tag>
          </div>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: cols2, gap: 16 }}>
          <Reveal><Card theme={theme}><Tag kind="designs" isDark={isDark}>From the designs</Tag><div style={{ ...cardTitle, marginTop: 12 }}>The product</div><div style={body}>Kiyarosa sells 59 products in four collections: Oil &amp; Hair (12), Lip &amp; Make Up (16), Body Care (18) and Face Cream (13). The range is also mapped to six concerns: uneven tone, acne, oiliness, wrinkles, hair fall and dandruff. Prices run from ₹300 to ₹800. The store offers free shipping over ₹999, cash on delivery across India, and a standing Buy 2 Get 1 Free offer.</div></Card></Reveal>
          <Reveal delay={0.05}><Card theme={theme}><Tag kind="assumption" isDark={isDark}>Assumption</Tag><div style={{ ...cardTitle, marginTop: 12 }}>Background</div><div style={body}>The files don’t include a written brief. I’ve assumed a direct-to-consumer brand moving from marketplaces and social selling to its own store, with three needs: tell the Ayurvedic story, help shoppers who arrive with a skin or scalp problem, and make paying feel safe for people who often prefer cash on delivery.</div></Card></Reveal>
          <Reveal><Card theme={theme}><div style={cardTitle}>Project goals</div><Bullets items={GOALS} style={body} /></Card></Reveal>
          <Reveal delay={0.05}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12, height: "100%" }}>
              {STATS.map((s, i) => (
                <div key={s.n + s.t} style={{ padding: "18px 20px", borderRadius: 16, background: theme.card, border: `1px solid ${theme.line}`, gridColumn: i === 4 ? "1 / -1" : undefined }}>
                  <div style={{ fontFamily: "Inter", fontSize: 34, fontWeight: 600, letterSpacing: "-0.03em", color: theme.ink, lineHeight: 1 }}>{s.n}</div>
                  <div style={{ ...body, fontSize: 14, marginTop: 6, lineHeight: 1.45 }}>{s.t}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal><Card theme={theme}><div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 8 }}><span style={{ ...cardTitle, marginBottom: 0 }}>My role</span><Tag kind="assumption" isDark={isDark}>Assumption</Tag></div><div style={body}>I worked as the sole designer, covering the information architecture, the four homepage concepts, the visual direction and UI for all 20 final screens, and the component patterns that tie them together.</div></Card></Reveal>
          <Reveal delay={0.05}><Card theme={theme}><div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 8 }}><span style={{ ...cardTitle, marginBottom: 0 }}>Timeline</span><Tag kind="assumption" isDark={isDark}>Assumption</Tag></div><ul style={{ ...body, margin: 0, paddingLeft: 18, display: "flex", flexDirection: "column", gap: 6 }}>{TIMELINE.map(([w, t]) => <li key={w}><strong style={{ color: theme.ink, fontWeight: 600 }}>{w}:</strong> {t}</li>)}</ul></Card></Reveal>
        </div>
      </Section>

      {/* 2 ── PROBLEM */}
      <Section {...sp} n={2} id="problem" eyebrow="The problem" title="Problem statement" intro="People shopping for Ayurvedic skincare usually know their problem but not the product. They meet ingredients they can’t pronounce, and they have to trust a natural claim they can’t check through a screen.">
        <Reveal>
          <Card theme={theme} style={{ borderLeft: `4px solid ${theme.accent}` }}>
            <div style={cardTitle}>Core problem</div>
            <p style={{ ...body, fontSize: 17, margin: "0 0 10px", color: theme.ink }}>Shoppers looking for natural, Ayurvedic care struggle to find the right product online. Most stores are organised by product type when shoppers think in concerns. Ingredient claims are vague, and urgency-driven promotions undercut the trust a natural brand depends on.</p>
            <p style={{ ...body, margin: 0 }}>Kiyarosa needs a store that answers “what will help my skin?” and “can I trust this?” before it asks for a payment.</p>
          </Card>
        </Reveal>
        <Reveal><div style={{ margin: "28px 0 14px" }}><Tag kind="assumption" isDark={isDark}>Assumption: pain points are hypotheses to validate in research</Tag></div></Reveal>
        <div style={{ display: "grid", gridTemplateColumns: cols3, gap: 16 }}>
          {PAINS.map((p, i) => (
            <Reveal key={p.t} delay={0.04 * (i % 3)}><Card theme={theme}><div style={cardTitle}>{p.t}</div><div style={body}>{p.d}</div></Card></Reveal>
          ))}
        </div>
        <Reveal>
          <div style={{ marginTop: 36 }}>
            <div style={{ ...cardTitle, fontSize: 20 }}>How might we…</div>
            <div style={{ display: "grid", gridTemplateColumns: cols2, gap: 12, marginTop: 12 }}>
              {HMW.map((h) => <div key={h} style={{ ...body, padding: "16px 20px", borderRadius: 14, background: theme.bgAlt, color: theme.ink }}>{h}</div>)}
            </div>
          </div>
        </Reveal>
      </Section>

      {/* 3 ── RESEARCH */}
      <Section {...sp} n={3} id="research" eyebrow="Discovery" title="Research & discovery" intro="No user research came with the design files, so this section is a research plan plus the working hypotheses the design was built on. None of it is presented as findings." alt>
        <Reveal><div style={{ marginBottom: 14 }}><Tag kind="proposed" isDark={isDark}>Proposed research plan</Tag></div></Reveal>
        <Reveal><DataTable cols={RESEARCH_PLAN.cols} rows={RESEARCH_PLAN.rows} theme={theme} minWidth={720} /></Reveal>
        <div style={{ display: "grid", gridTemplateColumns: cols2, gap: 16, marginTop: 24 }}>
          <Reveal><Card theme={theme}><div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 8 }}><span style={{ ...cardTitle, marginBottom: 0 }}>Competitor analysis</span><Tag kind="proposed" isDark={isDark}>Proposed benchmark set</Tag></div><p style={{ ...body, margin: "0 0 10px" }}>Brands to audit: Forest Essentials, Kama Ayurveda, Just Herbs and Biotique for Ayurvedic positioning. Mamaearth and Minimalist for how mass and ingredient-led brands run their stores. For each one, look at:</p><Bullets items={AUDIT_QUESTIONS} style={body} /></Card></Reveal>
          <Reveal delay={0.05}><Card theme={theme}><div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 8 }}><span style={{ ...cardTitle, marginBottom: 0 }}>What the design bets on</span><Tag kind="assumption" isDark={isDark}>Working hypotheses, to validate</Tag></div><ul style={{ ...body, listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>{HYPOTHESES.map(([h, t]) => <li key={h} style={{ display: "flex", gap: 10 }}><strong style={{ color: theme.accent, minWidth: 24 }}>{h}</strong><span>{t}</span></li>)}</ul></Card></Reveal>
        </div>
      </Section>

      {/* 4 ── PERSONAS */}
      <Section {...sp} n={4} id="personas" eyebrow="Who it’s for" title="Target audience & personas" intro="The audience is adults across India who prefer natural, Ayurvedic care, shop on their phones and laptops, and expect UPI or cash on delivery. These three personas are hypothetical, written from the brief and the screens, to be replaced after interviews.">
        <Reveal><div style={{ marginBottom: 14 }}><Tag kind="assumption" isDark={isDark}>Hypothetical personas</Tag></div></Reveal>
        <div style={{ display: "grid", gridTemplateColumns: cols3, gap: 16 }}>
          {PERSONAS.map((p, i) => (
            <Reveal key={p.name} delay={0.05 * i}>
              <Card theme={theme}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                  <span aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 99, background: theme.bgAlt, color: theme.ink, display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: "Inter", fontWeight: 700, fontSize: 17 }}>{p.name[0]}</span>
                  <div>
                    <div style={{ ...cardTitle, marginBottom: 0 }}>{p.name}, {p.age}</div>
                    <div style={{ ...body, fontSize: 14 }}>{p.role}</div>
                  </div>
                </div>
                <blockquote style={{ margin: 0, fontFamily: "Inter", fontSize: 15.5, lineHeight: 1.55, color: theme.ink, fontStyle: "italic" }}>“{p.quote}”</blockquote>
                {[["Goals", p.goals], ["Behaviours", p.behaviours], ["Frustrations", p.frustrations], ["Design answer", p.answer]].map(([k, v]) => (
                  <div key={k}><div style={label}>{k}</div><div style={{ ...body, fontSize: 14.5 }}>{v}</div></div>
                ))}
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 5 ── JOURNEY */}
      <Section {...sp} n={5} id="journey" eyebrow="End to end" title="User journey map" intro="Meera’s first purchase, from an Instagram ad to a reorder. The emotion line is a hypothesis. It marks where doubt is likely, so the design can add proof or reassurance at those points." alt>
        <Reveal><div style={{ marginBottom: 14 }}><Tag kind="assumption" isDark={isDark}>Hypothetical journey for persona Meera</Tag></div></Reveal>
        <Reveal>
          <div data-lenis-prevent style={{ overflowX: "auto", borderRadius: 18, border: `1px solid ${theme.line}`, background: theme.card }}>
            <div style={{ minWidth: 720, display: "grid", gridTemplateColumns: "150px repeat(3, 1fr)", fontFamily: "Inter", fontSize: 14.5, lineHeight: 1.5 }}>
              {(() => {
                const cell = (content, key, extra = {}) => <div key={key} style={{ padding: "14px 18px", borderTop: `1px solid ${theme.line}`, borderLeft: `1px solid ${theme.line}`, color: theme.inkSoft, ...extra }}>{content}</div>;
                const head = (t, key) => <div key={key} style={{ padding: "14px 18px", borderTop: `1px solid ${theme.line}`, fontWeight: 600, color: theme.ink }}>{t}</div>;
                const out = [];
                out.push(<div key="h0" style={{ padding: "14px 18px", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: theme.inkMute }}>Stage</div>);
                JOURNEY.forEach((j, i) => out.push(<div key={`h${i + 1}`} style={{ padding: "14px 18px", borderLeft: `1px solid ${theme.line}` }}><div style={{ fontWeight: 600, color: theme.ink }}>{j.stage}</div><div style={{ fontSize: 13, color: theme.inkMute }}>{j.sub}</div></div>));
                out.push(head("Doing", "d")); JOURNEY.forEach((j, i) => out.push(cell(j.doing, `d${i}`)));
                out.push(head("Thinking", "t")); JOURNEY.forEach((j, i) => out.push(cell(j.thinking, `t${i}`, { color: theme.ink, fontStyle: "italic" })));
                out.push(head("Feeling", "f"));
                out.push(
                  <div key="fline" style={{ gridColumn: "2 / -1", borderTop: `1px solid ${theme.line}`, borderLeft: `1px solid ${theme.line}`, padding: "12px 0 10px" }}>
                    <svg viewBox="0 0 300 60" preserveAspectRatio="none" aria-hidden="true" style={{ width: "100%", height: 56, display: "block" }}>
                      <line x1="0" y1="30" x2="300" y2="30" stroke={theme.inkMute} strokeDasharray="3 4" strokeWidth="1" vectorEffect="non-scaling-stroke" />
                      <polyline points={JOURNEY.map((j, i) => `${50 + i * 100},${50 - j.level * 20}`).join(" ")} fill="none" stroke={theme.ink} strokeWidth="2" vectorEffect="non-scaling-stroke" />
                    </svg>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", textAlign: "center", fontSize: 13.5, color: theme.inkSoft }}>{JOURNEY.map((j) => <span key={j.feeling}>{j.feeling}</span>)}</div>
                  </div>
                );
                out.push(head("Pain points", "p")); JOURNEY.forEach((j, i) => out.push(cell(j.pain, `p${i}`, { color: isDark ? "#F2A28F" : "#9A3B26" })));
                out.push(head("Opportunity → design", "o")); JOURNEY.forEach((j, i) => out.push(cell(j.opp, `o${i}`, { color: isDark ? "#A6D190" : "#3E6B2F" })));
                return out;
              })()}
            </div>
          </div>
        </Reveal>
      </Section>

      {/* 6 ── IA */}
      <Section {...sp} n={6} id="ia" eyebrow="Structure" title="Information architecture" intro="The catalogue has two equal ways in, by category and by concern, plus a plain “all products” view with filters. All three lead to the same product card and product page. Story and Journal sit at the same level as Shop, so the brand isn’t buried in the footer.">
        <Reveal><div style={{ marginBottom: 14 }}><Tag kind="designs" isDark={isDark}>From the designs: header, footer and pages</Tag></div></Reveal>
        <Reveal>
          <div style={{ padding: isMobile ? 18 : 28, borderRadius: 18, border: `1px solid ${theme.line}`, background: theme.card }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 18 }}>
              <span style={{ padding: "8px 28px", borderRadius: 12, border: `1.5px solid ${theme.ink}`, fontFamily: "Inter", fontWeight: 600, color: theme.ink }}>Home</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(5, 1fr)", gap: 14 }}>
              {IA.map((c) => (
                <div key={c.t} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <span style={{ padding: "9px 10px", borderRadius: 12, border: `1.5px solid ${theme.ink}`, textAlign: "center", fontFamily: "Inter", fontWeight: 600, color: theme.ink }}>
                    {c.t}{c.badge && <span style={{ marginLeft: 6, padding: "1px 6px", borderRadius: 99, background: theme.ink, color: theme.bg, fontSize: 10, fontWeight: 700, verticalAlign: 2 }}>{c.badge}</span>}
                  </span>
                  {c.items.map((it) => <span key={it} style={{ ...body, fontSize: 14, textAlign: "center", lineHeight: 1.4 }}>{it}</span>)}
                </div>
              ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: 14, marginTop: 24, paddingTop: 18, borderTop: `1px dashed ${theme.line}` }}>
              {IA_GLOBAL.map(([k, v]) => <div key={k}><div style={{ fontFamily: "Inter", fontSize: 13.5, fontWeight: 700, color: theme.ink, marginBottom: 4 }}>{k}</div><div style={{ ...body, fontSize: 14.5 }}>{v}</div></div>)}
            </div>
          </div>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: cols3, gap: 16, marginTop: 16 }}>
          {IA_PRINCIPLES.map((p, i) => <Reveal key={p.t} delay={0.05 * i}><Card theme={theme}><div style={cardTitle}>{p.t}</div><div style={body}>{p.d}</div></Card></Reveal>)}
        </div>
      </Section>

      {/* 7 ── FLOWS */}
      <Section {...sp} n={7} id="flows" eyebrow="Task paths" title="User flows" intro="Four key tasks, traced through the screens as they’re designed. Dashed boxes are decision points. Green marks the end of the task." alt>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {FLOWS.map((f) => (
            <Reveal key={f.t}>
              <div style={{ ...cardTitle, fontSize: 19, marginBottom: 12 }}>{f.t} <span style={{ fontWeight: 400, color: theme.inkMute }}>· {f.who}</span></div>
              <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 8 }}>
                {f.steps.map(([kind, t, s], i) => {
                  const green = isDark ? "#A6D190" : "#3E6B2F";
                  return (
                    <li key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ display: "inline-block", padding: "10px 14px", borderRadius: 12, background: kind === "decision" ? "transparent" : theme.card, border: `1.5px ${kind === "decision" ? "dashed" : "solid"} ${kind === "end" ? green : theme.inkMute}`, fontFamily: "Inter" }}>
                        <span style={{ display: "block", fontSize: 14.5, fontWeight: 600, color: kind === "end" ? green : theme.ink }}>{kind === "decision" && <span className="sr-only" style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }}>Decision: </span>}{t}</span>
                        {s && <span style={{ display: "block", fontSize: 13, color: theme.inkSoft, marginTop: 2 }}>{s}</span>}
                      </span>
                      {i < f.steps.length - 1 && <ArrowRight size={16} color={theme.inkMute} aria-hidden="true" />}
                    </li>
                  );
                })}
              </ol>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 8 ── IDEATION */}
      <Section {...sp} n={8} id="ideation" eyebrow="Four directions" title="Ideation & UX strategy" intro="Instead of polishing one idea, I designed four complete homepages. Each one tests a different answer to the same question: what should Kiyarosa feel like, and what should the homepage do first? Scroll inside each frame to see the full page.">
        <Reveal><div style={{ marginBottom: 14 }}><Tag kind="designs" isDark={isDark}>From the designs: all four homepage files</Tag></div></Reveal>
        <div style={{ display: "grid", gridTemplateColumns: cols2, gap: isMobile ? 28 : 32 }}>
          {DIRECTIONS.map((d, i) => (
            <Reveal key={d.v} delay={0.04 * (i % 2)}>
              <div>
                <ScrollFrame src={d.img} h={d.h} label={`${d.v} homepage`} theme={theme} shadow={shadow} maxH={frameMax} />
                <div style={{ marginTop: 16 }}>
                  <div style={{ fontFamily: "Inter", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: theme.inkMute }}>{d.v}</div>
                  <div style={{ ...cardTitle, fontSize: 21, margin: "4px 0 8px" }}>{d.name}{d.chosen && <span style={{ marginLeft: 10, padding: "2px 10px", borderRadius: 99, background: theme.accent, color: "#fff", fontSize: 12, fontWeight: 600, verticalAlign: 3 }}>Chosen</span>}</div>
                  <div style={body}>{d.d}</div>
                  <div style={label}>Worked</div><div style={body}>{d.worked}</div>
                  <div style={label}>{d.risk[0]}</div><div style={body}>{d.risk[1]}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div style={{ marginTop: isMobile ? 48 : 72 }}>
            <div style={{ ...cardTitle, fontSize: 22 }}>From review to decision</div>
            <p style={{ ...body, margin: "0 0 18px", maxWidth: 760 }}>The review comments themselves aren’t in the files. The matrix below is my own assessment, written to explain why the final direction fits the brief.</p>
            <div data-lenis-prevent style={{ overflowX: "auto", borderRadius: 18, border: `1px solid ${theme.line}`, background: theme.card }}>
              <table style={{ width: "100%", minWidth: 620, borderCollapse: "collapse", fontFamily: "Inter", fontSize: 14.5, color: theme.inkSoft }}>
                <thead><tr>{["Criterion", ...MATRIX.cols].map((c, i) => <th key={c} scope="col" style={{ textAlign: i ? "center" : "left", padding: "14px 18px", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: c === "Final" ? theme.ink : theme.inkMute, borderBottom: `1px solid ${theme.line}` }}>{c}</th>)}</tr></thead>
                <tbody>
                  {MATRIX.rows.map(([crit, scores], r) => (
                    <tr key={crit} style={{ borderTop: r ? `1px solid ${theme.line}` : "none" }}>
                      <th scope="row" style={{ textAlign: "left", padding: "13px 18px", fontWeight: 500, color: theme.ink }}>{crit}</th>
                      {scores.map((s, i) => <td key={i} style={{ textAlign: "center", padding: "13px 18px", background: i === 3 ? theme.bgAlt : "transparent" }}><Dots n={s} theme={theme} /></td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: cols3, gap: 16, marginTop: 24 }}>
          {KEPT.map(([t, d], i) => <Reveal key={t} delay={0.05 * i}><Card theme={theme}><div style={cardTitle}>{t}</div><div style={body}>{d}</div></Card></Reveal>)}
        </div>

        <Reveal><div style={{ ...cardTitle, fontSize: 22, marginTop: isMobile ? 48 : 72 }}>UX strategy: six principles</div></Reveal>
        <div style={{ display: "grid", gridTemplateColumns: cols3, gap: 16, marginTop: 8 }}>
          {PRINCIPLES.map(([t, d], i) => (
            <Reveal key={t} delay={0.04 * (i % 3)}>
              <Card theme={theme}>
                <div style={{ display: "flex", gap: 10, alignItems: "baseline" }}><span style={{ fontFamily: "Inter", fontSize: 14, fontWeight: 700, color: theme.accent }}>{i + 1}</span><span style={cardTitle}>{t}</span></div>
                <div style={body}>{d}</div>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginTop: isMobile ? 48 : 72, marginBottom: 12 }}>
            <span style={{ ...cardTitle, fontSize: 22, marginBottom: 0 }}>Feature prioritisation</span>
            <Tag kind="designs" isDark={isDark}>Scope inferred from the screens</Tag>
          </div>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: isMobileOrTablet ? "1fr 1fr" : "repeat(4, 1fr)", gap: 16 }}>
          {MOSCOW.map(([t, items], i) => <Reveal key={t} delay={0.04 * i}><Card theme={theme}><div style={cardTitle}>{t}</div><Bullets items={items} style={{ ...body, fontSize: 14.5 }} /></Card></Reveal>)}
        </div>
      </Section>

      {/* 9 ── WIREFRAMES */}
      <Section {...sp} n={9} id="wireframes" eyebrow="Structure first" title="Wireframing" intro="Low-fidelity layouts for the four pages that carry the most weight. They lock in hierarchy and placement before any colour or imagery. These are reconstructed from the final layouts to show the structure underneath them." alt>
        <Reveal><div style={{ marginBottom: 14 }}><Tag kind="assumption" isDark={isDark}>Reconstructed low-fidelity wireframes</Tag></div></Reveal>
        <div style={{ display: "grid", gridTemplateColumns: isMobileOrTablet ? "1fr" : "repeat(2, 1fr)", gap: isMobile ? 28 : 32 }}>
          {Object.entries(WIRE_NOTES).map(([kind, notes], i) => (
            <Reveal key={kind} delay={0.04 * (i % 2)}>
              <div>
                <Wireframe kind={kind} theme={theme} />
                <div style={{ ...cardTitle, marginTop: 16 }}>{kind}</div>
                <ol style={{ ...body, margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 4 }}>{notes.map((n) => <li key={n}>{n}</li>)}</ol>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 10 ── VISUAL */}
      <Section {...sp} n={10} id="visual" eyebrow="Visual language" title="UI design & visual direction" intro="The look takes its cues from the products themselves: roasted coffee, sandalwood, raw clay and cream. Dark espresso grounds the page, sand gives it air, and a handwritten script adds a human touch next to strict uppercase titles.">
        <Reveal><div style={{ marginBottom: 14 }}><Tag kind="designs" isDark={isDark}>Colours sampled from the final files</Tag></div></Reveal>
        <Reveal>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(6, 1fr)", gap: 12 }}>
            {SWATCHES.map(([n, hex, use]) => (
              <div key={n} style={{ borderRadius: 16, overflow: "hidden", border: `1px solid ${theme.line}`, background: theme.card }}>
                <div aria-hidden="true" style={{ height: isMobile ? 70 : 96, background: hex, borderBottom: `1px solid ${theme.line}` }} />
                <div style={{ padding: "12px 14px", fontFamily: "Inter" }}>
                  <div style={{ fontSize: 14.5, fontWeight: 600, color: theme.ink }}>{n}</div>
                  <div style={{ fontSize: 12.5, color: theme.inkMute, fontFamily: "ui-monospace, Menlo, monospace", margin: "2px 0 4px" }}>{hex}</div>
                  <div style={{ fontSize: 13, color: theme.inkSoft, lineHeight: 1.4 }}>{use}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: cols3, gap: 16, marginTop: 16 }}>
          <Reveal>
            <Card theme={theme}>
              <div style={cardTitle}>Typography</div>
              {[
                ["Script eyebrow", <span style={{ fontFamily: "'Italianno', cursive", fontSize: 34, lineHeight: 1, color: theme.ink }}>collections</span>],
                ["Section title · Inter 800, caps", <span style={{ fontFamily: "Inter", fontWeight: 800, fontSize: 22, letterSpacing: "-0.01em", color: theme.ink }}>SHOP BY CATEGORY</span>],
                ["Statement · Inter 600", <span style={{ fontFamily: "Inter", fontWeight: 600, fontSize: 19, color: theme.ink }}>Rooted in Ayurvedic wisdom.</span>],
                ["Body · Inter 400", <span style={{ fontFamily: "Inter", fontSize: 15.5, color: theme.ink }}>Pure botanicals sourced directly from nature.</span>],
                ["Meta · Inter 400", <span style={{ fontFamily: "Inter", fontSize: 13, color: theme.inkSoft }}>Aloevera, Saffron, Neem, Honey</span>],
              ].map(([k, v], i) => (
                <div key={k} style={{ padding: "10px 0", borderTop: i ? `1px solid ${theme.line}` : "none" }}>
                  <div style={{ fontFamily: "Inter", fontSize: 12, color: theme.inkMute, marginBottom: 4 }}>{k}</div>{v}
                </div>
              ))}
              <div style={{ ...body, fontSize: 13.5, color: theme.inkMute, marginTop: 8 }}>Inter is the brand font. The script sample is set in Italianno, standing in for the handwritten script used in the designs.</div>
            </Card>
          </Reveal>
          <Reveal delay={0.05}>
            <Card theme={theme}>
              <div style={cardTitle}>Contrast check</div>
              <div style={{ ...body, marginBottom: 10 }}>Worked out from the sampled colours with the WCAG 2.1 formula.</div>
              <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "Inter", fontSize: 14.5, color: theme.inkSoft }}>
                <thead><tr>{["Pair", "Ratio", "Result"].map((c) => <th key={c} scope="col" style={{ textAlign: "left", padding: "8px 6px 8px 0", fontSize: 12, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: theme.inkMute, borderBottom: `1px solid ${theme.line}` }}>{c}</th>)}</tr></thead>
                <tbody>{CONTRAST.map(([p, r]) => <tr key={p} style={{ borderTop: `1px solid ${theme.line}` }}><td style={{ padding: "10px 6px 10px 0" }}>{p}</td><td style={{ padding: "10px 6px 10px 0", whiteSpace: "nowrap" }}>{r}</td><td style={{ padding: "10px 0", fontWeight: 600, color: theme.ink }}>AAA</td></tr>)}</tbody>
              </table>
            </Card>
          </Reveal>
          <Reveal delay={0.1}><Card theme={theme}><div style={cardTitle}>Spacing &amp; shape</div><Bullets items={SPACING} style={body} /></Card></Reveal>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: isMobileOrTablet ? "1fr" : "repeat(4, 1fr)", gap: 16, marginTop: 16 }}>
          {VISUAL_PRINCIPLES.map(([t, d], i) => <Reveal key={t} delay={0.04 * i}><Card theme={theme}><div style={cardTitle}>{t}</div><div style={body}>{d}</div></Card></Reveal>)}
        </div>
      </Section>

      {/* 11 ── PROTOTYPE */}
      <Section {...sp} n={11} id="prototype" eyebrow="Make it move" title="Prototyping" intro="The screens imply a clickable desktop prototype that links all 20 frames. Below is the interaction list, the scenarios it should cover, and a small working rebuild of the product page and cart logic." alt>
        <Reveal><PackDemo theme={theme} isDark={isDark} isMobile={isMobile} /></Reveal>
        <div style={{ display: "grid", gridTemplateColumns: cols2, gap: 16, marginTop: 16 }}>
          <Reveal><Card theme={theme}><div style={cardTitle}>Key interactions</div><Bullets items={INTERACTIONS} style={body} /></Card></Reveal>
          <Reveal delay={0.05}>
            <Card theme={theme}>
              <div style={cardTitle}>Scenarios to prototype</div>
              <ul style={{ ...body, margin: 0, paddingLeft: 18, display: "flex", flexDirection: "column", gap: 6 }}>{SCENARIOS.map(([k, v]) => <li key={k}><strong style={{ color: theme.ink, fontWeight: 600 }}>{k}:</strong> {v}</li>)}</ul>
              <div style={{ ...body, fontSize: 13.5, color: theme.inkMute, marginTop: 12 }}>This list describes the intended behaviour; prototype links and animations aren’t part of the exported files.</div>
            </Card>
          </Reveal>
        </div>
      </Section>

      {/* 12 ── TESTING */}
      <Section {...sp} n={12} id="testing" eyebrow="Validate" title="Usability testing" intro="No usability study was run on these files. Below are a test plan ready to run, and a heuristic review I did of the final screens. The review findings are real issues I can see in the designs, not participant results.">
        <Reveal><div style={{ marginBottom: 14 }}><Tag kind="proposed" isDark={isDark}>Proposed test plan</Tag></div></Reveal>
        <div style={{ display: "grid", gridTemplateColumns: cols2, gap: 16 }}>
          <Reveal><Card theme={theme}><div style={cardTitle}>Approach</div><Bullets items={TEST_APPROACH} style={body} /></Card></Reveal>
          <Reveal delay={0.05}><Card theme={theme}><div style={cardTitle}>Tasks</div><ul style={{ ...body, listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>{TEST_TASKS.map(([k, v]) => <li key={k} style={{ display: "flex", gap: 10 }}><strong style={{ color: theme.accent, minWidth: 24 }}>{k}</strong><span>{v}</span></li>)}</ul></Card></Reveal>
        </div>
        <Reveal>
          <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", margin: "36px 0 14px" }}>
            <span style={{ ...cardTitle, fontSize: 22, marginBottom: 0 }}>Heuristic review of the final screens</span>
            <Tag kind="designs" isDark={isDark}>Observed in the files</Tag>
          </div>
        </Reveal>
        <Reveal><DataTable cols={HEURISTICS.cols} rows={HEURISTICS.rows} theme={theme} minWidth={820} firstBold={false} /></Reveal>
        <Reveal>
          <Card theme={theme} style={{ marginTop: 16, borderLeft: `4px solid ${theme.accent}` }}>
            <div style={cardTitle}>The real iteration: four directions → one</div>
            <div style={body}>The clearest iteration in this project is visible in the files. Four homepages were explored and reviewed, and one was refined, keeping the strongest idea from each of the others (see section 8). The fixes in the table are the next round I’d do before testing, so participants don’t trip on labels and spend their time on the flows.</div>
          </Card>
        </Reveal>
      </Section>

      {/* 13 ── FINAL DESIGN */}
      <Section {...sp} n={13} id="final" eyebrow="The result" title="Final design & solution" intro="All 20 final screens, grouped by the job they do for the shopper. Scroll inside a frame to see the whole page. Each note links a decision back to the problem it solves." alt>
        <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 56 : 80 }}>
          {SCREEN_GROUPS.map((g) => (
            <div key={g.t}>
              <Reveal>
                <div style={{ ...cardTitle, fontSize: 26, marginBottom: 4 }}>{g.t}</div>
                <div style={{ ...body, marginBottom: 24 }}>{g.d}</div>
              </Reveal>
              <div style={{ display: "grid", gridTemplateColumns: cols2, gap: isMobile ? 32 : 32, alignItems: "start" }}>
                {g.screens.map((s, i) => (
                  <Reveal key={s.name} delay={0.04 * (i % 2)}>
                    <div>
                      <div style={{ fontFamily: "ui-monospace, Menlo, monospace", fontSize: 12.5, color: theme.inkMute, margin: "0 0 8px 4px" }}>{s.url}</div>
                      <ScrollFrame src={s.img} h={s.h} label={`${s.name} page`} theme={theme} shadow={shadow} maxH={frameMax} />
                      <div style={{ ...cardTitle, marginTop: 16 }}>{s.name}</div>
                      <Bullets items={s.points} style={{ ...body, fontSize: 15 }} />
                      <div style={{ ...body, fontSize: 15, marginTop: 10, color: theme.ink }}><strong style={{ fontWeight: 600 }}>Why it matters:</strong> {s.why}</div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 14 ── DECISIONS */}
      <Section {...sp} n={14} id="decisions" eyebrow="The why" title="Design decisions & UX rationale" intro="The choices that matter most, each tied to the pain point it addresses.">
        <Reveal><DataTable cols={DECISIONS.cols} rows={DECISIONS.rows} theme={theme} minWidth={720} /></Reveal>
      </Section>

      {/* 15 ── LEARNINGS */}
      <Section {...sp} n={15} id="learnings" eyebrow="Looking back" title="Challenges & learnings" intro="What was hard, how I handled it, and what I’d keep doing." alt>
        <div style={{ display: "grid", gridTemplateColumns: cols2, gap: 16 }}>
          {CHALLENGES.map(([t, d], i) => <Reveal key={t} delay={0.04 * (i % 2)}><Card theme={theme}><div style={cardTitle}>{t}</div><div style={body}>{d}</div></Card></Reveal>)}
          <Reveal delay={0.04}><Card theme={theme} style={{ background: theme.bg }}><div style={cardTitle}>Key takeaways</div><Bullets items={TAKEAWAYS} style={body} /></Card></Reveal>
        </div>
      </Section>

      {/* 16 ── WHAT'S NEXT */}
      <Section {...sp} n={16} id="next" eyebrow="What’s next" title="Conclusion & future improvements">
        <Reveal>
          <p style={{ ...body, fontSize: isMobile ? 17 : 20, lineHeight: 1.6, color: theme.ink, margin: 0, maxWidth: 880 }}>
            Kiyarosa now has a store that tells its Ayurvedic story and still covers the full shopping job: two ways into the catalogue, proof before purchase, one honest offer, and a checkout built around UPI and cash on delivery. The next step is to measure it with real shoppers.
          </p>
        </Reveal>
      </Section>

      {/* ── NEXT CASE ── */}
      {next && next.id !== PROJECT_ID && (
        <section style={{ padding: isMobile ? "24px 4vw 80px" : "32px 6vw 120px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <Reveal>
              <button
                onClick={() => setRoute(`project:${next.id}`)}
                data-cursor="hover"
                style={{ width: "100%", textAlign: "left", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, padding: isMobile ? "24px 22px" : "36px 40px", borderRadius: 22, background: theme.card, border: `1px solid ${theme.line}`, color: theme.ink, fontFamily: "Inter" }}
              >
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
