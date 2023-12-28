export const Planet = ({ planet, index }) => {
    if (!planet || !planet[index]) {
        return <div className="tarjeta">Cargando...</div>;
    }

    const currentPlanet = planet[index];

    return (
        <div className="tarjeta">
            <p>{currentPlanet.name}</p>
            <div className="container-planet">
                <div className="gallery">
                    <ul className="cards">
                        {planet.map((planet) => (
                            <li key={planet.id}>
                                <img
                                    src={`../src/assets/${planet.englishName}.png`}
                                    alt=""
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <p>{currentPlanet.englishName}</p>
            <p>{currentPlanet.bodyType}</p>
            <p>{currentPlanet.moons ? currentPlanet.moons.length : 0}</p>
        </div>
    );
};
