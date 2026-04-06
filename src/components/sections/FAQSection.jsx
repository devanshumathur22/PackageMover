"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQSection() {
  const [open, setOpen] = useState(0);

  const faqs = [
    {
      q: "What types of relocation services do you offer?",
      a: "We provide home shifting, office relocation, vehicle transport, packing/unpacking, and storage services across India.",
    },
    {
      q: "How long does shifting take?",
      a: "It depends on distance and items. Local shifting takes 1 day, while intercity may take 2–5 days.",
    },
    {
      q: "What are the charges for relocation?",
      a: "Charges vary based on distance, quantity of goods, and services required. We offer affordable pricing with no hidden costs.",
    },
    {
      q: "How do I know my items are safe?",
      a: "We use high-quality packing materials and trained staff to ensure complete safety during transit.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-purple-100 via-transparent to-pink-100">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        {/* FAQ List */}
        <div className="space-y-4">

          {faqs.map((item, i) => (
            <div
              key={i}
              className="group border rounded-xl p-5 bg-white/80 backdrop-blur-md shadow-sm hover:shadow-md transition"
            >

              {/* Question */}
              <div
                onClick={() => setOpen(open === i ? null : i)}
                className="flex justify-between items-center cursor-pointer"
              >
                <h3 className="font-semibold text-lg text-gray-800">
                  {item.q}
                </h3>

                {open === i ? <Minus /> : <Plus />}
              </div>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  open === i ? "max-h-40 mt-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.a}
                </p>
              </div>

              {/* Left border animation */}
              <div
                className={`absolute left-0 top-0 h-full w-1 rounded-full bg-gradient-to-b from-pink-500 to-purple-500 transition-all ${
                  open === i ? "opacity-100" : "opacity-0"
                }`}
              />

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}