import React from "react";
import "./Carousel.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VideoCard from "../videoCard/VideoCard";

const Carousel = ({ slider }) => {
  const video = slider.videos;
  const categoryColor = slider.cor;

  const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="control-btn" onClick={onClick}>
        <button className="next">
          <i className="fa fa-long-arrow-alt-right"></i>
        </button>
      </div>
    );
  };
  const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="control-btn" onClick={onClick}>
        <button className="prev">
          <i className="fa fa-long-arrow-alt-left"></i>
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
  };
  return (
    <div className="carousel">
      <Slider {...settings}>
        {video.map((video) => (
          <div className="container_video_card" key={video.id}>
            <VideoCard
              videoTitle={video.titulo}
              videoURL={video.url}
              miniatura={video.img}
              categoryColor={categoryColor}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
