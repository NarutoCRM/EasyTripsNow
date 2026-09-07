import { useState } from "react"

const faqs = [
    {
        question: "How do I book a flight with EasyTripsNow?",
        answer:
            "Simply enter your departure city, destination, travel dates, and other required details in our flight search form. Click Search Flights to explore available options and choose the flight that works best for you.",
    },
    {
        question: "Can I book a one-way or round-trip flight?",
        answer:
            "Yes. EasyTripsNow supports one-way, round-trip, and multi-city travel options so you can choose the option that fits your travel plans.",
    },
    {
        question: "Are there any hidden booking fees?",
        answer:
            "We believe in transparent pricing. Any applicable charges will be clearly displayed before you complete your booking.",
    },
    {
        question: "Can I change or cancel my flight?",
        answer:
            "Flight changes and cancellations depend on the airline's fare rules. Our travel experts can help you understand the applicable options and policies.",
    },
    {
        question: "How can I contact EasyTripsNow support?",
        answer:
            "You can contact our travel experts by calling (855)750-2715. Our support team is available Mon - Sun from 8AM - 11PM EST.",
    },
    {
        question: "Does EasyTripsNow offer hotel and car bookings?",
        answer:
            "Yes. Along with flights, EasyTripsNow can help travelers explore hotel and car rental options for their trips.",
    },
]

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0)

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? -1 : index)
    }

    return (
        <section className="py-20 sm:py-24 bg-[#f7fbff]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Heading */}
                <div className="text-center mb-12">

                    <p className="text-sm font-semibold uppercase tracking-wider text-[#1687d9] mb-2">
                        Need Help?
                    </p>

                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123b7a]">
                        Frequently Asked Questions
                    </h2>

                    <p className="mt-4 text-gray-500">
                        Find answers to some of the most common travel and booking
                        questions.
                    </p>

                </div>

                {/* FAQ List */}
                <div className="space-y-3">

                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index

                        return (
                            <div
                                key={faq.question}
                                className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen
                                    ? "border-blue-200 shadow-md"
                                    : "border-gray-200"
                                    }`}
                            >

                                {/* Question */}
                                <button
                                    type="button"
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between gap-5 text-left px-5 sm:px-7 py-5"
                                >

                                    <span
                                        className={`text-sm sm:text-base font-bold ${isOpen
                                            ? "text-[#1687d9]"
                                            : "text-[#123b7a]"
                                            }`}
                                    >
                                        {faq.question}
                                    </span>

                                    <span
                                        className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen
                                            ? "bg-[#1687d9] text-white rotate-180"
                                            : "bg-blue-50 text-[#1687d9]"
                                            }`}
                                    >
                                        <svg
                                            className="w-4 h-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="m6 9 6 6 6-6"
                                            />
                                        </svg>
                                    </span>

                                </button>

                                {/* Answer */}
                                {isOpen && (
                                    <div className="px-5 sm:px-7 pb-6">
                                        <div className="pt-1 border-t border-gray-100">
                                            <p className="pt-4 text-sm leading-7 text-gray-500">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                )}

                            </div>
                        )
                    })}

                </div>

                {/* Contact Help */}
                <div className="mt-10 text-center">

                    <p className="text-sm text-gray-500">
                        Still have questions?
                    </p>

                    <a
                        href="tel:(855)750-2715"
                        className="inline-block mt-2 text-sm font-bold text-[#1687d9] hover:text-[#123b7a]"
                    >
                        Talk to an Expert → (855)750-2715
                    </a>

                </div>

            </div>
        </section>
    )
}

export default FAQ