"use client";

import { motion } from "framer-motion";

export default function ContactCTA() {
  return (
    <section className="relative py-28 px-6 md:px-12 bg-slate-950 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-purple-500/10"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* 🔥 FLOATING CONTACT CARDS */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">

          {/* RANCHI */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 text-white"
          >
            <h3 className="text-xl font-semibold mb-3 text-pink-500">
              Ranchi
            </h3>

            <p className="text-slate-300 text-sm mb-2">📞 +91 9031470777</p>
            <p className="text-slate-300 text-sm mb-2">
              ✉️ info@sakaldeorelocation.com
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Timber Gali, Bhittha, Behind Indian Petrol Pump, Kanke Road  
              Near Holiday Home, Near C4S Course Office, Ranchi, Jharkhand 834006
            </p>
          </motion.div>

          {/* DEOGHAR */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 text-white"
          >
            <h3 className="text-xl font-semibold mb-3 text-pink-500">
              Deoghar
            </h3>

            <p className="text-slate-300 text-sm mb-2">
              📞 99393 00224, 86515 16820
            </p>
            <p className="text-slate-300 text-sm mb-2">
              ✉️ sachinmahtha1998@gmail.com
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Nandan Pahar Road, Barmasiya (Deoghar - Jharkhand)
            </p>
          </motion.div>
        </div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-white"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Schedule Your{" "}
              <span className="text-pink-500">Appointment</span> Today
            </h2>

            <p className="text-slate-400 leading-relaxed">
              Need{" "}
              <span className="text-white font-semibold">
                packers and movers in ranchi and near you?
              </span>{" "}
              We offer fast, affordable, and reliable relocation services.
              From packing to delivery, we handle it all with care.
              <span className="text-white font-semibold">
                {" "}Schedule your appointment today{" "}
              </span>
              and move stress-free. Call now for a free quote!
            </p>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 80, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            className="relative"
          >
            <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">

              <h3 className="text-white text-xl font-semibold mb-6">
                Quick Booking
              </h3>

              <form className="space-y-4">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:border-pink-500 focus:outline-none transition"
                />

                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:border-pink-500 focus:outline-none transition"
                />

                <input
                  type="date"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-pink-500 focus:outline-none transition"
                />

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-pink-500 text-white font-medium hover:shadow-[0_0_25px_rgba(236,72,153,0.6)] transition"
                >
                  Book Now →
                </button>
              </form>
            </div>

            {/* GLOW */}
            <div className="absolute inset-0 bg-pink-500/20 blur-3xl opacity-30 rounded-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}