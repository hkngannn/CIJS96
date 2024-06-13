import React from "react";
import "./newrelease.css";

const NewRelease = (props) => {
  return (
    <div className="animes" onClick={props.onClick}>
            <img src={props.image} alt="" />
      <div className="info">
        <p className="episode">Episode {props.episode}</p>
        <p className="name">{props.name}</p>
      </div>
    </div>  

  );
};

export default NewRelease;
