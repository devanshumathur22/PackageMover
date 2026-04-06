"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Hero() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Category");

  const options = [
    "Household Shifting",
    "Office/Commercial Shifting",
    "Car Shifting",
    "Bike Shifting",
  ];

  return (
    <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

      {/* LEFT CONTENT */}
      <div>

        <p className="text-pink-500 font-semibold mb-3">
          SAFE & RELIABLE MOVING SERVICES
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
          Professional Packers and Movers in Ranchi, Hazaribagh,
          Dhanbad, Deoghar, Koderma & Giridih
        </h1>

        <p className="text-slate-600 mt-4">
          We handle your belongings with utmost care, ensuring a seamless and
          stress-free relocation experience. From packing to transportation,
          our expert team guarantees safety and reliability.
        </p>

        <button className="mt-6 px-6 py-3 bg-pink-500 text-white rounded-xl hover:scale-105 transition">
          Explore More
        </button>

      </div>

      {/* RIGHT FORM */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="p-6 rounded-2xl border border-slate-200 shadow-xl bg-white"
      >
        <h3 className="text-lg font-semibold mb-4">
          Request a Quote
        </h3>

        <div className="grid grid-cols-2 gap-4">

          <input
            placeholder="Name *"
            className="p-3 rounded-xl border border-slate-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none text-sm"
          />

          <input
            placeholder="Email"
            className="p-3 rounded-xl border border-slate-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none text-sm"
          />

          <input
            placeholder="Phone *"
            className="p-3 rounded-xl border border-slate-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none text-sm"
          />

          {/* 🔥 CUSTOM DROPDOWN */}
          <div className="relative">

            <div
              onClick={() => setOpen(!open)}
              className="p-3 rounded-xl border border-slate-200 cursor-pointer flex justify-between items-center text-sm"
            >
              {selected}
              <span>⌄</span>
            </div>

            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute w-full mt-2 bg-white border border-slate-200 rounded-xl shadow-lg z-50"
                >

                  {options.map((item, i) => (
                    <div
                      key={i}
                      onClick={() => {
                        setSelected(item);
                        setOpen(false);
                      }}
                      className="px-4 py-3 hover:bg-pink-50 cursor-pointer text-slate-700"
                    >
                      {item}
                    </div>
                  ))}

                </motion.div>
              )}
            </AnimatePresence>

          </div>

          <input
            placeholder="Moving From *"
            className="p-3 rounded-xl border border-slate-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none text-sm"
          />

          <input
            placeholder="Moving To *"
            className="p-3 rounded-xl border border-slate-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none text-sm"
          />

        </div>

        <textarea
          rows={4}
          placeholder="Item Details *"
          className="mt-4 w-full p-3 rounded-xl border border-slate-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none text-sm"
        />

        <button className="mt-4 w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:scale-105 transition">
          Request Quote
        </button>
      </motion.div>

    </section>
  );
}