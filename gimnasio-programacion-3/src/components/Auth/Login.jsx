import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Guardar estado de login
    localStorage.setItem("auth", true);
    // Redirigir al dashboard
    navigate("/dashboard");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Login</h1>
      <p>Solo para usuarios ya registrados</p>
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}

export default Login;