import { useState, useEffect } from 'react';
import './ItemsStyles.css';

const Items = ({currentItems, setUserFilteredItems}) => {
    const [items, setItems] = useState([]);
    const [activeIdx, setActiveIdx] = useState([]);

    useEffect(() => {
        setUserFilteredItems(items);
    }, [items]);

    const handleClick = (item, index) => {
        console.log(item.target.innerText);
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
                    <button onClick={(e) => handleClick(e, index)} className={`items-cta ${activeIdx.includes(index) ? 'item-cta-active' : ''}`}>{item}</button>
                </div>
            ))}
        </div>
    )
};

export default Items;