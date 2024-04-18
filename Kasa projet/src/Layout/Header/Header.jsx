import logo from '../../assets/Image/logo.png'
import '../../assets/styles/scss/layout/_header.scss'
import { NavLink } from 'react-router-dom';





function Header() {

    return (
        <div className='header'>
            <img src={logo} alt='Kasa' className='header__logo'></img>
            <div id='header__button'>
                {/* //il faut remplacer a par navlink */}
                <NavLink to="/home" className='header__button--' >Accueil</NavLink>
                <NavLink to="/about" className='header__button--'>A propos</NavLink>
            </div>

        </div>

    )
}
export default Header