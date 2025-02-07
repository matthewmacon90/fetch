import './ItemsStyles.css';

const Items = ({currentItems}) => {
    return (
        <div className="items-container">
            {currentItems && currentItems.map((item, index) => (
                <div className="items-cta-container" key={index}>
                    <button className="items-cta">{item}</button>
                </div>
            ))}
        </div>
    )
};

export default Items;