const AboutUs = () => {
  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#062b5c] to-[#1687d9]">
        <div className="absolute inset-0 bg-[url('/hero-plane.jpg')] bg-cover bg-center opacity-15" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-white/70 mb-3">
              EasyTripsNow
            </p>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              About EasyTripsNow
            </h1>

            <p className="mt-4 text-xl sm:text-2xl font-semibold text-white/90">
              Making Travel Planning Feel A Little Easier
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-14 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">

          {/* Intro */}
          <div className="mb-12">
            <p className="text-gray-600 text-base sm:text-lg leading-8">
              At EasyTripsNow, we believe planning a trip should be exciting,
              not stressful. Whether you're heading across the country for a
              family visit, planning a long-awaited vacation, or looking for a
              flight for your next business trip, finding the right travel
              option can sometimes feel overwhelming. That's where we come in.
            </p>

            <p className="mt-5 text-gray-600 text-base sm:text-lg leading-8">
              EasyTripsNow is a travel service designed to make the process of
              exploring and planning your next journey simpler and more
              convenient. We help travelers explore flight options, compare
              available choices, and find travel solutions that fit their plans
              and preferences.
            </p>
          </div>

          {/* Travel Options */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#123b7a]">
              Travel Options Built Around You
            </h2>

            <div className="mt-5 space-y-5 text-gray-600 text-base sm:text-lg leading-8">
              <p>
                Every traveler has different priorities. Some people want the
                most convenient schedule, while others are looking for
                competitive fares or flexible travel options. We understand
                that there isn't a single travel solution that works for
                everyone.
              </p>

              <p>
                That's why our approach is centered around giving you choices
                and making those choices easier to understand. From domestic
                trips within the United States to international journeys,
                EasyTripsNow is here to help you explore the possibilities and
                make informed travel decisions.
              </p>

              <p>
                Our goal isn't simply to help you find a flight. It's to make
                the overall experience feel more straightforward—from the
                moment you begin searching to the moment you're ready to
                finalize your travel plans.
              </p>
            </div>
          </div>

          {/* Personal Approach */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#123b7a]">
              A More Personal Approach To Travel
            </h2>

            <div className="mt-5 space-y-5 text-gray-600 text-base sm:text-lg leading-8">
              <p>
                Technology has made it easier to search for travel, but
                sometimes you still want to speak with a real person. We
                understand that.
              </p>

              <p>
                Our travel assistance is designed for travelers who appreciate
                having someone available to help answer questions, discuss
                available options, and provide guidance when they need it.
                Whether you're unsure about an itinerary or simply want some
                assistance with your travel plans, our team is here to help.
              </p>

              <p>
                We believe good travel service starts with listening. Instead
                of treating every traveler the same, we aim to understand what
                you're looking for and help you explore options that make sense
                for your trip.
              </p>
            </div>
          </div>

          {/* Why Choose */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#123b7a] mb-6">
              Why Choose EasyTripsNow?
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">

              <div className="rounded-2xl border border-gray-200 bg-[#f8fbff] p-6 hover:-translate-y-1 hover:shadow-lg transition-all">
                <h3 className="font-extrabold text-[#123b7a]">
                  Convenient Travel Search
                </h3>

                <p className="mt-2 text-sm text-gray-600 leading-6">
                  Explore flight options without making the planning process
                  unnecessarily complicated.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-[#f8fbff] p-6 hover:-translate-y-1 hover:shadow-lg transition-all">
                <h3 className="font-extrabold text-[#123b7a]">
                  Competitive Fare Options
                </h3>

                <p className="mt-2 text-sm text-gray-600 leading-6">
                  Discover available travel options and compare choices based
                  on your needs.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-[#f8fbff] p-6 hover:-translate-y-1 hover:shadow-lg transition-all">
                <h3 className="font-extrabold text-[#123b7a]">
                  Helpful Travel Assistance
                </h3>

                <p className="mt-2 text-sm text-gray-600 leading-6">
                  Get support when you have questions or would prefer to speak
                  with a travel professional.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-[#f8fbff] p-6 hover:-translate-y-1 hover:shadow-lg transition-all">
                <h3 className="font-extrabold text-[#123b7a]">
                  Travel Made Simpler
                </h3>

                <p className="mt-2 text-sm text-gray-600 leading-6">
                  We focus on making the journey from searching to planning
                  easier and more transparent.
                </p>
              </div>

            </div>
          </div>

          {/* Final */}
          <div className="rounded-2xl bg-gradient-to-r from-[#123b7a] to-[#1687d9] p-7 sm:p-10 text-white">
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              We're Here for Your Next Journey!
            </h2>

            <div className="mt-5 space-y-4 text-white/90 text-base sm:text-lg leading-8">
              <p>
                Travel is about more than getting from one destination to
                another. It's about visiting the people you miss, discovering
                new places, making memories, and experiencing something
                different.
              </p>

              <p>
                At EasyTripsNow, we're here to make the planning side of that
                journey easier.
              </p>

              <p>
                Wherever your next trip takes you, we're ready to help you
                explore your options and take the next step with confidence.
              </p>

              <p className="font-bold text-white">
                Your journey starts with a plan. Let EasyTripsNow help make it
                easier.
              </p>
            </div>

            <a
              href="tel:8557502715"
              className="inline-flex mt-7 items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-bold text-[#123b7a] hover:bg-gray-100 transition"
            >
              ☎ Talk to a Travel Expert
            </a>
          </div>

        </div>
      </section>

    </main>
  )
}

export default AboutUs