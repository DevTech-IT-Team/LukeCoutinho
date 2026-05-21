import courses, { getCourseById } from '../data/courses';

export const COURSE_CATEGORIES = ['All', 'Nutrition', 'Mindset', 'Fitness', 'Healing'];

/** Popular search chips → category or topic */
export const SEARCH_TOPIC_ALIASES = {
  nutrition: 'Nutrition',
  mindset: 'Mindset',
  fitness: 'Fitness',
  healing: 'Healing',
  gut: 'Nutrition',
  'gut healing': 'Healing',
  guthealing: 'Healing',
  sleep: 'Healing',
  breath: 'Healing',
  emotional: 'Mindset',
  metabolic: 'Nutrition',
  menopause: 'Healing',
  parenting: 'Healing',
};

const DEFAULT_INCLUDES = [
  'Lifetime access on all devices',
  'Downloadable workbooks & protocols',
  'Private student community',
  'Certificate of completion',
];

function courseMatchesQuery(course, q) {
  const haystack = [
    course.title,
    course.subtitle,
    course.summary,
    course.category,
    course.level,
    course.instructor,
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();

  return haystack.includes(q);
}

export function getCoursesByCategory(category) {
  if (!category || category === 'All') return [...courses];
  return courses.filter((c) => c.category === category);
}

/**
 * Search courses — never returns empty for a non-empty query (falls back to category / all).
 */
export function searchCourses(query) {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  let results = courses.filter((c) => courseMatchesQuery(c, q));

  if (results.length === 0) {
    const aliasKey = Object.keys(SEARCH_TOPIC_ALIASES).find(
      (key) => q.includes(key) || key.includes(q)
    );
    if (aliasKey) {
      results = getCoursesByCategory(SEARCH_TOPIC_ALIASES[aliasKey]);
    }
  }

  if (results.length === 0) {
    const matchedCategory = COURSE_CATEGORIES.find(
      (cat) => cat !== 'All' && (q.includes(cat.toLowerCase()) || cat.toLowerCase().includes(q))
    );
    if (matchedCategory) results = getCoursesByCategory(matchedCategory);
  }

  if (results.length === 0) {
    results = [...courses];
  }

  return results;
}

export function resolveTopicCategory(topic) {
  const key = topic.toLowerCase().trim();
  return SEARCH_TOPIC_ALIASES[key] || COURSE_CATEGORIES.find((c) => c.toLowerCase() === key) || null;
}

export { courses, getCourseById, DEFAULT_INCLUDES };
