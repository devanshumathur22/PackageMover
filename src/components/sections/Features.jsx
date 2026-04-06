"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Sparkles,
  Zap,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Safe & Secure Handling",
    desc: "We treat your belongings with utmost care, ensuring they remain damage-free throughout the move.",
  },
  {
    icon: Sparkles,
    title: "Hassle-Free Relocation",
    desc: "From expert packing to smooth transportation, we take care of every step for a stress-free experience.",
  },
  {
    icon: Zap,
    title: "Reliable & Efficient Service",
    desc: "Our experienced team guarantees timely and efficient delivery, making your move seamless.",
  },
  {
    icon: BadgeCheck,
    title: "Affordable & Satisfaction First",
    desc: "We provide the best moving solutions tailored to your needs and budget.",
  },
];

export default function Features() {
  return (
    <section className="px-6 md:px-12 py-28 max-w-7xl mx-auto">

      {/* HEADING */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
          Why <span className="text-pink-500">Choose Us</span>
        </h2>

        <p className="text-slate-600">
          When it comes to relocating your home, office, or vehicle, choosing the right moving partner matters.
        </p>
      </div>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {features.map((item, i) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative group cursor-pointer"
            >

              {/* CARD */}
              <div className="h-full p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-xl transition duration-300">

                {/* ICON */}
                <div className="w-14 h-14 rounded-xl bg-pink-500/10 flex items-center justify-center mb-5 group-hover:scale-110 transition">
                  <Icon className="text-pink-500" />
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>

                {/* HOVER BORDER */}
                <div className="absolute inset-0 rounded-2xl border border-pink-500 opacity-0 group-hover:opacity-100 transition"></div>
              </div>

              {/* GLOW */}
              <div className="absolute inset-0 bg-pink-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition pointer-events-none"></div>
            </motion.div>
          );
        })}

      </div>
    </section>
  );
}