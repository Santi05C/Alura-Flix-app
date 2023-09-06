import React from "react";
import BannerMain from "../../components/bannerMain/BannerMain";
import Carousel from "../../components/carousel/Carousel";
import data from "../../data/datos-iniciales.json";
import "./Home.scss";

const Home = () => {
  const sliders = data.categorias;

  return (
    <div className="home">
      <div className="banner">
        <BannerMain />
      </div>

      {sliders.map((slider) => (
        <div className="slider_home" key={slider.id}>
          <div className="category_slider">
            <h1
              className="title_category"
              style={{ backgroundColor: slider.cor }}
            >
              {slider.titulo}
            </h1>
            <p>{slider.link_extra.text}</p>
          </div>
          <Carousel slider={slider} />
        </div>
      ))}
    </div>
  );
};

export default Home;
