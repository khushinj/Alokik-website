import "./ExportServices.css";

const services = [
  {
    title: "OEM & ODM Manufacturing",
    description:
      "We produce to your specifications, private label or original design.",
  },
  {
    title: "Bulk Orders",
    description:
      "Production capacity for large hospitality and retail orders.",
  },
  {
    title: "Container Shipping",
    description:
      "Full and part-container loads, packed for long transit.",
  },
  {
    title: "Countries Served",
    description:
      "Shipping to 30+ countries across Europe, the US, and the Middle East.",
  },
  {
    title: "Export-Grade Packaging",
    description:
      "Moisture-proof, crash-tested crating for every shipment.",
  },
  {
    title: "Quality Checks",
    description:
      "Every order inspected before it leaves the workshop.",
  },
];

function ExportServices() {
  return (
    <section style={{ paddingTop: 0 }}>

      <div className="container">

        <div className="grid-3">

          {services.map((service, index) => (

            <div
              className="card"
              key={index}
            >

              <div
                className="ph"
                style={{ height: "140px" }}
              >
                {service.title}
              </div>

              <div
                className="name"
                style={{ marginTop: "12px" }}
              >
                {service.title}
              </div>

              <div className="cat">
                {service.description}
              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default ExportServices;