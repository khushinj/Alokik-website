import "./Hero.css";

function Hero() {
  return (
    <section className="page-hero">

      <div className="container">

        <span className="eyebrow">
          collections
        </span>

        <h1 className="page-title">
          Furniture for every space.
        </h1>

        <p className="page-desc">
          Browse our main catalogue by room or purpose
          — each collection opens into a full gallery
          of available designs.
        </p>

        <div className="pills-row">

          <span className="pill pill-filled">
            All
          </span>

          <span className="pill pill-outline">
            Dining
          </span>

          <span className="pill pill-outline">
            Living
          </span>

          <span className="pill pill-outline">
            Bedroom
          </span>

          <span className="pill pill-outline">
            Office
          </span>

          <span className="pill pill-outline">
            Hospitality
          </span>

          <span className="pill pill-outline">
            Outdoor
          </span>

          <span className="pill pill-outline">
            Custom
          </span>

        </div>

      </div>

    </section>
  );
}

export default Hero;