import logo from '../assets/Image/logo.png'
import background from '../assets/background.png/'
import '../assets/styles/Header.css'


function Header() {

    return (
        <div className='header'>
            <img src={logo} alt='Kasa' className='Kasa-logo'></img>
            <div id='Button-header'>
                {/* //il faut remplacer a par navlink */}
                <a href='#' className='header-button'>Accueil</a>
                <a href='#' className='header-button'>A propos</a>
            </div>

        </div>

    )
}
export default Header