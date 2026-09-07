import { useState } from "react"

const faqs = [
    {
        question: "How can I find flights to Los Angeles?",
        answer:
            "Compare different travel dates, flight schedules, airlines, and one-way or round-trip options. Flexible dates may give you more choices.",
    },
    {
        question: "What is the main airport serving Los Angeles?",
        answer:
            "Los Angeles International Airport (LAX) is the primary airport serving Los Angeles and the surrounding region.",
    },
    {
        question: "What is the best time to visit Los Angeles?",
        answer:
            "Los Angeles can be visited throughout the year. Spring and fall often offer comfortable weather, while summer is popular for beaches and outdoor activities.",
    },
    {
        question: "Can I search for one-way flights to Los Angeles?",
        answer:
            "Yes. One-way flights can be a convenient option if you have separate return arrangements or are continuing your journey from Los Angeles.",
    },
    {
        question: "How early should I look for flights to Los Angeles?",
        answer:
            "There is no guaranteed booking period for the lowest fare. Searching ahead gives you more time to compare available flights, schedules, and prices.",
    },
    {
        question: "Can I find last-minute flights to Los Angeles?",
        answer:
            "Last-minute options may be available depending on airline schedules, remaining seats, travel dates, and demand. Prices and availability can change quickly.",
    },
]

