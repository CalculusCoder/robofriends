import React from "react";
import './Card.css';


const Card = (props) => {
    return (
        <div className="robot-container">
            <img alt="robos" src={`https://robohash.org/${props.id}`}/>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>

    );
}

export default Card;