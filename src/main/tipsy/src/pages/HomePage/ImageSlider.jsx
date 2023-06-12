import React, { useState, useEffect, useRef } from 'react';
import '../../styles/HomePage/ImageSlider.scss';

const ImageSlider = () => {
    const images = [
        require('../../assets/home_img/slide4.png'),
        require('../../assets/home_img/slide1.png'),
        require('../../assets/home_img/slide2.png'),
        require('../../assets/home_img/slide3.png'),
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const slideContainerRef = useRef(null);

    useEffect(() => {
        const slideTimer = setInterval(() => {
            if (!isHovered) {
                nextSlide();
            }
        }, 3000);

        return () => {
            clearInterval(slideTimer);
        };
    }, [isHovered]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className="slide_container"
            ref={slideContainerRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <ul className="slide_list">
                {images.map((image, index) => (
                    <li
                        key={index}
                        className={index === currentIndex ? 'active' : ''}
                        style={{
                            transform: `translateX(${
                                100 * (index - 1 - currentIndex)
                            }%)`,
                            transition: 'transform 0.5s ease-in-out',
                        }}
                    >
                        <img src={image} alt={`bg${index + 1}`} />
                    </li>
                ))}
            </ul>

            <div className="pageOfPages">
                <a href="/event">
                    {currentIndex + 1} / {images.length}
                </a>
            </div>
            <div className="pager">
                {images.map((_, index) => (
                    <a
                        key={index}
                        href="#"
                        className={currentIndex === index ? 'active' : ''}
                        onClick={() => goToSlide(index)}
                    ></a>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
