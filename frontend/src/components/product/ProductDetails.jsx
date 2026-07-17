import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./ProductDetails.css";

function ProductDetails() {
  return (
    <section className="product-details">

      <div className="container split-grid">

        <div className="product-gallery">

          <div className="main-image">

            MAIN PRODUCT PHOTO

            <br />

            Heritage Dining Chair

          </div>

          <div className="thumbnail-grid">

            <div className="thumbnail">
              detail 01
            </div>

            <div className="thumbnail">
              detail 02
            </div>

            <div className="thumbnail">
              detail 03
            </div>

            <div className="thumbnail">
              detail 04
            </div>

          </div>

        </div>

        <div className="product-info">

          <h1>
            Heritage Dining Chair
          </h1>

          <p className="description">
            A solid sheesham wood dining chair
            with hand-carved backrest detailing
            built for daily use,
            finished to last generations.
          </p>

          <div className="info-block">

            <span className="eyebrow">
              dimensions
            </span>

            <p>
              Height 92 cm · Width 48 cm ·
              Depth 52 cm · Seat height 46 cm
            </p>

          </div>

          <div className="info-block">

            <span className="eyebrow">
              materials
            </span>

            <p>
              Solid sheesham wood,
              natural cotton webbing seat
            </p>

          </div>

          <div className="info-block">

            <span className="eyebrow">
              finish options
            </span>

            <div className="finish-options">

              <span
                style={{ background: "#3B2A22" }}
              />

              <span
                style={{ background: "#6E4B32" }}
              />

              <span
                style={{ background: "#C9A876" }}
              />

              <span
                style={{ background: "#141B2E" }}
              />

            </div>

          </div>

          <div className="info-block">

            <span className="eyebrow">
              customization
            </span>

            <p>
              Available in custom sizes,
              wood tones,
              and seat materials
              for bulk and hospitality orders.
            </p>

          </div>

          <div className="button-group">

            <Link
              to="/contact"
              className="pill pill-filled"
            >

              Request Quote

              <HiOutlineArrowUpRight />

            </Link>

            <a
              href="#"
              className="pill pill-outline"
            >

              <FaWhatsapp />

              WhatsApp Us

            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ProductDetails;