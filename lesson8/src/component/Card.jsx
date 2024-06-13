import React from "react";
import "./card.css";

const Card = ({getData}) => {
  return (
    <>
      {getData && (
        <div className="card">
            <img src={getData.image} />
          <div className="info">
            <h2 className="name">{getData.movieName}</h2>
            <p className="episode">Episode: {getData.episode}</p>
            <p className="description">{getData.description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
