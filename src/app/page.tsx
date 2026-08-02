import Navbar          from "./components/Navbar";
import Hero            from "./components/Hero";
import About           from "./components/About";
import Services        from "./components/Services";
import BridalPackages  from "./components/BridalPackages";
import Gallery         from "./components/Gallery";
import Experts         from "./components/Experts";
import SalonInfo       from "./components/SalonInfo";
import Location        from "./components/Location";
import FAQ             from "./components/FAQ";
import Contact         from "./components/Contact";
import FloatingButtons from "./components/FloatingButtons";
import Footer          from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <BridalPackages />
        <Gallery />
        <Experts />
        <SalonInfo />
        <Location />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
