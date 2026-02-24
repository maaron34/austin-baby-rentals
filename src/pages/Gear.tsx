import { BOOKING_URL, GEAR_CATEGORIES } from '../data/content';

export default function Gear() {
  return (
    <>
      <section className="bg-sage-light py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-text mb-3">Our Gear</h1>
          <p className="text-text-light max-w-xl mx-auto">
            118+ items from trusted brands. Everything is thoroughly cleaned, safety-checked,
            and fully insured between each rental.
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {GEAR_CATEGORIES.map((cat) => (
              <div
                key={cat.name}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <h2 className="text-xl font-bold text-text mb-2">{cat.name}</h2>
                <p className="text-text-light text-sm mb-4">{cat.description}</p>
                <ul className="space-y-1.5 mb-5">
                  {cat.items.map((item) => (
                    <li key={item} className="text-sm text-text flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sage flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-coral hover:bg-coral-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full no-underline transition-colors"
                >
                  Book {cat.name}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-sage-light rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-2">Don't see what you need?</h3>
            <p className="text-text-light mb-4">
              With 118+ items in our inventory, we likely have it. Just ask!
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-coral hover:bg-coral-dark text-white font-semibold px-6 py-3 rounded-full no-underline transition-colors"
            >
              View Full Inventory
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
