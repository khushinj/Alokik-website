import Navbar from "../layout/Navbar.js";
import Footer from "../layout/Footer.js";
import Hero from "../home/Hero";
import IntroBand from "../home/IntroBand.jsx";
import FreshCollection from "../home/FreshCollection.js";
import Materials from "../home/Materials.js";
import ProductShowcase from "../home/ProductShowcase.js";
import Portfolio from "../home/Portfolio.js";
// import Testimonials from "../home/Testimonials";
// import Newsletter from "../components/home/Newsletter";
// import CTA from "../components/home/CTA";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <IntroBand />

      <FreshCollection />

      <Materials />

      <ProductShowcase />

      <Portfolio />

      {/* <Testimonials /> */}

      {/* <Newsletter />

      <CTA /> */}

      <Footer />
    </>
  );
}

export default Home;