import Header from "./components/Header";
import Hero from "./components/Hero";
import Devices from "./components/Devices";
import About from "./components/About";
import Why from "./components/Why";
import Testimonial from "./components/Testimonial";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import BackToTopBtn from "./components/BackToTopBtn";

export default function Home() {
  return (
    <main className="relative mx-auto max-w-[1920px] bg-white ">
      <Header />
      <Hero />
      <Devices />
      <About />
      <Why />
      <Testimonial />
      <Cta />
      <Footer />
      <BackToTopBtn />
    </main>
  );
}
