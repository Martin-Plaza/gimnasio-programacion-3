import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Formulario from "./Formulario.jsx";
import Login from "./components/Auth/Login.jsx";
import Dashboard from "./components/Dashboard.jsx"; // área privada
import ProtectedRoute from "./components/Routing/Protected/ProtectedRoute.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Público */}
        <Route path="/" element={<Home />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/login" element={<Login />} />

        {/* Privado */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;