/**
 * LCHHS brand content — six pillars (fixed order), five defense systems, voice & disclaimers.
 * Source: internal brand tonality + platform journey spec.
 */

export const SIX_PILLARS = [
  {
    id: 'nutrition',
    title: 'Deep Cellular Nutrition',
    shortTitle: 'Deep Cellular Nutrition',
    copy:
      'Balanced cellular nutrition suited to your bio-individuality — not a trend, but nourishment that helps every cell thrive.',
  },
  {
    id: 'movement',
    title: 'Adequate Exercise',
    shortTitle: 'Movement',
    copy:
      'Safe, personalised movement with rest and recovery — strong, agile, and energized without extremes.',
  },
  {
    id: 'sleep',
    title: 'Quality Sleep',
    shortTitle: 'Quality Sleep',
    copy:
      'Sleep as medicine — rhythm, environment, and habits that let your body repair and rejuvenate.',
  },
  {
    id: 'emotional',
    title: 'Emotional Wellness',
    shortTitle: 'Emotional Wellness',
    copy:
      'Calm within the body — where acceptance, gratitude, and mindful tools help healing begin.',
  },
  {
    id: 'spirit',
    title: 'Spirit',
    shortTitle: 'Spirit',
    copy:
      'Reconnecting inward through kindness, silence, nature, and what resonates with you — not religion, but your inner self.',
  },
  {
    id: 'breath',
    title: 'Breath',
    shortTitle: 'Breath',
    copy:
      'Prana as medicine — conscious breath shifts you toward rest, repair, and parasympathetic healing.',
  },
];

export const FIVE_DEFENSE_SYSTEMS = [
  {
    id: 'angiogenesis',
    title: 'Angiogenesis',
    copy: 'The formation of new blood vessels — regulated through intelligent nutrition and lifestyle to restore balance.',
  },
  {
    id: 'immunity',
    title: 'Immunity & Inflammation',
    copy: 'Your first line of defense and a vital part of healing — supported when chronic inflammation is addressed holistically.',
  },
  {
    id: 'stem-cells',
    title: 'Stem Cell Regeneration',
    copy: 'The body\'s natural repair system — strengthened through cellular nutrition and lifestyle choices.',
  },
  {
    id: 'gut',
    title: 'Gut Microbiome',
    copy: 'Where much of immunity lives — rebuilt through how you eat, move, sleep, and think.',
  },
  {
    id: 'dna',
    title: 'DNA Protection & Repair',
    copy: 'Guarding your genetic blueprint — lifestyle and nutrition influence which genes express and which stay quiet.',
  },
];

export const BRAND_DISCLAIMER = {
  educational:
    'Please make an informed decision before trying anything new. This information is for educational purposes and is not a replacement for medical advice, diagnosis, or treatment. Always consult your healthcare provider before changes to your nutrition, lifestyle, or care plan.',
  recipe:
    'Please keep your healthcare provider in the loop before introducing any new food. If you have allergies, avoid those ingredients.',
};

export const BRAND_CTA = {
  consult: 'Ready to move to action? Book a consultation with our integrative team.',
  programs: 'Explore our Signature Wellness Program — personalized care guided by 13+ years of integrative expertise.',
  courses: 'Take the next step in your wellness journey — learn at your pace, apply with confidence.',
};

/** Luke as primary trust asset — use on Home, programs, checkout success */
export const LUKE_TRUST = {
  eyebrow: 'Luke Coutinho',
  quote:
    'Healing is not a pill or a protocol alone — it is how you eat, move, sleep, breathe, and hold your emotional world together.',
  bio: 'Integrative lifestyle medicine practitioner with 13+ years guiding patients and families — from prevention to complex care — with the same six-pillar method you see across this site.',
  cta: 'Read Luke\'s story',
  storyHref: '/about/story',
};

const CROSS_SELL_MAP = {
  programs: [
    { label: 'Book a consultation', description: 'Speak with our team before you enroll', href: '/book-consult?path=expert', stream: 'consults' },
    { label: 'Explore courses', description: 'Learn at your pace in the Learning Hub', href: '/learn/learninghub/home', stream: 'lms' },
    { label: 'Free health assessment', description: 'Five minutes · personalised snapshot', href: '/assessment', stream: 'general' },
  ],
  consults: [
    { label: 'Signature Wellness programs', description: 'Long-term guided care with Luke or the team', href: '/programs/signature-wellness', stream: 'programs' },
    { label: 'Self-paced courses', description: 'Apply foundations between sessions', href: '/learn/learninghub/home', stream: 'lms' },
    { label: 'Read Luke\'s insights', description: 'Educational blogs · no alarm, just clarity', href: '/learn/blogs', stream: 'content' },
  ],
  lms: [
    { label: 'Book a consultation', description: 'Turn learning into a personalised plan', href: '/book-consult?path=instant', stream: 'consults' },
    { label: 'Signature programs', description: 'High-touch care for lasting change', href: '/programs/signature-wellness', stream: 'programs' },
    { label: 'Wellness blogs', description: 'Deep dives on nutrition, sleep, and more', href: '/learn/blogs', stream: 'content' },
  ],
  content: [
    { label: 'Take the assessment', description: 'Know where to start', href: '/assessment', stream: 'general' },
    { label: 'Book a consultation', description: 'Move from reading to action', href: '/book-consult', stream: 'consults' },
    { label: 'Browse courses', description: 'Structured learning paths', href: '/learn/learninghub/home', stream: 'lms' },
  ],
  corporate: [
    { label: 'Corporate programs', description: 'Team wellness with Luke\'s method', href: '/Workshop/CorporateTalks/Home', stream: 'corporate' },
    { label: 'Book a consultation', description: 'Individual pathways for leaders', href: '/book-consult?path=expert', stream: 'consults' },
  ],
  general: [
    { label: 'Book a consultation', description: 'Virtual, waitlist, or expert-led', href: '/book-consult', stream: 'consults' },
    { label: 'Programs', description: 'Signature Wellness and specialist care', href: '/programs/signature-wellness', stream: 'programs' },
    { label: 'Courses', description: 'Learning Hub · self-paced', href: '/learn/learninghub/home', stream: 'lms' },
  ],
};

export function getCrossSellForStream(stream) {
  return CROSS_SELL_MAP[stream] || CROSS_SELL_MAP.general;
}
