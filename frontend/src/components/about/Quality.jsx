import "./Quality.css";

const quality = [

"moisture-tested timber",

"joint strength check",

"finish inspection",

"pre-shipment QC"

];

function Quality() {

  return (

    <section className="band-navy">

      <div className="container">

        <div className="section-header">

          <div>

            <span className="eyebrow">

              03 / quality

            </span>

            <h2>

              Checked at every stage.

            </h2>

          </div>

        </div>

        <div className="quality-pills">

          {quality.map((item,index)=>(

            <span
              key={index}
              className="pill"
            >

              {item}

            </span>

          ))}

        </div>

      </div>

    </section>

  );

}

export default Quality;