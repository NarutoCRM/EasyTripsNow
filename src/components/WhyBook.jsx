const features = [
  {
    icon: "💰",
    title: "Competitive Fares",
    description:
      "Get great prices on flights, hotels, and travel services without compromising on quality.",
  },
  {
    icon: "🔒",
    title: "Secure & Easy Booking",
    description:
      "Your information is protected with secure technology for a safe and hassle-free booking experience.",
  },
  {
    icon: "🎧",
    title: "Expert Travel Support",
    description:
      "Our travel experts are available to help you before, during, and after your journey.",
  },
  {
    icon: "🌎",
    title: "Global Reach",
    description:
      "Explore destinations around the world with access to a wide range of travel options.",
  },
  {
    icon: "✈️",
    title: "Flexible Options",
    description:
      "Choose from multiple airlines, routes, dates, and travel options that fit your plans.",
  },
  {
    icon: "✓",
    title: "No Hidden Fees",
    description:
      "We believe in transparent pricing, so you know what you are paying before you book.",
  },
]

const WhyBook = () => {
  return (
    <section
      id="about"
      className="py-20 sm:py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#1687d9] mb-2">
            Why Choose Us
          </p>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123b7a]">
            Why Book With EasyTripsNow?
          </h2>

          <p className="mt-4 text-gray-500 leading-7">
            We make travel planning simple, secure, and affordable so you can
            focus on enjoying your journey.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-7 rounded-2xl border border-gray-100 bg-white hover:border-blue-100 hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-[#edf7ff] flex items-center justify-center text-2xl group-hover:bg-[#1687d9] group-hover:scale-105 transition-all duration-300">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="mt-6 text-lg font-bold text-[#123b7a]">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                {feature.description}
              </p>

              <div className="mt-5 text-sm font-semibold text-[#1687d9] opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More →
              </div>
            </div>
          ))}

        </div>

        {/* Trust Bar */}
        <div className="mt-14 rounded-2xl bg-[#123b7a] px-6 py-8 sm:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-7 text-center text-white">

            <div>
              <p className="text-2xl sm:text-3xl font-extrabold">
                500K+
              </p>
              <p className="mt-1 text-xs sm:text-sm text-white/70">
                Happy Travelers
              </p>
            </div>

            <div>
              <p className="text-2xl sm:text-3xl font-extrabold">
                100+
              </p>
              <p className="mt-1 text-xs sm:text-sm text-white/70">
                Destinations
              </p>
            </div>

            <div>
              <p className="text-2xl sm:text-3xl font-extrabold">
                24/7
              </p>
              <p className="mt-1 text-xs sm:text-sm text-white/70">
                Expert Support
              </p>
            </div>

            <div>
              <p className="text-2xl sm:text-3xl font-extrabold">
                4.9/5
              </p>
              <p className="mt-1 text-xs sm:text-sm text-white/70">
                Traveler Rating
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default WhyBook