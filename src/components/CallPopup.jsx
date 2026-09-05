import { useEffect, useRef, useState } from "react"

const CallPopup = () => {
    const [isOpen, setIsOpen] = useState(false)

    const showTimerRef = useRef(null)
    const hideTimerRef = useRef(null)

    useEffect(() => {
        const startShowTimer = () => {
            showTimerRef.current = setTimeout(() => {
                setIsOpen(true)

                hideTimerRef.current = setTimeout(() => {
                    setIsOpen(false)
                    startShowTimer()
                }, 50000)
            }, 20000)
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

        showTimerRef.current = setTimeout(() => {
            setIsOpen(true)

            hideTimerRef.current = setTimeout(() => {
                setIsOpen(false)
            }, 50000)
        }, 40000)
    }

    if (!isOpen) {
        return null
    }

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9998] w-[calc(100%-32px)] max-w-[430px]">

            <div className="relative overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-2xl">

                {/* Top Blue Section */}
                <div className="bg-gradient-to-r from-[#123b7a] to-[#1687d9] px-5 py-4">

                    <button
                        type="button"
                        onClick={handleClose}
                        className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition"
                        aria-label="Close call popup"
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
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>

                    <div className="flex items-center gap-3 pr-8">

                        <div className="w-11 h-11 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                            <svg
                                className="w-6 h-6 text-white"
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
                            <p className="text-xs text-white/75">
                                Need Help With Your Trip?
                            </p>

                            <h3 className="text-lg font-extrabold text-white">
                                Talk to a Travel Expert
                            </h3>
                        </div>

                    </div>
                </div>

                {/* Content */}
                <div className="px-5 py-5">

                    <p className="text-sm text-gray-600 leading-6">
                        Get help finding the best flights and travel deals.
                        Our travel experts are ready to assist you.
                    </p>

                    {/* Call Button */}
                    <a
                        href="tel:18669871234"
                        className="mt-4 w-full flex items-center justify-center gap-2 rounded-xl bg-[#1687d9] hover:bg-[#0d75bd] text-white py-3.5 font-bold text-sm shadow-lg shadow-blue-100 transition-all active:scale-[0.98]"
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

                        Call Now — 1-866-987-1234
                    </a>

                    <div className="mt-3 flex items-center justify-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />

                        <p className="text-[11px] text-gray-400">
                            Travel experts available now
                        </p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default CallPopup