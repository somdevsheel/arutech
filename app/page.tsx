import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import FloatingTab from "@/components/FloatingTab";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import WhyChooseUs from "@/components/sections/whychooseus";
import Industries from "@/components/sections/industries";
import Trust from "@/components/sections/trust";
import TechStack from "@/components/sections/techstack";
import Process from "@/components/sections/process";
import Funnels from "@/components/sections/funnels";
import Products from "@/components/sections/products";
import Portfolio from "@/components/sections/portfolio";
import Vision from "@/components/sections/vision";
import Contact from "@/components/sections/contact";
import Footer from "@/components/footer";
import ChatWidget from "@/components/ChatWidget";

export const metadata: Metadata = {
  title: "AI Development, App Development & Digital Marketing Agency",
  description:
    "Grow your business with AI development, mobile apps, website design, automation, Google Ads, SEO, and digital marketing services tailored for measurable results.",
  alternates: {
    canonical: "https://arutechconsultancy.com",
  },
};

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <FloatingTab />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Industries />
      <Trust />
      <TechStack />
      <Process />
      <Funnels />
      <Products />
      <Portfolio />
      <Vision />
      <Contact />
      <Footer />
      <ChatWidget />
    </main>
  );
}
