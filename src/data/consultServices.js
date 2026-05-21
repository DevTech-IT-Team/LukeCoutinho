import { format } from 'date-fns';
import { enIN } from 'date-fns/locale/en-IN';

/** Consult catalogue — mirrors lukecoutinho.com/book-a-consult terminology & pricing */

export const headNutritionistService = {
  id: 'head-nutritionist',
  title: 'Consult With Head Nutritionist',
  description:
    'Your first step with our foundational medicine team — assess your health goals and map the right pathway.',
  options: [
    {
      id: 'nutritionist-online',
      title: 'Online Consults',
      duration: '30m',
      price: '₹5,900.00',
      priceValue: 5900,
      mode: 'Virtual',
    },
    {
      id: 'nutritionist-inperson',
      title: 'In-person Consults, Taj Lands End, Mumbai',
      duration: '30m',
      price: '₹12,390.00',
      priceValue: 12390,
      mode: 'In-person',
    },
  ],
};

/** Step 1 — same three choices as lukecoutinho.com/book-a-consult */
export const consultEntryPaths = [
  {
    id: 'instant',
    title: 'Book a Virtual Consult Instantly',
    description:
      'Pick a date and time that works for you, book your virtual consultation, and get started on your wellness journey right away.',
    flow: 'nutritionist',
    needsSchedule: true,
  },
  {
    id: 'waitlist',
    title: "Join Luke's Exclusive Waitlist",
    description:
      'Interested in a personalised online consultation with Luke? Join the waitlist — our team will check the earliest available slot.',
    flow: 'waitlist',
    needsSchedule: false,
  },
  {
    id: 'expert',
    title: 'Request a Slot with Our Experts',
    description:
      'Connect with our foundational medicine and lifestyle experts. We will confirm your slot within 24–48 hours.',
    flow: 'expert',
    needsSchedule: true,
  },
];

export const instantConsultServices = [
  {
    id: 'virtual-instant',
    title: 'Book a Virtual Consult Instantly',
    description: 'Pick a date and time — start your wellness journey right away.',
    duration: '20–25 min',
    price: 'From ₹5,900',
    priceValue: 5900,
    mode: 'Virtual',
    badge: 'Instant',
  },
  {
    id: 'expert-request',
    title: 'Request a Slot with Our Experts',
    description: 'Foundational medicine & lifestyle experts — confirmed within 24–48 hours.',
    duration: '20–25 min',
    price: 'Upon selection',
    priceValue: null,
    mode: 'Virtual or In-person',
    badge: 'Request',
  },
];

export const expertCategories = [
  {
    id: 'yoga',
    label: 'Yoga Experts',
    experts: [
      { id: 'ishwar', name: 'Ishwar Rathod', role: 'Yoga Expert' },
      { id: 'ricky', name: 'Ricky Singh Chawla', role: 'Yoga & Movement' },
    ],
  },
  {
    id: 'doctors',
    label: 'Doctors',
    experts: [
      { id: 'natwar', name: 'Dr. Natwar Sharma', role: 'Integrative Medicine' },
      { id: 'sunita', name: 'Dr. Sunita Paliwal', role: 'Physician' },
      { id: 'nitin', name: 'Dr. Nitin Rajan Kochar', role: 'Physician' },
    ],
  },
  {
    id: 'fitness',
    label: 'Fitness Expert',
    experts: [{ id: 'rahul', name: 'Rahul Pancha Patel', role: 'Fitness Expert' }],
  },
  {
    id: 'meal-planning',
    label: 'Meal Planning Support',
    experts: [
      { id: 'anushka', name: 'Anushka Kapadia', role: 'Nutritionist' },
      { id: 'priyanka', name: 'Priyanka Vithlani', role: 'Meal Planning' },
    ],
  },
];

export const specialtyServices = [
  { id: 'screening', title: 'Screening', duration: '45 Minutes', price: '₹6,490' },
  { id: 'counselling-jr', title: 'Individual counselling - Jr.', duration: '45 Minutes', price: '₹6,490' },
  { id: 'counselling-sr', title: 'Individual counselling - Sr.', duration: '45 Minutes', price: '₹6,490' },
  {
    id: 'psychiatry-senior',
    title: 'Psychiatry Consultation — Senior Psychiatrists',
    duration: '45 Minutes',
    price: '₹9,271',
  },
  {
    id: 'psychiatry-marker',
    title: 'Psychiatry Consultation — Dr. Marker',
    duration: '45 Minutes',
    price: '₹16,857',
  },
];

export function buildConsultSelection({
  serviceId,
  serviceTitle,
  optionId,
  optionTitle,
  duration,
  price,
  priceValue,
  mode,
  expertId,
  expertName,
  categoryLabel,
}) {
  return {
    serviceId,
    serviceTitle,
    optionId,
    optionTitle,
    duration,
    price,
    priceValue,
    mode,
    expertId: expertId || null,
    expertName: expertName || null,
    categoryLabel: categoryLabel || null,
    label: expertName
      ? `${expertName} · ${optionTitle || serviceTitle}`
      : optionTitle || serviceTitle,
    preferredDateIso: null,
    preferredDateLabel: null,
    preferredTime: null,
    preferredTimeLabel: null,
  };
}

/** 30-minute slots, 10:00–17:30 (IST-style display via local formatter). */
export const CONSULT_TIME_SLOTS = (() => {
  const out = [];
  for (let hour = 10; hour <= 17; hour += 1) {
    for (const minute of [0, 30]) {
      if (hour === 17 && minute === 30) break;
      out.push(`${String(hour).padStart(2, '0')}:${minute === 0 ? '00' : '30'}`);
    }
  }
  return out;
})();

export function formatTimeSlotLabel(timeSlot) {
  const [h, m] = timeSlot.split(':').map(Number);
  const ref = new Date(2000, 0, 1, h, m, 0, 0);
  return format(ref, 'h:mm a');
}

/**
 * @param {ReturnType<typeof buildConsultSelection>} selection
 * @param {Date} date
 * @param {string} timeSlot — "HH:mm"
 */
export function attachScheduling(selection, date, timeSlot) {
  if (!selection || !date || !timeSlot) return selection;
  const iso = format(date, 'yyyy-MM-dd');
  const dateLabel = format(date, 'EEEE, d MMMM yyyy', { locale: enIN });
  const timeLabel = formatTimeSlotLabel(timeSlot);
  return {
    ...selection,
    preferredDateIso: iso,
    preferredDateLabel: dateLabel,
    preferredTime: timeSlot,
    preferredTimeLabel: timeLabel,
    label: `${selection.label} · ${dateLabel} · ${timeLabel}`,
  };
}
