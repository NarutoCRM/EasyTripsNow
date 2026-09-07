const features = [
  {
    icon: "◇",
    title: "Competitive Fares",
    text: "We search flight options from leading airlines to help you find the best fares.",
  },
  {
    icon: "♢",
    title: "Simple & Secure Booking",
    text: "Enjoy a straightforward booking experience designed to make travel planning easier.",
  },
  {
    icon: "◉",
    title: "Expert Travel Support",
    text: "Have questions? Our travel experts are ready to help you every step of the way.",
  },
  {
    icon: "◎",
    title: "Global Reach",
    text: "Explore flight options to popular destinations across the US and around the world.",
  },
  {
    icon: "↔",
    title: "Flexible Options",
    text: "Choose from different schedules, airlines, and cabin preferences.",
  },
  {
    icon: "$",
    title: "Clear Pricing",
    text: "Know what you're booking with transparent fares and no hidden surprises.",
  },
]

const WhyBook = () => {
  return (
    <section className="bg-[#f3f8fd] py-14">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-8">

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#123b7a]">
            Why Book With EasyTripsNow?
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Your trusted travel partner for a better journey.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-white rounded-xl
                         border border-gray-100
                         p-5 text-center
                         shadow-sm
                         hover:-translate-y-2
                         hover:shadow-xl
                         transition-all duration-300"
            >

              {/* Icon */}
              <div
                className="mx-auto w-11 h-11
                           rounded-full
                           bg-[#e8f4ff]
                           text-[#1687d9]
                           flex items-center
                           justify-center
                           text-xl font-bold
                           group-hover:scale-110
                           transition"
              >
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="mt-4 text-sm font-extrabold text-[#123b7a]">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-[11px] leading-5 text-gray-500">
                {feature.text}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default WhyBook