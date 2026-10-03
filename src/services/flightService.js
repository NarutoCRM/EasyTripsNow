import { mockFlights } from "../data/mockFlights";

const API_URL = import.meta.env.VITE_FLIGHT_API_URL;
const API_KEY = import.meta.env.VITE_FLIGHT_API_KEY;

export function normalizeFlightResults(response) {
  const results = Array.isArray(response) ? response : response?.flights;
  if (!Array.isArray(results)) return [];
  return results.map((flight) => ({
    id: String(flight.id ?? flight.flightNumber ?? crypto.randomUUID()),
    airline: flight.airline?.name ?? flight.airlineName ?? (typeof flight.airline === "string" ? flight.airline : ""),
    airlineLogo: flight.airline?.logo ?? flight.airlineLogo ?? "",
    flightNumber: flight.flightNumber ?? "",
    departure: flight.departure ?? { code: flight.from ?? "", time: flight.departureTime ?? "" },
    arrival: flight.arrival ?? { code: flight.to ?? "", time: flight.arrivalTime ?? "" },
    duration: flight.duration ?? "",
    stops: flight.stops ?? 0,
    cabin: flight.cabin ?? "",
    baggage: flight.baggage ?? "",
    price: flight.price ?? null,
    currency: flight.currency ?? "",
    bookingUrl: flight.bookingUrl ?? "",
    airlineCode: flight.airlineCode ?? "",
  }));
}

// DEMO MODE
// Replace searchMockFlights() with the real provider implementation
// when the flight API is configured.
export async function searchMockFlights(searchParams) {
  const from = searchParams.from?.iata ?? searchParams.from ?? "";
  const to = searchParams.to?.iata ?? searchParams.to ?? "";
  const cabin = String(searchParams.cabin ?? "economy").replaceAll("-", " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
  const flights = mockFlights.map((flight) => ({ ...flight, from, to, cabin, currency: "USD" }));
  return { status: "demo", flights: normalizeFlightResults(flights) };
}

async function searchRealFlights(searchParams) {
  const response = await fetch(`${API_URL.replace(/\/$/, "")}/flights/search`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(API_KEY ? { Authorization: `Bearer ${API_KEY}` } : {}),
    },
    body: JSON.stringify(searchParams),
  });
  if (!response.ok) throw new Error(`Flight search failed (${response.status})`);
  return { status: "ready", flights: normalizeFlightResults(await response.json()) };
}

export async function searchFlights(searchParams) {
  if (API_URL) return searchRealFlights(searchParams);
  return searchMockFlights(searchParams);
}

