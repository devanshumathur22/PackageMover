"use client";

export default function AboutParallax() {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover py-32 px-6"
      style={{
        backgroundImage: "url('/image4.jpg')", // apni image
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* CONTENT */}
      <div className="relative max-w-5xl mx-auto text-white text-center">

        <h4 className="text-pink-500 font-semibold mb-3">
          ABOUT SAKALDEO RELOCATION
        </h4>

        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Moving Made Simple & Stress-Free
        </h2>

        <p className="text-gray-200 mb-6">
          We provide reliable and professional packers and movers services across India,
          ensuring safe transportation of your belongings with complete care.
        </p>

        <p className="text-gray-300 mb-10">
          From local shifting to intercity relocation, our experienced team ensures
          timely delivery and hassle-free experience.
        </p>

        {/* POINTS */}
        <div className="grid md:grid-cols-3 gap-6 text-left">

          {[
            "Safe & Secure Packing",
            "On-Time Delivery",
            "Affordable Pricing",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/20"
            >
              <p className="flex items-center gap-2">
                <span className="text-pink-500">✔</span> {item}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}