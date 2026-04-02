import Navbar from "@/components/navbar";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Products from "@/components/sections/products";
import Process from "@/components/sections/process";
import Portfolio from "@/components/sections/portfolio";
import Trust from "@/components/sections/trust";
import Vision from "@/components/sections/vision";
import Contact from "@/components/sections/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Products />
      <Process />
      <Portfolio />
      <Trust />
      <Vision />
      <Contact />
      <Footer />
    </main>
  );
}
