import { appData } from "../data";
import { formatPhoneNumber } from "../utils/helper";

export default function CheapFlightsLasVegas() {
  const faqs = [
    {
      question: "How can I find cheap flights to Las Vegas?",
      answer:
        "Compare available flight options, travel on flexible dates when possible, and book early to explore more fare choices.",
    },
    {
      question: "What is the best time to visit Las Vegas?",
      answer:
        "Las Vegas can be visited throughout the year. Spring and fall are especially popular because of their comfortable weather.",
    },
    {
      question: "Can I get help booking my Las Vegas flight?",
      answer:
        "Yes. EasyTripsNow can assist you with available flight options and travel-related questions.",
    },
    {
      question: "Does EasyTripsNow guarantee a particular airfare?",
      answer:
        "No. Airfares and availability can change. Final fares are subject to availability and confirmation at the time of booking.",
    },
  ];

  return (
    <section className="bg-white">
      {/* Hero */}
      <div
        className="relative flex min-h-[380px] items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?auto=format&fit=crop&w=1800&q=85')",
        }}
      >
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-300">
            Travel to Nevada
          </span>

          <h1 className="mt-3 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
            Cheap Flights to Las Vegas
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/90">
            Explore flight options to Las Vegas and plan your next trip to one
            of America's most exciting destinations.
          </p>

          <a
            href="/#flight-search"
            className="mt-7 inline-flex rounded-xl bg-blue-600 px-7 py-3.5 font-bold text-white shadow-lg transition hover:bg-blue-700"
          >
            Search Flights
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Find Flights to Las Vegas
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-600">
              Las Vegas is known for its entertainment, resorts, dining,
              nightlife, shows, and attractions. Whether you are planning a
              weekend getaway, a family vacation, or a longer trip, comparing
              available flights can help you find an option that fits your
              travel plans.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              EasyTripsNow makes it easier to explore available travel options
              and get assistance with your flight plans.
            </p>

            <h2 className="mt-10 text-2xl font-extrabold text-slate-900">
              Plan Your Las Vegas Trip
            </h2>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="text-2xl">✈️</div>
                <h3 className="mt-3 font-bold text-slate-900">
                  Compare Flights
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Explore available flight options and compare itineraries for
                  your Las Vegas trip.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="text-2xl">🏨</div>
                <h3 className="mt-3 font-bold text-slate-900">
                  Plan Your Stay
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Organize your accommodation and other travel arrangements
                  around your itinerary.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="text-2xl">📅</div>
                <h3 className="mt-3 font-bold text-slate-900">
                  Flexible Dates
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Flexible travel dates may give you more options when comparing
                  available fares.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="text-2xl">☎️</div>
                <h3 className="mt-3 font-bold text-slate-900">
                  Travel Assistance
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Need help? Contact our travel team for assistance with your
                  travel plans.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="rounded-2xl bg-slate-900 p-7 text-white shadow-lg">
              <p className="text-sm font-bold uppercase tracking-widest text-blue-300">
                Need Help?
              </p>

              <h3 className="mt-3 text-2xl font-extrabold">
                Talk to a Travel Expert
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                Get assistance with available flight options and your Las Vegas
                travel plans.
              </p>

              <a
                href={`tel:${appData.phoneNumber}`}
                className="mt-6 block rounded-xl bg-blue-600 px-5 py-3 text-center font-bold transition hover:bg-blue-700"
              >
                ☎ {formatPhoneNumber(appData.phoneNumber)}
              </a>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mx-auto mt-8 max-w-4xl space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-slate-200 bg-white p-5"
              >
                <summary className="cursor-pointer list-none font-bold text-slate-900">
                  <div className="flex items-center justify-between gap-4">
                    <span>{faq.question}</span>
                    <span className="text-xl transition group-open:rotate-45">
                      +
                    </span>
                  </div>
                </summary>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-blue-600 to-slate-900 px-6 py-12 text-center text-white sm:px-10">
          <h2 className="text-3xl font-extrabold">
            Ready to Explore Las Vegas?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-white/85">
            Search available flight options or speak with our travel team for
            assistance.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="/#flight-search"
              className="rounded-xl bg-white px-7 py-3 font-bold text-blue-700 transition hover:bg-slate-100"
            >
              Search Flights
            </a>

            <a
              href={`tel:${appData.phoneNumber}`}
              className="rounded-xl border border-white/30 px-7 py-3 font-bold text-white transition hover:bg-white/10"
            >
              Call {formatPhoneNumber(appData.phoneNumber)}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
