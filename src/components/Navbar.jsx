import { useState } from "react"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="w-full bg-white border-b border-gray-200 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="min-h-[76px] flex items-center justify-between gap-4">

          {/* Logo */}
          <a href="/" className="shrink-0">
            <h1 className="text-[24px] sm:text-[27px] font-extrabold tracking-tight text-[#123b7a]">
              EasyTrips<span className="text-[#1687d9]">Now</span>
            </h1>

            <p className="text-[8px] tracking-[3px] text-gray-500 text-center">
              TRAVEL MADE EASY
            </p>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7">

            <a
              href="#flights"
              className="text-sm font-medium text-gray-700 hover:text-[#1687d9]"
            >
              Flights
            </a>

            <a
              href="#hotels"
              className="text-sm font-medium text-gray-700 hover:text-[#1687d9]"
            >
              Hotels
            </a>

            <a
              href="#cars"
              className="text-sm font-medium text-gray-700 hover:text-[#1687d9]"
            >
              Cars
            </a>

            <a
              href="#deals"
              className="text-sm font-medium text-gray-700 hover:text-[#1687d9]"
            >
              Deals
            </a>

            <a
              href="#about"
              className="text-sm font-medium text-gray-700 hover:text-[#1687d9]"
            >
              About Us
            </a>

            <a
              href="#contact"
              className="text-sm font-medium text-gray-700 hover:text-[#1687d9]"
            >
              Contact Us
            </a>

          </nav>

          {/* Call Expert - Always visible on desktop */}
          <div className="hidden md:flex items-center gap-2 shrink-0">

            <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-[#1687d9]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="M22 16.92v3a2 2 0 0 1-2.18 2
                  19.79 19.79 0 0 1-8.63-3.07
                  19.5 19.5 0 0 1-6-6
                  19.79 19.79 0 0 1-3.07-8.67
                  A2 2 0 0 1 4.11 2h3
                  a2 2 0 0 1 2 1.72
                  12.84 12.84 0 0 1 .7 2.81
                  2 2 0 0 1-.45 2.11L8.09 9.91
                  a16 16 0 0 0 6 6l1.27-1.27
                  a2 2 0 0 1 2.11-.45
                  12.84 12.84 0 0 0 2.81.7
                  A2 2 0 0 1 22 16.92z"
                />
              </svg>
            </div>

            <div>
              <p className="text-[10px] text-gray-500">
                Call an Expert
              </p>

              <a
                href="tel:18669871234"
                className="text-[13px] font-bold text-[#123b7a] whitespace-nowrap"
              >
                1-866-987-1234
              </a>

              <p className="text-[8px] text-gray-400 whitespace-nowrap">
                Mon - Sun | 8AM - 11PM EST
              </p>
            </div>

          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 text-[#123b7a]"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg">

          <nav className="px-5 py-4 flex flex-col">

            <a
              href="#flights"
              onClick={() => setMenuOpen(false)}
              className="py-3 text-gray-700 font-medium border-b border-gray-100"
            >
              Flights
            </a>

            <a
              href="#hotels"
              onClick={() => setMenuOpen(false)}
              className="py-3 text-gray-700 font-medium border-b border-gray-100"
            >
              Hotels
            </a>

            <a
              href="#cars"
              onClick={() => setMenuOpen(false)}
              className="py-3 text-gray-700 font-medium border-b border-gray-100"
            >
              Cars
            </a>

            <a
              href="#deals"
              onClick={() => setMenuOpen(false)}
              className="py-3 text-gray-700 font-medium border-b border-gray-100"
            >
              Deals
            </a>

            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="py-3 text-gray-700 font-medium border-b border-gray-100"
            >
              About Us
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="py-3 text-gray-700 font-medium"
            >
              Contact Us
            </a>

            {/* Mobile Call Expert */}
            <div className="mt-3 pt-4 border-t border-gray-200">

              <p className="text-xs text-gray-500">
                Call an Expert
              </p>

              <a
                href="tel:18669871234"
                className="text-base font-bold text-[#123b7a]"
              >
                1-866-987-1234
              </a>

              <p className="text-xs text-gray-400 mt-1">
                Mon - Sun | 8AM - 11PM EST
              </p>

            </div>

          </nav>
        </div>
      )}

    </header>
  )
}

export default Navbar