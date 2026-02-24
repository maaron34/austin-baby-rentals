import { Search, Truck, CheckCircle } from 'lucide-react';
import { BOOKING_URL, HOW_IT_WORKS_STEPS, FAQ_ITEMS } from '../data/content';
import { trackBookingClick } from '../utils/analytics';

const STEP_ICONS = [Search, Truck, CheckCircle];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function HowItWorks() {
  return (
    <>
      <section className="bg-sage-light py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-text mb-3">How It Works</h1>
          <p className="text-text-light max-w-xl mx-auto">
            Three simple steps. You book, we deliver, you enjoy your trip. Zero hassle.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {HOW_IT_WORKS_STEPS.map((step, i) => {
              const Icon = STEP_ICONS[i];
              return (
                <div key={step.step} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-sage-light rounded-full flex items-center justify-center">
                    <Icon size={28} className="text-sage-dark" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-coral mb-1">Step {step.step}</div>
                    <h2 className="text-xl font-bold text-text mb-2">{step.title}</h2>
                    <p className="text-text-light leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackBookingClick('how_it_works_cta')}
              className="inline-block bg-coral hover:bg-coral-dark text-white font-semibold px-8 py-3.5 rounded-full text-lg no-underline transition-colors"
            >
              Book Your Gear Now
            </a>
          </div>
        </div>
      </section>

      {/* FAQ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* FAQ */}
      <section className="bg-warm-gray py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQ_ITEMS.map((faq, i) => (
              <details
                key={i}
                className="bg-white rounded-xl shadow-sm group"
              >
                <summary className="p-5 cursor-pointer font-semibold text-text list-none flex justify-between items-center">
                  {faq.question}
                  <span className="text-text-light group-open:rotate-180 transition-transform">&#9662;</span>
                </summary>
                <div className="px-5 pb-5 text-text-light leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
