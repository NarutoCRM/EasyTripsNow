import { useEffect, useRef, useState } from "react"

const PHONE_NUMBER = "8557502715"
const DISPLAY_PHONE = "(855) 750-2715"

const SHOW_AFTER = 20000
const AUTO_CLOSE_AFTER = 50000

const CallPopup = () => {
    const [isOpen, setIsOpen] = useState(false)

    const showTimerRef = useRef(null)
    const hideTimerRef = useRef(null)

    useEffect(() => {
        const startShowTimer = () => {
            clearTimeout(showTimerRef.current)

            showTimerRef.current = setTimeout(() => {
                setIsOpen(true)

                clearTimeout(hideTimerRef.current)

                hideTimerRef.current = setTimeout(() => {
                    setIsOpen(false)
                    startShowTimer()
                }, AUTO_CLOSE_AFTER)
            }, SHOW_AFTER)
        }

        startShowTimer()

        return () => {
            clearTimeout(showTimerRef.current)
            clearTimeout(hideTimerRef.current)
        }
    }, [])

    const handleClose = () => {
        setIsOpen(false)

        clearTimeout(hideTimerRef.current)
        clearTimeout(showTimerRef.current)

        showTimerRef.current = setTimeout(() => {
            setIsOpen(true)

            hideTimerRef.current = setTimeout(() => {
                setIsOpen(false)
            }, AUTO_CLOSE_AFTER)
        }, SHOW_AFTER)
    }

    if (!isOpen) {
        return null
    }

    return (
        <div
            className="
        fixed
        bottom-5
        left-1/2
        -translate-x-1/2
        z-[9998]
        w-[calc(100%-28px)]
        max-w-[400px]
      "
        >
            <div
                className="
          relative
          overflow-hidden
          rounded-2xl
          bg-white
          border
          border-gray-200
          shadow-2xl
        "
            >

                {/* ================= HEADER ================= */}
                <div
                    className="
            bg-gradient-to-r
            from-[#123b7a]
            to-[#1687d9]
            px-4
            py-3
          "
                >

                    {/* Close */}
                    <button
                        type="button"
                        onClick={handleClose}
                        aria-label="Close call popup"
                        className="
              absolute
              top-2.5
              right-2.5
              w-7
              h-7
              rounded-full
              bg-white/15
              hover:bg-white/25
              text-white
              flex
              items-center
              justify-center
              transition
            "
                    >
                        <svg
                            className="w-4 h-4"
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
                    </button>

                    <div className="flex items-center gap-3 pr-8">

                        {/* Phone Icon */}
                        <div
                            className="
                w-10
                h-10
                shrink-0
                rounded-full
                bg-white/15
                flex
                items-center
                justify-center
              "
                        >
                            <svg
                                className="w-5 h-5 text-white"
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
                        </div>

                        <div>
                            <p className="text-[11px] text-white/75">
                                Need Help With Your Trip?
                            </p>

                            <h3 className="text-base sm:text-lg font-extrabold text-white leading-5">
                                Talk to a Travel Expert
                            </h3>
                        </div>

                    </div>
                </div>

                {/* ================= BODY ================= */}
                <div className="px-4 py-4">

                    <p className="text-sm text-gray-600 leading-5">
                        Get help finding the best flights and travel deals.
                        Our travel experts are ready to assist you.
                    </p>

                    {/* Call Button */}
                    <a
                        href={`tel:${PHONE_NUMBER}`}
                        className="
              mt-4
              w-full
              h-12
              flex
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-[#1687d9]
              hover:bg-[#123b7a]
              text-white
              text-sm
              font-bold
              shadow-lg
              shadow-blue-100
              transition-all
              active:scale-[0.98]
            "
                    >
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
                12.84 12.84 0 0 0 2.81.7
                A2 2 0 0 1 22 16.92z"
                            />
                        </svg>

                        Call Now — {DISPLAY_PHONE}
                    </a>

                    {/* Status */}
                    <div className="mt-2.5 flex items-center justify-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />

                        <p className="text-[10px] text-gray-400">
                            Travel experts available now
                        </p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default CallPopup