// Dans Rating.jsx

import React from 'react';

const Rating = ({ value }) => {
    const renderStars = () => {
        const stars = [];
        const fullStars = Math.round(value);

        // Générer les étoiles pleines
        for (let i = 0; i < fullStars; i++) {
            stars.push(<svg key={i} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FFD700"><path d="M12 1.5l2.36 7.275H21.5l-6.29 4.564 2.366 7.27L12 17.602l-5.276 3.107L8.93 12.339 2.64 7.775H9.88L12 1.5z" /></svg>);
        }

        // Générer les étoiles vides pour compléter jusqu'à 5 étoiles
        for (let i = fullStars; i < 5; i++) {
            stars.push(<svg key={i} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#E3E3E3"><path d="M12 1.5l2.36 7.275H21.5l-6.29 4.564 2.366 7.27L12 17.602l-5.276 3.107L8.93 12.339 2.64 7.775H9.88L12 1.5z" /></svg>);
        }

        return stars;
    };

    return (
        <div className="rating">
            {renderStars()}
        </div>
    );
};

export default Rating;
