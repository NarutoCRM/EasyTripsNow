const destinations = [
  {
    name: "New York",
    subtitle: "The City That Never Sleeps",
    image:
      "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=900&q=80",
    link: "/cheap-flights-to-new-york-city",
  },
  {
    name: "Los Angeles",
    subtitle: "Entertainment Capital of the World",
    image:
      "https://images.unsplash.com/photo-1534190760961-74e5c5c12f32?auto=format&fit=crop&w=900&q=80",
    link: "/cheap-flights-to-los-angeles",
  },
  {
    name: "Las Vegas",
    subtitle: "Excitement, Entertainment & More",
    image:
      "https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?auto=format&fit=crop&w=900&q=80",
    link: "/cheap-flights-to-las-vegas",
  },
  {
    name: "Paris",
    subtitle: "The City of Light",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=80",
    link: "/cheap-flights-to-paris",
  },
  {
    name: "San Francisco",
    subtitle: "Golden Gate & Bay Views",
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=900&q=80",
    link: "/cheap-flights-to-san-francisco",
  },
  {
    name: "Boston",
    subtitle: "History, Culture & Charm",
    image:
      "https://images.unsplash.com/photo-1501979376754-2ff867a4f659?auto=format&fit=crop&w=900&q=80",
    link: "/cheap-flights-to-boston",
  },
]

export default function PopularDestinations() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Explore & Travel
          </span>

          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Explore Popular Destinations
          </h2>

          <p className="mt-3 text-base leading-7 text-slate-600">
            Discover popular destinations and explore flight options
            for your next trip.
          </p>
        </div>

        {/* Destination Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => (
            <a
              key={destination.name}
              href={destination.link}
              className="group overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={destination.image}
                  alt={`Cheap flights to ${destination.name}`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "/hero-plane.jpg"
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <div className="absolute bottom-4 left-5">
                  <h3 className="text-2xl font-bold text-white">
                    {destination.name}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="flex items-center justify-between px-5 py-4">
                <div>
                  <p className="text-sm font-medium text-slate-600">
                    {destination.subtitle}
                  </p>
                </div>

                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white transition group-hover:bg-blue-700">
                  →
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}