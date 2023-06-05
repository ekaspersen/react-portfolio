import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import "./nav.css";
const Nav = () => {
    return (
        <header>
            <Link to="/" className="max-h-full">
                <img src={logo} alt="Logo" />
            </Link>

            <nav>
                <ul className="nav-wrapper">
                    <li>
                        <Link to="/mywork" className="nav-button">
                            My Work
                        </Link>
                    </li>
                    <li>
                        <Link to="/education" className="nav-button">
                            Education
                        </Link>
                    </li>
                    <li>
                        <Link to="/aboutme" className="nav-button">
                            About Me
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="nav-button">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Nav;
