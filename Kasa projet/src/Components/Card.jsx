import React from 'react';


const Card = ({ image, title }) => {
    return (
        <div className='Card'>
            <div className="Card__content">
                <img src={image} alt="Card d'un logement" className="Card__image" />

                <h2 className="Card__title">{title}</h2>
            </div>
        </div>
    );
};

export default Card;
