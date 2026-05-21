/**
 * Unified analytics — one data layer for programs, consults, and LMS.
 * Wire to GTM/GA4 in production via window.dataLayer.
 */

import { resolveRevenueStream } from '../config/revenueStreams';

const ENABLED = import.meta.env.VITE_ANALYTICS_ENABLED === 'true';

function push(payload) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
  if (import.meta.env.DEV) {
    console.debug('[analytics]', payload);
  }
}

export function trackPageView(path, stream) {
  const revenue_stream = stream || resolveRevenueStream(path);
  push({
    event: 'page_view',
    page_path: path,
    revenue_stream,
    timestamp: new Date().toISOString(),
  });
}

export function trackEvent(name, properties = {}) {
  push({
    event: name,
    ...properties,
    timestamp: new Date().toISOString(),
  });
}

export function trackFunnelStep(stream, step, label, extra = {}) {
  trackEvent('funnel_step', { revenue_stream: stream, step, label, ...extra });
}

export function trackCtaClick(stream, ctaType, destination, extra = {}) {
  trackEvent('cta_click', {
    revenue_stream: stream,
    cta_type: ctaType,
    destination,
    ...extra,
  });
}

export function trackCheckoutStarted(stream, productId, value = null) {
  trackEvent('checkout_started', {
    revenue_stream: stream,
    product_id: productId,
    value,
  });
}

export function trackCheckoutCompleted(stream, productId, value = null) {
  trackEvent('checkout_completed', {
    revenue_stream: stream,
    product_id: productId,
    value,
  });
}

export function initAnalytics() {
  if (!ENABLED) return;
  push({ event: 'analytics_init', app: 'luke-coutinho-web' });
}
