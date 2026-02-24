export interface PageMeta {
  title: string;
  description: string;
  canonical: string;
  ogType?: string;
}

const BASE_URL = 'https://austinbabyrentals.com';

export const PAGE_META: Record<string, PageMeta> = {
  '/': {
    title: 'Austin Baby Rentals | Baby Gear Delivered to Your Door',
    description:
      'Baby gear rental and delivery in Austin, TX. Cribs, car seats, strollers and more delivered to your hotel or Airbnb. 5-star rated, 371+ rentals.',
    canonical: BASE_URL,
  },
  '/gear': {
    title: 'Baby Gear Inventory | Austin Baby Rentals',
    description:
      'Browse 118+ baby gear items for rent in Austin. Cribs, strollers, car seats, high chairs, beach gear and more. Clean, insured, delivered to your door.',
    canonical: `${BASE_URL}/gear`,
  },
  '/how-it-works': {
    title: 'How It Works | Austin Baby Rentals',
    description:
      'Book online, we deliver and set up, we pick up when you leave. Baby gear rental in Austin made simple. Free delivery in South Austin.',
    canonical: `${BASE_URL}/how-it-works`,
  },
  '/reviews': {
    title: 'Reviews | Austin Baby Rentals',
    description:
      '67 five-star reviews from families who rented baby gear in Austin. Perfect 5.0 rating across 371+ completed rentals. Read what parents are saying.',
    canonical: `${BASE_URL}/reviews`,
  },
  '/austin-guide': {
    title: 'Austin Family Travel Guide | Austin Baby Rentals',
    description:
      'Everything you need to know about visiting Austin with babies and toddlers. Best neighborhoods, what to rent vs pack, and local tips from a mom.',
    canonical: `${BASE_URL}/austin-guide`,
  },
  '/blog': {
    title: 'Austin Baby Rentals Blog | Family Travel Tips',
    description:
      'Tips and guides for traveling to Austin with babies and toddlers. Event guides, packing lists, neighborhood picks, and local parent advice.',
    canonical: `${BASE_URL}/blog`,
  },
};

export const OG_DEFAULTS = {
  siteName: 'Austin Baby Rentals',
  image: `${BASE_URL}/og-image.png`,
  imageWidth: '1200',
  imageHeight: '630',
  type: 'website',
  locale: 'en_US',
};

export function getPageMeta(pathname: string): PageMeta {
  return (
    PAGE_META[pathname] ?? {
      title: 'Austin Baby Rentals | Baby Gear Delivered to Your Door',
      description:
        'Baby gear rental and delivery in Austin, TX. Cribs, car seats, strollers and more delivered to your hotel or Airbnb.',
      canonical: `${BASE_URL}${pathname}`,
    }
  );
}
