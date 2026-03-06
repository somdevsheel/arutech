import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProductsShowcase } from "@/components/sections/ProductsShowcase";
import { WhyArutech } from "@/components/sections/WhyArutech";
import { TechMarquee } from "@/components/sections/TechMarquee";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Arutech Consultancy Services LLP | Engineering Tomorrow's India",
  description: "A DPIIT-recognized startup building scalable digital platforms, cloud infrastructure, and AI applications. Headquartered in Uttarakhand, India.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProductsShowcase />
      <WhyArutech />
      <TechMarquee />
      <CTASection />
    </>
  );
}
