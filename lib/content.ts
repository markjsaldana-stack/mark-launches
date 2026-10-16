export const navLinks = [
  { label: "Flagship", href: "#flagship" },
  { label: "Impact", href: "#impact" },
  { label: "Work", href: "#work" },
  { label: "What I do", href: "#what-i-do" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/markjsaldana/" },
] as const;

export const heroStats = [
  { value: "10+ yrs", label: "Product marketing, growth & CMO roles" },
  { value: "2x", label: "New user signups from feature launches" },
  { value: "+50%", label: "Marketing site conversion rate lift" },
] as const;

export const impactStats = [
  {
    value: "+50%",
    label: "Site conversion rate",
    description:
      "Ran Gymdesk's whole marketing site, including the competitor, customer, case study, and feature pages.",
  },
  {
    value: "300+",
    label: "Deals in 90 days",
    description:
      "Launched an AI sales-intelligence tool that auto-generated competitor summaries and tailored follow-ups.",
  },
  {
    value: "+200%",
    label: "Customer LTV",
    description:
      "Retention and engagement incentives at ZenSports: affiliate programs, deposit bonuses, and betting contests.",
  },
  {
    value: "1M",
    label: "Organic visitors",
    description:
      "Long-tail SEO content that brought a million search visitors to AirDNA.co.",
  },
] as const;

export const flagshipProject = {
  title: "Deal Radar for Hightouch",
  href: "https://hightouch-radar.vercel.app/",
  previewPath: "hightouch-radar.vercel.app/assistant",
  summary:
    "A sales assistant I'd build for Hightouch's SDRs and AEs, proposed as a working site.",
  description: [
    "Reps ask it what to say next, from the first cold email to the renewal call. It answers from current competitive intel, battlecards, and a library of customer references and case studies, and it cites the source for every line.",
    "On the deal assistant page, an AE uploads a call transcript and gets the buyer's concerns in their own words, the proof for each one, a matching reference customer, and a follow-up email to send. Weekly competitor tracking feeds it, a script drafts signals with the Claude API, and a person checks every draft. The site ends with how Hightouch could build it internally in 90 days.",
  ],
  highlights: [
    "Turns a call transcript into buyer concerns, proof, and a follow-up email",
    "Matches reference customers on region, use case, and competitor",
    "Weekly competitor digest with the exact line to say",
    "Every answer cites its source, and a person checks every AI draft",
  ],
  tags: ["Sales enablement", "Competitive intelligence", "AI tools"],
  note: "Proposal with sample data. Not affiliated with Hightouch.",
} as const;

export const workCategories = [
  "All",
  "Video",
  "Web",
  "Content",
  "AI Tools",
] as const;

export type WorkCategory = (typeof workCategories)[number];
export type ProjectCategory = Exclude<WorkCategory, "All">;

export type Project = {
  company: string;
  assetType: string;
  href: string;
  notes: string;
  category: ProjectCategory;
};

export const projects: Project[] = [
  {
    company: "Gymdesk",
    assetType: "Product Demo",
    href: "https://youtu.be/bDb7DLYya9E?si=d7i8pG5Iw0MlUQAy",
    notes:
      "All aspects of video (script, editing, etc.) done by me. This video onboarded thousands of new customers.",
    category: "Video",
  },
  {
    company: "Gymdesk",
    assetType: "Competitor Page",
    href: "https://gymdesk.com/alternative/zenplanner",
    notes: "Competitor comparison landing page targeting ZenPlanner users.",
    category: "Web",
  },
  {
    company: "Gymdesk",
    assetType: "Competitor Page",
    href: "https://gymdesk.com/alternative/mindbody",
    notes: "Competitor comparison landing page targeting Mindbody users.",
    category: "Web",
  },
  {
    company: "Gymdesk",
    assetType: "Blog Post",
    href: "https://gymdesk.com/blog/enhanced-scheduling-tools/",
    notes:
      "New feature announcement blog post. Also QA'd the feature, trained sales and support on how it worked, and created support documentation and tutorial videos.",
    category: "Content",
  },
  {
    company: "Gymdesk",
    assetType: "Blog Post",
    href: "https://gymdesk.com/blog/built-in-wod-tracking/",
    notes:
      "New feature announcement. Also developed the WOD feature with the product team based on extensive competitor research.",
    category: "Content",
  },
  {
    company: "Gymdesk",
    assetType: "Reviews Page",
    href: "https://gymdesk.com/customers",
    notes:
      "Customer quotes, reviews, and videos on one page. I designed it and made all the content, including the videos.",
    category: "Web",
  },
  {
    company: "Gymdesk",
    assetType: "Case Study (Video)",
    href: "https://www.youtube.com/watch?v=4NIT9xm5GHE&t=1s",
    notes: "Produced on-site customer case study with local video production crew.",
    category: "Video",
  },
  {
    company: "Gymdesk",
    assetType: "Case Study (Written)",
    href: "https://gymdesk.com/customer-stories/all-pro-tae-kwon-do-academy",
    notes: "Conducted customer outreach, interview, and wrote case study.",
    category: "Content",
  },
  {
    company: "Gymdesk",
    assetType: "Case Study (Written)",
    href: "https://gymdesk.com/customer-stories/origami-rhythmics",
    notes: "Conducted customer outreach, interview, and wrote case study.",
    category: "Content",
  },
  {
    company: "Gymdesk",
    assetType: "Case Study (Written)",
    href: "https://gymdesk.com/customer-stories/ground-game-theory-bjj",
    notes: "Conducted customer outreach, interview, and wrote case study.",
    category: "Content",
  },
  {
    company: "Telos Labs",
    assetType: "Website Messaging",
    href: "https://www.teloslabs.co/",
    notes:
      "Wrote all the site messaging and an on-page qualification flow for an AI automation agency, to position the brand, narrow the ICP, and turn visitors into discovery calls.",
    category: "Web",
  },
  {
    company: "Telos Labs",
    assetType: "Sales One-Pager",
    href: "/files/telos-one-pager.pdf",
    notes:
      "Sales one-pager built to generate leads and book discovery calls for an organizational assessment. It fits a complex AI consulting offer onto one page about ROI.",
    category: "Content",
  },
  {
    company: "Client Project",
    assetType: "Agentic Website",
    href: "https://paythegym.com/",
    notes: "Agentic website built for a client (built with Cursor).",
    category: "AI Tools",
  },
  {
    company: "Personal Project",
    assetType: "Waste Finder Tool",
    href: "https://mobility-waste-finder.vercel.app/",
    notes: "Tool built to help IT leaders identify waste (built with Cursor).",
    category: "AI Tools",
  },
];

export const services = [
  {
    title: "Product launches",
    description:
      "Positioning, messaging, announcement content, and the sales and support enablement a launch needs to work.",
    icon: "rocket",
  },
  {
    title: "Customer onboarding",
    description:
      "Demo videos, tutorials, and in-product guidance that get new customers to their first win faster.",
    icon: "play",
  },
  {
    title: "Demand-capture pages",
    description:
      "Competitor comparison pages, review hubs, and landing pages built to convert high-intent traffic.",
    icon: "target",
  },
  {
    title: "Customer proof",
    description:
      "Outreach, interviews, written case studies, and produced video stories that sales can lean on.",
    icon: "quote",
  },
] as const;
