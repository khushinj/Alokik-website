import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

import Hero from "../export/Hero";
import ExportServices from "../components/export/ExportServices";
import WhereWeShip from "../export/WhereWeShip";
import BulkOrder from "../export/BulkOrder";

function ExportPage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <ExportServices />
        <WhereWeShip />
        <BulkOrder />
      </main>

      <Footer />
    </>
  );
}

export default ExportPage;