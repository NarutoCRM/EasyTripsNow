import { useState } from "react"

const PHONE = "8557502715"

const navLinks = [
  { label: "Flights", href: "/#flight-search" },
  { label: "Hotels", href: "/#hotels" },
  { label: "Cars", href: "/#cars" },
  { label: "Deals", href: "/#deals" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-extrabold text-white shadow-md">
            ET
          </div>

          <div className="leading-tight">
            <div className="text-lg font-extrabold text-slate-900">
              EasyTripsNow
            </div>
            <div className="text-[10px] font-medium uppercase tracking-wider text-slate-500">
              Travel Made Easier
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-slate-600 transition hover:text-blue-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Call */}
        <a
          href={`tel:${PHONE}`}
          className="hidden rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-md transition hover:bg-blue-700 lg:inline-flex"
        >
          Call an Expert
        </a>

        {/* Mobile Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 lg:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <span className="text-2xl leading-none">×</span>
          ) : (
            <span className="text-xl">☰</span>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <nav className="mx-auto max-w-7xl px-5 py-4 sm:px-6">
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-slate-100 py-3.5 text-sm font-semibold text-slate-700 hover:text-blue-600"
                >
                  {link.label}
                </a>
              ))}

              <a
                href={`tel:${PHONE}`}
                onClick={() => setMenuOpen(false)}
                className="mt-4 flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white"
              >
                ☎(855) 750-2715
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
