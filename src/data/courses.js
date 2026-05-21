// Single source of truth for self-paced courses (search, tabs, /buy/:id, /course/:id).

const DEFAULT_INCLUDES = [
  'Lifetime access on all devices',
  'Downloadable workbooks & protocols',
  'Private student community',
  'Certificate of completion',
];

const courses = [
  {
    id: 'nutrition-mastery',
    title: 'Nutrition Mastery',
    subtitle: 'Cellular healing through nutrition',
    category: 'Nutrition',
    summary:
      'Foundational deep cellular nutrition — bio-individual foods, timing, and habits that help every cell thrive.',
    level: 'Beginner',
    lessons: 12,
    duration: '8 Weeks',
    price: '₹699',
    priceValue: 699,
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1600',
    instructor: 'Luke Coutinho',
    includes: DEFAULT_INCLUDES,
    learn: [
      'Macro and micro-nutrients for cellular repair',
      'Anti-inflammatory meal frameworks',
      'Personalising nutrition without fad diets',
      'Sustainable rituals you can keep',
    ],
    curriculum: [
      { title: 'Nutrition Foundations', length: '45 min' },
      { title: 'Cellular Nourishment', length: '60 min' },
      { title: 'Meal Timing & Rhythm', length: '50 min' },
      { title: 'Your 8-Week Protocol', length: '6 hours' },
    ],
  },
  {
    id: 'advanced-nutrition',
    title: 'Advanced Nutrition',
    subtitle: 'Clinical nutrition protocols',
    category: 'Nutrition',
    summary:
      'Clinical-grade nutrition strategies for complex conditions — layered with Luke\'s integrative lifestyle method.',
    level: 'Advanced',
    lessons: 18,
    duration: '12 Weeks',
    price: '₹1,299',
    priceValue: 1299,
    rating: 5.0,
    image:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1600',
    instructor: 'Luke Coutinho',
    includes: DEFAULT_INCLUDES,
    learn: [
      'Therapeutic food plans for metabolic and gut health',
      'Supplementation with clinical context',
      'Lab markers that actually matter',
      'Case-based protocol design',
    ],
    curriculum: [
      { title: 'Clinical Lens', length: '60 min' },
      { title: 'Therapeutic Foods', length: '90 min' },
      { title: 'Complex Cases', length: '2 hours' },
      { title: 'Long-Form Protocol', length: '8 hours' },
    ],
  },
  {
    id: 'metabolic-health-101',
    title: 'Metabolic Health 101',
    subtitle: 'Energy, Fat Loss, and Longevity',
    category: 'Nutrition',
    summary:
      'The science of energy — insulin, mitochondria and circadian rhythm — translated into food, movement and rest you can keep.',
    level: 'Intermediate',
    lessons: 12,
    duration: '6 Hours',
    price: '₹699',
    priceValue: 699,
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1600',
    instructor: 'Luke Coutinho',
    includes: DEFAULT_INCLUDES,
    learn: [
      'Insulin sensitivity and glucose stability',
      'Mitochondrial care — food, light, movement, breath',
      'Sustainable fat loss without restriction',
      'Markers, tests and what to actually track',
    ],
    curriculum: [
      { title: 'The Metabolic Lens', length: '40 min' },
      { title: 'Food for Stable Energy', length: '60 min' },
      { title: 'Movement & Mitochondria', length: '60 min' },
      { title: 'Sleep, Light, Stress', length: '60 min' },
      { title: 'Putting It Together', length: '60 min' },
    ],
  },
  {
    id: '21-day-gut-reset',
    title: '21-Day Gut Reset',
    subtitle: 'Total Microbiome Restoration',
    category: 'Nutrition',
    summary:
      'A clinical, food-first reset of the gut — inflammation, motility, the mucosal lining and the trillions of organisms that hold your health.',
    level: 'Advanced',
    lessons: 25,
    duration: '21 Days',
    price: '₹6,999',
    priceValue: 6999,
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1600',
    instructor: 'Luke Coutinho',
    includes: DEFAULT_INCLUDES,
    learn: [
      'Identify and remove personal trigger foods',
      'Repair the gut lining and re-seed the microbiome',
      'Daily protocol — meals, supplements, sleep, movement',
      'Reintroduction and lifelong maintenance',
    ],
    curriculum: [
      { title: 'Week 1 — Remove', length: '7 days' },
      { title: 'Week 2 — Repair', length: '7 days' },
      { title: 'Week 3 — Re-seed', length: '7 days' },
      { title: 'Reintroduction Protocol', length: '60 min' },
    ],
  },
  {
    id: 'mindset-blueprint',
    title: 'Mindset Blueprint',
    subtitle: 'Mental resilience and emotional mastery',
    category: 'Mindset',
    summary:
      'Build emotional steadiness with integrative tools — breath, awareness, and daily practices rooted in neuroscience.',
    level: 'Intermediate',
    lessons: 10,
    duration: '6 Weeks',
    price: '₹699',
    priceValue: 699,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1600',
    instructor: 'Luke Coutinho',
    includes: DEFAULT_INCLUDES,
    learn: [
      'Stress response and nervous-system regulation',
      'Daily mindfulness and pause rituals',
      'Reframing patterns without toxic positivity',
      'Sleep and nutrition as mindset anchors',
    ],
    curriculum: [
      { title: 'Awareness Foundations', length: '40 min' },
      { title: 'Emotional Regulation', length: '55 min' },
      { title: 'Daily Practice Stack', length: '6 hours' },
    ],
  },
  {
    id: 'focus-clarity',
    title: 'Focus & Clarity',
    subtitle: 'Peak performance and productivity',
    category: 'Mindset',
    summary:
      'Sharpen attention and calm the noise — circadian rhythm, breath, and nutrition for sustained mental clarity.',
    level: 'Advanced',
    lessons: 14,
    duration: '7 Weeks',
    price: '₹899',
    priceValue: 899,
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1600',
    instructor: 'Luke Coutinho',
    includes: DEFAULT_INCLUDES,
    learn: [
      'Attention without burnout',
      'Brain-fuel nutrition and hydration',
      'Breath protocols for focus states',
      'Evening wind-down for tomorrow\'s clarity',
    ],
    curriculum: [
      { title: 'The Focused Brain', length: '50 min' },
      { title: 'Fuel & Recovery', length: '70 min' },
      { title: '7-Week Clarity Protocol', length: '5 hours' },
    ],
  },
  {
    id: 'break-the-loop',
    title: 'Break the Loop',
    subtitle: 'Reprogram Negative Thought Patterns',
    category: 'Mindset',
    summary:
      'A quiet study in awareness — the neuroscience of habit, the practice of pause, and a 31-step path out of looping thought.',
    level: 'Intermediate',
    lessons: 31,
    duration: '8 Hours',
    price: '₹699',
    priceValue: 699,
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1600',
    instructor: 'Luke Coutinho',
    includes: DEFAULT_INCLUDES,
    learn: [
      'How thought loops are formed and reinforced',
      'Pause, label and reframe — daily micro-practices',
      'Nutrition and breath as nervous-system anchors',
      'A 31-day protocol for sustained change',
    ],
    curriculum: [
      { title: 'The Architecture of a Loop', length: '30 min' },
      { title: 'The Pause Practice', length: '45 min' },
      { title: 'Body, Breath, Brain', length: '60 min' },
      { title: '31 Days of Reprogramming', length: '6 hours' },
    ],
  },
  {
    id: 'functional-fitness',
    title: 'Functional Fitness',
    subtitle: 'Movement and strength optimization',
    category: 'Fitness',
    summary:
      'Safe, personalised movement with recovery built in — strength, agility, and energy without extremes.',
    level: 'Advanced',
    lessons: 15,
    duration: '10 Weeks',
    price: '₹899',
    priceValue: 899,
    rating: 5.0,
    image:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1600',
    instructor: 'Luke Coutinho',
    includes: DEFAULT_INCLUDES,
    learn: [
      'Assess mobility and strength baselines',
      'Progressive loading without injury',
      'Recovery, sleep, and protein timing',
      'Movement as medicine for metabolism',
    ],
    curriculum: [
      { title: 'Movement Assessment', length: '45 min' },
      { title: 'Strength Blocks', length: '2 hours' },
      { title: 'Recovery & Longevity', length: '90 min' },
    ],
  },
  {
    id: 'body-reset',
    title: 'Body Reset Program',
    subtitle: 'Complete metabolic transformation',
    category: 'Fitness',
    summary:
      'A structured reset for body composition and vitality — food, movement, sleep, and breath in one integrated path.',
    level: 'Intermediate',
    lessons: 16,
    duration: '9 Weeks',
    price: '₹999',
    priceValue: 999,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=1600',
    instructor: 'Luke Coutinho',
    includes: DEFAULT_INCLUDES,
    learn: [
      'Sustainable fat loss and muscle preservation',
      'Daily movement stacks for busy lives',
      'Circadian alignment for results',
      'Maintenance after the reset',
    ],
    curriculum: [
      { title: 'Reset Foundations', length: '50 min' },
      { title: 'Training & Nutrition Sync', length: '2 hours' },
      { title: '9-Week Transformation', length: '6 hours' },
    ],
  },
  {
    id: 'deep-healing',
    title: 'Deep Healing',
    subtitle: 'Recovery and holistic transformation',
    category: 'Healing',
    summary:
      'Integrative recovery principles — inflammation, immunity, rest, and emotional steadiness as one system.',
    level: 'Beginner',
    lessons: 9,
    duration: '5 Weeks',
    price: '₹699',
    priceValue: 699,
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1600',
    instructor: 'Luke Coutinho',
    includes: DEFAULT_INCLUDES,
    learn: [
      'Inflammation and immune balance',
      'Restorative sleep and breath',
      'Foods that support repair',
      'Emotional wellness in recovery',
    ],
    curriculum: [
      { title: 'Healing Foundations', length: '40 min' },
      { title: 'Daily Repair Rituals', length: '4 hours' },
    ],
  },
  {
    id: 'gut-healing-protocol',
    title: 'Gut Healing Protocol',
    subtitle: 'Restore digestion and immunity',
    category: 'Healing',
    summary:
      'Targeted gut repair for digestion, immunity, and mood — gentle, clinical, and sustainable.',
    level: 'Intermediate',
    lessons: 11,
    duration: '6 Weeks',
    price: '₹799',
    priceValue: 799,
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=1600',
    instructor: 'Luke Coutinho',
    includes: DEFAULT_INCLUDES,
    learn: [
      'Identify digestive triggers',
      'Mucosal repair and microbiome support',
      'Breath and stress for gut-brain axis',
      'Long-term maintenance foods',
    ],
    curriculum: [
      { title: 'Gut-Brain Connection', length: '45 min' },
      { title: 'Repair Protocol', length: '5 hours' },
    ],
  },
  {
    id: 'parenting-begins-before-birth',
    title: 'Parenting Begins Before Birth',
    subtitle: 'Pregnancy Foundations for a Happy Child',
    category: 'Healing',
    summary:
      'A gentle, science-led companion for the months that shape a lifetime — nutrition, breath, sleep and emotional regulation for parent and child.',
    level: 'Intermediate',
    lessons: 6,
    duration: '4.5 Hours',
    price: '₹699',
    priceValue: 699,
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=1600',
    instructor: 'Luke Coutinho',
    includes: DEFAULT_INCLUDES,
    learn: [
      'Pre-conception nutrition and cellular preparation',
      'Trimester-wise foods, supplements and lifestyle rituals',
      'Breath, sleep and stress regulation for the parent',
      'Bonding, music and emotional environment for the child',
    ],
    curriculum: [
      { title: 'Welcome & Foundations', length: '20 min' },
      { title: 'Pre-conception Cellular Reset', length: '45 min' },
      { title: 'Trimester One — Nourish', length: '50 min' },
      { title: 'Trimester Two — Build', length: '55 min' },
      { title: 'Trimester Three — Soften', length: '45 min' },
      { title: 'The Fourth Trimester', length: '35 min' },
    ],
  },
  {
    id: 'redefining-menopause',
    title: 'Redefining Menopause',
    subtitle: 'Strength & Hormonal Harmony',
    category: 'Healing',
    summary:
      'A clinical, integrative protocol for the transition — bone, brain, mood and metabolism, redesigned with food, movement and breath.',
    level: 'Intermediate',
    lessons: 30,
    duration: '12 Hours',
    price: '₹699',
    priceValue: 699,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=1600',
    instructor: 'Luke Coutinho',
    includes: DEFAULT_INCLUDES,
    learn: [
      'Hormonal mapping and what changes (and what does not)',
      'Bone, muscle and metabolic protection protocols',
      'Nutrition, supplementation and circadian repair',
      'Sleep, libido and emotional steadiness',
    ],
    curriculum: [
      { title: 'Understanding the Transition', length: '60 min' },
      { title: 'Foods That Hold You', length: '90 min' },
      { title: 'Strength & Bone Density', length: '75 min' },
      { title: 'Sleep, Mood & Cognition', length: '90 min' },
      { title: 'Long-Form Daily Practice', length: '120 min' },
    ],
  },
  {
    id: 'lymphatic-reset',
    title: 'The Lymphatic Reset',
    subtitle: 'A Holistic Approach to Immunity',
    category: 'Healing',
    summary:
      'The forgotten system — drained, moved and supported. A gentle daily practice for immunity, skin and quiet vitality.',
    level: 'Professional',
    lessons: 20,
    duration: '10 Hours',
    price: '₹699',
    priceValue: 699,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1600',
    instructor: 'Luke Coutinho',
    includes: DEFAULT_INCLUDES,
    learn: [
      'How the lymphatic system actually works',
      'Daily drainage and movement protocols',
      'Skin, breath and hydration as lymphatic tools',
      'Working with congestion, inflammation and immunity',
    ],
    curriculum: [
      { title: 'The System Beneath the Skin', length: '45 min' },
      { title: 'Drainage Practice — Daily', length: '90 min' },
      { title: 'Foods, Herbs & Hydration', length: '60 min' },
      { title: 'Long-Form Protocol', length: '6 hours' },
    ],
  },
];

const COURSE_ID_ALIASES = {
  'gut-healing': 'gut-healing-protocol',
};

export const getCourseById = (id) => {
  const resolved = COURSE_ID_ALIASES[id] || id;
  return courses.find((c) => c.id === resolved);
};

export default courses;
