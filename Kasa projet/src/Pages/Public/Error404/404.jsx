// 404.jsx
import '../../../assets/styles/scss/pages/_404.scss'
import React from 'react';
import { NavLink } from 'react-router-dom';
const Error404 = () => {
    return (
        <div className='error'>
            <h1 className='error__title'>404</h1>
            <p className='error__paragraphe'>Oups! La page que vous demandez n'existe pas.</p>
            <NavLink to="/home" className='error__button'>Retourner sur la page d’accueil</NavLink>
        </div>
    );
};

export default Error404;
