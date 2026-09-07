import { useState } from "react"

const faqs = [
  {
    question: "How can I find flights to Paris?",
    answer:
      "Compare different travel dates, flight schedules, airlines, airports, and one-way or round-trip options. Flexibility can give you more choices when searching.",
  },
  {
    question: "Which airports serve Paris?",
    answer:
      "The two main airports are Charles de Gaulle Airport (CDG) and Orly Airport (ORY). Your best choice may depend on your airline, flight schedule, and accommodation.",
  },
  {
    question: "What is the best time to visit Paris?",
    answer:
      "Paris can be enjoyed throughout the year. Spring and fall are popular for comfortable sightseeing weather, summer offers longer days, and winter brings a quieter, festive atmosphere.",
  },
  {
    question: "Can I search for one-way flights to Paris?",
    answer:
      "Yes. You can explore one-way options if you don't need a return flight or have separate travel arrangements for your journey back.",
  },
  {
    question: "How far ahead should I look for a Paris flight?",
    answer:
      "There is no booking period that guarantees the lowest fare. Searching ahead can give you more time to compare available schedules, routes, and fares.",
  },
  {
    question: "Can I find last-minute flights to Paris?",
    answer:
      "Last-minute flights may be available depending on airline schedules, remaining seats, travel dates, and demand. Prices and availability can change quickly.",
  },
  {
    question: "Should I compare CDG and ORY when booking?",
    answer:
      "Yes. Comparing both airports can give you additional flight choices. Also consider transportation from the airport to your accommodation before selecting your itinerary.",
  },
  {
    question: "Why search for Paris flights with EasyTripsNow?",
    answer:
      "EasyTripsNow provides a convenient way to explore available flight options and compare itineraries based on your travel dates, preferences, and budget.",
  },
]

const places = [
  "Eiffel Tower",
  "Louvre Museum",
  "Notre-Dame Cathedral",
  "Arc de Triomphe",
  "Champs-Élysées",
  "Montmartre and Sacré-Cœur",
  "Luxembourg Gardens",
  "Musée d'Orsay",
  "Seine River",
  "Le Marais",
  "Palace of Versailles",
]

const airports = [
  {
    code: "CDG",
    name: "Charles de Gaulle Airport",
    text: "Charles de Gaulle Airport is the city's largest airport and a major international gateway. It handles flights from destinations around the world.",
  },
  {
    code: "ORY",
    name: "Orly Airport",
    text: "Orly Airport is another important airport serving Paris and can be convenient depending on your airline, route, and where you're staying.",
  },
]

const tips = [
  "Check nearby departure dates to compare fares.",
  "Look at both one-way and round-trip options.",
  "Compare flights arriving at different Paris airports.",
  "Consider weekday travel if your schedule allows.",
  "Check fares outside major holidays and peak travel periods.",
  "Search ahead when possible to have more options to choose from.",
  "Compare the full itinerary, including connections and travel time.",
]

