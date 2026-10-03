import airports from "../data/airports.json";

const indexedAirports = airports.map((airport) => ({
  airport,
  searchText: [airport.name, airport.iata, airport.icao, airport.city, airport.country]
    .filter(Boolean).join(" ").toLowerCase(),
}));

const airportsByIata = new Map(airports.filter((airport) => airport.iata).map((airport) => [airport.iata, airport]));

export function getAirportByIata(code) {
  return airportsByIata.get(code) ?? null;
}

export function searchAirports(query, limit = 8) {
  const term = query.trim().toLowerCase();
  if (!term) return [];
  return indexedAirports.filter(({ searchText }) => searchText.includes(term))
    .slice(0, limit).map(({ airport }) => airport);
}
