import {useState, useEffect} from "react";
import { useNavigate, Link } from "react-router-dom";
import ReactPaginateComponent from "./react-paginate-components/ReactPaginate";
import DogApi from "../../api-utility/dog-api/DogApi";
import './SearchPageStyles.css';

const SearchPage = () => {
    const [dogBreeds, setDogBreeds] = useState(null);
    const [isAscending, setIsAscending] = useState(true);
    const [userSelectedBreed, setUserSelectedBreed] = useState(null);
    const navigate = useNavigate();
    const numItems = 21;

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await DogApi.getAllDogBreeds();
                setDogBreeds(result);
            } catch (err) {
                err && navigate('/login');
            }
        }
        fetchData();
    }, []);

    const sortDogBreeds = () => {
        const sortedBreeds = [...dogBreeds].sort((a, b) => 
            isAscending ?  b.localeCompare(a) : a.localeCompare(b)
        );
        setDogBreeds(sortedBreeds);
        setIsAscending(!isAscending);
    };

    //Passing this directly until support for multiple breeds is added.
    const searchDogBreeds = async (breed) => {
        try {
            const result = await DogApi.searchDogs({
                breeds: breed //userSelectedBreed
            });
            result && navigate('/dogs', {state: {dogs: result}});
        } catch (err) {
            err && navigate('/login');
        }
    };

    return (
        <div className="search-page-container">
            <h1 className="search-page-title">Search for a dog breed</h1>
            <div className="search-page-cta-container">
                <Link to='/' className='search-page-cta'>Home</Link>
                <button className='search-page-sort-cta' onClick={sortDogBreeds}>Sort Breeds</button>
                <button className='search-page-sort-cta' onClick={searchDogBreeds}>Search Breeds</button>
            </div>

            {dogBreeds && <ReactPaginateComponent items={dogBreeds} itemsPerPage={numItems} setUserFilteredItems={setUserSelectedBreed} searchDogBreeds={searchDogBreeds}/> }
        </div>
    )
};

export default SearchPage;
