import { useState } from "react";

export default function FlightCard({ flight, demo = false }) {
  const [selected, setSelected] = useState(false);
  return (
    <article className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          {flight.airlineLogo && (
            <img
              src={flight.airlineLogo}
              alt=""
              className="h-8 w-8 object-contain"
            />
          )}
          <div>
            <p className="font-bold text-gray-800">{flight.airline}</p>
            <p className="text-sm text-gray-500">
              {flight.flightNumber}
              {flight.airlineCode ? ` · ${flight.airlineCode}` : ""}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5 text-center">
          <div>
            <p className="font-bold text-gray-800">{flight.departure.time}</p>
            <p className="text-sm text-gray-500">{flight.departure.code}</p>
          </div>
          <div className="text-xs text-gray-500">
            {flight.duration}
            <br />
            {Number(flight.stops) === 0 ? "Nonstop" : `${flight.stops} stop(s)`}
          </div>
          <div>
            <p className="font-bold text-gray-800">{flight.arrival.time}</p>
            <p className="text-sm text-gray-500">{flight.arrival.code}</p>
          </div>
        </div>
        <div className="text-right">
          {demo && (
            <p className="text-[10px] font-bold tracking-wide text-amber-700">
              DEMO PRICE
            </p>
          )}
          <p className="font-bold text-gray-800">
            {flight.price != null
              ? new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: flight.currency || "USD",
                  maximumFractionDigits: 0,
                }).format(flight.price)
              : "Price unavailable"}
          </p>
          <p className="text-sm text-gray-500">
            {flight.cabin}
            {flight.baggage ? ` · ${flight.baggage}` : ""}
          </p>
          {demo ? (
            <button
              type="button"
              onClick={() => setSelected(true)}
              className="mt-2 inline-block rounded-lg bg-[#f59b00] px-4 py-2 text-sm font-bold text-white"
            >
              {selected ? "Demo flight selected" : "Select Flight"}
            </button>
          ) : (
            flight.bookingUrl && (
              <a
                href={flight.bookingUrl}
                className="mt-2 inline-block rounded-lg bg-[#f59b00] px-4 py-2 text-sm font-bold text-white"
              >
                Select / Continue
              </a>
            )
          )}
        </div>
      </div>
    </article>
  );
}
