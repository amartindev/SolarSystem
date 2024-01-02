import { useContext, useState, useEffect } from "react";
import { BodiesContext } from "../context/BodiesContext";
import { Planet } from "../components/Planet";
// import { CSSTransition, SwitchTransition } from "react-transition-group";

export const Universe = () => {
    const [planets, setPlanets] = useState([]);
    const [hoveredPlanet, setHoveredPlanet] = useState(null);
    const [isHoverActive, setIsHoverActive] = useState(false);
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
        setIsHoverActive(true);
    };
    
    const handlePlanetLeave = () => {
        setHoveredPlanet(null);
        setIsHoverActive(false);
    };

    return (
        <>
        <div className="night">
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        </div>
            <img
                className="sun_universe"
                src="../src/assets/sun_sf.png"
                alt=""
            />
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
                {/* <SwitchTransition> */}
                    {hoveredPlanet && (
                        // <CSSTransition
                        //     key={hoveredPlanet.englishName || "defaultKey"}
                        //     addEndListener={(node, done) =>
                        //         node.addEventListener(
                        //             "transitionend",
                        //             done,
                        //             false
                        //         )
                        //     }
                        //     classNames="fade"
                        // >
                            <div className="planet_name">
                            <h2>{hoveredPlanet.englishName}</h2>
                            </div>
                        // </CSSTransition>
                    )}
                {/* </SwitchTransition> */}
            </div>
            <div className={`container_buttons ${isHoverActive ? 'active' : ''}`}>
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
