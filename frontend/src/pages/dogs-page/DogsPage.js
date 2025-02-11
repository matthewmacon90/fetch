import { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import ReactPaginateComponent from '../../components/react-paginate/ReactPaginateComponent';
import DogsCard from './dogs-components/DogsCard';
import Modal from '../../components/modal/Modal';
import DogApi from '../../api-utility/dog-api/DogApi';
import './DogsPageStyles.css';

const DogsPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const state = location.state;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [userFilters, setUserFilters] = useState([]); //future ability to add filters
    const [dogModal, setDogModal] = useState(null);
    const [searchData, setSearchData] = useState(state);
    const [dogs, setDogs] = useState(null);
    const classNames = ['dogs-page-card-container']
    const dogCards = dogs && dogs.map(dog => <DogsCard key={dog.id} dog={dog} handleModal={handleModal} />);
    
    useEffect(() => {
        async function fetchData() {
            try {
                const result = await DogApi.getDogBreed(state.dogs.resultIds);
                setDogs(result);
            } catch (err) {
                err && navigate('/login');
            }
        }
        fetchData();
    }, [state]);

    const isLastPage = async () => {
        try {
            const result = await DogApi.searchDogsNext(searchData.dogs.next, searchData);
            const newDogs = await DogApi.getDogBreed(result.resultIds);
            setDogs([...dogs, ...newDogs]);
        } catch (err) {
            err && navigate('/login');
        }
    }

    function handleModal(name, img) {
        setDogModal({name, img});
        setIsModalOpen(!isModalOpen);
    };
    
    return (
        <>
            <div className='dogs-page-container'>
                <div className='dogs-page-navigation-container'>
                    <Link className='dog-page-link' to='/'>Home</Link>
                    <Link className='dog-page-link' to='/search'>Search</Link>
                </div>
                {
                    dogs && <ReactPaginateComponent items={dogCards} itemsPerPage={6} setUserFilteredItems={setUserFilters} classNames={classNames} isLastPage={isLastPage} />
                }
            </div>
            {
                isModalOpen && 
                <Modal setIsModalOpen={setIsModalOpen}>
                    <div>
                        <img className='dogs-page-modal-img' src={dogModal.img} alt={dogModal.name} />
                    </div>
                </Modal>
            }
        </>

    )
};

export default DogsPage;