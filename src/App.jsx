import "./App.scss";
import { Universe } from "./pages/Universe";
import { BodiesProvider } from "./context/BodiesProvider";
import { NavBar } from "./components/NavBar";
import { Route, Routes, Navigate } from "react-router-dom";
import { DetailPlanet } from "./pages/DetailPlanet";
import { DetailSun } from "./pages/DetailSun";
import { Moons } from "./pages/Moons";
import  ShootingStars  from "./components/ShootingStar";

export const App = () => {
    return (
        <>
        <ShootingStars className="shooting_background"></ShootingStars>
            <BodiesProvider>
                <NavBar></NavBar>
                <div>
                    <Routes>
                        <Route path="/" element={<Universe></Universe>}></Route>
                        <Route
                            path="/planet"
                            element={<Universe></Universe>}
                        ></Route>
                        <Route path="/planet/:id" element={<DetailPlanet></DetailPlanet>} />
                        <Route path="/sun" element={<DetailSun></DetailSun>}></Route>
                        <Route path="/moons" element={<Moons></Moons>}></Route>
                        <Route path="/*" element={<Navigate to="/" />}></Route>
                    </Routes>
                </div>
            </BodiesProvider>
        </>
    );
};
