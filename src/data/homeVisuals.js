import { SIX_PILLARS } from './brandContent';
import { WHATSAPP_CHANNEL_URL, BOOKS_PATH } from '../config/siteLinks';

import partnerDrReddy from '../assets/Dr.Reddy_logo.jpg';
import partnerIbm from '../assets/ibm.png';
import partnerIma from '../assets/IMAbg.png';
import partnerMetLife from '../assets/MetLifebg.png';
import partnerTata from '../assets/Tata.png';
import partnerUber from '../assets/Uber.png';
import partnerWipro from '../assets/Wipro.png';
import partnerWns from '../assets/WNSbg.png';

import mediaGq from '../assets/GQ.png';
import mediaVogue from '../assets/VOGUE.png';
import mediaFitIndia from '../assets/FitIndia.png';
import mediaDoctors from '../assets/CeleberatedDoctors.png';
import mediaHealthcare from '../assets/Healthcareleadership.png';

import imgLukeConsult from '../assets/imluke.png';
import imgLuke from '../assets/Lukequotenew.jpg';
import imgTeam from '../assets/team.avif';
import imgExclusive from '../assets/signature.jpg';
import imgStandard from '../assets/neimg.jpg';
import imgCourses from '../assets/education.jpg';
import imgMasterclass from '../assets/wellness.jpg';
import imgCorporate from '../assets/Corporate.jpg';
import imgGut from '../assets/Guthealth.jpg';
import imgCancer from '../assets/CancerCare.jpg';
import imgPregnancy from '../assets/PregnancyCare.webp';

import imgNutrition from '../assets/recipe.jpg';
import imgSleep from '../assets/wellness.jpg';
import imgEmotional from '../assets/EmpowerPeople.jpg';
import imgSpirit from '../assets/signature.jpg';
import imgBreath from '../assets/education.jpg';
/** YouTube poster + embed helpers for Six Pillars cards */
export const youtubeThumbnail = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
export const youtubeEmbedUrl = (id) =>
  `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`;

import podcast1 from '../assets/HealingThroughFood.jpg';
import podcast2 from '../assets/UnlockingTheSecretsofSkin.jpg';
import podcast3 from '../assets/BuildingAnHonest.jpg';


export const HOME_MANIFESTO = {
  eyebrow: 'Team Luke · Foundational Medicine',
  title: 'Where lifestyle is',
  titleAccent: 'foundational medicine.',
  lede:
    'For over 14 years, Luke and Team Luke have guided people through prevention, recovery, and everyday wellness — with science-backed lifestyle medicine you can actually live. Everything on this page opens from one place, so you never have to hunt.',
};

export const HOME_HUB_INTRO = {
  eyebrow: 'Your starting point',
  title: 'What brings you here?',
  lede:
    'Pick consult, programs, learn, or explore — we’ll point you to the right next step.',
};

/** Scroll targets from “What brings you here?” — maps to on-page categories */
export const HOME_PATHWAYS = [
  { id: 'care', label: 'Consult', hint: 'Luke or Team', num: '01' },
  { id: 'programs', label: 'Programs', hint: 'Signature Wellness', num: '02' },
  { id: 'learn', label: 'Learn', hint: 'Courses & masterclass', num: '03' },
  { id: 'explore', label: 'Explore', hint: 'Resources & more', num: '04' },
];

export const HOME_FOUNDATION = {
  eyebrow: 'The backbone of everything we do',
  title: 'Foundational Medicine',
  summary:
    'For over 14 years, Luke and Team Luke have worked with thousands of people across conditions, ages, and life stages. No treatment works in isolation if the body’s foundations are weak.',
  detail:
    'Foundational Medicine is the science-backed framework behind every program we run. It strengthens how the body eats, moves, sleeps, feels, breathes, and adapts — so medical care, nutrition, and lifestyle choices can actually work better. This is not about replacing treatment. It’s about preparing the body to respond.',
  cta: 'Explore the science behind our approach',
  ctaTo: '/about/approach',
};

export const HOME_FLAGSHIP = {
  eyebrow: 'Our flagship wellness program',
  title: 'Signature Wellness Program',
  lede:
    'A highly personalised, premium program built around your body, your condition, and your life — guided by Foundational Medicine.',
  cta: 'View all wellness programs',
  ctaTo: '/programs/signature-wellness',
};

export const HOME_SPECIALTY_PROGRAMS = [
  { label: 'Fertility & reproductive health', to: '/programs/pregnancy' },
  { label: 'Gut health', to: '/programs/gut' },
  { label: 'Cancer care support', to: '/programs/cancer-care' },
  { label: 'Weight management', to: '/programs/signature-wellness' },
  { label: 'Thyroid & hormonal health', to: '/programs/signature-wellness' },
  { label: 'Diabetes & metabolic care', to: '/programs/signature-wellness' },
  { label: 'Neurological & cognitive health', to: '/programs/signature-wellness' },
  { label: 'Liver & kidney support', to: '/programs/signature-wellness' },
];

