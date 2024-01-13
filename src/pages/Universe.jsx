import { useContext, useState, useEffect } from "react";
import { BodiesContext } from "../context/BodiesContext";
import { Planet } from "../components/Planet";
import SortedPlanets from "../components/SortedPlanets";
import { NavLink } from "react-router-dom";

import anime from "animejs";
// import { CSSTransition, SwitchTransition } from "react-transition-group";

export const Universe = () => {
    const [planets, setPlanets] = useState([]);
    const [hoveredPlanet, setHoveredPlanet] = useState(null);
    const [isHoverActive, setIsHoverActive] = useState(false);
    const { bodies } = useContext(BodiesContext);

    useEffect(() => {
        setPlanets(SortedPlanets(bodies, "planet"));
    }, [bodies]);

    const handlePlanetHover = (planet) => {
        setHoveredPlanet(planet);
        setIsHoverActive(true);
    };

    const handlePlanetLeave = () => {
        setHoveredPlanet(null);
        setIsHoverActive(false);
    };
    useEffect(() => {
        anime({
            targets: ".range-value-staggering-sun .elsun",
            translateX: [-150, 0],
            translateY: [0, 50],
            rotate: [0, 10],
            easing: "easeInOutSine",
        });
        anime({
            targets: ".range-value-staggering .elplanet",
            translateY: [-270, 0],
            delay: anime.stagger(100, { from: "center" }),
        });
    }, [planets]);

    return (
        <>
            <div className="range-value-staggering-sun">
                <img
                    className="sun_universe elsun"
                    src="../src/assets/sun_sf.png"
                    alt=""
                />
            </div>

            <div className="container_universe range-value-staggering">
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
            <div
                className={`container_buttons ${isHoverActive ? "active" : ""}`}
            >
                <NavLink
                to={`/sun`}
                activeClassName="active-link"
            >
                <button className="btn btn-outline-light">Sun</button>
                </NavLink>
                <NavLink
                to={`/dwarfplanets`}
                activeClassName="active-link"
            >
                <button className="btn btn-outline-light">Dwarf Planets</button>
                </NavLink>
            </div>
        </>
    );
};
