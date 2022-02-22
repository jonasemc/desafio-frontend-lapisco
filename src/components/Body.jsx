import React, { Component } from "react";
import "./styles.css";
import { FiSearch } from "react-icons/fi";
import ListaCards from "./ListaCards";

class Body extends Component {
  render() {
    return (
      <>
        <div className="body_barra-pesquisa">
          <div className="body_barra-pesquisa-container">
            <FiSearch color="#aaaaaa" size={20} />
            <input type="text" />
          </div>
          <ListaCards />
        </div>
      </>
    );
  }
}

export default Body;
