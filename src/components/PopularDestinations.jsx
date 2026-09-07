const destinations = [
  {
    name: "New York",
    image:
      "https://images.unsplash.com/photo-1522083165195-3424ed129620?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Los Angeles",
    image:
      "https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Miami",
    image:
      "https://images.unsplash.com/photo-1535498730771-e735b998cd64?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Las Vegas",
    image:
      "https://images.unsplash.com/photo-1605833556294-ea7c7a74f57d?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Orlando",
    image:
      "https://images.unsplash.com/photo-1598948485421-33a1655d3c18?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Chicago",
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "San Francisco",
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "London",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Paris",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Dubai",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=500&q=80",
  },
]

const PopularDestinations = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-7">

          <div className="flex items-center justify-center gap-2">
            <span className="text-[#1687d9] text-3xl">
              📍
            </span>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#123b7a]">
              Explore Popular Destinations
            </h2>
          </div>

          <p className="mt-1 text-sm text-gray-500">
            Find inspiration for your next trip from these top destinations.
          </p>
        </div>

        {/* Destination Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
          {destinations.map((destination) => (
            <div
              key={destination.name}
              className="group relative h-[105px]
                         overflow-hidden rounded-xl cursor-pointer"
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="absolute inset-0 w-full h-full
                           object-cover
                           group-hover:scale-110
                           transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-black/35
                              group-hover:bg-black/20 transition" />

              <h3 className="absolute bottom-3 left-3
                             text-white font-extrabold text-sm">
                {destination.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-6">
          <button
            type="button"
            className="px-5 py-2.5 rounded-lg
                       border border-[#1687d9]
                       text-[#1687d9]
                       text-sm font-bold
                       hover:bg-[#1687d9]
                       hover:text-white
                       transition"
          >
            View All Destinations →
          </button>
        </div>

      </div>
    </section>
  )
}

export default PopularDestinations