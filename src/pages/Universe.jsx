import { useContext, useState, useEffect } from "react";
import { BodiesContext } from "../context/BodiesContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Planet } from "../components/Planet";

gsap.registerPlugin(ScrollTrigger);


export const Universe = () => {
  const [planets, setPlanets] = useState([]);
  const [currentPlanetIndex, setCurrentPlanetIndex] = useState(0);
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

  const decreasePosition = () => {
    if (currentPlanetIndex === 0) {
      setCurrentPlanetIndex(planets.length - 1);
    } else {
      setCurrentPlanetIndex(currentPlanetIndex - 1);
    }
  };

  const increasePosition = () => {
    if (planets.length - 1 === currentPlanetIndex) {
      setCurrentPlanetIndex(0);
    } else {
      setCurrentPlanetIndex(currentPlanetIndex + 1);
    }
  };
  

  return (
    <>
      <div className="">
        <button onClick={decreasePosition}>Anterior</button>
        <Planet planet={planets} index={currentPlanetIndex} />
        <button onClick={increasePosition}>Siguiente</button>
      </div>
    </>
  );
};
