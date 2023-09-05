import React from "react";
import BannerMain from "../components/bannerMain/BannerMain";
import Carousel from "../components/carousel/Carousel";
import data from "../data/datos-iniciales.json";

const Home = () => {
  // console.log(data);
  return (
    <div>
      <BannerMain />
      <Carousel data={data.categorias[0]} />
      <Carousel data={data.categorias[1]} />
      <Carousel data={data.categorias[2]} />
      <Carousel data={data.categorias[3]} />
      <Carousel data={data.categorias[4]} />
      <Carousel data={data.categorias[5]} />
    </div>
  );
};

export default Home;
