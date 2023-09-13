import React from "react";
import "./VideoCard.scss";
import { Link } from "react-router-dom";

const VideoCard = ({ videoURL, miniatura, videoTitle, color }) => {
  return (
    <div className="video_card" style={{ borderColor: color || "red" }}>
      <Link to={`${videoURL}`}>
        <img src={miniatura} alt="" title={videoTitle} />
      </Link>
    </div>
  );
};

export default VideoCard;