export const HOME_SOCIETY = [
  {
    id: 'bharat',
    title: 'Bharat School Menu & Lifestyle Plan',
    line: 'For every school, every home, and every child — aligned with a national vision for healthier children.',
    cta: 'Explore Bharat recipes',
    to: '/bharat/dish',
  },
  {
    id: 'cancer-care',
    title: 'Cancer Care — Aap Ke Liye',
    line: 'Free holistic support by Team Luke for underprivileged cancer patients.',
    cta: 'Learn about the initiative',
    to: '/programs/cancer-care',
  },
];

export const HOME_CORPORATE = {
  eyebrow: 'Corporate wellness',
  title: 'Sustainable leadership is the new competitive advantage',
  lede:
    'Science-backed programs for leaders and teams — resilience, stress, and high performance without burnout.',
  formats: [
    'Guest lectures',
    'Leadership wellness sessions',
    'Quality of Life assessments',
    'Productivity & burnout prevention',
  ],
  cta: 'Corporate enquiry',
  ctaTo: '/resources#enquire',
};

export const HOME_TRUST_STATS = [
  { value: '50M+', label: 'Lives reached' },
  { value: '20,000+', label: 'Patients guided' },
  { value: '200+', label: 'Expert team' },
  { value: '14+', label: 'Years of care' },
];

export const HOME_PARTNER_LOGOS = [
  { name: "Dr. Reddy's", src: partnerDrReddy },
  { name: 'Tata', src: partnerTata },
  { name: 'Wipro', src: partnerWipro },
  { name: 'IBM', src: partnerIbm },
  { name: 'Uber', src: partnerUber },
  { name: 'MetLife', src: partnerMetLife },
  { name: 'WNS', src: partnerWns },
  { name: 'IMA', src: partnerIma },
];

export const HOME_MEDIA_LOGOS = [
  { name: 'GQ', src: mediaGq },
  { name: 'Vogue', src: mediaVogue },
  { name: 'Fit India', src: mediaFitIndia },
  { name: 'Celebrated Doctors', src: mediaDoctors },
  { name: 'Healthcare Leadership', src: mediaHealthcare },
];

export const HOME_CONSULT = [
  {
    id: 'luke',
    step: '01',
    title: 'Consult with Luke',
    line: 'Exclusive waitlist · personalised with Luke',
    cta: 'Join waitlist',
    to: '/book-consult?path=waitlist',
    image: imgLukeConsult,
  },
  {
    id: 'team',
    step: '02',
    title: 'Consult with Team Luke',
    line: 'Book a slot · virtual or in-person Mumbai',
    cta: 'Book now',
    to: '/book-consult?path=instant',
    image: imgTeam,
  },
];

export const HOME_PROGRAMS = [
  {
    id: 'with-luke',
    title: 'With Luke',
    line: 'Exclusive Signature Wellness',
    to: '/programs/signature-wellness/exclusive',
    image: imgExclusive,
  },
  {
    id: 'with-team',
    title: 'With Team Luke',
    line: 'Guided program · same method',
    to: '/programs/signature-wellness/standard',
    image: imgStandard,
  },
];

/** Hub — Programs tab (major offerings from lukecoutinho.com) */
export const HOME_HUB_PROGRAMS = [
  {
    id: 'signature',
    size: 'wide',
    badge: 'Flagship',
    title: 'Signature Wellness Program',
    line: 'Personalised care · With Luke or Team',
    cta: 'Explore programs',
    to: '/programs/signature-wellness',
    image: imgExclusive,
  },
  {
    id: 'corporate',
    badge: 'Organisations',
    title: 'Corporate Wellness',
    line: 'Leadership sessions · QoL · burnout care',
    cta: 'For teams',
    to: '/Workshop/CorporateTalks/Home',
    image: imgCorporate,
  },
  {
    id: 'with-luke',
    title: 'With Luke',
    line: 'Exclusive high-touch program',
    cta: 'View program',
    to: '/programs/signature-wellness/exclusive',
    image: imgLuke,
  },
  {
    id: 'with-team',
    title: 'With Team Luke',
    line: 'Same method · expert coaches',
    cta: 'View program',
    to: '/programs/signature-wellness/standard',
    image: imgTeam,
  },
  {
    id: 'gut',
    title: 'Gut Health Program',
    line: 'Microbiome · digestion · immunity',
    cta: 'Learn more',
    to: '/programs/gut',
    image: imgGut,
  },
  {
    id: 'cancer',
    title: 'Cancer Care Support',
    line: 'Holistic care with medical treatment',
    cta: 'Learn more',
    to: '/programs/cancer-care',
    image: imgCancer,
  },
  {
    id: 'pregnancy',
    title: 'Fertility & Pregnancy',
    line: 'Trimester-wise nutrition & lifestyle',
    cta: 'Learn more',
    to: '/programs/pregnancy',
    image: imgPregnancy,
  },
];

