import React, { useState } from 'react';

import flechehaut from "@/assets/Image/FlecheHaut.png";
import flechebas from "@/assets/Image/FlecheBas.png";

const Collapse = ({ title, description, comportement }) => {

    const [open, setOpen] = useState(false);

    const toggleCollapse = () => {
        setOpen(!open);
    };

    return (
        <li className='Collapse'>
            <div className="collapse-head" onClick={toggleCollapse}>
                <h2>{title}</h2>
                <span>
                    <img src={open ? flechehaut : flechebas} alt="flechesquitourne" />
                </span>
            </div>
            {
                comportement === "texte" ? (
                    open && (
                        <div className="collapse-desc">
                            <p>{description}</p>
                        </div>
                    )
                ) : (
                    open && (
                        <ul className="collapse-desc">
                            <li>{description}</li>
                        </ul>
                    )
                )

            }
        </li>
    );
}

export default Collapse;
