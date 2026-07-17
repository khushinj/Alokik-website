import "./Portfolio.css";

const projects = [
  "/images/home/project1.jpg",
  "/images/home/project2.jpg",
  "/images/home/project3.jpg",
];

function Portfolio() {
  return (
    <section className="portfolio">

      <div className="container">

        <div className="section-header">

          <span>PROJECTS</span>

          <h2>
            Spaces We've Crafted
          </h2>

        </div>

        <div className="portfolio-grid">

          {projects.map((image, index) => (

            <div
              className="portfolio-card"
              key={index}
            >

              <img
                src={image}
                alt="Project"
              />

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Portfolio;