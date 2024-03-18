import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import LogementService from '@/_Service/logement.service';
import Slider from '@/Components/Slider';
import '@/assets/styles/scss/pages/_fiche-logement.scss';

const FicheLogement = () => {
    const [logement, setLogement] = useState({});
    const [waiting, setWaiting] = useState(true);
    const [showEquipments, setShowEquipments] = useState(false);
    const [showDescription, setShowDescription] = useState(false);

    const { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        getAllInfoLogement();
    }, [id]);

    const getAllInfoLogement = async () => {
        try {
            const data = await LogementService.GetOneLogement(id);
            if (data) {
                setLogement(data);
                setWaiting(false);
            } else {
                navigate("/404");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const toggleEquipments = () => {
        setShowEquipments(!showEquipments);
    };

    const toggleDescription = () => {
        setShowDescription(!showDescription);
    };

    // chargement de la page 
    if (waiting) return <h3>Chargement..</h3>;
    // retourne les informations de la page personnalisé
    return (
        <section className='SectionLogement'>
            <Slider pictures={logement.pictures} />
            <div className="details_container">
                <div className="details_title_container">
                    <article className="title_container">
                        <h2>{logement.title}</h2>
                        <h3>{logement.location}</h3>
                    </article>
                </div>
                <div className="details_tag_container">
                    {logement.tags.map((tag, index) => (
                        <p key={index}>{tag}</p>
                    ))}
                </div>
                <div className="details_profil_container">
                    <h4>{logement.name}</h4>
                    <img src={logement.picture} alt={logement.name} />
                </div>
                <div className="details_container_details">
                    <button onClick={toggleDescription}>
                        Description
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M14.7897 10.7897C15.4591 10.1202 16.5462 10.1202 17.2157 10.7897L27.4979 21.0719C28.1674 21.7414 28.1674 22.8285 27.4979 23.4979C26.8285 24.1673 25.7414 24.1673 25.072 23.4979L16 14.4259L6.92804 23.4926C6.25862 24.162 5.17148 24.162 4.50206 23.4926C3.83265 22.8231 3.83265 21.736 4.50206 21.0666L14.7843 10.7843L14.7897 10.7897Z" fill="white" />
                        </svg>
                    </button>
                    {showDescription && (
                        <p className="details_equipments_container">{logement.description}</p>
                    )}
                    <button onClick={toggleEquipments}>
                        Équipements
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M14.7897 10.7897C15.4591 10.1202 16.5462 10.1202 17.2157 10.7897L27.4979 21.0719C28.1674 21.7414 28.1674 22.8285 27.4979 23.4979C26.8285 24.1673 25.7414 24.1673 25.072 23.4979L16 14.4259L6.92804 23.4926C6.25862 24.162 5.17148 24.162 4.50206 23.4926C3.83265 22.8231 3.83265 21.736 4.50206 21.0666L14.7843 10.7843L14.7897 10.7897Z" fill="white" />
                        </svg>
                    </button>
                    {showEquipments && (
                        <div className="details_description_container">
                            {logement.equipments.map((equipment, index) => (
                                <p key={index}>{equipment}</p>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default FicheLogement;
