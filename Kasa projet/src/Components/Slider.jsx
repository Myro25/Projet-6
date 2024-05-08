import React, { useState } from 'react';
import '@/assets/styles/scss/components/_slider.scss'; // Importation du fichier CSS pour le style du slider

const Slider = ({ pictures }) => {
    // État local pour stocker l'index de l'image actuellement affichée
    const [index, setIndex] = useState(0);

    // Fonction pour gérer le clic sur le bouton précédent
    const handleClickPrev = () => {
        const newIndex = (index === 0) ? pictures.length - 1 : index - 1;
        setIndex(newIndex);
    };

    // Fonction pour gérer le clic sur le bouton suivant
    const handleClickNext = () => {
        const newIndex = (index === pictures.length - 1) ? 0 : index + 1;
        setIndex(newIndex);
    };

    // Détermine si les flèches de navigation doivent être affichées en fonction du nombre d'images
    const showArrows = pictures.length > 1;

    return (
        <div className="slider-container">
            {/* Affichage du bouton précédent s'il y a plus d'une image */}
            {showArrows && <button className="prev-btn" onClick={handleClickPrev}>&#10094;</button>}
            {/* Conteneur de la diapositive */}
            <div className="slideshowSlider" style={{ width: `${pictures.length * 100}%`, transform: `translate3d(${-index * (100 / pictures.length)}%, 0, 0)` }}>
                {/* Affichage de chaque image */}
                {pictures.map((picture, idx) => (
                    <div className="slide" key={idx} style={{ width: `${100 / pictures.length}%`, backgroundImage: `url(${picture})` }}></div>
                ))}
            </div>
            {/* Affichage du bouton suivant s'il y a plus d'une image */}
            {showArrows && <button className="next-btn" onClick={handleClickNext}>&#10095;</button>}
            {/* Affichage du numéro de la photo actuelle */}
            <div className="photo-number">{`${index + 1}/${pictures.length}`}</div>
        </div>
    );
};

export default Slider;
