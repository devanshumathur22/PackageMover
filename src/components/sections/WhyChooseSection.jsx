"use client";

import { motion } from "framer-motion";

export default function WhyChooseSection() {
  const items = [
    "17+ Years of Experience",
    "500+ Verified Professionals",
    "100+ Fleet Vehicles",
    "All India Network",
    "Transparent Pricing",
    "24/7 Customer Support",
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <motion.div
          initial={{
            opacity: 0,
            clipPath: "inset(100% 0% 0% 0%)",
          }}
          whileInView={{
            opacity: 1,
            clipPath: "inset(0% 0% 0% 0%)",
          }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ once: false }}
        >
          <h2 className="text-4xl font-bold mb-6">
            Why Choose Sakaldeo Relocation?
          </h2>

          <div className="space-y-4">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.15,
                  duration: 0.6,
                }}
                className="flex items-center gap-3"
              >
                <span className="text-green-500">✔</span>
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
            filter: "blur(20px)",
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          }}
          transition={{ duration: 1.2 }}
          viewport={{ once: false }}
        >
          <div className="relative inline-block">
  <img src="/image3.jpg" className="rounded-xl" />

  <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-pink-500/40 to-transparent blur-md"></div>
</div>
        </motion.div>

      </div>
    </section>
  );
}