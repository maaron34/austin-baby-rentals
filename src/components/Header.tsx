import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { BOOKING_URL } from '../data/content';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/gear', label: 'Our Gear' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/austin-guide', label: 'Austin Guide' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 no-underline">
          <span className="text-xl font-bold text-sage-dark">Austin Baby Rentals</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium no-underline transition-colors ${
                location.pathname === link.to
                  ? 'text-coral'
                  : 'text-text-light hover:text-coral'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-coral hover:bg-coral-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full no-underline transition-colors"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-text-light"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={`block py-3 text-sm font-medium no-underline border-b border-gray-50 ${
                location.pathname === link.to
                  ? 'text-coral'
                  : 'text-text-light'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-3 bg-coral text-white text-sm font-semibold px-5 py-3 rounded-full no-underline text-center"
          >
            Book Now
          </a>
        </nav>
      )}
    </header>
  );
}
