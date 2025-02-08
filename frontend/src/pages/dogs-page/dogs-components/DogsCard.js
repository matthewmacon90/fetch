import './DogsCardStyles.css';

const DogsCard = ({ dog, handleModal }) => {

    return (
        <div onClick={() => handleModal(dog.name, dog.img)} className="dog-card">
            <div className='dog-card-top'>
                <div className="dog-card-img-container">
                    <img className='dog-card-img' src={dog.img} alt={dog.name} />
                </div>
            </div>
            <div className='dog-card-bottom'>
                <div className="dog-card-info">
                    <h3>Name: {dog.name}</h3>
                    <p>Breed: {dog.breed}</p>
                    <p>Age: {dog.age}</p>
                    <p>Zip Code: {dog.zip_code}</p>
                </div>
            </div>
        </div>
    )
};

export default DogsCard;