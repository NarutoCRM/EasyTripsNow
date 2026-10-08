import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { appData } from "../data";
import { formatPhoneNumber } from "../utils/helper";

import { getAirportByIata, searchAirports } from "../utils/airportSearch";

function AirportField({ label, value, airport, onChange, onSelect, error }) {
  const [focused, setFocused] = useState(false);
  const [query, setQuery] = useState(airport ? `${airport.name} (${airport.iata})` : value);
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [suggestionsError, setSuggestionsError] = useState("");
  useEffect(() => { const timer = setTimeout(() => setDebouncedQuery(query), 140); return () => clearTimeout(timer); }, [query]);
  useEffect(() => {
    let cancelled = false;
    setSuggestions([]);
    setSuggestionsError("");
    searchAirports(debouncedQuery)
      .then((results) => { if (!cancelled) setSuggestions(results); })
      .catch((error) => {
        console.error("Could not load airport suggestions.", error);
        if (!cancelled) setSuggestionsError("Airport suggestions could not be loaded. Please try again.");
      });
    return () => { cancelled = true; };
  }, [debouncedQuery]);
  useEffect(() => { if (airport) setQuery(`${airport.name} (${airport.iata})`); }, [airport]);
  return <div className="relative h-[48px] rounded-lg border border-gray-200 px-3 flex items-center gap-2">
    <span className="text-[#1687d9] text-sm">✈</span><div className="min-w-0 flex-1"><p className="text-[9px] text-gray-400">{label}</p>
      <input type="text" value={query} autoComplete="off" aria-label={label} aria-expanded={focused && suggestions.length > 0}
        onFocus={() => setFocused(true)} onBlur={() => setTimeout(() => setFocused(false), 120)}
        onChange={(event) => { setQuery(event.target.value); onChange(event.target.value); }}
        className="w-full text-[11px] font-semibold text-gray-700 outline-none bg-transparent" />
    </div><span className="ml-auto text-gray-400 text-xs">⌖</span>
    {focused && suggestions.length > 0 && <ul className="absolute left-0 right-0 top-full z-30 mt-1 max-h-64 overflow-auto rounded-lg border border-gray-200 bg-white py-1 shadow-xl">
      {suggestions.map((item, index) => <li key={`${item.iata}-${item.icao}-${index}`}><button type="button" onMouseDown={(event) => event.preventDefault()} onClick={() => { onSelect(item); setQuery(`${item.name} (${item.iata})`); setFocused(false); }} className="w-full px-3 py-2 text-left hover:bg-blue-50">
        <span className="block truncate text-xs font-semibold text-gray-800">{item.name}</span><span className="block text-[11px] text-gray-500">{item.iata || "—"} · {item.city}, {item.country}</span>
      </button></li>)}
    </ul>}{(error || suggestionsError) && <p role={suggestionsError ? "alert" : undefined} className="absolute left-0 top-full mt-1 text-[10px] text-red-600">{error || suggestionsError}</p>}
  </div>;
}