function CheapFlightsParis() {
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <main className="bg-white text-slate-800">
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-plane.jpg')" }}
        />

        <div className="absolute inset-0 bg-slate-950/75" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-blue-300/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-200">
              EasyTripsNow
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Cheap Flights To Paris
            </h1>

            <h2 className="mt-5 text-2xl font-bold text-white sm:text-3xl">
              Paris Is Calling — Are You Ready?
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              Explore available flights to Paris and compare options based on
              your travel dates, schedule, and budget.
            </p>

            <a
              href="/#flight-search"
              className="mt-8 inline-flex items-center rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-blue-500"
            >
              Search Flights
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-4xl">
            <p className="text-lg leading-8 text-slate-600">
              Paris has a way of making even a simple trip feel special. Maybe
              you're dreaming of seeing the Eiffel Tower for the first time,
              wandering through charming streets, spending an afternoon in a
              museum, or sitting at a sidewalk café with nowhere else to be.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Whether you're planning a romantic getaway, a family vacation, a
              solo adventure, or a longer European trip, Paris is a destination
              that deserves a place on your itinerary.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              EasyTripsNow helps you explore available flights to Paris and
              compare options based on your travel dates, schedule, and budget.
              You can look at one-way and round-trip itineraries, compare
              available flight choices, and select an option that works for
              your plans.
            </p>

            <div className="mt-8 rounded-2xl bg-blue-50 p-6 ring-1 ring-blue-100">
              <p className="text-lg font-bold text-slate-900">
                Then comes the fun part, experiencing the city for yourself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY PARIS */}
      <section className="bg-slate-50 px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
              Discover Paris
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              What Makes Paris So Easy To Fall For?
            </h2>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div className="space-y-5 text-base leading-8 text-slate-600">
              <p>
                Paris is famous for its landmarks, but its charm goes well
                beyond the postcard views.
              </p>

              <p>
                You can spend your morning admiring the Eiffel Tower, wander
                along the Seine in the afternoon, and end the day exploring a
                neighborhood you've never heard of before.
              </p>

              <p>
                Art lovers can lose track of time inside the Louvre, while food
                lovers can make an entire trip out of discovering bakeries,
                cafés, markets, and French restaurants.
              </p>
            </div>

            <div className="space-y-5 text-base leading-8 text-slate-600">
              <p>
                There's also something wonderful about simply walking around
                Paris. Explore Montmartre's winding streets, browse the shops
                in Le Marais, relax in the Luxembourg Gardens, or find a quiet
                café and watch the city go by.
              </p>

              <p>
                You don't necessarily need a packed itinerary in Paris.
                Sometimes the best memories come from slowing down and seeing
                where the day takes you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FLIGHT OPTIONS */}
      <section className="px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl bg-slate-950 p-7 sm:p-10 lg:p-14">
            <div className="max-w-3xl">
              <span className="text-sm font-bold uppercase tracking-wider text-blue-300">
                Compare Your Options
              </span>

              <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
                Looking For The Right Flight To Paris?
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-300">
                The best flight for your trip isn't always simply the one with
                the lowest fare. Departure times, connections, baggage
                options, arrival airport, and overall travel time can all
                affect your experience.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-300">
                EasyTripsNow gives you a convenient way to explore available
                flights and compare different options for your Paris trip.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "One-way and round-trip flight options",
                "Different departure and arrival schedules",
                "Domestic connections and international routes",
                "Available airline options",
                "Different fare choices",
                "Itineraries matching your preferred travel dates",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
                    ✓
                  </div>

                  <p className="font-semibold leading-6 text-white">{item}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-base leading-7 text-slate-300">
              Compare what is available for your trip and choose the option
              that makes the most sense for you.
            </p>

            <a
              href="/#flight-search"
              className="mt-7 inline-flex rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-blue-500"
            >
              Explore Flights →
            </a>
          </div>
        </div>
      </section>

      {/* SEASONS */}
      <section className="bg-slate-50 px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
              Plan Your Visit
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Which Season Matches Your Paris Plans?
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Paris is beautiful in every season, but the atmosphere changes
              throughout the year.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              {
                season: "Spring",
                text: "Spring brings mild weather, blooming gardens, and plenty of reasons to spend time outdoors. It's a lovely season for walking along the Seine and exploring the city's parks.",
              },
              {
                season: "Summer",
                text: "Summer means longer days and a lively atmosphere. Outdoor cafés, gardens, events, and evening walks make this a popular time to visit, although travel demand can also be higher.",
              },
              {
                season: "Fall",
                text: "Fall brings cooler temperatures and a quieter feel to many parts of the city. It's a comfortable season for sightseeing, museums, cafés, and long walks through Parisian neighborhoods.",
              },
              {
                season: "Winter",
                text: "Winter gives Paris a different kind of charm. Holiday decorations, seasonal markets, cozy cafés, and fewer tourists at some attractions can make it an appealing time for travelers who enjoy a slower city experience.",
              },
            ].map((item) => (
              <div
                key={item.season}
                className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200"
              >
                <h3 className="text-xl font-bold text-slate-900">
                  {item.season}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MUST SEE */}
      <section className="px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
              Explore Paris
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Your Paris Must-See List
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Paris has enough attractions to fill several trips, but if
              you're visiting for the first time, these are some places worth
              considering:
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {places.map((place, index) => (
              <div
                key={place}
                className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-blue-600">
                  {index + 1}
                </span>

                <span className="font-semibold text-slate-800">{place}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AIRPORTS */}
      <section className="bg-slate-50 px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
              Choose Your Airport
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Where Will Your Paris Flight Land?
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Paris is primarily served by two major international airports.
              When comparing flights, check the arrival airport as well as the
              fare and schedule.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {airports.map((airport) => (
              <div
                key={airport.code}
                className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200"
              >
                <span className="inline-flex rounded-lg bg-blue-600 px-3 py-1.5 text-sm font-extrabold text-white">
                  {airport.code}
                </span>

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {airport.name}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {airport.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border-l-4 border-blue-600 bg-white p-6 shadow-sm">
            <p className="leading-7 text-slate-600">
              Your choice can affect how long it takes to reach your hotel or
              first stop in the city.
            </p>
          </div>
        </div>
      </section>

      {/* BOOKING TIPS */}
      <section className="px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
              Smart Flight Search
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              A Few Things To Keep In Mind Before Booking
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-600">
              Airfare can change depending on demand, season, route, airline,
              and availability. If you're flexible, compare a few different
              possibilities before booking.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {tips.map((tip, index) => (
              <div
                key={index}
                className="flex gap-4 rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  {index + 1}
                </span>

                <p className="leading-7 text-slate-600">{tip}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center font-semibold leading-7 text-slate-700">
            There isn't a guaranteed formula for finding the lowest fare, so
            it's always worth checking the options available for your specific
            dates.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Pack Your Bags. Paris Is Waiting.
          </h2>

          <p className="mt-6 leading-8 text-blue-50">
            Paris can be a romantic escape, a cultural adventure, a food-filled
            getaway, or simply a chance to experience somewhere completely
            different.
          </p>

          <p className="mt-4 leading-8 text-blue-50">
            Walk beneath the Eiffel Tower, get lost in a neighborhood street,
            spend an afternoon surrounded by art, and leave some time for the
            moments you didn't plan.
          </p>

          <p className="mt-4 leading-8 text-blue-50">
            When you're ready to start your trip, explore available flights to
            Paris with EasyTripsNow and find an itinerary that fits your plans.
          </p>

          <p className="mt-7 text-xl font-bold text-white">
            Paris is waiting. All you need is a reason to go.
          </p>

          <a
            href="/#flight-search"
            className="mt-7 inline-flex rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-blue-700 shadow-lg transition hover:bg-slate-100"
          >
            Search Flights →
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
              FAQ
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-10 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                  >
                    <span className="font-bold text-slate-900">
                      {index + 1}. {faq.question}
                    </span>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-transform ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-slate-100 px-5 pb-5 pt-4 sm:px-6">
                      <p className="leading-7 text-slate-600">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}

export default CheapFlightsParis