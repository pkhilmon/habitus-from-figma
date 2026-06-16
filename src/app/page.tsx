import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AppScreenshots from "@/components/AppScreenshots";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <AppScreenshots />
      <Testimonials />
      <CTA />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
