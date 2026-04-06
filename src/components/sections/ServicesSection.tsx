// components/sections/ServicesSection.tsx

import {
  Truck,
  Building2,
  MapPin,
  Globe,
  Car,
  Warehouse,
  Package,
  Box
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "Household Shifting",
      desc: "Safe and damage-free home shifting with complete care.",
      icon: Truck,
      points: ["Premium Packing", "Door-to-Door", "Furniture Setup"],
    },
    {
      title: "Office Relocation",
      desc: "Smooth office shifting with minimal downtime.",
      icon: Building2,
      points: ["IT Equipment", "File Handling", "Quick Setup"],
    },
    {
      title: "Local Shifting",
      desc: "Fast and affordable shifting within city.",
      icon: MapPin,
      points: ["Local Experts", "Quick Transport", "Best Pricing"],
    },
    {
      title: "Intercity Relocation",
      desc: "Move anywhere in India with safety.",
      icon: Globe,
      points: ["GPS Tracking", "Insured", "Pan India"],
    },
    {
      title: "Car & Bike Transport",
      desc: "Safe vehicle transport with carriers.",
      icon: Car,
      points: ["Secure Loading", "On-Time", "All India"],
    },
    {
      title: "Warehouse Storage",
      desc: "Secure storage with CCTV and safety.",
      icon: Warehouse,
      points: ["24x7 Security", "Easy Access", "Flexible"],
    },
    {
      title: "Loading & Unloading",
      desc: "Trained manpower for safe handling.",
      icon: Package,
      points: ["Skilled Staff", "Equipment", "Hourly"],
    },
    {
      title: "Packing & Unpacking",
      desc: "Professional packing with best materials.",
      icon: Box,
      points: ["Fragile Care", "Bubble Wrap", "Organized"],
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900">
            Our Professional Services
          </h2>
          <p className="text-gray-500 mt-3">
            Reliable moving solutions tailored for every need
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {services.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group p-6 rounded-2xl bg-white border shadow-sm hover:shadow-xl transition"
              >
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-pink-100 text-pink-600 mb-4 group-hover:scale-110 transition">
                  <Icon size={22} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  {item.title}
                </h3>

                {/* Desc */}
                <p className="text-sm text-gray-500 mb-4">
                  {item.desc}
                </p>

                {/* Points */}
                <ul className="space-y-2 text-sm">
                  {item.points.map((p, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-600">
                      <span className="text-green-500">✔</span> {p}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}