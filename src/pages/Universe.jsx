import { useContext, useState, useEffect } from "react";
import { BodiesContext } from "../context/BodiesContext";
import { Planet } from "../components/Planet";

export const Universe = () => {
    const [planets, setPlanets] = useState([]);
    const [currentPlanetIndex, setCurrentPlanetIndex] = useState(0); // Inicializa con el índice del primer planeta
    const { bodies } = useContext(BodiesContext);

    useEffect(() => {
        const planetsFilter = (bodies.bodies || []).filter(body => body.isPlanet === true);
        const sortedPlanets = planetsFilter.sort((a, b) => a.semimajorAxis - b.semimajorAxis);
        setPlanets(sortedPlanets);
    }, [bodies]);

    const increasePosition = () => {
        if (currentPlanetIndex < planets.length - 1) {
            setCurrentPlanetIndex(currentPlanetIndex + 1);
        }
    };

    const decreasePosition = () => {
        if (currentPlanetIndex > 0) {
            setCurrentPlanetIndex(currentPlanetIndex - 1);
        }
    };

    return (
        <>
            <div className="">
                <button onClick={decreasePosition}>Anterior</button>
                <Planet planet={planets[currentPlanetIndex]}></Planet>
                <button onClick={increasePosition}>Siguiente</button>
            </div>
        </>
    );
};




                {/* para cuando necesite mostrar a todos en un solo lugar:
                 {planets.map((planet) => (
                    <Planet
                        key={planet.id}
                        name={planet.englishName}
                    />
                ))} */}