export default function FlightSearch() {
  const [activeTab, setActiveTab] = useState("Flights");
  const [tripType, setTripType] = useState("Round Trip");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [fromText, setFromText] = useState(""); const [toText, setToText] = useState("");
  const [departureDate, setDepartureDate] = useState(searchParams.get("departure") ?? "");
  const [returnDate, setReturnDate] = useState(searchParams.get("return") ?? "");
  const [cabin, setCabin] = useState(searchParams.get("cabin") ?? "Economy");
  const [travelers, setTravelers] = useState(searchParams.get("travelers") ?? "1");
  const [errors, setErrors] = useState({});
  const selectedTrip = searchParams.get("tripType");
  useEffect(() => {
    const fromCode = searchParams.get("from");
    const toCode = searchParams.get("to");
    if (!fromCode && !toCode) return undefined;

    let cancelled = false;
    Promise.all([getAirportByIata(fromCode), getAirportByIata(toCode)])
      .then(([departureAirport, arrivalAirport]) => {
        if (!cancelled) {
          setFrom(departureAirport);
          setTo(arrivalAirport);
        }
      })
      .catch((error) => {
        console.error("Could not restore airport selections.", error);
        if (!cancelled) {
          setErrors((current) => ({
            ...current,
            from: "Airport data could not be loaded. Please refresh and try again.",
          }));
        }
      });
    return () => { cancelled = true; };
  }, [searchParams]);
  useEffect(() => { if (selectedTrip) setTripType(({ "round-trip": "Round Trip", "one-way": "One Way", "multi-city": "Multi-City" })[selectedTrip] ?? "Round Trip"); }, [selectedTrip]);
  const today = new Date().toISOString().slice(0, 10);
  const submit = (event) => {
    event.preventDefault();
    const next = {};
    if (!from) next.from = fromText ? "Choose an airport from the suggestions." : "Select a departure airport.";
    if (!to) next.to = toText ? "Choose an airport from the suggestions." : "Select an arrival airport.";
    if (from && to && from.iata === to.iata) next.to = "Choose a different destination airport.";
    if (!departureDate) next.departure = "Select a departure date.";
    if (tripType === "Round Trip" && !returnDate) next.return = "Select a return date.";
    if (tripType === "Round Trip" && departureDate && returnDate && returnDate < departureDate) next.return = "Return date must be on or after departure.";
    setErrors(next);
    if (Object.keys(next).length) return;
    const params = new URLSearchParams({ from: from.iata, to: to.iata, departure: departureDate, tripType: tripType === "Round Trip" ? "round-trip" : tripType === "One Way" ? "one-way" : "multi-city", cabin: cabin.toLowerCase().replaceAll(" ", "-"), travelers });
    if (tripType === "Round Trip") params.set("return", returnDate);
    navigate(`/flight-results?${params.toString()}`);
  };
  return <div className="w-full max-w-[540px] rounded-2xl bg-white shadow-2xl overflow-visible">
    <div className="flex items-center border-b border-gray-200 px-5">{[{ name: "Flights", icon: "✈" }, { name: "Hotels", icon: "▦" }, { name: "Cars", icon: "▰" }].map((tab) => <button key={tab.name} type="button" onClick={() => setActiveTab(tab.name)} className={`relative flex-1 py-4 text-[13px] font-bold transition ${activeTab === tab.name ? "text-[#123b7a]" : "text-gray-500 hover:text-[#123b7a]"}`}><span className="mr-2">{tab.icon}</span>{tab.name}{activeTab === tab.name && <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-[#1687d9]" />}</button>)}</div>
    <form onSubmit={submit} noValidate className="px-5 py-4">
      <div className="flex items-center justify-between mb-4"><div className="flex items-center gap-5">{["Round Trip", "One Way", "Multi-City"].map((type) => <label key={type} className="flex items-center gap-1.5 text-[11px] text-gray-700 cursor-pointer"><input type="radio" name="tripType" value={type} checked={tripType === type} onChange={(e) => setTripType(e.target.value)} className="accent-[#1687d9]" />{type}</label>)}</div>
        <div className="hidden sm:flex gap-2"><select aria-label="Cabin" value={cabin} onChange={(e) => setCabin(e.target.value)} className="h-8 rounded-md border border-gray-200 px-2 text-[10px] text-gray-600 outline-none"><option>Economy</option><option>Premium Economy</option><option>Business</option><option>First Class</option></select><select aria-label="Travelers" value={travelers} onChange={(e) => setTravelers(e.target.value)} className="h-8 rounded-md border border-gray-200 px-2 text-[10px] text-gray-600 outline-none">{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((count) => <option key={count} value={count}>{count} {count === 1 ? "Traveler" : "Travelers"}</option>)}</select></div>
      </div>
      <div className="grid grid-cols-2 gap-x-2 gap-y-3">
        <AirportField label="From" airport={from} value={fromText} onChange={(v) => { setFromText(v); setFrom(null); }} onSelect={(v) => { setFrom(v); setFromText(v.name); }} error={errors.from} />
        <AirportField label="To" airport={to} value={toText} onChange={(v) => { setToText(v); setTo(null); }} onSelect={(v) => { setTo(v); setToText(v.name); }} error={errors.to} />
        <div className="min-h-[48px] rounded-lg border border-gray-200 px-3 flex items-center"><div className="min-w-0"><p className="text-[9px] text-gray-400">Departure</p><input type="date" min={today} value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} className="w-full text-[10px] font-semibold text-gray-700 outline-none bg-transparent" /></div>{errors.departure && <p className="absolute mt-[70px] text-[10px] text-red-600">{errors.departure}</p>}</div>
        <div className={`min-h-[48px] rounded-lg border border-gray-200 px-3 flex items-center ${tripType !== "Round Trip" ? "opacity-50" : ""}`}><div className="min-w-0 w-full"><p className="text-[9px] text-gray-400">Return</p><input type="date" min={departureDate || today} value={returnDate} disabled={tripType !== "Round Trip"} onChange={(e) => setReturnDate(e.target.value)} className="w-full text-[10px] font-semibold text-gray-700 outline-none bg-transparent disabled:text-gray-300" /></div>{errors.return && <p className="absolute mt-[70px] text-[10px] text-red-600">{errors.return}</p>}</div>
      </div>
      <button type="submit" className="mt-4 w-full h-[42px] rounded-lg bg-[#f59b00] hover:bg-[#e58c00] text-white text-sm font-bold shadow-md transition active:scale-[0.99]">✈ &nbsp; Search Flights</button>
      <div className="mt-3 flex items-center justify-center gap-2"><p className="text-[10px] text-gray-500">Need help finding the right fare? Call an Expert <a href="tel:18669871234" className="font-bold text-[#1687d9]">{formatPhoneNumber(appData.phoneNumber)}</a></p></div>
    </form>
  </div>;
}
