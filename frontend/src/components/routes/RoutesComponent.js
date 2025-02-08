import { Routes, Route} from 'react-router-dom';
import HomePage from '../../pages/home-page/HomePage';
import SearchPage from '../../pages/search-page/SearchPage';
import LoginPage from '../../pages/login-page/LoginPage';
import DogsPage from '../../pages/dogs-page/DogsPage';

const RoutesComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/dogs" element={<DogsPage />} />
        
        </Routes>
    )
};

export default RoutesComponent;
