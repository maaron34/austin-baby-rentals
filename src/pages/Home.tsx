import { Link } from 'react-router-dom';
import { Star, Truck, ShieldCheck, Clock } from 'lucide-react';
import { BOOKING_URL, STATS, GEAR_CATEGORIES, REVIEWS } from '../data/content';
import { trackBookingClick } from '../utils/analytics';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-sage-light py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-4 leading-tight">
            Baby Gear Delivered<br className="hidden md:block" /> to Your Door in Austin
          </h1>
          <p className="text-lg text-text-light max-w-2xl mx-auto mb-8">
            Traveling to Austin with kids? We deliver cribs, car seats, strollers and more
            to your hotel, Airbnb, or vacation rental. You enjoy the trip -- we handle the gear.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackBookingClick('hero_cta')}
              className="bg-coral hover:bg-coral-dark text-white font-semibold px-8 py-3.5 rounded-full text-lg no-underline transition-colors"
            >
              Book Your Gear
            </a>
            <Link
              to="/how-it-works"
              className="bg-white hover:bg-gray-50 text-text font-semibold px-8 py-3.5 rounded-full text-lg no-underline transition-colors border border-gray-200"
            >
              See How It Works
            </Link>
          </div>

          {/* Trust stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="text-2xl font-bold text-sage-dark">{STATS.reservations}</div>
              <div className="text-sm text-text-light">Rentals Completed</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="text-2xl font-bold text-sage-dark flex items-center justify-center gap-1">
                {STATS.rating} <Star size={18} className="text-amber-400 fill-amber-400" />
              </div>
              <div className="text-sm text-text-light">Perfect Rating</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="text-2xl font-bold text-sage-dark">{STATS.reviews}</div>
              <div className="text-sm text-text-light">5-Star Reviews</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="text-2xl font-bold text-sage-dark">{STATS.items}</div>
              <div className="text-sm text-text-light">Items Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-14 h-14 bg-sage-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck size={24} className="text-sage-dark" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Free Delivery</h3>
              <p className="text-text-light text-sm">
                Free delivery in South Austin. We deliver and set up everything at your hotel, Airbnb, or rental home.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-sage-light rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck size={24} className="text-sage-dark" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Clean & Insured</h3>
              <p className="text-text-light text-sm">
                Every item is thoroughly sanitized, safety-checked, and fully insured. Trusted brands only.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-sage-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={24} className="text-sage-dark" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Same-Day Available</h3>
              <p className="text-text-light text-sm">
                Last-minute trip? We often accommodate same-day requests. Just reach out and we will do our best.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gear categories */}
      <section className="bg-warm-gray py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-3">Our Gear</h2>
          <p className="text-text-light text-center mb-10 max-w-xl mx-auto">
            118+ items across every category. Everything clean, insured, and from brands you trust.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {GEAR_CATEGORIES.map((cat) => (
              <Link
                key={cat.name}
                to="/gear"
                className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow no-underline text-center group"
              >
                <h3 className="font-semibold text-text group-hover:text-coral transition-colors">{cat.name}</h3>
                <p className="text-text-light text-sm mt-1">{cat.items.length}+ items</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/gear"
              className="text-coral font-semibold hover:text-coral-dark no-underline"
            >
              View all gear &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-3">What Families Are Saying</h2>
          <p className="text-text-light text-center mb-10">
            {STATS.reviews} five-star reviews from families who traveled to Austin
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.slice(0, 3).map((review, i) => (
              <div key={i} className="bg-warm-gray rounded-xl p-6">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} size={16} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-text leading-relaxed mb-4">"{review.text}"</p>
                <div className="text-sm font-medium text-text-light">
                  {review.name} &middot; {review.date}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/reviews"
              className="text-coral font-semibold hover:text-coral-dark no-underline"
            >
              Read all reviews &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sage py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Book?</h2>
          <p className="text-white/90 mb-8">
            Pick your gear, choose your dates, and we handle the rest. Booking takes less than 5 minutes.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackBookingClick('home_bottom_cta')}
            className="inline-block bg-coral hover:bg-coral-dark text-white font-semibold px-8 py-3.5 rounded-full text-lg no-underline transition-colors"
          >
            Book Your Gear Now
          </a>
        </div>
      </section>
    </>
  );
}
