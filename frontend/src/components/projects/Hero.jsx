import "./Hero.css";

function Hero() {
  return (
    <section className="page-hero">

      <div className="container">

        <span className="eyebrow">
          projects / gallery
        </span>

        <h1 className="page-title">
          Where our furniture lives.
        </h1>

        <p className="page-desc">
          Completed spaces furnished by Alokik
          hotels, restaurants, offices and homes
          across India and beyond.
        </p>

        <div
          className="pills-row"
          style={{ marginTop: "24px" }}
        >

          <span className="pill pill-filled">
            All
          </span>

          <span className="pill pill-outline">
            Hotels
          </span>

          <span className="pill pill-outline">
            Restaurants
          </span>

          <span className="pill pill-outline">
            Cafés
          </span>

          <span className="pill pill-outline">
            Offices
          </span>

          <span className="pill pill-outline">
            Villas
          </span>

          <span className="pill pill-outline">
            Apartments
          </span>

        </div>

      </div>

    </section>
  );
}

export default Hero;