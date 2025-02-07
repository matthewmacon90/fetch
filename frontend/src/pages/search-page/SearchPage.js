import {useState, useEffect} from "react";
import ReactPaginateComponent from "./react-paginate-components/ReactPaginate";
import DogApi from "../../api-utility/dog-api/DogApi";
import './SearchPageStyles.css';

const SearchPage = () => {
    const [dogBreeds, setDogBreeds] = useState(null);
    const [numItems, setNumItems] = useState(21);

    useEffect(() => {
        async function fetchData() {
            const result = await DogApi.getAllDogBreeds();
            setDogBreeds(result);
        }
        fetchData();
    }, []);

    return (
        <div className="search-page-container">
            {dogBreeds && <ReactPaginateComponent items={dogBreeds} itemsPerPage={numItems} /> }
        </div>
    )
};

export default SearchPage;
