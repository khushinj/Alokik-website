import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

import Hero from "../projects/Hero";
import Projects from "../projects/Projects";

function ProjectsPage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Projects />
      </main>

      <Footer />
    </>
  );
}

export default ProjectsPage;