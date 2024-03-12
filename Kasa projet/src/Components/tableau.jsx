import '../assets/styles/tableau.css'
import logementsData from '../assets/API/logements.json';

// Affiche les informations de logementsData et les fonctions Tableau
const Logement = ({ data }) => {
    const { title, description, cover } = data;

    return (
        <div className='logement'>
            <h2>{title}</h2>
            <img src={cover} alt={title} />

        </div>
    );
};

// Modifiez la fonction Tableau pour utiliser le composant Logement et les données logementsData
const Tableau = () => {
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

export default Tableau;