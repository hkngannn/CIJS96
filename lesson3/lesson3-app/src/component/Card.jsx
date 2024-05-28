import "./card.css";
import Img01 from "../assets/001.png";

const Card = () => {
  return (
    <>
      <div className="card">
        <img src={Img01} alt="" />
        <p className="pokemon_id">#0001</p>
        <p className="pokemon_name">Bulbasaur</p>
        <div className="pokemon_class_wrapper">
          <span style={{ color: "black" }}>Grass</span>
          <span style={{ background: "#8E7CC3" }}>Poison</span>
        </div>
      </div>
    </>
  );
};

export default Card;
