import '../../src/assets/styles/scss/components/_card.scss'
import logementsData from '../assets/API/logements.json';

// Affiche les informations de logementsData et les fonctions Tableau
const Logement = ({ data }) => {
    const { title, description, cover } = data;

    return (
        <div className='logement'>
            <h2 className='logement__title'>{title}</h2>
            <img className='logement__image' src={cover} alt={title} />

        </div>
    );
};

// Modifiez la fonction Tableau pour utiliser le composant Logement et les données logementsData
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