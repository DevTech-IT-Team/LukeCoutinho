// Single source of truth for self-paced courses.
// Used by:
//   - src/components/Home.jsx (Self-Paced Courses grid)
//   - src/pages/Learn/Learninghub/FeaturedCourses.jsx
//   - src/pages/Learn/Learninghub/CourseDetail.jsx (route /course/:id)
//   - src/pages/Payment.jsx (reads via location.state.course)

const courses = [
  {
    id: 'parenting-begins-before-birth',
    title: 'Parenting Begins Before Birth',
    subtitle: 'Pregnancy Foundations for a Happy Child',
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
    id: 'break-the-loop',
    title: 'Break the Loop',
    subtitle: 'Reprogram Negative Thought Patterns',
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
    id: '21-day-gut-reset',
    title: '21-Day Gut Reset',
    subtitle: 'Total Microbiome Restoration',
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
    id: 'lymphatic-reset',
    title: 'The Lymphatic Reset',
    subtitle: 'A Holistic Approach to Immunity',
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
  {
    id: 'metabolic-health-101',
    title: 'Metabolic Health 101',
    subtitle: 'Energy, Fat Loss, and Longevity',
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
];

export const getCourseById = (id) => courses.find((c) => c.id === id);

export default courses;
