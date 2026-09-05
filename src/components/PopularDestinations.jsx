const destinations = [
  {
    city: "New York",
    country: "United States",
    image:
      "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=900&q=80",
  },
  {
    city: "Los Angeles",
    country: "United States",
    image:
      "https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?auto=format&fit=crop&w=900&q=80",
  },
  {
    city: "Miami",
    country: "United States",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
  },
  {
    city: "Las Vegas",
    country: "United States",
    image:
      "https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?auto=format&fit=crop&w=900&q=80",
  },
  {
    city: "Orlando",
    country: "United States",
    image:
      "https://images.unsplash.com/photo-1597466599360-3b9775841aec?auto=format&fit=crop&w=900&q=80",
  },
  {
    city: "Chicago",
    country: "United States",
    image:
      "https://images.unsplash.com/photo-1494522358652-f30e61a60313?auto=format&fit=crop&w=900&q=80",
  },
  {
    city: "San Francisco",
    country: "United States",
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=900&q=80",
  },
  {
    city: "London",
    country: "United Kingdom",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=900&q=80",
  },
]

const PopularDestinations = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#f7fbff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#1687d9] mb-2">
            Explore the World
          </p>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123b7a]">
            Explore Popular Destinations
          </h2>

          <p className="mt-4 text-gray-500 leading-7">
            Discover amazing destinations and start planning your next
            unforgettable journey with EasyTripsNow.
          </p>
        </div>

        {/* Destination Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

          {destinations.map((destination) => (
            <div
              key={destination.city}
              className="group relative h-[230px] sm:h-[270px] rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <img
                src={destination.image}
                alt={destination.city}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">

                <p className="text-xs text-white/75 mb-1">
                  {destination.country}
                </p>

                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-lg sm:text-xl font-bold">
                    {destination.city}
                  </h3>

                  <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-[#1687d9] transition-colors">
                    →
                  </span>
                </div>

              </div>
            </div>
          ))}

        </div>

        {/* Button */}
        <div className="text-center mt-10">
          <button
            type="button"
            className="px-7 py-3 rounded-xl border-2 border-[#1687d9] text-[#1687d9] font-bold text-sm hover:bg-[#1687d9] hover:text-white transition-all"
          >
            Explore All Destinations →
          </button>
        </div>

      </div>
    </section>
  )
}

export default PopularDestinations