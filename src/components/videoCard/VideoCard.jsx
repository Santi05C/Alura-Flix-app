import React from "react";
import "./VideoCard.scss";
import { Link } from "react-router-dom";

function getYouTubeId(youtubeURL) {
  return youtubeURL.replace(
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
    "$7"
  );
}

const VideoCard = ({ videoTitle, videoURL, miniatura }) => {
  const image = `https://img.youtube.com/vi/${getYouTubeId(
    videoURL
  )}/hqdefault.jpg`;
  console.log(image);
  return (
    <div>
      {/* <a
        className="videocard"
        href={videoURL}
        title={videoTitle}
        url={image}
      ></a> */}
      <Link to={`${videoURL}`}>
        <img src={miniatura} alt="" />
      </Link>
    </div>
  );
};

export default VideoCard;
