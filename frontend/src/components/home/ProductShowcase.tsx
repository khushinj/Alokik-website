import "./ProductShowcase.css";

const products = [
  {
    id: 1,
    image: "/images/home/product1.jpg",
    name: "Nova Lounge Chair",
    price: "₹24,999",
  },
  {
    id: 2,
    image: "/images/home/product2.jpg",
    name: "Oak Dining Table",
    price: "₹48,999",
  },
  {
    id: 3,
    image: "/images/home/product3.jpg",
    name: "Minimal Sofa",
    price: "₹69,999",
  },
  {
    id: 4,
    image: "/images/home/product4.jpg",
    name: "Accent Chair",
    price: "₹19,999",
  },
];

function ProductShowcase() {
  return (
    <section className="product-showcase">

      <div className="container">

        <div className="section-header">

          <div>

            <span>PRODUCTS</span>

            <h2>Featured Products</h2>

          </div>

          <p>
            Discover handcrafted furniture designed
            for timeless interiors.
          </p>

        </div>

        <div className="product-grid">

          {products.map((product) => (

            <div
              key={product.id}
              className="product-card"
            >

              <img
                src={product.image}
                alt={product.name}
              />

              <div className="product-info">

                <h3>{product.name}</h3>

                <span>{product.price}</span>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default ProductShowcase;