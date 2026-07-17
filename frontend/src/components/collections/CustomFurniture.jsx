import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import "./CustomFurniture.css";

function CustomFurniture() {

  return (

    <section className="band-navy">

      <div className="container custom-furniture">

        <div>

          <span className="eyebrow">

            custom furniture

          </span>

          <h2>

            Have your own design?

          </h2>

        </div>

        <Link
          to="/contact"
          className="pill pill-filled"
        >

          Send us your drawings

          <HiOutlineArrowUpRight />

        </Link>

      </div>

    </section>

  );

}

export default CustomFurniture;