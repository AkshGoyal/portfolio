// Every project on the home page, written as evidence: who it was for, what changed,
// and one number a reader can check. Copy is plain and specific on purpose.

export type Replay =
  | 'deck'
  | 'duely'
  | 'outreach'
  | 'pharmagraph'
  | 'tally'
  | 'clinical'
  | 'investor'
  | 'eval';

export interface Link {
  label: string;
  href: string;
  note?: string;
}

export type Kind = 'live' | 'ai' | 'data' | 'product';

export const kindLabels: Record<Kind, string> = {
  live: 'Live apps',
  ai: 'AI pipelines',
  data: 'Data and analytics',
  product: 'Product strategy',
};

export interface Project {
  slug: string;
  title: string;
  short: string;
  kinds: Kind[];
  line: string;
  forWhom: string;
  evidence: { figure: string; label: string };
  ownership: string;
  product: string;
  pipeline: string;
  stack: string[];
  links: Link[];
  replay: Replay;
  shots: { src: string; alt: string }[];
  status?: string;
  caseStudy?: string;
  pipelineLabel?: string;
  slides?: string[];
}

export const projects: Project[] = [
  {
    slug: 'duely',
    short: 'Claude chases your overdue invoices over MCP',
    kinds: ['live', 'ai'],
    title: 'Duely',
    line: 'Your own Claude chases overdue invoices. Duely keeps every payment link live and every client promise on record.',
    forWhom: 'Freelancers and small agencies in India waiting on late payments.',
    evidence: {
      figure: 'One tap',
      label: 'for a client to pay by UPI, promise a date or raise an issue. No login, no app.',
    },
    ownership:
      'Took it from a two-page strategy to a deployed product: Postgres, sign-in, an MCP server, client pay pages, a seeded demo and a QA checklist.',
    product:
      'There is no model inside Duely. Owners already pay for Claude, so Claude does the judgement and the writing; Duely is the memory and the payment rail.',
    pipeline:
      'Seven MCP tools with strict schemas let Claude create invoices, draft nudges and rank who to chase today, while Duely stores and serves every result.',
    stack: ['TypeScript', 'Express', 'Postgres', 'MCP', 'Railway'],
    links: [
      { label: 'Open the live app', href: 'https://duely-production-dc131949.up.railway.app', note: 'Demo login is on the sign-in page' },
      { label: 'Read the code', href: 'https://github.com/AkshGoyal/duely' },
    ],
    replay: 'duely',
    shots: [
      { src: '/work/duely/dashboard.jpg', alt: 'Duely dashboard: receivables by age, who to chase today, and every invoice with its latest client response' },
      { src: '/work/duely/pay.jpg', alt: 'The client pay page on a phone: amount, days overdue, a UPI pay button and QR code' },
      { src: '/work/duely/metrics.jpg', alt: 'Duely metrics: what was collected, promised and still open' },
    ],
  },
  {
    slug: 'grounded-outreach',
    short: 'Sales email where every sentence has a source',
    kinds: ['live', 'ai'],
    title: 'Grounded Outreach',
    line: 'Personalised B2B email where every sentence traces to a public source, and nothing is sent until a person approves the exact text.',
    forWhom: 'Sales teams, starting with my family’s cotton-thread business reaching new buyers.',
    evidence: {
      figure: '0 wrong facts',
      label: 'across 15 real executives and three different pitches. 14 of 15 emails were ready to send, at $0.02 each.',
    },
    ownership:
      'Built both halves: a research workbench, and a sending system with Gmail and Zoho sign-in, pacing, opt-outs and replies. About 940 automated tests.',
    product:
      'A wrong fact about a prospect is worse than a generic email, so the workbench never sends. The rep approves the exact words, and weak evidence produces a weaker, honest email.',
    pipeline:
      'Search, read, confirm the person, keep only dated facts, rank the hook, draft with a source per sentence, then deterministic checks that block invented pain, numbers or certainty.',
    stack: ['Python', 'SQLite', 'OpenRouter', 'Parallel search', 'Render'],
    links: [
      { label: 'Try the live demo', href: 'https://grounded-outreach-demo.onrender.com', note: 'Password: passwordeasy. Fictional prospects, no paid calls' },
      { label: 'Read the code', href: 'https://github.com/AkshGoyal/grounded-outreach' },
    ],
    replay: 'outreach',
    shots: [
      { src: '/work/grounded-outreach/draft.jpg', alt: 'A drafted email with every sentence underlined and linked to its source, and the hook judged on the right' },
      { src: '/work/grounded-outreach/evaluation.jpg', alt: 'Evaluation page: 14 of 15 ready to send, 0 wrong facts, 27 seconds and $0.020 per prospect' },
      { src: '/work/grounded-outreach/new.jpg', alt: 'Starting a prospect: the goal, the person, and fictional examples for each edge case' },
    ],
    caseStudy: '/work/outreach-agent/',
  },
  {
    slug: 'pharmagraph',
    short: 'From an odd batch reading to its source row',
    kinds: ['live', 'data'],
    title: 'PharmaGraph',
    line: 'Follow a batch investigation from an unusual reading to the exact row in the source data it came from.',
    forWhom: 'Quality reviewers investigating pharmaceutical fermentation batches.',
    evidence: {
      figure: 'Row 34,755',
      label: 'is where the 86-hour temperature reading in batch 031 lives: column 17 of the original published CSV.',
    },
    ownership:
      'Ingested 100 published batches (113,935 samples), then built the graph, the detector, the interface and a one-click Mac launcher.',
    product:
      'It says “not assessed” when batches aren’t comparable, and never claims a root cause. A finding has to survive a reviewer, so provenance comes first.',
    pipeline:
      'Parquet for measurements, Neo4j for identity and provenance, and a robust detector: a finding needs five readings in a row past a peer-median reference.',
    stack: ['Python', 'Neo4j', 'Parquet', 'Streamlit', 'Plotly'],
    links: [
      { label: 'Open the live demo', href: 'https://pharmagraph-aksh.streamlit.app' },
      { label: 'Read the code', href: 'https://github.com/AkshGoyal/pharmagraph-ai' },
    ],
    replay: 'pharmagraph',
    shots: [
      { src: '/work/pharmagraph/finding.jpg', alt: 'Batch 031 temperature above its peer reference between 86 and 87 hours, with the reasoning beside it' },
      { src: '/work/pharmagraph/source-trace.jpg', alt: 'A selected reading with its peer comparison and the CSV row and column it came from' },
      { src: '/work/pharmagraph/architecture.jpg', alt: 'Architecture: published source, Parquet measurements and a Neo4j index, then the Python comparison' },
      { src: '/work/pharmagraph/overview.jpg', alt: 'PharmaGraph project overview' },
    ],
  },
  {
    slug: 'tally-slip-bot',
    short: 'Handwritten slip photo to Tally invoice',
    kinds: ['ai'],
    title: 'Tally Slip Bot',
    line: 'Photograph a handwritten delivery slip and get a Tally invoice.',
    forWhom: 'A small manufacturer whose handwritten slips were re-typed into Tally every week.',
    evidence: {
      figure: 'Exact names only',
      label: 'The model’s output is constrained to the customers and items that already exist in Tally, so it cannot invent one.',
    },
    ownership:
      'Built for a real business: photo intake, voice-note corrections, learned spellings, weekly pricing, Tally import files and a one-command AWS deploy.',
    product:
      'The owner already runs the business from a phone and a chat, so the bot lives there instead of in a new app. Nothing is saved without a human tap.',
    pipeline:
      'Two vision models, Gemini and DeepSeek Janus Pro, as backups for each other, with JSON-schema output. Fuzzy matching against the Tally masters, validation rules, and a weekly Tally XML import.',
    stack: ['Python', 'Telegram', 'Gemini', 'DeepSeek Janus Pro', 'AWS Lambda'],
    links: [{ label: 'Read the code', href: 'https://github.com/AkshGoyal/tally-slip-bot' }],
    replay: 'tally',
    shots: [],
  },
  {
    slug: 'clinical-evidence-assistant',
    short: 'RAG over 48 clinical PDFs, tables rebuilt',
    kinds: ['ai'],
    title: 'Clinical Evidence Assistant',
    line: 'Ask a clinical question and get an answer grounded in the trial data, with the numbers in a table.',
    forWhom: 'Teams who need to know what the vaccine literature says, on demand.',
    evidence: {
      figure: '591 tables',
      label: 'rebuilt from scrambled PDF extractions, out of 2,594 chunks across 48 clinical documents.',
    },
    ownership:
      'Designed the whole pipeline, from PDF ingestion to retrieval, prompting and the chat interface.',
    product:
      'It says when it is going beyond the documents, won’t recommend for a child until it knows age, country and health status, and stays brand-neutral.',
    pipeline:
      'Table detection by position, model-rebuilt Markdown tables, BM25 plus vector search, a local reranker keeping the best 5 of 20, and prompts routed by intent.',
    stack: ['Python', 'pdfplumber', 'FAISS', 'BM25', 'FlashRank', 'Streamlit'],
    links: [{ label: 'Read the code', href: 'https://github.com/AkshGoyal/clinical-evidence-assistant' }],
    replay: 'clinical',
    shots: [{ src: '/work/clinical-evidence-assistant/start.jpg', alt: 'The chat interface with the retrieval pipeline listed in the sidebar' }],
  },
  {
    slug: 'investor-value-analysis',
    short: 'Who becomes valuable, and who to watch in week one',
    kinds: ['data'],
    title: 'Which new investors become valuable?',
    line: 'For a retail investing app: who is worth keeping, who to watch in week one, where marketing money should go, and how fragile revenue is.',
    forWhom: 'The growth and marketing teams of a retail investing app (20,000 sign-ups, 130,000 orders).',
    evidence: {
      figure: '23%',
      label: 'of weekly watchlist picks became high value by day 90, against a base rate of about 1%, tested on weeks the model never saw.',
    },
    ownership:
      'Defined value, then built a nine-step reproducible pipeline with 44 automated checks; the report and dashboard are generated from its outputs.',
    product:
      'Rejected “top 10% by revenue”: at the 90th percentile users still pay nothing. Used a fixed 90-day window, a rupee bar and a habit test instead.',
    pipeline:
      'First-week features, a model frozen before testing and checked out of time, channel quality compared at equal age, and stress tests on concentration.',
    stack: ['Python', 'pandas', 'scikit-learn', 'matplotlib'],
    links: [{ label: 'Code available on request', href: 'mailto:aksh.iitdelhi@gmail.com?subject=Investor%20value%20analysis' }],
    replay: 'investor',
    shots: [
      { src: '/work/investor-value-analysis/q2_weekly.png', alt: 'Weekly watchlist hits on the out-of-time test weeks' },
      { src: '/work/investor-value-analysis/q1_signals.png', alt: 'First-week signals that separate high-value users from the rest' },
      { src: '/work/investor-value-analysis/q3_channels.png', alt: 'Acquisition channel quality compared at equal user age' },
      { src: '/work/investor-value-analysis/q4_stress.png', alt: 'Stress test: what happens if the largest revenue source shrinks' },
    ],
  },
  {
    slug: 'rag-eval-harness',
    short: 'Tells you whether retrieval or generation broke',
    kinds: ['ai', 'data'],
    title: 'RAG Eval Harness',
    line: 'Measures whether a change to a RAG system actually helped, and when it didn’t, whether retrieval or generation broke.',
    forWhom: 'Anyone tuning a retrieval system by intuition.',
    evidence: {
      figure: '0% to 53%',
      label: 'recall after fixing how test questions named their contracts, a design fault caught at the first end-to-end run.',
    },
    ownership:
      'Ingested and fingerprinted 510 contracts, built 30 expert-annotated test cases, a cost-capped model layer and 187 tests that need no API key.',
    product:
      'Scores retrieval and generation separately because they need opposite fixes, and reports errors next to scores so 90% never means 90% of what didn’t crash.',
    pipeline:
      'Chunking, BM25 and dense retrieval, hit@k and recall@k, cached and spend-capped model calls, and a manifest behind every number.',
    stack: ['Python', 'NumPy', 'Pydantic', 'OpenRouter'],
    links: [{ label: 'Read the code', href: 'https://github.com/AkshGoyal/Rag-Eval-Harness' }],
    replay: 'eval',
    shots: [{ src: '/work/rag-eval-harness/chunk-size-recall.svg', alt: 'Retrieval recall by chunk size' }],
    status: 'In progress: phase 5 of 14',
    caseStudy: '/work/rag-eval-harness/',
  },
  {
    slug: 'railways-signal-guidance',
    short: 'Fog delays trains; move the signal into the cab',
    kinds: ['product'],
    title: 'Indian Railways: signal and speed guidance in the cab',
    line: 'Winter fog stalls India’s trains and costs freight about ₹10,000 crore a year. I traced the delays to one constraint and designed the fix around it.',
    forWhom: 'Railway operations: loco pilots, traffic control and freight customers.',
    evidence: {
      figure: '35%',
      label: 'of delays trace to one constraint: in dense fog, drivers can’t see signals beyond 50 metres, so they crawl at 10 to 30 km/h.',
    },
    ownership:
      'Took an open-ended product brief from problem sizing to a rollout plan: root causes ranked, solution designed, risks and metrics set.',
    product:
      'Didn’t chase more track or more trains. Show the driver the next signal and a safe speed 500 metres ahead, so visibility stops being the limit.',
    pipeline:
      'Pilot on one route, then the fog-prone winter corridors, then the national trunk network. North-star metric: cut average delay on trial routes from 90 to 40 minutes.',
    pipelineLabel: 'Plan',
    stack: ['Root-cause analysis', 'Phased rollout', 'Metric design'],
    links: [
      { label: 'Read the case study', href: '/work/indian-railways-delays/' },
      { label: 'Download the deck', href: '/railways-signal-guidance.pdf' },
    ],
    replay: 'deck',
    slides: [
      '/work/decks/railways-signal-guidance-1.jpg',
      '/work/decks/railways-signal-guidance-2.jpg',
      '/work/decks/railways-signal-guidance-3.jpg',
      '/work/decks/railways-signal-guidance-4.jpg',
    ],
    shots: [],
  },
  {
    slug: 'mars-20-year-roadmap',
    short: 'A 20-year plan for 10,000 people on Mars',
    kinds: ['product'],
    title: 'Mars: a 20-year roadmap for 10,000 settlers',
    line: 'A first-principles strategy for a self-sustaining settlement: who funds it, where the money goes, what breaks, and how you’d know it’s working.',
    forWhom: 'A product strategy exercise in long-horizon planning under deep uncertainty.',
    evidence: {
      figure: '40 / 25 / 15 / 20',
      label: 'The capital split: transport, habitat and life support, resource extraction, and health, R&D and governance.',
    },
    ownership:
      'Built the whole argument: why Mars, the assumptions, a four-stage funding model, the budget trade-offs, a phased settlement plan and a risk register.',
    product:
      'No single government or company can fund 20 years alone, so each phase brings in the backer whose incentive peaks then: agencies first, industry and media later.',
    pipeline:
      'From 50 to 100 specialists in years 1 to 5 to a 10,000-person settlement, with success metrics and mitigations for each failure mode.',
    pipelineLabel: 'Plan',
    stack: ['First-principles reasoning', 'Capital allocation', 'Risk register'],
    links: [
      { label: 'Read the case study', href: '/work/mars-colonization-strategy/' },
      { label: 'Download the deck', href: '/mars-20-year-roadmap.pdf' },
    ],
    replay: 'deck',
    slides: [
      '/work/decks/mars-20-year-roadmap-1.jpg',
      '/work/decks/mars-20-year-roadmap-3.jpg',
      '/work/decks/mars-20-year-roadmap-4.jpg',
      '/work/decks/mars-20-year-roadmap-2.jpg',
    ],
    shots: [],
  },
];

