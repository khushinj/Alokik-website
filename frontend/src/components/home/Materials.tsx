import "./Materials.css";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const materials = [
  {
    id: 1,
    title: "Oak Wood",
    image: "/images/material1.jpg",
  },
  {
    id: 2,
    title: "Walnut",
    image: "/images/material2.jpg",
  },
  {
    id: 3,
    title: "Marble",
    image: "/images/material3.jpg",
  },
  {
    id: 4,
    title: "Leather",
    image: "/images/material4.jpg",
  },
  {
    id: 5,
    title: "Ash Wood",
    image: "/images/material5.jpg",
  },
];

function Materials() {
  return (
    <section className="materials">

      <div className="container">

        <div className="section-header">

          <div>

            <span>MATERIALS</span>

            <h2>Premium Materials</h2>

          </div>

        </div>

        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={4}
          breakpoints={{
            320: {
              slidesPerView: 1.2,
            },
            640: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
        >
          {materials.map((material) => (
            <SwiperSlide key={material.id}>

              <div className="material-card">

                <img
                  src={material.image}
                  alt={material.title}
                />

                <h3>{material.title}</h3>

              </div>

            </SwiperSlide>
          ))}
        </Swiper>

      </div>

    </section>
  );
}

export default Materials;