import React, { useState } from "react";
import "./Formulario.css"; // 👈 Importamos estilos

function Formulario({ plan }) {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Inscripción enviada para ${nombre} (${email}) al plan ${plan}`);
  };

  return (
    <div className="formulario-container">
      <h1>Formulario de Inscripción</h1>
      <p className="plan-seleccionado">
        Plan seleccionado: <strong>{plan}</strong>
      </p>

      <form className="formulario" onSubmit={handleSubmit}>
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
