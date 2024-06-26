import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import LogementService from '@/_Service/logement.service';
import Slider from '@/Components/Slider';
import Collapse from '@/Components/collapse';
import Rating from '@/Components/rating';  // Importer le composant Collapse

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

    const displayequipments = (equipments) => {
        return (
            <ul>
                {equipments.map((equipement, index) => {
                    return (
                        <li key={index}>{equipement}</li>
                    )
                })}
            </ul>
        )
    }

    // chargement de la page 
    if (waiting) return <h3>Chargement..</h3>;
    // retourne les informations de la page personnalisé
    return (
        <section className='SectionLogement'>
            <Slider pictures={logement.pictures} /> {/* Mettre les slides tout en haut */}
            <div className="details_container">
                <div className="details_left_container">
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
                </div>
                <div className="details_right_container">
                    <div className="details_profil_container">
                        <h4>{logement.host.name}</h4>
                        <img src={logement.host.picture} alt={logement.host.name} />
                    </div>
                    <ul>
                        <Rating value={logement.rating} />
                    </ul>
                </div>
            </div>
            <div className="details_container_details">
                {/* Collapse pour la description */}
                <Collapse
                    title="Description"
                    description={logement.description}
                    comportement="texte"
                />
                {/* Collapse pour les équipements */}
                <Collapse
                    title="Équipements"
                    description={displayequipments(logement.equipments)} // Si logement.equipments est un tableau, le transformer en une chaîne de caractères séparée par une virgule
                    comportement="liste"
                />
            </div>
        </section>
    );


};

export default FicheLogement;
