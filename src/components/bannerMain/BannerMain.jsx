import React from "react";
import "./BannerMain.scss";

const BannerMain = () => {
  return (
    <div className="bannerMain">
      <div className="container">
        <div className="title">
          <h2>Challenge React</h2>
          <p>
            Este challenge es una forma de apredizaje. es un mecanismo donde
            prodras comprometerte en la resolución de un problema para poder
            aplicar todos los conocimientos adquiridos en la formación react.
          </p>
        </div>
        <div className="video">
          <iframe
            width="50"
            height="315"
            src="https://www.youtube.com/embed/ov7vA5HFe6w?si=TG-NnMLHNTBxQ6MW"
            title="YouTube video player"
            // frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            // allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default BannerMain;
