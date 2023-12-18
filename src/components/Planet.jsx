export const Planet = ({ planet }) => {
    if (!planet) {
        return <div className="tarjeta">Cargando...</div>;
    }

    const { name, englishName, bodyType, moons } = planet;

    return (
        <div className="tarjeta">
            <p>{name}</p>
            <div className="container-planet">
            <img src={`../src/assets/${englishName}.png`} alt="" />
            </div>

            <p>{englishName}</p>
            <p>{bodyType}</p>
            <p>{moons ? moons.length : 0}</p>
        </div>
    );
};
