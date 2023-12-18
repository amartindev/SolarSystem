import { useEffect, useState } from "react";
import { BodiesContext } from "./BodiesContext";

export const BodiesProvider = ({ children }) => {
    const [bodies, setBodies] = useState([]);
    const [error, setError] = useState(null);

    const fetchProducts = async () => {
        try {
            const response = await fetch("https://api.le-systeme-solaire.net/rest/bodies/");
            const data = await response.json();
            setBodies(data);
        } catch (error) {
            console.error("Error obtaining data. :(", error);
            setError("Error obtaining data. Try again later.");

        }
    };
    

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <BodiesContext.Provider value={{ bodies, error }}>
            {children}
        </BodiesContext.Provider>
    );
};