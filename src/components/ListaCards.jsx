import React, { Component } from "react";
import "./styles.css";
import Card from "./Card";
import { useState } from "react";
import { useEffect } from "react";
import { getProfiles } from "../service/getProfiles";

function ListaCards() {
  async function atualizaProfiles() {
    const cartas = await getProfiles();
    setCartas(cartas);
  }

  const [cartas, setCartas] = useState([]);
  useEffect(() => {
    atualizaProfiles();
  }, []);
  return (
    <div className="lista-cards_container">
      {cartas.map((carta) => {
        return <Card carta={carta} />;
      })}
    </div>
  );
}

export default ListaCards;
