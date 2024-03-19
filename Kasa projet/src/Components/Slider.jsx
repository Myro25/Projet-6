import React, { useState } from 'react';
import '@/assets/styles/scss/components/_slider.scss'

const Slider = ({ pictures }) => {
    const [index, setIndex] = useState(0);

    const handleClickPrev = () => {
        const newIndex = (index === 0) ? pictures.length - 1 : index - 1;
        setIndex(newIndex);
    };

    const handleClickNext = () => {
        const newIndex = (index === pictures.length - 1) ? 0 : index + 1;
        setIndex(newIndex);
    };

    return (
        <div className="slider-container">
            <button className="prev-btn" onClick={handleClickPrev}>&#10094;</button>
            <div className="slideshowSlider" style={{ width: `${pictures.length * 100}%`, transform: `translate3d(${-index * (100 / pictures.length)}%, 0, 0)` }}>
                {pictures.map((picture, idx) => (
                    <div className="slide" key={idx} style={{ width: `${100 / pictures.length}%`, backgroundImage: `url(${picture})` }}></div>
                ))}
            </div>
            <button className="next-btn" onClick={handleClickNext}>&#10095;</button>
        </div>
    );
};

export default Slider;
