import { useNavigate } from "react-router-dom";


function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Área Privada</h1>
      <p>Bienvenido al dashboard del gimnasio 🎉</p>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
}

export default Dashboard;