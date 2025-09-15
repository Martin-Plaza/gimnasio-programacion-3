import React from "react";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Formulario from "./Formulario";
import "./App.css";  // 👈 importamos los estilos

function Home() {
  const navigate = useNavigate();

  const handleInscribirme = (plan) => {
    navigate("/formulario", { state: { plan } });
  };

  return (
    <div className="container">
      <h1>Inscripción al Gimnasio</h1>
      <p>Seleccioná tu plan:</p>

      <div className="planes">
        <div className="card">
          <h2>Plan Básico</h2>
          <p>$20.000 / mes</p>
          <button onClick={() => handleInscribirme("Básico")}>
            Inscribirme
          </button>
        </div>

        <div className="card">
          <h2>Plan Premium</h2>
          <p>$35.000 / mes</p>
          <button onClick={() => handleInscribirme("Premium")}>
            Inscribirme
          </button>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formulario" element={<FormularioWrapper />} />
      </Routes>
    </BrowserRouter>
  );
}

function FormularioWrapper() {
  const location = useLocation();
  const plan = location.state?.plan || "No seleccionado";
  return <Formulario plan={plan} />;
}

export default App;
