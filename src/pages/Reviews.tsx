import { Star } from 'lucide-react';
import { BOOKING_URL, STATS, REVIEWS } from '../data/content';

export default function Reviews() {
  return (
    <>
      <section className="bg-sage-light py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-text mb-3">Reviews</h1>
          <p className="text-text-light max-w-xl mx-auto">
            {STATS.reviews} five-star reviews from families who rented with us.
            Perfect {STATS.rating} rating across {STATS.reservations} completed rentals.
          </p>
        </div>
      </section>

      {/* Rating summary */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-sm text-center mb-10">
            <div className="text-5xl font-bold text-sage-dark mb-2">{STATS.rating}</div>
            <div className="flex gap-1 justify-center mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={24} className="text-amber-400 fill-amber-400" />
              ))}
            </div>
            <p className="text-text-light">
              Based on {STATS.reviews} reviews &middot; {STATS.reservations} rentals completed
            </p>
            <p className="text-sm text-text-light mt-1">100% five-star reviews</p>
          </div>

          {/* Individual reviews */}
          <div className="space-y-4">
            {REVIEWS.map((review, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-0.5">
                    {Array.from({ length: review.rating }).map((_, j) => (
                      <Star key={j} size={16} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-sm text-text-light">{review.date}</span>
                </div>
                <p className="text-text leading-relaxed mb-3">"{review.text}"</p>
                <div className="text-sm font-semibold text-text">{review.name}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-sage-light rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-2">See All Reviews</h3>
            <p className="text-text-light mb-4">
              Read more reviews and see our full inventory on BabyQuip.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-coral hover:bg-coral-dark text-white font-semibold px-6 py-3 rounded-full no-underline transition-colors"
            >
              View on BabyQuip
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
