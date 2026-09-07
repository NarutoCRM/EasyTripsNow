import { useState } from "react"

const faqs = [
    {
        question: "How can I find flights to Boston?",
        answer:
            "Compare different travel dates, flight schedules, airlines, and one-way or round-trip options. Flexible dates may give you more choices.",
    },
    {
        question: "What is the main airport serving Boston?",
        answer:
            "Boston Logan International Airport (BOS) is the main airport serving Boston and offers domestic and international flights.",
    },
    {
        question: "What is the best time to visit Boston?",
        answer:
            "Spring and fall are popular for comfortable sightseeing weather, while summer is lively with outdoor activities and winter offers a quieter experience with plenty of indoor attractions.",
    },
    {
        question: "Can I search for one-way flights to Boston?",
        answer:
            "Yes. One-way flights can be a convenient option if you have separate return arrangements or are continuing your journey from Boston.",
    },
    {
        question: "How early should I look for flights to Boston?",
        answer:
            "There is no guaranteed booking period for the lowest fare. Searching ahead can give you more time to compare available flights, schedules, and prices.",
    },
    {
        question: "Is Boston easy to explore without a car?",
        answer:
            "Many central attractions are accessible by walking and public transportation. Your need for a car will depend on where you're staying and whether you plan to explore outside the city.",
    },
    {
        question: "Can I find last-minute flights to Boston?",
        answer:
            "Last-minute options may be available depending on current airline schedules, remaining seats, travel dates, and demand. Fares and availability can change quickly.",
    },
    {
        question: "Why search for Boston flights with EasyTripsNow?",
        answer:
            "EasyTripsNow provides a convenient way to explore available flight options and compare itineraries based on your travel dates, preferences, and budget.",
    },
]

function SectionTitle({ children }) {
    return (
        <h2 className="mb-5 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            {children}
        </h2>
    )
}

