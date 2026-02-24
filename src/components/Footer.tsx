import { Link } from 'react-router-dom';
import { BOOKING_URL } from '../data/content';

export default function Footer() {
  return (
    <footer className="bg-sage-dark text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
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
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Service Area</h4>
            <p className="text-white/80 text-sm leading-relaxed">
              Downtown, Westlake Hills, Tarrytown, Rollingwood, Barton Creek,
              Zilker, South Congress, South Austin, Circle C, East Austin, Bee Cave, and Buda.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-coral hover:bg-coral-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full no-underline transition-colors"
            >
              Book Now
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