const ORDER = [
  'duely',
  'grounded-outreach',
  'pharmagraph',
  'railways-signal-guidance',
  'tally-slip-bot',
  'clinical-evidence-assistant',
  'investor-value-analysis',
  'mars-20-year-roadmap',
  'rag-eval-harness',
];
projects.sort((a, b) => ORDER.indexOf(a.slug) - ORDER.indexOf(b.slug));

export interface SmallProject {
  title: string;
  line: string;
  href: string;
}

export const alsoBuilt: SmallProject[] = [
  {
    title: 'Invoice Review Workbench',
    line: 'Supplier invoice PDF in; Ready for finance, Needs review or Blocked out. The model reads the document, procurement records and Python decide.',
    href: 'https://github.com/AkshGoyal/invoice-review-workbench',
  },
  {
    title: 'Pharmacy cart recovery voice agent',
    line: 'Calls a customer, finds out why the medicine cart was abandoned and fixes that one blocker. Prescription discounts are refused in code, not in the prompt.',
    href: 'https://github.com/AkshGoyal/cart-recovery-agent',
  },
  {
    title: 'Plan My Day',
    line: 'Breaks a goal into tasks small enough to start and picks today’s, calibrated to how you actually work.',
    href: '/work/plan-my-day/',
  },
  {
    title: 'Job Search Assistant',
    line: 'Ranks postings against a profile and drafts tailored CV bullets and cover letters. You apply yourself.',
    href: 'https://github.com/AkshGoyal/Agent_JobApplications',
  },
];

export const decks = [
  {
    title: 'Indian Railways: in-cabin signal and speed guidance',
    line: 'Fog delays cost freight about ₹10,000 crore a year. Visibility, not track, was the binding constraint, so the fix is guidance inside the cab.',
    href: '/work/indian-railways-delays/',
    pdf: '/railways-signal-guidance.pdf',
  },
  {
    title: 'Mars: a 20-year roadmap for 10,000 settlers',
    line: 'A first-principles phased plan, capital allocation model and failure-mode register for a self-sustaining settlement.',
    href: '/work/mars-colonization-strategy/',
    pdf: '/mars-20-year-roadmap.pdf',
  },
];
