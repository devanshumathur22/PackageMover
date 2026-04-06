"use client";

import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">

      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h1 className="text-4xl font-bold mb-4">
          Get In Touch With Us
        </h1>

        <p className="text-gray-500 mb-12">
          We are here to help you with safe and smooth relocation services
        </p>

        {/* CONTACT CARDS */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">

          {/* Phone */}
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <Phone className="mx-auto text-pink-500 mb-3" />
            <h3 className="font-semibold mb-1">Call Us</h3>
            <p className="text-gray-500 text-sm">+91 99393 00224</p>
          </div>

          {/* Email */}
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <Mail className="mx-auto text-pink-500 mb-3" />
            <h3 className="font-semibold mb-1">Email</h3>
            <p className="text-gray-500 text-sm">info@sakaldeorelocation.com</p>
          </div>

          {/* Location */}
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <MapPin className="mx-auto text-pink-500 mb-3" />
            <h3 className="font-semibold mb-1">Location</h3>
            <p className="text-gray-500 text-sm">Ranchi & Deoghar</p>
          </div>

        </div>

        {/* FORM (CENTERED) */}
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg border">

          <h2 className="text-2xl font-semibold mb-6">
            Send a Message
          </h2>

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-pink-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-pink-500"
            />

            <textarea
              rows={4}
              placeholder="Your Message"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-pink-500"
            />

            <button className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:scale-105 transition">
              Send Message
            </button>

          </form>

        </div>
       <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow mt-16">
  <iframe
    src="https://www.google.com/maps?q=Ranchi,Jharkhand&output=embed"
    className="w-full h-full border-0"
    loading="lazy"
  ></iframe>
</div>
      </div>
    </main>
  );
}