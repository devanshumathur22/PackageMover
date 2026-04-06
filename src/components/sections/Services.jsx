"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Home,
  Building2,
  Car,
  Truck,
  Package,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Home Relocation",
    short:
      "Smooth home shifting with safe handling of your belongings.",
    full:
      "We ensure a smooth home goods move, handling your belongings with utmost care from packing, loading, transportation to unpacking. Our team focuses on making your relocation stress-free, safe, and efficient.",
  },
  {
    icon: Building2,
    title: "Office Relocation",
    short:
      "Efficient office shifting with minimal downtime.",
    full:
      "Our efficient office relocation service minimizes downtime and ensures a seamless transition. We handle IT equipment, furniture, and files professionally.",
  },
  {
    icon: Car,
    title: "Car Transportation",
    short:
      "Safe vehicle transport with zero damage guarantee.",
    full:
      "We provide secure car transport using specialized carriers. Your vehicle is delivered safely, on time, with tracking and professional handling.",
  },
  {
    icon: Truck,
    title: "Courier & Cargo Services",
    short:
      "Fast and reliable delivery for all package sizes.",
    full:
      "We offer fast courier and cargo services with secure packaging, on-time delivery, and real-time tracking for all shipments.",
  },
  {
    icon: Package,
    title: "Luggage Delivery",
    short:
      "Hassle-free luggage pickup and delivery.",
    full:
      "We pick up your luggage and deliver it safely to your destination, saving you effort and ensuring convenience.",
  },
  {
    icon: ShieldCheck,
    title: "Goods Insurance",
    short:
      "Complete protection for your valuable items.",
    full:
      "We provide full insurance coverage for your goods during transit to protect against damage, loss, or theft.",
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="relative px-6 md:px-12 py-24 bg-slate-900 text-white">

      {/* HEADING */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Best Packers & Movers Services
        </h2>
        <p className="text-slate-400">
          We specialize in hassle-free packing, safe transportation, and efficient delivery.
        </p>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((item, i) => {
          const Icon = item.icon;
          const isOpen = openIndex === i;

          return (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="relative group"
            >
              <div className="p-6 rounded-2xl border border-white/10 backdrop-blur-xl bg-white/5 hover:bg-white/10 transition duration-300 h-full flex flex-col justify-between">

                {/* ICON */}
                <Icon className="w-10 h-10 text-pink-500 mb-4 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(236,72,153,0.6)] transition" />

                {/* TITLE */}
                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>

                {/* TEXT */}
                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : "64px",
                    opacity: isOpen ? 1 : 0.85,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                    {isOpen ? item.full : item.short}
                  </p>
                </motion.div>

                {/* BUTTON */}
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // future safe
                    setOpenIndex(isOpen ? null : i);
                  }}
                  className="text-pink-500 text-sm font-medium flex items-center gap-1 mt-2 hover:gap-2 transition-all"
                >
                  {isOpen ? "Show Less" : "Read More"}

                  <span
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    ↓
                  </span>
                </button>

                {/* HOVER BORDER */}
                <div className="absolute inset-0 rounded-2xl border border-pink-500 opacity-0 group-hover:opacity-100 transition pointer-events-none"></div>
              </div>

              {/* GLOW EFFECT */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition pointer-events-none"></div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}