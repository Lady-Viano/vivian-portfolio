import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import CtaCard from "@/components/CtaCard";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <CtaCard />
    </>
  );
}
