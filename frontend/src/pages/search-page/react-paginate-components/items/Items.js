import { useState, useEffect } from 'react';
import './ItemsStyles.css';

const Items = ({currentItems, setUserFilteredItems, searchDogBreeds}) => {
    //Code below will be modified to allow users to select multiple breeds at once to view.
    const [items, setItems] = useState([]);
    const [activeIdx, setActiveIdx] = useState([]);

    useEffect(() => {
        setUserFilteredItems(items);
    }, [items]);

    //Saving this for future use of searching multiple breeds.
    const handleClick = (item, index) => {
        const value = item.target.innerText;
        const updatedItems = items.includes(value) ? items.filter((item) => item !== value) : [value];
        const upatedIdx = activeIdx.includes(index) ? activeIdx.filter((idx) => idx !== index ) : [index];
        setActiveIdx(upatedIdx);
        setItems(updatedItems);
    };


    return (
        <div className="items-container">
            {currentItems && currentItems.map((item, index) => (
                <div className="items-cta-container" key={index}>
                    <button onClick={(e) => searchDogBreeds(e.target.innerText)} className={`items-cta ${activeIdx.includes(index) ? 'item-cta-active' : ''}`}>{item}</button>
                </div>
            ))}
        </div>
    )
};

export default Items;