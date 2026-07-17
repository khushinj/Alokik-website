import "./FreshCollection.css";

const collections = [

  {
    id:1,
    title:"Luxury Living",
    description:"Modern handcrafted furniture",
    image:"/images/home/collection1.jpg"
  },

  {
    id:2,
    title:"Dining Collection",
    description:"Elegant dining spaces",
    image:"/images/home/collection2.jpg"
  },

  {
    id:3,
    title:"Bedroom Collection",
    description:"Comfort meets craftsmanship",
    image:"/images/home/collection3.jpg"
  }

];

function FreshCollection() {

  return (

    <section className="fresh-collection">

      <div className="container">

        <div className="section-header">

          <div>

            <span>
              COLLECTIONS
            </span>

            <h2>
              Fresh Collections
            </h2>

          </div>

          <p>

            Discover handcrafted furniture
            collections designed to complement
            every modern lifestyle.

          </p>

        </div>

        <div className="collection-grid">

          {collections.map((item)=>(

            <div
              className="collection-card"
              key={item.id}
            >

              <img
                src={item.image}
                alt={item.title}
              />

              <div className="overlay">

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <button>
                  →
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}

export default FreshCollection;