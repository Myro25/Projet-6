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
                    <button onClick={toggleDescription}>Afficher la description</button>
                    {showDescription && (
                        <p className="details_equipments_container">{logement.description}</p>
                    )}
                    <button onClick={toggleEquipments}>Afficher les équipements</button>
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
