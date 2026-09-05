import FlightSearch from "./FlightSearch"

const Hero = () => {
  return (
    <section
      id="flights"
      className="relative min-h-[680px] overflow-hidden bg-[#eaf6ff]"
    >

      {/* Background */}
      <div className="absolute inset-0">

        <img
          src="/hero-plane.jpg"
          alt="Airplane"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#eaf6ff]/95 via-[#eaf6ff]/75 to-[#eaf6ff]/20" />

      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20">

        {/* Hero Text */}
        <div className="max-w-2xl">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-blue-100 shadow-sm">
            <span>✈</span>

            <span className="text-sm font-semibold text-[#1687d9]">
              Your Journey Starts Here
            </span>
          </div>

          <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] text-[#123b7a]">
            Travel More.
            <br />
            <span className="text-[#1687d9]">
              Worry Less.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base sm:text-lg leading-7 text-gray-600">
            Discover great flight deals, easy bookings, and expert travel
            support. Your next adventure is just a search away.
          </p>

          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">

            <div className="flex items-center gap-2 text-sm text-gray-700">
              <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">
                ✓
              </span>
              Best Price Guarantee
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-700">
              <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">
                ✓
              </span>
              Secure Booking
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-700">
              <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">
                ✓
              </span>
              24/7 Travel Support
            </div>

          </div>

        </div>

        {/* Search */}
        <div className="mt-12 max-w-6xl">
          <FlightSearch />
        </div>

      </div>
    </section>
  )
}

export default Hero