import { HiOutlineArrowUpRight } from "react-icons/hi2";
import "./Collections.css";

const collections = [

  {
    title: "Dining",
    description: "Tables, chairs & sideboards for the dining room",
    image: "DINING COLLECTION PHOTO",
  },

  {
    title: "Living",
    description: "Sofas, coffee tables & storage for living spaces",
    image: "LIVING COLLECTION PHOTO",
  },

  {
    title: "Bedroom",
    description: "Beds, wardrobes & nightstands",
    image: "BEDROOM COLLECTION PHOTO",
  },

  {
    title: "Office",
    description: "Desks, chairs & filing furniture",
    image: "OFFICE COLLECTION PHOTO",
  },

  {
    title: "Hospitality",
    description: "Bulk furniture for hotels & restaurants",
    image: "HOSPITALITY COLLECTION PHOTO",
  },

  {
    title: "Outdoor",
    description: "Weather-resistant wood & wrought iron",
    image: "OUTDOOR COLLECTION PHOTO",
  },

  {
    title: "Custom Furniture",
    description: "Bespoke pieces made to your drawings",
    image: "CUSTOM FURNITURE COLLECTION PHOTO",
  },

];

function Collections() {

  return (

    <section className="collections">

      <div className="container">

        <div className="collections-grid">

          {collections.map((item, index) => (

            <div
              className="collection-card"
              key={index}
            >

              <div className="placeholder">

                {item.image}

              </div>

              <h3>

                {item.title}

              </h3>

              <p>

                {item.description}

              </p>

              <button className="collection-link">

                View Gallery

                <HiOutlineArrowUpRight />

              </button>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}

export default Collections;