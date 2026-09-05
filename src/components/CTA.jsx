const CTA = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-[#123b7a] px-6 py-14 sm:px-12 sm:py-16 text-center">

          {/* Decorative Circles */}
          <div className="absolute -top-20 -left-20 w-52 h-52 rounded-full bg-white/5" />
          <div className="absolute -bottom-24 -right-16 w-64 h-64 rounded-full bg-white/5" />

          <div className="relative z-10 max-w-2xl mx-auto">

            <span className="text-4xl">
              ✈️
            </span>

            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              Ready to Take Off?
            </h2>

            <p className="mt-4 text-sm sm:text-base leading-7 text-white/70">
              Your next adventure is waiting. Find great travel deals and
              start planning your journey today.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">

              <a
                href="#flights"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#1687d9] hover:bg-[#2b9be8] text-white font-bold text-sm transition-all"
              >
                Search Flights →
              </a>

              <a
                href="tel:18669871234"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white hover:bg-gray-100 text-[#123b7a] font-bold text-sm transition-all"
              >
                ☎ Call an Expert
              </a>

            </div>

            <p className="mt-5 text-xs text-white/50">
              Mon - Sun | 8AM - 11PM EST
            </p>

          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA