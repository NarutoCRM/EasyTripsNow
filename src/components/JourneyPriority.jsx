const JourneyPriority = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#f7fbff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80"
                alt="Airplane flying above clouds"
                className="w-full h-[380px] sm:h-[480px] object-cover"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-5 -right-3 sm:right-6 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-2xl">
                ✈️
              </div>

              <div>
                <p className="text-2xl font-extrabold text-[#123b7a]">
                  500K+
                </p>
                <p className="text-xs text-gray-500">
                  Journeys Made Easy
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="pt-5 lg:pt-0">

            <p className="text-sm font-semibold uppercase tracking-wider text-[#1687d9] mb-3">
              Travel With Confidence
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-[#123b7a]">
              Your Journey,
              <br />
              <span className="text-[#1687d9]">
                Our Priority.
              </span>
            </h2>

            <p className="mt-6 text-gray-500 leading-7">
              At EasyTripsNow, we believe that travel should be exciting,
              simple, and stress-free. Our team works behind the scenes to
              make every part of your trip easier.
            </p>

            <p className="mt-4 text-gray-500 leading-7">
              From finding the right flight to helping you with your travel
              plans, our experts are here to support you every step of the
              way.
            </p>

            {/* Points */}
            <div className="mt-7 space-y-4">

              <div className="flex items-start gap-3">
                <span className="shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold">
                  ✓
                </span>

                <div>
                  <h3 className="font-bold text-[#123b7a]">
                    Personalized Travel Assistance
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Get guidance based on your travel needs and preferences.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold">
                  ✓
                </span>

                <div>
                  <h3 className="font-bold text-[#123b7a]">
                    Reliable Travel Support
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Our experts are ready to help whenever you need us.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold">
                  ✓
                </span>

                <div>
                  <h3 className="font-bold text-[#123b7a]">
                    Simple & Transparent
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Straightforward booking with clear pricing and options.
                  </p>
                </div>
              </div>

            </div>

            {/* Button */}
            <button
              type="button"
              className="mt-8 px-7 py-3.5 rounded-xl bg-[#1687d9] hover:bg-[#0d75bd] text-white font-bold text-sm shadow-lg shadow-blue-100 transition-all"
            >
              Learn More About Us →
            </button>

          </div>

        </div>

      </div>
    </section>
  )
}

export default JourneyPriority