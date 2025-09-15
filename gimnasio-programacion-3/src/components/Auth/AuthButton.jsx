import { useNavigate } from "react-router-dom";

function AuthButton() {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("auth");

  const handleClick = () => {
    if (isAuthenticated) {
      // Logout
      localStorage.removeItem("auth");
      navigate("/");
    } else {
      // Login
      navigate("/login");
    }
  };

  return (
    <button onClick={handleClick}>
      {isAuthenticated ? "Cerrar sesión" : "Login"}
    </button>
  );
}

export default AuthButton;