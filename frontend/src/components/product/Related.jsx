import "./Related.css";

const products = [
  "Linea Chair",
  "Frame Console",
  "Petal Side Table",
  "Nest Armchair",
];

function Related() {
  return (
    <section className="band-navy">

      <div className="container">

        <div className="section-header">

          <div>

            <span className="eyebrow">
              related
            </span>

            <h2>
              More from this collection
            </h2>

          </div>

        </div>

        <div className="related-grid">

          {products.map((item, index) => (

            <div
              key={index}
              className="related-card"
            >

              <div className="placeholder">

                {item}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Related;