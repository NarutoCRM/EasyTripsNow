const PHONE = "8557502715"

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <a href="/" className="inline-flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 font-extrabold text-white">
                ET
              </div>

              <div>
                <div className="text-lg font-extrabold text-white">
                  EasyTripsNow
                </div>
                <div className="text-[10px] uppercase tracking-wider text-slate-500">
                  Travel Made Easier
                </div>
              </div>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
              Explore available travel options, compare itineraries, and find
              a trip that fits your plans with EasyTripsNow.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <div className="mt-4 space-y-2.5 text-sm">
              <a className="block hover:text-white" href="/">
                Home
              </a>
              <a className="block hover:text-white" href="/#flight-search">
                Flights
              </a>
              <a className="block hover:text-white" href="/#deals">
                Deals
              </a>
              <a className="block hover:text-white" href="/about-us">
                About Us
              </a>
              <a className="block hover:text-white" href="/contact-us">
                Contact Us
              </a>
            </div>
          </div>

          {/* Popular Destinations */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Popular Flights
            </h3>

            <div className="mt-4 space-y-2.5 text-sm">
              <a
                className="block hover:text-white"
                href="/cheap-flights-to-new-york-city"
              >
                Cheap Flights To New York
              </a>

              <a
                className="block hover:text-white"
                href="/cheap-flights-to-los-angeles"
              >
                Cheap Flights To Los Angeles
              </a>

              <a
                className="block hover:text-white"
                href="/cheap-flights-to-paris"
              >
                Cheap Flights To Paris
              </a>

              <a
                className="block hover:text-white"
                href="/cheap-flights-to-san-francisco"
              >
                Cheap Flights To San Francisco
              </a>

              <a
                className="block hover:text-white"
                href="/cheap-flights-to-boston"
              >
                Cheap Flights To Boston
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Contact Us
            </h3>

            <div className="mt-4 space-y-3 text-sm">
              <a
                href={`tel:${PHONE}`}
                className="block font-semibold text-white hover:text-blue-400"
              >
                ☎(855) 750-2715
              </a>

              <a
                href="mailto:contact@easytripsnow.com"
                className="block break-all hover:text-white"
              >
                contact@easytripsnow.com
              </a>

              <p className="leading-6 text-slate-400">
                FIVE GREENTREE CENTRE,
                <br />
                525 ROUTE 73 NORTH STE 104
                <br />
                MARLTON, NEW JERSEY 08053-0805
                <br />
                United States
              </p>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="mt-8 border-t border-white/10 pt-6">
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-500">
            <a href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </a>

            <a href="/terms-conditions" className="hover:text-white">
              Terms & Conditions
            </a>

            <a href="/cancellation-refund" className="hover:text-white">
              Cancellation & Refund
            </a>

            <a href="/cookie-policy" className="hover:text-white">
              Cookie Policy
            </a>

            <a href="/disclaimer" className="hover:text-white">
              Disclaimer
            </a>
          </div>

          <div className="mt-5 flex flex-col justify-between gap-3 text-xs text-slate-500 sm:flex-row">
            <p>
              © {new Date().getFullYear()} EasyTripsNow. All rights reserved.
            </p>

            <p>Operated by TravelFirst LLC</p>
          </div>
        </div>
      </div>
    </footer>
  )
}