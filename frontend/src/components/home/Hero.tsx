import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="wordmark-wrap">

          <h1 className="wordmark display">
            alokik.
          </h1>

          {/* Hero Image */}
          <div className="hero-product">
            Image Here
          </div>

          <p className="hero-tagline">
            Crafted with precision.
            <br />
            Designed for timeless
            <br />
            living.
          </p>

        </div>
      </div>
    </section>
  );
};

export default Hero;