import { useParams, Link } from 'react-router-dom';
import { MapPin, CheckCircle } from 'lucide-react';
import { BOOKING_URL } from '../data/content';
import { getNeighborhoodBySlug } from '../data/neighborhoods';
import { OG_DEFAULTS } from '../data/seo';
import { trackBookingClick } from '../utils/analytics';

export default function NeighborhoodPage() {
  const { slug } = useParams<{ slug: string }>();
  const neighborhood = slug ? getNeighborhoodBySlug(slug) : undefined;

  if (!neighborhood) {
    return (
      <section className="py-20 px-4 text-center">
        <h1 className="text-3xl font-bold text-text mb-4">Page Not Found</h1>
        <p className="text-text-light mb-6">
          We couldn't find that neighborhood page.
        </p>
        <Link
          to="/austin-guide"
          className="text-coral font-semibold hover:text-coral-dark no-underline"
        >
          View our Austin Family Guide
        </Link>
      </section>
    );
  }

  const canonical = `https://austinbabyrentals.com/${neighborhood.slug}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Austin Baby Rentals',
    description: neighborhood.description,
    url: canonical,
    areaServed: {
      '@type': 'Place',
      name: `${neighborhood.name}, Austin, TX`,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '67',
      bestRating: '5',
    },
    priceRange: '$$',
    openingHours: 'Mo-Su 08:00-20:00',
  };

  return (
    <>
      <title>{neighborhood.title}</title>
      <meta name="description" content={neighborhood.description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={neighborhood.title} />
      <meta property="og:description" content={neighborhood.description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={OG_DEFAULTS.image} />
      <meta property="og:site_name" content={OG_DEFAULTS.siteName} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={neighborhood.title} />
      <meta name="twitter:description" content={neighborhood.description} />

      {/* Hero */}
      <section className="bg-sage-light py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 text-sage-dark mb-3">
            <MapPin size={18} />
            <span className="text-sm font-medium">{neighborhood.name}, Austin TX</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-text mb-3">
            {neighborhood.heroHeading}
          </h1>
          <p className="text-text-light max-w-xl mx-auto">
            {neighborhood.heroSubheading}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <article className="prose prose-lg max-w-none">
            {neighborhood.content.map((paragraph, i) => (
              <p key={i} className="text-text-light leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </article>

          {/* Highlights */}
          <div className="bg-warm-gray rounded-xl p-6 mt-8 mb-8">
            <h2 className="text-xl font-bold text-text mb-4">
              Why Families Love {neighborhood.name}
            </h2>
            <ul className="space-y-3">
              {neighborhood.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle
                    size={18}
                    className="text-sage-dark flex-shrink-0 mt-0.5"
                  />
                  <span className="text-text-light">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Nearby Attractions */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-text mb-4">
              Nearby Attractions
            </h2>
            <div className="flex flex-wrap gap-2">
              {neighborhood.nearbyAttractions.map((attraction, i) => (
                <span
                  key={i}
                  className="bg-sage-light text-sage-dark text-sm px-3 py-1.5 rounded-full"
                >
                  {attraction}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-sage-light rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-2">
              Need Baby Gear in {neighborhood.name}?
            </h3>
            <p className="text-text-light mb-4">
              We deliver cribs, car seats, strollers and more right to your door
              in {neighborhood.name}. Book in under 5 minutes.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackBookingClick(`neighborhood_${neighborhood.slug}`)}
              className="inline-block bg-coral hover:bg-coral-dark text-white font-semibold px-6 py-3 rounded-full no-underline transition-colors"
            >
              Book Your Gear
            </a>
          </div>

          {/* Internal links */}
          <div className="mt-10 text-center">
            <Link
              to="/austin-guide"
              className="text-coral font-semibold hover:text-coral-dark no-underline"
            >
              &larr; Back to Austin Family Guide
            </Link>
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
