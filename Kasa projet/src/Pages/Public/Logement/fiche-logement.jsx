import React from 'react';
import logementsData from '../../../../src/assets/API/logements.json';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
// fiche affichant le logement sélectionner 
const FicheLogement = (props) => {
    const { id } = useParams();


    // Trouver le logement correspondant à l'ID dans les données
    const logement = logementsData.find(item => item.id === id);

    // Si le logement n'est pas trouvé redirige vers la page 404
    if (!logement) {
        return <NavLink to="/404" />;
    }
    // Extraire les détails du logement
    const { title, description, cover, pictures, equipments } = logement;

    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <ul>
                <li>{equipments}</li>
            </ul>
            <img src={cover} alt={title} />
            <img src={pictures} alt={title} />
            {/* Afficher d'autres détails du logement ici et problème lors de l'ajout d'un détail parent contenant des enfants (host) */}

        </div>
    );
};

export default FicheLogement;
