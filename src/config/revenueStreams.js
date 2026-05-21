/** Unified revenue streams — maps routes to analytics + cross-sell context */

export const REVENUE_STREAMS = {
  programs: 'programs',
  consults: 'consults',
  lms: 'lms',
  content: 'content',
  corporate: 'corporate',
  general: 'general',
};

export function resolveRevenueStream(pathname) {
  if (pathname.startsWith('/book-consult') || pathname === '/payment' || pathname === '/payment-success') {
    return REVENUE_STREAMS.consults;
  }
  if (pathname.startsWith('/programs')) {
    return REVENUE_STREAMS.programs;
  }
  if (pathname.startsWith('/learn/learninghub') || pathname.startsWith('/course/') || pathname.startsWith('/learn/scorm')) {
    return REVENUE_STREAMS.lms;
  }
  if (pathname.startsWith('/learn/blogs') || pathname.startsWith('/Learn/Blogs')) {
    return REVENUE_STREAMS.content;
  }
  if (pathname.includes('CorporateTalks') || pathname.includes('corporate')) {
    return REVENUE_STREAMS.corporate;
  }
  if (pathname.startsWith('/masterclass') || pathname.includes('IndividualFamilyMasterclass')) {
    return REVENUE_STREAMS.programs;
  }
  return REVENUE_STREAMS.general;
}

/** Override stream when checkout payload is known */
export function resolveStreamFromCheckoutState(state) {
  if (state?.course) return REVENUE_STREAMS.lms;
  if (state?.consult?.serviceId?.includes('signature') || state?.consult?.mode === 'Program') {
    return REVENUE_STREAMS.programs;
  }
  if (state?.consult) return REVENUE_STREAMS.consults;
  return null;
}
