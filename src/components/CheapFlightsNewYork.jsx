import { useState } from "react"

const faqs = [
    {
        question: "How can I find affordable flights to New York City?",
        answer:
            "Start by comparing different dates, flight schedules, airports, and one-way or round-trip options. If your dates are flexible, check a few combinations before choosing your flight.",
    },
    {
        question: "What airports can I fly into for New York City?",
        answer:
            "The three major airports serving the New York area are JFK, LaGuardia (LGA), and Newark Liberty International Airport (EWR). The most convenient choice depends on your flight and where you're staying.",
    },
    {
        question: "Is there a best month to visit New York City?",
        answer:
            "It depends on what you want from your trip. Spring and fall are popular for comfortable sightseeing weather, summer is lively and full of outdoor activities, while winter offers seasonal events and a festive atmosphere.",
    },
    {
        question: "Can I book a one-way flight to New York?",
        answer:
            "Yes. One-way flights are an option for travelers who don't need a return ticket or have a separate return itinerary planned.",
    },
    {
        question: "Is JFK better than LaGuardia or Newark?",
        answer:
            "Not necessarily. Each airport has different airlines, routes, schedules, and transportation options. Compare the flight and consider how convenient the airport will be for your final destination.",
    },
    {
        question: "How early should I search for a flight to New York?",
        answer:
            "There isn't a booking window that guarantees the lowest fare. However, searching ahead gives you more time to compare schedules, dates, airports, and available fares.",
    },
    {
        question: "Can I find a last-minute flight to New York?",
        answer:
            "Last-minute flights can be available, but options and prices depend heavily on current availability and demand. If you're booking close to departure, compare the available itineraries carefully.",
    },
    {
        question: "Why use EasyTripsNow when planning a New York trip?",
        answer:
            "EasyTripsNow gives you a convenient way to explore available flight options and compare itineraries according to your travel dates and preferences, helping you make a more informed booking decision.",
    },
]

const thingsToDo = [
    "Times Square",
    "Central Park",
    "Statue of Liberty",
    "Empire State Building",
    "Brooklyn Bridge",
    "The High Line",
    "Rockefeller Center",
    "Grand Central Terminal",
    "The Metropolitan Museum of Art",
    "Broadway",
    "One World Observatory",
    "9/11 Memorial & Museum",
]

const bookingTips = [
    "Give yourself some flexibility. If you can move your trip by a day or two, compare those dates.",
    "Check different airports. JFK, LGA, and EWR don't always have the same flight options.",
    "Compare round-trip and one-way fares. Depending on your plans, either option could make more sense.",
    "Look beyond weekends. If your schedule allows, compare weekday departures and returns as well.",
    "Don't wait until the last moment if you don't have to. Searching earlier generally gives you more schedules and fare options to consider.",
    "Most importantly, compare the complete itinerary, not just the number on the fare.",
]

