import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initAnalytics, trackPageView } from '../../lib/analytics';
import { resolveRevenueStream } from '../../config/revenueStreams';

/** Tracks SPA page views with unified revenue_stream dimension */
export default function PageAnalytics() {
  const location = useLocation();

  useEffect(() => {
    initAnalytics();
  }, []);

  useEffect(() => {
    const path = location.pathname + location.search;
    trackPageView(path, resolveRevenueStream(location.pathname));
  }, [location.pathname, location.search]);

  return null;
}
