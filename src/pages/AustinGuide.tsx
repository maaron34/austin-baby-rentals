import { BOOKING_URL } from '../data/content';

export default function AustinGuide() {
  return (
    <>
      <section className="bg-sage-light py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-text mb-3">Austin Family Travel Guide</h1>
          <p className="text-text-light max-w-xl mx-auto">
            Everything you need to know about visiting Austin with babies and toddlers.
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-text mb-4">
              Traveling to Austin with a Baby: Everything You Need to Know
            </h2>
            <p className="text-text-light leading-relaxed mb-6">
              Austin is one of the best cities in Texas for a family vacation. From the stunning
              Barton Springs Pool to kid-friendly restaurants on South Congress, there is plenty
              to do with little ones in tow. The trick is not overpacking -- and that is where
              baby gear rental comes in.
            </p>

            <h3 className="text-xl font-bold text-text mb-3">What to Rent vs. What to Pack</h3>
            <p className="text-text-light leading-relaxed mb-4">
              <strong>Rent these</strong> (bulky, available locally, not worth checking):
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-text-light">
              <li><strong>Crib or Pack and Play</strong> -- hotels often have limited supply and they are not always clean. A rental crib is guaranteed to be sanitized and ready.</li>
              <li><strong>Car seat</strong> -- if you are flying in and renting a car, skip the airport car seat hassle. We deliver to your rental car pickup or hotel.</li>
              <li><strong>Stroller</strong> -- essential for South Congress, Zilker Park, and the Domain. Too bulky for the plane.</li>
              <li><strong>High chair</strong> -- Airbnbs rarely have them. Hotels sometimes do, but quality varies.</li>
              <li><strong>Beach and outdoor gear</strong> -- baby pools, sun tents, and outdoor mats for Austin's parks.</li>
            </ul>

            <p className="text-text-light leading-relaxed mb-6">
              <strong>Pack these</strong> (small, personal, hard to rent):
              Diapers and wipes, favorite blanket or stuffed animal, medications, bottles and formula,
              a few changes of clothes, and sunscreen.
            </p>

            <h3 className="text-xl font-bold text-text mb-3">Best Austin Neighborhoods for Families</h3>
            <div className="space-y-4 mb-6">
              <div className="bg-warm-gray rounded-lg p-4">
                <h4 className="font-semibold text-text">Westlake Hills / Rollingwood</h4>
                <p className="text-text-light text-sm mt-1">
                  Beautiful Hill Country homes, top-rated Eanes ISD schools, and a quiet upscale feel
                  just minutes from downtown. Popular for luxury vacation rentals and visiting grandparents.
                  We deliver throughout Westlake and Rollingwood.
                </p>
              </div>
              <div className="bg-warm-gray rounded-lg p-4">
                <h4 className="font-semibold text-text">Tarrytown / Clarksville / Pemberton Heights</h4>
                <p className="text-text-light text-sm mt-1">
                  Classic central Austin neighborhoods with tree-lined streets, walkable to downtown and
                  Lake Austin. Gorgeous historic homes and high-end Airbnbs. A favorite for families
                  who want the best of Austin within walking distance.
                </p>
              </div>
              <div className="bg-warm-gray rounded-lg p-4">
                <h4 className="font-semibold text-text">South Austin / Zilker / Barton Hills</h4>
                <p className="text-text-light text-sm mt-1">
                  Close to Barton Springs, Zilker Park, and South Lamar restaurants. Lots of family-friendly
                  Airbnbs with yards. Our home base -- free delivery here.
                </p>
              </div>
              <div className="bg-warm-gray rounded-lg p-4">
                <h4 className="font-semibold text-text">South Congress / Bouldin Creek / Travis Heights</h4>
                <p className="text-text-light text-sm mt-1">
                  Walkable, great food, and the famous SoCo shopping strip. Bouldin Creek and Travis Heights
                  have charming vacation rentals. Book early -- it fills up fast during SXSW and ACL.
                </p>
              </div>
              <div className="bg-warm-gray rounded-lg p-4">
                <h4 className="font-semibold text-text">Downtown / Rainey Street</h4>
                <p className="text-text-light text-sm mt-1">
                  Central location, walkable to most attractions. Great for families who want
                  to be in the middle of the action. Hotel delivery is easy here.
                </p>
              </div>
              <div className="bg-warm-gray rounded-lg p-4">
                <h4 className="font-semibold text-text">East Austin</h4>
                <p className="text-text-light text-sm mt-1">
                  Trendy food scene, breweries with patios (kid-friendly!), and a more local vibe.
                  Lots of vacation rental options.
                </p>
              </div>
              <div className="bg-warm-gray rounded-lg p-4">
                <h4 className="font-semibold text-text">Bee Cave / Barton Creek / Oak Hill</h4>
                <p className="text-text-light text-sm mt-1">
                  Hill Country feel just minutes from the city. Barton Creek has resort-style living,
                  Bee Cave has upscale shopping and dining, and Oak Hill is a quiet family hub.
                  We deliver throughout this area.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-text mb-3">Austin Events: What to Know as a Parent</h3>
            <div className="space-y-4 mb-6">
              <div className="bg-warm-gray rounded-lg p-4">
                <h4 className="font-semibold text-text">SXSW (March)</h4>
                <p className="text-text-light text-sm mt-1">
                  The city fills up. Book gear early -- we see a surge in crib and car seat rentals
                  during SXSW. Hotels charge premium rates, so Airbnbs are a smart move for families.
                </p>
              </div>
              <div className="bg-warm-gray rounded-lg p-4">
                <h4 className="font-semibold text-text">ACL Festival (October)</h4>
                <p className="text-text-light text-sm mt-1">
                  Two weekends in Zilker Park. If you are bringing the family, gear up with strollers
                  and sun protection. ACL has a kids area too.
                </p>
              </div>
              <div className="bg-warm-gray rounded-lg p-4">
                <h4 className="font-semibold text-text">Formula 1 / COTA (October)</h4>
                <p className="text-text-light text-sm mt-1">
                  The race is far south near the Circuit of the Americas. If you are staying
                  near COTA or in South Austin, we are right in the neighborhood.
                </p>
              </div>
              <div className="bg-warm-gray rounded-lg p-4">
                <h4 className="font-semibold text-text">UT Football (September - November)</h4>
                <p className="text-text-light text-sm mt-1">
                  Game weekends bring grandparents visiting grandkids. We rent a lot of cribs
                  and high chairs for these visits.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-text mb-3">Tips from a Local Mom</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-text-light">
              <li>Austin is HOT in summer (May through September). Pack light clothes and plan outdoor activities for mornings.</li>
              <li>Barton Springs Pool is amazing but the water is cold (68 degrees year-round). Great for toddlers to splash, but bring a warm towel.</li>
              <li>Most Austin restaurants are kid-friendly, especially places with patios. High chairs are hit or miss though -- rent one to be safe.</li>
              <li>The Thinkery (children's museum) is perfect for rainy days or when it is too hot outside.</li>
              <li>Zilker Zephyr train ride and the Zilker Botanical Garden are toddler favorites.</li>
            </ul>
          </article>

          {/* CTA */}
          <div className="mt-10 bg-sage-light rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-2">Planning Your Austin Trip?</h3>
            <p className="text-text-light mb-4">
              Book your baby gear now and cross one thing off the list. We deliver to anywhere in Austin.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-coral hover:bg-coral-dark text-white font-semibold px-6 py-3 rounded-full no-underline transition-colors"
            >
              Book Your Gear
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
