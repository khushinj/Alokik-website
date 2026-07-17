import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

// import Breadcrumb from "../src/components/product/Breadcrumb";
// import ProductDetails from "../src/components/product/ProductDetails";
// import Related from "../src/components/product/Related";

import Breadcrumb from '../product/Breadcrumb'
function Product() {
  return (
    <>
      <Navbar />

      <main>
        <Breadcrumb />
        <ProductDetails />
        <Related />
      </main>

      <Footer />
    </>
  );
}

export default Product;