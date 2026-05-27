import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Anonymity from "@/components/Anonymity";
import VideoCalls from "@/components/VideoCalls";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Anonymity />
      <VideoCalls />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
