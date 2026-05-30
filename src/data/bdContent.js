/** Business Development content — lead gen, speaker booking, case studies, promo banners */

export const BD_SPEAKER = {
  eyebrow: 'For organisations',
  title: 'Book Luke as a speaker',
  subtitle:
    'Keynotes, leadership talks, and wellness webinars for corporates, conferences, and communities — tailored to your audience.',
  cta: 'Request Luke for your event',
  formAnchor: '/resources?intent=speaker#enquire',
  formats: ['Corporate keynotes', 'Leadership wellness sessions', 'Virtual webinars', 'Conference panels'],
};

export const BD_CORPORATE = {
  eyebrow: 'Corporate wellness',
  title: 'Every engagement is custom-built',
  subtitle:
    'We do not sell fixed SOP packages. From QoL assessments to life coaching and extended team support — solutions are designed case-by-case for your organisation.',
  individualLink: '/programs/signature-wellness',
  individualLabel: 'Individual & family programs',
  masterclassLink: '/masterclass',
  masterclassLabel: 'Individual & family masterclasses',
};

/** Update banners here — homepage promo strip pulls active entries only */
export const BD_PROMO_BANNERS = [
  {
    id: 'oct-retreat-2025',
    active: true,
    label: 'Upcoming',
    headline: 'High-end wellness retreat — October 2025',
    subline: 'Limited seats · curated small-group experience with Team Luke',
    cta: 'Express interest',
    to: '/resources?intent=retreat#enquire',
    expiresAt: '2025-11-01',
  },
  {
    id: 'speaker-webinar',
    active: true,
    label: 'Book now',
    headline: 'Book Luke for your next corporate talk or webinar',
    subline: 'Leadership, burnout prevention, and integrative wellness — in-person or virtual',
    cta: 'Book Luke as speaker',
    to: '/resources?intent=speaker#enquire',
    expiresAt: null,
  },
];

export function getActivePromoBanners() {
  const today = new Date().toISOString().slice(0, 10);
  return BD_PROMO_BANNERS.filter((b) => {
    if (!b.active) return false;
    if (b.expiresAt && b.expiresAt < today) return false;
    return true;
  });
}

export const BD_CASE_STUDIES = [
  {
    id: 'mondelez',
    company: 'Mondelez International',
    sector: 'FMCG · Global',
    headline: 'Leadership wellness at scale',
    summary:
      'Multi-format engagement spanning leadership sessions and team-wide wellness initiatives — designed around Mondelez\'s culture and performance goals.',
    outcomes: ['Leadership keynote series', 'Team wellness modules', 'Sustained engagement model'],
  },
  {
    id: 'godrej',
    company: 'Godrej',
    sector: 'Conglomerate · India',
    headline: 'Life coaching + movement + extended support',
    summary:
      'A tailored blend of life coaching, yoga, and extended WhatsApp community support — a format unique to this engagement and not replicated for other clients.',
    outcomes: ['1:1 life coaching pathways', 'Yoga & movement sessions', 'Extended WhatsApp group support'],
  },
  {
    id: 'marsh',
    company: 'Marsh McLennan',
    sector: 'Professional services',
    headline: '700+ colleagues, one powerful session',
    summary:
      'Nearly 100 colleagues in person and ~700 virtually — practical, uncomplicated lifestyle guidance that teams could adopt immediately.',
    outcomes: ['Hybrid in-person + virtual', '700+ reach', 'Highly rated by leadership'],
    quote:
      'Authentic, realistic, and simple lifestyle changes, which are easy to adopt and sustain, are the essence of Luke\'s talk.',
    author: 'Dr. Rajeev Agarwal, Marsh McLennan',
  },
  {
    id: 'dr-reddys',
    company: "Dr. Reddy's Laboratories",
    sector: 'Pharma · Global',
    headline: '1.5 years of wellbeing partnership',
    summary:
      'Primary collaborator on employee wellbeing — authenticity and lived practice inspiring sustainable lifestyle change across the organisation.',
    outcomes: ['Long-term wellbeing program', 'Employee-wide reach', 'Ongoing partnership'],
    quote:
      'His authenticity, genuineness, and living of everything he preaches have inspired people to make sustainable lifestyle changes.',
    author: "Nithya Venkatraman, Dr. Reddy's",
  },
];

export const BD_ENQUIRY_TYPES = [
  { id: 'speaker', label: 'Book Luke as speaker / webinar' },
  { id: 'corporate-wellness', label: 'Corporate wellness program' },
  { id: 'retreat', label: 'Retreat or high-touch experience' },
  { id: 'partnership', label: 'Partnership / preferred partner enquiry' },
];

export const PREFERRED_PARTNERS_EDITORIAL = {
  eyebrow: 'Preferred partners',
  title: 'Trusted by leaders who invest in people',
  lede:
    'Editorial partnerships with international brands — we showcase the quality of our work and the depth of relationships, not price lists.',
  intro:
    'From FMCG giants to global professional services firms, Luke Coutinho and Team Luke have partnered with organisations that treat employee wellbeing as a strategic advantage — not a checkbox.',
  partners: [
    {
      name: 'Mondelez International',
      region: 'Global',
      narrative:
        'Leadership wellness and team engagement programs crafted for a fast-moving, people-first culture.',
    },
    {
      name: 'IBM',
      region: 'Global technology',
      narrative:
        'Integrative wellness conversations with leaders navigating high-performance, high-pressure environments.',
    },
    {
      name: 'Tata Group',
      region: 'India',
      narrative:
        'Foundational medicine principles applied to enterprise-scale wellness and leadership resilience.',
    },
    {
      name: 'Wipro',
      region: 'Global IT services',
      narrative:
        'Burnout prevention and quality-of-life frameworks for distributed, always-on teams.',
    },
    {
      name: 'Uber',
      region: 'Global mobility',
      narrative:
        'Practical lifestyle shifts for mobile workforces — simple, sustainable, and culturally relevant.',
    },
    {
      name: 'MetLife',
      region: 'Insurance · Global',
      narrative:
        'Holistic health narratives aligned with long-term employee protection and care.',
    },
  ],
};
