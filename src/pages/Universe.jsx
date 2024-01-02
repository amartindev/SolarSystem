import { useContext, useState, useEffect } from "react";
import { BodiesContext } from "../context/BodiesContext";
import { Planet } from "../components/Planet";

export const Universe = () => {
    const [planets, setPlanets] = useState([]);
    const [hoveredPlanet, setHoveredPlanet] = useState(null);

    const { bodies } = useContext(BodiesContext);

    useEffect(() => {
        const planetsFilter = (bodies.bodies || []).filter(
            (body) => body.isPlanet === true
        );
        const sortedPlanets = planetsFilter.sort(
            (a, b) => a.semimajorAxis - b.semimajorAxis
        );
        setPlanets(sortedPlanets);
    }, [bodies]);

    const handlePlanetHover = (planet) => {
        setHoveredPlanet(planet);
    };

    const handlePlanetLeave = () => {
        setHoveredPlanet(null);
    };

    return (
        <>
            <img className="sun_universe" src="../src/assets/sun_sf.png" alt="" />
            <div className="container_universe">
                <h1 className="title">Solar System</h1>
                <div className="container_solaris">
                    {planets.map((planet) => (
                        <Planet
                            key={planet.id}
                            planet={planet}
                            onMouseEnter={() => handlePlanetHover(planet)}
                            onMouseLeave={handlePlanetLeave}
                        />
                    ))}
                </div>
                {hoveredPlanet && (
                    <div className="planet-name">
                        <h2>{hoveredPlanet.englishName}</h2>
                    </div>
                )}
            </div>
            <div className="container_buttons">
                <button className="btn btn-outline-light">Sun</button>
                <button className="btn btn-outline-light">Dwarf Planets</button>
            </div>
        </>
    );
};

// const [currentPlanetIndex, setCurrentPlanetIndex] = useState(0);

// const decreasePosition = () => {
//     if (currentPlanetIndex === 0) {
//     setCurrentPlanetIndex(planets.length - 1);
//     } else {
//     setCurrentPlanetIndex(currentPlanetIndex - 1);
//     }
// };

// const increasePosition = () => {
//     if (planets.length - 1 === currentPlanetIndex) {
//     setCurrentPlanetIndex(0);
//     } else {
//     setCurrentPlanetIndex(currentPlanetIndex + 1);
//     }
// };

// <button className="prev" onClick={decreasePosition}>Anterior</button>
// <button className="next" onClick={increasePosition}>Siguiente</button>
