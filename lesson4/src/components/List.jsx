import "./List.css";

const List = (props) => {
  let popup = document.getElementById("popup");

  const openPopUp = () => {
    popup.classList.add("open_popup");
  };

  const closePopUp = () => {
    popup.classList.remove("open_popup");
  };

  return (
    <>
      <div className="list" onClick={openPopUp}>
        <p className="student_id">{props.id}</p>
        <p className="student_name">{props.name}</p>
        <p className="student_total">{props.total}</p>
      </div>

      <div className="popup" id="popup">
        <h2 className="id">{props.id}</h2>
        <h2>{props.name}</h2>
        <p>{props.total}</p>
        <button className="btn" onClick={closePopUp}>
          OK
        </button>
      </div>
    </>
  );
};

export default List;
