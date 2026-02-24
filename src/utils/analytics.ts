export function trackBookingClick(source: string) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'booking_click', {
      event_category: 'engagement',
      event_label: source,
    });
  }
}

export function trackPageView(path: string, title: string) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', {
      page_path: path,
      page_title: title,
    });
  }
}
