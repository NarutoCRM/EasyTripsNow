const CTA = () => {
  return (
    <section className="py-14 bg-gradient-to-r from-[#123b7a] to-[#1687d9]">
      <div className="max-w-6xl mx-auto px-4 text-center text-white">
        <h2 className="text-3xl sm:text-4xl font-extrabold">
          Ready to Take Off?
        </h2>

        <p className="mt-3 text-white/85">
          Your next adventure could be closer than you think. Explore flight
          options today or speak with one of our travel experts for assistance.
        </p>

        <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button className="rounded-lg bg-orange-500 hover:bg-orange-600 px-7 py-3 font-bold transition">
            ✈ Search Flights
          </button>

          <a
            href="tel:18669871234"
            className="rounded-lg border border-white/60 px-7 py-3 font-bold hover:bg-white/10 transition"
          >
            ☎ Call an Expert: (855) 750-2715
          </a>
        </div>
      </div>
    </section>
  )
}

export default CTA