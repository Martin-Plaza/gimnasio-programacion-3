import { useNavigate } from "react-router-dom";

function Home() {
const navigate = useNavigate();

const handleInscribirme = (plan) => {
    // redirige a /formulario y pasa el plan como estado
    navigate("/formulario", { state: { plan } });
};

return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
    <h1>Inscripción al Gimnasio</h1>
    <p>Seleccioná tu plan:</p>

    <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <div
        style={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "10px",
        }}
        >
        <h2>Plan Básico</h2>
        <p>$20.000 / mes</p>
        <button onClick={() => handleInscribirme("Básico")}>
            Inscribirme
        </button>
        </div>

        <div
        style={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "10px",
        }}
        >
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

export default Home;