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
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default function FlightResults() {
  const [params] = useSearchParams();
  const [status, setStatus] = useState("loading");

  const search = useMemo(
    () => ({
      tripType: params.get("tripType") ?? "round-trip",
      from: getAirportByIata(params.get("from")),
      to: getAirportByIata(params.get("to")),
      departureDate: params.get("departure") ?? "",
      returnDate: params.get("return") ?? "",
      cabin: params.get("cabin") ?? "economy",
      travelers: Number(params.get("travelers") ?? 1),
    }),
    [params],
  );

  useEffect(() => {
    async function fetchFlights() {
      let cancelled = false;
      setStatus("loading");
      await sleep(5000);
      searchFlights(search)
        .then((result) => {
          if (!cancelled) {
            setStatus(
              result.status === "demo"
                ? "demo"
                : result.flights.length
                  ? "results"
                  : "empty",
            );
          }
        })
        .catch(() => !cancelled ?? setStatus("error"));
      return () => (cancelled = true);
    }
    fetchFlights();
  }, [search]);

  const tripName =
    search.tripType === "round-trip"
      ? "Round trip"
      : search.tripType === "one-way"
        ? "One way"
        : "Multi-city";

  const cabin = search.cabin
    .replaceAll("-", " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());

  const airportLabel = (airport) =>
    airport
      ? `${airport.city || airport.name} (${airport.iata})`
      : "Not provided";

  const modifyUrl = `/?${params.toString()}#flight-search`;

  return (
    <main className="mx-auto min-h-190 max-w-6xl pt-12 pb-12 min-[1200px]:w-3/5 min-[1200px]:min-w-262.5 max-[1199px]:mx-6 max-[800px]:mx-0 max-[800px]:min-h-[65vh] max-[800px]:px-5 max-[800px]:py-7.5">
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

      <dl className="mb-6 grid grid-cols-4 gap-3 rounded-xl border border-[#dfe7ee] bg-white p-4 shadow-[0_1px_3px_#162c3d12] [&>div]:min-h-17.5 [&>div]:border-b [&>div]:border-[#e4ebf1] [&>div]:pb-3 [&_dt]:text-xs [&_dt]:font-semibold [&_dt]:tracking-[0.3px] [&_dt]:text-[#728ba5] [&_dt]:uppercase [&_dd]:mt-1 [&_dd]:text-sm [&_dd]:font-semibold [&_dd]:leading-normal max-[800px]:grid-cols-2 max-[800px]:[&_dd]:text-[13px]">
        <div>
          <dt>Route</dt>
          <dd>
            {airportLabel(search.from)} to {airportLabel(search.to)}
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
      </dl>
      <div className="grid grid-cols-[minmax(0,3fr)_minmax(240px,1.03fr)] items-start gap-5 max-[800px]:grid-cols-1">
        <section className="min-w-0" aria-label="Flight options">
          <div className="mb-4 flex items-center justify-between gap-3 rounded-[7px] border border-[#e1e8ef] bg-white px-4 py-3 [&_h2]:text-sm [&_h2]:font-bold [&_a]:text-xs [&_a]:text-[#7389a1]">
            <h2>Flight options</h2>
            <Link to={modifyUrl}>Search options</Link>
          </div>

          <div
            className="grid gap-4"
            aria-live="polite"
            aria-busy={status === "loading"}
          >
            <DelayedFlightDetail />
          </div>
        </section>
        <aside className="rounded-xl border border-[#dfe7ee] bg-white p-5 shadow-[0_1px_3px_#162c3d12] [&>p:first-child]:tracking-[0.3px] [&_h2]:my-2 [&_h2]:text-base [&_h2]:font-bold [&_h2]:leading-normal [&>p:not(:first-child)]:mb-4 [&>p:not(:first-child)]:text-sm [&>p:not(:first-child)]:text-[#748499] [&>a]:text-sm [&>a]:font-bold max-[800px]:mt-1">
          <p className="mb-1 text-xs font-bold tracking-[1.8px] text-[#009597] uppercase">
            Need help now?
          </p>
          <h2>Speak with a flight specialist</h2>
          <p>Have your route and travel dates ready when you call.</p>
          <a href={phoneHref}>{phone}</a>
        </aside>
      </div>
    </main>
  );
}
