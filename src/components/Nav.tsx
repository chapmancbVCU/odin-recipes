/******************************************************************************
 * IMPORTS                                                                    *
 *****************************************************************************/
import { Link } from "react-router-dom";
import "../App.css";


/**
 * Renders the Navigation component.
 * @returns HTMLDivElement containing the Navigation component.
 */
function Nav() {
    return (
        <nav>
            <Link className="nav-link home-link" to="/">
                <h2>Odin Recipes Home</h2>
            </Link>
            <ul className="nav-links">
                <Link className="nav-link" to="/breakfast">
                    <li>Breakfast</li>
                </Link>
                <Link className="nav-link" to="/dinner">
                    <li>Dinner</li>
                </Link>
                <Link className="nav-link" to="/desserts">
                    <li>Desserts</li>
                </Link>
            </ul>
        </nav>
    );
};

export default Nav;