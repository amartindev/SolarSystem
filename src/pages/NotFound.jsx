import { NavLink } from "react-router-dom";

export const NotFound = () => {
    return (
        <div className="not_found">
            <h2 className="not_found_img">404</h2>
            <p>In a galaxy far, far away...</p>
            <NavLink to={`/`} activeClassName="active-link">
                <button className="btn btn-outline-light button_moons eldetail">
                    Return to Solar System
                </button>
            </NavLink>
        </div>
    );
};
