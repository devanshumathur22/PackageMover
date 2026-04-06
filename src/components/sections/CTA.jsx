"use client";

import { useEffect, useState } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function CTA() {
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScroll) {
        setVisible(false); // scroll down → hide
      } else {
        setVisible(true); // scroll up → show
      }

      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{
        y: visible ? 0 : 100,
        opacity: visible ? 1 : 0,
      }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="flex items-center gap-4 px-6 py-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl">

        {/* TEXT */}
        <p className="text bg-pink-100-to-purple-500 font-medium hidden md:block">
          Book Your Shift 📞 Today
        </p>

        {/* CALL */}
        <a
          href="tel:9939300224"
          className="flex items-center gap-2 px-4 py-2 bg-pink-500 text-white rounded-full hover:scale-105 transition"
        >
          <Phone size={16} />
          Call
        </a>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/919939300224"
          target="_blank"
          className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-full hover:scale-105 transition"
        >
          <MessageCircle size={16} />
          WhatsApp
        </a>

      </div>
    </motion.div>
  );
}