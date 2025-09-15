import Card from "./Card"
import { useNavigate } from "react-router-dom";

export const MapCard = ({planes}) => {
    const navigate = useNavigate();
    const handleInscribirme = (plan) => {
    navigate("/formulario", { state: { plan } });
};
return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap"}}>
    {planes.map((plan, index) =>(
        <Card key={index} 
        name={plan.name} 
        price={plan.price} 
        vecesSemana={plan.vecesSemana} 
        tipo={plan.tipo}
        inscribirme={handleInscribirme}
        />
    ))}
    </div>
)}
