import React from "react";
import "./styles.css";

function Card(props) {
  const carta = props.carta;

  return (
    <>
      <div className="card_container">
        <div className="card_avatar">
          <img src={carta.picture.medium} />
        </div>
        <div className="card_container-info">
          <span className="card_nome">
            {carta.name.first + " " + carta.name.last}
          </span>
          <span className="card_genero-idade">
            {carta.gender + " - " + carta.dob.age + " anos"}
          </span>
          <span className="card_numero">{carta.cell}</span>
          <span className="card_email">{carta.email}</span>
        </div>
      </div>
    </>
  );
}

export default Card;
