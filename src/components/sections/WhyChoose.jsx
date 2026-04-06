"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function WhyChoose() {
  const ref = useRef(null);

  // scroll parallax (safe)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // smoother values
  const yImage = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div ref={ref} className="relative">

      <section className="px-6 md:px-12 py-24 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT TEXT */}
        <motion.div style={{ y: yText }}>

          <p className="text-pink-500 font-semibold mb-3 tracking-wide">
            WHO WE ARE
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
            We Have{" "}
            <span className="text-pink-500">15 Years</span> of Experience
          </h2>

          <p className="text-slate-800 font-medium mb-4">
            🚚{" "}
            <span className="text-slate-900 font-semibold">
              Best Packing and Moving Services
            </span>{" "}
            in Ranchi, Jharkhand
          </p>

          <p className="text-slate-600 leading-relaxed mb-6">
            Looking for{" "}
            <span className="font-semibold text-slate-900">
              trusted packers and movers
            </span>{" "}
            in Ranchi, Deoghar, Koderma, and Giridih?{" "}
            <span className="font-semibold text-slate-900">
              Sakaldeo Relocation Packers & Movers
            </span>{" "}
            provides hassle-free{" "}
            <span className="font-medium text-slate-800">
              household shifting, office relocation, vehicle transportation
            </span>
            , and local shifting services.
          </p>

          {/* POINTS */}
          <div className="space-y-4">
            {[
              {
                title: "Safe & Secure Handling",
                desc: "We treat your belongings with utmost care ensuring damage-free moving.",
              },
              {
                title: "Hassle-Free Relocation",
                desc: "From packing to transport, we handle everything smoothly.",
              },
              {
                title: "Reliable & Efficient Service",
                desc: "Timely delivery with professional team support.",
              },
              {
                title: "Customer Satisfaction First",
                desc: "We provide tailored solutions for your needs.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 6 }}
                className="flex items-start gap-3 cursor-pointer"
              >
                <div className="w-3 h-3 mt-2 rounded-full bg-pink-500"></div>

                <p className="text-slate-600">
                  <span className="font-semibold text-slate-900">
                    {item.title}
                  </span>{" "}
                  — {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          style={{ y: yImage }}
          className="relative group"
        >
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl">
            <img
              src="/image1.jpg"
              alt="about"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
            />
          </div>

          {/* subtle accent */}
          <div className="absolute -bottom-5 -right-5 w-full h-full border border-pink-200 rounded-2xl -z-10"></div>
        </motion.div>

      </section>

    </div>
  );
}