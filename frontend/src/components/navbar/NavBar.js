import { Link } from "react-router-dom";
import './NavBarStyles.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
        </nav>
    )
};

export default NavBar;
