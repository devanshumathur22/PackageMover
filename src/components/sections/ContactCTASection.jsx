"use client";

export default function ContactCTASection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Get Your <span className="text-pink-500">Free Quote</span> Today 🚚
          </h2>

          <p className="text-gray-400 mb-6">
            Fast, reliable and affordable moving services across India.
            Get instant pricing and hassle-free relocation.
          </p>

          <div className="flex items-center gap-3 text-lg">
            <span className="text-pink-500 font-semibold">
              📞 +91 99393 00224
            </span>
          </div>
        </div>

        {/* FORM CARD */}
        <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20 shadow-xl">

          <form className="space-y-5">

            {/* Name */}
            <div>
              <label className="text-sm text-gray-300">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full mt-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:outline-none focus:border-pink-500"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-sm text-gray-300">Mobile Number</label>
              <input
                type="tel"
                placeholder="Enter your number"
                className="w-full mt-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:outline-none focus:border-pink-500"
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-sm text-gray-300">Message</label>
              <textarea
                rows="4"
                placeholder="Enter details..."
                className="w-full mt-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:outline-none focus:border-pink-500"
              ></textarea>
            </div>

            {/* Button */}
            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 hover:scale-105 transition font-semibold">
              Book Now
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}