function CheapFlightsNewYork() {
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
                            Cheap Flights To New York City
                        </h1>

                        <h2 className="mt-5 text-2xl font-bold text-white sm:text-3xl">
                            Planning a Trip to New York? Start Here.
                        </h2>

                        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
                            Explore available flights to New York City, compare different
                            schedules and travel options, and find an itinerary that makes
                            sense for your trip and budget.
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
                            New York City has a way of making you want to see it for
                            yourself. Maybe you've always wanted to stand in Times Square at
                            night, walk through Central Park, catch a Broadway show, or
                            simply spend a few days exploring the city without a strict
                            plan. Whatever brings you to New York, getting your flight
                            sorted is the first step.
                        </p>

                        <p className="mt-5 text-lg leading-8 text-slate-600">
                            EasyTripsNow helps you explore available flights to New York
                            City and compare different options before you book. You can look
                            at one-way and round-trip flights, check different schedules, and
                            choose an itinerary that makes sense for your trip and budget.
                        </p>

                        <p className="mt-5 text-lg leading-8 text-slate-600">
                            And once you land, there's plenty waiting for you. New York isn't
                            just about the famous landmarks. It's the little things too—the
                            neighborhood coffee shop you find by accident, a great slice of
                            pizza after a long day of walking, the view of Manhattan from
                            across the river, or discovering a street you didn't expect to
                            love.
                        </p>

                        <div className="mt-8 rounded-2xl bg-blue-50 p-6 ring-1 ring-blue-100">
                            <p className="text-lg font-bold text-slate-900">
                                Your New York trip can start with a simple flight search.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY NEW YORK */}
            <section className="bg-slate-50 px-5 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="max-w-3xl">
                        <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
                            Discover New York
                        </span>

                        <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                            Why Is New York City So Popular?
                        </h2>
                    </div>

                    <div className="mt-10 grid gap-10 lg:grid-cols-2">
                        <div className="space-y-5 text-base leading-8 text-slate-600">
                            <p>
                                There's a reason New York continues to attract travelers from
                                all over the world.
                            </p>

                            <p>
                                For first-time visitors, the city's biggest attractions are an
                                obvious place to start. You can take a ferry toward the Statue
                                of Liberty, see Manhattan from the top of the Empire State
                                Building, walk across the Brooklyn Bridge, or experience the
                                bright lights and crowds of Times Square.
                            </p>

                            <p>
                                But New York becomes even more interesting when you move beyond
                                the usual sightseeing list.
                            </p>
                        </div>

                        <div className="space-y-5 text-base leading-8 text-slate-600">
                            <p>
                                Spend an afternoon in Greenwich Village. Walk the High Line and
                                explore Chelsea. Browse shops in SoHo. Have brunch somewhere in
                                Brooklyn. Visit a museum when the weather isn't cooperating.
                            </p>

                            <p>
                                In the evening, choose between a Broadway show, a rooftop
                                view, live music, or a quiet dinner in a neighborhood
                                restaurant.
                            </p>

                            <p className="font-semibold text-slate-900">
                                The best part? You don't have to fit everything into one trip.
                                New York gives you plenty of reasons to come back.
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
                                Find A Flight to New York That Fits Your Plans
                            </h2>

                            <p className="mt-5 text-base leading-8 text-slate-300">
                                Not every traveler has the same idea of a perfect flight. Some
                                people want the lowest available fare, while others care more
                                about departure times, fewer connections, or arriving at an
                                airport that's convenient for their hotel.
                            </p>

                            <p className="mt-4 text-base leading-8 text-slate-300">
                                That's why it's worth comparing your options before making a
                                decision.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {[
                                "One-way or round-trip itineraries",
                                "Different flight schedules",
                                "Domestic and international routes",
                                "Available airline options",
                                "Different fare choices",
                                "Options based on your preferred travel dates",
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
                            Take a few minutes to compare what is available for your dates.
                            A small difference in schedule can sometimes make a big
                            difference to how your trip feels.
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

            {/* BEST TIME */}
            <section className="bg-slate-50 px-5 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="max-w-3xl">
                        <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
                            Plan Your Visit
                        </span>

                        <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                            When Is A Good Time To Visit New York?
                        </h2>

                        <p className="mt-5 text-base leading-8 text-slate-600">
                            Honestly, there isn't one answer. New York changes with the
                            seasons, and the best time for you depends on what you want to
                            do.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2">
                        {[
                            {
                                season: "Spring",
                                text: "Spring is a comfortable time to explore the city on foot. Parks become greener, outdoor spaces start filling up, and the weather is generally pleasant for sightseeing.",
                            },
                            {
                                season: "Summer",
                                text: "Summer brings long days and plenty happening around the city. It's a great season for outdoor events, rooftop dining, waterfront walks, and spending time in the parks. It's also a popular period for travel, so demand can be higher.",
                            },
                            {
                                season: "Fall",
                                text: "Fall is one of the most enjoyable seasons for exploring New York. Cooler temperatures make walking around the city easier, and Central Park looks especially beautiful as the leaves begin to change.",
                            },
                            {
                                season: "Winter",
                                text: "Winter gives New York a completely different feel. Holiday decorations, ice skating, seasonal events, and winter shopping make December especially lively. If you prefer a quieter trip, consider traveling outside the busiest holiday dates.",
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

            {/* THINGS TO DO */}
            <section className="px-5 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="max-w-3xl">
                        <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
                            Explore The City
                        </span>

                        <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                            Things To Do In New York City
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            You could visit New York several times and still have something
                            left to see. If it's your first trip, these are some places worth
                            putting on your list:
                        </p>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {thingsToDo.map((place, index) => (
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

                    <p className="mt-8 max-w-4xl leading-8 text-slate-600">
                        Don't feel like you have to rush from one attraction to another,
                        though. Leave some space in your itinerary for wandering.
                        Sometimes an unplanned afternoon exploring a neighborhood ends up
                        being one of the best parts of the trip.
                    </p>
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
                            Which Airport Should You Choose For New York?
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            One thing travelers sometimes overlook when booking a New York
                            flight is the airport.
                        </p>

                        <p className="mt-4 leading-8 text-slate-600">
                            The city and surrounding area are served by three major
                            airports:
                        </p>
                    </div>

                    <div className="mt-10 grid gap-5 lg:grid-cols-3">
                        {[
                            {
                                code: "JFK",
                                name: "John F. Kennedy International Airport",
                                text: "JFK is in Queens and handles a large selection of domestic and international flights.",
                            },
                            {
                                code: "LGA",
                                name: "LaGuardia Airport",
                                text: "LaGuardia is also in Queens and is particularly useful for many domestic travelers.",
                            },
                            {
                                code: "EWR",
                                name: "Newark Liberty International Airport",
                                text: "Newark Liberty is located in New Jersey and can be a convenient option depending on where you're staying and which flights are available.",
                            },
                        ].map((airport) => (
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
                            When comparing flights, don't look at the ticket price alone.
                            Check where you'll be staying, your arrival time, and how you'll
                            get from the airport to your destination.
                        </p>

                        <p className="mt-4 leading-7 text-slate-600">
                            A flight that saves a little money may not be the most convenient
                            choice if it leaves you with a long or expensive journey after
                            landing.
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
                            A Few Tips Before Booking Your New York Flight
                        </h2>

                        <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-600">
                            Finding a suitable fare isn't always about booking on one
                            specific day or following a secret formula. Airfares change
                            based on demand, availability, route, season, and many other
                            factors.
                        </p>
                    </div>

                    <div className="mt-10 space-y-4">
                        {bookingTips.map((tip, index) => (
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
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="bg-blue-600 px-5 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        Your New York Journey Starts Here!
                    </h2>

                    <p className="mt-6 leading-8 text-blue-50">
                        Maybe you're heading to New York for the first time. Maybe you've
                        been before and already have a favorite neighborhood, restaurant,
                        or view. Either way, there's always something new to discover.
                    </p>

                    <p className="mt-4 leading-8 text-blue-50">
                        Plan a few days around the landmarks, leave room for the
                        unexpected, and give yourself enough time to simply enjoy the city.
                    </p>

                    <p className="mt-4 leading-8 text-blue-50">
                        When you're ready to start planning, explore available flights to
                        New York City with EasyTripsNow. Compare your options, find an
                        itinerary that works for your trip, and get ready to experience
                        New York your way.
                    </p>

                    <p className="mt-7 text-xl font-bold text-white">
                        The city is waiting. Where will you go first?
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

export default CheapFlightsNewYork
