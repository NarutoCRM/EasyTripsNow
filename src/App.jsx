import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import FlightDeals from "./components/FlightDeals"
import PopularDestinations from "./components/PopularDestinations"
import WhyBook from "./components/WhyBook"
import JourneyPriority from "./components/JourneyPriority"
import Testimonials from "./components/Testimonials"
import FAQ from "./components/FAQ"
import CTA from "./components/CTA"
import Footer from "./components/Footer"
import FloatingCall from "./components/FloatingCall"
import CallPopup from "./components/CallPopup"

function App() {
  return (
    <div className="min-h-screen bg-white">

      <Navbar />

      <main>
        <Hero />
        <FlightDeals />
        <PopularDestinations />
        <WhyBook />
        <JourneyPriority />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>

      <Footer />

      {/* Permanent Call Button */}
      <FloatingCall />

      {/* Automatic Call Popup */}
      <CallPopup />

    </div>
  )
}

export default App