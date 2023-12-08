import React, { useState, useEffect } from 'react';
import './Carousel.css'; // Make sure to create this CSS file for styling

interface CarouselItem {
    image: string,
    title: string,
    content: string
}
interface CarouselProps {
    data: CarouselItem[]; // Array of image URLs
}

const Carousel: React.FC<CarouselProps> = ({ data }) => {
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
        console.log(currentIndex)
        if (currentIndex === data.length) {
            setCurrentIndex(0); // Skip to the last image without animation
            setIsTransition(false)
        }
    }

    const extendedImages = [...data, ...data];

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                {/* You can add arrows for next and previous here */}
                <div className="carousel-content-wrapper">
                    <div
                        className="carousel-content"
                        style={{ transform: `translateX(-${(currentIndex) * 83}%)`,
                                transition: !isTransition ? 'none' : 'transform 0.5s ease-in-out' }}
                        onTransitionEnd={handleTransitionEnd}                                
                    >
                        {extendedImages.map((v, index: number) => (
                            <div className='carousel-item'>
                                <img key={index} src={v.image} alt={`Slide ${index}`} />
                                <div className='carousel-title'>{v.title}</div>
                                <div className='carousel-text' >{v.content}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;