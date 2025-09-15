import AuthButton from "../Auth/AuthButton"; // ruta según tu estructura
import { MapCard } from "./MapCard";
import Planes from "../API/API"
function Home() {

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <div style={{ display: "flex", justifyContent: "flex-end", padding: "10px" }}>
        <AuthButton />
      </div>

      <h1>Inscripción al Gimnasio</h1>
      <p>Seleccioná tu plan:</p>
      <MapCard planes={Planes}/>

    </div>
  );
}

export default Home;