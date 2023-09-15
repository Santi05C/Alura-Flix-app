import React, { useEffect, useState } from "react";
import "./Carousel.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VideoCard from "../videoCard/VideoCard";
import axios from "axios";

const Carousel = ({ cat }) => {
  // const video = cat;
  // console.log(cat);

  // const filtered = videos.filter((v) => v.category === cat);
  const videos = cat.videos;
  const color = cat.cor;

  // console.log(filtered[0].title);

  // const categoryColor = cat.cor;

  // console.log(cat);
  const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="control-btn" onClick={onClick}>
        <button className="next">
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    );
  };
  const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="control-btn" onClick={onClick}>
        <button className="prev">
          <i class="fa-solid fa-chevron-left"></i>
        </button>
      </div>
    );
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 305,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
      {
        breakpoint: 320,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
      {
        breakpoint: 305,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
      {
        breakpoint: 540,
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
      {
        breakpoint: 991,
        settings: { slidesToShow: 3, slidesToScroll: 3 },
      },
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3, slidesToScroll: 3 },
      },
    ],
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        {videos.map((v) => (
          <div className="container_video_card" key={v._id}>
            <VideoCard
              videoTitle={v.title}
              videoURL={v.url}
              miniatura={v.img}
              color={color}
              // categoryColor={categoryColor}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
