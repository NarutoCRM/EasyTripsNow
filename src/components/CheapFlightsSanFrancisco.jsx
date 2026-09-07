import { useState } from "react"

const faqs = [
    {
        question: "How can I find flights to San Francisco?",
        answer:
            "Compare different dates, schedules, airports, airlines, and one-way or round-trip options. Flexible travel dates can give you more choices.",
    },
    {
        question: "What is the main airport for San Francisco?",
        answer:
            "San Francisco International Airport (SFO) is the primary airport serving San Francisco and offers both domestic and international flights.",
    },
    {
        question: "Are there other airports near San Francisco?",
        answer:
            "Yes. Oakland San Francisco Bay Airport (OAK) and San José Mineta International Airport (SJC) can also serve travelers visiting the wider Bay Area.",
    },
    {
        question: "What is the best time to visit San Francisco?",
        answer:
            "San Francisco can be visited year-round. Spring and fall can be comfortable for sightseeing, while summer brings longer days and winter tends to be cooler and wetter.",
    },
    {
        question: "Can I search for one-way flights to San Francisco?",
        answer:
            "Yes. One-way flight options are available for travelers who don't need a return itinerary or have separate plans for their return journey.",
    },
    {
        question: "Should I compare SFO with other Bay Area airports?",
        answer:
            "It can be useful. Different airports may offer different routes, schedules, and fares. Also consider transportation time and cost when comparing them.",
    },
    {
        question: "Can I find last-minute flights to San Francisco?",
        answer:
            "Last-minute flights may be available depending on airline schedules, remaining seats, travel dates, and demand. Fares and availability can change quickly.",
    },
    {
        question: "Why use EasyTripsNow to search for San Francisco flights?",
        answer:
            "EasyTripsNow gives travelers a convenient way to explore available flight options and compare itineraries based on their dates, preferences, and budget.",
    },
]

const places = [
    "Golden Gate Bridge",
    "Alcatraz Island",
    "Fisherman's Wharf",
    "Golden Gate Park",
    "Chinatown",
    "Lombard Street",
    "Pier 39",
    "Palace of Fine Arts",
    "Union Square",
    "Painted Ladies",
    "Ferry Building",
    "Twin Peaks",
]

const airports = [
    {
        code: "SFO",
        name: "San Francisco International Airport",
        text: "SFO is the main airport serving San Francisco and offers extensive domestic and international connections.",
    },
    {
        code: "OAK",
        name: "Oakland San Francisco Bay Airport",
        text: "OAK is outside San Francisco itself but can provide additional options for travelers visiting the wider Bay Area.",
    },
    {
        code: "SJC",
        name: "San José Mineta International Airport",
        text: "SJC can also be useful depending on your itinerary and where you're staying in the wider Bay Area.",
    },
]

const tips = [
    "Check a few nearby travel dates.",
    "Compare one-way and round-trip fares.",
    "Look at flights arriving at different Bay Area airports.",
    "Compare weekday and weekend schedules.",
    "Check options outside major holidays and peak periods.",
    "Search ahead when possible.",
    "Consider the complete itinerary, not just the ticket price.",
]

