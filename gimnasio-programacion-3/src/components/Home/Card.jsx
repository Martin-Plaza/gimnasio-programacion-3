
const Card = ({name,price,vecesSemana, tipo, inscribirme}) =>{

    
    return(
    <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "10px" }}>
        <h2>{name}</h2>
        <p>${price}/ mes</p>
        <p>veces por semana: {vecesSemana}</p>
        <button onClick={() => inscribirme(tipo)}>Inscribirme</button>
        </div>
    </div>
)};

export default Card;
