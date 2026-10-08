import airportsUrl from "../data/airports.json?url";

let airportIndexPromise;

function loadAirportIndex() {
  if (!airportIndexPromise) {
    airportIndexPromise = fetch(airportsUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Airport data request failed (${response.status})`);
        }
        return response.json();
      })
      .then((airports) => ({
        indexedAirports: airports.map((airport) => ({
          airport,
          searchText: [airport.name, airport.iata, airport.icao, airport.city, airport.country]
            .filter(Boolean)
            .join(" ")
            .toLowerCase(),
        })),
        airportsByIata: new Map(
          airports.filter((airport) => airport.iata).map((airport) => [airport.iata, airport]),
        ),
      }))
      .catch((error) => {
        airportIndexPromise = null;
        throw error;
      });
  }

  return airportIndexPromise;
}

export async function getAirportByIata(code) {
  if (!code) return null;
  const { airportsByIata } = await loadAirportIndex();
  return airportsByIata.get(code) ?? null;
}

export async function searchAirports(query, limit = 8) {
  const term = query.trim().toLowerCase();
  if (!term) return [];
  const { indexedAirports } = await loadAirportIndex();
  return indexedAirports.filter(({ searchText }) => searchText.includes(term))
    .slice(0, limit).map(({ airport }) => airport);
}
