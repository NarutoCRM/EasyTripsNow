import { useEffect, useState } from "react";
import FlightDetail from "./FlightDetail";
import FlightDetailSkeleton from "./FlightDetailSkeleton";

const FLIGHT_DETAIL_DELAY_MS = 2500;

export default function DelayedFlightDetail() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(
      () => setIsVisible(true),
      FLIGHT_DETAIL_DELAY_MS,
    );
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div
      className="mt-4"
      aria-busy={!isVisible}
      aria-label={isVisible ? "Flight details" : "Loading flight details"}
    >
      {isVisible ? <FlightDetail /> : <FlightDetailSkeleton />}
      <span className="sr-only" role="status" aria-live="polite">
        {isVisible ? "Flight details loaded" : "Loading flight details"}
      </span>
    </div>
  );
}
