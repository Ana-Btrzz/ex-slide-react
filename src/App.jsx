import React from "react";
import "./App.css";
import cabra from "/public/cabra.jpg";
import cao from "/public/cao.jpg";
import gato from "/public/gato.jpg";
import urso from "/public/urso.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

function App() {
  const data = [
    { id: 1, image: cabra },
    { id: 2, image: cao },
    { id: 3, image: gato },
    { id: 4, image: urso },
  ];

  return (
    <div className="container">
      <h1 className="title">Carrossel de imagens com biblioteca SWIPER</h1>

      <Swiper slidesPerView={1} pagination={{ clickable: true }} navigation>
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} alt="slide" className="slide-item" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default App;
