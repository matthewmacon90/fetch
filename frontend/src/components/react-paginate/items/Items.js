const Items = ({currentItems}) => {
    return (
        <>
            {currentItems && currentItems.map((item, index) => (
                <div key={index} >
                    {item}
                </div>
            ))}
        </>
    )
};

export default Items;