import { Link } from 'react-router-dom';
import './HomePageStyles.css';

const HomePage = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <div className='home-page-navigation-container'>
                <Link className='home-page-link' to="/login">Login</Link>
                <Link className='home-page-link' to="/search">Search Dogs</Link>
            </div>
            
        </div>
    );
};

export default HomePage;