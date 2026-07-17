import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

import AboutHero from "../about/AboutHero";
import FactoryBanner from "../about/FactoryBanner";
import OurStory from "../about/OurStory";
import Manufacturing from "../about/Manufacturing";
import Quality from "../about/Quality";
import FactoryPhotos from "../about/FactoryPhotos";
import ExportExperience from "../components/about/ExportExperience";

function About() {
  return (
    <>
      <Navbar />

      <main>

        <AboutHero />

        <FactoryBanner />

        <OurStory />

        <Manufacturing />

        <Quality />

        <FactoryPhotos />

        <ExportExperience />

      </main>

      <Footer />
    </>
  );
}

export default About;