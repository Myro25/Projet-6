import React, { useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import LogementService from '@/_Service/logement.service';

import Slider from '@/Components/Slider';


// fiche affichant le logement sélectionner 
const FicheLogement = () => {

    const [logement, setlogement] = useState({});
    const [waiting, setwaiting] = useState(true);


    const { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        // eslint-disable-next-line
        getAllInfoLogement();
    }, [id]);

    const getAllInfoLogement = async () => {
        await LogementService.GetOneLogement(id)
            .then((data) => {
                if (data) {
                    setlogement(data);
                    setwaiting(false);
                } else {
                    navigate("/404")
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    console.log(logement)

    if (waiting) return (<h3>Chargement..</h3>)

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
                <div className="details_profil_container">

                </div>
            </div>

        </section>

    );
};

export default FicheLogement;
