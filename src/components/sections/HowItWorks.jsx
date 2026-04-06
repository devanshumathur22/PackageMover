"use client";

import { motion } from "framer-motion";
import {
  CheckCircle,
  PackageOpen,
  Truck,
  Upload,
} from "lucide-react";

const steps = [
  {
    icon: CheckCircle,
    title: "Assign us Service",
    desc: "Once you are satisfied with our quotation, you can book our service.",
  },
  {
    icon: PackageOpen,
    title: "Packing & Loading",
    desc: "We carefully pack your goods and load them securely.",
  },
  {
    icon: Truck,
    title: "Transportation",
    desc: "Safe and timely delivery with tracking support.",
  },
  {
    icon: Upload,
    title: "Unloading & Unpacking",
    desc: "We unload and set everything properly at your location.",
  },
];

export default function HowItWorks() {
  return (
    <section className="px-6 md:px-12 py-28 max-w-6xl mx-auto">

      {/* HEADING */}
      <div className="text-center mb-20">
        <p className="text-pink-500 font-semibold mb-3">
          HOW WE WORK
        </p>
        <h2 className="text-4xl md:text-6xl font-bold text-slate-900">
          Simple Process, <span className="text-pink-500">Smart Move</span>
        </h2>
      </div>

      {/* STACK CARDS */}
      <div className="relative space-y-10">

        {steps.map((step, i) => {
          const Icon = step.icon;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative group`}
              style={{
                zIndex: steps.length - i,
                transform: `translateY(${i * -20}px)`,
              }}
            >

              {/* CARD */}
              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">

                {/* TOP */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center">
                    <Icon className="text-pink-500" />
                  </div>

                  <h3 className="text-xl font-semibold text-slate-900">
                    {step.title}
                  </h3>
                </div>

                {/* DESC */}
                <p className="text-slate-600 leading-relaxed">
                  {step.desc}
                </p>

                {/* NUMBER */}
                <div className="absolute top-6 right-6 text-5xl font-bold text-slate-100">
                  {`0${i + 1}`}
                </div>

                {/* HOVER BORDER */}
                <div className="absolute inset-0 rounded-3xl border border-pink-500 opacity-0 group-hover:opacity-100 transition pointer-events-none"></div>
              </div>
            </motion.div>
          );
        })}

      </div>
    </section>
  );
}