import Navbar from "../layout/Navbar.jsx";
import Footer from "../layout/Footer.jsx";

import Hero from "../collections/Hero.jsx";
import Collections from "../collections/Hero.jsx";
import CustomFurniture from "../collections/CustomFurniture.jsx";

function CollectionsPage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Collections />
        <CustomFurniture />
      </main>

      <Footer />
    </>
  );
}

export default CollectionsPage;