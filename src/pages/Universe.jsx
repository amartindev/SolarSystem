import { useContext, useState, useEffect } from "react";
import { BodiesContext } from "../context/BodiesContext";
import { Planet } from "../components/Planet";
import SortedPlanets from "../components/SortedPlanets";
import { ShootingStar } from "../components/ShootingStar";
// import { CSSTransition, SwitchTransition } from "react-transition-group";

export const Universe = () => {
    const [planets, setPlanets] = useState([]);
    const [hoveredPlanet, setHoveredPlanet] = useState(null);
    const [isHoverActive, setIsHoverActive] = useState(false);
    const { bodies } = useContext(BodiesContext);

    useEffect(() => {
        setPlanets(SortedPlanets(bodies))
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
        <ShootingStar number={5}></ShootingStar>
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


