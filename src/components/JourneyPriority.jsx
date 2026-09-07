const JourneyPriority = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1000&q=80"
              alt="Traveler at airport"
              className="w-full h-[380px] object-cover rounded-2xl"
            />
          </div>

          <div>
            <h2 className="text-3xl font-extrabold text-[#123b7a]">
              Your Journey, Our Priority
            </h2>

            <p className="mt-5 text-gray-600 leading-7">
              At EasyTripsNow, we believe planning a trip should feel
              exciting—not overwhelming. Whether you're visiting family,
              heading on a long-awaited vacation, or simply looking for a
              change of scenery, we're here to make finding your flight easier.
            </p>

            <p className="mt-4 text-gray-600 leading-7">
              We bring flight options from leading airlines together in one
              convenient place, helping you explore routes, compare fares, and
              find an option that works for your plans. Our team is also
              available when you need an extra hand navigating your choices.
            </p>

            <p className="mt-4 text-gray-600 leading-7">
              From the first search to the moment your travel plans come
              together, EasyTripsNow is focused on making your experience
              simple, helpful, and stress-free.
            </p>

            <p className="mt-5 font-bold text-[#123b7a]">
              Travel more. Worry less. That's the EasyTripsNow promise.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JourneyPriority