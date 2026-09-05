const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-[#0b2854] text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer */}
        <div className="py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">

          {/* Company */}
          <div>

            <a href="/" className="inline-block">
              <h2 className="text-2xl font-extrabold">
                EasyTrips
                <span className="text-[#38aaf0]">Now</span>
              </h2>

              <p className="text-[8px] tracking-[3px] text-white/50 text-center mt-1">
                TRAVEL MADE EASY
              </p>
            </a>

            <p className="mt-5 text-sm leading-7 text-white/60 max-w-xs">
              Making travel easier with great deals, simple booking, and
              reliable expert support.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3 mt-6">

              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#1687d9] flex items-center justify-center transition"
              >
                f
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#1687d9] flex items-center justify-center transition"
              >
                ◎
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#1687d9] flex items-center justify-center transition"
              >
                𝕏
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#1687d9] flex items-center justify-center transition"
              >
                in
              </a>

            </div>

          </div>

          {/* Destinations */}
          <div>

            <h3 className="text-sm font-bold">
              Top Destinations
            </h3>

            <ul className="mt-5 space-y-3">

              <li>
                <a href="#" className="text-sm text-white/60 hover:text-white transition">
                  New York
                </a>
              </li>

              <li>
                <a href="#" className="text-sm text-white/60 hover:text-white transition">
                  Los Angeles
                </a>
              </li>

              <li>
                <a href="#" className="text-sm text-white/60 hover:text-white transition">
                  Miami
                </a>
              </li>

              <li>
                <a href="#" className="text-sm text-white/60 hover:text-white transition">
                  Las Vegas
                </a>
              </li>

              <li>
                <a href="#" className="text-sm text-white/60 hover:text-white transition">
                  Orlando
                </a>
              </li>

            </ul>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-sm font-bold">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">

              <li>
                <a href="#flights" className="text-sm text-white/60 hover:text-white transition">
                  Flights
                </a>
              </li>

              <li>
                <a href="#deals" className="text-sm text-white/60 hover:text-white transition">
                  Flight Deals
                </a>
              </li>

              <li>
                <a href="#about" className="text-sm text-white/60 hover:text-white transition">
                  About Us
                </a>
              </li>

              <li>
                <a href="#" className="text-sm text-white/60 hover:text-white transition">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="text-sm text-white/60 hover:text-white transition">
                  Terms & Conditions
                </a>
              </li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-sm font-bold">
              Contact Us
            </h3>

            <div className="mt-5 space-y-5">

              <div className="flex gap-3">

                <span className="shrink-0 w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                  ☎
                </span>

                <div>
                  <p className="text-xs text-white/40">
                    Call an Expert
                  </p>

                  <a
                    href="tel:18669871234"
                    className="text-sm font-bold hover:text-[#38aaf0]"
                  >
                    1-866-987-1234
                  </a>
                </div>

              </div>

              <div className="flex gap-3">

                <span className="shrink-0 w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                  ✉
                </span>

                <div>
                  <p className="text-xs text-white/40">
                    Email
                  </p>

                  <a
                    href="mailto:info@easytripsnow.com"
                    className="text-sm hover:text-[#38aaf0]"
                  >
                    info@easytripsnow.com
                  </a>
                </div>

              </div>

              <div className="flex gap-3">

                <span className="shrink-0 w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                  ⏰
                </span>

                <div>
                  <p className="text-xs text-white/40">
                    Working Hours
                  </p>

                  <p className="text-sm">
                    Mon - Sun | 8AM - 11PM EST
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">

          <p className="text-xs text-white/40 text-center sm:text-left">
            © {new Date().getFullYear()} EasyTripsNow. All rights reserved.
          </p>

          <p className="text-xs text-white/40">
            Travel Made Easy ✈
          </p>

        </div>

      </div>
    </footer>
  )
}

export default Footer