import React from "react";
import './style.css';

const Modal = (props) => {
    return (
        <div className="modal">
            <div className="content">
                <img src={props.pokemon.image}/>

                <div className="id">
                <span>ID: </span> <input type="text" value={props.pokemon.id} />
                </div>
                <div className="name">
                    <span>Name: </span> <input type="text" value={props.pokemon.name} />
                </div>
                <div className="type">
                    <span>Type: </span>
                    <select name="" id="">
                    {props.pokemon.types.map(type => (<option>{type}</option>))}
                    </select>
                </div>

                <button className="btn" onClick={props.onClose}>OK</button>
            </div>
        </div>
    )
}

export default Modal;


