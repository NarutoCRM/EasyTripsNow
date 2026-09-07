import { useEffect, useRef } from "react"

const PHONE_NUMBER = "18669871234"
const DISPLAY_PHONE = "(855) 750-2715"

const deals = [
  {
    from: "New York",
    to: "London",
    price: "$499",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=700&q=80",
  },
  {
    from: "New York",
    to: "Dubai",
    price: "$659",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=700&q=80",
  },
  {
    from: "Los Angeles",
    to: "Paris",
    price: "$579",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=700&q=80",
  },
  {
    from: "Miami",
    to: "Cancun",
    price: "$199",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80",
  },
  {
    from: "New York",
    to: "Toronto",
    price: "$249",
    image:
      "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=700&q=80",
  },
  {
    type: "contact",
  },
]

// 3 copies = seamless infinite loop
const loopSlides = [...deals, ...deals, ...deals]

const FlightDeals = () => {
  const sliderRef = useRef(null)
  const autoPlayRef = useRef(null)

  const CARD_WIDTH = 236
  const SET_SIZE = deals.length

  // Start from middle copy
  useEffect(() => {
    const slider = sliderRef.current

    if (!slider) return

    requestAnimationFrame(() => {
      slider.scrollLeft = SET_SIZE * CARD_WIDTH
    })

    startAutoPlay()

    return () => {
      clearInterval(autoPlayRef.current)
    }
  }, [])

  const startAutoPlay = () => {
    clearInterval(autoPlayRef.current)

    autoPlayRef.current = setInterval(() => {
      moveNext()
    }, 3000)
  }

  const pauseAutoPlay = () => {
    clearInterval(autoPlayRef.current)
  }

  const moveNext = () => {
    const slider = sliderRef.current

    if (!slider) return

    slider.scrollBy({
      left: CARD_WIDTH,
      behavior: "smooth",
    })

    setTimeout(() => {
      resetPosition()
    }, 650)
  }

  const movePrevious = () => {
    const slider = sliderRef.current

    if (!slider) return

    slider.scrollBy({
      left: -CARD_WIDTH,
      behavior: "smooth",
    })

    setTimeout(() => {
      resetPosition()
    }, 650)
  }

  const resetPosition = () => {
    const slider = sliderRef.current

    if (!slider) return

    const middleStart = SET_SIZE * CARD_WIDTH
    const middleEnd = SET_SIZE * 2 * CARD_WIDTH

    /*
     * If we reach the third copy,
     * silently move back to the middle copy.
     */
    if (slider.scrollLeft >= middleEnd) {
      slider.style.scrollBehavior = "auto"
      slider.scrollLeft -= SET_SIZE * CARD_WIDTH
      slider.style.scrollBehavior = "smooth"
    }

    /*
     * If we move before the middle copy,
     * silently move forward to the middle copy.
     */
    if (slider.scrollLeft < middleStart) {
      slider.style.scrollBehavior = "auto"
      slider.scrollLeft += SET_SIZE * CARD_WIDTH
      slider.style.scrollBehavior = "smooth"
    }
  }

  const handleMouseEnter = () => {
    pauseAutoPlay()
  }

  const handleMouseLeave = () => {
    startAutoPlay()
  }

  return (
    <section className="bg-[#f7faff] py-12">
      <div className="max-w-6xl mx-auto px-4">

        {/* ================= HEADER ================= */}
        <div className="flex items-center justify-between mb-6">

          <div>
            <div className="flex items-center gap-2">
              <span className="text-orange-500 text-lg">
                ⏰
              </span>

              <h2 className="text-xl sm:text-2xl font-extrabold text-[#123b7a]">
                Limited Time Flight Deals
              </h2>
            </div>

            <p className="mt-1 text-xs sm:text-sm text-gray-500">
              Unbeatable fares to top destinations. Book now!
            </p>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-2">

            <button
              type="button"
              onClick={() => {
                pauseAutoPlay()
                movePrevious()
                startAutoPlay()
              }}
              className="w-9 h-9 rounded-full bg-white
                         border border-gray-200
                         flex items-center justify-center
                         text-[#123b7a]
                         shadow-sm
                         hover:bg-[#123b7a]
                         hover:text-white
                         transition-all duration-300"
            >
              ←
            </button>

            <button
              type="button"
              onClick={() => {
                pauseAutoPlay()
                moveNext()
                startAutoPlay()
              }}
              className="w-9 h-9 rounded-full bg-white
                         border border-gray-200
                         flex items-center justify-center
                         text-[#123b7a]
                         shadow-sm
                         hover:bg-[#123b7a]
                         hover:text-white
                         transition-all duration-300"
            >
              →
            </button>

          </div>
        </div>

        {/* ================= INFINITE CAROUSEL ================= */}
        <div
          ref={sliderRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="flex gap-4
                     overflow-x-auto
                     scroll-smooth
                     snap-x
                     snap-mandatory
                     pb-4
                     [scrollbar-width:none]
                     [&::-webkit-scrollbar]:hidden"
        >

          {loopSlides.map((slide, index) => {

            /* ================= CONTACT CARD ================= */
            if (slide.type === "contact") {
              return (
                <div
                  key={`contact-${index}`}
                  className="min-w-[220px]
                             sm:min-w-[220px]
                             snap-start"
                >
                  <div
                    className="group
                               relative
                               min-h-[285px]
                               h-full
                               rounded-xl
                               overflow-hidden
                               bg-gradient-to-br
                               from-[#123b7a]
                               to-[#1687d9]
                               shadow-md
                               hover:-translate-y-2
                               hover:shadow-2xl
                               transition-all duration-300"
                  >

                    {/* Decorative */}
                    <div
                      className="absolute
                                 -top-10
                                 -right-10
                                 w-32
                                 h-32
                                 rounded-full
                                 bg-white/10"
                    />

                    <div
                      className="absolute
                                 -bottom-12
                                 -left-12
                                 w-36
                                 h-36
                                 rounded-full
                                 bg-white/5"
                    />

                    <div
                      className="relative
                                 z-10
                                 p-5
                                 min-h-[285px]
                                 flex
                                 flex-col"
                    >

                      {/* Icon */}
                      <div
                        className="w-10
                                   h-10
                                   rounded-full
                                   bg-white/15
                                   flex
                                   items-center
                                   justify-center
                                   text-white
                                   text-lg"
                      >

                      </div>

                      {/* Heading */}
                      <h3
                        className="mt-4
                                   text-base
                                   leading-5
                                   font-extrabold
                                   text-white"
                      >
                        Lock In Your Fare Before It’s Too Late!
                      </h3>

                      {/* Description */}
                      <p
                        className="mt-2
                                   text-[11px]
                                   leading-5
                                   text-white/80"
                      >
                        Don’t miss out on exclusive deals available over the
                        phone.
                      </p>

                      {/* Bottom */}
                      <div className="mt-auto pt-4">

                        <p className="text-[10px] text-white/70">
                          Book now at
                        </p>

                        <a
                          href={`tel:${PHONE_NUMBER}`}
                          className="block
                                     mt-1
                                     text-base
                                     font-extrabold
                                     text-white"
                        >
                          {DISPLAY_PHONE}
                        </a>

                        <a
                          href={`tel:${PHONE_NUMBER}`}
                          className="mt-3
                                     h-9
                                     rounded-lg
                                     bg-[#f59b00]
                                     hover:bg-[#e58c00]
                                     text-white
                                     text-xs
                                     font-bold
                                     flex
                                     items-center
                                     justify-center
                                     gap-2
                                     shadow-lg
                                     transition-all
                                     duration-300"
                        >
                          Book Now
                        </a>

                      </div>
                    </div>
                  </div>
                </div>
              )
            }

            /* ================= DEAL CARD ================= */
            return (
              <div
                key={`${slide.from}-${slide.to}-${index}`}
                className="min-w-[220px]
                           sm:min-w-[220px]
                           snap-start"
              >
                <div
                  className="group
                             bg-white
                             rounded-xl
                             overflow-hidden
                             border border-gray-200
                             shadow-sm
                             hover:-translate-y-2
                             hover:shadow-xl
                             hover:border-blue-200
                             transition-all
                             duration-300"
                >

                  {/* Image */}
                  <div className="relative h-[110px] overflow-hidden">

                    <img
                      src={slide.image}
                      alt={`${slide.from} to ${slide.to}`}
                      className="w-full
                                 h-full
                                 object-cover
                                 group-hover:scale-110
                                 transition-transform
                                 duration-500"
                    />

                    <div
                      className="absolute
                                 inset-0
                                 bg-black/5
                                 group-hover:bg-transparent
                                 transition"
                    />

                  </div>

                  {/* Content */}
                  <div className="p-4">

                    <p className="text-[10px] text-gray-400">
                      {slide.from}
                    </p>

                    <h3 className="text-sm font-bold text-[#123b7a]">
                      To {slide.to}
                    </h3>

                    <div className="mt-3 flex items-end justify-between">

                      <div>
                        <p className="text-[9px] text-gray-400">
                          From
                        </p>

                        <p className="text-xl font-extrabold text-[#123b7a]">
                          {slide.price}
                        </p>
                      </div>

                      <p className="text-[9px] text-gray-400">
                        Round Trip
                      </p>

                    </div>

                    {/* Book Now */}
                    <a
                      href={`tel:${PHONE_NUMBER}`}
                      className="mt-4
                                 w-full
                                 h-9
                                 rounded-lg
                                 bg-[#1687d9]
                                 hover:bg-[#123b7a]
                                 text-white
                                 text-xs
                                 font-bold
                                 flex
                                 items-center
                                 justify-center
                                 gap-2
                                 transition-all
                                 duration-300
                                 active:scale-[0.98]"
                    >
                      Book Now
                    </a>

                  </div>
                </div>
              </div>
            )
          })}

        </div>

        {/* Mobile */}
        <p className="sm:hidden text-center text-[10px] text-gray-400 mt-1">
          Swipe to explore more deals →
        </p>

      </div>
    </section>
  )
}

export default FlightDeals