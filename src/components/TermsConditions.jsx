import { appData } from "../data"
import { formatPhoneNumber } from "../utils/helper"

const TermsConditions = () => {
    return (
        <main className="bg-white">

            {/* ================= PAGE HEADER ================= */}
            <section className="bg-gradient-to-r from-[#062b5c] to-[#1687d9]">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
                    <p className="text-sm font-semibold text-white/70 mb-2">
                        EasyTripsNow
                    </p>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                        Terms & Conditions
                    </h1>

                    <p className="mt-3 text-sm text-white/80">
                        Effective Date: September 7, 2026
                    </p>
                </div>
            </section>

            {/* ================= CONTENT ================= */}
            <section className="py-12 sm:py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">

                    {/* Introduction */}
                    <div className="space-y-5 text-gray-600 text-sm sm:text-base leading-7">

                        <p>
                            Welcome to EasyTripsNow. These Terms & Conditions
                            (“Terms,” “Terms and Conditions,” or “Agreement”) govern
                            your access to and use of the EasyTripsNow website and
                            any travel-related assistance made available through it.
                        </p>

                        <p>
                            EasyTripsNow is operated by TravelFirst LLC
                            (“TravelFirst LLC,” “EasyTripsNow,” “we,” “us,” or “our”).
                            By accessing or using our website, submitting an inquiry,
                            requesting travel assistance, or using any information or
                            services available through the website, you agree to be
                            bound by these Terms. If you do not agree with these Terms,
                            please do not use the website.
                        </p>

                    </div>

                    {/* 1 */}
                    <TermsSection title="1. About EasyTripsNow">
                        <p>
                            EasyTripsNow is a travel website operated by TravelFirst LLC
                            that provides users with access to travel information, flight
                            search assistance, booking-related support, and other
                            travel-related resources.
                        </p>

                        <p>
                            Depending on the service requested, EasyTripsNow may assist
                            customers in locating available travel options and facilitating
                            reservations with airlines, travel suppliers, or other
                            third-party providers.
                        </p>

                        <p>
                            EasyTripsNow is not an airline and does not operate aircraft
                            or control airline schedules, routes, fares, seat availability,
                            baggage policies, or other airline-specific conditions.
                        </p>
                    </TermsSection>

                    {/* 2 */}
                    <TermsSection title="2. Use of the Website">
                        <p>
                            You agree to use EasyTripsNow only for lawful purposes and in
                            accordance with these Terms.
                        </p>

                        <p className="font-semibold text-gray-700">
                            You must not:
                        </p>

                        <TermsList
                            items={[
                                "Use the website for fraudulent, unlawful, or unauthorized purposes.",
                                "Provide false, inaccurate, or misleading information.",
                                "Attempt to interfere with or disrupt the website or its security features.",
                                "Access information or systems that you are not authorized to access.",
                                "Use automated methods to collect or extract website content without permission.",
                                "Introduce malicious software, code, or other harmful material.",
                                "Use the website in a way that could negatively affect its availability or operation.",
                            ]}
                        />

                        <p>
                            We reserve the right to restrict or terminate access to the
                            website if we reasonably believe that a user has violated these
                            Terms or misused our website.
                        </p>
                    </TermsSection>

                    {/* 3 */}
                    <TermsSection title="3. Travel Information & Availability">
                        <p>
                            Travel information displayed on or communicated through
                            EasyTripsNow may include information relating to flight
                            schedules, fares, destinations, availability, baggage
                            allowances, restrictions, and other travel details.
                        </p>

                        <p>
                            Travel information can change frequently. Airlines and other
                            travel suppliers may modify fares, schedules, availability,
                            taxes, fees, restrictions, and other conditions without prior
                            notice.
                        </p>

                        <p>
                            Accordingly, information shown on the website should not be
                            considered a guarantee that a particular fare, seat, flight,
                            schedule, or travel option will remain available.
                        </p>

                        <p>
                            Any fare or availability is subject to confirmation at the
                            time of booking.
                        </p>
                    </TermsSection>

                    {/* 4 */}
                    <TermsSection title="4. Flight Bookings">
                        <p>
                            When you request a flight booking through EasyTripsNow,
                            certain traveler information may be required to process the
                            reservation.
                        </p>

                        <p>
                            You are responsible for providing complete and accurate
                            information, including names, dates of birth where required,
                            travel dates, destinations, and other information necessary
                            for the requested reservation.
                        </p>

                        <p>
                            You should carefully review all booking information before
                            confirming a reservation. Errors in passenger names, dates,
                            destinations, or other booking details may result in additional
                            charges, restrictions, or inability to travel.
                        </p>

                        <p>
                            Once a booking is confirmed, the applicable airline or travel
                            supplier's terms, fare rules, restrictions, and policies may
                            apply.
                        </p>
                    </TermsSection>

                    {/* 5 */}
                    <TermsSection title="5. Third-Party Travel Suppliers">
                        <p>
                            Travel services may involve independent third parties,
                            including airlines, reservation systems, payment providers,
                            and other travel suppliers.
                        </p>

                        <p>
                            These third parties may establish their own terms, conditions,
                            policies, cancellation rules, baggage requirements, refund
                            rules, and other restrictions.
                        </p>

                        <p>
                            EasyTripsNow does not control the policies or operations of
                            independent airlines or other travel suppliers. Customers are
                            responsible for reviewing applicable supplier terms before
                            completing a transaction.
                        </p>

                        <p>
                            Where a third-party supplier is responsible for a particular
                            aspect of a booking, that supplier's applicable policies may
                            govern the relevant service.
                        </p>
                    </TermsSection>

                    {/* 6 */}
                    <TermsSection title="6. Prices, Taxes, & Fees">
                        <p>
                            Travel prices can change based on availability, demand, fare
                            rules, taxes, fees, and other factors.
                        </p>

                        <p>
                            Any price presented through EasyTripsNow is subject to
                            availability and confirmation. The final price may differ
                            from an earlier displayed or quoted amount if the underlying
                            travel option is no longer available or if applicable taxes,
                            fees, or supplier charges change.
                        </p>

                        <p>
                            Customers are responsible for reviewing the total price and
                            applicable conditions before completing a purchase.
                        </p>
                    </TermsSection>

                    {/* 7 */}
                    <TermsSection title="7. Payments">
                        <p>
                            Where payment is required for a requested travel service or
                            booking, payment information may be processed through
                            applicable payment providers or travel suppliers.
                        </p>

                        <p>
                            You authorize the applicable party to process the amount
                            associated with your confirmed transaction.
                        </p>

                        <p>
                            You agree not to use a payment method without authorization
                            or attempt to reverse, dispute, or otherwise interfere with
                            a legitimate transaction improperly.
                        </p>

                        <p>
                            Any payment dispute should first be brought to our attention
                            so that we can review the matter and attempt to assist where
                            appropriate.
                        </p>
                    </TermsSection>

                    {/* 8 */}
                    <TermsSection title="8. Changes, Cancellations, & Refunds">
                        <p>
                            Flight changes, cancellations, credits, and refunds are
                            generally subject to the fare rules and policies applicable
                            to the specific booking.
                        </p>

                        <p>
                            Some fares may be non-refundable, non-changeable, or subject
                            to airline penalties, service fees, fare differences, or
                            other restrictions.
                        </p>

                        <p>
                            If you need to change or cancel a reservation, contact
                            EasyTripsNow as soon as possible. We will provide assistance
                            based on the applicable booking conditions.
                        </p>

                        <p>
                            Refund processing times may vary depending on the airline,
                            travel supplier, payment method, and other circumstances.
                        </p>

                        <p>
                            For additional information, please review our Cancellation &
                            Refund Policy.
                        </p>
                    </TermsSection>

                    {/* 9 */}
                    <TermsSection title="9. Travel Documents & Passenger Responsibilities">
                        <p>
                            You are responsible for ensuring that you possess all
                            documents required for your trip.
                        </p>

                        <p>
                            Depending on your itinerary, this may include a valid
                            passport, visa, transit authorization, identification,
                            vaccination or health documentation where applicable, and
                            any other documents required by the relevant authorities or
                            travel supplier.
                        </p>

                        <p>
                            Travel requirements may change. Customers should verify
                            applicable requirements with the relevant airline and
                            government authorities before traveling.
                        </p>

                        <p>
                            EasyTripsNow does not guarantee that a traveler will be
                            permitted to enter, transit through, or depart from any
                            country or destination.
                        </p>
                    </TermsSection>

                    {/* 10 */}
                    <TermsSection title="10. Content Provided On Our Website">
                        <p>
                            We make reasonable efforts to provide useful and accurate
                            information on EasyTripsNow. However, we do not guarantee
                            that all website content will always be complete, current,
                            accurate, or free from errors.
                        </p>

                        <p>
                            Website content may be updated, modified, suspended, or
                            removed at any time without prior notice.
                        </p>

                        <p>
                            Information provided on the website is intended for general
                            informational purposes and should not be treated as a
                            guarantee of any particular travel outcome.
                        </p>
                    </TermsSection>

                    {/* 11 */}
                    <TermsSection title="11. Intellectual Property">
                        <p>
                            Unless otherwise stated, content appearing on EasyTripsNow,
                            including text, graphics, logos, designs, images, layouts,
                            and other materials, is owned by or licensed to TravelFirst
                            LLC and may be protected by applicable intellectual property
                            laws.
                        </p>

                        <p>
                            You may access and use the website for personal, lawful
                            purposes. You may not reproduce, distribute, modify,
                            republish, sell, or commercially exploit website content
                            without prior written permission.
                        </p>
                    </TermsSection>

                    {/* 12 */}
                    <TermsSection title="12. Links To Third-Party Websites">
                        <p>
                            EasyTripsNow may contain links or references to third-party
                            websites and services.
                        </p>

                        <p>
                            These websites are operated independently of TravelFirst LLC.
                            We are not responsible for the availability, content,
                            security, privacy practices, policies, or services of
                            third-party websites.
                        </p>

                        <p>
                            Your use of third-party websites is subject to the terms and
                            policies established by those third parties.
                        </p>
                    </TermsSection>

                    {/* 13 */}
                    <TermsSection title="13. Limitation of Liability">
                        <p>
                            To the extent permitted by applicable law, TravelFirst LLC
                            and EasyTripsNow are not responsible for losses or damages
                            arising from circumstances outside our reasonable control,
                            including airline schedule changes, delays, cancellations,
                            overbooking, weather conditions, government restrictions,
                            airport closures, strikes, technical failures, or actions
                            of third-party travel suppliers.
                        </p>

                        <p>
                            We are not responsible for losses resulting from inaccurate
                            information provided by a customer, failure to obtain
                            required travel documents, failure to comply with airline or
                            government requirements, or misuse of the website.
                        </p>

                        <p>
                            Nothing in these Terms is intended to exclude or limit
                            liability where such exclusion or limitation is prohibited
                            by applicable law.
                        </p>
                    </TermsSection>

                    {/* 14 */}
                    <TermsSection title="14. Indemnification">
                        <p>
                            To the extent permitted by law, you agree to defend,
                            indemnify, and hold harmless TravelFirst LLC, EasyTripsNow,
                            and their respective officers, employees, contractors, and
                            service providers from claims, liabilities, damages, losses,
                            costs, and expenses arising from your misuse of the website,
                            violation of these Terms, or violation of applicable laws or
                            third-party rights.
                        </p>
                    </TermsSection>

                    {/* 15 */}
                    <TermsSection title="15. Privacy">
                        <p>
                            Your use of EasyTripsNow is also subject to our Privacy
                            Policy, which explains how we collect, use, disclose, and
                            protect personal information.
                        </p>

                        <p>
                            By using the website, you acknowledge that you have reviewed
                            our Privacy Policy.
                        </p>
                    </TermsSection>

                    {/* 16 */}
                    <TermsSection title="16. Changes To These Terms">
                        <p>
                            TravelFirst LLC may update these Terms from time to time to
                            reflect changes to our services, website, business practices,
                            or applicable legal requirements.
                        </p>

                        <p>
                            Updated Terms will be posted on this page with a revised
                            Effective Date. Your continued use of EasyTripsNow after
                            changes are posted constitutes acceptance of the updated
                            Terms, to the extent permitted by applicable law.
                        </p>
                    </TermsSection>

                    {/* 17 */}
                    <TermsSection title="17. Governing Law">
                        <p>
                            These Terms shall be governed by and interpreted in
                            accordance with the laws applicable in the State of New
                            Jersey, without regard to conflict-of-law principles, except
                            where applicable law requires otherwise.
                        </p>

                        <p>
                            Any dispute arising from or relating to these Terms or your
                            use of EasyTripsNow shall be handled in a court of competent
                            jurisdiction, subject to applicable law.
                        </p>
                    </TermsSection>

                    {/* 18 */}
                    <TermsSection title="18. Severability">
                        <p>
                            If any provision of these Terms is determined to be unlawful,
                            invalid, or unenforceable, that provision shall be limited or
                            removed to the extent necessary, while the remaining
                            provisions will continue to remain in effect.
                        </p>
                    </TermsSection>

                    {/* 19 */}
                    <TermsSection title="19. Contact Us">

                        <p>
                            If you have questions about these Terms & Conditions, your
                            booking, or our website, please contact us:
                        </p>

                        <div className="mt-5 rounded-xl bg-[#f5f9fd] border border-gray-200 p-5 space-y-3 text-sm">

                            <p>
                                <strong className="text-[#123b7a]">
                                    Address:
                                </strong>{" "}
                                FIVE GREENTREE CENTRE, 525 ROUTE 73 NORTH STE 104
                                MARLTON, NEW JERSEY 08053-0805 United States
                            </p>

                            <p>
                                <strong className="text-[#123b7a]">
                                    Email:
                                </strong>{" "}
                                <a
                                    href="mailto:contact@easytripsnow.com"
                                    className="text-[#1687d9] hover:underline"
                                >
                                    contact@easytripsnow.com
                                </a>
                            </p>

                            <p>
                                <strong className="text-[#123b7a]">
                                    Phone:
                                </strong>{" "}
                                <a
                                    href={`tel:${appData.phoneNumber}`}
                                    className="text-[#1687d9] hover:underline"
                                >
                                 {formatPhoneNumber(appData.phoneNumber)}
                                </a>
                            </p>

                        </div>

                    </TermsSection>

                    {/* ================= FINAL NOTE ================= */}
                    <div className="mt-10 rounded-2xl bg-gradient-to-r from-[#123b7a] to-[#1687d9] p-6 sm:p-8 text-white">

                        <p className="text-sm sm:text-base leading-7">
                            By using EasyTripsNow, you acknowledge that you have read,
                            understood, and agreed to these Terms & Conditions.
                        </p>

                    </div>

                </div>
            </section>

        </main>
    )
}


/* ================= HELPERS ================= */

const TermsSection = ({ title, children }) => {
    return (
        <section className="mt-10">

            <h2 className="text-xl sm:text-2xl font-extrabold text-[#123b7a] pb-3 border-b border-gray-100">
                {title}
            </h2>

            <div className="mt-5 space-y-5 text-gray-600 text-sm sm:text-base leading-7">
                {children}
            </div>

        </section>
    )
}


const TermsList = ({ items }) => {
    return (
        <ul className="list-disc pl-6 space-y-2">
            {items.map((item) => (
                <li key={item}>
                    {item}
                </li>
            ))}
        </ul>
    )
}


export default TermsConditions