import React, { useState, useEffect } from 'react';
import './Carousel.css'; // Make sure to create this CSS file for styling

interface TextCarouselProps {
    data: string[]; // Array of image URLs
}

const TextCarousel: React.FC<TextCarouselProps> = ({ data }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isTransition, setIsTransition] = useState(true)
    useEffect(() => {
        const interval = setTimeout(() => {
            if (currentIndex === 0) setIsTransition(true)
            goToNext()
        }, 3000)
        return () => clearTimeout(interval)
    }, [currentIndex])
    
    const goToNext = () => {
        setCurrentIndex(prevIndex => prevIndex+1)
    };

    const handleTransitionEnd = () => {
        if (currentIndex === data.length) {
            setCurrentIndex(0); // Skip to the last image without animation
            setIsTransition(false)
        }
    }

    const extendedData = [...data, ...data];

    return (
        <div className="text-carousel-container">
            <div
                className="text-carousel-content"
                style={{ transform: `translateY(-${(currentIndex) * 100}%)`,
                        transition: !isTransition ? 'none' : 'transform 0.5s ease-in-out' }}
                onTransitionEnd={handleTransitionEnd}                                
            >
                {extendedData.map((value, index: number) => (
                    <div className='text-carousel-item'>
                        {value}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TextCarousel;