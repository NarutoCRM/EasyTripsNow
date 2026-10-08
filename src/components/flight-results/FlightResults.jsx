import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import { searchFlights } from "../../services/flightService";
import { getAirportByIata } from "../../utils/airportSearch";
import { appData } from "../../data";
import { formatPhoneNumber } from "../../utils/helper";
import DelayedFlightDetail from "./DelayedFlightDetail";

const buttonClasses =
  "inline-flex min-h-[42px] cursor-pointer items-center justify-center rounded-[7px] border px-[17px] py-2.5 text-[13px] font-semibold leading-[1.4] no-underline";
const secondaryButton = `${buttonClasses} border-[#cedbe6] bg-white text-[#243d50] hover:bg-[#edf5f5]`;

const phone = `+1 ${formatPhoneNumber(appData.phoneNumber)}`;
const phoneHref = `tel:+1${appData.phoneNumber}`;

const dateLabel = (value) =>
  value
    ? new Intl.DateTimeFormat("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
        timeZone: "UTC",
      }).format(new Date(`${value}T00:00:00Z`))
    : "Not provided";

export default function FlightResults() {
  const [params] = useSearchParams();

  const search = useMemo(
    () => ({
      tripType: params.get("tripType") ?? "round-trip",
      from: params.get("from") ?? "",
      to: params.get("to") ?? "",
      departureDate: params.get("departure") ?? "",
      returnDate: params.get("return") ?? "",
      cabin: params.get("cabin") ?? "economy",
      travelers: Number(params.get("travelers") ?? 1),
    }),
    [params],
  );

  const [loadedSearch, setLoadedSearch] = useState(null);
  const [airports, setAirports] = useState(null);
  const [airportError, setAirportError] = useState("");
  const isLoading = loadedSearch !== search;

  useEffect(() => {
    let cancelled = false;
    let timer;
    setAirports(null);
    setAirportError("");
    const delay = new Promise((resolve) => {
      timer = window.setTimeout(resolve, 2000);
    });
    const airportRequest = Promise.all([
      getAirportByIata(search.from),
      getAirportByIata(search.to),
    ]);
    const flightRequest = airportRequest.then(([from, to]) =>
      searchFlights({ ...search, from, to }),
    );
    Promise.allSettled([
      flightRequest,
      delay,
      airportRequest,
    ]).then(([, , airportResult]) => {
      if (cancelled) return;
      if (airportResult.status === "fulfilled") {
        setAirports({ search, from: airportResult.value[0], to: airportResult.value[1] });
      } else {
        console.error("Could not load airport details for flight results.", airportResult.reason);
        setAirportError("Airport details could not be loaded. Please refresh the page to try again.");
      }
      setLoadedSearch(search);
    });
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [search]);

  const tripName =
    search.tripType === "round-trip"
      ? "Round trip"
      : search.tripType === "one-way"
        ? "One way"
        : "Multi City";

  const cabin = search.cabin
    .replaceAll("-", " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());

  const airportLabel = (airport, code) =>
    airport
      ? `${airport.city || airport.name} (${airport.iata})`
      : code || "Not provided";
  const resolvedAirports = airports?.search === search ? airports : null;

  const modifyUrl = `/?${params.toString()}#flight-search`;

  return (
    <main className="mx-auto min-h-190 max-w-6xl pt-12 pb-12 min-[1200px]:w-3/5 min-[1200px]:min-w-262.5 max-[1199px]:mx-6 max-[800px]:mx-0 max-[800px]:min-h-[65vh] max-[800px]:px-5 max-[800px]:py-7.5">
      <span className="sr-only" role="status">
        {isLoading ? "Loading flight results" : "Flight results loaded"}
      </span>
      {isLoading ? (
        <div
          aria-hidden="true"
          className="mb-6 flex min-h-16 items-center justify-between gap-5 motion-safe:animate-pulse"
        >
          <div className="space-y-2">
            <div className="h-3 w-24 rounded bg-slate-200" />
            <div className="h-10 w-52 rounded bg-slate-200 max-[800px]:h-8" />
          </div>
          <div className="h-10 w-28 rounded-[7px] bg-slate-200" />
        </div>
      ) : (
        <div className="mb-6 flex items-center justify-between gap-5 [&_h1]:m-0 [&_h1]:font-[Georgia,Times_New_Roman,serif] [&_h1]:text-[38px] [&_h1]:leading-tight [&_h1]:font-normal max-[800px]:[&_h1]:text-[30px] max-[800px]:[&>a]:px-3 max-[800px]:[&>a]:py-2.25 max-[800px]:[&>a]:text-xs">
          <div>
            <p className="mb-1 text-xs font-bold tracking-[1.8px] text-[#009597] uppercase">
              Flight search
            </p>
            <h1>Flight results</h1>
          </div>
          <Link className={secondaryButton} to={modifyUrl}>
            Modify search
          </Link>
        </div>
      )}

      {airportError && <p role="alert" className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-700">{airportError}</p>}

      <dl
        aria-busy={isLoading}
        aria-label="Search summary"
        className="mb-6 grid grid-cols-4 gap-3 rounded-xl border border-[#dfe7ee] bg-white p-4 shadow-[0_1px_3px_#162c3d12] [&>div]:min-h-17.5 [&>div]:border-b [&>div]:border-[#e4ebf1] [&>div]:pb-3 [&_dt]:text-xs [&_dt]:font-semibold [&_dt]:tracking-[0.3px] [&_dt]:text-[#728ba5] [&_dt]:uppercase [&_dd]:mt-1 [&_dd]:text-sm [&_dd]:font-semibold [&_dd]:leading-normal max-[800px]:grid-cols-2 max-[800px]:[&_dd]:text-[13px]"
      >
        {isLoading ? (
          Array.from(
            { length: search.tripType === "round-trip" ? 5 : 4 },
            (_, index) => (
              <div
                key={index}
                aria-hidden="true"
                className="space-y-2 motion-safe:animate-pulse"
              >
                <div className="h-3 w-20 rounded bg-slate-200" />
                <div className="h-4 w-4/5 rounded bg-slate-200" />
              </div>
            ),
          )
        ) : (
          <>
            <div>
              <dt>Route</dt>
              <dd>
                {airportLabel(resolvedAirports?.from, search.from)} to {airportLabel(resolvedAirports?.to, search.to)}
              </dd>
            </div>
            <div>
              <dt>Trip type</dt>
              <dd>{tripName}</dd>
            </div>
            <div>
              <dt>Departure</dt>
              <dd>{dateLabel(search.departureDate)}</dd>
            </div>
            <div>
              <dt>Travelers · Cabin</dt>
              <dd>
                {search.travelers}{" "}
                {search.travelers === 1 ? "traveler" : "travelers"} · {cabin}
              </dd>
            </div>
            {search.tripType === "round-trip" && (
              <div>
                <dt>Return</dt>
                <dd>{dateLabel(search.returnDate)}</dd>
              </div>
            )}
          </>
        )}
      </dl>
      <div className="grid grid-cols-[minmax(0,3fr)_minmax(240px,1.03fr)] items-start gap-5 max-[800px]:grid-cols-1">
        <section className="min-w-0" aria-label="Flight options">
          <div className="mb-4 flex items-center justify-between gap-3 rounded-[7px] border border-[#e1e8ef] bg-white px-4 py-3 [&_h2]:text-sm [&_h2]:font-bold [&_a]:text-xs [&_a]:text-[#7389a1]">
            <h2>Flight options</h2>
            <Link to={modifyUrl}>Search options</Link>
          </div>

          <div className="grid gap-1" aria-live="polite">
            {Array.from({ length: 5 }).map((_, index) => (
              <DelayedFlightDetail key={`${params.toString()}-${index}`} />
            ))}
          </div>
        </section>
        <aside
          aria-busy={isLoading}
          aria-label="Need help now?"
          className="rounded-xl border border-[#dfe7ee] bg-white p-5 shadow-[0_1px_3px_#162c3d12] [&>p:first-child]:tracking-[0.3px] [&_h2]:my-2 [&_h2]:text-base [&_h2]:font-bold [&_h2]:leading-normal [&>p:not(:first-child)]:mb-4 [&>p:not(:first-child)]:text-sm [&>p:not(:first-child)]:text-[#748499] [&>a]:text-sm [&>a]:font-bold max-[800px]:mt-1"
        >
          {isLoading ? (
            <div
              aria-hidden="true"
              className="space-y-3 motion-safe:animate-pulse"
            >
              <div className="h-3 w-24 rounded bg-teal-100" />
              <div className="h-5 w-full rounded bg-slate-200" />
              <div className="space-y-2">
                <div className="h-4 w-full rounded bg-slate-100" />
                <div className="h-4 w-2/3 rounded bg-slate-100" />
              </div>
              <div className="h-4 w-36 rounded bg-slate-200" />
            </div>
          ) : (
            <>
              <p className="mb-1 text-xs font-bold tracking-[1.8px] text-[#009597] uppercase">
                Need help now?
              </p>
              <h2>Speak with a flight specialist</h2>
              <p>Have your route and travel dates ready when you call.</p>
              <a href={phoneHref}>{phone}</a>
            </>
          )}
        </aside>
      </div>
    </main>
  );
}
