import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function Formulario() {
  const location = useLocation();
  const { plan } = location.state || {};
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Inscripción enviada para ${nombre} (${email}) al plan ${plan}`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Formulario de Inscripción</h1>
      <p>
        Plan seleccionado: <strong>{plan || "Ninguno"}</strong>
      </p>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "300px",
          margin: "auto",
        }}
      >
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
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Formulario;
