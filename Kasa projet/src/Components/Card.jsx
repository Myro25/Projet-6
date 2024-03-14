import React from 'react';
import { Link } from 'react-router-dom';
import logementsData from '../assets/API/logements.json';
import '../assets/styles/scss/components/_card.scss';



//  Affiche les détails d'un logement et crée un lien vers sa page de détails
const Logement = ({ data }) => {
    const { id, title, description, cover } = data;

    return (
        <div className='logement'>
            <h2 className='logement__title'>{title}</h2>
            {/* Utilisez Link pour envelopper l'image et lier vers la page des détails */}
            <Link to={`/logement/${id}`}>
                <img className='logement__image' src={cover} alt={title} />
            </Link>
        </div>
    );
};

// affiche une liste de logements en utilisant le composant 'Logement' pour chaque élément de la liste
const Card = () => {
    return (
        <>
            <div className="logementdispo">
                {logementsData.map((logement) => (
                    <Logement key={logement.id} data={logement} />
                ))}
            </div>
        </>
    );
};

export default Card;
