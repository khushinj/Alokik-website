import "./FactoryPhotos.css";

const photos = [
  "Workshop — hand joinery",
  "Workshop — finishing bay",
  "Workshop — export packing",
];

function FactoryPhotos() {
  return (
    <section>

      <div className="container">

        <div className="section-header">

          <div>

            <span className="eyebrow">
              04 / factory photos
            </span>

            <h2>
              Inside the workshop.
            </h2>

          </div>

        </div>

        <div className="factory-grid">

          {photos.map((photo, index) => (

            <div
              key={index}
              className="factory-card"
            >

              <div className="placeholder">

                {photo}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default FactoryPhotos;