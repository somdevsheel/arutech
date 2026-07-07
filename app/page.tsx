import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import FloatingTab from "@/components/FloatingTab";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
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
  title: "Arutech Consultancy Services LLP | AI, Cloud & Web App Development India",
  description:
    "Arutech Consultancy delivers expert AI/ML solutions, cloud deployment, React web development & React Native mobile apps in India. 50+ projects delivered. Get a free consultation today.",
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
