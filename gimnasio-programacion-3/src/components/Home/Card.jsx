


import React from "react";
import "./Card.css"; // 👈 CSS separado

const Card = ({ name, price, vecesSemana, tipo, inscribirme }) => {
  return (
    <div className="card-container">
      <div className="card">
        <h2>{name}</h2>
        <p>${price}/ mes</p>
        <p>veces por semana: {vecesSemana}</p>
        <button onClick={() => inscribirme(tipo)}>Inscribirme</button>
      </div>
    </div>
  );
};

export default Card;