/** Hub — Learn tab */
export const HOME_HUB_LEARN = [
  {
    id: 'courses',
    badge: 'Self-paced',
    title: "Luke's Learning Hub",
    line: 'Courses on nutrition, sleep, gut & more',
    cta: 'Browse courses',
    to: '/learn/learninghub/home',
    image: imgCourses,
    size: 'wide',
  },
  {
    id: 'masterclass',
    badge: 'Live',
    title: 'Family Masterclass',
    line: 'Workshops for families & groups',
    cta: 'View masterclass',
    to: '/masterclass',
    image: imgMasterclass,
  },
  {
    id: 'podcast',
    badge: 'Listen',
    title: 'Podcasts',
    line: 'Experts on health & lifestyle',
    cta: 'Listen now',
    to: '/Podcast/Podcast',
    image: podcast1,
  },
];

/** Hub — Explore tab */
export const HOME_HUB_EXPLORE = [
  {
    id: 'resources',
    title: 'Free resources',
    line: 'Guides & educational tools',
    cta: 'Explore',
    to: BOOKS_PATH,
    image: imgCourses,
  },
  {
    id: 'recipes',
    title: 'Health recipes',
    line: 'Bharat school menu & dishes',
    cta: 'View recipes',
    to: '/bharat/dish',
    image: imgNutrition,
  },
  {
    id: 'blogs',
    title: 'Blogs',
    line: 'Simple ideas · deep impact',
    cta: 'Read',
    to: '/learn/blogs',
    image: podcast2,
  },
  {
    id: 'community',
    title: 'Join community',
    line: 'Wellness channel on WhatsApp',
    cta: 'Join',
    to: WHATSAPP_CHANNEL_URL,
    external: true,
    image: imgEmotional,
  },
  {
    id: 'approach',
    title: 'Our approach',
    line: 'Foundational Medicine science',
    cta: 'Discover',
    to: '/about/approach',
    image: imgSpirit,
  },
];

export const HOME_LEARN = [
  {
    id: 'courses',
    title: 'Self-Paced Courses',
    line: "Luke's Learning Hub — learn at your pace",
    to: '/learn/learninghub/home',
    image: imgCourses,
    large: true,
  },
  {
    id: 'masterclass',
    title: 'Masterclass',
    line: 'Live workshops for families',
    to: '/masterclass',
    image: imgMasterclass,
    large: false,
  },
];

export const HOME_DISCOVER = [
  { label: 'Corporate Wellness', to: '/Workshop/CorporateTalks/Home' },
  { label: 'Free Resources', to: BOOKS_PATH },
  { label: 'Health Recipes', to: '/bharat/dish' },
  { label: 'Educational Blogs', to: '/learn/blogs' },
  {
    label: 'Join Community',
    to: WHATSAPP_CHANNEL_URL,
    external: true,
  },
];

/** Brand orange used across Six Pillars cards */
const PILLAR_BRAND_ORANGE = '#ff8f00';
const PILLAR_BRAND_GLOW = 'rgba(255, 143, 0, 0.38)';

/**
 * Six Pillars — each card uses a different Luke Coutinho YouTube video.
 * @see https://www.youtube.com/@LukeCoutinho
 */
export const HOME_LC_PILLARS = [
  {
    id: 'movement',
    num: '01',
    title: 'Adequate Holistic Movement',
    tagline: 'Move with intention — not excess.',
    icon: 'movement',
    color: PILLAR_BRAND_ORANGE,
    glow: PILLAR_BRAND_GLOW,
    youtubeId: '4_WNYVdI3BM',
  },
  {
    id: 'spirit',
    num: '02',
    title: 'Spirit & Breathwork',
    tagline: 'Stillness and breath that switch on repair.',
    icon: 'spirit',
    color: PILLAR_BRAND_ORANGE,
    glow: PILLAR_BRAND_GLOW,
    youtubeId: '40VTUMsZ5Uc',
  },
  {
    id: 'nutrition',
    num: '03',
    title: 'Food Science & Nutrient Synergy',
    tagline: 'Nourishment tuned to your biology.',
    icon: 'nutrition',
    color: PILLAR_BRAND_ORANGE,
    glow: PILLAR_BRAND_GLOW,
    youtubeId: 'GTRu6gmt7d4',
  },
  {
    id: 'sleep',
    num: '04',
    title: 'Deep Sleep',
    tagline: 'Sleep as medicine — rhythm and recovery.',
    icon: 'sleep',
    color: PILLAR_BRAND_ORANGE,
    glow: PILLAR_BRAND_GLOW,
    youtubeId: '8I8pSZi38Dc',
  },
  {
    id: 'emotional',
    num: '05',
    title: 'Emotional Wellness',
    tagline: 'Calm within — where healing begins.',
    icon: 'emotional',
    color: PILLAR_BRAND_ORANGE,
    glow: PILLAR_BRAND_GLOW,
    youtubeId: '4DU39FPJ3L4',
  },
  {
    id: 'nature',
    num: '06',
    title: 'Nature: Internal & External Environment',
    tagline: 'Your inner world and the world around you.',
    icon: 'nature',
    color: PILLAR_BRAND_ORANGE,
    glow: PILLAR_BRAND_GLOW,
    youtubeId: 'OQ2H0WCuRdc',
  },
];

