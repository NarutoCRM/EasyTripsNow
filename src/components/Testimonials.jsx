const testimonials = [
    {
        name: "Sarah Johnson",
        location: "New York, USA",
        initials: "SJ",
        rating: 5,
        review:
            "EasyTripsNow made booking our family vacation so simple. We found a great flight at an amazing price, and their support team was extremely helpful.",
    },
    {
        name: "Michael Brown",
        location: "Chicago, USA",
        initials: "MB",
        rating: 5,
        review:
            "I have used EasyTripsNow several times and every experience has been smooth. The prices are competitive and the booking process is very easy.",
    },
    {
        name: "Emily Davis",
        location: "Los Angeles, USA",
        initials: "ED",
        rating: 5,
        review:
            "The travel support was excellent. They helped me find the right flight for my schedule and answered all my questions quickly. Highly recommended!",
    },
]

const Testimonials = () => {
    return (
        <section className="py-20 sm:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Heading */}
                <div className="text-center max-w-2xl mx-auto mb-12">

                    <p className="text-sm font-semibold uppercase tracking-wider text-[#1687d9] mb-2">
                        Traveler Reviews
                    </p>

                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123b7a]">
                        What Our Travelers Say
                    </h2>

                    <p className="mt-4 text-gray-500 leading-7">
                        Thousands of travelers trust EasyTripsNow to make their journeys
                        easier, smoother, and more enjoyable.
                    </p>

                </div>

                {/* Testimonials */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.name}
                            className="relative p-7 rounded-2xl bg-[#f8fbff] border border-blue-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >

                            {/* Quote */}
                            <div className="absolute top-6 right-7 text-5xl leading-none text-blue-100 font-serif">
                                “
                            </div>

                            {/* Stars */}
                            <div className="flex gap-1 text-yellow-400 text-sm">
                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                    <span key={i}>★</span>
                                ))}
                            </div>

                            {/* Review */}
                            <p className="mt-5 text-sm leading-7 text-gray-600">
                                “{testimonial.review}”
                            </p>

                            {/* User */}
                            <div className="mt-7 pt-5 border-t border-blue-100 flex items-center gap-3">

                                <div className="w-11 h-11 rounded-full bg-[#123b7a] text-white flex items-center justify-center font-bold text-sm">
                                    {testimonial.initials}
                                </div>

                                <div>
                                    <h3 className="text-sm font-bold text-[#123b7a]">
                                        {testimonial.name}
                                    </h3>

                                    <p className="text-xs text-gray-400 mt-0.5">
                                        {testimonial.location}
                                    </p>
                                </div>

                            </div>

                        </div>
                    ))}

                </div>

                {/* Rating */}
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">

                    <div className="flex items-center gap-1">
                        <span className="text-yellow-400">★★★★★</span>
                        <span className="font-bold text-[#123b7a]">
                            4.9/5
                        </span>
                    </div>

                    <span className="hidden sm:block text-gray-300">
                        |
                    </span>

                    <p className="text-sm text-gray-500">
                        Based on thousands of traveler reviews
                    </p>

                </div>

            </div>
        </section>
    )
}

export default Testimonials