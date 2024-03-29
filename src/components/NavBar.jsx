import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand" href="#">
                    <span>Solar System</span>
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink
                                to="/sun"
                                className="nav-link active"
                                aria-current="page"
                                href="#"
                            >
                                <span>Sun</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/"
                                className="nav-link active"
                                aria-current="page"
                                href="#"
                            >
                                <span>Planets</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/dwarfplanets"
                                className="nav-link active"
                                aria-current="page"
                                href="#"
                            >
                                <span>Dwarf Planets</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <a
                                href="https://amartindev.github.io/"
                                className="nav-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span>Antonio Martin</span>
                            </a>
                        </li>
                        <li className="nav-item inscription">
                        <NavLink
                                to="/inscription"
                                className="nav-link active"
                                aria-current="page"
                                href="#"
                            >
                                <span>Inscription</span>
                                </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
