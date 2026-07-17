import { Link } from "react-router-dom";
import "./IntroBand.css";

function IntroBand() {
  return (
    <section className="intro-band">

      <div className="container">

        <div className="intro-left">

          <span className="section-label">
            ABOUT ALOKIK
          </span>

          <h2>
            Furniture crafted with timeless
            elegance and exceptional artistry.
          </h2>

        </div>

        <div className="intro-right">

          <p>
            Every piece is thoughtfully designed
            using premium materials, combining
            traditional craftsmanship with modern
            aesthetics to create spaces that feel
            warm, sophisticated and enduring.
          </p>

          <Link to="/about">
            <button className="white-btn">
              Learn More
            </button>
          </Link>

        </div>

      </div>

    </section>
  );
}

export default IntroBand;