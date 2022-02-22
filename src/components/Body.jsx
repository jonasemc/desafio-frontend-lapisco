import React from "react";
import "./styles.css";
import { FiSearch } from "react-icons/fi";
import ListaCards from "./ListaCards";
import { useState } from "react";
import { useEffect } from "react";
import { getProfiles } from "../service/getProfiles";
import { filterProfiles } from "../service/filterProfiles";

function Body() {
  const [cartas, setCartas] = useState([]);
  const [todasAsCartas, setTodasAsCartas] = useState([]);

  useEffect(() => {
    atualizaProfiles();
  }, []);

  async function atualizaProfiles() {
    const cartas = await getProfiles();
    setTodasAsCartas(cartas);
    setCartas(cartas);
  }
  function filtrarProfiles(event) {
    const valorParaFiltrar = event.target.value;
    const cartasFiltradas = filterProfiles(todasAsCartas, valorParaFiltrar);
    setCartas(cartasFiltradas);
  }

  return (
    <>
      <div className="container">
        <div className="body_barra-pesquisa">
          <div className="body_barra-pesquisa-container">
            <FiSearch color="#aaaaaa" size={20} />
            <input type="text" onChange={filtrarProfiles} />
          </div>
          <ListaCards cartas={cartas} />
        </div>
      </div>
    </>
  );
}

export default Body;
