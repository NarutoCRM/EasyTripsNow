const PrivacyPolicy = () => {
  return (
    <main className="bg-white">

      {/* ================= PAGE HEADER ================= */}
      <section className="bg-gradient-to-r from-[#062b5c] to-[#1687d9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
          <p className="text-sm font-semibold text-white/70 mb-2">
            EasyTripsNow
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Privacy Policy
          </h1>

          <p className="mt-3 text-sm text-white/80">
            Effective Date: September 7, 2026
          </p>
        </div>
      </section>

      {/* ================= POLICY CONTENT ================= */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">

          {/* Intro */}
          <div className="space-y-5 text-gray-600 text-sm sm:text-base leading-7">

            <p>
              At EasyTripsNow, your privacy matters to us. This Privacy Policy
              explains how TravelFirst LLC (“TravelFirst LLC,” “EasyTripsNow,”
              “we,” “us,” or “our”) collects, uses, shares, and protects
              information when you visit or use our website, contact us,
              request travel information, or use our flight search and
              booking-related services.
            </p>

            <p>
              By accessing or using EasyTripsNow, you acknowledge that you have
              read and understood this Privacy Policy. If you do not agree with
              the practices described here, please discontinue use of our
              website.
            </p>

          </div>

          {/* ================= 1 ================= */}
          <PolicySection title="1. Information We Collect">

            <p>
              We may collect information that you voluntarily provide when you
              interact with EasyTripsNow. Depending on how you use our website
              or communicate with us, this may include:
            </p>

            <PolicyList
              items={[
                "Full name",
                "Email address",
                "Phone number",
                "Travel dates and preferences",
                "Departure and destination information",
                "Passenger or traveler details necessary for a booking",
                "Billing or payment-related information when applicable",
                "Information provided through forms, inquiries, or customer communications",
              ]}
            />

            <p>
              We may also automatically collect certain technical information
              when you visit our website. This can include your IP address,
              browser type, device information, operating system, pages viewed,
              referring website, approximate location, and information about
              how you interact with our website.
            </p>

            <p>
              We do not intentionally request sensitive personal information
              unless it is reasonably necessary to provide a requested
              travel-related service.
            </p>

          </PolicySection>

          {/* ================= 2 ================= */}
          <PolicySection title="2. How We Use Your Information">

            <p>
              TravelFirst LLC may use the information we collect for legitimate
              business and service-related purposes, including:
            </p>

            <PolicyList
              items={[
                "Responding to your inquiries and requests",
                "Providing flight search and travel assistance",
                "Processing or facilitating requested bookings",
                "Communicating with you about your travel request",
                "Confirming or updating booking-related information",
                "Providing customer support",
                "Improving our website, services, and user experience",
                "Understanding website usage and visitor preferences",
                "Detecting, preventing, and addressing fraud, misuse, or security issues",
                "Maintaining business and transaction records",
                "Complying with applicable laws and legal obligations",
                "Sending promotional or informational communications where permitted and appropriate",
              ]}
            />

            <p>
              We may also use aggregated or de-identified information for
              analytics, reporting, and business improvement. Such information
              is not intended to identify individual users.
            </p>

          </PolicySection>

          {/* ================= 3 ================= */}
          <PolicySection title="3. Information Sharing & Disclosure">

            <p>
              We do not sell your personal information simply because you visit
              or use EasyTripsNow.
            </p>

            <p>
              However, we may share information when reasonably necessary to
              provide our services or operate our business. This may include
              sharing relevant information with:
            </p>

            <PolicySubsection title="Travel suppliers and service providers:">
              If you request a flight search, booking, or related travel
              assistance, certain information may need to be shared with
              airlines, travel suppliers, reservation systems, payment
              processors, or other service providers involved in fulfilling
              your request.
            </PolicySubsection>

            <PolicySubsection title="Service providers:">
              We may work with third-party companies that assist with website
              hosting, analytics, technology, customer support, communications,
              payment processing, fraud prevention, or other business
              functions. These providers may access information only as
              necessary to perform services on our behalf.
            </PolicySubsection>

            <PolicySubsection title="Legal and regulatory authorities:">
              We may disclose information when required by law, legal process,
              court order, government request, or when we reasonably believe
              disclosure is necessary to protect our rights, users, property,
              or safety.
            </PolicySubsection>

            <PolicySubsection title="Business transactions:">
              If TravelFirst LLC is involved in a merger, acquisition,
              restructuring, financing, sale of assets, or similar business
              transaction, personal information may be transferred as part of
              that transaction, subject to applicable legal requirements.
            </PolicySubsection>

          </PolicySection>

          {/* ================= 4 ================= */}
          <PolicySection title="4. Cookies & Similar Technologies">

            <p>
              EasyTripsNow may use cookies, pixels, tags, analytics tools, and
              similar technologies to help the website function properly and
              understand how visitors use our website.
            </p>

            <p>
              Cookies may allow us to remember certain preferences, measure
              website performance, analyze traffic, improve functionality, and
              support relevant advertising or marketing activities.
            </p>

            <p>
              You can generally adjust your browser settings to reject or
              delete cookies. However, disabling certain cookies may affect
              some website functionality.
            </p>

            <p>
              For additional information about our use of cookies, please refer
              to our Cookie Policy.
            </p>

          </PolicySection>

          {/* ================= 5 ================= */}
          <PolicySection title="5. Third-Party Websites & Services">

            <p>
              Our website may contain links, integrations, advertisements, or
              references to third-party websites and services. These third
              parties may have their own privacy policies and information
              practices.
            </p>

            <p>
              TravelFirst LLC does not control the privacy practices of
              independent third-party websites. We encourage you to review the
              privacy policy of any external website before providing personal
              information.
            </p>

          </PolicySection>

          {/* ================= 6 ================= */}
          <PolicySection title="6. Data Security">

            <p>
              We take reasonable administrative, technical, and organizational
              measures designed to protect personal information against
              unauthorized access, disclosure, alteration, misuse, or
              destruction.
            </p>

            <p>
              However, no website, online transmission, storage system, or
              electronic communication can be guaranteed to be completely
              secure. Therefore, while we work to protect your information, we
              cannot guarantee absolute security.
            </p>

          </PolicySection>

          {/* ================= 7 ================= */}
          <PolicySection title="7. Data Retention">

            <p>
              We retain personal information for as long as reasonably
              necessary to provide requested services, maintain business and
              transaction records, resolve disputes, comply with legal and
              regulatory obligations, enforce agreements, and protect our
              legitimate business interests.
            </p>

            <p>
              The length of time information is retained may vary depending on
              the nature of the information and the purpose for which it was
              collected.
            </p>

          </PolicySection>

          {/* ================= 8 ================= */}
          <PolicySection title="8. Your Privacy Choices">

            <p>
              Depending on applicable law, you may have certain rights
              concerning your personal information. These may include the right
              to request access to certain information we hold about you,
              request correction of inaccurate information, request deletion
              of certain information, or opt out of certain marketing
              communications.
            </p>

            <p>
              If you receive promotional emails from us, you may unsubscribe by
              following the instructions included in the communication. Please
              note that even if you opt out of promotional messages, we may
              still send necessary service-related communications regarding
              inquiries, transactions, bookings, or other interactions with
              you.
            </p>

            <p>
              To submit a privacy-related request, contact us using the
              information provided below. We may need to verify your identity
              before completing certain requests.
            </p>

          </PolicySection>

          {/* ================= 9 ================= */}
          <PolicySection title="9. Children's Privacy">

            <p>
              EasyTripsNow is not intended to knowingly collect personal
              information directly from children under the age of 13. We
              encourage parents and guardians to supervise children's use of
              online services.
            </p>

            <p>
              If you believe that a child has provided personal information to
              us without appropriate parental or guardian involvement, please
              contact us so that we can review the situation and take
              appropriate action.
            </p>

          </PolicySection>

          {/* ================= 10 ================= */}
          <PolicySection title="10. International Users">

            <p>
              EasyTripsNow primarily serves customers in the United States.
              However, visitors may access our website from other countries. If
              you access our website from outside the United States, you
              understand that information you provide may be processed or
              stored in the United States or other locations where our service
              providers operate.
            </p>

            <p>
              Privacy rights and protections may vary depending on your
              location and applicable law.
            </p>

          </PolicySection>

          {/* ================= 11 ================= */}
          <PolicySection title="11. Changes to This Privacy Policy">

            <p>
              We may update this Privacy Policy periodically to reflect changes
              in our business practices, website functionality, legal
              requirements, or privacy practices.
            </p>

            <p>
              When we make changes, we will update the “Effective Date” at the
              top of this policy. We encourage you to review this page from
              time to time to remain informed about how we handle personal
              information.
            </p>

          </PolicySection>

          {/* ================= 12 ================= */}
          <PolicySection title="12. Contact Us">

            <p>
              If you have questions, concerns, or requests regarding this
              Privacy Policy or how your information is handled, please contact
              TravelFirst LLC:
            </p>

            <div className="mt-5 rounded-xl bg-[#f5f9fd] border border-gray-200 p-5 space-y-3 text-sm">

              <p>
                <strong className="text-[#123b7a]">Address:</strong>{" "}
                FIVE GREENTREE CENTRE, 525 ROUTE 73 NORTH STE 104 MARLTON,
                NEW JERSEY 08053-0805 United States
              </p>

              <p>
                <strong className="text-[#123b7a]">Email:</strong>{" "}
                <a
                  href="mailto:contact@easytripsnow.com"
                  className="text-[#1687d9] hover:underline"
                >
                  contact@easytripsnow.com
                </a>
              </p>

              <p>
                <strong className="text-[#123b7a]">Phone:</strong>{" "}
                [TFN]
              </p>

            </div>

          </PolicySection>

          {/* Closing */}
          <div className="mt-10 rounded-2xl bg-gradient-to-r from-[#123b7a] to-[#1687d9] p-6 sm:p-8 text-white">

            <p className="text-sm sm:text-base leading-7">
              We value your trust and are committed to handling your
              information responsibly while providing a convenient and reliable
              experience through EasyTripsNow.
            </p>

          </div>

        </div>
      </section>

    </main>
  )
}


/* ================= HELPERS ================= */

const PolicySection = ({ title, children }) => {
  return (
    <section className="mt-10 first:mt-0">

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
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}


const PolicySubsection = ({ title, children }) => {
  return (
    <p>
      <strong className="text-gray-700">
        {title}
      </strong>{" "}
      {children}
    </p>
  )
}


export default PrivacyPolicy
