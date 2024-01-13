import { useContext, useState, useEffect } from "react";
import { BodiesContext } from "../context/BodiesContext";
import SortedPlanets from "../components/SortedPlanets";
import Letters from "../components/Letters";
import data from "../data/descriptionPlanets.json";
import anime from "animejs";
import { NavLink } from "react-router-dom";
import BackButton from "../components/BackButton";

export const DetailSun = () => {
    const { bodies } = useContext(BodiesContext);
    const [sun, setSun] = useState([]);
    const [animateLetters, setAnimateLetters] = useState(false);
    const [description, setDescription] = useState();

    useEffect(() => {
        const [sun] = SortedPlanets(bodies, "sun");
        setSun(sun);
    }, [bodies]);

    useEffect(() => {
        if (sun && data.sun[0].description) {
            setAnimateLetters(true);
            setDescription(data.sun[0].description);
        } else {
            setAnimateLetters(false);
        }
        anime({
            targets: roundLogMoonsEl,
            innerHTML: [0, 8],
            delay: 500,
            easing: "linear",
            round: 1,
        });
        anime({
            targets: roundLogSizeEl,
            innerHTML: [0, sun && sun.mass ? sun.mass.massValue : "loading..."],
            easing: "linear",
            delay: 1500,
            round: 1000,
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
    }, [sun]);

    const formatPlanetSize = (mass) => {
        return mass ? ` x 10^${mass.massExponent} km³` : "N/A";
    };
    const roundLogSizeEl = document.querySelector(".round-size");
    const roundLogMoonsEl = document.querySelector(".round-moon");

    return (
        <>
                <BackButton></BackButton>
            <div className="container_detail-planet spring-physics">
                <div className="container_description_info_detail_planet spring-physics">
                    <div className="container_info_detail_planet staggering-direction eldetail">
                        <p className="title_planet el">
                            {sun ? sun.englishName : "Loading..."}
                        </p>
                        <p className="el">
                            Planets: <span className="round-moon el"></span>
                        </p>
                        <p className="el">
                            Mass: <span className="round-size"></span>{" "}
                            {sun ? formatPlanetSize(sun.mass) : "Loading..."}
                        </p>
                        <p className="el">
                            Type: {sun ? sun.bodyType : "Loading..."}
                        </p>
                    </div>
                    <div className="container_description_detail_planet eldescription">
                        <Letters
                            playAnimation={animateLetters}
                            description={description}
                        />
                    </div>
                </div>

                <div className="container_solei">
                    {sun ? (
                        <img
                            src={`../assets/${sun.englishName}2.jpg`}
                            alt=""
                            className="solei_img"
                        />
                    ) : (
                        "loading..."
                    )}
                </div>
                <NavLink
                to={`/`}
                activeClassName="active-link"
            >
                <button className="btn btn-outline-light button_moons eldetail">
                            Planets
                        </button>
                        </NavLink>
            </div>
        </>
    );
};
