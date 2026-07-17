import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

import Hero from "../contact/Hero";
import Contact from "../contact/Contact";

function ContactPage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default ContactPage;