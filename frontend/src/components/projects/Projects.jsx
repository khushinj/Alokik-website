import "./Projects.css";

const projects = [
  {
    title: "Hotel lobby, Udaipur",
    category: "Hospitality",
    image: "HOTEL LOBBY, UDAIPUR PROJECT PHOTO",
  },
  {
    title: "Café interior, Jaipur",
    category: "Café",
    image: "CAFÉ INTERIOR, JAIPUR PROJECT PHOTO",
  },
  {
    title: "Villa living room, Goa",
    category: "Residential",
    image: "VILLA LIVING ROOM, GOA PROJECT PHOTO",
  },
  {
    title: "Office lounge, Delhi",
    category: "Corporate",
    image: "OFFICE LOUNGE, DELHI PROJECT PHOTO",
  },
  {
    title: "Restaurant seating, Mumbai",
    category: "Hospitality",
    image: "RESTAURANT SEATING, MUMBAI PROJECT PHOTO",
  },
  {
    title: "Apartment bedroom, Jaipur",
    category: "Residential",
    image: "APARTMENT BEDROOM, JAIPUR PROJECT PHOTO",
  },
];

function Projects() {
  return (
    <section style={{ paddingTop: 0 }}>

      <div className="container">

        <div className="grid-3">

          {projects.map((project, index) => (

            <div
              className="card"
              key={index}
            >

              <div
                className="ph"
                style={{ height: "280px" }}
              >
                {project.image}
              </div>

              <div className="name">
                {project.title}
              </div>

              <div className="cat">
                {project.category}
              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;