function CheapFlightsSanFrancisco() {
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
                            Cheap Flights To San Francisco
                        </h1>

                        <h2 className="mt-5 text-2xl font-bold text-white sm:text-3xl">
                            Your San Francisco Adventure Starts Here
                        </h2>

                        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
                            Explore available flights to San Francisco and compare options
                            based on your dates, schedule, and budget.
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
                            Few American cities have a personality quite like San Francisco.
                            From the bright red Golden Gate Bridge and steep, winding
                            streets to waterfront neighborhoods, cozy cafés, and views that
                            make you stop and reach for your camera, the city has plenty to
                            keep you curious.
                        </p>

                        <p className="mt-5 text-lg leading-8 text-slate-600">
                            Whether you're planning a California getaway, visiting family
                            and friends, traveling for work, or adding San Francisco to a
                            West Coast road trip, finding the right flight is a good place
                            to start.
                        </p>

                        <p className="mt-5 text-lg leading-8 text-slate-600">
                            EasyTripsNow lets you explore available flights to San Francisco
                            and compare options based on your dates, schedule, and budget.
                            Check one-way and round-trip itineraries, look at different
                            flight choices, and find an option that suits the way you want
                            to travel.
                        </p>

                        <div className="mt-8 rounded-2xl bg-blue-50 p-6 ring-1 ring-blue-100">
                            <p className="text-lg font-bold text-slate-900">
                                Then, it's time to discover the city.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY SAN FRANCISCO */}
            <section className="bg-slate-50 px-5 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="max-w-3xl">
                        <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
                            Discover San Francisco
                        </span>

                        <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                            What Makes San Francisco Different?
                        </h2>
                    </div>

                    <div className="mt-10 grid gap-10 lg:grid-cols-2">
                        <div className="space-y-5 text-base leading-8 text-slate-600">
                            <p>
                                San Francisco isn't really a city you can experience from a
                                checklist.
                            </p>

                            <p>
                                Yes, you should see the Golden Gate Bridge. But you should also
                                wander through Chinatown, ride a historic cable car, explore
                                the colorful streets of the Mission District, or grab a coffee
                                and watch the city go by.
                            </p>

                            <p>
                                The waterfront is another big part of the experience. Spend
                                some time around Fisherman's Wharf, walk along the Embarcadero,
                                or head toward the Ferry Building for food and local finds.
                            </p>
                        </div>

                        <div className="space-y-5 text-base leading-8 text-slate-600">
                            <p>
                                And then there are the views. San Francisco's hills mean you're
                                constantly coming across a new angle of the skyline, bay, or
                                bridge.
                            </p>

                            <p className="font-semibold text-slate-900">
                                Give yourself time to wander—you may find that the unplanned
                                parts of your trip become your favorites.
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
                                Finding A Flight That Works for You
                            </h2>

                            <p className="mt-5 text-base leading-8 text-slate-300">
                                A good flight isn't always just about finding the lowest fare.
                                Departure times, connections, baggage, travel time, and the
                                airport you fly into can all matter.
                            </p>

                            <p className="mt-4 text-base leading-8 text-slate-300">
                                With EasyTripsNow, you can explore available San Francisco
                                flight options and compare:
                            </p>
                        </div>

                        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {[
                                "One-way and round-trip itineraries",
                                "Different departure and arrival schedules",
                                "Domestic and international flight options",
                                "Available airline choices",
                                "Different fare options",
                                "Flights based on your preferred travel dates",
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
                            Take a look at the available choices and consider the complete
                            itinerary before booking.
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
                            When Does San Francisco Look Its Best?
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            San Francisco's weather can be surprisingly different from what
                            travelers expect, and temperatures can vary throughout the day.
                            Still, every season has something to offer.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2">
                        {[
                            {
                                season: "Spring",
                                text: "Spring is a pleasant time to explore the city's neighborhoods, parks, and waterfront. It's a good season for walking around without the intensity of peak summer travel.",
                            },
                            {
                                season: "Summer",
                                text: "Summer brings longer days and plenty of visitors. While temperatures can remain mild, the city can be busy, so bring a layer for those cooler evenings.",
                            },
                            {
                                season: "Fall",
                                text: "Fall is often comfortable for sightseeing and can be a great time to explore the city at a more relaxed pace.",
                            },
                            {
                                season: "Winter",
                                text: "Winter brings cooler and wetter days, but it can also be a good opportunity to explore museums, restaurants, cafés, and indoor attractions.",
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

            {/* PLACES */}
            <section className="px-5 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="max-w-3xl">
                        <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
                            Explore The City
                        </span>

                        <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                            San Francisco Sights Worth Your Time
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            You could easily spend several days exploring the city. Start
                            with a few of these:
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
                            Flying Into San Francisco
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            San Francisco International Airport (SFO) is the main airport
                            serving the city and offers extensive domestic and international
                            connections.
                        </p>

                        <p className="mt-4 leading-8 text-slate-600">
                            Depending on your itinerary, you may also find flights to
                            Oakland San Francisco Bay Airport (OAK) or San José Mineta
                            International Airport (SJC).
                        </p>
                    </div>

                    <div className="mt-10 grid gap-5 lg:grid-cols-3">
                        {airports.map((airport) => (
                            <div
                                key={airport.code}
                                className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200"
                            >
                                <span className="inline-flex rounded-lg bg-blue-600 px-3 py-1.5 text-sm font-extrabold text-white">
                                    {airport.code}
                                </span>

                                <h3 className="mt-5 text-lg font-bold text-slate-900">
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
                            Before choosing a flight, consider both the fare and how you'll
                            get from the airport to your accommodation.
                        </p>
                    </div>
                </div>
            </section>

            {/* TIPS */}
            <section className="px-5 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-5xl">
                    <div className="text-center">
                        <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
                            Smart Flight Search
                        </span>

                        <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                            Before You Book Your San Francisco Flight
                        </h2>

                        <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-600">
                            Airfares can change based on travel dates, demand, route,
                            airline, and available seats. If your plans allow some
                            flexibility, compare several options before deciding.
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
                        There isn't a guaranteed trick for getting the lowest fare.
                        Comparing the options available for your particular trip is
                        usually the best place to start.
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-blue-600 px-5 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        Ready to Explore San Francisco?
                    </h2>

                    <p className="mt-6 leading-8 text-blue-50">
                        San Francisco has something that keeps travelers coming back—the
                        bridge, the hills, the food, the neighborhoods, and the feeling
                        that there's always another street worth exploring.
                    </p>

                    <p className="mt-4 leading-8 text-blue-50">
                        Take a cable car through the city, watch the fog roll across the
                        Golden Gate Bridge, spend an afternoon by the bay, and leave some
                        time to discover San Francisco without a plan.
                    </p>

                    <p className="mt-4 leading-8 text-blue-50">
                        When you're ready, explore available flights to San Francisco with
                        EasyTripsNow and find an itinerary that fits your trip.
                    </p>

                    <p className="mt-7 text-xl font-bold text-white">
                        Your California adventure starts with the flight.
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
                            San Francisco Flight FAQs
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
                                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-transform ${isOpen ? "rotate-45" : ""
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

export default CheapFlightsSanFrancisco
