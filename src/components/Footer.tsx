import { Link } from 'react-router-dom';
import { BOOKING_URL } from '../data/content';
import { trackBookingClick } from '../utils/analytics';

const neighborhoodLinks = [
  { slug: 'westlake-hills-baby-gear-rental', label: 'Westlake Hills' },
  { slug: 'tarrytown-baby-gear-rental', label: 'Tarrytown' },
  { slug: 'downtown-austin-baby-gear-rental', label: 'Downtown' },
  { slug: 'south-congress-baby-gear-rental', label: 'South Congress' },
  { slug: 'zilker-baby-gear-rental', label: 'Zilker' },
  { slug: 'barton-creek-baby-gear-rental', label: 'Barton Creek' },
  { slug: 'east-austin-baby-gear-rental', label: 'East Austin' },
  { slug: 'bee-cave-baby-gear-rental', label: 'Bee Cave' },
  { slug: 'rollingwood-baby-gear-rental', label: 'Rollingwood' },
  { slug: 'circle-c-baby-gear-rental', label: 'Circle C' },
  { slug: 'buda-baby-gear-rental', label: 'Buda' },
  { slug: 'south-austin-baby-gear-rental', label: 'South Austin' },
];

export default function Footer() {
  return (
    <footer className="bg-sage-dark text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-3">Austin Baby Rentals</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Baby gear rental and delivery in Austin, TX. Cribs, car seats, strollers and more
              delivered to your hotel, Airbnb, or vacation rental.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/gear" className="text-white/80 text-sm hover:text-white no-underline">Our Gear</Link>
              <Link to="/how-it-works" className="text-white/80 text-sm hover:text-white no-underline">How It Works</Link>
              <Link to="/reviews" className="text-white/80 text-sm hover:text-white no-underline">Reviews</Link>
              <Link to="/austin-guide" className="text-white/80 text-sm hover:text-white no-underline">Austin Family Guide</Link>
              <Link to="/blog" className="text-white/80 text-sm hover:text-white no-underline">Blog</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Neighborhoods</h4>
            <div className="flex flex-col gap-1.5">
              {neighborhoodLinks.map((n) => (
                <Link
                  key={n.slug}
                  to={`/${n.slug}`}
                  className="text-white/80 text-sm hover:text-white no-underline"
                >
                  {n.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Book Now</h4>
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              We deliver throughout Austin. Book in under 5 minutes.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackBookingClick('footer_cta')}
              className="inline-block bg-coral hover:bg-coral-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full no-underline transition-colors"
            >
              Book Your Gear
            </a>
          </div>
        </div>
        <div className="border-t border-white/20 pt-6 text-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Austin Baby Rentals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
