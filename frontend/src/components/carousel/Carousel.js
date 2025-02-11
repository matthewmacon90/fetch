import { useState, useEffect } from 'react';
import './CarouselStyles.css';

function CarouselComponent({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        setFadeIn(true);
        if (images.length > 0) {
            const intervalId = setInterval(() => {
                setFadeIn(false);
                setTimeout(() => {
                    setCurrentIndex(Math.floor(Math.random() * images.length));
                    setFadeIn(true);
                }, 500);
            }, 5000);

            return () => clearInterval(intervalId);
        }
    }, [images.length]);

    return (
        <div className="carousel-item">
            {images.length > 0 && (
                <img 
                    className={`carousel-img ${fadeIn ? 'show' : ''}`} 
                    src={images[currentIndex]} 
                    alt="Carousel Item" 
                />
            )}
        </div>
    );
}

export default CarouselComponent;
