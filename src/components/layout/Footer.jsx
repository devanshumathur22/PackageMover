"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Clock, MapPin } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Footer() {
  const pathname = usePathname();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <footer className="relative bg-white text-slate-800 overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-transparent to-purple-100"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-20">

        <div className="grid md:grid-cols-4 gap-10">

          {/* BRAND */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
            <h2 className="text-2xl font-bold text-pink-500 mb-4">
              MoveEase
            </h2>

            <p className="text-slate-600 text-sm leading-relaxed">
              We specialize in hassle-free packing, safe transport, and quick delivery.
              <span className="font-semibold text-slate-900">
                {" "}Sakaldeo Relocation
              </span>{" "}
              ensures secure, timely, and stress-free moves.
            </p>
          </motion.div>

          {/* LINKS */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
            <h4 className="font-semibold text-slate-900 mb-4">
              Pages
            </h4>

            <ul className="space-y-2 text-sm">
              {links.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.path}
                    className={`transition ${
                      pathname === item.path
                        ? "text-pink-500 font-semibold"
                        : "hover:text-pink-500 text-slate-600"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* QUICK LINKS */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
            <h4 className="font-semibold text-slate-900 mb-4">
              Quick Links
            </h4>

            <ul className="space-y-2 text-sm">
              {["Privacy Policy", "Terms", "FAQ", "Blogs"].map((item, i) => (
                <li key={i} className="hover:text-pink-500 cursor-pointer transition">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CONTACT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-6 rounded-2xl border border-slate-200 bg-white/60 backdrop-blur-xl shadow-sm"
          >
            <h4 className="font-semibold text-slate-900 mb-4">
              Contact
            </h4>

            <div className="space-y-3 text-sm text-slate-600">

              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-pink-500" />
                +91 9031470777
              </p>

              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-pink-500" />
                info@sakaldeorelocation.com
              </p>

              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-pink-500 mt-1" />
                Ranchi & Deoghar, Jharkhand
              </p>

              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-pink-500" />
                Mon–Sun 9AM–7PM
              </p>
            </div>

            <button className="mt-5 w-full py-2 rounded-xl bg-pink-500 text-white hover:shadow-lg hover:scale-[1.02] transition">
              Get Quote
            </button>
          </motion.div>
        </div>

        <div className="border-t border-slate-200 mt-12 pt-6 text-center text-sm text-slate-500">
          © 2025 Sakaldeo Relocation | Designed by{" "}
          <span className="text-pink-500 font-medium">PreOn Solution</span>
        </div>
      </div>
    </footer>
  );
}