export type FAQCategory = "Process" | "Pricing" | "Technical" | "Support";

export type FAQItem = {
  question: string;
  answer: string;
  category: FAQCategory;
};

export const faqItems: FAQItem[] = [
  {
    category: "Process",
    question: "How do we get started?",
    answer:
      "It begins with a 15-minute diagnostic call to map out your goals. Once we agree on a strategy and the commitment is secured, we move into the Architecture Phase to map your site's growth.",
  },
  {
    category: "Process",
    question: "Do I need to provide the content and images?",
    answer:
      'We can work with your existing assets, but we also offer professional copywriting and stock image sourcing to ensure the final product meets "Empire" premium standards.',
  },
  {
    category: "Process",
    question: "Can I update the website myself later?",
    answer:
      "Absolutely. We build on user-friendly infrastructures (Shopify/Next.js) and provide a video walkthrough so you can manage products and text without needing a developer.",
  },
  {
    category: "Process",
    question: "What is the typical timeline for a project?",
    answer:
      "A standard high-performance build typically takes 14 to 21 days. Custom enterprise systems may take 4-6 weeks depending on the technical complexity.",
  },
  {
    category: "Pricing",
    question: "Are there any hidden fees?",
    answer:
      "None. Your quote covers design and development. External costs like domain registration or premium app subscriptions are handled directly by you so you maintain total ownership.",
  },
  {
    category: "Pricing",
    question: 'Why is your pricing higher than "basic" developers?',
    answer:
      'You are not paying for a "link"; you are paying for a conversion engine. We prioritize speed, SEO, and sales logic that pays for itself within months of launch.',
  },
  {
    category: "Pricing",
    question: "What is your payment structure?",
    answer:
      "We follow a 50/50 model: 50% to initiate the project and 50% upon successful launch and sign-off.",
  },
  {
    category: "Pricing",
    question: "Do you accept payments in Naira and Dollars?",
    answer:
      "Yes. We accept both NGN and USD to make it seamless for Nigerian brands and our international partners to work with us.",
  },
  {
    category: "Technical",
    question: "How long does it take to rank on the first page of Google?",
    answer:
      "SEO is a marathon. While technical setup is instant, significant ranking jumps usually appear within 3-6 months of consistent optimization and content.",
  },
  {
    category: "Technical",
    question: "Will my site be mobile-friendly?",
    answer:
      'In Nigeria, over 80% of traffic is mobile. Every Empire site is "Mobile-First," meaning it is engineered to load instantly even on standard Nigerian mobile networks.',
  },
  {
    category: "Technical",
    question: "Do you handle Google Business Profile setup?",
    answer:
      "Yes, this is included in our SEO and Business Setup packages to ensure local customers can find your physical or digital location on Google Maps.",
  },
  {
    category: "Technical",
    question: "Is my website secure from hackers?",
    answer:
      "We implement SSL encryption, secure payment gateways (Paystack/Flutterwave), and advanced brute-force protection as a standard for every single build.",
  },
  {
    category: "Support",
    question: "What happens if the site goes down?",
    answer:
      "We use elite hosting providers with 99.9% uptime. If an issue arises, our priority support team is available to get you back online immediately.",
  },
  {
    category: "Support",
    question: "Do you offer monthly maintenance?",
    answer:
      'Yes. We offer "Empire Care" plans that cover security updates, speed checkups, and minor content changes to keep your system running at peak performance.',
  },
  {
    category: "Support",
    question: "What if I'm not happy with the design?",
    answer:
      "We have a multi-stage approval process. You sign off on the design mockup before we write a single line of code, ensuring the final result is exactly what you envisioned.",
  },
];

export const homepageFaqItems = faqItems.filter((item) =>
  [
    "How do we get started?",
    "What is the typical timeline for a project?",
    "What is your payment structure?",
    "Are there any hidden fees?",
    "Will my site be mobile-friendly?",
  ].includes(item.question),
);
