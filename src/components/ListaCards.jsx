import React from "react";
import "./styles.css";
import Card from "./Card";

function ListaCards(props) {
  const cartas = props.cartas;
  return (
    <div className="lista-cards_container">
      {cartas.map((carta) => {
        return <Card carta={carta} />;
      })}
    </div>
  );
}

export default ListaCards;
