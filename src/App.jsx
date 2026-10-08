import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingCall from "./components/FloatingCall";
import CallPopup from "./components/CallPopup";

import Hero from "./components/Hero";
import FlightDeals from "./components/FlightDeals";
import PopularDestinations from "./components/PopularDestinations";
import WhyBook from "./components/WhyBook";
import JourneyPriority from "./components/JourneyPriority";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";

const AboutUs = lazy(() => import("./components/AboutUs"));
const PrivacyPolicy = lazy(() => import("./components/PrivacyPolicy"));
const TermsConditions = lazy(() => import("./components/TermsConditions"));
const CancellationRefund = lazy(() => import("./components/CancellationRefund"));
const CookiePolicy = lazy(() => import("./components/CookiePolicy"));
const Disclaimer = lazy(() => import("./components/Disclaimer"));
const CheapFlightsNewYork = lazy(() => import("./components/CheapFlightsNewYork"));
const CheapFlightsLosAngeles = lazy(() => import("./components/CheapFlightsLosAngeles"));
const CheapFlightsParis = lazy(() => import("./components/CheapFlightsParis"));
const CheapFlightsSanFrancisco = lazy(() => import("./components/CheapFlightsSanFrancisco"));
const CheapFlightsBoston = lazy(() => import("./components/CheapFlightsBoston"));
const ContactUs = lazy(() => import("./components/ContactUs"));
const FlightResults = lazy(() => import("./components/flight-results/FlightResults"));

function Layout({ children, floating = true }) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>{children}</main>

      <Footer />

      {floating && (
        <>
          <FloatingCall />
          <CallPopup />
        </>
      )}
    </div>
  );
}

function Home() {
  return (
    <Layout>
      <Hero />
      <FlightDeals />
      <PopularDestinations />
      <WhyBook />
      <JourneyPriority />
      <Testimonials />
      <FAQ />
      <CTA />
    </Layout>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div role="status" className="p-6 text-center">Loading page...</div>}>
        <Routes>
        <Route
          path="/flight-results"
          element={
            <Layout>
              <FlightResults />
            </Layout>
          }
        />
        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* ABOUT */}
        <Route
          path="/about-us"
          element={
            <Layout>
              <AboutUs />
            </Layout>
          }
        />

        {/* LEGAL PAGES */}
        <Route
          path="/privacy-policy"
          element={
            <Layout>
              <PrivacyPolicy />
            </Layout>
          }
        />

        <Route
          path="/terms-conditions"
          element={
            <Layout>
              <TermsConditions />
            </Layout>
          }
        />

        <Route
          path="/cancellation-refund"
          element={
            <Layout>
              <CancellationRefund />
            </Layout>
          }
        />

        <Route
          path="/cookie-policy"
          element={
            <Layout>
              <CookiePolicy />
            </Layout>
          }
        />

        <Route
          path="/disclaimer"
          element={
            <Layout>
              <Disclaimer />
            </Layout>
          }
        />

        {/* DESTINATION PAGES */}
        <Route
          path="/cheap-flights-to-new-york-city"
          element={
            <Layout>
              <CheapFlightsNewYork />
            </Layout>
          }
        />

        <Route
          path="/cheap-flights-to-los-angeles"
          element={
            <Layout>
              <CheapFlightsLosAngeles />
            </Layout>
          }
        />

        <Route
          path="/cheap-flights-to-paris"
          element={
            <Layout>
              <CheapFlightsParis />
            </Layout>
          }
        />

        <Route
          path="/contact-us"
          element={
            <Layout>
              <ContactUs />
            </Layout>
          }
        />

        <Route
          path="/cheap-flights-to-san-francisco"
          element={
            <Layout>
              <CheapFlightsSanFrancisco />
            </Layout>
          }
        />

        <Route
          path="/cheap-flights-to-boston"
          element={
            <Layout>
              <CheapFlightsBoston />
            </Layout>
          }
        />

        {/* FALLBACK */}
        <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
