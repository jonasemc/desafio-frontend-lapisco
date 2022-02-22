import React, { Component } from "react";
import "./styles.css";

function Card(props) {
  const carta = props.carta;

  return (
    <>
      <div className="card_container">
        <img className="card_avatar" src={carta.picture.medium} />
        <span className="card_nome">
          {carta.name.first + " " + carta.name.last}
        </span>
        <span className="card_genero-idade">
          {carta.gender + " - " + carta.dob.age + " anos"}
        </span>
        <span className="card_numero">{carta.cell}</span>
        <span className="card_email">{carta.email}</span>
      </div>
    </>
  );
}

export default Card;
