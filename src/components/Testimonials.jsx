const testimonials = [
  {
    quote:
      "I found a great flight option for my trip to Dubai. The agent was patient, helpful, and answered all my questions.",
    name: "Michael T.",
    location: "California, USA",
  },
  {
    quote:
      "Great experience from start to finish. The booking process was simple, and getting help when I needed it made a big difference.",
    name: "Sarah L.",
    location: "Florida, USA",
  },
  {
    quote:
      "EasyTripsNow made finding my flight so much easier. The options were clear, and the support was incredibly helpful.",
    name: "Jessica R.",
    location: "New York, USA",
  },
]

const Testimonials = () => {
  return (
    <section className="py-16 bg-[#f8fbff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-9">
          <h2 className="text-3xl font-extrabold text-[#123b7a]">
            What Our Travelers Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-2xl border border-gray-200 p-6"
            >
              <div className="text-yellow-500 text-sm mb-4">★★★★★</div>

              <p className="text-sm text-gray-600 leading-6">
                “{item.quote}”
              </p>

              <div className="mt-5">
                <p className="font-bold text-[#123b7a]">— {item.name}</p>
                <p className="text-xs text-gray-400 mt-1">
                  {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials