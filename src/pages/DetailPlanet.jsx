import { useContext, useState, useEffect } from "react";
import { BodiesContext } from "../context/BodiesContext";
import { useNavigate, useParams } from "react-router-dom";
import SortedPlanets from "../components/SortedPlanets";
import data from '../data/descriptionPlanets.json';
import { ShootingStar } from "../components/ShootingStar";

export const DetailPlanet = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { bodies } = useContext(BodiesContext);
    const [planets, setPlanets] = useState([]);
    const [currentPlanetIndex, setCurrentPlanetIndex] = useState(0);

    useEffect(() => {
        setPlanets(SortedPlanets(bodies));
    }, [bodies]);

    useEffect(() => {
        const foundIndex = planets.findIndex((planet) => planet.id === id);
        setCurrentPlanetIndex(foundIndex !== -1 ? foundIndex : 0);
    }, [id, planets]);

    const navigateToPlanet = (index) => {
        const newIndex = (index + planets.length) % planets.length;
        const newPlanet = planets[newIndex];

        setCurrentPlanetIndex(() => newIndex);

        navigate(`/planet/${newPlanet.id}`);
    };

    function formatPlanetSize(vol) {
      if (vol) {
          return `${vol.volValue} x 10^${vol.volExponent} km³`;
      }
      return "N/A";
  }
  
  console.log(data)

    const currentPlanet = planets[currentPlanetIndex];

    return (
        <>
            <ShootingStar number={5}></ShootingStar>
            <p>Name: {currentPlanet ? currentPlanet.englishName : "Loading..."}</p>
            <p>Moons: {currentPlanet ? (currentPlanet.moons ? currentPlanet.moons.length : 0) : "Loading..."}</p>
            <p>Gravity: {currentPlanet ? currentPlanet.gravity : "Loading..."}m/s²</p>
            <p>Size: {currentPlanet ? formatPlanetSize(currentPlanet.vol) : "Loading..."}</p>
            <p>Description: {data.planets ? data.planets[currentPlanetIndex].description : "Loading..." }</p>

            

            <div className="container_buttons">
                <button
                    className="prev btn btn-outline-light"
                    onClick={() => navigateToPlanet(currentPlanetIndex - 1)}
                >
                    Anterior
                </button>
                <button
                    className="next btn btn-outline-light"
                    onClick={() => navigateToPlanet(currentPlanetIndex + 1)}
                >
                    Siguiente
                </button>
            </div>
        </>
    );
};
