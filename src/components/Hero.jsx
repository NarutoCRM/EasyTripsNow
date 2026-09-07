import FlightSearch from "./FlightSearch"

const Hero = () => {
  return (
    <section
      className="relative min-h-[calc(100vh-65px)] flex items-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-plane.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#062b5c]/25" />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-5 lg:px-8 py-6 lg:py-8">
        <div className="grid lg:grid-cols-[0.9fr_1.25fr] gap-6 lg:gap-8 items-center">

          {/* LEFT CONTENT */}
          <div className="text-white">
            <h1 className="text-[42px] xl:text-[48px] font-extrabold leading-[1.08] tracking-tight">
              Travel More.
              <br />
              Worry Less.
            </h1>

            <p className="mt-5 max-w-[410px] text-[15px] leading-6 text-white/95">
              Find the best flight deals to anywhere in the world
              and get expert support every step of the way.
            </p>

            {/* Trust Points */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-lg">♢</span>
                <div>
                  <p className="text-[11px] font-bold">Best Fares</p>
                  <p className="text-[10px] text-white/80">Guaranteed</p>
                </div>
              </div>

              <div className="h-8 w-px bg-white/40" />

              <div className="flex items-center gap-2">
                <span className="text-lg">♧</span>
                <div>
                  <p className="text-[11px] font-bold">24/7 Expert</p>
                  <p className="text-[10px] text-white/80">Assistance</p>
                </div>
              </div>

              <div className="h-8 w-px bg-white/40" />

              <div className="flex items-center gap-2">
                <span className="text-lg">♧</span>
                <div>
                  <p className="text-[11px] font-bold">Safe & Secure</p>
                  <p className="text-[10px] text-white/80">Bookings</p>
                </div>
              </div>
            </div>
          </div>

          {/* FLIGHT SEARCH */}
          <div className="w-full flex justify-end">
            <FlightSearch />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero