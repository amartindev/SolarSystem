import { NavLink } from "react-router-dom";

export const Planet = ({ planet, onMouseEnter, onMouseLeave }) => {
    if (!planet) {
        return <div className="tarjeta">Cargando...</div>;
    }

    return (
        <div
            className="container_planet elplanet"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <NavLink
                to={`/planet/${planet.id}`}
                activeClassName="active-link"
            >
                <img src={`../assets/${planet.englishName}.png`} alt="" />
            </NavLink>
        </div>
    );
};
