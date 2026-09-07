import { useState } from "react"

const PHONE = "8557502715"
const DISPLAY_PHONE = "(855) 750-2715"
const EMAIL = "contact@easytripsnow.com"

export default function ContactUs() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        description: "",
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const subject = encodeURIComponent(
            `Contact Request from ${form.name}`
        )

        const body = encodeURIComponent(
            `Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}

Message:
${form.description}`
        )

        window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
    }

    return (
        <section className="bg-white">

            {/* Hero */}
            <div
                className="relative flex h-[230px] items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: "url('/hero-plane.jpg')" }}
            >
                <div className="absolute inset-0 bg-black/55"></div>

                <h1 className="relative z-10 px-4 text-center text-4xl font-bold text-white sm:text-5xl">
                    Contact Us
                </h1>
            </div>

            {/* Contact Content */}
            <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">

                    {/* Left Side */}
                    <div>
                        <p className="max-w-2xl text-lg leading-8 text-slate-700">
                            Contact us at the following address to express your concerns,
                            ask questions, or provide feedback regarding our services.
                            Our team is here to help with your travel-related queries
                            and requests.
                        </p>

                        <h2 className="mt-8 text-3xl font-bold text-slate-900">
                            Address
                        </h2>

                        <div className="mt-6 space-y-6">

                            {/* Address */}
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-300 text-2xl">
                                    📍
                                </div>

                                <div className="pt-2 text-base leading-6 text-slate-700">
                                    FIVE GREENTREE CENTRE,
                                    <br />
                                    525 ROUTE 73 NORTH STE 104
                                    <br />
                                    MARLTON, NEW JERSEY 08053-0805
                                    <br />
                                    United States
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-300 text-xl">
                                    ✉
                                </div>

                                <a
                                    href={`mailto:${EMAIL}`}
                                    className="text-base text-slate-700 transition hover:text-blue-600"
                                >
                                    {EMAIL}
                                </a>
                            </div>

                            {/* Phone */}
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-300 text-xl">
                                    ☎
                                </div>

                                <a
                                    href={`tel:${PHONE}`}
                                    className="text-xl font-bold text-blue-600 transition hover:text-blue-700"
                                >
                                    {DISPLAY_PHONE}
                                </a>
                            </div>

                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900">
                            Get in touch with us!
                        </h2>

                        <p className="mt-2 text-lg text-slate-700">
                            In case of any questions, queries, or last-minute requests.
                        </p>

                        <form onSubmit={handleSubmit} className="mt-6 space-y-3">

                            {/* Name */}
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="*Name"
                                required
                                className="h-12 w-full rounded-md border border-slate-300 px-4 text-base text-slate-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                            />

                            {/* Email */}
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="*Email"
                                required
                                className="h-12 w-full rounded-md border border-slate-300 px-4 text-base text-slate-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                            />

                            {/* Phone */}
                            <input
                                type="tel"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                placeholder="*Phone"
                                required
                                className="h-12 w-full rounded-md border border-slate-300 px-4 text-base text-slate-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                            />

                            {/* Description */}
                            <textarea
                                name="description"
                                value={form.description}
                                onChange={handleChange}
                                placeholder="Description"
                                rows="5"
                                className="w-full resize-y rounded-md border border-slate-300 px-4 py-3 text-base text-slate-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                            ></textarea>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="h-12 w-full rounded-md bg-gradient-to-r from-teal-500 to-slate-800 text-base font-bold text-white transition hover:opacity-90"
                            >
                                Submit
                            </button>

                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}
