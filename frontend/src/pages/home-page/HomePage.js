import {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CarouselComponent from '../../components/carousel/Carousel';
import DogApi from '../../api-utility/dog-api/DogApi';
import Api from '../../api-utility/Api';
import fetchLogo from '../../assets/fetch-logo-white.png';
import './HomePageStyles.css';
import '../../components/react-paginate/ReactPaginateStyles.css'; //Messing with pagination styles

const HomePage = () => {
    // const initialState = {
    //     key: 'key',
    //     value: 'value'
    // };
    const [dogImages, setDogImages] = useState([]);
    // const [formData, setFormData] = useState(initialState);
    // const [isLoading, setIsLoading] = useState(false);

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


    //Impact assessment: Commenting out for now
    // const handleChange = (e) => {
    //     setFormData({
    //         ...formData,
    //         [e.target.name]: e.target.value
    //     });
    // };

    // const handleSubmit = async (e) => {
    //     try {
    //         e.preventDefault();
    //         window.dataLayer.push({
    //             event: 'queryParamsEvent',
    //             key: formData.key,
    //             value: formData.value
    //         });
    //         console.log('window dataLayer', window.dataLayer);
    //         const filteredData = window.dataLayer.filter((item) => item.event === 'queryParamsEvent');
    //         const recentQuery = filteredData[filteredData.length - 1];
    //         const { key, value } = recentQuery;
    //         const queryParams = new URLSearchParams({key, value}).toString();
    //         const newUrl = `${window.location.origin}?${queryParams}`;
    //         window.history.pushState(null, '', newUrl);
    //         setIsLoading(true);
    //         const result = await Api.impactApiCall(key, value);
    //         console.log('API RESULT: ', result);
    //         setIsLoading(false);
    //     } catch (err) {
    //         console.error(err);
    //     }
    // };

    return (
        <div className='home-page-container'>
            <h1>Welcome to <b className='home-text-bold'>Fetch</b>!</h1>
            <div className='home-page-navigation-container'>
                <Link className='home-page-link' to="/login">Login</Link>
                <Link className='home-page-link' to="/search">Search Dogs</Link>
            </div>
            {/* <div className='home-page-impact-container'>
                <form className='home-page-impact-form' onSubmit={(e) => handleSubmit(e)}>
                    <label className='home-page-label'>Impact-Assessment API Call</label>
                    <input className='home-page-input' type="text" name="key" placeholder="Enter Key" onChange={handleChange} value={formData.key} />
                    <input className='home-page-input' type="text" name="value" placeholder="Enter Value" onChange={handleChange} value={formData.value} />
                    <button type='submit' className='home-page-link'>Submit</button>
                </form>
                {isLoading ? <p className='home-page-text-impact'>Loading...</p> : <p className='home-page-text-impact'>This API call will be logged in the console.</p>}
            </div>  */}
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