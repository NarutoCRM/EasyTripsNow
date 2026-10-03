import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Layout from "./Layout";
import FlightCard from "./FlightCard";
import { searchFlights } from "../services/flightService";
import airports from "../data/airports.json";

const byCode = Object.fromEntries(airports.filter((airport) => airport.iata).map((airport) => [airport.iata, airport]));
const dateLabel = (value) => value ? new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(`${value}T00:00:00Z`)) : "Not provided";
const minutes = (duration = "") => { const hours = Number(duration.match(/(\d+)\s*h/i)?.[1] ?? 0); const mins = Number(duration.match(/(\d+)\s*m/i)?.[1] ?? 0); return hours * 60 + mins; };

export default function FlightResults() {
  const [params] = useSearchParams();
  const [status, setStatus] = useState("loading");
  const [flights, setFlights] = useState([]);
  const [sort, setSort] = useState("cheapest");
  const [stopFilter, setStopFilter] = useState("all");
  const search = useMemo(() => ({
    tripType: params.get("tripType") ?? "round-trip",
    from: byCode[params.get("from")] ?? null,
    to: byCode[params.get("to")] ?? null,
    departureDate: params.get("departure") ?? "",
    returnDate: params.get("return") ?? "",
    cabin: params.get("cabin") ?? "economy",
    travelers: Number(params.get("travelers") ?? 1),
  }), [params]);
  useEffect(() => {
    let cancelled = false;
    searchFlights(search).then((result) => { if (!cancelled) { setFlights(result.flights); setStatus(result.status === "demo" ? "demo" : result.flights.length ? "results" : "empty"); } })
      .catch(() => { if (!cancelled) setStatus("error"); });
    return () => { cancelled = true; };
  }, [search]);
  const visibleFlights = useMemo(() => {
    const filtered = flights.filter((flight) => stopFilter === "all" || (stopFilter === "2+" ? flight.stops >= 2 : flight.stops === Number(stopFilter)));
    return filtered.sort((a, b) => sort === "fastest" ? minutes(a.duration) - minutes(b.duration) : sort === "departure" ? a.departure.time.localeCompare(b.departure.time) : a.price - b.price);
  }, [flights, sort, stopFilter]);
  const tripName = search.tripType === "round-trip" ? "Round Trip" : search.tripType === "one-way" ? "One Way" : "Multi-City";
  const summary = `${tripName} · ${search.cabin.replaceAll("-", " ").replace(/\b\w/g, (c) => c.toUpperCase())} · ${search.travelers} ${search.travelers === 1 ? "Traveler" : "Travelers"}`;
  return <Layout><section className="mx-auto min-h-[65vh] w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
    <div className="mb-5 flex flex-wrap items-center justify-between gap-3"><h1 className={`text-xl font-extrabold tracking-wide ${status === "demo" ? "text-amber-700" : "text-[#123b7a]"}`}>{status === "demo" ? "DEMO FLIGHT RESULTS" : "FLIGHT RESULTS"}</h1><Link to={`/?${params.toString()}#flight-search`} className="rounded-lg border border-[#1687d9] px-4 py-2 text-sm font-semibold text-[#123b7a] hover:bg-blue-50">Edit Search</Link></div>
    <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">
      <h2 className="text-2xl font-bold text-[#123b7a] sm:text-3xl">{search.from?.iata ?? "—"} <span aria-hidden="true">→</span> {search.to?.iata ?? "—"}</h2>
      <p className="mt-1 text-gray-600">{search.from?.city ?? "Unknown origin"} → {search.to?.city ?? "Unknown destination"}</p>
      <div className="mt-5 grid gap-3 text-sm text-gray-700 sm:grid-cols-3"><p><span className="block text-xs text-gray-500">Departure</span>{dateLabel(search.departureDate)}</p>{search.tripType === "round-trip" && <p><span className="block text-xs text-gray-500">Return</span>{dateLabel(search.returnDate)}</p>}<p>{summary}</p></div>
    </div>
    {status === "demo" && <div className="mb-6 rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900"><strong>DEMO RESULTS</strong><p className="mt-1">Demo flight data for development purposes only. Prices and availability are not real and cannot be booked.</p></div>}
    {(status === "demo" || status === "results") && <div className="mb-4 flex flex-wrap items-center gap-4 rounded-xl border border-gray-200 bg-white p-4">
      <label className="flex items-center gap-2 text-sm text-gray-700">Sort by<select value={sort} onChange={(event) => setSort(event.target.value)} className="rounded-md border border-gray-300 px-2 py-1"><option value="cheapest">Cheapest</option><option value="fastest">Fastest</option><option value="departure">Earliest Departure</option></select></label>
      <label className="flex items-center gap-2 text-sm text-gray-700">Stops<select value={stopFilter} onChange={(event) => setStopFilter(event.target.value)} className="rounded-md border border-gray-300 px-2 py-1"><option value="all">Any stops</option><option value="0">Nonstop</option><option value="1">1 Stop</option><option value="2+">2+ Stops</option></select></label>
      <span className="text-xs text-gray-500">{visibleFlights.length} demo options</span>
    </div>}
    <section aria-live="polite">
      {status === "loading" && <p className="rounded-xl bg-blue-50 p-6 text-center text-gray-700">Searching available flights...</p>}
      {status === "error" && <p className="rounded-xl bg-red-50 p-6 text-center text-red-700">Unable to load flight results. Please try again.</p>}
      {status === "empty" && <p className="rounded-xl bg-gray-50 p-8 text-center text-gray-700">No flights were found for the selected route and dates.</p>}
      {(status === "demo" || status === "results") && visibleFlights.length === 0 && <p className="rounded-xl bg-gray-50 p-8 text-center text-gray-700">No flights match this stops filter.</p>}
      {(status === "demo" || status === "results") && visibleFlights.length > 0 && <div className="space-y-4">{visibleFlights.map((flight) => <FlightCard key={flight.id} flight={flight} demo={status === "demo"} />)}</div>}
    </section>
  </section></Layout>;
}
