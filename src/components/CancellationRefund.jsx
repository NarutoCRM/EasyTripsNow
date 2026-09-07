const CancellationRefund = () => {
    return (
        <main className="bg-white">

            {/* ================= PAGE HEADER ================= */}
            <section className="bg-gradient-to-r from-[#062b5c] to-[#1687d9]">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
                    <p className="text-sm font-semibold text-white/70 mb-2">
                        EasyTripsNow
                    </p>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                        Cancellation & Refund Policy
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
                            At EasyTripsNow, operated by TravelFirst LLC, we understand that
                            travel plans may change unexpectedly. Our goal is to make the
                            cancellation and refund process as clear as possible. Since
                            flight tickets and related travel arrangements are governed by
                            the policies of the respective airlines and travel suppliers,
                            cancellation and refund decisions are ultimately subject to the
                            applicable airline rules.
                        </p>

                        <p>
                            EasyTripsNow acts as a travel service provider and assists
                            customers with cancellation and refund requests. We do not
                            independently determine airline refund eligibility or override
                            airline fare rules.
                        </p>

                    </div>

                    {/* 1 */}
                    <PolicySection title="1. General Cancellation & Refund Policy">

                        <PolicyList
                            items={[
                                "Flight tickets may be refundable, partially refundable, or non-refundable depending on the airline, fare type, route, and terms applicable to the booking.",
                                "Any refund will be processed according to the fare rules and cancellation policy of the airline or travel supplier.",
                                "EasyTripsNow does not guarantee that a cancellation request will result in a refund.",
                                "Airline penalties, fare differences, taxes, supplier charges, and other applicable fees may affect the final refundable amount.",
                                "Any service or processing fees charged by EasyTripsNow may be non-refundable, where permitted by applicable law and the terms disclosed at the time of booking.",
                                "Refund eligibility and the amount of any approved refund are determined based on the specific reservation and applicable airline rules.",
                            ]}
                        />

                    </PolicySection>

                    {/* 2 */}
                    <PolicySection title="2. Cancellation Requests">

                        <p>
                            Customers who need to cancel a reservation should contact the
                            EasyTripsNow customer support team as soon as possible.
                        </p>

                        <p>
                            Cancellation requests should be submitted by phone using the
                            customer support number provided on our website. This allows our
                            team to verify the booking details and discuss the available
                            options with the customer.
                        </p>

                        <p>
                            A cancellation request is not considered completed merely
                            because a customer contacts us. The request must be reviewed and
                            processed according to the applicable airline or supplier
                            requirements.
                        </p>

                        <p>
                            Customers should provide their booking or reservation details
                            when requesting a cancellation. Once the request has been
                            received, our team may provide a reference or confirmation for
                            the request where applicable.
                        </p>

                        <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
                            <p className="font-semibold text-amber-800">
                                Important:
                            </p>

                            <p className="mt-1 text-amber-900/80">
                                If your ticket is subject to a specific cancellation deadline,
                                you are responsible for contacting us sufficiently before that
                                deadline. Requests received after the applicable airline
                                deadline may not qualify for cancellation or refund.
                            </p>
                        </div>

                    </PolicySection>

                    {/* 3 */}
                    <PolicySection title="3. 24-Hour Cancellation Requests">

                        <p>
                            Certain airline tickets may qualify for cancellation within 24
                            hours of booking, subject to applicable airline rules and the
                            conditions of the reservation.
                        </p>

                        <p>
                            The availability of a 24-hour cancellation or refund option is
                            not universal and may depend on factors such as the airline,
                            itinerary, fare type, departure date, and applicable law.
                        </p>

                        <p>
                            Customers should contact EasyTripsNow promptly after booking if
                            they wish to cancel within this period. We will review the
                            applicable booking conditions and advise whether a cancellation
                            or refund option is available.
                        </p>

                    </PolicySection>

                    {/* 4 */}
                    <PolicySection title="4. Refund Eligibility">

                        <p>
                            A refund is available only when permitted under the applicable
                            airline or travel supplier's rules.
                        </p>

                        <p>
                            Depending on the ticket conditions, an approved refund may be:
                        </p>

                        <PolicyList
                            items={[
                                "A full refund;",
                                "A partial refund;",
                                "A refund after applicable airline penalties or fees;",
                                "A travel credit or voucher; or",
                                "No refund, where the ticket is non-refundable.",
                            ]}
                        />

                        <p>
                            The final refund amount may be different from the original amount
                            paid because applicable airline penalties, fare differences,
                            taxes, service charges, or other eligible deductions may apply.
                        </p>

                        <p>
                            EasyTripsNow cannot guarantee a particular refund amount before
                            the airline or relevant supplier has reviewed the request.
                        </p>

                    </PolicySection>

                    {/* 5 */}
                    <PolicySection title="5. How Refunds Are Processed">

                        <p>
                            Once a cancellation and refund request is received, EasyTripsNow
                            may review the reservation and submit the eligible request to the
                            applicable airline or travel supplier.
                        </p>

                        <p>
                            Where airline approval is required, we must wait for the airline
                            or supplier to process or authorize the refund before the
                            applicable amount can be returned to the customer.
                        </p>

                        <p>
                            The refund process may therefore involve multiple stages,
                            including:
                        </p>

                        <PolicyList
                            items={[
                                "Receiving the customer's cancellation request.",
                                "Reviewing the applicable ticket and fare rules.",
                                "Submitting the eligible request to the airline or supplier.",
                                "Waiting for the airline or supplier to approve and process the refund.",
                                "Processing the approved amount through the applicable payment channel.",
                            ]}
                        />

                        <p>
                            Because airlines and payment providers control different stages
                            of the process, EasyTripsNow cannot guarantee a specific refund
                            timeframe.
                        </p>

                    </PolicySection>

                    {/* 6 */}
                    <PolicySection title="6. Refund Processing Time">

                        <p>
                            Refund processing times vary depending on the airline, travel
                            supplier, payment provider, booking type, and other circumstances.
                        </p>

                        <p>
                            Once an eligible refund has been approved and released by the
                            applicable airline or supplier, additional processing time may be
                            required before the funds appear in the customer's original
                            payment method.
                        </p>

                        <p>
                            Customers should understand that delays caused by an airline,
                            bank, credit-card company, payment processor, or other third
                            party may be outside EasyTripsNow's control.
                        </p>

                        <p>
                            Where the airline provides a specific processing timeframe, that
                            timeframe may apply to the relevant refund.
                        </p>

                    </PolicySection>

                    {/* 7 */}
                    <PolicySection title="7. Service & Booking Fees">

                        <p>
                            Certain bookings may include service, booking, processing,
                            administrative, or other fees charged by EasyTripsNow.
                        </p>

                        <p>
                            Unless otherwise required by applicable law or expressly stated
                            at the time of purchase, these fees are non-refundable even when
                            an airline subsequently approves a refund for the underlying
                            ticket.
                        </p>

                        <p>
                            Airline-imposed penalties, cancellation fees, fare differences,
                            and other supplier charges may also be deducted from the amount
                            eligible for refund.
                        </p>

                    </PolicySection>

                    {/* 8 */}
                    <PolicySection title="8. Airline Cancellations & Schedule Changes">

                        <p>
                            If an airline cancels a flight or makes a significant schedule
                            change, the options available to the customer will depend on the
                            airline's applicable policy.
                        </p>

                        <p>
                            Depending on the circumstances, the airline may offer options
                            such as:
                        </p>

                        <PolicyList
                            items={[
                                "Rebooking on another available flight;",
                                "Travel credit;",
                                "A refund; or",
                                "Another remedy permitted under the airline's policy or applicable law.",
                            ]}
                        />

                        <p>
                            EasyTripsNow can assist customers in communicating with the
                            applicable airline or reviewing the available options. However,
                            the airline or travel supplier generally determines the
                            applicable resolution.
                        </p>

                    </PolicySection>

                    {/* 9 */}
                    <PolicySection title="9. Changes Instead of Cancellation">

                        <p>
                            If you wish to change your travel dates, flight, route, or other
                            booking details instead of cancelling, additional charges may
                            apply.
                        </p>

                        <p>
                            These may include airline change fees, fare differences, taxes,
                            supplier charges, or applicable EasyTripsNow service fees.
                        </p>

                        <p>
                            Some fares may not permit changes. All changes remain subject to
                            availability and the applicable fare conditions.
                        </p>

                    </PolicySection>

                    {/* 10 */}
                    <PolicySection title="10. Non-Refundable Tickets">

                        <p>
                            Some airline tickets are specifically sold as non-refundable.
                        </p>

                        <p>
                            If a non-refundable ticket is cancelled, the customer may not be
                            entitled to a monetary refund. Depending on the airline's rules,
                            a travel credit or other alternative may be available.
                        </p>

                        <p>
                            Any travel credit issued by an airline may have restrictions,
                            expiration dates, name requirements, route limitations, or other
                            conditions established by the airline.
                        </p>

                    </PolicySection>

                    {/* 11 */}
                    <PolicySection title="11. No-Show Policy">

                        <p>
                            If a passenger does not travel and fails to cancel or modify the
                            reservation before departure, the booking may be classified as a
                            no-show by the airline.
                        </p>

                        <p>
                            No-show policies vary by airline and fare type. A no-show may
                            result in the loss of some or all of the ticket value and may
                            affect any remaining segments of the itinerary.
                        </p>

                        <p>
                            Customers who know they cannot travel should contact EasyTripsNow
                            before the scheduled departure time.
                        </p>

                    </PolicySection>

                    {/* 12 */}
                    <PolicySection title="12. Refunds To The Original Payment Method">

                        <p>
                            Where a monetary refund is approved, it will generally be
                            returned to the original form of payment used for the transaction,
                            subject to the applicable airline, supplier, and payment-provider
                            procedures.
                        </p>

                        <p>
                            We may not be able to issue a refund to a different payment
                            method or account unless permitted by the applicable rules.
                        </p>

                    </PolicySection>

                    {/* 13 */}
                    <PolicySection title="13. Important Considerations">

                        <p>
                            Please keep the following in mind:
                        </p>

                        <PolicyList
                            items={[
                                "Submitting a cancellation request does not automatically guarantee a refund.",
                                "Airlines have the authority to determine whether a particular ticket qualifies for a refund under its applicable fare rules.",
                                "Refund amounts may be reduced by applicable penalties, fees, or other charges.",
                                "EasyTripsNow cannot guarantee a particular refund amount or processing time.",
                                "Airline policies and fare conditions may change without prior notice.",
                                "Customers should review their ticket conditions and contact us as early as possible when they need to cancel or change a reservation.",
                            ]}
                        />

                    </PolicySection>

                    {/* 14 */}
                    <PolicySection title="14. Contact Us">

                        <p>
                            If you need to request a cancellation, change, or refund review,
                            please contact EasyTripsNow:
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
                                    href="tel:8557502715"
                                    className="text-[#1687d9] hover:underline font-semibold"
                                >
                                    (855) 750-2715
                                </a>
                            </p>

                        </div>

                        <p className="mt-5">
                            For cancellation requests, customers should contact our support
                            team by phone so that the booking can be verified and the
                            applicable cancellation options can be reviewed.
                        </p>

                    </PolicySection>

                    {/* 15 */}
                    <PolicySection title="15. Updates To This Policy">

                        <p>
                            TravelFirst LLC may update this Cancellation & Refund Policy when
                            necessary to reflect changes in airline policies, our services,
                            business practices, or applicable laws.
                        </p>

                        <p>
                            Any updated version will be posted on EasyTripsNow and will
                            include a revised effective date.
                        </p>

                        <p>
                            By using EasyTripsNow or requesting travel services through us,
                            you acknowledge that cancellations, changes, and refunds are
                            subject to the applicable airline and travel supplier rules.
                        </p>

                    </PolicySection>

                    {/* ================= CALL CTA ================= */}
                    <div className="mt-12 rounded-2xl bg-gradient-to-r from-[#123b7a] to-[#1687d9] p-6 sm:p-8 text-white">

                        <h2 className="text-xl sm:text-2xl font-extrabold">
                            Need Help With a Cancellation or Refund?
                        </h2>

                        <p className="mt-2 text-sm text-white/80 leading-6">
                            Contact our travel support team to review your booking and
                            available options.
                        </p>

                        <a
                            href="tel:8557502715"
                            className="inline-flex mt-5 items-center justify-center
                         rounded-lg bg-white px-6 py-3
                         text-sm font-bold text-[#123b7a]
                         hover:bg-gray-100 transition"
                        >
                            Call(855) 750-2715
                        </a>

                    </div>

                </div>
            </section>

        </main>
    )
}


/* ================= HELPERS ================= */

const PolicySection = ({ title, children }) => {
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


const PolicyList = ({ items }) => {
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


export default CancellationRefund

