import { useState } from "react"

const FlightSearch = () => {
  const [tripType, setTripType] = useState("round")
  const [activeTab, setActiveTab] = useState("flights")

  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">

      {/* Tabs */}
      <div className="flex border-b border-gray-100 px-5 sm:px-7 overflow-x-auto">

        {[
          { id: "flights", label: "Flights", icon: "✈" },
          { id: "hotels", label: "Hotels", icon: "🏨" },
          { id: "cars", label: "Cars", icon: "🚗" },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`relative flex items-center gap-2 mr-7 py-5 text-sm font-semibold whitespace-nowrap transition ${
              activeTab === tab.id
                ? "text-[#1687d9]"
                : "text-gray-500 hover:text-[#123b7a]"
            }`}
          >
            <span>{tab.icon}</span>
            {tab.label}

            {activeTab === tab.id && (
              <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#1687d9] rounded-full" />
            )}
          </button>
        ))}

      </div>

      {/* Search Content */}
      <div className="p-5 sm:p-7">

        {activeTab === "flights" && (
          <>
            {/* Trip Type */}
            <div className="flex flex-wrap gap-5 mb-6">

              {[
                ["round", "Round Trip"],
                ["oneway", "One Way"],
                ["multi", "Multi-City"],
              ].map(([value, label]) => (
                <label
                  key={value}
                  className="flex items-center gap-2 text-sm font-medium text-gray-700 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="tripType"
                    value={value}
                    checked={tripType === value}
                    onChange={(e) => setTripType(e.target.value)}
                    className="w-4 h-4 accent-[#1687d9]"
                  />

                  {label}
                </label>
              ))}

            </div>

            {/* Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-3">

              {/* From */}
              <div className="rounded-xl border border-gray-200 px-4 py-3 hover:border-[#1687d9] transition">
                <label className="block text-xs text-gray-400 mb-1">
                  From
                </label>

                <input
                  type="text"
                  placeholder="City or airport"
                  className="w-full text-sm font-semibold text-gray-800 placeholder:text-gray-400 outline-none bg-transparent"
                />
              </div>

              {/* To */}
              <div className="rounded-xl border border-gray-200 px-4 py-3 hover:border-[#1687d9] transition">
                <label className="block text-xs text-gray-400 mb-1">
                  To
                </label>

                <input
                  type="text"
                  placeholder="City or airport"
                  className="w-full text-sm font-semibold text-gray-800 placeholder:text-gray-400 outline-none bg-transparent"
                />
              </div>

              {/* Departure */}
              <div className="rounded-xl border border-gray-200 px-4 py-3 hover:border-[#1687d9] transition">
                <label className="block text-xs text-gray-400 mb-1">
                  Departure
                </label>

                <input
                  type="date"
                  className="w-full text-sm font-semibold text-gray-800 outline-none bg-transparent"
                />
              </div>

              {/* Return */}
              <div
                className={`rounded-xl border px-4 py-3 transition ${
                  tripType === "oneway"
                    ? "border-gray-100 bg-gray-50 opacity-50"
                    : "border-gray-200 hover:border-[#1687d9]"
                }`}
              >
                <label className="block text-xs text-gray-400 mb-1">
                  Return
                </label>

                <input
                  type="date"
                  disabled={tripType === "oneway"}
                  className="w-full text-sm font-semibold text-gray-800 outline-none bg-transparent disabled:cursor-not-allowed"
                />
              </div>

              {/* Search */}
              <button
                type="button"
                className="min-h-[58px] rounded-xl bg-[#1687d9] hover:bg-[#0d75bd] active:scale-[0.98] text-white font-bold text-sm shadow-lg shadow-blue-100 transition-all"
              >
                Search Flights
              </button>

            </div>

            <div className="mt-5 flex flex-wrap justify-between gap-3">
              <p className="text-xs text-gray-400">
                Compare hundreds of airlines and travel options
              </p>

              <p className="text-xs font-semibold text-green-600">
                ✓ No hidden fees
              </p>
            </div>
          </>
        )}

        {activeTab === "hotels" && (
          <div className="py-8 text-center">
            <div className="text-4xl">🏨</div>

            <h3 className="mt-4 text-xl font-bold text-[#123b7a]">
              Hotel Booking
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Hotel search and booking will be available here.
            </p>
          </div>
        )}

        {activeTab === "cars" && (
          <div className="py-8 text-center">
            <div className="text-4xl">🚗</div>

            <h3 className="mt-4 text-xl font-bold text-[#123b7a]">
              Car Rental
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Car rental search and booking will be available here.
            </p>
          </div>
        )}

      </div>
    </div>
  )
}

export default FlightSearch