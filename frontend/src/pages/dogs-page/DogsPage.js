import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DogsPage = () => {
    const location = useLocation();
    const state = location.state;
    const [searchData, setSearchData] = useState(state);
    console.log('searchData', searchData);
    
    
    
    return (
        <div>
            Dogs Page
        </div>
    )
};

export default DogsPage;