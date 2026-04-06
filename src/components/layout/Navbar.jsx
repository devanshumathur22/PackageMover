"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-center">

      {/* NAV */}
      <div className="w-full max-w-7xl mx-4 mt-4 px-6 py-3 flex justify-between items-center
        bg-white/70 backdrop-blur-xl border border-slate-200 shadow-sm rounded-2xl">

        {/* LOGO */}
        <Link href="/" className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          MoveEase
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex gap-8 text-slate-700 font-medium">
          {navItems.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="relative group"
            >
              {item.name}

              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <button className="hidden md:block px-5 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:scale-105 transition">
          Get Quote
        </button>

        {/* MOBILE BTN */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="absolute top-20 w-[90%] mx-auto bg-white/90 backdrop-blur-xl border border-slate-200 rounded-xl shadow p-5 md:hidden">

          <div className="flex flex-col gap-4 text-slate-700">

            {navItems.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <button className="mt-2 px-4 py-2 bg-pink-500 text-white rounded-lg">
              Get Quote
            </button>

          </div>
        </div>
      )}
    </nav>
  );
}