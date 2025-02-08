import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DogsCard from './dogs-components/DogsCard';
import Modal from '../../components/modal/Modal';
import DogApi from '../../api-utility/dog-api/DogApi';
import './DogsPageStyles.css';

const DogsPage = () => {
    const location = useLocation();
    const state = location.state;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [dogModal, setDogModal] = useState(null);
    const [searchData, setSearchData] = useState(state);
    const [dogs, setDogs] = useState(null);
    console.log('searchData', searchData);
    
    useEffect(() => {
        async function fetchData() {
            try {
                console.log('state', state);
                const result = await DogApi.getDogBreed(state.dogs.resultIds);
                setDogs(result);
                console.log('result', result);
            } catch (err) {
                console.error('dogs page', err);
            }
        }
        fetchData();
    }, [state]);

    const handleModal = (name, img) => {
        setDogModal({name, img});
        setIsModalOpen(!isModalOpen);
    };
    
    return (
        <>
            <div className='dogs-page-container'>
                <div className='dogs-page-card-container'>
                    {dogs && 
                        dogs.map(dog => <DogsCard key={dog.id} dog={dog} handleModal={handleModal} />)
                    }
                </div>
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