export const HOME_SIX_PILLARS_INTRO = {
  lede: 'Six foundations that prepare the body to heal, recover, and stay well.',
  tagline: '— Begin with what the body already knows.',
};

export const HOME_TESTIMONIALS = [
  {
    num: '01',
    name: 'Shashi Singh',
    location: 'USA · Signature Wellness',
    quote:
      'Ulcerative Colitis reversed — recent colonoscopy showed my colon fully healed.',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
  },
  {
    num: '02',
    name: 'Satish',
    location: 'Mumbai',
    quote: '14 years of Psoriasis — 95% patch-free in three months.',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
  },
  {
    num: '03',
    name: 'Viral Patel',
    location: 'Bengaluru',
    quote: 'Lost 25+ lbs and finally understand my body.',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800',
  },
];

export const HOME_QOL_CTA = {
  title: 'Ready for your next step?',
  lede:
    'Book a consult with Luke or Team Luke, or explore programs, learning, and resources — choose what fits where you are today.',
  primaryCta: { label: 'Book consult', to: '/book-consult' },
  secondaryCta: { label: 'Explore more', to: '/#journey' },
};

export const HOME_FAQ_INTRO = {
  eyebrow: 'Frequently asked questions',
  title: 'Answers for your wellness journey',
  lede:
    'Insights tailored to guide you — from consults and programs to how we support complex health conditions.',
};

export const HOME_FAQ_ITEMS = [
  {
    id: 'who-consult',
    question: 'Who can take a consult?',
    answer:
      'A consult with Team Luke is for anyone seeking science-backed guidance on health, understanding root causes, choosing the right program, or starting a holistic lifestyle journey — whether you have a diagnosis or simply want to improve how you feel.',
  },
  {
    id: 'expect-consult',
    question: 'What can you expect from a consult?',
    points: [
      'Science-based advice from registered dietitians and clinical experts.',
      'Post-consult summary notes and personalised recommendations.',
      'Exploration of root causes for a more targeted approach.',
      'Practical lifestyle tips tailored to your condition and goals.',
    ],
  },
  {
    id: 'which-program',
    question: 'Which program would be the most suitable for me?',
    points: [
      'Each program is crafted around your goals and level of support you want from Luke and the integrative team.',
      'Program advisors help match you to the best-fit option.',
      'Explore real stories in our testimonials to see outcomes from others like you.',
    ],
  },
  {
    id: 'pricing',
    question: 'Why are the programs priced so high?',
    points: [
      'We believe health is an investment, not a cost — each plan is personalised to you.',
      'Our experts bring years of clinical and coaching experience.',
      'The changes you build become a sustainable roadmap for long-term wellbeing.',
    ],
  },
  {
    id: 'health-conditions',
    question:
      'I have health issues (cancer, diabetes, BP, hormones, skin, thyroid, etc.). How will your program help?',
    points: [
      'No two clients or plans are alike — we focus on strengthening your foundations first.',
      'We assess your lifestyle history and tailor a plan to your condition.',
      'Our protocols address immunity, gut health, and recovery alongside medical care.',
      'With experience across 40+ conditions, we help you make sustainable, lifelong shifts.',
    ],
  },
];

export const HOME_CONTENT_FEED = [
  {
    type: 'Podcast',
    title: 'Healing Through Food and Science',
    meta: 'Dr. William Li',
    image: podcast1,
    href: '/Podcast/Podcast',
    featured: true,
  },
  {
    type: 'Blog',
    title: 'Warm bowls for recovery',
    meta: 'Nutrition',
    image:
      'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800',
    href: '/learn/blogs',
  },
  {
    type: 'Podcast',
    title: 'Skin, Hair & Aging',
    meta: 'Dr. Sonali Kohli',
    image: podcast2,
    href: '/Podcast/Podcast',
  },
];
