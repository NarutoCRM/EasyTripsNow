import { appData } from "../../data";
import { formatPhoneNumber } from "../../utils/helper";

const phone = `+1 ${formatPhoneNumber(appData.phoneNumber)}`;
const phoneHref = `tel:+1${appData.phoneNumber}`;

export default function FlightDetail() {
  const retry = () => window.location.reload();
  return (
    <div
      className="mt-4 rounded-xl border border-amber-300 bg-amber-50 p-5 sm:p-7"
      role="alert"
    >
      <div className="flex items-start gap-3">
        <span
          className="grid size-9 shrink-0 place-items-center rounded-full bg-amber-100 text-lg font-bold text-amber-800"
          aria-hidden="true"
        >
          !
        </span>
        <div>
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
            Something went wrong
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-700">
            We couldn&apos;t load flight schedules or fares for this search.
            Call our travel team and they can help review your route and
            options.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              className="mt-4 inline-flex min-h-11 items-center justify-center rounded-lg bg-teal-700 px-5 text-sm font-bold text-white hover:bg-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700/40 focus-visible:ring-offset-2 focus-visible:ring-offset-amber-50"
              href={phoneHref}
            >
              Call {phone}
            </a>

            <button
              type="button"
              onClick={retry}
              className="mt-3 min-h-10 rounded-lg border border-slate-300 bg-white px-4 text-sm font-semibold text-slate-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700/30"
            >
              Try again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
