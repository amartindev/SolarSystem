import "./App.scss";
import { Universe } from "./pages/Universe";
import { BodiesProvider } from "./context/BodiesProvider";
import { NavBar } from "./components/NavBar";
import { Route, Routes, Navigate } from "react-router-dom";

export const App = () => {
    return (
        <>
            <BodiesProvider>
                <NavBar></NavBar>
                <div>
                    <Routes>
                        <Route
                            path="/"
                            element={<Universe></Universe>}
                        ></Route> 
                        <Route path="/*" element={<Navigate to="/" />}></Route>
                    </Routes>
                </div>
            </BodiesProvider>
        </>
    );
};
