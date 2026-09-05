const deals = [
  {
    from: "New York",
    fromCode: "JFK",
    to: "Los Angeles",
    toCode: "LAX",
    price: "$189",
    airline: "American Airlines",
    date: "Sep 18 - Sep 25",
  },
  {
    from: "Chicago",
    fromCode: "ORD",
    to: "Miami",
    toCode: "MIA",
    price: "$149",
    airline: "United Airlines",
    date: "Sep 20 - Sep 27",
  },
  {
    from: "New York",
    fromCode: "JFK",
    to: "Miami",
    toCode: "MIA",
    price: "$159",
    airline: "Delta Airlines",
    date: "Sep 22 - Sep 29",
  },
  {
    from: "Los Angeles",
    fromCode: "LAX",
    to: "Las Vegas",
    toCode: "LAS",
    price: "$79",
    airline: "Southwest",
    date: "Sep 25 - Sep 28",
  },
  {
    from: "Boston",
    fromCode: "BOS",
    to: "Orlando",
    toCode: "MCO",
    price: "$139",
    airline: "JetBlue",
    date: "Sep 26 - Oct 2",
  },
]

const FlightDeals = () => {
  return (
    <section
      id="deals"
      className="py-20 sm:py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-10">

          <div>
            <p className="text-sm font-semibold text-[#1687d9] uppercase tracking-wider mb-2">
              Great Deals
            </p>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123b7a]">
              Limited Time Flight Deals
            </h2>

            <p className="mt-3 text-gray-500 max-w-2xl">
              Grab these special fares before they are gone. Book your next
              trip and save more with EasyTripsNow.
            </p>
          </div>

          <button
            type="button"
            className="self-start sm:self-auto text-sm font-bold text-[#1687d9] hover:text-[#0d75bd] transition"
          >
            View All Deals →
          </button>

        </div>

        {/* Deal Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">

          {deals.map((deal, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-blue-200 hover:shadow-xl transition-all duration-300"
            >

              {/* Top */}
              <div className="bg-gradient-to-br from-[#edf7ff] to-[#f8fbff] p-5">

                <div className="flex items-center justify-between mb-5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#1687d9] bg-white px-2.5 py-1 rounded-full">
                    Flight Deal
                  </span>

                  <span className="text-xs text-gray-400">
                    Round Trip
                  </span>
                </div>

                {/* Route */}
                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-xs text-gray-400">
                      {deal.from}
                    </p>

                    <p className="text-2xl font-extrabold text-[#123b7a]">
                      {deal.fromCode}
                    </p>
                  </div>

                  <div className="flex-1 px-3">
                    <div className="relative flex items-center">
                      <div className="h-px w-full bg-blue-200" />

                      <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border border-blue-100 flex items-center justify-center shadow-sm">
                        <span className="text-[#1687d9] text-sm">
                          ✈
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-xs text-gray-400">
                      {deal.to}
                    </p>

                    <p className="text-2xl font-extrabold text-[#123b7a]">
                      {deal.toCode}
                    </p>
                  </div>

                </div>
              </div>

              {/* Details */}
              <div className="p-5">

                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-gray-500">
                    {deal.date}
                  </span>

                  <span className="text-xs font-medium text-gray-500">
                    {deal.airline}
                  </span>
                </div>

                <div className="border-t border-gray-100 pt-4 flex items-end justify-between">

                  <div>
                    <p className="text-[11px] text-gray-400">
                      From
                    </p>

                    <p className="text-2xl font-extrabold text-[#123b7a]">
                      {deal.price}
                    </p>

                    <p className="text-[10px] text-gray-400">
                      round trip
                    </p>
                  </div>

                  <button
                    type="button"
                    className="px-3 py-2 rounded-lg bg-[#1687d9] text-white text-xs font-bold hover:bg-[#0d75bd] transition"
                  >
                    View Deal
                  </button>

                </div>
              </div>

            </div>
          ))}

        </div>

        {/* Bottom Note */}
        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-400">
          <span className="text-green-500">✓</span>
          Prices shown are subject to availability and may change.
        </div>

      </div>
    </section>
  )
}

export default FlightDeals