import React from "react"

const PHONE_NUMBER = "8557502715"
const DISPLAY_PHONE = "(855) 750-2715"

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

function CookiePolicy() {
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
                        Cookie Policy
                    </h1>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                        Learn how EasyTripsNow uses cookies and similar technologies to
                        improve website functionality, user experience, analytics, and
                        marketing activities.
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
                            At EasyTripsNow, operated by TravelFirst LLC, we use cookies and
                            similar technologies to help our website work efficiently,
                            understand how visitors use our website, improve the browsing
                            experience, and support certain marketing and advertising
                            activities.
                        </p>

                        <p className="mt-4 text-[15px] leading-7 text-slate-600 sm:text-base">
                            This Cookie Policy explains what cookies are, why we may use
                            them, the types of cookies that may be placed on your device,
                            and the choices you have regarding their use.
                        </p>

                        <p className="mt-4 text-[15px] leading-7 text-slate-600 sm:text-base">
                            By using EasyTripsNow, you acknowledge that cookies and similar
                            technologies may be used as described in this policy, subject to
                            the choices and controls available to you.
                        </p>
                    </div>

                    <Section number="1" title="What Are Cookies?">
                        <p>
                            Cookies are small text files that may be stored on your computer,
                            smartphone, tablet, or other internet-connected device when you
                            visit a website.
                        </p>

                        <p>
                            Cookies allow a website to recognize your browser or device and
                            remember certain information about your visit. They can be used
                            for purposes such as maintaining website functionality,
                            remembering preferences, analyzing website traffic, and
                            understanding how visitors interact with online content.
                        </p>

                        <p>
                            Some cookies remain only during your browsing session, while
                            others may remain on your device for a longer period or until
                            they expire or are deleted.
                        </p>
                    </Section>

                    <Section number="2" title="Why EasyTripsNow Uses Cookies">
                        <p>EasyTripsNow may use cookies and similar technologies for purposes such as:</p>

                        <BulletList
                            items={[
                                "Helping the website operate properly.",
                                "Maintaining website functionality and security.",
                                "Remembering certain user preferences.",
                                "Understanding how visitors navigate and interact with our website.",
                                "Measuring website traffic and performance.",
                                "Identifying technical problems and improving website functionality.",
                                "Improving website content and user experience.",
                                "Measuring the effectiveness of advertising and marketing campaigns.",
                                "Supporting relevant advertising where applicable.",
                                "Helping prevent fraudulent, unauthorized, or abusive activity.",
                            ]}
                        />

                        <p>
                            The specific cookies and technologies used on EasyTripsNow may
                            change as we update our website, services, technology, or
                            marketing practices.
                        </p>
                    </Section>

                    <Section number="3" title="Types of Cookies We May Use">
                        <h3 className="text-lg font-bold text-slate-800">
                            Essential Cookies
                        </h3>

                        <p>
                            Essential cookies are necessary for certain website functions
                            to operate properly.
                        </p>

                        <p>
                            They may support basic functionality, security, session
                            management, form functionality, or other features required for
                            the website to operate.
                        </p>

                        <p>
                            Because these cookies may be necessary for the website to
                            function, disabling them may cause certain features to become
                            unavailable or operate incorrectly.
                        </p>

                        <h3 className="pt-3 text-lg font-bold text-slate-800">
                            Functional Cookies
                        </h3>

                        <p>
                            Functional cookies allow the website to remember certain
                            choices or preferences made during your visit.
                        </p>

                        <p>
                            These cookies may help provide a more convenient browsing
                            experience by reducing the need to repeatedly enter or select
                            the same information.
                        </p>

                        <h3 className="pt-3 text-lg font-bold text-slate-800">
                            Analytics and Performance Cookies
                        </h3>

                        <p>
                            Analytics cookies help us understand how visitors use
                            EasyTripsNow.
                        </p>

                        <p>
                            They may collect information such as the pages visitors view,
                            how visitors navigate the website, approximate time spent on
                            pages, browser or device information, and general website
                            interaction data.
                        </p>

                        <p>
                            We may use this information to understand website performance,
                            identify areas for improvement, and make our website more useful
                            and easier to navigate.
                        </p>

                        <p>
                            Where appropriate, analytics information may be aggregated or
                            otherwise used in a manner designed to reduce direct
                            identification of individual visitors.
                        </p>

                        <h3 className="pt-3 text-lg font-bold text-slate-800">
                            Advertising and Marketing Cookies
                        </h3>

                        <p>
                            Where applicable, EasyTripsNow may use cookies or similar
                            tracking technologies to understand the effectiveness of
                            advertising campaigns, measure interactions with advertisements,
                            and support marketing activities.
                        </p>

                        <p>
                            These technologies may allow us or our advertising partners to
                            understand whether a visitor has interacted with an
                            advertisement or visited our website after seeing an
                            advertisement.
                        </p>

                        <p>
                            Third-party advertising providers may have their own privacy
                            policies and practices governing information collected through
                            these technologies.
                        </p>
                    </Section>

                    <Section number="4" title="Third-Party Cookies">
                        <p>
                            Some cookies or similar technologies used on EasyTripsNow may be
                            placed by third-party service providers.
                        </p>

                        <p>Third-party providers may assist us with functions such as:</p>

                        <BulletList
                            items={[
                                "Website analytics",
                                "Advertising and campaign measurement",
                                "Website performance",
                                "Security",
                                "Embedded content",
                                "Other website-related services",
                            ]}
                        />

                        <p>
                            These third parties may collect information through their own
                            technologies and may process that information according to their
                            respective privacy policies.
                        </p>

                        <p>
                            EasyTripsNow does not control the privacy practices of
                            independent third-party providers. We encourage you to review
                            the applicable privacy policies of third-party services when you
                            interact with their technologies.
                        </p>
                    </Section>

                    <Section number="5" title="Session & Persistent Cookies">
                        <p>
                            Cookies can generally be divided into two categories based on
                            how long they remain on your device.
                        </p>

                        <div className="rounded-xl bg-slate-50 p-5 ring-1 ring-slate-200">
                            <p>
                                <strong className="text-slate-800">Session Cookies:</strong>{" "}
                                These cookies are temporary and generally expire when you
                                close your browser. They may be used to support navigation
                                and basic website functionality during your visit.
                            </p>

                            <p className="mt-4">
                                <strong className="text-slate-800">
                                    Persistent Cookies:
                                </strong>{" "}
                                These cookies remain on your device for a specific period or
                                until you delete them. They may be used to remember
                                preferences, analyze repeat visits, or support certain
                                marketing and advertising functions.
                            </p>
                        </div>

                        <p>
                            The duration of a persistent cookie can vary depending on its
                            purpose and the provider responsible for placing it.
                        </p>
                    </Section>

                    <Section number="6" title="Managing Your Cookie Preferences">
                        <p>You have options for controlling cookies on your device.</p>

                        <p>Most internet browsers allow you to manage cookie settings, including the ability to:</p>

                        <BulletList
                            items={[
                                "View cookies stored on your device.",
                                "Delete existing cookies.",
                                "Block certain or all cookies.",
                                "Allow cookies only from selected websites.",
                                "Receive notifications before cookies are placed on your device.",
                            ]}
                        />

                        <p>
                            Where a cookie preference or consent tool is available on
                            EasyTripsNow, you may also be able to manage certain categories
                            of cookies through that tool.
                        </p>

                        <p>
                            Please remember that disabling or blocking certain cookies may
                            affect the way some features of our website operate.
                        </p>
                    </Section>

                    <Section number="7" title="Browser & Device Controls">
                        <p>
                            You can generally adjust your browser's privacy settings to
                            limit or block cookies. The exact steps vary depending on the
                            browser and device you use.
                        </p>

                        <p>
                            You may also have controls through your device or operating
                            system that allow you to limit certain forms of tracking or
                            personalized advertising.
                        </p>

                        <p>
                            If you delete cookies, change browsers, or use a different
                            device, your cookie preferences may need to be selected again.
                        </p>
                    </Section>

                    <Section number="8" title="Do Not Track & Similar Signals">
                        <p>
                            Some browsers and devices provide “Do Not Track” or similar
                            privacy settings.
                        </p>

                        <p>
                            Because there is not one universally adopted technical standard
                            for responding to these signals, EasyTripsNow may not respond
                            to every browser-based Do Not Track signal in the same way.
                        </p>

                        <p>
                            Your privacy choices may also vary depending on your location
                            and applicable privacy laws.
                        </p>
                    </Section>

                    <Section number="9" title="Cookies & Personal Information">
                        <p>
                            Cookies may collect information about your device, browser,
                            website activity, and interactions with EasyTripsNow.
                        </p>

                        <p>
                            In certain circumstances, information collected through cookies
                            or similar technologies may be associated with information you
                            provide directly to us, such as your name, email address, phone
                            number, or travel inquiry information.
                        </p>

                        <p>
                            Our broader practices concerning the collection, use, and
                            protection of personal information are explained in our Privacy
                            Policy.
                        </p>
                    </Section>

                    <Section number="10" title="Third-Party Websites">
                        <p>
                            EasyTripsNow may contain links to websites or services operated
                            by third parties.
                        </p>

                        <p>
                            If you leave EasyTripsNow and visit a third-party website, that
                            website may use its own cookies, tracking technologies, and
                            privacy practices.
                        </p>

                        <p>
                            TravelFirst LLC does not control how third-party websites use
                            cookies or other technologies. We recommend reviewing their
                            privacy policies before providing personal information or
                            continuing to use their services.
                        </p>
                    </Section>

                    <Section number="11" title="Security">
                        <p>
                            We take reasonable measures to protect information collected
                            through our website.
                        </p>

                        <p>
                            However, no website, internet transmission, electronic storage
                            system, or tracking technology can be guaranteed to be
                            completely secure.
                        </p>

                        <p>
                            You should also take appropriate steps to protect your device,
                            browser, and account information when using the internet.
                        </p>
                    </Section>

                    <Section number="12" title="Children's Privacy">
                        <p>
                            EasyTripsNow is intended for a general audience and is not
                            designed to knowingly collect personal information from
                            children under 13.
                        </p>

                        <p>
                            If we become aware that personal information has been collected
                            from a child under 13 in circumstances where applicable law
                            requires parental consent, we will take appropriate steps to
                            address the situation.
                        </p>
                    </Section>

                    <Section number="13" title="Changes To This Cookie Policy">
                        <p>
                            TravelFirst LLC may update this Cookie Policy from time to time
                            to reflect changes in our website, technology, services,
                            third-party providers, advertising practices, or applicable
                            legal requirements.
                        </p>

                        <p>
                            Any updated version will be published on EasyTripsNow. We
                            encourage visitors to review this policy periodically to stay
                            informed about how cookies and similar technologies may be used.
                        </p>
                    </Section>

                    <Section number="14" title="Contact Us">
                        <p>
                            If you have questions about this Cookie Policy or how cookies
                            are used on EasyTripsNow, please contact us:
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
                            We value your privacy and aim to provide clear information about
                            the technologies used to support your experience on EasyTripsNow.
                        </p>
                    </Section>

                    {/* CTA */}
                    <div className="mt-12 rounded-2xl bg-slate-950 px-6 py-8 text-center sm:px-10">
                        <h3 className="text-2xl font-bold text-white">
                            Need Help With Your Trip?
                        </h3>

                        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-300">
                            Our travel experts are here to help you with your travel plans.
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

export default CookiePolicy