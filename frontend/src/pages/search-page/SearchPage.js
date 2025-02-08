import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import ReactPaginateComponent from "./react-paginate-components/ReactPaginate";
import DogApi from "../../api-utility/dog-api/DogApi";
import { BsCheck2 } from "react-icons/bs";
import './SearchPageStyles.css';

const SearchPage = () => {
    const [dogBreeds, setDogBreeds] = useState(null);
    const [isAscending, setIsAscending] = useState(true);
    const [userSelectedBreed, setUserSelectedBreed] = useState(null);
    const navigate = useNavigate();
    const numItems = 21;
    console.log('userSelectedBreed', userSelectedBreed);

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
            isAscending ? a.localeCompare(b) : b.localeCompare(a)
        );
        setDogBreeds(sortedBreeds);
        setIsAscending(!isAscending);
    };

    const searchDogBreeds = async () => {
        try {
            const result = await DogApi.searchDogs({
                breeds: userSelectedBreed
            });
            console.log('result', result);
            result && navigate('/dogs', {state: {dogs: result}});
        } catch (err) {
            err && navigate('/login');
        }
    };



    return (
        <div className="search-page-container">
            <h1 className="search-page-title">Search for a dog breed</h1>
            <div>
                <button className='search-page-sort-cta' onClick={sortDogBreeds}>Sort Breeds</button>
                <button className='search-page-sort-cta' onClick={searchDogBreeds}>Search Breeds</button>
            </div>

            {dogBreeds && <ReactPaginateComponent items={dogBreeds} itemsPerPage={numItems} setUserFilteredItems={setUserSelectedBreed}/> }
        </div>
    )
};

export default SearchPage;
