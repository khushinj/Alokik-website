import "./Manufacturing.css";

const process = [

  {
    title:"TIMBER SELECTION",
    description:"Sheesham & mango wood, hand-graded"
  },

  {
    title:"JOINERY",
    description:"Cut and jointed by hand in-house"
  },

  {
    title:"FINISHING",
    description:"Natural oils and polish, no shortcuts"
  },

  {
    title:"PACKING",
    description:"Export-grade crating for container shipping"
  }

];

function Manufacturing() {

  return (

    <section>

      <div className="container">

        <div className="section-header">

          <div>

            <span className="eyebrow">

              02 / manufacturing

            </span>

            <h2>

              How each piece is made.

            </h2>

          </div>

        </div>

        <div className="manufacturing-grid">

          {process.map((item,index)=>(

            <div
              key={index}
              className="manufacturing-card"
            >

              <div className="placeholder">

                <strong>

                  {item.title}

                </strong>

                <br />

                {item.description}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}

export default Manufacturing;