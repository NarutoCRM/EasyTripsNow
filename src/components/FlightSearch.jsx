import { useState } from "react"
import { appData } from "../data"
import { formatPhoneNumber } from "../utils/helper"


const FlightSearch = () => {
  const [activeTab, setActiveTab] = useState("Flights")
  const [tripType, setTripType] = useState("Round Trip")

  const tabs = [
    { name: "Flights", icon: "✈" },
    { name: "Hotels", icon: "▦" },
    { name: "Cars", icon: "▰" },
  ]

  return (
    <div className="w-full max-w-[540px] rounded-2xl bg-white shadow-2xl overflow-hidden">

      {/* TABS */}
      <div className="flex items-center border-b border-gray-200 px-5">

        {tabs.map((tab) => (
          <button
            key={tab.name}
            type="button"
            onClick={() => setActiveTab(tab.name)}
            className={`relative flex-1 py-4 text-[13px] font-bold transition ${activeTab === tab.name
              ? "text-[#123b7a]"
              : "text-gray-500 hover:text-[#123b7a]"
              }`}
          >
            <span className="mr-2">{tab.icon}</span>
            {tab.name}

            {activeTab === tab.name && (
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-[#1687d9]" />
            )}
          </button>
        ))}

      </div>

      {/* SEARCH CONTENT */}
      <div className="px-5 py-4">

        {/* Trip Type + Options */}
        <div className="flex items-center justify-between mb-4">

          <div className="flex items-center gap-5">
            {["Round Trip", "One Way", "Multi-City"].map((type) => (
              <label
                key={type}
                className="flex items-center gap-1.5 text-[11px] text-gray-700 cursor-pointer"
              >
                <input
                  type="radio"
                  name="tripType"
                  value={type}
                  checked={tripType === type}
                  onChange={(e) => setTripType(e.target.value)}
                  className="accent-[#1687d9]"
                />
                {type}
              </label>
            ))}
          </div>

          <div className="hidden sm:flex gap-2">
            <select className="h-8 rounded-md border border-gray-200 px-2 text-[10px] text-gray-600 outline-none">
              <option>Economy</option>
              <option>Premium Economy</option>
              <option>Business</option>
              <option>First Class</option>
            </select>

            <select className="h-8 rounded-md border border-gray-200 px-2 text-[10px] text-gray-600 outline-none">
              <option>1 Traveler</option>
              <option>2 Travelers</option>
              <option>3 Travelers</option>
              <option>4 Travelers</option>
            </select>
          </div>

        </div>

        {/* INPUTS */}
        <div className="grid grid-cols-2 gap-2">

          {/* FROM */}
          <div className="h-[48px] rounded-lg border border-gray-200 px-3 flex items-center gap-2">
            <span className="text-[#1687d9] text-sm">✈</span>

            <div className="min-w-0">
              <p className="text-[9px] text-gray-400">From</p>
              <input
                type="text"
                defaultValue="New York (JFK)"
                className="w-full text-[11px] font-semibold text-gray-700 outline-none bg-transparent"
              />
            </div>

            <span className="ml-auto text-gray-400 text-xs">⌖</span>
          </div>

          {/* TO */}
          <div className="h-[48px] rounded-lg border border-gray-200 px-3 flex items-center gap-2">
            <span className="text-[#1687d9] text-sm">✈</span>

            <div className="min-w-0">
              <p className="text-[9px] text-gray-400">To</p>
              <input
                type="text"
                defaultValue="London (LON)"
                className="w-full text-[11px] font-semibold text-gray-700 outline-none bg-transparent"
              />
            </div>

            <span className="ml-auto text-gray-400 text-xs">⌖</span>
          </div>

          {/* DEPARTURE */}
          <div className="h-[48px] rounded-lg border border-gray-200 px-3 flex items-center gap-2">
            <div className="min-w-0">
              <p className="text-[9px] text-gray-400">Departure</p>
              <input
                type="date"
                defaultValue="2025-05-25"
                className="w-full text-[10px] font-semibold text-gray-700 outline-none bg-transparent"
              />
            </div>
          </div>

          {/* RETURN */}
          <div className="h-[48px] rounded-lg border border-gray-200 px-3 flex items-center gap-2">
            <div className="min-w-0 w-full">
              <p className="text-[9px] text-gray-400">Return</p>
              <input
                type="date"
                disabled={tripType === "One Way"}
                className={`w-full text-[10px] font-semibold outline-none bg-transparent ${tripType === "One Way"
                  ? "text-gray-300"
                  : "text-gray-700"
                  }`}
              />
            </div>
          </div>

        </div>

        {/* SEARCH BUTTON */}
        <button
          type="button"
          className="mt-4 w-full h-[42px] rounded-lg bg-[#f59b00] hover:bg-[#e58c00] text-white text-sm font-bold shadow-md transition active:scale-[0.99]"
        >
          ✈ &nbsp; Search Flights
        </button>

        {/* CALL TEXT */}
        <div className="mt-3 flex items-center justify-center gap-2">
          <span className="text-gray-800 text-xs"> </span>

          <p className="text-[10px] text-gray-500">
            Need help finding the right fare? Call an Expert{" "}
            <a
              href="tel:18669871234"
              className="font-bold text-[#1687d9]"
            >
               {formatPhoneNumber(appData.phoneNumber)}
            </a>
          </p>
        </div>

      </div>
    </div>
  )
}

export default FlightSearch