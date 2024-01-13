import SortedPlanets from "../components/SortedPlanets";
import { useContext, useState, useEffect, useRef } from "react";
import { BodiesContext } from "../context/BodiesContext";
import anime from "animejs";

export const MoonCard = ({ moon, index }) => {
    const { bodies } = useContext(BodiesContext);
    const [lune, setLune] = useState([]);
    const roundLogElRef = useRef(null);

    const moonCounter = (index % 10) + 1;

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
                innerHTML: [
                    0,
                    lune.length > 0 ? lune[0].gravity : "Loading...",
                ],
                easing: "linear",
                delay: 900,
                round: 10000,
            });
        }
        
    }, [lune]);



    function getImageSource() {
        if (lune.length > 0) {
            const imageName = lune[0].englishName;
            const imagePath = `../src/assets/${imageName}.png`;
            const imagePathDefault = `../src/assets/Moon${moonCounter}.png`;
            const imageExists = checkImageExists(imagePath);
            return imageExists ? imagePath : imagePathDefault;
            
        } else {
            
            return "../src/assets/Moon.png";
        }
    }

    function checkImageExists(imagePath) {
        const http = new XMLHttpRequest();
        http.open("HEAD", imagePath, false);
        http.send();
        return http.status !== 404;
    }

    return (
        <div className="card_moon elmoon">
            {lune.length > 0 ? (
                <>

                    <img src={getImageSource()} alt="" />

                    <p>{lune[0].englishName}</p>
                    <p>
                    Gravity:{" "}
                        <span ref={roundLogElRef} className="round-log"></span>
                        m/s²
                    </p>
                </>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
};
