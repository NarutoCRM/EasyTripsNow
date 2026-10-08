export default function FlightDetailSkeleton({ compact = false }) {
  return (
    <div
      className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
      aria-hidden="true"
    >
      <div className="absolute inset-0 -translate-x-full animate-shimmer bg-linear-to-r from-transparent via-white/70 to-transparent" />

      <div className="relative grid gap-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
        <div className="min-w-0 space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <div className="h-5 w-28 rounded bg-slate-200" />
            <div className="h-5 w-16 rounded bg-teal-100" />
          </div>

          <div className="grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
            <div className="space-y-2">
              <div className="h-4 w-16 rounded bg-slate-200" />
              <div className="h-7 w-28 rounded bg-slate-100" />
            </div>

            <div className="hidden h-10 w-10 place-items-center rounded-full bg-slate-100 sm:grid">
              <div className="h-4 w-4 rounded-full bg-slate-200" />
            </div>

            <div className="space-y-2 sm:text-right">
              <div className="h-4 w-16 rounded bg-slate-200 sm:ml-auto" />
              <div className="h-7 w-28 rounded bg-slate-100 sm:ml-auto" />
            </div>
          </div>

          {!compact && (
            <div className="grid gap-3 border-t border-slate-100 pt-4 sm:grid-cols-3">
              <div className="h-3 w-full max-w-32 rounded bg-slate-100" />
              <div className="h-3 w-full max-w-28 rounded bg-slate-100" />
              <div className="h-3 w-full max-w-28 rounded bg-slate-100" />
            </div>
          )}
        </div>

        <div className="flex items-center gap-3 sm:flex-col sm:items-stretch sm:justify-center">
          <div className="h-12 w-24 rounded-lg bg-teal-100 sm:w-32" />
          <div className="h-3 w-20 rounded bg-slate-100 sm:mx-auto" />
        </div>
      </div>
    </div>
  );
}
