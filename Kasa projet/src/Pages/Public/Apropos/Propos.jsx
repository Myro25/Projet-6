// Propos.jsx
import React from 'react';
import Collapse from '@/Components/collapse'
import aboutData from '@/assets/API/aboutData.json';
import Banner from '@/Components/Banner'

import imgbanner from "@/assets/Image/background.png";

const Propos = () => {
    // Contenu du composant
    return (
        <div>

            <Banner pictures={imgbanner} title={""} />

            <ul>
                {
                    aboutData.map((collapse, index) =>
                        <Collapse key={index} title={collapse.title} description={collapse.content} comportement={"texte"} />
                    )
                }
            </ul>

        </div>
    );
};

export default Propos;
