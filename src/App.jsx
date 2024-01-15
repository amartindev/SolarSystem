import "./App.scss";
import { Universe } from "./pages/Universe";
import { BodiesProvider } from "./context/BodiesProvider";
import { NavBar } from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import { DetailPlanet } from "./pages/DetailPlanet";
import { DetailSun } from "./pages/DetailSun";
import { Moons } from "./pages/Moons";
import { DwarfPlanets } from "./pages/DwarfPlanets"
import  ShootingStars  from "./components/ShootingStar";
import { NotFound } from "./pages/NotFound";
import OrientationWarning from "./components/OrientationWarning";
import { Inscription } from "./pages/Inscription";

export const App = () => {
    return (
        <>
        <ShootingStars className="shooting_background"></ShootingStars>
            <BodiesProvider>
                <NavBar></NavBar>
                <div>
                <OrientationWarning />  
                    <Routes>
                        <Route path="/" element={<Universe></Universe>}></Route>
                        <Route path="/planet" element={<Universe></Universe>}></Route>
                        <Route path="/planet/:id" element={<DetailPlanet></DetailPlanet>} />
                        <Route path="/sun" element={<DetailSun></DetailSun>}></Route>
                        <Route path="/moons" element={<Moons></Moons>}></Route>
                        <Route path="/dwarfplanets" element={<DwarfPlanets></DwarfPlanets>}></Route>
                        {/* <Route path="/*" element={<Navigate to="/" />}></Route> */}
                        <Route path="/*" element={<NotFound />}></Route>
                        <Route path="/inscription" element={<Inscription></Inscription>}></Route>
                    </Routes>
                </div>
            </BodiesProvider>
        </>
    );
};
