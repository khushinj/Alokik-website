import "./ExportExperience.css";

const stats = [
  {
    number: "25+",
    label: "years of craft",
  },
  {
    number: "30+",
    label: "countries served",
  },
  {
    number: "1000+",
    label: "product designs",
  },
  {
    number: "100%",
    label: "hand-finished",
  },
];

function ExportExperience() {
  return (
    <section className="band-navy">

      <div className="container">

        <div className="section-header">

          <div>

            <span className="eyebrow">
              05 / export experience
            </span>

            <h2>
              Trusted by buyers worldwide.
            </h2>

          </div>

        </div>

        <div className="stats-grid">

          {stats.map((item, index) => (

            <div
              key={index}
              className="stat-card"
            >

              <h3>{item.number}</h3>

              <p>{item.label}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default ExportExperience;