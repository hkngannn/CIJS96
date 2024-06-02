import "./card.css";

const Card = (props) => {
  const handleClick = () => {
    alert(props.name + " Xin chào!");
  };

  return (
    <>
      <div className="card" onClick={handleClick}>
        <img src={props.img} alt="" />
        <p className="pokemon_id">{props.id}</p>
        <p className="pokemon_name">{props.name}</p>
        <div className="pokemon_class_wrapper">
          {props.types.map((type, index) => {
            return (
              <span className={type} key={index}>
                {type}
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Card;
