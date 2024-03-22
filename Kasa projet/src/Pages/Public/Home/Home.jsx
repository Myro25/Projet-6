import React from 'react';
import { NavLink } from 'react-router-dom';
import LogementService from "@/_Service/logement.service";

import Card from '@/Components/Card';
import Banner from '@/Components/Banner';

import imgbanner from "@/assets/Image/background.png";


const Home = () => {

    return (
        <section className='pageshome'>
            <Banner pictures={imgbanner} title={"Chez vous, partout et ailleurs"} />

            <ul className='listeCard'>
                {
                    LogementService.GetAllLogement().map((logement) =>
                        <NavLink key={logement.id} to={"/logement/" + logement.id + "/#"}>
                            <Card image={logement.cover} title={logement.title} />
                        </NavLink>
                    )
                }
            </ul>
        </section>


    )

}

export default Home;