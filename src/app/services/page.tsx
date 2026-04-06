// app/services/page.tsx

import ContactCTA from "@/components/sections/ContactCTA";
import ContactCTASection from "@/components/sections/ContactCTASection";
import FAQSection from "@/components/sections/FAQSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";

export default function ServicesPage() {
  return (
    <>
      <ServicesSection />
      <ContactCTA />
      <WhyChooseSection />
      <TestimonialSection />
      <FAQSection />
      <ContactCTASection />
    </>
  );
}