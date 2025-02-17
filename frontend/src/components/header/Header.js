import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../navbar/NavBar';
import fetchLogo from '../../assets/fetch-logo-white.png';
import fetchLogoFilled from '../../assets/fetch-logo-filled.png';
import './HeaderStyles.css';

const Header = () => {
    const [logo, setLogo] = useState(fetchLogo);

    return (
        <header className="header">
            <div className='header-logo-container'>
                <Link to="/" >
                    <img className='header-logo' src={logo} 
                        alt="Fetch Logo" 
                        onMouseEnter={() => setLogo(fetchLogoFilled)}
                        onMouseLeave={() => setLogo(fetchLogo)}
                    />
                </Link>
            </div>
            <NavBar />
        </header>
    )
};

export default Header;
