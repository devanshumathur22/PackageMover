import ContactCTA from "@/components/sections/ContactCTA";
import CTA from "@/components/sections/CTA";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Services from "@/components/sections/Services";
import WhyChoose from "@/components/sections/WhyChoose";
import { Feature } from "framer-motion";
// import Services from "@/components/sections/Services";

// import HowItWorks from "@/components/sections/HowItWorks";

export default function Home() {
  return (
    <main className="flex flex-col">

      <Hero />
      <WhyChoose />
      <Services />
      <HowItWorks />
      <CTA />
      <Features /> 
      <ContactCTA />

      

      {/* <HowItWorks /> */}

    </main>
  );
}