export default function CheapFlightsLosAngeles() {
    const [openFaq, setOpenFaq] = useState(null)

    return (
        <div className="bg-white text-slate-700">
            {/* Hero */}
            <section className="relative overflow-hidden bg-slate-950">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-35"
                    style={{ backgroundImage: "url('/hero-plane.jpg')" }}
                />
                <div className="absolute inset-0 bg-slate-950/65" />

                <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
                    <div className="max-w-3xl">
                        <span className="inline-block rounded-full bg-blue-500/20 px-4 py-2 text-sm font-semibold text-blue-200 ring-1 ring-blue-400/30">
                            Cheap Flights To Los Angeles
                        </span>

                        <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Cheap Flights To Los Angeles
                        </h1>

                        <p className="mt-6 text-lg leading-8 text-slate-200">
                            Explore available flights to Los Angeles and compare options
                            based on your travel dates, schedule, and budget with
                            EasyTripsNow.
                        </p>

                        <a
                            href="/#flight-search"
                            className="mt-8 inline-flex rounded-xl bg-blue-600 px-6 py-3.5 font-bold text-white shadow-lg transition hover:bg-blue-700"
                        >
                            Search Flights To Los Angeles
                        </a>
                    </div>
                </div>
            </section>

            {/* Intro */}
            <section className="mx-auto max-w-4xl px-5 py-14 sm:px-6 lg:py-20">
                <p className="text-lg leading-8 text-slate-600">
                    Los Angeles is a destination known for its beaches, entertainment,
                    neighborhoods, restaurants, shopping, and year-round appeal.
                </p>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                    Whether you're planning a weekend getaway, visiting family, heading
                    to Los Angeles for work, or starting a California road trip,
                    EasyTripsNow helps you explore available flight options.
                </p>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                    Compare one-way and round-trip flights, different schedules,
                    itineraries, and fare options to find an option that fits your
                    travel plans.
                </p>
            </section>

            {/* Why LA */}
            <section className="bg-slate-50">
                <div className="mx-auto max-w-5xl px-5 py-14 sm:px-6 lg:py-20">
                    <h2 className="text-3xl font-bold text-slate-900">
                        Why Los Angeles Belongs On Your Travel List
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-slate-600">
                        Los Angeles offers something for almost every type of traveler.
                        Spend time along the coast, explore famous neighborhoods, enjoy
                        local restaurants, or discover the city's entertainment scene.
                    </p>

                    <p className="mt-5 text-lg leading-8 text-slate-600">
                        From Santa Monica and Venice Beach to Hollywood and Downtown Los
                        Angeles, there are plenty of places to explore.
                    </p>

                    <p className="mt-5 text-lg leading-8 text-slate-600">
                        The city can also be a convenient starting point for exploring
                        other parts of Southern California.
                    </p>
                </div>
            </section>

            {/* Flight Options */}
            <section className="mx-auto max-w-5xl px-5 py-14 sm:px-6 lg:py-20">
                <h2 className="text-3xl font-bold text-slate-900">
                    Looking For A Flight To Los Angeles?
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                    When comparing flights, consider more than just the fare. Departure
                    times, connections, baggage, and airport convenience can all affect
                    your overall travel experience.
                </p>

                <ul className="mt-8 space-y-3">
                    {[
                        "One-way and round-trip flights",
                        "Different departure and arrival schedules",
                        "Domestic and international itineraries",
                        "Available airline options",
                        "Different fare choices",
                        "Flights matching your preferred travel dates",
                    ].map((item) => (
                        <li key={item} className="flex gap-3">
                            <span className="text-blue-600">✓</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Best Time */}
            <section className="bg-slate-50">
                <div className="mx-auto max-w-5xl px-5 py-14 sm:px-6 lg:py-20">
                    <h2 className="text-3xl font-bold text-slate-900">
                        When Should You Visit Los Angeles?
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-slate-600">
                        Los Angeles is known for its generally mild climate, making it a
                        popular destination throughout the year.
                    </p>

                    <div className="mt-8 grid gap-5 sm:grid-cols-2">
                        {[
                            ["Spring", "Comfortable weather and a great time for outdoor activities."],
                            ["Summer", "Popular for beaches, events, sightseeing, and outdoor activities."],
                            ["Fall", "Pleasant temperatures and fewer crowds in some areas."],
                            ["Winter", "Milder weather than many destinations and plenty of indoor attractions."],
                        ].map(([title, text]) => (
                            <div
                                key={title}
                                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                            >
                                <h3 className="text-xl font-bold text-slate-900">{title}</h3>
                                <p className="mt-3 leading-7 text-slate-600">{text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Places */}
            <section className="mx-auto max-w-5xl px-5 py-14 sm:px-6 lg:py-20">
                <h2 className="text-3xl font-bold text-slate-900">
                    Places To Put On Your Los Angeles Itinerary
                </h2>

                <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                        "Santa Monica",
                        "Venice Beach",
                        "Hollywood",
                        "Griffith Observatory",
                        "Downtown Los Angeles",
                        "Hollywood Walk of Fame",
                        "The Getty",
                        "Beverly Hills",
                        "Malibu",
                        "Universal Studios",
                        "Rodeo Drive",
                        "Los Angeles County Museum of Art",
                    ].map((place) => (
                        <div
                            key={place}
                            className="rounded-xl border border-slate-200 bg-white px-5 py-4 font-medium shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
                        >
                            {place}
                        </div>
                    ))}
                </div>
            </section>

            {/* Airport */}
            <section className="bg-slate-50">
                <div className="mx-auto max-w-5xl px-5 py-14 sm:px-6 lg:py-20">
                    <h2 className="text-3xl font-bold text-slate-900">
                        Flying Into Los Angeles
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-slate-600">
                        Los Angeles International Airport (LAX) is the primary airport
                        serving the Los Angeles area and offers extensive domestic and
                        international connections.
                    </p>

                    <p className="mt-5 text-lg leading-8 text-slate-600">
                        Depending on your itinerary, other Southern California airports
                        may also be worth considering.
                    </p>

                    <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-6">
                        <div className="text-sm font-semibold uppercase tracking-wider text-blue-700">
                            Main Airport
                        </div>
                        <div className="mt-2 text-2xl font-bold text-slate-900">
                            Los Angeles International Airport
                        </div>
                        <div className="mt-1 font-semibold text-blue-700">LAX</div>
                    </div>
                </div>
            </section>

            {/* Tips */}
            <section className="mx-auto max-w-5xl px-5 py-14 sm:px-6 lg:py-20">
                <h2 className="text-3xl font-bold text-slate-900">
                    A Few Smart Ways To Search For Los Angeles Flights
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                    Airfare can change depending on travel dates, route, airline,
                    demand, and availability. Comparing several options can help you
                    make a more informed choice.
                </p>

                <ul className="mt-8 space-y-4">
                    {[
                        "Check nearby departure and return dates.",
                        "Compare one-way and round-trip fares.",
                        "Look at weekday and weekend schedules.",
                        "Consider traveling outside major holiday periods.",
                        "Search ahead when possible.",
                        "Compare flight times and connections as well as fares.",
                        "Check the airport and transportation options before booking.",
                    ].map((item) => (
                        <li
                            key={item}
                            className="flex gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4"
                        >
                            <span className="text-blue-600">✓</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </section>

            {/* CTA */}
            <section className="bg-blue-700">
                <div className="mx-auto max-w-5xl px-5 py-16 text-center sm:px-6">
                    <h2 className="text-3xl font-bold text-white sm:text-4xl">
                        Ready To Discover Los Angeles?
                    </h2>

                    <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-blue-100">
                        Explore available flights to Los Angeles with EasyTripsNow and
                        compare options that fit your travel dates, preferences, and
                        budget.
                    </p>

                    <a
                        href="/#flight-search"
                        className="mt-8 inline-flex rounded-xl bg-white px-7 py-3.5 font-bold text-blue-700 shadow-lg hover:bg-slate-100"
                    >
                        Explore Los Angeles Flights
                    </a>
                </div>
            </section>

            {/* FAQ */}
            <section className="mx-auto max-w-4xl px-5 py-14 sm:px-6 lg:py-20">
                <h2 className="text-3xl font-bold text-slate-900">
                    Los Angeles Flight FAQs
                </h2>

                <div className="mt-8 space-y-3">
                    {faqs.map((faq, index) => {
                        const isOpen = openFaq === index

                        return (
                            <div
                                key={faq.question}
                                className="overflow-hidden rounded-xl border border-slate-200"
                            >
                                <button
                                    type="button"
                                    onClick={() => setOpenFaq(isOpen ? null : index)}
                                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                                >
                                    <span className="font-semibold text-slate-900">
                                        {index + 1}. {faq.question}
                                    </span>

                                    <span className="text-2xl text-blue-600">
                                        {isOpen ? "−" : "+"}
                                    </span>
                                </button>

                                {isOpen && (
                                    <div className="border-t border-slate-100 px-5 pb-5 pt-4 leading-7 text-slate-600">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}