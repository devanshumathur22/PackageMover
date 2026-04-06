"use client";

import { useState } from "react";

export default function BlogSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const blogs = [
    {
      title: "How to Choose the Right Packers & Movers",
      date: "Feb 13, 2025",
      img: "/image1.jpg",
      content: [
        {
          heading: "1. Introduction",
          text: `Relocating to a new home or office can be exciting, but it also comes with its own set of challenges. The process of packing, transporting, and unpacking requires expertise to ensure a hassle-free move. Choosing the right packers and movers in Ranchi is crucial for a smooth transition.`,
        },
        {
          heading: "2. Key Factors to Consider",
          points: [
            "Experience and Reputation",
            "Licensing and Certification",
            "Customer Reviews and Ratings",
            "Services Offered",
            "Pricing Transparency",
            "Insurance Coverage",
          ],
        },
        {
          heading: "3. Types of Moving Services",
          points: [
            "Home Relocation",
            "Office Moving",
            "Vehicle Transport",
            "Warehousing",
            "Local & Long Distance Moving",
          ],
        },
        {
          heading: "4. How to Verify Movers",
          points: [
            "Check registration",
            "Visit office",
            "Ask for references",
            "Verify online presence",
          ],
        },
        {
          heading: "5. Cost & Budget Planning",
          text: "Compare quotes, check hidden charges, and plan budget carefully.",
        },
        {
          heading: "6. Smooth Relocation Tips",
          points: [
            "Declutter before packing",
            "Label boxes",
            "Keep essentials separate",
          ],
        },
        {
          heading: "7. Common Mistakes",
          points: [
            "Choosing cheapest option",
            "Ignoring terms",
            "No insurance",
          ],
        },
        {
          heading: "9. Conclusion",
          text: "Choose experienced and reliable movers for stress-free relocation.",
        },
      ],
    },

    {
      title: "Best Packers and Movers in Ranchi: A Complete Guide",
      date: "Feb 6, 2025",
      img: "/image2.jpg",
      content: [
        {
          heading: "Introduction",
          text: `Relocating can be a stressful experience, whether it’s shifting your home, office, or vehicle. Finding reliable packers and movers in Ranchi can make the process smooth, safe, and efficient.`,
        },
        {
          heading: "Why Choose Professional Packers & Movers?",
          points: [
            "Safe and Secure Packing",
            "Time-Saving and Hassle-Free",
            "Reliable Transportation",
            "Insurance Coverage",
            "End-to-End Services",
          ],
        },
        {
          heading: "Top Services Offered",
          points: [
            "Home Relocation",
            "Office Relocation",
            "Car & Bike Transport",
            "Courier & Cargo",
            "Luggage Delivery",
            "Goods Insurance",
          ],
        },
        {
          heading: "How to Choose the Right Movers",
          points: [
            "Check online reviews",
            "Verify credentials",
            "Compare quotes",
            "Check equipment quality",
            "Ask for insurance",
          ],
        },
        {
          heading: "Estimated Price List",
          table: [
            ["1 BHK", "₹5,000 – ₹10,000"],
            ["2 BHK", "₹8,000 – ₹15,000"],
            ["3 BHK", "₹12,000 – ₹20,000"],
            ["Office", "₹15,000 – ₹50,000"],
            ["Car Transport", "₹5,000 – ₹12,000"],
          ],
        },
        {
          heading: "Tips for Smooth Relocation",
          points: [
            "Declutter unnecessary items",
            "Start packing early",
            "Label boxes properly",
            "Keep essentials handy",
            "Book movers in advance",
          ],
        },
        {
          heading: "Conclusion",
          text: `Choosing the right packers and movers ensures a stress-free relocation. Compare services, check reviews, and plan ahead for a smooth experience.`,
        },
      ],
    },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">

        {blogs.map((blog, i) => {
          const isOpen = openIndex === i;

          return (
            <div key={i} className="mb-16">

              {/* IMAGE */}
              <img
                src={blog.img}
                className="w-full h-[400px] object-cover rounded-xl mb-6"
              />

              {/* TITLE */}
              <h2 className="text-3xl font-bold mb-2">
                {blog.title}
              </h2>

              <p className="text-gray-400 mb-6">
                {blog.date}
              </p>

              {/* CONTENT */}
              {isOpen && (
                <div className="space-y-6 text-gray-700 leading-relaxed">

                  {blog.content.map((section, idx) => (
                    <div key={idx}>

                      <h3 className="text-xl font-semibold mb-2 text-black">
                        {section.heading}
                      </h3>

                      {section.text && (
                        <p>{section.text}</p>
                      )}

                      {section.points && (
                        <ul className="list-disc pl-6 space-y-1">
                          {section.points.map((p, index) => (
                            <li key={index}>{p}</li>
                          ))}
                        </ul>
                      )}

                      {/* ✅ TABLE SUPPORT */}
                      {section.table && (
                        <div className="overflow-x-auto mt-3">
                          <table className="w-full border border-gray-200 text-sm rounded-lg overflow-hidden">
                            <thead className="bg-gray-100">
                              <tr>
                                <th className="p-2 text-left">Type</th>
                                <th className="p-2 text-left">Price</th>
                              </tr>
                            </thead>
                            <tbody>
                              {section.table.map((row, i) => (
                                <tr key={i} className="border-t">
                                  <td className="p-2">{row[0]}</td>
                                  <td className="p-2">{row[1]}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}

                    </div>
                  ))}

                </div>
              )}

              {/* BUTTON */}
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="mt-6 px-4 py-2 bg-pink-500 text-white rounded-lg hover:scale-105 transition"
              >
                {isOpen ? "Show Less ↑" : "Read Full Article →"}
              </button>

            </div>
          );
        })}

      </div>
    </section>
  );
}