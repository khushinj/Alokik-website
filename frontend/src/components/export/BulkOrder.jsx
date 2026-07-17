import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import "./BulkOrder.css";

function BulkOrder() {
  return (
    <section style={{ textAlign: "center" }}>

      <div className="container">

        <h2
          className="display"
          style={{
            fontSize: "clamp(24px,4vw,32px)",
            marginBottom: "20px",
          }}
        >
          Ready to place a bulk order?
        </h2>

        <Link
          to="/contact"
          className="pill pill-filled"
        >
          Request Export Quote

          <HiOutlineArrowUpRight />
        </Link>

      </div>

    </section>
  );
}

export default BulkOrder;