import SortedPlanets from "../components/SortedPlanets";
import { useContext, useState, useEffect } from "react";
import { BodiesContext } from "../context/BodiesContext";
import anime from "animejs";

export const DwarfPlanets = () => {
    const { bodies } = useContext(BodiesContext);
    const [dwarfPlanets, setDwarfPlanets] = useState([]);

    const formatPlanetSize = (vol) => {
        return vol ? ` x 10^${vol.volExponent} km³` : "N/A";
    };

    useEffect(() => {
        if (bodies) {
            setDwarfPlanets(SortedPlanets(bodies, "Dwarf Planet"));
        }
    }, [bodies]);

    useEffect(() => {
        if (dwarfPlanets.length > 0) {
            anime({
                targets: '.staggering-grid .eldwarf',
                scale: [
                    { value: .8, easing: 'easeOutSine', duration: 100 },
                    { value: 1, easing: 'easeInOutQuad', duration: 800 }
                ],
                delay: anime.stagger(100, { grid: [4, 1], from: 'center' })
            });
        }
    }, [dwarfPlanets]);


    return (
        <div className="container_moons staggering-grid">
            {dwarfPlanets.map((dwarfPlanet) => (
                <div className="card_moon eldwarf" key={dwarfPlanet.englishName}>
                    {dwarfPlanet && Object.keys(dwarfPlanet).length > 0 ? (
                        <>
                            <img
                                src={`../src/assets/${dwarfPlanet.id}.png`}
                                alt=""
                            />
                            <p>{dwarfPlanet.id}</p>
                            <p className="el">
                                Moons: {dwarfPlanet.moons.length}</p>
                            <p className="el">
                                Gravity:{" "}
                                <span className="round-log">
                                    {dwarfPlanet.gravity}
                                </span>{" "}
                                m/s²
                            </p>
                            <p className="el">
                                Size: {dwarfPlanet.vol.volValue}{" "}
                                {dwarfPlanet
                                    ? formatPlanetSize(dwarfPlanet.vol)
                                    : "Loading..."}
                            </p>
                            <p className="el">
                                Type:{" "}
                                {dwarfPlanet
                                    ? dwarfPlanet.bodyType
                                    : "Loading..."}
                            </p>
                        </>
                    ) : (
                        <p>Cargando...</p>
                    )}
                </div>
            ))}
        </div>
    );
};
