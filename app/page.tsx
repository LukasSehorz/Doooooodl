import ContactBand from "@/components/ContactBand";
import Fleet from "@/components/Fleet";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import References from "@/components/References";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Values from "@/components/Values";
import Welcome from "@/components/Welcome";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Welcome />
        <Services />
        <Values />
        <Fleet />
        <References />
        <Gallery />
        <Testimonials />
        <ContactBand />
      </main>
      <Footer />
    </>
  );
}
