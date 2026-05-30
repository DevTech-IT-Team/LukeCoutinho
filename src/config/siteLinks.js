/** Central site URLs — single source for redirects & external links */

export const WHATSAPP_CHANNEL_URL =
  'https://www.whatsapp.com/channel/0029VaEPuJ9EawdthbP8cz0K';

export const BOOKS_PATH = '/books';

/** Legacy WordPress-style paths → React routes (301-equivalent via React Router) */
export const LEGACY_REDIRECTS = [
  { from: '/free-resources', to: BOOKS_PATH },
  { from: '/downloads', to: BOOKS_PATH },
  { from: '/consult-with-luke', to: '/book-consult?path=waitlist' },
  { from: '/book-a-consult/waitlist', to: '/book-consult?path=waitlist' },
  { from: '/corporate-wellness/enquire', to: '/resources#enquire' },
  {
    from: '/programs/signature-wellness/luke/enroll',
    to: '/programs/signature-wellness/exclusive',
  },
  {
    from: '/programs/signature-wellness/team/enroll',
    to: '/programs/signature-wellness/standard',
  },
  { from: '/masterclass/reserve', to: '/masterclass#reserve-spot' },
  { from: '/book-luke-speaker', to: '/resources?intent=speaker#enquire' },
  { from: '/corporate-wellness', to: '/resources#enquire' },
  { from: '/preferred-partners', to: '/partners' },
];
