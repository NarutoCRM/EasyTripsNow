const FloatingCall = () => {
  return (
    <a
      href="tel:18669871234"
      className="
        fixed
        bottom-5
        right-5
        z-[9999]
        flex
        items-center
        gap-3
        bg-[#1687d9]
        hover:bg-[#0d75bd]
        text-white
        px-5
        py-3.5
        rounded-full
        shadow-2xl
        transition-all
        duration-300
        hover:scale-105
        active:scale-95
      "
      aria-label="Call EasyTripsNow"
    >
      {/* Phone Icon */}
      <span className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
        <svg
          className="w-5 h-5"
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
            12.84 12.84 0 0 1 2.81.7
            A2 2 0 0 1 22 16.92z"
          />
        </svg>
      </span>

      {/* Text */}
      <span className="flex flex-col leading-tight">
        <span className="text-[11px] text-white/80">
          Talk to an Expert
        </span>

        <span className="text-sm font-extrabold">
          1-866-987-1234
        </span>
      </span>
    </a>
  )
}

export default FloatingCall