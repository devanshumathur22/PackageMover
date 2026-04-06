"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);

  const reviews = [
    {
      name: "Amit Sharma",
      text: "Excellent service! Packing was very professional and delivery was on time.",
    },
    {
      name: "Neha Verma",
      text: "Very smooth experience. Staff was polite and handled everything carefully.",
    },
    {
      name: "Rahul Singh",
      text: "Good service overall. Communication was great and items delivered safely.",
    },
    {
      name: "Priya Gupta",
      text: "Best packers and movers! Everything was organized perfectly.",
    },
    {
      name: "Sandeep Kumar",
      text: "Affordable pricing and very professional team.",
    },
    {
      name: "Pooja Mishra",
      text: "Nice experience. Will definitely use again.",
    },
  ];

  const prev = () => {
    setIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const getIndex = (i) => {
    return (i + reviews.length) % reviews.length;
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50 text-center">

      {/* Heading */}
      <h2 className="text-4xl font-bold mb-12">
        What Our Clients Say
      </h2>

      {/* Cards */}
      <div className="relative flex justify-center items-center">

        {/* Left Arrow */}
        <button
          onClick={prev}
          className="absolute left-0 text-pink-500"
        >
          <ChevronLeft size={30} />
        </button>

        <div className="flex items-center gap-6">

          {[index - 1, index, index + 1].map((i, idx) => {
            const item = reviews[getIndex(i)];

            return (
              <div
                key={idx}
                className={`transition-all duration-500 rounded-2xl p-6 w-[280px]
                ${
                  idx === 1
                    ? "scale-110 bg-white shadow-xl"
                    : "scale-90 bg-white/50 blur-[2px]"
                }`}
              >
                <p className="text-gray-600 mb-4">
                  "{item.text}"
                </p>

                <h4 className="font-semibold">
                  {item.name}
                </h4>
              </div>
            );
          })}
        </div>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="absolute right-0 text-pink-500"
        >
          <ChevronRight size={30} />
        </button>

      </div>

    </section>
  );
}