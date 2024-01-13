import { useContext, useState, useEffect } from "react";
import { BodiesContext } from "../context/BodiesContext";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import SortedPlanets from "../components/SortedPlanets";
import data from "../data/descriptionPlanets.json";
import Letters from "../components/Letters";
import BackButton from "../components/BackButton";
import anime from "animejs";

export const DetailPlanet = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { bodies } = useContext(BodiesContext);
    const [planets, setPlanets] = useState([]);
    const [currentPlanetIndex, setCurrentPlanetIndex] = useState(0);
    const [animateLetters, setAnimateLetters] = useState(false);
    const [description, setDescription] = useState();

    useEffect(() => {
        setPlanets(SortedPlanets(bodies, "planet"));
    }, [bodies]);

    useEffect(() => {
        const foundIndex = planets.findIndex((planet) => planet.id === id);
        setCurrentPlanetIndex(foundIndex !== -1 ? foundIndex : 0);
    }, [id, planets]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "ArrowLeft") {
                navigateToPlanet(currentPlanetIndex - 1);
            } else if (event.key === "ArrowRight") {
                navigateToPlanet(currentPlanetIndex + 1);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [currentPlanetIndex]);

    const navigateToPlanet = (index) => {
        const newIndex = (index + planets.length) % planets.length;
        const newPlanet = planets[newIndex];

        setCurrentPlanetIndex(() => newIndex);

        navigate(`/planet/${newPlanet.id}`);
    };

    const formatPlanetSize = (vol) => {
        return vol ? ` x 10^${vol.volExponent} km³` : "N/A";
    };

    const currentPlanet = planets[currentPlanetIndex];

    const roundLogEl = document.querySelector(".round-log");
    const roundLogMoonsEl = document.querySelector(".round-moon");
    const roundLogSizeEl = document.querySelector(".round-size");

    useEffect(() => {
        anime({
            targets: roundLogMoonsEl,
            innerHTML: [
                0,
                currentPlanet
                    ? currentPlanet.moons
                        ? currentPlanet.moons.length
                        : 0
                    : "Loading...",
            ],
            delay: 500,
            easing: "linear",
            round: 1,
        });
        anime({
            targets: roundLogEl,
            innerHTML: [
                0,
                currentPlanet ? currentPlanet.gravity : "loading...",
            ],
            easing: "linear",
            delay: 1000,
            round: 10,
        });

        anime({
            targets: roundLogSizeEl,
            innerHTML: [
                0,
                currentPlanet ? currentPlanet.vol.volValue : "loading...",
            ],
            easing: "linear",
            delay: 1500,
            round: 1000,
        });
        anime({
            targets: ".spring-physics .eldetail",
            translateX: ["-100%", 0],
            direction: "alternate",
            autoplay: true,
            loop: false,
            easing: "spring(1, 80, 10, 0)",
        });
        anime({
            targets: ".staggering-direction .el",
            translateX: ["-100%", 0],
            delay: anime.stagger(300, { easing: "easeOutQuad" }),
        });
        anime({
            targets: ".spring-physics .eldescription",
            translateX: ["100%", 0],
            direction: "alternate",
            autoplay: true,
            loop: false,
            easing: "spring(1, 80, 10, 0)",
        });
        anime({
            targets: ".spring-physics .elbuttons",
            translateY: [800, 0],
            direction: "alternate",
            autoplay: true,
            loop: false,
            easing: "spring(1, 80, 10, 0)",
        });

        if (currentPlanet && data.planets[currentPlanetIndex].description) {
            setAnimateLetters(true);
            setDescription(data.planets[currentPlanetIndex].description);
        } else {
            setAnimateLetters(false);
        }
    }, [currentPlanet]);

    return (
        <>
            <BackButton></BackButton>
            <div className="container_detail-planet spring-physics">
                <div className="container_description_info_detail_planet spring-physics">
                    <div className="container_info_detail_planet staggering-direction eldetail">
                        <p className="title_planet el">
                            {currentPlanet
                                ? currentPlanet.englishName
                                : "Loading..."}
                        </p>
                        <p className="el">
                            Moons: <span className="round-moon el"></span>
                        </p>
                        <p className="el">
                            Gravity: <span className="round-log"></span> m/s²
                        </p>
                        <p className="el">
                            Size: <span className="round-size"></span>{" "}
                            {currentPlanet
                                ? formatPlanetSize(currentPlanet.vol)
                                : "Loading..."}
                        </p>
                        <p className="el">
                            Type:{" "}
                            {currentPlanet
                                ? currentPlanet.bodyType
                                : "Loading..."}
                        </p>
                    </div>
                    <div className="container_description_detail_planet eldescription">
                        <Letters
                            playAnimation={animateLetters}
                            description={description}
                        />
                    </div>
                </div>

                <div className="container_image_planet_detail">
                    {currentPlanet ? (
                        <img
                            src={`../assets/${currentPlanet.englishName}.png`}
                            alt=""
                        />
                    ) : (
                        "loading..."
                    )}
                </div>
                {currentPlanet &&
                    currentPlanet.moons &&
                    currentPlanet.moons.length > 0 && (
                        <>
                            <NavLink
                                to={`/moons?moons=${JSON.stringify(
                                    currentPlanet.moons
                                )}`}
                                activeClassName="active-link"
                            >
                                <button className="btn btn-outline-light button_moons eldetail">
                                    Moons
                                </button>
                            </NavLink>
                        </>
                    )}

                <div className="container_buttons spring-physics">
                    <button
                        className="prev btn btn-outline-light elbuttons"
                        onClick={() => navigateToPlanet(currentPlanetIndex - 1)}
                    >
                        Prev
                    </button>
                    <button
                        className="next btn btn-outline-light elbuttons"
                        onClick={() => navigateToPlanet(currentPlanetIndex + 1)}
                    >
                        Next
                    </button>
                </div>
            </div>
        </>
    );
};
