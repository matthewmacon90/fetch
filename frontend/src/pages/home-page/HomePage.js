import {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CarouselComponent from '../../components/carousel/Carousel';
import DogApi from '../../api-utility/dog-api/DogApi';
import fetchLogo from '../../assets/fetch-logo-white.png';
import './HomePageStyles.css';
import '../../components/react-paginate/ReactPaginateStyles.css'; //Messing with pagination styles

const HomePage = () => {
    const [dogImages, setDogImages] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const result = await DogApi.CarouselDogImages();
                setDogImages(result);
            } catch (err) {
                console.error(err);
            }
        }
        fetchData();
    }, []);

    return (
        <div className='home-page-container'>
            <h1>Welcome to <b className='home-text-bold'>Fetch</b>!</h1>
            <div className='home-page-navigation-container'>
                <Link className='home-page-link' to="/login">Login</Link>
                <Link className='home-page-link' to="/search">Search Dogs</Link>
            </div>
            <div className='home-page-main-container'>
                <div className='home-page-description'>
                    <p className='home-page-text'><b className='home-text-bold'>Fetch</b> is a place for families to add a new loving member! Here at <b className='home-text-bold'>Fetch</b> we deeply care for our companions and need great homes for these loveable dogs.</p>
                    <p className='home-page-text'>Please consider adding a new family member <b className='home-text-bold'>today</b>!</p>
                    <Link className='home-page-link' to="/search">Search Dogs</Link>
                </div>
                <div className='home-page-logo-container'>
                    <img className='home-page-logo' src={fetchLogo} alt="Fetch Logo" />
                </div>
            </div>
            <div className='carousel-container'>
               <CarouselComponent images={dogImages} />
            </div>
        </div>
    );
};

export default HomePage;