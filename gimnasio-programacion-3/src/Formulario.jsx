import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Formulario.css"; // 👈 importa tu CSS acá

function Formulario() {
  const location = useLocation();
  const { plan } = location.state || {};

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [dni, setDni] = useState("");
  const [localidad, setLocalidad] = useState("");
  const [telefono, setTelefono] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Inscripción enviada:\n
      Nombre: ${nombre}\n
      Email: ${email}\n
      DNI: ${dni}\n
      Localidad: ${localidad}\n
      Teléfono: ${telefono}\n
      Plan: ${plan || "Ninguno"}`
    );
  };

  return (
    <div className="formulario-container">
      <h1>Formulario de Inscripción</h1>
      <p className="plan-seleccionado">
        Plan seleccionado: <strong>{plan || "Ninguno"}</strong>
      </p>

      <form onSubmit={handleSubmit} className="formulario">
        <input
          type="text"
          placeholder="Tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Tu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Tu DNI"
          value={dni}
          onChange={(e) => setDni(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Tu localidad"
          value={localidad}
          onChange={(e) => setLocalidad(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Tu teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Formulario;
