import Hero from "../components/home/Hero";
import TrustedBrands from "../components/home/TrustedBrands";
import Showcase from "../components/home/Showcase";
import Services from "../components/home/Services";
import WhyChoose from "../components/home/WhyChoose";
import Process from "../components/home/Process";
import Testimonials from "../components/home/Testimonials";
import CTA from "../components/home/CTA";

const Home = () => {
  return (
    <>
      <Hero />
      <TrustedBrands />
      <Showcase />
      <Services />
      <WhyChoose />
      <Process />
      <Testimonials />
      <CTA />
    </>
  );
};

export default Home;