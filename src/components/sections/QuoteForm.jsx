"use client";

export default function QuoteForm() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl font-bold mb-6">
            Key Services & Reasons
          </h2>

          <p className="text-gray-600 mb-4">
            We operate from <b>Ranchi and Deoghar, Jharkhand</b>, providing top-notch relocation services across India and abroad with complete safety and efficiency.
          </p>

          <p className="text-gray-600 mb-6">
            With an extensive fleet of <b>1500+ vehicles</b>, we ensure seamless transportation for your home and office shifting needs.
          </p>

          {/* POINTS */}
          <div className="space-y-4">
            {[
              "Home & Office Shifting – Smooth and hassle-free relocation",
              "Safe Packing & Loading – Expert handling of fragile items",
              "Local & Nationwide Moving – Available across India",
              "Affordable & Reliable – Transparent pricing",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="w-3 h-3 mt-2 rounded-full bg-pink-500"></span>
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white p-8 rounded-2xl shadow-md border">

          <h3 className="text-2xl font-semibold mb-6">
            Get a Free Quote
          </h3>

          <form className="space-y-5">

            {/* Name */}
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-pink-500"
            />

            {/* Phone */}
            <input
              type="tel"
              placeholder="Mobile Number"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-pink-500"
            />

            {/* Message */}
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-pink-500"
            ></textarea>

            {/* Button */}
            <button className="w-full py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition">
              Book Now
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}