export default function CheapFlightsBoston() {
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
                        <span className="mb-4 inline-block rounded-full bg-blue-500/20 px-4 py-2 text-sm font-semibold text-blue-200 ring-1 ring-blue-400/30">
                            Cheap Flights To Boston
                        </span>

                        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Boston Has A Story Around Every Corner
                        </h1>

                        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
                            Explore available flights to Boston and compare travel options
                            based on your dates, schedule, and budget with EasyTripsNow.
                        </p>

                        <a
                            href="/#flight-search"
                            className="mt-8 inline-flex items-center rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg transition hover:bg-blue-700"
                        >
                            Search Flights To Boston
                        </a>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <main>
                {/* Intro */}
                <section className="mx-auto max-w-4xl px-5 py-14 sm:px-6 lg:py-20">
                    <p className="text-lg leading-8 text-slate-600">
                        Boston is one of those cities where history doesn't feel stuck in
                        the past. It sits alongside modern neighborhoods, lively
                        restaurants, waterfront views, universities, sports, and a
                        distinctly New England charm.
                    </p>

                    <p className="mt-5 text-lg leading-8 text-slate-600">
                        Whether you're visiting for a weekend, catching up with family,
                        heading to Boston for work, or planning a longer New England trip,
                        the city makes a great destination.
                    </p>

                    <p className="mt-5 text-lg leading-8 text-slate-600">
                        EasyTripsNow helps you explore available flights to Boston and
                        compare options based on your travel dates, schedule, and budget.
                        Check different itineraries, compare one-way and round-trip
                        flights, and choose an option that works for your plans.
                    </p>

                    <p className="mt-5 text-lg leading-8 text-slate-600">
                        Once you arrive, Boston is surprisingly easy to explore—and there's
                        plenty to discover on foot.
                    </p>
                </section>

                {/* Why Boston */}
                <section className="bg-slate-50">
                    <div className="mx-auto max-w-5xl px-5 py-14 sm:px-6 lg:py-20">
                        <SectionTitle>Why Boston Belongs On Your Travel List</SectionTitle>

                        <p className="text-lg leading-8 text-slate-600">
                            Boston has plenty of famous sights, but one of the best ways to
                            experience it is simply by walking around.
                        </p>

                        <p className="mt-5 text-lg leading-8 text-slate-600">
                            Follow the Freedom Trail and you'll pass historic buildings,
                            churches, meeting houses, and landmarks connected to some of the
                            most important moments in American history. Then switch gears
                            and spend an afternoon around the Boston Common, browse the shops
                            of Newbury Street, or walk along the Charles River.
                        </p>

                        <p className="mt-5 text-lg leading-8 text-slate-600">
                            Food is another reason to come hungry. Fresh seafood, New England
                            classics, Italian dishes in the North End, and plenty of modern
                            restaurants give you lots of choices.
                        </p>

                        <p className="mt-5 text-lg leading-8 text-slate-600">
                            And if you're a sports fan, Boston's legendary teams and venues
                            add another layer to the city's character.
                        </p>
                    </div>
                </section>

                {/* Flight Options */}
                <section className="mx-auto max-w-5xl px-5 py-14 sm:px-6 lg:py-20">
                    <SectionTitle>Looking for A Flight To Boston?</SectionTitle>

                    <p className="text-lg leading-8 text-slate-600">
                        There are plenty of things to consider when choosing a flight
                        besides the fare itself. You may care about departure times,
                        connections, baggage, or how convenient the airport will be once
                        you arrive.
                    </p>

                    <p className="mt-5 text-lg leading-8 text-slate-600">
                        EasyTripsNow lets you explore available Boston flight options and
                        compare:
                    </p>

                    <ul className="mt-6 space-y-3">
                        {[
                            "One-way and round-trip flights",
                            "Different departure and arrival schedules",
                            "Domestic and international itineraries",
                            "Available airline options",
                            "Different fare choices",
                            "Flights matching your preferred travel dates",
                        ].map((item) => (
                            <li key={item} className="flex items-start gap-3">
                                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700">
                                    ✓
                                </span>
                                <span className="leading-7 text-slate-600">{item}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Seasons */}
                <section className="bg-slate-50">
                    <div className="mx-auto max-w-5xl px-5 py-14 sm:px-6 lg:py-20">
                        <SectionTitle>When Should You Experience Boston?</SectionTitle>

                        <p className="text-lg leading-8 text-slate-600">
                            Boston changes quite a bit throughout the year, so your ideal
                            time to visit depends on the kind of trip you're after.
                        </p>

                        <div className="mt-8 grid gap-5 sm:grid-cols-2">
                            {[
                                {
                                    title: "Spring",
                                    text: "Spring brings milder weather and blooming parks, making it a pleasant time for walking tours and exploring the city's historic streets.",
                                },
                                {
                                    title: "Summer",
                                    text: "Summer is lively and warm, with outdoor events, waterfront activities, baseball games, and plenty of people enjoying the city's parks and neighborhoods.",
                                },
                                {
                                    title: "Fall",
                                    text: "Fall is particularly special in New England. Cooler temperatures and colorful foliage make it an excellent season for sightseeing and exploring beyond the city.",
                                },
                                {
                                    title: "Winter",
                                    text: "Winter can be cold, but Boston has plenty to offer indoors. Museums, restaurants, historic attractions, and cozy cafés make the city enjoyable even when temperatures drop.",
                                },
                            ].map((season) => (
                                <div
                                    key={season.title}
                                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                                >
                                    <h3 className="text-xl font-bold text-slate-900">
                                        {season.title}
                                    </h3>
                                    <p className="mt-3 leading-7 text-slate-600">
                                        {season.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Places */}
                <section className="mx-auto max-w-5xl px-5 py-14 sm:px-6 lg:py-20">
                    <SectionTitle>Places To Put On Your Boston Itinerary</SectionTitle>

                    <p className="text-lg leading-8 text-slate-600">
                        If it's your first visit, start with some of Boston's best-known
                        spots:
                    </p>

                    <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            "Freedom Trail",
                            "Boston Common",
                            "Fenway Park",
                            "Quincy Market",
                            "Faneuil Hall",
                            "Boston Public Garden",
                            "Newbury Street",
                            "Beacon Hill",
                            "North End",
                            "Boston Harbor",
                            "Museum of Fine Arts",
                            "Harvard Square",
                        ].map((place) => (
                            <div
                                key={place}
                                className="rounded-xl border border-slate-200 bg-white px-5 py-4 font-medium text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
                            >
                                {place}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Airport */}
                <section className="bg-slate-50">
                    <div className="mx-auto max-w-5xl px-5 py-14 sm:px-6 lg:py-20">
                        <SectionTitle>Flying Into Boston</SectionTitle>

                        <p className="text-lg leading-8 text-slate-600">
                            Boston Logan International Airport (BOS) is the primary airport
                            serving Boston and the surrounding region. It offers extensive
                            domestic and international connections and is located relatively
                            close to downtown Boston.
                        </p>

                        <p className="mt-5 text-lg leading-8 text-slate-600">
                            When comparing flights, take a look at arrival times and
                            transportation options as well as the fare. Your choice can make
                            the first part of your Boston trip considerably easier.
                        </p>

                        <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-6">
                            <div className="text-sm font-semibold uppercase tracking-wider text-blue-700">
                                Main Airport
                            </div>
                            <div className="mt-2 text-2xl font-bold text-slate-900">
                                Boston Logan International Airport
                            </div>
                            <div className="mt-1 font-medium text-blue-700">BOS</div>
                        </div>
                    </div>
                </section>

                {/* Tips */}
                <section className="mx-auto max-w-5xl px-5 py-14 sm:px-6 lg:py-20">
                    <SectionTitle>A Few Smart Ways To Search For Boston Flights</SectionTitle>

                    <p className="text-lg leading-8 text-slate-600">
                        Airfare can vary based on your travel dates, route, airline,
                        demand, and availability. If your plans aren't completely fixed,
                        comparing several options can be worthwhile.
                    </p>

                    <ul className="mt-8 space-y-4">
                        {[
                            "Check nearby departure and return dates.",
                            "Compare one-way and round-trip fares.",
                            "Look at weekday and weekend schedules.",
                            "Consider traveling outside major holiday periods.",
                            "Search ahead when possible for more itinerary choices.",
                            "Compare flight times and connections as well as fares.",
                            "Check the arrival airport and transportation options before booking.",
                        ].map((item) => (
                            <li
                                key={item}
                                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4"
                            >
                                <span className="mt-0.5 text-blue-600">✓</span>
                                <span className="leading-7 text-slate-600">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <p className="mt-7 text-lg leading-8 text-slate-600">
                        Rather than looking for a single “best” day to book, focus on
                        comparing the options available for your particular trip.
                    </p>
                </section>

                {/* CTA */}
                <section className="bg-blue-700">
                    <div className="mx-auto max-w-5xl px-5 py-14 text-center sm:px-6 lg:py-20">
                        <h2 className="text-3xl font-bold text-white sm:text-4xl">
                            Ready To Discover Boston?
                        </h2>

                        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-blue-100">
                            Boston is a city you can experience at your own pace. Walk
                            through historic streets in the morning, grab lunch in the North
                            End, catch a game in the afternoon, and end the day by the
                            harbor.
                        </p>

                        <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-blue-100">
                            It's a city with plenty of history, but it never feels like
                            that's all it has to offer.
                        </p>

                        <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-blue-100">
                            When you're ready to make the trip, explore available flights to
                            Boston with EasyTripsNow and find an itinerary that fits your
                            plans.
                        </p>

                        <p className="mx-auto mt-4 max-w-3xl text-lg font-semibold text-white">
                            Pack a comfortable pair of shoes. Boston is waiting to be
                            explored.
                        </p>

                        <a
                            href="/#flight-search"
                            className="mt-8 inline-flex rounded-xl bg-white px-7 py-3.5 font-bold text-blue-700 shadow-lg transition hover:bg-slate-100"
                        >
                            Explore Boston Flights
                        </a>
                    </div>
                </section>

                {/* FAQ */}
                <section className="mx-auto max-w-4xl px-5 py-14 sm:px-6 lg:py-20">
                    <SectionTitle>Boston Flight FAQs</SectionTitle>

                    <div className="mt-8 space-y-3">
                        {faqs.map((faq, index) => {
                            const isOpen = openFaq === index

                            return (
                                <div
                                    key={faq.question}
                                    className="overflow-hidden rounded-xl border border-slate-200 bg-white"
                                >
                                    <button
                                        type="button"
                                        onClick={() => setOpenFaq(isOpen ? null : index)}
                                        className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left"
                                    >
                                        <span className="font-semibold text-slate-900">
                                            {index + 1}. {faq.question}
                                        </span>

                                        <span className="shrink-0 text-2xl font-light text-blue-600">
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
            </main>
        </div>
    )
}