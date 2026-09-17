import React from "react"
import { appData } from "../data"
import { formatPhoneNumber } from "../utils/helper"

const PHONE_NUMBER = appData.phoneNumber
const DISPLAY_PHONE = formatPhoneNumber(PHONE_NUMBER)

const Section = ({ number, title, children }) => (
  <section className="mb-10">
    <h2 className="mb-4 text-xl font-bold text-slate-900 sm:text-2xl">
      {number}. {title}
    </h2>

    <div className="space-y-4 text-[15px] leading-7 text-slate-600">
      {children}
    </div>
  </section>
)

const BulletList = ({ items }) => (
  <ul className="ml-5 list-disc space-y-2 text-[15px] leading-7 text-slate-600">
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
)

function Disclaimer() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-24">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/hero-plane.jpg')" }}
        />

        <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-6">
          <span className="mb-4 inline-block rounded-full bg-blue-500/20 px-4 py-2 text-sm font-semibold text-blue-300">
            EasyTripsNow
          </span>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Disclaimer
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Important information regarding travel services, flight
            information, prices, availability, third-party suppliers, and
            travel arrangements.
          </p>

          <p className="mt-5 text-sm font-medium text-slate-400">
            Operated by TravelFirst LLC
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-5 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-4xl rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-10 lg:p-12">

          {/* Introduction */}
          <div className="mb-10 border-b border-slate-200 pb-8">
            <p className="text-[15px] leading-7 text-slate-600 sm:text-base">
              EasyTripsNow is operated by TravelFirst LLC and provides
              travel-related information, flight search assistance, booking
              support, and related services to customers.
            </p>

            <p className="mt-4 text-[15px] leading-7 text-slate-600 sm:text-base">
              The information and services available through EasyTripsNow are
              provided to help customers explore and arrange travel options.
              While we make reasonable efforts to provide useful and accurate
              information, travel prices, schedules, availability, policies,
              and other details can change frequently. Customers should review
              the applicable terms and conditions before completing a booking.
            </p>
          </div>

          <Section number="1" title="Travel Service Provider">
            <p>
              EasyTripsNow is an independent travel service provider and is
              not an airline, airport, or government agency.
            </p>

            <p>
              We may assist customers in searching for flights, comparing
              available travel options, making reservations, and communicating
              with airlines or other travel suppliers.
            </p>

            <p>
              The airlines and other suppliers associated with a booking
              remain responsible for their own flights, schedules, fares,
              ticket conditions, baggage policies, operational decisions,
              cancellations, delays, and other services they provide.
            </p>
          </Section>

          <Section number="2" title="Flight Information">
            <p>
              We make reasonable efforts to ensure that information displayed
              or communicated through EasyTripsNow is accurate and useful.
              However, flight schedules, fares, availability, routes, baggage
              allowances, restrictions, taxes, and other travel information
              may change without notice.
            </p>

            <p>
              Information presented on our website should therefore not be
              considered a guarantee that a particular flight, fare, seat,
              route, or travel option will remain available.
            </p>

            <p>
              Any fare or travel option is subject to availability and
              confirmation at the time of booking.
            </p>
          </Section>

          <Section number="3" title="Prices & Availability">
            <p>
              Travel prices may change due to availability, demand, airline
              pricing decisions, taxes, fees, currency fluctuations, and
              other factors.
            </p>

            <p>
              A price displayed during a search or inquiry may not remain
              available until the booking is completed.
            </p>

            <p>
              The final price and applicable conditions will be determined at
              the time the reservation is confirmed.
            </p>

            <p>
              EasyTripsNow does not guarantee the availability of any
              particular fare or flight until the applicable booking has been
              successfully confirmed.
            </p>
          </Section>

          <Section number="4" title="Airline Policies">
            <p>Each airline may have its own policies regarding:</p>

            <BulletList
              items={[
                "Ticket changes and cancellations",
                "Refunds and credits",
                "Baggage allowances and fees",
                "Check-in requirements",
                "Seat selection",
                "Flight delays and cancellations",
                "Name corrections",
                "Travel documents",
                "No-show conditions",
                "Other ticket restrictions",
              ]}
            />

            <p>
              Customers are responsible for reviewing and complying with the
              applicable airline rules associated with their reservation.
            </p>

            <p>
              EasyTripsNow cannot override an airline's fare rules or
              guarantee that an airline will approve a particular request.
            </p>
          </Section>

          <Section number="5" title="Third-Party Services">
            <p>
              EasyTripsNow may work with or provide access to independent
              airlines, travel suppliers, reservation systems, payment
              providers, technology providers, and other third parties.
            </p>

            <p>
              These third parties operate independently and may have their own
              terms, policies, fees, and privacy practices.
            </p>

            <p>
              TravelFirst LLC does not control the operations, policies,
              availability, or decisions of independent third-party providers
              and is not responsible for changes made by them that are outside
              our reasonable control.
            </p>
          </Section>

          <Section number="6" title="Travel Documents & Requirements">
            <p>
              Travelers are responsible for ensuring that they have all
              documents and authorizations required for their journey.
            </p>

            <p>
              Depending on the itinerary, travelers may need a valid passport,
              visa, transit authorization, identification, or other documents
              required by airlines, airports, immigration authorities, or
              government agencies.
            </p>

            <p>
              Entry, transit, health, and other travel requirements can change
              without notice.
            </p>

            <p>
              EasyTripsNow does not guarantee that a traveler will be
              permitted to enter, leave, or transit through a particular
              country or destination.
            </p>

            <p>
              Customers should verify current requirements with the
              appropriate airline and relevant government or immigration
              authorities before traveling.
            </p>
          </Section>

          <Section number="7" title="Flight Delays, Cancellations, and Disruptions">
            <p>
              Airlines may change or cancel flights, modify schedules, delay
              departures, change aircraft, overbook flights, or make other
              operational adjustments.
            </p>

            <p>
              Such events may occur for reasons including weather, technical
              issues, air traffic restrictions, staffing, government
              requirements, airport conditions, or other circumstances.
            </p>

            <p>
              EasyTripsNow may assist customers in reviewing available
              options when appropriate, but the airline or relevant travel
              supplier generally determines the remedies, rebooking options,
              credits, or refunds available under its policies.
            </p>
          </Section>

          <Section number="8" title="Customer-Provided Information">
            <p>
              Customers are responsible for providing accurate and complete
              information when requesting travel assistance or making a
              reservation.
            </p>

            <p>
              This may include passenger names, dates of birth where required,
              travel dates, destinations, contact details, and other booking
              information.
            </p>

            <p>
              EasyTripsNow is not responsible for problems caused by
              incorrect, incomplete, outdated, or misleading information
              provided by a customer.
            </p>

            <p>
              Customers should carefully review their booking information
              before confirming a reservation.
            </p>
          </Section>

          <Section number="9" title="Website Content">
            <p>
              Although we make reasonable efforts to maintain accurate
              information, EasyTripsNow is provided on an “as available”
              basis.
            </p>

            <p>
              We do not guarantee that all website content will always be
              complete, current, accurate, uninterrupted, or free from errors.
            </p>

            <p>
              We may update, modify, suspend, or remove website content or
              features at any time without prior notice.
            </p>
          </Section>

          <Section number="10" title="External Links">
            <p>
              EasyTripsNow may contain links or references to third-party
              websites, applications, or services.
            </p>

            <p>
              These external websites are not operated or controlled by
              TravelFirst LLC. We are not responsible for the content,
              availability, security, accuracy, privacy practices, or policies
              of third-party websites.
            </p>

            <p>
              Your use of an external website is subject to that website's own
              terms and policies.
            </p>
          </Section>

          <Section number="11" title="Limitation of Responsibility">
            <p>
              To the extent permitted by applicable law, TravelFirst LLC and
              EasyTripsNow are not responsible for losses, costs, delays,
              disruptions, or other consequences resulting from circumstances
              outside our reasonable control, including airline cancellations,
              delays, schedule changes, weather conditions, airport closures,
              government restrictions, strikes, technical failures, or actions
              of third-party travel suppliers.
            </p>

            <p>
              Nothing in this Disclaimer is intended to exclude or limit any
              liability that cannot legally be excluded or limited under
              applicable law.
            </p>
          </Section>

          <Section number="12" title="No Guarantee of Travel Outcome">
            <p>
              The availability of travel information, a flight search result,
              fare, booking option, or travel recommendation through
              EasyTripsNow does not guarantee a particular travel experience
              or outcome.
            </p>

            <p>
              Travel arrangements remain subject to airline rules,
              availability, operational circumstances, government
              requirements, and other conditions that may be outside our
              control.
            </p>
          </Section>

          <Section number="13" title="Changes To This Disclaimer">
            <p>
              TravelFirst LLC may update this Disclaimer when necessary to
              reflect changes to our website, services, business practices, or
              applicable requirements.
            </p>

            <p>
              Any revised version will be made available on EasyTripsNow. We
              encourage visitors to review this page periodically.
            </p>
          </Section>

          <Section number="14" title="Contact Us">
            <p>
              If you have questions regarding this Disclaimer or the
              information provided through EasyTripsNow, you can contact us
              at:
            </p>

            <div className="rounded-2xl bg-blue-50 p-6 ring-1 ring-blue-100">
              <div className="space-y-3 text-sm leading-6 text-slate-700">
                <p>
                  <strong className="text-slate-900">Address:</strong>{" "}
                  FIVE GREENTREE CENTRE, 525 ROUTE 73 NORTH STE 104 MARLTON,
                  NEW JERSEY 08053-0805 United States
                </p>

                <p>
                  <strong className="text-slate-900">Email:</strong>{" "}
                  <a
                    href="mailto:contact@easytripsnow.com"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    contact@easytripsnow.com
                  </a>
                </p>

                <p>
                  <strong className="text-slate-900">Phone:</strong>{" "}
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="font-semibold text-blue-600 hover:underline"
                  >
                    {DISPLAY_PHONE}
                  </a>
                </p>
              </div>
            </div>

            <p className="mt-6">
              By using EasyTripsNow, you acknowledge that travel arrangements
              are subject to the policies, terms, availability, and
              operational decisions of the applicable airlines and other
              travel suppliers.
            </p>
          </Section>

          {/* CTA */}
          <div className="mt-12 rounded-2xl bg-slate-950 px-6 py-8 text-center sm:px-10">
            <h3 className="text-2xl font-bold text-white">
              Need Help With Your Travel Plans?
            </h3>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-300">
              Talk with an EasyTripsNow travel expert for assistance with your
              trip.
            </p>

            <a
              href={`tel:${PHONE_NUMBER}`}
              className="mt-6 inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-500"
            >
              Talk to an Expert
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Disclaimer
