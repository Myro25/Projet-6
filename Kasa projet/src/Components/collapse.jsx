import React, { useState } from 'react';
import flechehaut from "@/assets/Image/FlecheHaut.png";
import flechebas from "@/assets/Image/FlecheBas.png";


const Collapse = ({ title, description, comportement }) => {
    const [open, setOpen] = useState(false);
    const [arrowUp, setArrowUp] = useState(true); // Initialiser la flèche vers le haut

    const toggleCollapse = () => {
        setOpen(!open);
        if (!open) {
            setArrowUp(true); // maj l'état de la flèche uniquement lorsque le Collapse est ouvert
        }
    };

    return (
        <li className='Collapse'>
            <div className="collapse-head" onClick={toggleCollapse}>
                <h2>{title}</h2>
                <span>
                    <img
                        src={arrowUp ? flechehaut : flechebas} // Utilisez l'état de la flèche ici
                        alt="flechesquitourne"
                        className={open ? 'arrow-rotate' : ''} // classe pour la rotation si ouvert
                    />
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
