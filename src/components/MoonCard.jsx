import SortedPlanets from "../components/SortedPlanets";
import { useContext, useState, useEffect, useRef } from "react";
import { BodiesContext } from "../context/BodiesContext";
import anime from "animejs";

export const MoonCard = ({ moon }) => {
    const { bodies } = useContext(BodiesContext);
    const [lune, setLune] = useState([]);
    const roundLogElRef = useRef(null);

    useEffect(() => {
        if (moon && bodies) {
            setLune(SortedPlanets(bodies, moon));
        }
    }, [moon, bodies]);

    useEffect(() => {
        const roundLogEl = roundLogElRef.current;
        if (roundLogEl) {
            anime({
                targets: roundLogEl,
                innerHTML: [0, lune.length > 0 ? lune[0].gravity : "Loading..."],
                easing: "linear",
                // delay: 1000,
                round: 10000,
            });
        }
    }, [lune]);

    return (
        <div className="card_moon">
            {lune.length > 0 ? (
                <>
                    <p>{lune[0].englishName}</p>
                    <p>
                        Gravedad: <span ref={roundLogElRef} className="round-log"></span>m/s²
                    </p>
                </>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
};
